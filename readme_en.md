# AI-Powered Smart Electronic Eye for Urban Traffic
---

### Introduction

![image](./images/vue.png)

This is an intelligent application project intended for laboratory simulation only. The environment used for this project is `Python 3.11.11` on `Windows 11` with `anaconda`. The final detection result looks roughly like this:

![gif](./images/ret.gif)

### Installation
```bash
# Create a virtual environment
conda create -n proj python=3.11.11
conda activate proj

# Install tb-nightly first. On Windows you need to install it separately,
# so download a suitable wheel by yourself.
pip install whl\tb_nightly-2.20.0a20250314-py3-none-any.whl

# Then install the CUDA-enabled PyTorch build.
# I recommend using pip/conda directly here because it is less troublesome.
conda install pytorch==2.5.1 torchvision==0.20.1 torchaudio==2.5.1 pytorch-cuda=12.1 -c pytorch -c nvidia

# Install Flash Attention afterwards.
# I did not install it because my RTX 3050 Laptop does not support it.
# pip install whl\flash_attn-2.5.8-cp311-cp311-win_amd64.whl

# Finally install the remaining dependencies
pip install -r requirements.txt
```

Because this project needs `llama-cpp-python`, you also need a working C/C++ build environment. I ran into issues on `Ubuntu`, and this setup fixed them:

```bash
# Basic update and installation
apt update && apt upgrade -y
apt install build-essential cmake

# Configure the compiler toolchain
export CC=/usr/bin/gcc
export CXX=/usr/bin/g++
```

After that, download all model files from the repository Releases page and overwrite the files inside `models`.

**Start all components**

```bash
python initialize.py  # Split and generate the lane mask, then exit automatically
python loop.py        # Start the blocking background process manager
python main.py        # Analyze the video and export results, then exit automatically

# Want to check whether things work?
python test.py --env        # Test only EnvAnalyzer
python test.py --report     # Test only the PDF interface
```

### Details

The project is composed of the following parts:

#### 1. NLP Module

`DeepSeekServe` is the backend controller used to manage the output of `Llama-2`, and on top of that it wraps `LargeLanguageModelManager`.

See `modules\agent.py` for details. It provides convenient switching functions and can also be embedded into other modules.

This module has also been split out as a standalone project:

```bash
git clone https://github.com/hhhhc-da/llm-manager-ethink-export-gpt.git
```

Finally, `Bert` is used to classify `LLM` outputs. At this level many people would probably move to a workflow engine, but I still wrote it manually. See `source\bert` for the implementation.

![image](./images/bert_c.png)

#### 2. Word to PDF

Because I use `Windows`, this part calls `Microsoft Office`. `Linux` users should pay extra attention here.

![image](./images/pdf.png)

#### 3. Video Module

I rewrote the inference logic for the `Video` module and wrapped `YOLOv12` directly inside `modules\processor.py`. If you are familiar with the stack, you can switch it to `ultralytics` yourself, so I did not bother splitting object detection into a separate front-loaded module.

The lane environment estimated directly by the vision algorithm still relies on fairly strong assumptions. If you replace the video source, you should analyze and adjust that part as well. The relevant code comes from `modules.analyzer.EnvAnalyzer`:

