import subprocess
import os
from concurrent.futures import ThreadPoolExecutor
import time
import atexit
import threading
import argparse
import traceback

running_processes = []
lock = threading.Lock()
cleanup_done = False

def run_external_command(command, cwd=None):
    global running_processes, lock
    lock.acquire()
    try:
        os.makedirs('logs', exist_ok=True)
        log_file = os.path.join('logs', f'init_{len(running_processes)}.log')
        
        process = subprocess.Popen(
            args=command,
            cwd=cwd,
            stdout=open(log_file, 'a', encoding='utf-8'),
            stderr=subprocess.STDOUT,
            text=True,
            encoding='utf-8',
            creationflags=subprocess.CREATE_NEW_PROCESS_GROUP
        )
        running_processes.append(process)
        print(f"非阻塞启动命令: {' '.join(command)} (PID: {process.pid})")
        return process
    except Exception as e:
        print(f"启动命令失败 {' '.join(command)}: {str(e)}")
        return None
    finally:
        lock.release()

def cleanup_processes():
    global cleanup_done, running_processes, lock
    lock.acquire()
    if cleanup_done:
        lock.release()
        return
    cleanup_done = True
    lock.release()
    
    for process in running_processes:
        if process.poll() is None:
            try:
                process.terminate()
                process.wait(timeout=5)
                print(f"已终止进程 PID: {process.pid}")
            except subprocess.TimeoutExpired:
                process.kill()
                print(f"强制杀死进程 PID: {process.pid}")
            except Exception as e:
                print(f"清理进程 PID:{process.pid} 失败: {str(e)}")

    running_processes = []

atexit.register(cleanup_processes)

def start_tasks():
    tasks = [
        # { # 暂时没有开启 PolyLaneNet 进程, 但是写了留着用
        #     'command': ['cmd', '/c', r'conda activate proj && python app.py'],
        #     'cwd': os.path.join('submodules', 'polylanenet')
        # },
        {
            'command': ['cmd', '/c', r'conda activate proj && python modules\analyzer.py --env'],
            'cwd': '.'
        }
    ]
    
    # 最多后台运行 2 个进程
    with ThreadPoolExecutor(max_workers=2) as executor:
        for task in tasks:
            executor.submit(run_external_command, **task)
    
    print("所有业务任务已后台启动，主程序继续运行...")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="用于标识是否使用某些组件")
    parser.add_argument('--verbose', action='store_true', help="启用调试模式输出")
    opt = parser.parse_args()

    if not os.path.exists('logs'):
        os.makedirs('logs', exist_ok=True)

    start_tasks()
    time.sleep(2)

    try:
        for p in running_processes:
            print(f"PID:{p.pid} 状态: {'运行中' if p.poll() is None else '已退出'}")

        print("所有后台任务已启动, 准备执行主函数...")
        while True:
            time.sleep(1)
            lock.acquire()
            running_processes = [p for p in running_processes if p.poll() is None]
            lock.release()
            if not running_processes:
                print("所有子进程已退出，主程序退出")
                break

    except KeyboardInterrupt:
        print("\n接收到退出信号，开始清理...")
    except Exception as e:
        traceback.print_exc()
    finally:
        cleanup_processes()