```python
class EnvAnalyzer():
    # Many details omitted here, search for this function in the codebase
    def _cv_analyze_lane_info(self):
        '''
        Compute lane information and finally output the rendered mask
        '''
        self._cv_fetch_image(  # Read the image into self.init_image without locking
            path = r'E:\pandownload1\ML\Police\Project\source\lane.jpg',
            method = 'local'
        )
        # Feature conversion and filtering
        threshold = self._cv_feature_convert()
        # Detect zebra crossing information and output the y-axis filter range
        non_zero_indices = self._cv_zebra_crossing_recognize(threshold)
        # Find lane information
        zebra_contours, new_edges = self._cv_find_target_area(threshold, non_zero_indices)
        # Trapezoid fitting to locate the target area and output corner points
        # (possibly 4 or 5 corners; 5 corners need additional safeguards)
        corrected_corners, trapezoid_pts = self._cv_fit_trapezoid(zebra_contours, new_edges)
        # Inverse perspective transform and feature normalization
        # Prepare clean bird-view images for Inception v3 recognition
        bird_view = self._cv_image_crop_transform(threshold, corrected_corners, trapezoid_pts)
        # Lane information recognition
        # The input bird-view image should already be clean at this point
        lane_info_list, whole_lane_info_list, final_arrows = self._cv_analyze_marks(bird_view)
        # Use Inception v3 for recognition
        preds_idx, preds_conf = self.__run_inception_predict(self.inception_model, final_arrows)
        # Generate the final mask data
        return self._cv_mask_generate(lane_info_list, whole_lane_info_list, preds_idx, preds_conf)
```

After `lane.jpg` is processed, the next key step is adjusting `_cv_feature_convert`. That step directly determines whether the downstream analysis will work correctly.

![image](./images/lane.png)

After that, the rest is a fairly standard `YOLOv12 + StrongSort + OSNet` tracking pipeline. At the end there is also a small-object filter that removes tiny targets near the top of the screen, which still needs further tuning.

#### 4. MQTT + SMTP + HTTP, plus MySQL inspection

This part was written rather casually, but it is already encapsulated. `modules\analyzer` contains most of these wrappers. In short, different business operations are described and handled through classes.

#### 5. Bottlenecks

1. The very first computer vision step: semantic simplification and binary feature conversion.
2. This somewhat awkward trajectory analysis model. The real reason is simply that the model has not been trained properly yet.

![image](./images/data.png)

3. Small-object detection and tracking region definition. Right now it uses a hard `0.3y` cut.
4. Retrieval-augmented generation for the LLM is still weak. There is no knowledge base attached and the prompt has not been optimized either.

That is about it for the major pain points.

#### 6. Example Program Output

Example output from `initialize.py`:

```txt
Non-blocking startup command: cmd /c conda activate proj && python modules\analyzer.py --env (PID: 32448)
All business tasks have been started in the background, and the main program continues...
PID:32448 Status: Running
All background tasks have started, preparing to execute the main function...
All child processes have exited, main program terminated

# ------------------------- Internal log below ------------------------- #
Detected 100 zebra-crossing lines in total
Coordinates found: 264 - 1654, 679 - 1079
Top-left point: (564.0, 680.0), left edge angle: 52.98 deg
Top-right point: (1569.0, 682.0), top edge angle: -0.17 deg
Bottom-right point: (1655.0, 806.0), right edge angle: -55.19 deg
Arrow image 1: predicted class = left-straight (index = 0), confidence = 0.9885
Arrow image 2: predicted class = right-straight (index = 1), confidence = 0.9858
Lane mask image saved to: E:\pandownload1\ML\Police\Project\.cache\lane.png
```

Example output from `loop.py`:

```txt
Non-blocking startup command: mosquitto.exe -c mosquitto.conf (PID: 13104)
MQTT service started in the background, launching other tasks after 2 seconds...
Non-blocking startup command: cmd /c npm run dev (PID: 32048)
Non-blocking startup command: cmd /c conda activate proj && python modules\app.py --verbose (PID: 38656)
Non-blocking startup command: cmd /c conda activate proj && python app.py (PID: 28452)
Non-blocking startup command: cmd /c conda activate proj && python monitor.py (PID: 33844)
All business tasks have been started in the background, and the main program continues...
PID:13104 Status: Running
PID:32048 Status: Running
PID:38656 Status: Running
PID:28452 Status: Running
PID:33844 Status: Running
All background tasks have started, entering the main loop (press Ctrl+C to quit)...

Exit signal received, starting cleanup...
Process terminated: PID 13104
Process terminated: PID 32048
Process terminated: PID 38656
Process terminated: PID 28452
Process terminated: PID 33844
```

Example output from `main.py`:

```txt
Deleting old data stored in Redis
Starting video processing and generating base clips
Model: osnet_x0_25
- params: 203,568
- flops: 82,316,000
Successfully loaded pretrained weights from "E:\pandownload1\ML\Police\Project\models\osnet_x0_25_msmt17.pt"
** The following layers are discarded due to unmatched keys or layer size: ['classifier.weight', 'classifier.bias']
(1, 256, 128, 3)
{'ECC': False, 'MC_LAMBDA': 0.5, 'EMA_ALPHA': 0.9, 'MAX_DIST': 0.7, 'MAX_IOU_DISTANCE': 0.5, 'MAX_AGE': 5, 'N_INIT': 20, 'NN_BUDGET': 100}

---------------------- StrongSort Initialization Report ----------------------
                                                        StrongSort
init time                                      2026-03-25 19:45:50
max det                                                       1000
device                                                      cuda:0
save directory    E:\pandownload1\ML\Police\Project\runs\track\exp
ecc                                                          False
mc lambda                                                      0.5
ema alpha                                                      0.9
max dist                                                       0.7
max iou distance                                               0.5
max age                                                          5
n init                                                          20
nn budget                                                      100
YOLO model loaded: device = cuda:0 | confidence threshold = 0.7
Redis connection responded successfully
File info - total frames: 1077 | actual FPS: 25.00 | total clips: 5 | frames per clip: 250
Capture process started successfully | resolution: 1920x1080 | FPS: 25.00 | source type: file
Clip 0 save process started successfully (PID: 12260) -> runs\live\stream_000000.mp4
Started processing | streaming: off | saving: on | clip config: one clip every 10 seconds / 250 frames | press Ctrl+C to stop
Processing clip 0/5: 100% ...
Clip 0 completed (accumulated frames: 250)
Processing clip 1/5: 100% ...
Clip 1 completed (accumulated frames: 500)
Processing clip 2/5: 100% ...
Clip 2 completed (accumulated frames: 750)
Processing clip 3/5: 100% ...
Clip 3 completed (accumulated frames: 1000)
Final clip 4 completed (accumulated frames: 1077)
Video file processing completed
Processing statistics - total frames: 1077 | total clips: 5
Starting analysis and prediction
Redis connected successfully

---------------------- BehaviorAnalyzer Runtime Report ----------------------
                                  BehaviorAnalyzer
method                                        deep
classifier                   _core_Behavior_Module
model_path  models\behavior_model_d1sigma_silu.pth
device                                      cuda:0
label           STOP, LEFT, STRAIGHT, RIGHT, UTURN
Prompt template loaded successfully:
[{'role': 'system', 'content': 'You are a professional assistant. Answer concisely and accurately in Chinese within 100 characters.'}]

Model running on cuda:0
Loading weights: 100%|████████████████████| 199/199 [00:00<00:00, 2809.52it/s, Materializing param=bert.pooler.dense.weight]

BertForSequenceClassification LOAD REPORT from: bert-base-chinese
Key                                        | Status     |
-------------------------------------------+------------+-
cls.predictions.transform.dense.weight     | UNEXPECTED |
cls.predictions.transform.dense.bias       | UNEXPECTED |
cls.seq_relationship.weight                | UNEXPECTED |
cls.seq_relationship.bias                  | UNEXPECTED |
cls.predictions.transform.LayerNorm.weight | UNEXPECTED |
cls.predictions.transform.LayerNorm.bias   | UNEXPECTED |
cls.predictions.bias                       | UNEXPECTED |
classifier.weight                          | MISSING    |
classifier.bias                            | MISSING    |

Notes:
- UNEXPECTED: can be ignored when loading from a different task or architecture.
- MISSING: these parameters were newly initialized because they were not found in the checkpoint.

---------------------- ReportExporter Runtime Report ----------------------
                                                      ReportExporter
output_dir                                              runs\reports
supported_formats                                               docx
items              datetime_report, plate, report, administrator, ...

-------------------- Start copying Redis backup trajectory data --------------------
12 entries copied in batch through the pipeline

-------------------- Start reading Redis trajectory data --------------------
12 entries found in the Redis list
Trajectory 1: 112 new coordinate points, 112 total
Trajectory 6: 149 new coordinate points, 149 total
Trajectory 9: 145 new coordinate points, 145 total
Trajectory 13: 92 new coordinate points, 92 total
Trajectory 15: 66 new coordinate points, 66 total
Processing complete | 12 Redis records read | 12 full trajectories aggregated

-------------------- Trajectory validity check --------------------
Valid   | Track 1  | Start lane: red lane (1) | Length: 112 | Frame range: 24~135
Valid   | Track 6  | Start lane: red lane (1) | Length: 149 | Frame range: 62~210
Valid   | Track 9  | Start lane: red lane (1) | Length: 145 | Frame range: 404~548
Valid   | Track 13 | Start lane: red lane (1) | Length:  92 | Frame range: 571~662
Valid   | Track 15 | Start lane: red lane (1) | Length:  66 | Frame range: 608~673

-------------------- Generate LSTM input features --------------------
Feature generation complete | feature shape: torch.Size([5, 99, 2]) (samples, sequence length, feature dimension)

-------------------- LSTM behavior classification result --------------------
Track ID:    1 | Start lane: red lane (1) | Behavior: straight | Code: 2 | Frame range: 24~135
Track ID:    6 | Start lane: red lane (1) | Behavior: straight | Code: 2 | Frame range: 62~210
Track ID:    9 | Start lane: red lane (1) | Behavior: straight | Code: 2 | Frame range: 404~548
Track ID:   13 | Start lane: red lane (1) | Behavior: left     | Code: 1 | Frame range: 571~662
Track ID:   15 | Start lane: red lane (1) | Behavior: stop     | Code: 0 | Frame range: 608~673

-------------------- Analysis preview --------------------
track_id  start_lane  behavior_code  start_frame  end_frame
       1           1              2           24        135
       6           1              2           62        210
       9           1              2          404        548
      13           1              1          571        662
      15           1              0          608        673

Generated question examples:
1. Is this vehicle committing a traffic violation by going straight in a lane that allows straight and left turns while the light is green?
2. Is this vehicle committing a traffic violation by turning left in a lane that allows straight and left turns while the light is green?
3. Is this vehicle committing a traffic violation by remaining stopped in a lane that allows straight and left turns while the light is green?

ChatGLM response examples:
- No traffic violation. The vehicle goes straight in a lane that allows straight and left turns while the signal is green.
- Traffic violation detected. The vehicle turns left under the current interpreted rule.
- No traffic violation. The vehicle remains stopped and does not violate the signal rule.

Violation clip exported successfully: runs\live\ext\violation_227208112977783231_13_left.mp4
PDF file saved: runs\reports\AN9241-13-violation-report-2026-03-25-19-47-51.pdf

-------------------- Violation video list --------------------
Plate: AN9241 | Track ID: 13 | Behavior: left | Video: runs\live\ext\violation_227208112977783231_13_left.mp4
```

### Special Thanks

|Name|License|Link|
|----|----|----|
|Object Tracking|GPL-3.0|https://github.com/mikel-brostrom/Yolov7_StrongSORT_OSNet|
|License Plate Recognition|GPL-3.0|https://github.com/we0091234/Chinese_license_plate_detection_recognition|
|Object Detection|AGPL-3.0|https://github.com/sunsmarterjie/yolov12|
|Lane Fitting|MIT|https://github.com/lucastabelini/PolyLaneNet|
|Frontend Page|MIT|https://github.com/satnaing/shadcn-admin|

![image](./images/main_page.png)

![image](./images/review.png)
