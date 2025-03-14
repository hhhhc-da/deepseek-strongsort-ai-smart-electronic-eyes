import{_ as Ya}from"./Page.vue_vue_type_script_setup_true_lang-CmbE-wD_.js";import{b as rt,_ as at,a as it}from"./CardHeader.vue_vue_type_script_setup_true_lang-CyHGzjLh.js";import{u as Va,_ as Ha}from"./ChangeLiveSoureDrawer.vue_vue_type_script_setup_true_lang-CYXZMSMb.js";import{ab as Ga,ac as Kn,d as Qa,B as Xe,s as Xa,T as Za,r as Fn,o as Rt,c as Ja,w as fe,b as ce,f as he,a as qt,J as jn,V as Un,g as ot,t as Be,u as ve}from"./index-zul1sP2k.js";import{_ as $a}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DrawerTitle.vue_vue_type_script_setup_true_lang-Cu172gDo.js";import"./Input.vue_vue_type_script_setup_true_lang-TPBklP1s.js";import"./Label.vue_vue_type_script_setup_true_lang-6b5GUbaZ.js";var rn={exports:{}},Nn;function ei(){return Nn||(Nn=1,function(Ot,st){(function(Me,Oe){Ot.exports=Oe()})(self,()=>(()=>{var Me={916:(T,w,_)=>{var S=_(471);T.exports=function(b){var u,r="",A=(b=b||{}).video,l=b.options,p=S.$escape,y=b.tran,d=b.icons,o=b.index,h=S.$each;return b.$value,b.$index,r+=`<div class="dplayer-mask"></div>
<div class="dplayer-video-wrap">
    `,u=_(568)(A),r+=u,r+=`
    `,l.logo&&(r+=`
    <div class="dplayer-logo">
        <img src="`,r+=p(l.logo),r+=`">
    </div>
    `),r+=`
    <div class="dplayer-danmaku"`,l.danmaku&&l.danmaku.bottom&&(r+=' style="margin-bottom:',r+=p(l.danmaku.bottom),r+='"'),r+=`>
        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>
    </div>
    <div class="dplayer-subtitle"></div>
    <div class="dplayer-bezel">
        <span class="dplayer-bezel-icon"></span>
        `,l.danmaku&&(r+=`
        <span class="dplayer-danloading">`,r+=p(y("danmaku-loading")),r+=`</span>
        `),r+=`
        <span class="diplayer-loading-icon">`,r+=d.loading,r+=`</span>
    </div>
</div>
<div class="dplayer-controller-mask"></div>
<div class="dplayer-controller">
    <div class="dplayer-icons dplayer-comment-box">
        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="`,r+=p(y("setting")),r+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,r+=d.pallette,r+=`</span>
        </button>
        <div class="dplayer-comment-setting-box">
            <div class="dplayer-comment-setting-color">
                <div class="dplayer-comment-setting-title">`,r+=p(y("set-danmaku-color")),r+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,r+=p(o),r+=`" value="#fff" checked>
                    <span style="background: #fff;"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,r+=p(o),r+=`" value="#e54256">
                    <span style="background: #e54256"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,r+=p(o),r+=`" value="#ffe133">
                    <span style="background: #ffe133"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,r+=p(o),r+=`" value="#64DD17">
                    <span style="background: #64DD17"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,r+=p(o),r+=`" value="#39ccff">
                    <span style="background: #39ccff"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,r+=p(o),r+=`" value="#D500F9">
                    <span style="background: #D500F9"></span>
                </label>
            </div>
            <div class="dplayer-comment-setting-type">
                <div class="dplayer-comment-setting-title">`,r+=p(y("set-danmaku-type")),r+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,r+=p(o),r+=`" value="1">
                    <span>`,r+=p(y("top")),r+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,r+=p(o),r+=`" value="0" checked>
                    <span>`,r+=p(y("rolling")),r+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,r+=p(o),r+=`" value="2">
                    <span>`,r+=p(y("bottom")),r+=`</span>
                </label>
            </div>
        </div>
        <input class="dplayer-comment-input" type="text" placeholder="`,r+=p(y("input-danmaku-enter")),r+=`" maxlength="30">
        <button class="dplayer-icon dplayer-send-icon" data-balloon="`,r+=p(y("send")),r+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,r+=d.send,r+=`</span>
        </button>
    </div>
    <div class="dplayer-icons dplayer-icons-left">
        <button class="dplayer-icon dplayer-play-icon">
            <span class="dplayer-icon-content">`,r+=d.play,r+=`</span>
        </button>
        <div class="dplayer-volume">
            <button class="dplayer-icon dplayer-volume-icon">
                <span class="dplayer-icon-content">`,r+=d.volumeDown,r+=`</span>
            </button>
            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">
                <div class="dplayer-volume-bar">
                    <div class="dplayer-volume-bar-inner" style="background: `,r+=p(l.theme),r+=`;">
                        <span class="dplayer-thumb" style="background: `,r+=p(l.theme),r+=`"></span>
                    </div>
                </div>
            </div>
        </div>
        <span class="dplayer-time">
            <span class="dplayer-ptime">0:00</span> /
            <span class="dplayer-dtime">0:00</span>
        </span>
        `,l.live&&(r+=`
        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: `,r+=p(l.theme),r+=';"></span>',r+=p(y("live")),r+=`</span>
        `),r+=`
    </div>
    <div class="dplayer-icons dplayer-icons-right">
        `,l.video.quality&&(r+=`
        <div class="dplayer-quality">
            <button class="dplayer-icon dplayer-quality-icon">`,r+=p(l.video.quality[l.video.defaultQuality].name),r+=`</button>
            <div class="dplayer-quality-mask">
                <div class="dplayer-quality-list">
                `,h(l.video.quality,function(f,s){r+=`
                    <div class="dplayer-quality-item" data-index="`,r+=p(s),r+='">',r+=p(f.name),r+=`</div>
                `}),r+=`
                </div>
            </div>
        </div>
        `),r+=`
        `,l.screenshot&&(r+=`
        <div class="dplayer-icon dplayer-camera-icon" data-balloon="`,r+=p(y("screenshot")),r+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,r+=d.camera,r+=`</span>
        </div>
        `),r+=`
        `,l.airplay&&(r+=`
        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="`,r+=p(y("airplay")),r+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,r+=d.airplay,r+=`</span>
        </div>
        `),r+=`
        `,l.chromecast&&(r+=`
        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="`,r+=p(y("chromecast")),r+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,r+=d.chromecast,r+=`</span>
        </div>
        `),r+=`
        <div class="dplayer-comment">
            <button class="dplayer-icon dplayer-comment-icon" data-balloon="`,r+=p(y("send-danmaku")),r+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,r+=d.comment,r+=`</span>
            </button>
        </div>
        `,l.subtitle&&(r+=`
        `,typeof l.subtitle.url=="string"?(r+=`
        <div class="dplayer-subtitle-btn">
            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="`,r+=p(y("hide-subs")),r+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,r+=d.subtitle,r+=`</span>
            </button>
        </div>
        `):(r+=`
        <div class="dplayer-subtitles">
            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="`,r+=p(y("subtitle")),r+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,r+=d.subtitle,r+=`</span>
            </button>
            <div class="dplayer-subtitles-box">
                <div class="dplayer-subtitles-panel">
                    `,h(l.subtitle.url,function(f,s){r+=`
                        <div class="dplayer-subtitles-item" data-subtitle="`,r+=p(f.url),r+=`">
                            <!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. -->
                            <span class="dplayer-label">`,r+=p(f.lang?f.name?f.name+" ("+y(f.lang)+")":y(f.lang):f.name),r+=`</span>
                        </div>
                    `}),r+=`
                </div>
            </div>
        </div>
        `),r+=`
        `),r+=`
        <div class="dplayer-setting">
            <button class="dplayer-icon dplayer-setting-icon" data-balloon="`,r+=p(y("setting")),r+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,r+=d.setting,r+=`</span>
            </button>
            <div class="dplayer-setting-box">
                <div class="dplayer-setting-origin-panel">
                    <div class="dplayer-setting-item dplayer-setting-speed">
                        <span class="dplayer-label">`,r+=p(y("speed")),r+=`</span>
                        <div class="dplayer-toggle">`,r+=d.right,r+=`</div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-loop">
                        <span class="dplayer-label">`,r+=p(y("loop")),r+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">
                            <label for="dplayer-toggle"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-showdan">
                        <span class="dplayer-label">`,r+=p(y("show-danmaku")),r+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">
                            <label for="dplayer-toggle-dan"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danunlimit">
                        <span class="dplayer-label">`,r+=p(y("unlimited-danmaku")),r+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">
                            <label for="dplayer-toggle-danunlimit"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danmaku">
                        <span class="dplayer-label">`,r+=p(y("opacity-danmaku")),r+=`</span>
                        <div class="dplayer-danmaku-bar-wrap">
                            <div class="dplayer-danmaku-bar">
                                <div class="dplayer-danmaku-bar-inner">
                                    <span class="dplayer-thumb"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dplayer-setting-speed-panel">
                    `,h(l.playbackSpeed,function(f,s){r+=`
                        <div class="dplayer-setting-speed-item" data-speed="`,r+=p(f),r+=`">
                            <span class="dplayer-label">`,r+=p(f===1?y("normal"):f),r+=`</span>
                        </div>
                    `}),r+=`
                </div>
            </div>
        </div>
        <div class="dplayer-full">
            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="`,r+=p(y("web-fullscreen")),r+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,r+=d.fullWeb,r+=`</span>
            </button>
            <button class="dplayer-icon dplayer-full-icon" data-balloon="`,r+=p(y("fullscreen")),r+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,r+=d.full,r+=`</span>
            </button>
        </div>
    </div>
    <div class="dplayer-bar-wrap">
        <div class="dplayer-bar-time hidden">00:00</div>
        <div class="dplayer-bar-preview"></div>
        <div class="dplayer-bar">
            <div class="dplayer-loaded" style="width: 0;"></div>
            <div class="dplayer-played" style="width: 0; background: `,r+=p(l.theme),r+=`">
                <span class="dplayer-thumb" style="background: `,r+=p(l.theme),r+=`"></span>
            </div>
        </div>
    </div>
</div>
<div class="dplayer-info-panel dplayer-info-panel-hide">
    <div class="dplayer-info-panel-close">[x]</div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">
        <span class="dplayer-info-panel-item-title">Player version</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">
        <span class="dplayer-info-panel-item-title">Player FPS</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">
        <span class="dplayer-info-panel-item-title">Video type</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">
        <span class="dplayer-info-panel-item-title">Video url</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">
        <span class="dplayer-info-panel-item-title">Video resolution</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">
        <span class="dplayer-info-panel-item-title">Video duration</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `,l.danmaku&&(r+=`
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-id">
        <span class="dplayer-info-panel-item-title">Danmaku id</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-api">
        <span class="dplayer-info-panel-item-title">Danmaku api</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-amount">
        <span class="dplayer-info-panel-item-title">Danmaku amount</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `),r+=`
</div>
<div class="dplayer-menu">
    `,h(l.contextmenu,function(f,s){r+=`
        <div class="dplayer-menu-item">
            <a`,f.link&&(r+=' target="_blank"'),r+=' href="',r+=p(f.link||"javascript:void(0);"),r+='">',f.key&&(r+=" ",r+=p(y(f.key))),f.text&&(r+=" ",r+=p(f.text)),r+=`</a>
        </div>
    `}),r+=`
</div>
<div class="dplayer-notice-list"></div>
<button class="dplayer-mobile-play">
    `,r+=d.play,r+=`
</button>`}},568:(T,w,_)=>{var S=_(471);T.exports=function(b){var u="",r=(b=b||{}).enableSubtitle,A=b.subtitle,l=b.current,p=b.airplay,y=b.pic,d=S.$escape,o=b.screenshot,h=b.preload,f=b.url;return r=A&&A.type==="webvtt",u+=`
<video
    class="dplayer-video `,l&&(u+="dplayer-video-current"),u+=`"
    webkit-playsinline
    `,p&&(u+=' x-webkit-airplay="allow" '),u+=`
    playsinline
    `,y&&(u+='poster="',u+=d(y),u+='"'),u+=`
    `,(o||r)&&(u+='crossorigin="anonymous"'),u+=`
    `,h&&(u+='preload="',u+=d(h),u+='"'),u+=`
    `,p?u+=`
    nosrc
    `:f&&(u+=`
    src="`,u+=d(f),u+=`"
    `),u+=`
    >
    `,p&&(u+=`
    <source src="`,u+=d(f),u+=`">
    `),u+=`
    `,r&&(u+=`
    <track class="dplayer-subtrack" kind="metadata" default src="`,u+=d(typeof A.url=="string"?A.url:A.url[A.index].url),u+=`"></track>
    `),u+`
</video>`}},49:(T,w,_)=>{_.d(w,{Z:()=>A});var S=_(415),b=_.n(S),u=_(352),r=_.n(u)()(b());r.push([T.id,`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: 12px;
    font-size: var(--balloon-font-size);
    background: rgba(16, 16, 16, 0.95);
    background: var(--balloon-color);
    border-radius: 2px;
    color: #fff;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: rgba(16, 16, 16, 0.95);
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, 4px);
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, 4px);
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(4px * -1));
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: rgba(16, 16, 16, 0.95);
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(4px * -1));
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(4px, -50%);
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: rgba(16, 16, 16, 0.95);
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(4px * -1), -50%);
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: rgba(16, 16, 16, 0.95);
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`,"",{version:3,sources:["webpack://./node_modules/.pnpm/balloon-css@1.2.0/node_modules/balloon-css/balloon.css"],names:[],mappings:"AAAA;EACE,4BAA4B;EAC5B,uCAAuC;EACvC,0BAA0B;EAC1B,yBAAyB;EACzB,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB;EAClB,eAAe,EAAE;EACjB;IACE,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,cAAc;IACd,wIAAwI;IACxI,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,eAAmC;IAAnC,mCAAmC;IACnC,kCAAgC;IAAhC,gCAAgC;IAChC,kBAAkB;IAClB,WAAgC;IAAhC,gCAAgC;IAChC,2CAA2C;IAC3C,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,WAAW,EAAE;EACf;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,wCAAsC;IAAtC,sCAAsC;IACtC,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,WAAW;IACX,kBAAkB;IAClB,WAAW,EAAE;EACf;IACE,UAAU;IACV,oBAAoB,EAAE;EACxB;IACE,qJAAqJ,EAAE;EACzJ;IACE,gBAAgB,EAAE;EACpB;IACE,qBAAqB;IACrB,sBAAsB,EAAE;EAC1B;IACE,gBAAgB,EAAE;EACpB;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,OAAO,EAAE;EACX;IACE,SAAS,EAAE;EACb;IACE,QAAQ,EAAE;EACZ;IACE,UAAU,EAAE;EACd;IACE,0BAA0B,EAAE;EAC9B;IACE,0BAA0B,EAAE;EAC9B;IACE,YAAY;IACZ,qBAAqB;IACrB,4BAA4C;IAA5C,4CAA4C,EAAE;EAChD;IACE,mBAAmB,EAAE;EACvB;IACE,SAAS;IACT,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,SAAS;IACT,uCAAuD;IAAvD,uDAAuD,EAAE;EAC3D;IACE,gBAAgB,EAAE;EACpB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,2CAAyC;IAAzC,yCAAyC,EAAE;EAC7C;IACE,SAAS;IACT,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,WAAW;IACX,QAAQ;IACR,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,kBAAkB,EAAE;EACtB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,yCAAuC;IAAvC,uCAAuC,EAAE;EAC3C;IACE,UAAU;IACV,QAAQ;IACR,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,iBAAiB,EAAE;EACrB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,0CAAwC;IAAxC,wCAAwC,EAAE;EAC5C;IACE,mBAAmB,EAAE;EACvB;IACE,WAAW,EAAE;EACf;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;IACd;MACE;QACE,WAAW,EAAE,EAAE;EACrB;IACE,WAAW,EAAE",sourcesContent:[`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: var(--balloon-font-size);
    background: var(--balloon-color);
    border-radius: 2px;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`],sourceRoot:""}]);const A=r},685:(T,w,_)=>{_.d(w,{Z:()=>h});var S=_(415),b=_.n(S),u=_(352),r=_.n(u),A=_(49),l=_(80),p=_.n(l),y=new URL(_(831),_.b),d=r()(b());d.i(A.Z);var o=p()(y);d.push([T.id,`@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(`+o+`) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-moz-placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: -moz-fit-content;
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,"",{version:3,sources:["webpack://./src/css/global.less","webpack://./src/css/index.less","webpack://./src/css/player.less","webpack://./src/css/balloon.less","webpack://./src/css/bezel.less","webpack://./src/css/notice.less","webpack://./src/css/controller.less","webpack://./src/css/danmaku.less","webpack://./src/css/logo.less","webpack://./src/css/menu.less","webpack://./src/css/subtitle.less","webpack://./src/css/video.less","webpack://./src/css/info-panel.less"],names:[],mappings:"AAAA;EACI;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;;IAEI,uCAAA;ECEN;AACF;ACzJA;EACI,kBAAA;EACA,gBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,cAAA;AD2JJ;AC/JA;EAOQ,uBAAA;AD2JR;AClKA;EAWQ,WAAA;EACA,YAAA;AD0JR;ACtKA;;EAgBY,UAAA;AD0JZ;ACtJI;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EACA,0BAAA;ADwJR;ACpJI;;;EAKY,aAAA;ADoJhB;ACzJI;EAUQ,aAAA;ADkJZ;AC5JI;EAcQ,aAAA;ADiJZ;AC7II;EAEQ,aAAA;AD8IZ;AChJI;EAKQ,aAAA;AD8IZ;ACnJI;EAQQ,aAAA;AD8IZ;ACtJI;EAWQ,aAAA;AD8IZ;AC3IQ;EAEQ,aAAA;AD4IhB;ACvII;EAEQ,eAAA;ADwIZ;AC1II;EAKQ,cAAA;ADwIZ;ACpII;EAEQ,6BAAA;ADqIZ;AClIQ;EAAA;IAEQ,UAAA;EDoId;ECtIM;IAKQ,UAAA;EDoId;ECjIU;IAEQ,UAAA;EDkIlB;ECpIU;IAKQ,UAAA;EDkIlB;AACF;AC7HI;EAEQ,cAAA;AD8HZ;AC1HI;;;;EAIQ,4BAAA;AD4HZ;ACxHI;EACI,YAAA;AD0HR;AC3HI;EAIQ,UAAA;EACA,2BAAA;AD0HZ;AC/HI;EAQQ,UAAA;EACA,2BAAA;AD0HZ;ACvHI;EAEQ,UAAA;ADwHZ;AC1HI;EAKQ,UAAA;ADwHZ;ACrHI;EAKI,sBAAA;EACA,uBAAA;ADuHR;AC7HI;EACI,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;ADyHR;ACrHI;;;;;EAOY,aAAA;ADqHhB;AC5HI;EAUY,gBAAA;EACA,qBAAA;ADqHhB;AChII;EAgBQ,aAAA;ADmHZ;AChHQ;EAEQ,aAAA;ADiHhB;ACtII;EA0BQ,cAAA;AD+GZ;ACzGA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;AD2GJ;AElSA;EACI,aAAA;AFoSJ;AEjSA;EACI,oBAAA;EACA,iCAAA;AFmSJ;AEhSA;EACI,gBAAA;AFkSJ;AG9SA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;AHgTJ;AGxTA;EAUQ,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AHiTR;AGhTQ;EACI,iCAAA;AHkTZ;AGhTQ;EACI;IACI,UAAA;IACA,mBAAA;EHkTd;EGhTU;IACI,UAAA;IACA,mBAAA;EHkTd;AACF;AGnVA;EAqCQ,kBAAA;EACA,QAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,0CAAA;AHiTR;AG7VA;EA+CQ,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;AHiTR;AGvWA;EAwDY,aAAA;AHkTZ;AG1WA;EA2DY,uDAAA;EACA,UAAA;EACA,yBAAA;AHkTZ;AI/WC;EDgEmB,qBAAA;AHkTpB;AIlXC;EDgEmB,qBAAA;AHqTpB;AIrXC;EDgEmB,qBAAA;AHwTpB;AIxXC;EDgEmB,qBAAA;AH2TpB;AI3XC;EDgEmB,qBAAA;AH8TpB;AI9XC;EDgEmB,qBAAA;AHiUpB;AIjYC;EDgEmB,qBAAA;AHoUpB;AGhUQ;EACI;IACI,YAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,4BAAA;EHkUd;AACF;AKlZA;EACI,mEAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,yBAAA;ALoZJ;AKjZA;EACI,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,yBAAA;ALmZJ;AKlZI;EAEQ,aAAA;ALmZZ;AKrZI;EAKQ,cAAA;ALmZZ;AKjaA;EAkBQ,cAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,wBAAA;EACA,WAAA;ALkZR;AKjZQ;EAEQ,mBAAA;ALkZhB;AKpZQ;EAKQ,cAAA;EACA,UAAA;EACA,2BAAA;EACA,QAAA;EACA,WAAA;ALkZhB;AKnbA;EAqCY,WAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,2BAAA;EACA,gCAAA;ALiZZ;AKhZY;EAEQ,cAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AKxcA;EA2DgB,aAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,2BAAA;ALgZhB;AKrdA;EAyEY,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,aAAA;EACA,6BAAA;AL+YZ;AK5dA;EAgFY,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,oBAAA;AL+YZ;AKneA;EA0FY,kBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AL4YZ;AK7ZY;EACI,UAAA;AL+ZhB;AKvfA;EA2GY,kBAAA;EACA,WAAA;EACA,WAAA;EACA,oCAAA;EACA,eAAA;AL+YZ;AK9fA;EAiHgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,oCAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;ALgZhB;AKxgBA;EA2HgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;ALgZhB;AKhhBA;EAkIoB,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALiZpB;AK7hBA;EAkJQ,YAAA;EACA,kBAAA;EACA,SAAA;AL8YR;AK7YQ;EACI,aAAA;EACA,kBAAA;EACA,gCAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;AL+YZ;AKxZQ;EAWQ,YAAA;ALgZhB;AK3ZQ;EAcQ,kBAAA;EACA,OAAA;EACA,MAAA;ALgZhB;AKhaQ;EAmBQ,kBAAA;EACA,QAAA;EACA,MAAA;ALgZhB;AKraQ;EAwBQ,kBAAA;EACA,iCAAA;EACA,YAAA;EACA,OAAA;EACA,uCAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,gCAAA;EACA,mBAAA;ALgZhB;AK/YgB;EACI,mBAAA;ALiZpB;AKrbQ;EAuCY,aAAA;ALiZpB;AKxbQ;EA0CY,eAAA;ALiZpB;AK3bQ;EA6CY,eAAA;EACA,WAAA;EACA,iBAAA;ALiZpB;AKhcQ;EAkDY,YAAA;ALiZpB;AKncQ;EAoDgB,kBAAA;ALkZxB;AK/YwB;EAEQ,0BAAA;ALgZhC;AK7YwB;EAEQ,0BAAA;AL8YhC;AK5cQ;EAmEgB,UAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;AL4YxB;AKzdQ;EAgFgB,mBAAA;EACA,cAAA;AL4YxB;AK7dQ;EAqFY,YAAA;AL2YpB;AKheQ;EAuFgB,YAAA;EACA,YAAA;EACA,qBAAA;AL4YxB;AKreQ;EA4FgB,WAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;AL4YxB;AK3YwB;EACI,0CAAA;AL6Y5B;AKhfQ;EAyGQ,aAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,YAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;AL0YhB;AKzYgB;EACI,WAAA;EACA,YAAA;AL2YpB;AK7YgB;EACI,WAAA;EACA,YAAA;AL2YpB;AKzYgB;EACI,aAAA;AL2YpB;AKvYQ;EAEQ,YAAA;ALwYhB;AKrYQ;EACI,WAAA;ALuYZ;AKxYQ;EAGQ,YAAA;ALwYhB;AKpqBA;;EAiSY,iBAAA;EACA,WAAA;EACA,uCAAA;EACA,sBAAA;EACA,eAAA;EACA,eAAA;ALuYZ;AK7qBA;EAySY,qBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,kBAAA;ALuYZ;AKtrBA;EAkTY,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;ALuYZ;AKjsBA;EA4TgB,gCAAA;EACA,YAAA;ALwYhB;AKtYY;EAEQ,UAAA;ALuYpB;AKpYY;EACI,WAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;ALsYhB;AKpYY;EACI,qBAAA;ALsYhB;AKpYY;EACI,kBAAA;ALsYhB;AKpYY;EACI,WAAA;ALsYhB;AKvtBA;EAqVY,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,YAAA;ALqYZ;AKpYY;EAEQ,WAAA;ALqYpB;AKvYY;EAKQ,mBAAA;ALqYpB;AKlYY;EAEQ,WAAA;ALmYpB;AKrYY;EAKQ,mBAAA;ALmYpB;AKzuBA;EA0WgB,qBAAA;EACA,qBAAA;EACA,sBAAA;EACA,YAAA;ALkYhB;AK/uBA;EA+WoB,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;ALmYpB;AKvvBA;EAsXwB,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;ALoYxB;AK/vBA;EA6X4B,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALqY5B;AK5wBA;EA8YY,qBAAA;EACA,YAAA;ALiYZ;AKhxBA;EAkZY,qBAAA;EACA,YAAA;ALiYZ;AKpxBA;EAqZgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EAAA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,cAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,cAAA;ALmYpB;AKjYgB;EACI,mBAAA;ALmYpB;AKzyBA;EA0agB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALkYhB;AKjYgB;EACI,0CAAA;ALmYpB;AKnzBA;EAqbY,qBAAA;EACA,YAAA;ALiYZ;AKvzBA;EAwbgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,aAAA;ALmYpB;AKlYoB;EACI,cAAA;ALoYxB;AKjYgB;EACI,mBAAA;ALmYpB;AKjYgB;EACI,WAAA;EACA,kBAAA;ALmYpB;AKjYgB;EAEQ,aAAA;ALkYxB;AKpYgB;EAKQ,cAAA;ALkYxB;AKv1BA;;EA2dgB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALgYhB;AK/XgB;;EACI,0CAAA;ALkYpB;AKn2BA;EAqegB,cAAA;ALiYhB;AKt2BA;EAueoB,eAAA;EACA,eAAA;ALkYpB;AKhYgB;EAEQ,aAAA;ALiYxB;AKnYgB;EAKQ,qBAAA;ALiYxB;AK9XgB;EAEQ,aAAA;AL+XxB;AKjYgB;EAKQ,qBAAA;AL+XxB;AKt3BA;EA2foB,eAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;AL8XpB;AK93BA;EAkgBwB,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;AL+XxB;AKt4BA;EAygB4B,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;ALgY5B;AK/4BA;EAihBgC,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,gBAAA;ALiYhC;AK55BA;EAmiBY,qBAAA;EACA,YAAA;EACA,kBAAA;AL4XZ;AK3XY;EAEQ,cAAA;AL4XpB;AKp6BA;EA4iBgB,kBAAA;EACA,UAAA;EACA,UAAA;EACA,aAAA;AL2XhB;AK16BA;EAmjBY,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,UAAA;AL0XZ;AKzXY;EAEQ,cAAA;AL0XpB;AK5XY;EAKQ,cAAA;AL0XpB;AKt7BA;EAgkBgB,aAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,oBAAA;ALyXhB;AK97BA;EAwkBgB,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;ALyXhB;AK18BA;EAolBgB,YAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;ALyXhB;AKxXgB;EACI,0CAAA;AL0XpB;AKn9BA;EA8lBY,qBAAA;EACA,YAAA;ALwXZ;AKv9BA;EAkmBY,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,mBAAA;ALwXZ;AK99BA;EAymBY,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;ALwXZ;AKx+BA;EAknBgB,aAAA;EACA,YAAA;EACA,aAAA;ALyXhB;AK7+BA;EAunBgB,qBAAA;EACA,kBAAA;EACA,iCAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;EACA,eAAA;EACA,4BAAA;ALyXhB;AKz/BA;EAmoBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,mBAAA;EACA,4BAAA;ALyXhB;AKpgCA;EA8oBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,OAAA;EACA,MAAA;EACA,mBAAA;EACA,gBAAA;EACA,4BAAA;EACA,wCAAA;EACA,YAAA;EACA,WAAA;ALyXhB;AKjhCA;EA2pBgB,sCAAA;ALyXhB;AKphCA;EA8pBgB,WAAA;EACA,oCAAA;ALyXhB;AKxhCA;EAkqBgB,UAAA;ALyXhB;AKnXA;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EAEA,SAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;ALoXJ;AMpjCA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;ANsjCJ;AM7jCA;EASQ,qBAAA;EACA,oBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;EACA,mBAAA;EACA,iDAAA;ANujCR;AMtjCQ;EACI,kBAAA;EACA,kBAAA;ANwjCZ;AMzkCA;EAqBQ,kBAAA;EACA,QAAA;EACA,2BAAA;ANujCR;AMtjCQ;EACI,sBAAA;EACA,yBAAA;EACA,iCAAA;EACA,4BAAA;ANwjCZ;AMrjCI;EACI;IACI,2BAAA;ENujCV;AACF;AMzlCA;;EAsCQ,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;ANujCR;AMtjCQ;;EACI,uBAAA;EACA,gCAAA;EACA,iCAAA;EACA,4BAAA;ANyjCZ;AMtjCI;EACI;IACI,mBAAA;ENwjCV;EMtjCM;IACI,mBAAA;ENwjCV;AACF;AO/mCA;EACI,oBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;APinCJ;AOvnCA;EAQQ,eAAA;EACA,gBAAA;EACA,gBAAA;APknCR;AQ5nCA;EACI,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;EACA,aAAA;AR8nCJ;AQ7nCI;EACI,cAAA;AR+nCR;AQzoCA;EAaQ,YAAA;EACA,sBAAA;EACA,eAAA;AR+nCR;AQ9nCQ;EACI,0CAAA;ARgoCZ;AQjpCA;EAqBY,eAAA;EACA,iBAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,WAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AR+nCZ;AQ9nCY;EACI,qBAAA;ARgoChB;AIjqCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;AJmqCJ;AItqCA;EAMQ,kBAAA;EACA,iCAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;EACA,0CAAA;AJmqCR;AIhrCA;EAiBQ,4CAAA;AJkqCR;AI9pCA;EACI;IACI,UAAA;IACA,YAAA;IACA,aAAA;EJgqCN;EI9pCE;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJgqCN;AACF;AI7pCA;EACI;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJ+pCN;EI7pCE;IACI,eAAA;EJ+pCN;EI7pCE;IACI,YAAA;IACA,iBAAA;EJ+pCN;EI7pCE;IACI,UAAA;IACA,aAAA;IACA,YAAA;EJ+pCN;AACF;ASltCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;EACA,QAAA;EACA,kBAAA;EACA,WAAA;EACA,iDAAA;EACA,eAAA;ATotCJ;ASntCI;EACI,aAAA;ATqtCR;AU/tCA;EACI,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,aAAA;AViuCJ;AUhuCI;EACI,cAAA;AVkuCR;AU9tCA;EACI,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AVguCJ;AUruCA;EAOQ,WAAA;EACA,YAAA;EACA,aAAA;AViuCR;AU1uCA;EAYQ,cAAA;AViuCR;AU7uCA;EAeQ,aAAA;AViuCR;AW7vCA;EACI,kBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,iCAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AX+vCJ;AW7vCI;EACI,aAAA;AX+vCR;AW3wCA;EAgBQ,eAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;AX8vCR;AW1vCQ;EACI,qBAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AX4vCZ;AWzxCA;EAkCQ,YAAA;EACA,iBAAA;EACA,kBAAA;AX0vCR;AW9xCA;EAwCQ,YAAA;AXyvCR",sourcesContent:[`@keyframes my-face {
    2% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    4% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    6% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    8% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    10% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    12% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    14% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    16% {
        transform: translate(0, -0.5px) rotate(-1.5deg);
    }
    18% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    20% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    22% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    24% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    26% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    28% {
        transform: translate(0, 0.5px) rotate(1.5deg);
    }
    30% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    32% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    34% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    36% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    38% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    40% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    42% {
        transform: translate(0, 2.5px) rotate(-1.5deg);
    }
    44% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    46% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    48% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    50% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    52% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    54% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    56% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    58% {
        transform: translate(0, 0.5px) rotate(2.5deg);
    }
    60% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    62% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    64% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    66% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    68% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    70% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    72% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    74% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    76% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    78% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    80% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    82% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    84% {
        transform: translate(0, 1.5px) rotate(2.5deg);
    }
    86% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    88% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    90% {
        transform: translate(0, 2.5px) rotate(-0.5deg);
    }
    92% {
        transform: translate(0, 0.5px) rotate(-0.5deg);
    }
    94% {
        transform: translate(0, 2.5px) rotate(0.5deg);
    }
    96% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    98% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    0%,
    100% {
        transform: translate(0, 0) rotate(0deg);
    }
}`,`@import '../../node_modules/balloon-css/balloon.css';
@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,`.dplayer {
    position: relative;
    overflow: hidden;
    user-select: none;
    line-height: 1;

    * {
        box-sizing: content-box;
    }

    svg {
        width: 100%;
        height: 100%;

        path,
        circle {
            fill: #fff;
        }
    }

    &:-webkit-full-screen {
        width: 100%;
        height: 100%;
        background: #000;
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        margin: 0;
        padding: 0;
        transform: translate(0, 0);
        
    }

    &.dplayer-no-danmaku {
        .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
            .dplayer-setting-showdan,
            .dplayer-setting-danmaku,
            .dplayer-setting-danunlimit {
                display: none;
            }
        }

        .dplayer-controller .dplayer-icons .dplayer-comment {
            display: none;
        }

        .dplayer-danmaku {
            display: none;
        }
    }

    &.dplayer-live {
        .dplayer-time {
            display: none;
        }
        .dplayer-bar-wrap {
            display: none;
        }
        .dplayer-setting-speed {
            display: none;
        }
        .dplayer-setting-loop {
            display: none;
        }

        &.dplayer-no-danmaku {
            .dplayer-setting {
                display: none;
            }
        }
    }

    &.dplayer-arrow {
        .dplayer-danmaku {
            font-size: 18px;
        }
        .dplayer-icon {
            margin: 0 -3px;
        }
    }

    &.dplayer-playing {
        .dplayer-danmaku .dplayer-danmaku-move {
            animation-play-state: running;
        }

        @media (min-width: 900px) {
            .dplayer-controller-mask {
                opacity: 0;
            }
            .dplayer-controller {
                opacity: 0;
            }

            &:hover {
                .dplayer-controller-mask {
                    opacity: 1;
                }
                .dplayer-controller {
                    opacity: 1;
                }
            }
        }
    }

    &.dplayer-loading {
        .dplayer-bezel .diplayer-loading-icon {
            display: block;
        }
    }

    &.dplayer-loading,
    &.dplayer-paused {
        .dplayer-danmaku,
        .dplayer-danmaku-move {
            animation-play-state: paused;
        }
    }

    &.dplayer-hide-controller {
        cursor: none;

        .dplayer-controller-mask {
            opacity: 0;
            transform: translateY(100%);
        }
        .dplayer-controller {
            opacity: 0;
            transform: translateY(100%);
        }
    }
    &.dplayer-show-controller {
        .dplayer-controller-mask {
            opacity: 1;
        }
        .dplayer-controller {
            opacity: 1;
        }
    }
    &.dplayer-fulled {
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        width: 100% !important;
        height: 100% !important;
    }
    &.dplayer-mobile {
        .dplayer-controller .dplayer-icons {
            .dplayer-volume,
            .dplayer-camera-icon,
            .dplayer-airplay-icon,
            .dplayer-chromecast-icon,
            .dplayer-play-icon {
                display: none;
            }
            .dplayer-full .dplayer-full-in-icon {
                position: static;
                display: inline-block;
            }
        }

        .dplayer-bar-time {
            display: none;
        }

        &.dplayer-hide-controller {
            .dplayer-mobile-play {
                display: none;
            }
        }

        .dplayer-mobile-play {
            display: block;
        }
    }
}

// To hide scroll bar, apply this class to <body>
.dplayer-web-fullscreen-fix {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
}
`,`@import '../../node_modules/balloon-css/balloon.css';

[data-balloon]:before {
    display: none;
}

[data-balloon]:after {
    padding: 0.3em 0.7em;
    background: rgba(17, 17, 17, 0.7);
}

[data-balloon][data-balloon-pos="up"]:after {
    margin-bottom: 0;
}`,`.dplayer-bezel {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    pointer-events: none;
    .dplayer-bezel-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -26px 0 0 -26px;
        height: 52px;
        width: 52px;
        padding: 12px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, .5);
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
        &.dplayer-bezel-transition {
            animation: bezel-hide .5s linear;
        }
        @keyframes bezel-hide {
            from {
                opacity: 1;
                transform: scale(1);
            }
            to {
                opacity: 0;
                transform: scale(2);
            }
        }
    }
    .dplayer-danloading {
        position: absolute;
        top: 50%;
        margin-top: -7px;
        width: 100%;
        text-align: center;
        font-size: 14px;
        line-height: 14px;
        animation: my-face 5s infinite ease-in-out;
    }
    .diplayer-loading-icon {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -18px 0 0 -18px;
        height: 36px;
        width: 36px;
        pointer-events: none;
        .diplayer-loading-hide {
            display: none;
        }
        .diplayer-loading-dot {
            animation: diplayer-loading-dot-fade .8s ease infinite;
            opacity: 0;
            transform-origin: 4px 4px;
            each(range(7), {
                &.diplayer-loading-dot-@{value} {
                    animation-delay: (@value * 0.1s);
                }
            });
        }
        @keyframes diplayer-loading-dot-fade {
            0% {
                opacity: .7;
                transform: scale(1.2, 1.2)
            }
            50% {
                opacity: .25;
                transform: scale(.9, .9)
            }
            to {
                opacity: .25;
                transform: scale(.85, .85)
            }
        }
    }
}`,`.dplayer-notice-list{
    position: absolute;
    bottom: 60px;
    left: 20px;

    .dplayer-notice {
        border-radius: 2px;
        background: rgba(28, 28, 28, 0.9);
        transition: all .3s ease-in-out;
        overflow: hidden;
        color: #fff;
        display: table;
        pointer-events: none;
        animation: showNotice .3s ease 1 forwards;
    }

    .remove-notice{
        animation: removeNotice .3s ease 1 forwards;
    }
}

@keyframes showNotice {
    from {
        padding: 0;
        font-size: 0;
        margin-top: 0;
    }
    to {
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
}

@keyframes removeNotice {
    0%{
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
    20%{
        font-size: 12px;
    }
    21%{
        font-size: 0;
        padding: 7px 10px;
    }
    100%{
        padding: 0;
        margin-top: 0;
        font-size: 0;
    }
}
`,`.dplayer-controller-mask {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
    height: 98px;
    width: 100%;
    position: absolute;
    bottom: 0;
    transition: all 0.3s ease;
}

.dplayer-controller {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 41px;
    padding: 0 20px;
    user-select: none;
    transition: all 0.3s ease;
    &.dplayer-controller-comment {
        .dplayer-icons {
            display: none;
        }
        .dplayer-icons.dplayer-comment-box {
            display: block;
        }
    }
    .dplayer-bar-wrap {
        padding: 5px 0;
        cursor: pointer;
        position: absolute;
        bottom: 33px;
        width: calc(100% - 40px);
        height: 3px;
        &:hover {
            .dplayer-bar .dplayer-played .dplayer-thumb {
                transform: scale(1);
            }
            .dplayer-highlight {
                display: block;
                width: 8px;
                transform: translateX(-4px);
                top: 4px;
                height: 40%;
            }
        }
        .dplayer-highlight {
            z-index: 12;
            position: absolute;
            top: 5px;
            width: 6px;
            height: 20%;
            border-radius: 6px;
            background-color: #fff;
            text-align: center;
            transform: translateX(-3px);
            transition: all .2s ease-in-out;
            &:hover {
                .dplayer-highlight-text {
                    display: block;
                }
                &~.dplayer-bar-preview {
                    opacity: 0;
                }
                &~.dplayer-bar-time {
                    opacity: 0;
                }
            }
            .dplayer-highlight-text {
                display: none;
                position: absolute;
                left: 50%;
                top: -24px;
                padding: 5px 8px;
                background-color: rgba(0, 0, 0, .62);
                color: #fff;
                border-radius: 4px;
                font-size: 12px;
                white-space: nowrap;
                transform: translateX(-50%);
            }
        }
        .dplayer-bar-preview {
            position: absolute;
            background: #fff;
            pointer-events: none;
            display: none;
            background-size: 16000px 100%;
        }
        .dplayer-bar-preview-canvas {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
        }
        .dplayer-bar-time {
            &.hidden {
                opacity: 0;
            }
            position: absolute;
            left: 0px;
            top: -20px;
            border-radius: 4px;
            padding: 5px 7px;
            background-color: rgba(0, 0, 0, 0.62);
            color: #fff;
            font-size: 12px;
            text-align: center;
            opacity: 1;
            transition: opacity .1s ease-in-out;
            word-wrap: normal;
            word-break: normal;
            z-index: 2;
            pointer-events: none;
        }
        .dplayer-bar {
            position: relative;
            height: 3px;
            width: 100%;
            background: rgba(255, 255, 255, .2);
            cursor: pointer;
            .dplayer-loaded {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                background: rgba(255, 255, 255, .4);
                height: 3px;
                transition: all 0.5s ease;
                will-change: width;
            }
            .dplayer-played {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                height: 3px;
                will-change: width;
                .dplayer-thumb {
                    position: absolute;
                    top: 0;
                    right: 5px;
                    margin-top: -4px;
                    margin-right: -10px;
                    height: 11px;
                    width: 11px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all .3s ease-in-out;
                    transform: scale(0);
                }
            }
        }
    }
    .dplayer-icons {
        height: 38px;
        position: absolute;
        bottom: 0;
        &.dplayer-comment-box {
            display: none;
            position: absolute;
            transition: all .3s ease-in-out;
            z-index: 2;
            height: 38px;
            bottom: 0;
            left: 20px;
            right: 20px;
            color: #fff;
            .dplayer-icon {
                padding: 7px;
            }
            .dplayer-comment-setting-icon {
                position: absolute;
                left: 0;
                top: 0;
            }
            .dplayer-send-icon {
                position: absolute;
                right: 0;
                top: 0;
            }
            .dplayer-comment-setting-box {
                position: absolute;
                background: rgba(28, 28, 28, 0.9);
                bottom: 41px;
                left: 0;
                box-shadow: 0 0 25px rgba(0, 0, 0, .3);
                border-radius: 4px;
                padding: 10px 10px 16px;
                font-size: 14px;
                width: 204px;
                transition: all .3s ease-in-out;
                transform: scale(0);
                &.dplayer-comment-setting-open {
                    transform: scale(1);
                }
                input[type=radio] {
                    display: none;
                }
                label {
                    cursor: pointer;
                }
                .dplayer-comment-setting-title {
                    font-size: 13px;
                    color: #fff;
                    line-height: 30px;
                }
                .dplayer-comment-setting-type {
                    font-size: 0;
                    .dplayer-comment-setting-title {
                        margin-bottom: 6px;
                    }
                    label {
                        &:nth-child(2) {
                            span {
                                border-radius: 4px 0 0 4px;
                            }
                        }
                        &:nth-child(4) {
                            span {
                                border-radius: 0 4px 4px 0;
                            }
                        }
                    }
                    span {
                        width: 33%;
                        padding: 4px 6px;
                        line-height: 16px;
                        display: inline-block;
                        font-size: 12px;
                        color: #fff;
                        border: 1px solid #fff;
                        margin-right: -1px;
                        box-sizing: border-box;
                        text-align: center;
                        cursor: pointer;
                    }
                    input:checked+span {
                        background: #E4E4E6;
                        color: #1c1c1c;
                    }
                }
                .dplayer-comment-setting-color {
                    font-size: 0;
                    label {
                        font-size: 0;
                        padding: 6px;
                        display: inline-block;
                    }
                    span {
                        width: 22px;
                        height: 22px;
                        display: inline-block;
                        border-radius: 50%;
                        box-sizing: border-box;
                        cursor: pointer;
                        &:hover {
                            animation: my-face 5s infinite ease-in-out;
                        }
                    }
                }
            }
            .dplayer-comment-input {
                outline: none;
                border: none;
                padding: 8px 31px;
                font-size: 14px;
                line-height: 18px;
                text-align: center;
                border-radius: 4px;
                background: none;
                margin: 0;
                height: 100%;
                box-sizing: border-box;
                width: 100%;
                color: #fff;
                &::placeholder {
                    color: #fff;
                    opacity: 0.8;
                }
                &::-ms-clear {
                    display: none;
                }
            }
        }
        &.dplayer-icons-left {
            .dplayer-icon {
                padding: 7px;
            }
        }
        &.dplayer-icons-right {
            right: 20px;
            .dplayer-icon {
                padding: 8px;
            }
        }
        .dplayer-time,
        .dplayer-live-badge {
            line-height: 38px;
            color: #eee;
            text-shadow: 0 0 2px rgba(0, 0, 0, .5);
            vertical-align: middle;
            font-size: 13px;
            cursor: default;
        }
        .dplayer-live-dot {
            display: inline-block;
            width: 6px;
            height: 6px;
            vertical-align: 4%;
            margin-right: 5px;
            content: '';
            border-radius: 6px;
        }
        .dplayer-icon {
            width: 40px;
            height: 100%;
            border: none;
            background-color: transparent;
            outline: none;
            cursor: pointer;
            vertical-align: middle;
            box-sizing: border-box;
            display: inline-block;
            .dplayer-icon-content {
                transition: all .2s ease-in-out;
                opacity: .8;
            }
            &:hover {
                .dplayer-icon-content {
                    opacity: 1;
                }
            }
            &.dplayer-quality-icon {
                color: #fff;
                width: auto;
                line-height: 22px;
                font-size: 14px;
            }
            &.dplayer-comment-icon {
                padding: 10px 9px 9px;
            }
            &.dplayer-setting-icon {
                padding-top: 8.5px;
            }
            &.dplayer-volume-icon {
                width: 43px;
            }
        }
        .dplayer-volume {
            position: relative;
            display: inline-block;
            cursor: pointer;
            height: 100%;
            &:hover {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            &.dplayer-volume-active {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            .dplayer-volume-bar-wrap {
                display: inline-block;
                margin: 0 10px 0 -5px;
                vertical-align: middle;
                height: 100%;
                .dplayer-volume-bar {
                    position: relative;
                    top: 17px;
                    width: 0;
                    height: 3px;
                    background: #aaa;
                    transition: all 0.3s ease-in-out;
                    .dplayer-volume-bar-inner {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        height: 100%;
                        transition: all 0.1s ease;
                        will-change: width;
                        .dplayer-thumb {
                            position: absolute;
                            top: 0;
                            right: 5px;
                            margin-top: -4px;
                            margin-right: -10px;
                            height: 11px;
                            width: 11px;
                            border-radius: 50%;
                            cursor: pointer;
                            transition: all .3s ease-in-out;
                            transform: scale(0);
                        }
                    }
                }
            }
        }
        .dplayer-subtitle-btn {
            display: inline-block;
            height: 100%;
        }
        .dplayer-subtitles {
            display: inline-block;
            height: 100%;
            .dplayer-subtitles-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: fit-content;
                max-width: 240px;
                min-width: 120px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: auto;
                z-index: 2;
                &.dplayer-subtitles-panel {
                    display: block;
                }
                &.dplayer-subtitles-box-open {
                    transform: scale(1);
                }
            }
            .dplayer-subtitles-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-setting {
            display: inline-block;
            height: 100%;
            .dplayer-setting-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: 150px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                z-index: 2;
                &>div {
                    display: none;
                    &.dplayer-setting-origin-panel {
                        display: block;
                    }
                }
                &.dplayer-setting-box-open {
                    transform: scale(1);
                }
                &.dplayer-setting-box-narrow {
                    width: 70px;
                    text-align: center;
                }
                &.dplayer-setting-box-speed {
                    .dplayer-setting-origin-panel {
                        display: none;
                    }
                    .dplayer-setting-speed-panel {
                        display: block;
                    }
                }
            }
            .dplayer-setting-item,
            .dplayer-setting-speed-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
            .dplayer-setting-danmaku {
                padding: 5px 0;
                .dplayer-label {
                    padding: 0 10px;
                    display: inline;
                }
                &:hover {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                &.dplayer-setting-danmaku-active {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                .dplayer-danmaku-bar-wrap {
                    padding: 0 10px;
                    box-sizing: border-box;
                    display: none;
                    vertical-align: middle;
                    height: 100%;
                    width: 100%;
                    .dplayer-danmaku-bar {
                        position: relative;
                        top: 8.5px;
                        width: 100%;
                        height: 3px;
                        background: #fff;
                        transition: all 0.3s ease-in-out;
                        .dplayer-danmaku-bar-inner {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            height: 100%;
                            transition: all 0.1s ease;
                            background: #aaa;
                            will-change: width;
                            .dplayer-thumb {
                                position: absolute;
                                top: 0;
                                right: 5px;
                                margin-top: -4px;
                                margin-right: -10px;
                                height: 11px;
                                width: 11px;
                                border-radius: 50%;
                                cursor: pointer;
                                transition: all .3s ease-in-out;
                                background: #aaa;
                            }
                        }
                    }
                }
            }
        }
        .dplayer-full {
            display: inline-block;
            height: 100%;
            position: relative;
            &:hover {
                .dplayer-full-in-icon {
                    display: block;
                }
            }
            .dplayer-full-in-icon {
                position: absolute;
                top: -30px;
                z-index: 1;
                display: none;
            }
        }
        .dplayer-quality {
            position: relative;
            display: inline-block;
            height: 100%;
            z-index: 2;
            &:hover {
                .dplayer-quality-list {
                    display: block;
                }
                .dplayer-quality-mask {
                    display: block;
                }
            }
            .dplayer-quality-mask {
                display: none;
                position: absolute;
                bottom: 38px;
                left: -18px;
                width: 80px;
                padding-bottom: 12px;
            }
            .dplayer-quality-list {
                display: none;
                font-size: 12px;
                width: 80px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 5px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                color: #fff;
                text-align: center;
            }
            .dplayer-quality-item {
                height: 25px;
                box-sizing: border-box;
                cursor: pointer;
                line-height: 25px;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-comment {
            display: inline-block;
            height: 100%;
        }
        .dplayer-label {
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            white-space: nowrap;
        }
        .dplayer-toggle {
            width: 32px;
            height: 20px;
            text-align: center;
            font-size: 0;
            vertical-align: middle;
            position: absolute;
            top: 5px;
            right: 10px;
            input {
                max-height: 0;
                max-width: 0;
                display: none;
            }
            input+label {
                display: inline-block;
                position: relative;
                box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;
                border: 1px solid rgb(223, 223, 223);
                height: 20px;
                width: 32px;
                border-radius: 10px;
                box-sizing: border-box;
                cursor: pointer;
                transition: .2s ease-in-out;
            }
            input+label:before {
                content: "";
                position: absolute;
                display: block;
                height: 18px;
                width: 18px;
                top: 0;
                left: 0;
                border-radius: 15px;
                transition: .2s ease-in-out;
            }
            input+label:after {
                content: "";
                position: absolute;
                display: block;
                left: 0;
                top: 0;
                border-radius: 15px;
                background: #fff;
                transition: .2s ease-in-out;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
                height: 18px;
                width: 18px;
            }
            input:checked+label {
                border-color: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:before {
                width: 30px;
                background: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:after {
                left: 12px;
            }
        }
    }
}

.dplayer-mobile-play {
    display: none;
    width: 50px;
    height: 50px;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    opacity: 0.8;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}`,`.dplayer-danmaku {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    .dplayer-danmaku-item {
        display: inline-block;
        pointer-events: none;
        user-select: none;
        cursor: default;
        white-space: nowrap;
        text-shadow: .5px .5px .5px rgba(0, 0, 0, .5);
        &--demo {
            position: absolute;
            visibility: hidden;
        }
    }
    .dplayer-danmaku-right {
        position: absolute;
        right: 0;
        transform: translateX(100%);
        &.dplayer-danmaku-move {
            will-change: transform;
            animation-name: 'danmaku';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku {
        from {
            transform: translateX(100%);
        }
    }
    .dplayer-danmaku-top,
    .dplayer-danmaku-bottom {
        position: absolute;
        width: 100%;
        text-align: center;
        visibility: hidden;
        &.dplayer-danmaku-move {
            will-change: visibility;
            animation-name: 'danmaku-center';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku-center {
        from {
            visibility: visible;
        }
        to {
            visibility: visible;
        }
    }
}`,`.dplayer-logo {
    pointer-events: none;
    position: absolute;
    left: 20px;
    top: 20px;
    max-width: 50px;
    max-height: 50px;
    img {
        max-width: 100%;
        max-height: 100%;
        background: none;
    }
}`,`.dplayer-menu {
    position: absolute;
    width: 170px;
    border-radius: 2px;
    background: rgba(28, 28, 28, 0.85);
    padding: 5px 0;
    overflow: hidden;
    z-index: 3;
    display: none;
    &.dplayer-menu-show {
        display: block;
    }
    .dplayer-menu-item {
        height: 30px;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
            background-color: rgba(255, 255, 255, .1);
        }
        a {
            display: inline-block;
            padding: 0 10px;
            line-height: 30px;
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            width: 100%;
            box-sizing: border-box;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            &:hover {
                text-decoration: none;
            }
        }
    }
}`,`.dplayer-subtitle {
    position: absolute;
    bottom: 40px;
    width: 90%;
    left: 5%;
    text-align: center;
    color: #fff;
    text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
    font-size: 20px;
    &.dplayer-subtitle-hide {
        display: none;
    }
}`,`.dplayer-mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: none;
    &.dplayer-mask-show {
        display: block;
    }
}

.dplayer-video-wrap {
    position: relative;
    background: #000;
    font-size: 0;
    width: 100%;
    height: 100%;
    .dplayer-video {
        width: 100%;
        height: 100%;
        display: none;
    }
    .dplayer-video-current {
        display: block;
    }
    .dplayer-video-prepare {
        display: none;
    }
}`,`.dplayer-info-panel {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 400px;
    background: rgba(28, 28, 28, 0.8);
    padding: 10px;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;

    &-hide {
        display: none;
    }

    .dplayer-info-panel-close {
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .dplayer-info-panel-item {
        & > span {
            display: inline-block;
            vertical-align: middle;
            line-height: 15px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    .dplayer-info-panel-item-title {
        width: 100px;
        text-align: right;
        margin-right: 10px;
    }
    
    .dplayer-info-panel-item-data {
        width: 260px;
    }
}`],sourceRoot:""}]);const h=d},856:T=>{var w=[];function _(u){for(var r=-1,A=0;A<w.length;A++)if(w[A].identifier===u){r=A;break}return r}function S(u,r){for(var A={},l=[],p=0;p<u.length;p++){var y=u[p],d=r.base?y[0]+r.base:y[0],o=A[d]||0,h="".concat(d," ").concat(o);A[d]=o+1;var f=_(h),s={css:y[1],media:y[2],sourceMap:y[3],supports:y[4],layer:y[5]};if(f!==-1)w[f].references++,w[f].updater(s);else{var g=b(s,r);r.byIndex=p,w.splice(p,0,{identifier:h,updater:g,references:1})}l.push(h)}return l}function b(u,r){var A=r.domAPI(r);return A.update(u),function(l){if(l){if(l.css===u.css&&l.media===u.media&&l.sourceMap===u.sourceMap&&l.supports===u.supports&&l.layer===u.layer)return;A.update(u=l)}else A.remove()}}T.exports=function(u,r){var A=S(u=u||[],r=r||{});return function(l){l=l||[];for(var p=0;p<A.length;p++){var y=_(A[p]);w[y].references--}for(var d=S(l,r),o=0;o<A.length;o++){var h=_(A[o]);w[h].references===0&&(w[h].updater(),w.splice(h,1))}A=d}}},370:T=>{var w={};T.exports=function(_,S){var b=function(u){if(w[u]===void 0){var r=document.querySelector(u);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch{r=null}w[u]=r}return w[u]}(_);if(!b)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");b.appendChild(S)}},278:T=>{T.exports=function(w){var _=document.createElement("style");return w.setAttributes(_,w.attributes),w.insert(_,w.options),_}},458:(T,w,_)=>{T.exports=function(S){var b=_.nc;b&&S.setAttribute("nonce",b)}},470:T=>{T.exports=function(w){var _=w.insertStyleElement(w);return{update:function(S){(function(b,u,r){var A="";r.supports&&(A+="@supports (".concat(r.supports,") {")),r.media&&(A+="@media ".concat(r.media," {"));var l=r.layer!==void 0;l&&(A+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),A+=r.css,l&&(A+="}"),r.media&&(A+="}"),r.supports&&(A+="}");var p=r.sourceMap;p&&typeof btoa<"u"&&(A+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(p))))," */")),u.styleTagTransform(A,b,u.options)})(_,w,S)},remove:function(){(function(S){if(S.parentNode===null)return!1;S.parentNode.removeChild(S)})(_)}}}},488:T=>{T.exports=function(w,_){if(_.styleSheet)_.styleSheet.cssText=w;else{for(;_.firstChild;)_.removeChild(_.firstChild);_.appendChild(document.createTextNode(w))}}},251:T=>{T.exports='<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>'},113:T=>{T.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'},193:T=>{T.exports='<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chromecast" class="svg-inline--fa fa-chromecast fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path></svg>'},338:T=>{T.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'},807:T=>{T.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'},300:T=>{T.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'},574:T=>{T.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'},182:T=>{T.exports='<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'},965:T=>{T.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'},74:T=>{T.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'},730:T=>{T.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'},428:T=>{T.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'},254:T=>{T.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'},934:T=>{T.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'},410:T=>{T.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'},644:T=>{T.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'},324:T=>{T.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},437:T=>{T.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'},897:(T,w,_)=>{var S=typeof self<"u"?self:typeof window<"u"?window:_.g!==void 0?_.g:{},b=Object.create(S),u=/["&'<>]/;function r(A){return typeof A!="string"&&(A=A==null?"":typeof A=="function"?r(A.call(A)):JSON.stringify(A)),A}b.$escape=function(A){return function(l){var p=""+l,y=u.exec(p);if(!y)return l;var d="",o=void 0,h=void 0,f=void 0;for(o=y.index,h=0;o<p.length;o++){switch(p.charCodeAt(o)){case 34:f="&#34;";break;case 38:f="&#38;";break;case 39:f="&#39;";break;case 60:f="&#60;";break;case 62:f="&#62;";break;default:continue}h!==o&&(d+=p.substring(h,o)),h=o+1,d+=f}return h!==o?d+p.substring(h,o):d}(r(A))},b.$each=function(A,l){if(Array.isArray(A))for(var p=0,y=A.length;p<y;p++)l(A[p],p);else for(var d in A)l(A[d],d)},T.exports=b},471:(T,w,_)=>{T.exports=_(897)},352:T=>{T.exports=function(w){var _=[];return _.toString=function(){return this.map(function(S){var b="",u=S[5]!==void 0;return S[4]&&(b+="@supports (".concat(S[4],") {")),S[2]&&(b+="@media ".concat(S[2]," {")),u&&(b+="@layer".concat(S[5].length>0?" ".concat(S[5]):""," {")),b+=w(S),u&&(b+="}"),S[2]&&(b+="}"),S[4]&&(b+="}"),b}).join("")},_.i=function(S,b,u,r,A){typeof S=="string"&&(S=[[null,S,void 0]]);var l={};if(u)for(var p=0;p<this.length;p++){var y=this[p][0];y!=null&&(l[y]=!0)}for(var d=0;d<S.length;d++){var o=[].concat(S[d]);u&&l[o[0]]||(A!==void 0&&(o[5]===void 0||(o[1]="@layer".concat(o[5].length>0?" ".concat(o[5]):""," {").concat(o[1],"}")),o[5]=A),b&&(o[2]&&(o[1]="@media ".concat(o[2]," {").concat(o[1],"}")),o[2]=b),r&&(o[4]?(o[1]="@supports (".concat(o[4],") {").concat(o[1],"}"),o[4]=r):o[4]="".concat(r)),_.push(o))}},_}},80:T=>{T.exports=function(w,_){return _||(_={}),w&&(w=String(w.__esModule?w.default:w),/^['"].*['"]$/.test(w)&&(w=w.slice(1,-1)),_.hash&&(w+=_.hash),/["'() \t\n]|(%20)/.test(w)||_.needQuotes?'"'.concat(w.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):w)}},415:T=>{T.exports=function(w){var _=w[1],S=w[3];if(!S)return _;if(typeof btoa=="function"){var b=btoa(unescape(encodeURIComponent(JSON.stringify(S)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(b),r="/*# ".concat(u," */");return[_].concat([r]).join(`
`)}return[_].join(`
`)}},937:T=>{function w(_){return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(S){return typeof S}:function(S){return S&&typeof Symbol=="function"&&S.constructor===Symbol&&S!==Symbol.prototype?"symbol":typeof S},w(_)}T.exports=(typeof self>"u"?"undefined":w(self))=="object"?self.FormData:window.FormData},831:T=>{T.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg=="}},Oe={};function W(T){var w=Oe[T];if(w!==void 0)return w.exports;var _=Oe[T]={id:T,exports:{}};return Me[T](_,_.exports,W),_.exports}W.m=Me,W.n=T=>{var w=T&&T.__esModule?()=>T.default:()=>T;return W.d(w,{a:w}),w},W.d=(T,w)=>{for(var _ in w)W.o(w,_)&&!W.o(T,_)&&Object.defineProperty(T,_,{enumerable:!0,get:w[_]})},W.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),W.o=(T,w)=>Object.prototype.hasOwnProperty.call(T,w),W.b=document.baseURI||self.location.href,W.nc=void 0;var Ue={};return(()=>{W.d(Ue,{default:()=>qa});var T=W(856),w=W.n(T),_=W(470),S=W.n(_),b=W(370),u=W.n(b),r=W(458),A=W.n(r),l=W(278),p=W.n(l),y=W(488),d=W.n(y),o=W(685),h={};h.styleTagTransform=d(),h.setAttributes=A(),h.insert=u().bind(null,"head"),h.domAPI=S(),h.insertStyleElement=p(),w()(o.Z,h),o.Z&&o.Z.locals&&o.Z.locals;function f(t){return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},f(t)}function s(t,n){this.name="AggregateError",this.errors=t,this.message=n||""}s.prototype=Error.prototype;function g(t){return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},g(t)}var E=setTimeout;function C(t){return!!(t&&t.length!==void 0)}function R(){}function L(t){if(!(this instanceof L))throw new TypeError("Promises must be constructed via new");if(typeof t!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],j(t,this)}function O(t,n){for(;t._state===3;)t=t._value;t._state!==0?(t._handled=!0,L._immediateFn(function(){var c=t._state===1?n.onFulfilled:n.onRejected;if(c!==null){var e;try{e=c(t._value)}catch(a){return void I(n.promise,a)}k(n.promise,e)}else(t._state===1?k:I)(n.promise,t._value)})):t._deferreds.push(n)}function k(t,n){try{if(n===t)throw new TypeError("A promise cannot be resolved with itself.");if(n&&(g(n)==="object"||typeof n=="function")){var c=n.then;if(n instanceof L)return t._state=3,t._value=n,void M(t);if(typeof c=="function")return void j((e=c,a=n,function(){e.apply(a,arguments)}),t)}t._state=1,t._value=n,M(t)}catch(i){I(t,i)}var e,a}function I(t,n){t._state=2,t._value=n,M(t)}function M(t){t._state===2&&t._deferreds.length===0&&L._immediateFn(function(){t._handled||L._unhandledRejectionFn(t._value)});for(var n=0,c=t._deferreds.length;n<c;n++)O(t,t._deferreds[n]);t._deferreds=null}function U(t,n,c){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=typeof n=="function"?n:null,this.promise=c}function j(t,n){var c=!1;try{t(function(e){c||(c=!0,k(n,e))},function(e){c||(c=!0,I(n,e))})}catch(e){if(c)return;c=!0,I(n,e)}}L.prototype.catch=function(t){return this.then(null,t)},L.prototype.then=function(t,n){var c=new this.constructor(R);return O(this,new U(t,n,c)),c},L.prototype.finally=function(t){var n=this.constructor;return this.then(function(c){return n.resolve(t()).then(function(){return c})},function(c){return n.resolve(t()).then(function(){return n.reject(c)})})},L.all=function(t){return new L(function(n,c){if(!C(t))return c(new TypeError("Promise.all accepts an array"));var e=Array.prototype.slice.call(t);if(e.length===0)return n([]);var a=e.length;function i(v,x){try{if(x&&(g(x)==="object"||typeof x=="function")){var D=x.then;if(typeof D=="function")return void D.call(x,function(P){i(v,P)},c)}e[v]=x,--a==0&&n(e)}catch(P){c(P)}}for(var m=0;m<e.length;m++)i(m,e[m])})},L.any=function(t){var n=this;return new n(function(c,e){if(!t||t.length===void 0)return e(new TypeError("Promise.any accepts an array"));var a=Array.prototype.slice.call(t);if(a.length===0)return e();for(var i=[],m=0;m<a.length;m++)try{n.resolve(a[m]).then(c).catch(function(v){i.push(v),i.length===a.length&&e(new s(i,"All promises were rejected"))})}catch(v){e(v)}})},L.allSettled=function(t){return new this(function(n,c){if(!t||t.length===void 0)return c(new TypeError(f(t)+" "+t+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var e=Array.prototype.slice.call(t);if(e.length===0)return n([]);var a=e.length;function i(v,x){if(x&&(f(x)==="object"||typeof x=="function")){var D=x.then;if(typeof D=="function")return void D.call(x,function(P){i(v,P)},function(P){e[v]={status:"rejected",reason:P},--a==0&&n(e)})}e[v]={status:"fulfilled",value:x},--a==0&&n(e)}for(var m=0;m<e.length;m++)i(m,e[m])})},L.resolve=function(t){return t&&g(t)==="object"&&t.constructor===L?t:new L(function(n){n(t)})},L.reject=function(t){return new L(function(n,c){c(t)})},L.race=function(t){return new L(function(n,c){if(!C(t))return c(new TypeError("Promise.race accepts an array"));for(var e=0,a=t.length;e<a;e++)L.resolve(t[e]).then(n,c)})},L._immediateFn=typeof setImmediate=="function"&&function(t){setImmediate(t)}||function(t){E(t,0)},L._unhandledRejectionFn=function(t){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",t)};const Y=L;var ne=/mobile/i.test(window.navigator.userAgent);const N={secondToTime:function(t){if((t=t||0)===0||t===1/0||t.toString()==="NaN")return"00:00";var n=Math.floor(t/3600),c=Math.floor((t-3600*n)/60),e=Math.floor(t-3600*n-60*c);return(n>0?[n,c,e]:[c,e]).map(function(a){return a<10?"0"+a:""+a}).join(":")},getElementViewLeft:function(t){var n=t.offsetLeft,c=t.offsetParent,e=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;c!==null&&c!==t;)n+=c.offsetLeft,c=c.offsetParent;else for(;c!==null;)n+=c.offsetLeft,c=c.offsetParent;return n-e},getBoundingClientRectViewLeft:function(t){var n=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);if(t.getBoundingClientRect){if(typeof this.getBoundingClientRectViewLeft.offset!="number"){var c=document.createElement("div");c.style.cssText="position:absolute;top:0;left:0;",document.body.appendChild(c),this.getBoundingClientRectViewLeft.offset=-c.getBoundingClientRect().top-n,document.body.removeChild(c),c=null}var e=t.getBoundingClientRect(),a=this.getBoundingClientRectViewLeft.offset;return e.left+a}return this.getElementViewLeft(t)},getScrollPosition:function(){return{left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},setScrollPosition:function(t){var n=t.left,c=n===void 0?0:n,e=t.top,a=e===void 0?0:e;this.isFirefox?(document.documentElement.scrollLeft=c,document.documentElement.scrollTop=a):window.scrollTo(c,a)},isMobile:ne,isFirefox:/firefox/i.test(window.navigator.userAgent),isChrome:/chrome/i.test(window.navigator.userAgent),isSafari:/safari/i.test(window.navigator.userAgent),storage:{set:function(t,n){localStorage.setItem(t,n)},get:function(t){return localStorage.getItem(t)}},nameMap:{dragStart:ne?"touchstart":"mousedown",dragMove:ne?"touchmove":"mousemove",dragEnd:ne?"touchend":"mouseup"},color2Number:function(t){return t[0]==="#"&&(t=t.substr(1)),t.length===3&&(t="".concat(t[0]).concat(t[0]).concat(t[1]).concat(t[1]).concat(t[2]).concat(t[2])),parseInt(t,16)+0&16777215},number2Color:function(t){return"#"+("00000"+t.toString(16)).slice(-6)},number2Type:function(t){switch(t){case 0:default:return"right";case 1:return"top";case 2:return"bottom"}}};function te(t,n){return function(){return t.apply(n,arguments)}}function ie(t){return ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ie(t)}var pe,J=Object.prototype.toString,oe=Object.getPrototypeOf,Se=(pe=Object.create(null),function(t){var n=J.call(t);return pe[n]||(pe[n]=n.slice(8,-1).toLowerCase())}),se=function(t){return t=t.toLowerCase(),function(n){return Se(n)===t}},de=function(t){return function(n){return ie(n)===t}},Ae=Array.isArray,me=de("undefined"),xe=se("ArrayBuffer"),Le=de("string"),le=de("function"),Z=de("number"),_e=function(t){return t!==null&&ie(t)==="object"},we=function(t){if(Se(t)!=="object")return!1;var n=oe(t);return!(n!==null&&n!==Object.prototype&&Object.getPrototypeOf(n)!==null||Symbol.toStringTag in t||Symbol.iterator in t)},Pe=se("Date"),Ie=se("File"),Te=se("Blob"),Ne=se("FileList"),ze=se("URLSearchParams");function Ee(t,n){var c,e,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=a.allOwnKeys,m=i!==void 0&&i;if(t!=null)if(ie(t)!=="object"&&(t=[t]),Ae(t))for(c=0,e=t.length;c<e;c++)n.call(null,t[c],c,t);else{var v,x=m?Object.getOwnPropertyNames(t):Object.keys(t),D=x.length;for(c=0;c<D;c++)v=x[c],n.call(null,t[v],v,t)}}function ke(t,n){n=n.toLowerCase();for(var c,e=Object.keys(t),a=e.length;a-- >0;)if(n===(c=e[a]).toLowerCase())return c;return null}var Fe,He,Tt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Ga,Dt=function(t){return!me(t)&&t!==Tt},Yt=(Fe=typeof Uint8Array<"u"&&oe(Uint8Array),function(t){return Fe&&t instanceof Fe}),Ce=se("HTMLFormElement"),Mt=(He=Object.prototype.hasOwnProperty,function(t,n){return He.call(t,n)}),F=se("RegExp"),z=function(t,n){var c=Object.getOwnPropertyDescriptors(t),e={};Ee(c,function(a,i){n(a,i,t)!==!1&&(e[i]=a)}),Object.defineProperties(t,e)};const B={isArray:Ae,isArrayBuffer:xe,isBuffer:function(t){return t!==null&&!me(t)&&t.constructor!==null&&!me(t.constructor)&&le(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:function(t){var n="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||J.call(t)===n||le(t.toString)&&t.toString()===n)},isArrayBufferView:function(t){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&xe(t.buffer)},isString:Le,isNumber:Z,isBoolean:function(t){return t===!0||t===!1},isObject:_e,isPlainObject:we,isUndefined:me,isDate:Pe,isFile:Ie,isBlob:Te,isRegExp:F,isFunction:le,isStream:function(t){return _e(t)&&le(t.pipe)},isURLSearchParams:ze,isTypedArray:Yt,isFileList:Ne,forEach:Ee,merge:function t(){for(var n=Dt(this)&&this||{},c=n.caseless,e={},a=function(v,x){var D=c&&ke(e,x)||x;we(e[D])&&we(v)?e[D]=t(e[D],v):we(v)?e[D]=t({},v):Ae(v)?e[D]=v.slice():e[D]=v},i=0,m=arguments.length;i<m;i++)arguments[i]&&Ee(arguments[i],a);return e},extend:function(t,n,c){var e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=e.allOwnKeys;return Ee(n,function(i,m){c&&le(i)?t[m]=te(i,c):t[m]=i},{allOwnKeys:a}),t},trim:function(t){return t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t},inherits:function(t,n,c,e){t.prototype=Object.create(n.prototype,e),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:n.prototype}),c&&Object.assign(t.prototype,c)},toFlatObject:function(t,n,c,e){var a,i,m,v={};if(n=n||{},t==null)return n;do{for(i=(a=Object.getOwnPropertyNames(t)).length;i-- >0;)m=a[i],e&&!e(m,t,n)||v[m]||(n[m]=t[m],v[m]=!0);t=c!==!1&&oe(t)}while(t&&(!c||c(t,n))&&t!==Object.prototype);return n},kindOf:Se,kindOfTest:se,endsWith:function(t,n,c){t=String(t),(c===void 0||c>t.length)&&(c=t.length),c-=n.length;var e=t.indexOf(n,c);return e!==-1&&e===c},toArray:function(t){if(!t)return null;if(Ae(t))return t;var n=t.length;if(!Z(n))return null;for(var c=new Array(n);n-- >0;)c[n]=t[n];return c},forEachEntry:function(t,n){for(var c,e=(t&&t[Symbol.iterator]).call(t);(c=e.next())&&!c.done;){var a=c.value;n.call(t,a[0],a[1])}},matchAll:function(t,n){for(var c,e=[];(c=t.exec(n))!==null;)e.push(c);return e},isHTMLForm:Ce,hasOwnProperty:Mt,hasOwnProp:Mt,reduceDescriptors:z,freezeMethods:function(t){z(t,function(n,c){if(le(t)&&["arguments","caller","callee"].indexOf(c)!==-1)return!1;var e=t[c];le(e)&&(n.enumerable=!1,"writable"in n?n.writable=!1:n.set||(n.set=function(){throw Error("Can not rewrite read-only method '"+c+"'")}))})},toObjectSet:function(t,n){var c={},e=function(a){a.forEach(function(i){c[i]=!0})};return Ae(t)?e(t):e(String(t).split(n)),c},toCamelCase:function(t){return t.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,c,e){return c.toUpperCase()+e})},noop:function(){},toFiniteNumber:function(t,n){return t=+t,Number.isFinite(t)?t:n},findKey:ke,global:Tt,isContextDefined:Dt,toJSONObject:function(t){var n=new Array(10);return function c(e,a){if(_e(e)){if(n.indexOf(e)>=0)return;if(!("toJSON"in e)){n[a]=e;var i=Ae(e)?[]:{};return Ee(e,function(m,v){var x=c(m,a+1);!me(x)&&(i[v]=x)}),n[a]=void 0,i}}return e}(t,0)}};function Q(t,n,c,e,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",n&&(this.code=n),c&&(this.config=c),e&&(this.request=e),a&&(this.response=a)}B.inherits(Q,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:B.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var re=Q.prototype,ae={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(function(t){ae[t]={value:t}}),Object.defineProperties(Q,ae),Object.defineProperty(re,"isAxiosError",{value:!0}),Q.from=function(t,n,c,e,a,i){var m=Object.create(re);return B.toFlatObject(t,m,function(v){return v!==Error.prototype},function(v){return v!=="isAxiosError"}),Q.call(m,t.message,n,c,e,a),m.cause=t,m.name=t.name,i&&Object.assign(m,i),m};const $=Q,We=W(937);function Ke(t){return Ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ke(t)}function Ge(t){return B.isPlainObject(t)||B.isArray(t)}function Ze(t){return B.endsWith(t,"[]")?t.slice(0,-2):t}function on(t,n,c){return t?t.concat(n).map(function(e,a){return e=Ze(e),!c&&a?"["+e+"]":e}).join(c?".":""):n}var qn=B.toFlatObject(B,{},null,function(t){return/^is[A-Z]/.test(t)});const Pt=function(t,n,c){if(!B.isObject(t))throw new TypeError("target must be an object");n=n||new(We||FormData);var e,a=(c=B.toFlatObject(c,{metaTokens:!0,dots:!1,indexes:!1},!1,function(G,H){return!B.isUndefined(H[G])})).metaTokens,i=c.visitor||P,m=c.dots,v=c.indexes,x=(c.Blob||typeof Blob<"u"&&Blob)&&(e=n)&&B.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator];if(!B.isFunction(i))throw new TypeError("visitor must be a function");function D(G){if(G===null)return"";if(B.isDate(G))return G.toISOString();if(!x&&B.isBlob(G))throw new $("Blob is not supported. Use a Buffer instead.");return B.isArrayBuffer(G)||B.isTypedArray(G)?x&&typeof Blob=="function"?new Blob([G]):Buffer.from(G):G}function P(G,H,q){var X=G;if(G&&!q&&Ke(G)==="object"){if(B.endsWith(H,"{}"))H=a?H:H.slice(0,-2),G=JSON.stringify(G);else if(B.isArray(G)&&function(ee){return B.isArray(ee)&&!ee.some(Ge)}(G)||B.isFileList(G)||B.endsWith(H,"[]")&&(X=B.toArray(G)))return H=Ze(H),X.forEach(function(ee,be){!B.isUndefined(ee)&&ee!==null&&n.append(v===!0?on([H],be,m):v===null?H:H+"[]",D(ee))}),!1}return!!Ge(G)||(n.append(on(q,H,m),D(G)),!1)}var K=[],V=Object.assign(qn,{defaultVisitor:P,convertValue:D,isVisitable:Ge});if(!B.isObject(t))throw new TypeError("data must be an object");return function G(H,q){if(!B.isUndefined(H)){if(K.indexOf(H)!==-1)throw Error("Circular reference detected in "+q.join("."));K.push(H),B.forEach(H,function(X,ee){(!(B.isUndefined(X)||X===null)&&i.call(n,X,B.isString(ee)?ee.trim():ee,q,V))===!0&&G(X,q?q.concat(ee):[ee])}),K.pop()}}(t),n};function sn(t){var n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(c){return n[c]})}function ln(t,n){this._pairs=[],t&&Pt(t,this,n)}var dn=ln.prototype;dn.append=function(t,n){this._pairs.push([t,n])},dn.toString=function(t){var n=t?function(c){return t.call(this,c,sn)}:sn;return this._pairs.map(function(c){return n(c[0])+"="+n(c[1])},"").join("&")};const pn=ln;function Yn(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function un(t,n,c){if(!n)return t;var e,a=c&&c.encode||Yn,i=c&&c.serialize;if(e=i?i(n,c):B.isURLSearchParams(n)?n.toString():new pn(n,c).toString(a)){var m=t.indexOf("#");m!==-1&&(t=t.slice(0,m)),t+=(t.indexOf("?")===-1?"?":"&")+e}return t}function lt(t){return lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},lt(t)}function Vn(t,n){for(var c=0;c<n.length;c++){var e=n[c];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,(a=function(i,m){if(lt(i)!=="object"||i===null)return i;var v=i[Symbol.toPrimitive];if(v!==void 0){var x=v.call(i,"string");if(lt(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(e.key),lt(a)==="symbol"?a:String(a)),e)}var a}var Hn=function(){function t(){(function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")})(this,t),this.handlers=[]}var n,c;return n=t,c=[{key:"use",value:function(e,a,i){return this.handlers.push({fulfilled:e,rejected:a,synchronous:!!i&&i.synchronous,runWhen:i?i.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(e){this.handlers[e]&&(this.handlers[e]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(e){B.forEach(this.handlers,function(a){a!==null&&e(a)})}}],c&&Vn(n.prototype,c),Object.defineProperty(n,"prototype",{writable:!1}),t}();const cn=Hn,fn={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Gn=typeof URLSearchParams<"u"?URLSearchParams:pn,Qn=FormData;var Vt,Xn=(typeof navigator>"u"||(Vt=navigator.product)!=="ReactNative"&&Vt!=="NativeScript"&&Vt!=="NS")&&typeof window<"u"&&typeof document<"u",Zn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function";const De={isBrowser:!0,classes:{URLSearchParams:Gn,FormData:Qn,Blob},isStandardBrowserEnv:Xn,isStandardBrowserWebWorkerEnv:Zn,protocols:["http","https","file","blob","url","data"]},hn=function(t){function n(e,a,i,m){var v=e[m++],x=Number.isFinite(+v),D=m>=e.length;return v=!v&&B.isArray(i)?i.length:v,D?(B.hasOwnProp(i,v)?i[v]=[i[v],a]:i[v]=a,!x):(i[v]&&B.isObject(i[v])||(i[v]=[]),n(e,a,i[v],m)&&B.isArray(i[v])&&(i[v]=function(P){var K,V,G={},H=Object.keys(P),q=H.length;for(K=0;K<q;K++)G[V=H[K]]=P[V];return G}(i[v])),!x)}if(B.isFormData(t)&&B.isFunction(t.entries)){var c={};return B.forEachEntry(t,function(e,a){n(function(i){return B.matchAll(/\w+|\[(\w*)]/g,i).map(function(m){return m[0]==="[]"?"":m[1]||m[0]})}(e),a,c,0)}),c}return null};var Jn={"Content-Type":void 0},Ft={transitional:fn,adapter:["xhr","http"],transformRequest:[function(t,n){var c,e=n.getContentType()||"",a=e.indexOf("application/json")>-1,i=B.isObject(t);if(i&&B.isHTMLForm(t)&&(t=new FormData(t)),B.isFormData(t))return a&&a?JSON.stringify(hn(t)):t;if(B.isArrayBuffer(t)||B.isBuffer(t)||B.isStream(t)||B.isFile(t)||B.isBlob(t))return t;if(B.isArrayBufferView(t))return t.buffer;if(B.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();if(i){if(e.indexOf("application/x-www-form-urlencoded")>-1)return function(v,x){return Pt(v,new De.classes.URLSearchParams,Object.assign({visitor:function(D,P,K,V){return De.isNode&&B.isBuffer(D)?(this.append(P,D.toString("base64")),!1):V.defaultVisitor.apply(this,arguments)}},x))}(t,this.formSerializer).toString();if((c=B.isFileList(t))||e.indexOf("multipart/form-data")>-1){var m=this.env&&this.env.FormData;return Pt(c?{"files[]":t}:t,m&&new m,this.formSerializer)}}return i||a?(n.setContentType("application/json",!1),function(v,x,D){if(B.isString(v))try{return(0,JSON.parse)(v),B.trim(v)}catch(P){if(P.name!=="SyntaxError")throw P}return(0,JSON.stringify)(v)}(t)):t}],transformResponse:[function(t){var n=this.transitional||Ft.transitional,c=n&&n.forcedJSONParsing,e=this.responseType==="json";if(t&&B.isString(t)&&(c&&!this.responseType||e)){var a=!(n&&n.silentJSONParsing)&&e;try{return JSON.parse(t)}catch(i){if(a)throw i.name==="SyntaxError"?$.from(i,$.ERR_BAD_RESPONSE,this,null,this.response):i}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:De.classes.FormData,Blob:De.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};B.forEach(["delete","get","head"],function(t){Ft.headers[t]={}}),B.forEach(["post","put","patch"],function(t){Ft.headers[t]=B.merge(Jn)});const Ht=Ft;var $n=B.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);function dt(t){return dt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},dt(t)}function mn(t,n){(n==null||n>t.length)&&(n=t.length);for(var c=0,e=new Array(n);c<n;c++)e[c]=t[c];return e}function yn(t,n){for(var c=0;c<n.length;c++){var e=n[c];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,(a=function(i,m){if(dt(i)!=="object"||i===null)return i;var v=i[Symbol.toPrimitive];if(v!==void 0){var x=v.call(i,"string");if(dt(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(e.key),dt(a)==="symbol"?a:String(a)),e)}var a}var An=Symbol("internals");function pt(t){return t&&String(t).trim().toLowerCase()}function jt(t){return t===!1||t==null?t:B.isArray(t)?t.map(jt):String(t)}function gn(t,n,c,e){return B.isFunction(e)?e.call(this,n,c):B.isString(n)?B.isString(e)?n.indexOf(e)!==-1:B.isRegExp(e)?e.test(n):void 0:void 0}var Ut=function(t,n){function c(m){(function(v,x){if(!(v instanceof x))throw new TypeError("Cannot call a class as a function")})(this,c),m&&this.set(m)}var e,a,i;return e=c,a=[{key:"set",value:function(m,v,x){var D=this;function P(ee,be,ye){var ue=pt(be);if(!ue)throw new Error("header name must be a non-empty string");var Ve=B.findKey(D,ue);(!Ve||D[Ve]===void 0||ye===!0||ye===void 0&&D[Ve]!==!1)&&(D[Ve||be]=jt(ee))}var K,V,G,H,q,X=function(ee,be){return B.forEach(ee,function(ye,ue){return P(ye,ue,be)})};return B.isPlainObject(m)||m instanceof this.constructor?X(m,v):B.isString(m)&&(m=m.trim())&&!/^[-_a-zA-Z]+$/.test(m.trim())?X((q={},(K=m)&&K.split(`
`).forEach(function(ee){H=ee.indexOf(":"),V=ee.substring(0,H).trim().toLowerCase(),G=ee.substring(H+1).trim(),!V||q[V]&&$n[V]||(V==="set-cookie"?q[V]?q[V].push(G):q[V]=[G]:q[V]=q[V]?q[V]+", "+G:G)}),q),v):m!=null&&P(v,m,x),this}},{key:"get",value:function(m,v){if(m=pt(m)){var x=B.findKey(this,m);if(x){var D=this[x];if(!v)return D;if(v===!0)return function(P){for(var K,V=Object.create(null),G=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;K=G.exec(P);)V[K[1]]=K[2];return V}(D);if(B.isFunction(v))return v.call(this,D,x);if(B.isRegExp(v))return v.exec(D);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(m,v){if(m=pt(m)){var x=B.findKey(this,m);return!(!x||v&&!gn(0,this[x],x,v))}return!1}},{key:"delete",value:function(m,v){var x=this,D=!1;function P(K){if(K=pt(K)){var V=B.findKey(x,K);!V||v&&!gn(0,x[V],V,v)||(delete x[V],D=!0)}}return B.isArray(m)?m.forEach(P):P(m),D}},{key:"clear",value:function(){return Object.keys(this).forEach(this.delete.bind(this))}},{key:"normalize",value:function(m){var v=this,x={};return B.forEach(this,function(D,P){var K=B.findKey(x,P);if(K)return v[K]=jt(D),void delete v[P];var V=m?function(G){return G.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,function(H,q,X){return q.toUpperCase()+X})}(P):String(P).trim();V!==P&&delete v[P],v[V]=jt(D),x[V]=!0}),this}},{key:"concat",value:function(){for(var m,v=arguments.length,x=new Array(v),D=0;D<v;D++)x[D]=arguments[D];return(m=this.constructor).concat.apply(m,[this].concat(x))}},{key:"toJSON",value:function(m){var v=Object.create(null);return B.forEach(this,function(x,D){x!=null&&x!==!1&&(v[D]=m&&B.isArray(x)?x.join(", "):x)}),v}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map(function(m){var v,x,D=(x=2,function(P){if(Array.isArray(P))return P}(v=m)||function(P,K){var V=P==null?null:typeof Symbol<"u"&&P[Symbol.iterator]||P["@@iterator"];if(V!=null){var G,H,q,X,ee=[],be=!0,ye=!1;try{if(q=(V=V.call(P)).next,K===0){if(Object(V)!==V)return;be=!1}else for(;!(be=(G=q.call(V)).done)&&(ee.push(G.value),ee.length!==K);be=!0);}catch(ue){ye=!0,H=ue}finally{try{if(!be&&V.return!=null&&(X=V.return(),Object(X)!==X))return}finally{if(ye)throw H}}return ee}}(v,x)||function(P,K){if(P){if(typeof P=="string")return mn(P,K);var V=Object.prototype.toString.call(P).slice(8,-1);return V==="Object"&&P.constructor&&(V=P.constructor.name),V==="Map"||V==="Set"?Array.from(P):V==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V)?mn(P,K):void 0}}(v,x)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}());return D[0]+": "+D[1]}).join(`
`)}},{key:Symbol.toStringTag,get:function(){return"AxiosHeaders"}}],i=[{key:"from",value:function(m){return m instanceof this?m:new this(m)}},{key:"concat",value:function(m){for(var v=new this(m),x=arguments.length,D=new Array(x>1?x-1:0),P=1;P<x;P++)D[P-1]=arguments[P];return D.forEach(function(K){return v.set(K)}),v}},{key:"accessor",value:function(m){var v=(this[An]=this[An]={accessors:{}}).accessors,x=this.prototype;function D(P){var K=pt(P);v[K]||(function(V,G){var H=B.toCamelCase(" "+G);["get","set","has"].forEach(function(q){Object.defineProperty(V,q+H,{value:function(X,ee,be){return this[q].call(this,G,X,ee,be)},configurable:!0})})}(x,P),v[K]=!0)}return B.isArray(m)?m.forEach(D):D(m),this}}],a&&yn(e.prototype,a),i&&yn(e,i),Object.defineProperty(e,"prototype",{writable:!1}),c}();Ut.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),B.freezeMethods(Ut.prototype),B.freezeMethods(Ut);const je=Ut;function Gt(t,n){var c=this||Ht,e=n||c,a=je.from(e.headers),i=e.data;return B.forEach(t,function(m){i=m.call(c,i,a.normalize(),n?n.status:void 0)}),a.normalize(),i}function bn(t){return!(!t||!t.__CANCEL__)}function vn(t,n,c){$.call(this,t??"canceled",$.ERR_CANCELED,n,c),this.name="CanceledError"}B.inherits(vn,$,{__CANCEL__:!0});const Nt=vn,er=De.isStandardBrowserEnv?{write:function(t,n,c,e,a,i){var m=[];m.push(t+"="+encodeURIComponent(n)),B.isNumber(c)&&m.push("expires="+new Date(c).toGMTString()),B.isString(e)&&m.push("path="+e),B.isString(a)&&m.push("domain="+a),i===!0&&m.push("secure"),document.cookie=m.join("; ")},read:function(t){var n=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function _n(t,n){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)?function(c,e){return e?c.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):c}(t,n):n}const tr=De.isStandardBrowserEnv?function(){var t,n=/(msie|trident)/i.test(navigator.userAgent),c=document.createElement("a");function e(a){var i=a;return n&&(c.setAttribute("href",i),i=c.href),c.setAttribute("href",i),{href:c.href,protocol:c.protocol?c.protocol.replace(/:$/,""):"",host:c.host,search:c.search?c.search.replace(/^\?/,""):"",hash:c.hash?c.hash.replace(/^#/,""):"",hostname:c.hostname,port:c.port,pathname:c.pathname.charAt(0)==="/"?c.pathname:"/"+c.pathname}}return t=e(window.location.href),function(a){var i=B.isString(a)?e(a):a;return i.protocol===t.protocol&&i.host===t.host}}():function(){return!0};function xn(t,n){var c=0,e=function(a,i){a=a||10;var m,v=new Array(a),x=new Array(a),D=0,P=0;return i=i!==void 0?i:1e3,function(K){var V=Date.now(),G=x[P];m||(m=V),v[D]=K,x[D]=V;for(var H=P,q=0;H!==D;)q+=v[H++],H%=a;if((D=(D+1)%a)===P&&(P=(P+1)%a),!(V-m<i)){var X=G&&V-G;return X?Math.round(1e3*q/X):void 0}}}(50,250);return function(a){var i=a.loaded,m=a.lengthComputable?a.total:void 0,v=i-c,x=e(v);c=i;var D={loaded:i,total:m,progress:m?i/m:void 0,bytes:v,rate:x||void 0,estimated:x&&m&&i<=m?(m-i)/x:void 0,event:a};D[n?"download":"upload"]=!0,t(D)}}var Qt={http:null,xhr:typeof XMLHttpRequest<"u"&&function(t){return new Promise(function(n,c){var e,a=t.data,i=je.from(t.headers).normalize(),m=t.responseType;function v(){t.cancelToken&&t.cancelToken.unsubscribe(e),t.signal&&t.signal.removeEventListener("abort",e)}B.isFormData(a)&&(De.isStandardBrowserEnv||De.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);var x=new XMLHttpRequest;if(t.auth){var D=t.auth.username||"",P=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(D+":"+P))}var K=_n(t.baseURL,t.url);function V(){if(x){var X=je.from("getAllResponseHeaders"in x&&x.getAllResponseHeaders());(function(ee,be,ye){var ue=ye.config.validateStatus;ye.status&&ue&&!ue(ye.status)?be(new $("Request failed with status code "+ye.status,[$.ERR_BAD_REQUEST,$.ERR_BAD_RESPONSE][Math.floor(ye.status/100)-4],ye.config,ye.request,ye)):ee(ye)})(function(ee){n(ee),v()},function(ee){c(ee),v()},{data:m&&m!=="text"&&m!=="json"?x.response:x.responseText,status:x.status,statusText:x.statusText,headers:X,config:t,request:x}),x=null}}if(x.open(t.method.toUpperCase(),un(K,t.params,t.paramsSerializer),!0),x.timeout=t.timeout,"onloadend"in x?x.onloadend=V:x.onreadystatechange=function(){x&&x.readyState===4&&(x.status!==0||x.responseURL&&x.responseURL.indexOf("file:")===0)&&setTimeout(V)},x.onabort=function(){x&&(c(new $("Request aborted",$.ECONNABORTED,t,x)),x=null)},x.onerror=function(){c(new $("Network Error",$.ERR_NETWORK,t,x)),x=null},x.ontimeout=function(){var X=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",ee=t.transitional||fn;t.timeoutErrorMessage&&(X=t.timeoutErrorMessage),c(new $(X,ee.clarifyTimeoutError?$.ETIMEDOUT:$.ECONNABORTED,t,x)),x=null},De.isStandardBrowserEnv){var G=(t.withCredentials||tr(K))&&t.xsrfCookieName&&er.read(t.xsrfCookieName);G&&i.set(t.xsrfHeaderName,G)}a===void 0&&i.setContentType(null),"setRequestHeader"in x&&B.forEach(i.toJSON(),function(X,ee){x.setRequestHeader(ee,X)}),B.isUndefined(t.withCredentials)||(x.withCredentials=!!t.withCredentials),m&&m!=="json"&&(x.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&x.addEventListener("progress",xn(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&x.upload&&x.upload.addEventListener("progress",xn(t.onUploadProgress)),(t.cancelToken||t.signal)&&(e=function(X){x&&(c(!X||X.type?new Nt(null,t,x):X),x.abort(),x=null)},t.cancelToken&&t.cancelToken.subscribe(e),t.signal&&(t.signal.aborted?e():t.signal.addEventListener("abort",e)));var H,q=(H=/^([-+\w]{1,25})(:?\/\/|:)/.exec(K))&&H[1]||"";q&&De.protocols.indexOf(q)===-1?c(new $("Unsupported protocol "+q+":",$.ERR_BAD_REQUEST,t)):x.send(a||null)})}};B.forEach(Qt,function(t,n){if(t){try{Object.defineProperty(t,"name",{value:n})}catch{}Object.defineProperty(t,"adapterName",{value:n})}});function Xt(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Nt(null,t)}function En(t){return Xt(t),t.headers=je.from(t.headers),t.data=Gt.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),function(n){for(var c,e,a=(n=B.isArray(n)?n:[n]).length,i=0;i<a&&(c=n[i],!(e=B.isString(c)?Qt[c.toLowerCase()]:c));i++);if(!e)throw e===!1?new $("Adapter ".concat(c," is not supported by the environment"),"ERR_NOT_SUPPORT"):new Error(B.hasOwnProp(Qt,c)?"Adapter '".concat(c,"' is not available in the build"):"Unknown adapter '".concat(c,"'"));if(!B.isFunction(e))throw new TypeError("adapter is not a function");return e}(t.adapter||Ht.adapter)(t).then(function(n){return Xt(t),n.data=Gt.call(t,t.transformResponse,n),n.headers=je.from(n.headers),n},function(n){return bn(n)||(Xt(t),n&&n.response&&(n.response.data=Gt.call(t,t.transformResponse,n.response),n.response.headers=je.from(n.response.headers))),Promise.reject(n)})}var Cn=function(t){return t instanceof je?t.toJSON():t};function Je(t,n){n=n||{};var c={};function e(D,P,K){return B.isPlainObject(D)&&B.isPlainObject(P)?B.merge.call({caseless:K},D,P):B.isPlainObject(P)?B.merge({},P):B.isArray(P)?P.slice():P}function a(D,P,K){return B.isUndefined(P)?B.isUndefined(D)?void 0:e(void 0,D,K):e(D,P,K)}function i(D,P){if(!B.isUndefined(P))return e(void 0,P)}function m(D,P){return B.isUndefined(P)?B.isUndefined(D)?void 0:e(void 0,D):e(void 0,P)}function v(D,P,K){return K in n?e(D,P):K in t?e(void 0,D):void 0}var x={url:i,method:i,data:i,baseURL:m,transformRequest:m,transformResponse:m,paramsSerializer:m,timeout:m,timeoutMessage:m,withCredentials:m,adapter:m,responseType:m,xsrfCookieName:m,xsrfHeaderName:m,onUploadProgress:m,onDownloadProgress:m,decompress:m,maxContentLength:m,maxBodyLength:m,beforeRedirect:m,transport:m,httpAgent:m,httpsAgent:m,cancelToken:m,socketPath:m,responseEncoding:m,validateStatus:v,headers:function(D,P){return a(Cn(D),Cn(P),!0)}};return B.forEach(Object.keys(t).concat(Object.keys(n)),function(D){var P=x[D]||a,K=P(t[D],n[D],D);B.isUndefined(K)&&P!==v||(c[D]=K)}),c}function zt(t){return zt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},zt(t)}var Zt={};["object","boolean","number","function","string","symbol"].forEach(function(t,n){Zt[t]=function(c){return zt(c)===t||"a"+(n<1?"n ":" ")+t}});var wn={};Zt.transitional=function(t,n,c){function e(a,i){return"[Axios v1.2.3] Transitional option '"+a+"'"+i+(c?". "+c:"")}return function(a,i,m){if(t===!1)throw new $(e(i," has been removed"+(n?" in "+n:"")),$.ERR_DEPRECATED);return n&&!wn[i]&&(wn[i]=!0,console.warn(e(i," has been deprecated since v"+n+" and will be removed in the near future"))),!t||t(a,i,m)}};const Jt={assertOptions:function(t,n,c){if(zt(t)!=="object")throw new $("options must be an object",$.ERR_BAD_OPTION_VALUE);for(var e=Object.keys(t),a=e.length;a-- >0;){var i=e[a],m=n[i];if(m){var v=t[i],x=v===void 0||m(v,i,t);if(x!==!0)throw new $("option "+i+" must be "+x,$.ERR_BAD_OPTION_VALUE)}else if(c!==!0)throw new $("Unknown option "+i,$.ERR_BAD_OPTION)}},validators:Zt};function ut(t){return ut=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ut(t)}function nr(t,n){for(var c=0;c<n.length;c++){var e=n[c];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,(a=function(i,m){if(ut(i)!=="object"||i===null)return i;var v=i[Symbol.toPrimitive];if(v!==void 0){var x=v.call(i,"string");if(ut(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(e.key),ut(a)==="symbol"?a:String(a)),e)}var a}var qe=Jt.validators,Wt=function(){function t(e){(function(a,i){if(!(a instanceof i))throw new TypeError("Cannot call a class as a function")})(this,t),this.defaults=e,this.interceptors={request:new cn,response:new cn}}var n,c;return n=t,(c=[{key:"request",value:function(e,a){typeof e=="string"?(a=a||{}).url=e:a=e||{};var i,m=a=Je(this.defaults,a),v=m.transitional,x=m.paramsSerializer,D=m.headers;v!==void 0&&Jt.assertOptions(v,{silentJSONParsing:qe.transitional(qe.boolean),forcedJSONParsing:qe.transitional(qe.boolean),clarifyTimeoutError:qe.transitional(qe.boolean)},!1),x!==void 0&&Jt.assertOptions(x,{encode:qe.function,serialize:qe.function},!0),a.method=(a.method||this.defaults.method||"get").toLowerCase(),(i=D&&B.merge(D.common,D[a.method]))&&B.forEach(["delete","get","head","post","put","patch","common"],function(ue){delete D[ue]}),a.headers=je.concat(i,D);var P=[],K=!0;this.interceptors.request.forEach(function(ue){typeof ue.runWhen=="function"&&ue.runWhen(a)===!1||(K=K&&ue.synchronous,P.unshift(ue.fulfilled,ue.rejected))});var V,G=[];this.interceptors.response.forEach(function(ue){G.push(ue.fulfilled,ue.rejected)});var H,q=0;if(!K){var X=[En.bind(this),void 0];for(X.unshift.apply(X,P),X.push.apply(X,G),H=X.length,V=Promise.resolve(a);q<H;)V=V.then(X[q++],X[q++]);return V}H=P.length;var ee=a;for(q=0;q<H;){var be=P[q++],ye=P[q++];try{ee=be(ee)}catch(ue){ye.call(this,ue);break}}try{V=En.call(this,ee)}catch(ue){return Promise.reject(ue)}for(q=0,H=G.length;q<H;)V=V.then(G[q++],G[q++]);return V}},{key:"getUri",value:function(e){return un(_n((e=Je(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}])&&nr(n.prototype,c),Object.defineProperty(n,"prototype",{writable:!1}),t}();B.forEach(["delete","get","head","options"],function(t){Wt.prototype[t]=function(n,c){return this.request(Je(c||{},{method:t,url:n,data:(c||{}).data}))}}),B.forEach(["post","put","patch"],function(t){function n(c){return function(e,a,i){return this.request(Je(i||{},{method:t,headers:c?{"Content-Type":"multipart/form-data"}:{},url:e,data:a}))}}Wt.prototype[t]=n(),Wt.prototype[t+"Form"]=n(!0)});const Kt=Wt;function ct(t){return ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ct(t)}function kn(t,n){for(var c=0;c<n.length;c++){var e=n[c];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,(a=function(i,m){if(ct(i)!=="object"||i===null)return i;var v=i[Symbol.toPrimitive];if(v!==void 0){var x=v.call(i,"string");if(ct(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(e.key),ct(a)==="symbol"?a:String(a)),e)}var a}var rr=function(){function t(a){if(function(v,x){if(!(v instanceof x))throw new TypeError("Cannot call a class as a function")}(this,t),typeof a!="function")throw new TypeError("executor must be a function.");var i;this.promise=new Promise(function(v){i=v});var m=this;this.promise.then(function(v){if(m._listeners){for(var x=m._listeners.length;x-- >0;)m._listeners[x](v);m._listeners=null}}),this.promise.then=function(v){var x,D=new Promise(function(P){m.subscribe(P),x=P}).then(v);return D.cancel=function(){m.unsubscribe(x)},D},a(function(v,x,D){m.reason||(m.reason=new Nt(v,x,D),i(m.reason))})}var n,c,e;return n=t,c=[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(a){this.reason?a(this.reason):this._listeners?this._listeners.push(a):this._listeners=[a]}},{key:"unsubscribe",value:function(a){if(this._listeners){var i=this._listeners.indexOf(a);i!==-1&&this._listeners.splice(i,1)}}}],e=[{key:"source",value:function(){var a;return{token:new t(function(i){a=i}),cancel:a}}}],c&&kn(n.prototype,c),e&&kn(n,e),Object.defineProperty(n,"prototype",{writable:!1}),t}();const ar=rr;function Sn(t,n){(n==null||n>t.length)&&(n=t.length);for(var c=0,e=new Array(n);c<n;c++)e[c]=t[c];return e}var $t={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries($t).forEach(function(t){var n,c,e=(c=2,function(m){if(Array.isArray(m))return m}(n=t)||function(m,v){var x=m==null?null:typeof Symbol<"u"&&m[Symbol.iterator]||m["@@iterator"];if(x!=null){var D,P,K,V,G=[],H=!0,q=!1;try{if(K=(x=x.call(m)).next,v===0){if(Object(x)!==x)return;H=!1}else for(;!(H=(D=K.call(x)).done)&&(G.push(D.value),G.length!==v);H=!0);}catch(X){q=!0,P=X}finally{try{if(!H&&x.return!=null&&(V=x.return(),Object(V)!==V))return}finally{if(q)throw P}}return G}}(n,c)||function(m,v){if(m){if(typeof m=="string")return Sn(m,v);var x=Object.prototype.toString.call(m).slice(8,-1);return x==="Object"&&m.constructor&&(x=m.constructor.name),x==="Map"||x==="Set"?Array.from(m):x==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x)?Sn(m,v):void 0}}(n,c)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),a=e[0],i=e[1];$t[i]=a});const ir=$t;var ge=function t(n){var c=new Kt(n),e=te(Kt.prototype.request,c);return B.extend(e,Kt.prototype,c,{allOwnKeys:!0}),B.extend(e,c,null,{allOwnKeys:!0}),e.create=function(a){return t(Je(n,a))},e}(Ht);ge.Axios=Kt,ge.CanceledError=Nt,ge.CancelToken=ar,ge.isCancel=bn,ge.VERSION="1.2.3",ge.toFormData=Pt,ge.AxiosError=$,ge.Cancel=ge.CanceledError,ge.all=function(t){return Promise.all(t)},ge.spread=function(t){return function(n){return t.apply(null,n)}},ge.isAxiosError=function(t){return B.isObject(t)&&t.isAxiosError===!0},ge.mergeConfig=Je,ge.AxiosHeaders=je,ge.formToJSON=function(t){return hn(B.isHTMLForm(t)?new FormData(t):t)},ge.HttpStatusCode=ir,ge.default=ge;const Bn=ge,or={send:function(t){Bn.post(t.url,t.data).then(function(n){var c=n.data;c&&c.code===0?t.success&&t.success(c):t.error&&t.error(c&&c.msg)}).catch(function(n){console.error(n),t.error&&t.error()})},read:function(t){Bn.get(t.url).then(function(n){var c=n.data;c&&c.code===0?t.success&&t.success(c.data.map(function(e){return{time:e[0],type:e[1],color:e[2],author:e[3],text:e[4]}})):t.error&&t.error(c&&c.msg)}).catch(function(n){console.error(n),t.error&&t.error()})}};function en(t){return en=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},en(t)}function sr(t){var n=this;this.lang=t,this.fallbackLang=this.lang.includes("-")?this.lang.split("-")[0]:this.lang,this.tran=function(c){return c=c.toLowerCase(),$e[n.lang]&&$e[n.lang][c]?$e[n.lang][c]:$e[n.fallbackLang]&&$e[n.fallbackLang][c]?$e[n.fallbackLang][c]:tn[c]?tn[c]:c}}var tn={"danmaku-loading":"Danmaku is loading",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Input danmaku, hit Enter","about-author":"About author","dplayer-feedback":"DPlayer feedback","about-dplayer":"About DPlayer",loop:"Loop",speed:"Speed","opacity-danmaku":"Opacity for danmaku",normal:"Normal","please-input-danmaku":"Please input danmaku content!","set-danmaku-color":"Set danmaku color","set-danmaku-type":"Set danmaku type","show-danmaku":"Show danmaku","video-failed":"Video load failed","danmaku-failed":"Danmaku load failed","danmaku-send-failed":"Danmaku send failed","switching-quality":"Switching to %q quality","switched-quality":"Switched to %q quality",ff:"FF %s s",rew:"REW %s s","unlimited-danmaku":"Unlimited danmaku","send-danmaku":"Send danmaku",setting:"Setting",fullscreen:"Full screen","web-fullscreen":"Web full screen",send:"Send",screenshot:"Screenshot",airplay:"AirPlay",chromecast:"ChromeCast",subtitle:"Subtitle",off:"Off","show-subs":"Show subtitle","hide-subs":"Hide subtitle",volume:"Volume",live:"Live","video-info":"Video info"},$e={en:tn,"zh-cn":{"danmaku-loading":"弹幕加载中",top:"顶部",bottom:"底部",rolling:"滚动","input-danmaku-enter":"输入弹幕，回车发送","about-author":"关于作者","dplayer-feedback":"播放器意见反馈","about-dplayer":"关于 DPlayer 播放器",loop:"洗脑循环",speed:"速度","opacity-danmaku":"弹幕透明度",normal:"正常","please-input-danmaku":"要输入弹幕内容啊喂！","set-danmaku-color":"设置弹幕颜色","set-danmaku-type":"设置弹幕类型","show-danmaku":"显示弹幕","video-failed":"视频加载失败","danmaku-failed":"弹幕加载失败","danmaku-send-failed":"弹幕发送失败","switching-quality":"正在切换至 %q 画质","switched-quality":"已经切换至 %q 画质",ff:"快进 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"海量弹幕","send-danmaku":"发送弹幕",setting:"设置",fullscreen:"全屏","web-fullscreen":"页面全屏",send:"发送",screenshot:"截图",airplay:"无线投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"关闭","show-subs":"显示字幕","hide-subs":"隐藏字幕",volume:"音量",live:"直播","video-info":"视频统计信息"},"zh-tw":{"danmaku-loading":"彈幕載入中",top:"頂部",bottom:"底部",rolling:"滾動","input-danmaku-enter":"輸入彈幕，Enter 發送","about-author":"關於作者","dplayer-feedback":"播放器意見回饋","about-dplayer":"關於 DPlayer 播放器",loop:"循環播放",speed:"速度","opacity-danmaku":"彈幕透明度",normal:"正常","please-input-danmaku":"請輸入彈幕內容啊！","set-danmaku-color":"設定彈幕顏色","set-danmaku-type":"設定彈幕類型","show-danmaku":"顯示彈幕","video-failed":"影片載入失敗","danmaku-failed":"彈幕載入失敗","danmaku-send-failed":"彈幕發送失敗","switching-quality":"正在切換至 %q 畫質","switched-quality":"已經切換至 %q 畫質",ff:"快進 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"巨量彈幕","send-danmaku":"發送彈幕",setting:"設定",fullscreen:"全螢幕","web-fullscreen":"頁面全螢幕",send:"發送",screenshot:"截圖",airplay:"無線投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"關閉","show-subs":"顯示字幕","hide-subs":"隱藏字幕",volume:"音量",live:"直播","video-info":"影片統計訊息"},"ko-kr":{"danmaku-loading":"Danmaku를 불러오는 중입니다.",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Danmaku를 입력하고 Enter를 누르세요.","about-author":"만든이","dplayer-feedback":"피드백 보내기","about-dplayer":"DPlayer 정보",loop:"반복",speed:"배속","opacity-danmaku":"Danmaku 불투명도",normal:"표준","please-input-danmaku":"Danmaku를 입력하세요!","set-danmaku-color":"Danmaku 색상","set-danmaku-type":"Danmaku 설정","show-danmaku":"Danmaku 표시","video-failed":"비디오를 불러오지 못했습니다.","danmaku-failed":"Danmaku를 불러오지 못했습니다.","danmaku-send-failed":"Danmaku 전송에 실패했습니다.","Switching to":"","Switched to":"","switching-quality":"전환 %q 화질","switched-quality":"전환 됨 %q 화질",ff:"앞으로 %s 초",rew:"뒤로 %s 초","unlimited-danmaku":"끝없는 Danmaku","send-danmaku":"Danmaku 보내기",setting:"설정",fullscreen:"전체 화면","web-fullscreen":"웹 내 전체화면",send:"보내기",screenshot:"화면 캡쳐",airplay:"에어플레이",chromecast:"ChromeCast",subtitle:"부제",off:"끄다","show-subs":"자막 보이기","hide-subs":"자막 숨기기",Volume:"볼륨",live:"생방송","video-info":"비디오 정보"},de:{"danmaku-loading":"Danmaku lädt...",top:"Oben",bottom:"Unten",rolling:"Rollend","input-danmaku-enter":"Drücke Enter nach dem Einfügen vom Danmaku","about-author":"Über den Autor","dplayer-feedback":"DPlayer Feedback","about-dplayer":"Über DPlayer",loop:"Wiederholen",speed:"Geschwindigkeit","opacity-danmaku":"Transparenz für Danmaku",normal:"Normal","please-input-danmaku":"Bitte Danmaku Inhalt eingeben!","set-danmaku-color":"Danmaku Farbe festlegen","set-danmaku-type":"Danmaku Typ festlegen","show-danmaku":"Zeige Danmaku","video-failed":"Das Video konnte nicht geladen werden","danmaku-failed":"Danmaku konnte nicht geladen werden","danmaku-send-failed":"Das senden von Danmaku ist fehgeschlagen","switching-quality":"Wechsle zur %q Qualität","switched-quality":"Zur %q Qualität gewechselt",ff:"%s s Vorwärts",rew:"%s s Zurück","unlimited-danmaku":"Unlimitiertes Danmaku","send-danmaku":"Sende Danmaku",setting:"Einstellungen",fullscreen:"Vollbild","web-fullscreen":"Browser Vollbild",send:"Senden",screenshot:"Screenshot",airplay:"AirPlay","show-subs":"Zeige Untertitel",chromecast:"ChromeCast",subtitle:"Untertitel",off:"Schließung","hide-subs":"Verstecke Untertitel",volume:"Lautstärke",live:"Live","video-info":"Video Info"}},lr=W(730),dr=W.n(lr),pr=W(74),ur=W.n(pr),cr=W(437),fr=W.n(cr),hr=W(644),mr=W.n(hr),yr=W(324),Ar=W.n(yr),gr=W(574),br=W.n(gr),vr=W(300),_r=W.n(vr),xr=W(934),Er=W.n(xr),Cr=W(428),wr=W.n(Cr),kr=W(807),Sr=W.n(kr),Br=W(338),Lr=W.n(Br),Ir=W(254),Rr=W.n(Ir),Or=W(965),Tr=W.n(Or),Dr=W(113),Mr=W.n(Dr),Pr=W(251),Fr=W.n(Pr),jr=W(410),Ur=W.n(jr),Nr=W(182),zr=W.n(Nr),Wr=W(193),Kr=W.n(Wr);const Re={play:dr(),pause:ur(),volumeUp:fr(),volumeDown:mr(),volumeOff:Ar(),full:br(),fullWeb:_r(),setting:Er(),right:wr(),comment:Sr(),commentOff:Lr(),send:Rr(),pallette:Tr(),camera:Mr(),subtitle:Ur(),loading:zr(),airplay:Fr(),chromecast:Kr()};var qr=W(916),Yr=W.n(qr);function ft(t){return ft=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ft(t)}function Ln(t,n){for(var c=0;c<n.length;c++){var e=n[c];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,(a=function(i,m){if(ft(i)!=="object"||i===null)return i;var v=i[Symbol.toPrimitive];if(v!==void 0){var x=v.call(i,"string");if(ft(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(e.key),ft(a)==="symbol"?a:String(a)),e)}var a}var Vr=function(){function t(a){(function(i,m){if(!(i instanceof m))throw new TypeError("Cannot call a class as a function")})(this,t),this.container=a.container,this.options=a.options,this.index=a.index,this.tran=a.tran,this.init()}var n,c,e;return n=t,e=[{key:"NewNotice",value:function(a,i,m){var v=document.createElement("div");return v.classList.add("dplayer-notice"),v.style.opacity=i,v.innerText=a,m&&(v.id="dplayer-notice-".concat(m)),v}}],(c=[{key:"init",value:function(){this.container.innerHTML=Yr()({options:this.options,index:this.index,tran:this.tran,icons:Re,mobile:N.isMobile,video:{current:!0,pic:this.options.video.pic,screenshot:this.options.screenshot,airplay:!(!N.isSafari||N.isChrome)&&this.options.airplay,chromecast:this.options.chromecast,preload:this.options.preload,url:this.options.video.url,subtitle:this.options.subtitle}}),this.volumeBar=this.container.querySelector(".dplayer-volume-bar-inner"),this.volumeBarWrap=this.container.querySelector(".dplayer-volume-bar"),this.volumeBarWrapWrap=this.container.querySelector(".dplayer-volume-bar-wrap"),this.volumeButton=this.container.querySelector(".dplayer-volume"),this.volumeButtonIcon=this.container.querySelector(".dplayer-volume-icon"),this.volumeIcon=this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"),this.playedBar=this.container.querySelector(".dplayer-played"),this.loadedBar=this.container.querySelector(".dplayer-loaded"),this.playedBarWrap=this.container.querySelector(".dplayer-bar-wrap"),this.playedBarTime=this.container.querySelector(".dplayer-bar-time"),this.danmaku=this.container.querySelector(".dplayer-danmaku"),this.danmakuLoading=this.container.querySelector(".dplayer-danloading"),this.video=this.container.querySelector(".dplayer-video-current"),this.bezel=this.container.querySelector(".dplayer-bezel-icon"),this.playButton=this.container.querySelector(".dplayer-play-icon"),this.mobilePlayButton=this.container.querySelector(".dplayer-mobile-play"),this.videoWrap=this.container.querySelector(".dplayer-video-wrap"),this.controllerMask=this.container.querySelector(".dplayer-controller-mask"),this.ptime=this.container.querySelector(".dplayer-ptime"),this.settingButton=this.container.querySelector(".dplayer-setting-icon"),this.settingBox=this.container.querySelector(".dplayer-setting-box"),this.mask=this.container.querySelector(".dplayer-mask"),this.loop=this.container.querySelector(".dplayer-setting-loop"),this.loopToggle=this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"),this.showDanmaku=this.container.querySelector(".dplayer-setting-showdan"),this.showDanmakuToggle=this.container.querySelector(".dplayer-showdan-setting-input"),this.unlimitDanmaku=this.container.querySelector(".dplayer-setting-danunlimit"),this.unlimitDanmakuToggle=this.container.querySelector(".dplayer-danunlimit-setting-input"),this.speed=this.container.querySelector(".dplayer-setting-speed"),this.speedItem=this.container.querySelectorAll(".dplayer-setting-speed-item"),this.danmakuOpacityBar=this.container.querySelector(".dplayer-danmaku-bar-inner"),this.danmakuOpacityBarWrap=this.container.querySelector(".dplayer-danmaku-bar"),this.danmakuOpacityBarWrapWrap=this.container.querySelector(".dplayer-danmaku-bar-wrap"),this.danmakuOpacityBox=this.container.querySelector(".dplayer-setting-danmaku"),this.dtime=this.container.querySelector(".dplayer-dtime"),this.controller=this.container.querySelector(".dplayer-controller"),this.commentInput=this.container.querySelector(".dplayer-comment-input"),this.commentButton=this.container.querySelector(".dplayer-comment-icon"),this.commentSettingBox=this.container.querySelector(".dplayer-comment-setting-box"),this.commentSettingButton=this.container.querySelector(".dplayer-comment-setting-icon"),this.commentSettingFill=this.container.querySelector(".dplayer-comment-setting-icon path"),this.commentSendButton=this.container.querySelector(".dplayer-send-icon"),this.commentSendFill=this.container.querySelector(".dplayer-send-icon path"),this.commentColorSettingBox=this.container.querySelector(".dplayer-comment-setting-color"),this.browserFullButton=this.container.querySelector(".dplayer-full-icon"),this.webFullButton=this.container.querySelector(".dplayer-full-in-icon"),this.menu=this.container.querySelector(".dplayer-menu"),this.menuItem=this.container.querySelectorAll(".dplayer-menu-item"),this.qualityList=this.container.querySelector(".dplayer-quality-list"),this.camareButton=this.container.querySelector(".dplayer-camera-icon"),this.airplayButton=this.container.querySelector(".dplayer-airplay-icon"),this.chromecastButton=this.container.querySelector(".dplayer-chromecast-icon"),this.subtitleButton=this.container.querySelector(".dplayer-subtitle-icon"),this.subtitleButtonInner=this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"),this.subtitlesButton=this.container.querySelector(".dplayer-subtitles-icon"),this.subtitlesBox=this.container.querySelector(".dplayer-subtitles-box"),this.subtitlesItem=this.container.querySelectorAll(".dplayer-subtitles-item"),this.subtitle=this.container.querySelector(".dplayer-subtitle"),this.subtrack=this.container.querySelector(".dplayer-subtrack"),this.qualityButton=this.container.querySelector(".dplayer-quality-icon"),this.barPreview=this.container.querySelector(".dplayer-bar-preview"),this.barWrap=this.container.querySelector(".dplayer-bar-wrap"),this.noticeList=this.container.querySelector(".dplayer-notice-list"),this.infoPanel=this.container.querySelector(".dplayer-info-panel"),this.infoPanelClose=this.container.querySelector(".dplayer-info-panel-close"),this.infoVersion=this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"),this.infoFPS=this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"),this.infoType=this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"),this.infoUrl=this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"),this.infoResolution=this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"),this.infoDuration=this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"),this.infoDanmakuId=this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"),this.infoDanmakuApi=this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"),this.infoDanmakuAmount=this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")}}])&&Ln(n.prototype,c),e&&Ln(n,e),Object.defineProperty(n,"prototype",{writable:!1}),t}();const In=Vr;function et(t){return et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},et(t)}function Hr(t,n){for(var c=0;c<n.length;c++){var e=n[c];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,(a=function(i,m){if(et(i)!=="object"||i===null)return i;var v=i[Symbol.toPrimitive];if(v!==void 0){var x=v.call(i,"string");if(et(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(e.key),et(a)==="symbol"?a:String(a)),e)}var a}var Gr=function(){function t(e){(function(a,i){if(!(a instanceof i))throw new TypeError("Cannot call a class as a function")})(this,t),this.options=e,this.player=this.options.player,this.container=this.options.container,this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.dan=[],this.showing=!0,this._opacity=this.options.opacity,this.events=this.options.events,this.unlimited=this.options.unlimited,this._measure(""),this.load()}var n,c;return n=t,c=[{key:"load",value:function(){var e,a=this;e=this.options.api.maximum?"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id,"&max=").concat(this.options.api.maximum):"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id);var i=(this.options.api.addition||[]).slice(0);i.push(e),this.events&&this.events.trigger("danmaku_load_start",i),this._readAllEndpoints(i,function(m){a.dan=[].concat.apply([],m).sort(function(v,x){return v.time-x.time}),window.requestAnimationFrame(function(){a.frame()}),a.options.callback(),a.events&&a.events.trigger("danmaku_load_end")})}},{key:"reload",value:function(e){this.options.api=e,this.dan=[],this.clear(),this.load()}},{key:"_readAllEndpoints",value:function(e,a){for(var i=this,m=[],v=0,x=function(P){i.options.apiBackend.read({url:e[P],success:function(K){m[P]=K,++v===e.length&&a(m)},error:function(K){i.options.error(K||i.options.tran("danmaku-failed")),m[P]=[],++v===e.length&&a(m)}})},D=0;D<e.length;++D)x(D)}},{key:"send",value:function(e,a){var i=this,m={token:this.options.api.token,id:this.options.api.id,author:this.options.api.user,time:this.options.time(),text:e.text,color:e.color,type:e.type};this.options.apiBackend.send({url:this.options.api.address+"v3/",data:m,success:a,error:function(x){i.options.error(x||i.options.tran("danmaku-failed"))}}),this.dan.splice(this.danIndex,0,m),this.danIndex++;var v={text:this.htmlEncode(m.text),color:m.color,type:m.type,border:"2px solid ".concat(this.options.borderColor)};this.draw(v),this.events&&this.events.trigger("danmaku_send",m)}},{key:"frame",value:function(){var e=this;if(this.dan.length&&!this.paused&&this.showing){for(var a=this.dan[this.danIndex],i=[];a&&this.options.time()>parseFloat(a.time);)i.push(a),a=this.dan[++this.danIndex];this.draw(i)}window.requestAnimationFrame(function(){e.frame()})}},{key:"opacity",value:function(e){if(e!==void 0){for(var a=this.container.getElementsByClassName("dplayer-danmaku-item"),i=0;i<a.length;i++)a[i].style.opacity=e;this._opacity=e,this.events&&this.events.trigger("danmaku_opacity",this._opacity)}return this._opacity}},{key:"draw",value:function(e){var a=this;if(this.showing){var i=this.options.height,m=this.container.offsetWidth,v=this.container.offsetHeight,x=parseInt(v/i),D=function(q){var X=q.offsetWidth||parseInt(q.style.width),ee=q.getBoundingClientRect().right||a.container.getBoundingClientRect().right+X;return a.container.getBoundingClientRect().right-ee},P=function(q){return(m+q)/5},K=function(q,X,ee){for(var be=m/P(ee),ye=function(Qe){var nt=a.danTunnel[X][Qe+""];if(!nt||!nt.length)return a.danTunnel[X][Qe+""]=[q],q.addEventListener("animationend",function(){a.danTunnel[X][Qe+""].splice(0,1)}),{v:Qe%x};if(X!=="right")return"continue";for(var It=0;It<nt.length;It++){var Pn=D(nt[It])-10;if(Pn<=m-be*P(parseInt(nt[It].style.width))||Pn<=0)break;if(It===nt.length-1)return a.danTunnel[X][Qe+""].push(q),q.addEventListener("animationend",function(){a.danTunnel[X][Qe+""].splice(0,1)}),{v:Qe%x}}},ue=0;a.unlimited||ue<x;ue++){var Ve=ye(ue);if(Ve!=="continue"&&et(Ve)==="object")return Ve.v}return-1};Object.prototype.toString.call(e)!=="[object Array]"&&(e=[e]);for(var V=document.createDocumentFragment(),G=function(){e[H].type=N.number2Type(e[H].type),e[H].color||(e[H].color=16777215);var q=document.createElement("div");q.classList.add("dplayer-danmaku-item"),q.classList.add("dplayer-danmaku-".concat(e[H].type)),e[H].border?q.innerHTML='<span style="border:'.concat(e[H].border,'">').concat(e[H].text,"</span>"):q.innerHTML=e[H].text,q.style.opacity=a._opacity,q.style.color=N.number2Color(e[H].color),q.addEventListener("animationend",function(){a.container.removeChild(q)});var X,ee=a._measure(e[H].text);switch(e[H].type){case"right":(X=K(q,e[H].type,ee))>=0&&(q.style.width=ee+1+"px",q.style.top=i*X+"px",q.style.transform="translateX(-".concat(m,"px)"));break;case"top":(X=K(q,e[H].type))>=0&&(q.style.top=i*X+"px");break;case"bottom":(X=K(q,e[H].type))>=0&&(q.style.bottom=i*X+"px");break;default:console.error("Can't handled danmaku type: ".concat(e[H].type))}X>=0&&(q.classList.add("dplayer-danmaku-move"),q.style.animationDuration=a._danAnimation(e[H].type),V.appendChild(q))},H=0;H<e.length;H++)G();return this.container.appendChild(V),V}}},{key:"play",value:function(){this.paused=!1}},{key:"pause",value:function(){this.paused=!0}},{key:"_measure",value:function(e){if(!this.context){var a=getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0],null);this.context=document.createElement("canvas").getContext("2d"),this.context.font=a.getPropertyValue("font")}return this.context.measureText(e).width}},{key:"seek",value:function(){this.clear();for(var e=0;e<this.dan.length;e++){if(this.dan[e].time>=this.options.time()){this.danIndex=e;break}this.danIndex=this.dan.length}}},{key:"clear",value:function(){this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.options.container.innerHTML="",this.events&&this.events.trigger("danmaku_clear")}},{key:"htmlEncode",value:function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2f;")}},{key:"resize",value:function(){for(var e=this.container.offsetWidth,a=this.container.getElementsByClassName("dplayer-danmaku-item"),i=0;i<a.length;i++)a[i].style.transform="translateX(-".concat(e,"px)")}},{key:"hide",value:function(){this.showing=!1,this.pause(),this.clear(),this.events&&this.events.trigger("danmaku_hide")}},{key:"show",value:function(){this.seek(),this.showing=!0,this.play(),this.events&&this.events.trigger("danmaku_show")}},{key:"unlimit",value:function(e){this.unlimited=e}},{key:"speed",value:function(e){this.options.api.speedRate=e}},{key:"_danAnimation",value:function(e){var a=this.options.api.speedRate||1,i=!!this.player.fullScreen.isFullScreen();return{top:"".concat((i?6:4)/a,"s"),right:"".concat((i?8:5)/a,"s"),bottom:"".concat((i?6:4)/a,"s")}[e]}}],c&&Hr(n.prototype,c),Object.defineProperty(n,"prototype",{writable:!1}),t}();const Qr=Gr;function ht(t){return ht=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ht(t)}function Xr(t,n){for(var c=0;c<n.length;c++){var e=n[c];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,(a=function(i,m){if(ht(i)!=="object"||i===null)return i;var v=i[Symbol.toPrimitive];if(v!==void 0){var x=v.call(i,"string");if(ht(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(e.key),ht(a)==="symbol"?a:String(a)),e)}var a}const Zr=function(){function t(){(function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")})(this,t),this.events={},this.videoEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["screenshot","thumbnails_show","thumbnails_hide","danmaku_show","danmaku_hide","danmaku_clear","danmaku_loaded","danmaku_send","danmaku_opacity","contextmenu_show","contextmenu_hide","notice_show","notice_hide","quality_start","quality_end","destroy","resize","fullscreen","fullscreen_cancel","webfullscreen","webfullscreen_cancel","subtitle_show","subtitle_hide","subtitle_change"]}var n,c;return n=t,(c=[{key:"on",value:function(e,a){this.type(e)&&typeof a=="function"&&(this.events[e]||(this.events[e]=[]),this.events[e].push(a))}},{key:"trigger",value:function(e,a){if(this.events[e]&&this.events[e].length)for(var i=0;i<this.events[e].length;i++)this.events[e][i](a)}},{key:"type",value:function(e){return this.playerEvents.indexOf(e)!==-1?"player":this.videoEvents.indexOf(e)!==-1?"video":(console.error("Unknown event name: ".concat(e)),null)}}])&&Xr(n.prototype,c),Object.defineProperty(n,"prototype",{writable:!1}),t}();function mt(t){return mt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},mt(t)}function Jr(t,n){for(var c=0;c<n.length;c++){var e=n[c];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,(a=function(i,m){if(mt(i)!=="object"||i===null)return i;var v=i[Symbol.toPrimitive];if(v!==void 0){var x=v.call(i,"string");if(mt(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(e.key),mt(a)==="symbol"?a:String(a)),e)}var a}var $r=function(){function t(e){var a=this;(function(i,m){if(!(i instanceof m))throw new TypeError("Cannot call a class as a function")})(this,t),this.player=e,this.lastScrollPosition={left:0,top:0},this.player.events.on("webfullscreen",function(){a.player.resize()}),this.player.events.on("webfullscreen_cancel",function(){a.player.resize(),N.setScrollPosition(a.lastScrollPosition)}),this.fullscreenchange=function(){a.player.resize(),a.isFullScreen("browser")?a.player.events.trigger("fullscreen"):(N.setScrollPosition(a.lastScrollPosition),a.player.events.trigger("fullscreen_cancel"))},this.docfullscreenchange=function(){var i=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;i&&i!==a.player.container||(a.player.resize(),i?a.player.events.trigger("fullscreen"):(N.setScrollPosition(a.lastScrollPosition),a.player.events.trigger("fullscreen_cancel")))},/Firefox/.test(navigator.userAgent)?(document.addEventListener("mozfullscreenchange",this.docfullscreenchange),document.addEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.addEventListener("fullscreenchange",this.fullscreenchange),this.player.container.addEventListener("webkitfullscreenchange",this.fullscreenchange),document.addEventListener("msfullscreenchange",this.docfullscreenchange),document.addEventListener("MSFullscreenChange",this.docfullscreenchange))}var n,c;return n=t,c=[{key:"isFullScreen",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(e){case"browser":return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;case"web":return this.player.container.classList.contains("dplayer-fulled")}}},{key:"request",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser",a=e==="browser"?"web":"browser",i=this.isFullScreen(a);switch(i||(this.lastScrollPosition=N.getScrollPosition()),e){case"browser":this.player.container.requestFullscreen?this.player.container.requestFullscreen():this.player.container.mozRequestFullScreen?this.player.container.mozRequestFullScreen():this.player.container.webkitRequestFullscreen?this.player.container.webkitRequestFullscreen():this.player.video.webkitEnterFullscreen?this.player.video.webkitEnterFullscreen():this.player.video.webkitEnterFullScreen?this.player.video.webkitEnterFullScreen():this.player.container.msRequestFullscreen&&this.player.container.msRequestFullscreen();break;case"web":this.player.container.classList.add("dplayer-fulled"),document.body.classList.add("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen")}i&&this.cancel(a)}},{key:"cancel",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(e){case"browser":document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.msCancelFullScreen?document.msCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();break;case"web":this.player.container.classList.remove("dplayer-fulled"),document.body.classList.remove("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen_cancel")}}},{key:"toggle",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";this.isFullScreen(e)?this.cancel(e):this.request(e)}},{key:"destroy",value:function(){/Firefox/.test(navigator.userAgent)?(document.removeEventListener("mozfullscreenchange",this.docfullscreenchange),document.removeEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.removeEventListener("fullscreenchange",this.fullscreenchange),this.player.container.removeEventListener("webkitfullscreenchange",this.fullscreenchange),document.removeEventListener("msfullscreenchange",this.docfullscreenchange),document.removeEventListener("MSFullscreenChange",this.docfullscreenchange))}}],c&&Jr(n.prototype,c),Object.defineProperty(n,"prototype",{writable:!1}),t}();const ea=$r;function yt(t){return yt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},yt(t)}function ta(t,n){for(var c=0;c<n.length;c++){var e=n[c];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,(a=function(i,m){if(yt(i)!=="object"||i===null)return i;var v=i[Symbol.toPrimitive];if(v!==void 0){var x=v.call(i,"string");if(yt(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(e.key),yt(a)==="symbol"?a:String(a)),e)}var a}var na=function(){function t(e){(function(a,i){if(!(a instanceof i))throw new TypeError("Cannot call a class as a function")})(this,t),this.storageName={opacity:"dplayer-danmaku-opacity",volume:"dplayer-volume",unlimited:"dplayer-danmaku-unlimited",danmaku:"dplayer-danmaku-show",subtitle:"dplayer-subtitle-show"},this.default={opacity:.7,volume:e.options.hasOwnProperty("volume")?e.options.volume:.7,unlimited:(e.options.danmaku&&e.options.danmaku.unlimited?1:0)||0,danmaku:1,subtitle:1},this.data={},this.init()}var n,c;return n=t,(c=[{key:"init",value:function(){for(var e in this.storageName){var a=this.storageName[e];this.data[e]=parseFloat(N.storage.get(a)||this.default[e])}}},{key:"get",value:function(e){return this.data[e]}},{key:"set",value:function(e,a){this.data[e]=a,N.storage.set(this.storageName[e],a)}}])&&ta(n.prototype,c),Object.defineProperty(n,"prototype",{writable:!1}),t}();const ra=na;function At(t){return At=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},At(t)}function aa(t,n){for(var c=0;c<n.length;c++){var e=n[c];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,(a=function(i,m){if(At(i)!=="object"||i===null)return i;var v=i[Symbol.toPrimitive];if(v!==void 0){var x=v.call(i,"string");if(At(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(e.key),At(a)==="symbol"?a:String(a)),e)}var a}var ia=function(){function t(e,a,i,m){(function(v,x){if(!(v instanceof x))throw new TypeError("Cannot call a class as a function")})(this,t),this.container=e,this.video=a,this.options=i,this.events=m,this.init()}var n,c;return n=t,c=[{key:"init",value:function(){var e=this;if(this.container.style.fontSize=this.options.fontSize,this.container.style.bottom=this.options.bottom,this.container.style.color=this.options.color,this.video.textTracks&&this.video.textTracks[0]){var a=this.video.textTracks[0];a.oncuechange=function(){var i=a.activeCues[a.activeCues.length-1];if(e.container.innerHTML="",i){var m=document.createElement("div");m.appendChild(i.getCueAsHTML());var v=m.innerHTML.split(/\r?\n/).map(function(x){return"<p>".concat(x,"</p>")}).join("");e.container.innerHTML=v}e.events.trigger("subtitle_change")}}}},{key:"show",value:function(){this.container.classList.remove("dplayer-subtitle-hide"),this.events.trigger("subtitle_show")}},{key:"hide",value:function(){this.container.classList.add("dplayer-subtitle-hide"),this.events.trigger("subtitle_hide")}},{key:"toggle",value:function(){this.container.classList.contains("dplayer-subtitle-hide")?this.show():this.hide()}}],c&&aa(n.prototype,c),Object.defineProperty(n,"prototype",{writable:!1}),t}();const oa=ia;function gt(t){return gt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},gt(t)}function sa(t,n){for(var c=0;c<n.length;c++){var e=n[c];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,(a=function(i,m){if(gt(i)!=="object"||i===null)return i;var v=i[Symbol.toPrimitive];if(v!==void 0){var x=v.call(i,"string");if(gt(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(e.key),gt(a)==="symbol"?a:String(a)),e)}var a}var la=function(){function t(e){var a=this;(function(x,D){if(!(x instanceof D))throw new TypeError("Cannot call a class as a function")})(this,t),this.player=e,this.player.template.mask.addEventListener("click",function(){a.hide()}),this.player.template.subtitlesButton.addEventListener("click",function(){a.adaptiveHeight(),a.show()});for(var i=this.player.template.subtitlesItem.length-1,m=function(x){a.player.template.subtitlesItem[x].addEventListener("click",function(){a.hide(),a.player.options.subtitle.index!==x&&(a.player.template.subtitle.innerHTML="<p></p>",a.player.template.subtrack.src=a.player.template.subtitlesItem[x].dataset.subtitle,a.player.options.subtitle.index=x,a.player.template.subtitle.classList.contains("dplayer-subtitle-hide")&&a.subContainerShow())})},v=0;v<i;v++)m(v);this.player.template.subtitlesItem[i].addEventListener("click",function(){a.hide(),a.player.options.subtitle.index!==i&&(a.player.template.subtitle.innerHTML="<p></p>",a.player.template.subtrack.src="",a.player.options.subtitle.index=i,a.subContainerHide())})}var n,c;return n=t,(c=[{key:"subContainerShow",value:function(){this.player.template.subtitle.classList.remove("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_show")}},{key:"subContainerHide",value:function(){this.player.template.subtitle.classList.add("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_hide")}},{key:"hide",value:function(){this.player.template.subtitlesBox.classList.remove("dplayer-subtitles-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.subtitlesBox.classList.add("dplayer-subtitles-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}},{key:"adaptiveHeight",value:function(){var e=30*this.player.template.subtitlesItem.length+14,a=.8*this.player.template.videoWrap.offsetHeight;e>=a-50?(this.player.template.subtitlesBox.style.bottom="8px",this.player.template.subtitlesBox.style["max-height"]=a-8+"px"):(this.player.template.subtitlesBox.style.bottom="50px",this.player.template.subtitlesBox.style["max-height"]=a-50+"px")}}])&&sa(n.prototype,c),Object.defineProperty(n,"prototype",{writable:!1}),t}();const da=la;function bt(t){return bt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},bt(t)}function pa(t,n){for(var c=0;c<n.length;c++){var e=n[c];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,(a=function(i,m){if(bt(i)!=="object"||i===null)return i;var v=i[Symbol.toPrimitive];if(v!==void 0){var x=v.call(i,"string");if(bt(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(e.key),bt(a)==="symbol"?a:String(a)),e)}var a}var ua=function(){function t(e){(function(a,i){if(!(a instanceof i))throw new TypeError("Cannot call a class as a function")})(this,t),this.elements={},this.elements.volume=e.volumeBar,this.elements.played=e.playedBar,this.elements.loaded=e.loadedBar,this.elements.danmaku=e.danmakuOpacityBar}var n,c;return n=t,(c=[{key:"set",value:function(e,a,i){a=Math.max(a,0),a=Math.min(a,1),this.elements[e].style[i]=100*a+"%"}},{key:"get",value:function(e){return parseFloat(this.elements[e].style.width)/100}}])&&pa(n.prototype,c),Object.defineProperty(n,"prototype",{writable:!1}),t}();const ca=ua;function vt(t){return vt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},vt(t)}function fa(t,n){for(var c=0;c<n.length;c++){var e=n[c];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,(a=function(i,m){if(vt(i)!=="object"||i===null)return i;var v=i[Symbol.toPrimitive];if(v!==void 0){var x=v.call(i,"string");if(vt(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(e.key),vt(a)==="symbol"?a:String(a)),e)}var a}var ha=function(){function t(e){(function(a,i){if(!(a instanceof i))throw new TypeError("Cannot call a class as a function")})(this,t),this.player=e,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)},this.types=["loading","info","fps"],this.init()}var n,c;return n=t,(c=[{key:"init",value:function(){var e=this;this.types.map(function(a){return a!=="fps"&&e["init".concat(a,"Checker")](),a})}},{key:"initloadingChecker",value:function(){var e=this,a=0,i=0,m=!1;this.loadingChecker=setInterval(function(){e.enableloadingChecker&&(i=e.player.video.currentTime,m||i!==a||e.player.video.paused||(e.player.container.classList.add("dplayer-loading"),m=!0),m&&i>a&&!e.player.video.paused&&(e.player.container.classList.remove("dplayer-loading"),m=!1),a=i)},100)}},{key:"initfpsChecker",value:function(){var e=this;window.requestAnimationFrame(function(){if(e.enablefpsChecker)if(e.initfpsChecker(),e.fpsStart){e.fpsIndex++;var a=new Date;a-e.fpsStart>1e3&&(e.player.infoPanel.fps(e.fpsIndex/(a-e.fpsStart)*1e3),e.fpsStart=new Date,e.fpsIndex=0)}else e.fpsStart=new Date,e.fpsIndex=0;else e.fpsStart=0,e.fpsIndex=0})}},{key:"initinfoChecker",value:function(){var e=this;this.infoChecker=setInterval(function(){e.enableinfoChecker&&e.player.infoPanel.update()},1e3)}},{key:"enable",value:function(e){this["enable".concat(e,"Checker")]=!0,e==="fps"&&this.initfpsChecker()}},{key:"disable",value:function(e){this["enable".concat(e,"Checker")]=!1}},{key:"destroy",value:function(){var e=this;this.types.map(function(a){return e["enable".concat(a,"Checker")]=!1,e["".concat(a,"Checker")]&&clearInterval(e["".concat(a,"Checker")]),a})}}])&&fa(n.prototype,c),Object.defineProperty(n,"prototype",{writable:!1}),t}();const ma=ha;function _t(t){return _t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_t(t)}function ya(t,n){for(var c=0;c<n.length;c++){var e=n[c];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,(a=function(i,m){if(_t(i)!=="object"||i===null)return i;var v=i[Symbol.toPrimitive];if(v!==void 0){var x=v.call(i,"string");if(_t(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(e.key),_t(a)==="symbol"?a:String(a)),e)}var a}const Aa=function(){function t(e){var a=this;(function(i,m){if(!(i instanceof m))throw new TypeError("Cannot call a class as a function")})(this,t),this.container=e,this.container.addEventListener("animationend",function(){a.container.classList.remove("dplayer-bezel-transition")})}var n,c;return n=t,(c=[{key:"switch",value:function(e){this.container.innerHTML=e,this.container.classList.add("dplayer-bezel-transition")}}])&&ya(n.prototype,c),Object.defineProperty(n,"prototype",{writable:!1}),t}();function xt(t){return xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},xt(t)}function ga(t,n){for(var c=0;c<n.length;c++){var e=n[c];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,(a=function(i,m){if(xt(i)!=="object"||i===null)return i;var v=i[Symbol.toPrimitive];if(v!==void 0){var x=v.call(i,"string");if(xt(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(e.key),xt(a)==="symbol"?a:String(a)),e)}var a}var ba=function(){function t(e){(function(a,i){if(!(a instanceof i))throw new TypeError("Cannot call a class as a function")})(this,t),this.container=e.container,this.barWidth=e.barWidth,this.container.style.backgroundImage="url('".concat(e.url,"')"),this.events=e.events}var n,c;return n=t,(c=[{key:"resize",value:function(e,a,i){this.container.style.width="".concat(e,"px"),this.container.style.height="".concat(a,"px"),this.container.style.top="".concat(2-a,"px"),this.barWidth=i}},{key:"show",value:function(){this.container.style.display="block",this.events&&this.events.trigger("thumbnails_show")}},{key:"move",value:function(e){this.container.style.backgroundPosition="-".concat(160*(Math.ceil(e/this.barWidth*100)-1),"px 0"),this.container.style.left="".concat(Math.min(Math.max(e-this.container.offsetWidth/2,-10),this.barWidth-150),"px")}},{key:"hide",value:function(){this.container.style.display="none",this.events&&this.events.trigger("thumbnails_hide")}}])&&ga(n.prototype,c),Object.defineProperty(n,"prototype",{writable:!1}),t}();const va=ba;function Et(t){return Et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Et(t)}function _a(t,n){for(var c=0;c<n.length;c++){var e=n[c];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,(a=function(i,m){if(Et(i)!=="object"||i===null)return i;var v=i[Symbol.toPrimitive];if(v!==void 0){var x=v.call(i,"string");if(Et(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(e.key),Et(a)==="symbol"?a:String(a)),e)}var a}var Ye,Rn=!0,nn=!1,xa=function(){function t(e){(function(a,i){if(!(a instanceof i))throw new TypeError("Cannot call a class as a function")})(this,t),this.player=e,this.autoHideTimer=0,N.isMobile||(this.setAutoHideHandler=this.setAutoHide.bind(this),this.player.container.addEventListener("mousemove",this.setAutoHideHandler),this.player.container.addEventListener("click",this.setAutoHideHandler),this.player.on("play",this.setAutoHideHandler),this.player.on("pause",this.setAutoHideHandler)),this.initPlayButton(),this.initThumbnails(),this.initPlayedBar(),this.initFullButton(),this.initQualityButton(),this.initScreenshotButton(),this.player.options.subtitle&&typeof this.player.options.subtitle.url=="string"&&this.initSubtitleButton(),this.initHighlights(),this.initAirplayButton(),this.initChromecastButton(),N.isMobile||this.initVolumeButton()}var n,c;return n=t,(c=[{key:"initPlayButton",value:function(){var e=this;this.player.template.playButton.addEventListener("click",function(){e.player.toggle()}),this.player.template.mobilePlayButton.addEventListener("click",function(){e.player.toggle()}),N.isMobile?(this.player.template.videoWrap.addEventListener("click",function(){e.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){e.toggle()})):this.player.options.preventClickToggle||(this.player.template.videoWrap.addEventListener("click",function(){e.player.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){e.player.toggle()}))}},{key:"initHighlights",value:function(){var e=this;this.player.on("durationchange",function(){if(e.player.video.duration!==1&&e.player.video.duration!==1/0&&e.player.options.highlight){var a=e.player.template.playedBarWrap.querySelectorAll(".dplayer-highlight");[].slice.call(a,0).forEach(function(v){e.player.template.playedBarWrap.removeChild(v)});for(var i=0;i<e.player.options.highlight.length;i++)if(e.player.options.highlight[i].text&&e.player.options.highlight[i].time){var m=document.createElement("div");m.classList.add("dplayer-highlight"),m.style.left=e.player.options.highlight[i].time/e.player.video.duration*100+"%",m.innerHTML='<span class="dplayer-highlight-text">'+e.player.options.highlight[i].text+"</span>",e.player.template.playedBarWrap.insertBefore(m,e.player.template.playedBarTime)}}})}},{key:"initThumbnails",value:function(){var e=this;this.player.options.video.thumbnails&&(this.thumbnails=new va({container:this.player.template.barPreview,barWidth:this.player.template.barWrap.offsetWidth,url:this.player.options.video.thumbnails,events:this.player.events}),this.player.on("loadedmetadata",function(){e.thumbnails.resize(160,e.player.video.videoHeight/e.player.video.videoWidth*160,e.player.template.barWrap.offsetWidth)}))}},{key:"initPlayedBar",value:function(){var e=this,a=function(m){var v=((m.clientX||m.changedTouches[0].clientX)-N.getBoundingClientRectViewLeft(e.player.template.playedBarWrap))/e.player.template.playedBarWrap.clientWidth;v=Math.max(v,0),v=Math.min(v,1),e.player.bar.set("played",v,"width"),e.player.template.ptime.innerHTML=N.secondToTime(v*e.player.video.duration)},i=function m(v){document.removeEventListener(N.nameMap.dragEnd,m),document.removeEventListener(N.nameMap.dragMove,a);var x=((v.clientX||v.changedTouches[0].clientX)-N.getBoundingClientRectViewLeft(e.player.template.playedBarWrap))/e.player.template.playedBarWrap.clientWidth;x=Math.max(x,0),x=Math.min(x,1),e.player.bar.set("played",x,"width"),e.player.seek(e.player.bar.get("played")*e.player.video.duration),e.player.timer.enable("progress")};this.player.template.playedBarWrap.addEventListener(N.nameMap.dragStart,function(){e.player.timer.disable("progress"),document.addEventListener(N.nameMap.dragMove,a),document.addEventListener(N.nameMap.dragEnd,i)}),this.player.template.playedBarWrap.addEventListener(N.nameMap.dragMove,function(m){if(e.player.video.duration){var v=e.player.template.playedBarWrap.getBoundingClientRect().left,x=(m.clientX||m.changedTouches[0].clientX)-v;if(x<0||x>e.player.template.playedBarWrap.offsetWidth)return;var D=e.player.video.duration*(x/e.player.template.playedBarWrap.offsetWidth);N.isMobile&&e.thumbnails&&e.thumbnails.show(),e.thumbnails&&e.thumbnails.move(x),e.player.template.playedBarTime.style.left="".concat(x-(D>=3600?25:20),"px"),e.player.template.playedBarTime.innerText=N.secondToTime(D),e.player.template.playedBarTime.classList.remove("hidden")}}),this.player.template.playedBarWrap.addEventListener(N.nameMap.dragEnd,function(){N.isMobile&&e.thumbnails&&e.thumbnails.hide()}),N.isMobile||(this.player.template.playedBarWrap.addEventListener("mouseenter",function(){e.player.video.duration&&(e.thumbnails&&e.thumbnails.show(),e.player.template.playedBarTime.classList.remove("hidden"))}),this.player.template.playedBarWrap.addEventListener("mouseleave",function(){e.player.video.duration&&(e.thumbnails&&e.thumbnails.hide(),e.player.template.playedBarTime.classList.add("hidden"))}))}},{key:"initFullButton",value:function(){var e=this;this.player.template.browserFullButton.addEventListener("click",function(){e.player.fullScreen.toggle("browser")}),this.player.template.webFullButton.addEventListener("click",function(){e.player.fullScreen.toggle("web")})}},{key:"initVolumeButton",value:function(){var e=this,a=function(m){var v=m||window.event,x=((v.clientX||v.changedTouches[0].clientX)-N.getBoundingClientRectViewLeft(e.player.template.volumeBarWrap)-5.5)/35;e.player.volume(x)},i=function m(){document.removeEventListener(N.nameMap.dragEnd,m),document.removeEventListener(N.nameMap.dragMove,a),e.player.template.volumeButton.classList.remove("dplayer-volume-active")};this.player.template.volumeBarWrapWrap.addEventListener("click",function(m){var v=m||window.event,x=((v.clientX||v.changedTouches[0].clientX)-N.getBoundingClientRectViewLeft(e.player.template.volumeBarWrap)-5.5)/35;e.player.volume(x)}),this.player.template.volumeBarWrapWrap.addEventListener(N.nameMap.dragStart,function(){document.addEventListener(N.nameMap.dragMove,a),document.addEventListener(N.nameMap.dragEnd,i),e.player.template.volumeButton.classList.add("dplayer-volume-active")}),this.player.template.volumeButtonIcon.addEventListener("click",function(){e.player.video.muted?(e.player.video.muted=!1,e.player.switchVolumeIcon(),e.player.bar.set("volume",e.player.volume(),"width")):(e.player.video.muted=!0,e.player.template.volumeIcon.innerHTML=Re.volumeOff,e.player.bar.set("volume",0,"width"))})}},{key:"initQualityButton",value:function(){var e=this;this.player.options.video.quality&&this.player.template.qualityList.addEventListener("click",function(a){a.target.classList.contains("dplayer-quality-item")&&e.player.switchQuality(a.target.dataset.index)})}},{key:"initScreenshotButton",value:function(){var e=this;this.player.options.screenshot&&this.player.template.camareButton.addEventListener("click",function(){var a,i=document.createElement("canvas");i.width=e.player.video.videoWidth,i.height=e.player.video.videoHeight,i.getContext("2d").drawImage(e.player.video,0,0,i.width,i.height),i.toBlob(function(m){a=URL.createObjectURL(m);var v=document.createElement("a");v.href=a,v.download="DPlayer.png",v.style.display="none",document.body.appendChild(v),v.click(),document.body.removeChild(v),URL.revokeObjectURL(a),e.player.events.trigger("screenshot",a)})})}},{key:"initAirplayButton",value:function(){this.player.options.airplay&&(window.WebKitPlaybackTargetAvailabilityEvent?this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged",(function(e){e.availability==="available"?this.template.airplayButton.disable=!1:this.template.airplayButton.disable=!0,this.template.airplayButton.addEventListener("click",(function(){this.video.webkitShowPlaybackTargetPicker()}).bind(this))}).bind(this.player)):this.player.template.airplayButton.style.display="none")}},{key:"initChromecast",value:function(){var e=window.document.createElement("script");e.setAttribute("type","text/javascript"),e.setAttribute("src","https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),window.document.body.appendChild(e),window.__onGCastApiAvailable=function(a){if(a){var i=new(Ye=window.chrome.cast).SessionRequest(Ye.media.DEFAULT_MEDIA_RECEIVER_APP_ID),m=new Ye.ApiConfig(i,function(){},function(v){v===Ye.ReceiverAvailability.AVAILABLE&&console.log("chromecast: ",v)});Ye.initialize(m,function(){})}}}},{key:"initChromecastButton",value:function(){var e=this;if(this.player.options.chromecast){Rn&&(Rn=!1,this.initChromecast());var a=function(m,v){e.currentMedia=v},i=function(m){console.error("Error launching media",m)};this.player.template.chromecastButton.addEventListener("click",function(){nn?(nn=!1,e.currentMedia.stop(),e.session.stop(),e.initChromecast()):(nn=!0,Ye.requestSession(function(m){var v,x,D;e.session=m,v=e.player.options.video.url,x=new Ye.media.MediaInfo(v),D=new Ye.media.LoadRequest(x),e.session?e.session.loadMedia(D,a.bind(e,"loadMedia"),i).play():window.open(v)},function(m){m.code==="cancel"?e.session=void 0:console.error("Error selecting a cast device",m)}))})}}},{key:"initSubtitleButton",value:function(){var e=this;this.player.events.on("subtitle_show",function(){e.player.template.subtitleButton.dataset.balloon=e.player.tran("hide-subs"),e.player.template.subtitleButtonInner.style.opacity="",e.player.user.set("subtitle",1)}),this.player.events.on("subtitle_hide",function(){e.player.template.subtitleButton.dataset.balloon=e.player.tran("show-subs"),e.player.template.subtitleButtonInner.style.opacity="0.4",e.player.user.set("subtitle",0)}),this.player.template.subtitleButton.addEventListener("click",function(){e.player.subtitle.toggle()})}},{key:"setAutoHide",value:function(){var e=this;this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout(function(){!e.player.video.played.length||e.player.paused||e.disableAutoHide||e.hide()},3e3)}},{key:"show",value:function(){this.player.container.classList.remove("dplayer-hide-controller")}},{key:"hide",value:function(){this.player.container.classList.add("dplayer-hide-controller"),this.player.setting.hide(),this.player.comment&&this.player.comment.hide()}},{key:"isShow",value:function(){return!this.player.container.classList.contains("dplayer-hide-controller")}},{key:"toggle",value:function(){this.isShow()?this.hide():this.show()}},{key:"destroy",value:function(){N.isMobile||(this.player.container.removeEventListener("mousemove",this.setAutoHideHandler),this.player.container.removeEventListener("click",this.setAutoHideHandler)),clearTimeout(this.autoHideTimer)}}])&&_a(n.prototype,c),Object.defineProperty(n,"prototype",{writable:!1}),t}();const Ea=xa;function Ct(t){return Ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ct(t)}function Ca(t,n){for(var c=0;c<n.length;c++){var e=n[c];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,(a=function(i,m){if(Ct(i)!=="object"||i===null)return i;var v=i[Symbol.toPrimitive];if(v!==void 0){var x=v.call(i,"string");if(Ct(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(e.key),Ct(a)==="symbol"?a:String(a)),e)}var a}var wa=function(){function t(e){var a=this;(function(D,P){if(!(D instanceof P))throw new TypeError("Cannot call a class as a function")})(this,t),this.player=e,this.player.template.mask.addEventListener("click",function(){a.hide()}),this.player.template.settingButton.addEventListener("click",function(){a.show()}),this.loop=this.player.options.loop,this.player.template.loopToggle.checked=this.loop,this.player.template.loop.addEventListener("click",function(){a.player.template.loopToggle.checked=!a.player.template.loopToggle.checked,a.player.template.loopToggle.checked?a.loop=!0:a.loop=!1,a.hide()}),this.showDanmaku=this.player.user.get("danmaku"),this.showDanmaku||this.player.danmaku&&this.player.danmaku.hide(),this.player.template.showDanmakuToggle.checked=this.showDanmaku,this.player.template.showDanmaku.addEventListener("click",function(){a.player.template.showDanmakuToggle.checked=!a.player.template.showDanmakuToggle.checked,a.player.template.showDanmakuToggle.checked?(a.showDanmaku=!0,a.player.danmaku.show()):(a.showDanmaku=!1,a.player.danmaku.hide()),a.player.user.set("danmaku",a.showDanmaku?1:0),a.hide()}),this.unlimitDanmaku=this.player.user.get("unlimited"),this.player.template.unlimitDanmakuToggle.checked=this.unlimitDanmaku,this.player.template.unlimitDanmaku.addEventListener("click",function(){a.player.template.unlimitDanmakuToggle.checked=!a.player.template.unlimitDanmakuToggle.checked,a.player.template.unlimitDanmakuToggle.checked?(a.unlimitDanmaku=!0,a.player.danmaku.unlimit(!0)):(a.unlimitDanmaku=!1,a.player.danmaku.unlimit(!1)),a.player.user.set("unlimited",a.unlimitDanmaku?1:0),a.hide()}),this.player.template.speed.addEventListener("click",function(){a.player.template.settingBox.classList.add("dplayer-setting-box-narrow"),a.player.template.settingBox.classList.add("dplayer-setting-box-speed")});for(var i=function(D){a.player.template.speedItem[D].addEventListener("click",function(){a.player.speed(a.player.template.speedItem[D].dataset.speed),a.hide()})},m=0;m<this.player.template.speedItem.length;m++)i(m);if(this.player.danmaku){this.player.on("danmaku_opacity",function(D){a.player.bar.set("danmaku",D,"width"),a.player.user.set("opacity",D)}),this.player.danmaku.opacity(this.player.user.get("opacity"));var v=function(D){var P=D||window.event,K=((P.clientX||P.changedTouches[0].clientX)-N.getBoundingClientRectViewLeft(a.player.template.danmakuOpacityBarWrap))/130;K=Math.max(K,0),K=Math.min(K,1),a.player.danmaku.opacity(K)},x=function D(){document.removeEventListener(N.nameMap.dragEnd,D),document.removeEventListener(N.nameMap.dragMove,v),a.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")};this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click",function(D){var P=D||window.event,K=((P.clientX||P.changedTouches[0].clientX)-N.getBoundingClientRectViewLeft(a.player.template.danmakuOpacityBarWrap))/130;K=Math.max(K,0),K=Math.min(K,1),a.player.danmaku.opacity(K)}),this.player.template.danmakuOpacityBarWrapWrap.addEventListener(N.nameMap.dragStart,function(){document.addEventListener(N.nameMap.dragMove,v),document.addEventListener(N.nameMap.dragEnd,x),a.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")})}}var n,c;return n=t,(c=[{key:"hide",value:function(){var e=this;this.player.template.settingBox.classList.remove("dplayer-setting-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),setTimeout(function(){e.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"),e.player.template.settingBox.classList.remove("dplayer-setting-box-speed")},300),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.settingBox.classList.add("dplayer-setting-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}}])&&Ca(n.prototype,c),Object.defineProperty(n,"prototype",{writable:!1}),t}();const ka=wa;function wt(t){return wt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},wt(t)}function Sa(t,n){for(var c=0;c<n.length;c++){var e=n[c];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,(a=function(i,m){if(wt(i)!=="object"||i===null)return i;var v=i[Symbol.toPrimitive];if(v!==void 0){var x=v.call(i,"string");if(wt(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(e.key),wt(a)==="symbol"?a:String(a)),e)}var a}var Ba=function(){function t(e){var a=this;(function(i,m){if(!(i instanceof m))throw new TypeError("Cannot call a class as a function")})(this,t),this.player=e,this.player.template.mask.addEventListener("click",function(){a.hide()}),this.player.template.commentButton.addEventListener("click",function(){a.show()}),this.player.template.commentSettingButton.addEventListener("click",function(){a.toggleSetting()}),this.player.template.commentColorSettingBox.addEventListener("click",function(){if(a.player.template.commentColorSettingBox.querySelector("input:checked+span")){var i=a.player.template.commentColorSettingBox.querySelector("input:checked").value;a.player.template.commentSettingFill.style.fill=i,a.player.template.commentInput.style.color=i,a.player.template.commentSendFill.style.fill=i}}),this.player.template.commentInput.addEventListener("click",function(){a.hideSetting()}),this.player.template.commentInput.addEventListener("keydown",function(i){(i||window.event).keyCode===13&&a.send()}),this.player.template.commentSendButton.addEventListener("click",function(){a.send()})}var n,c;return n=t,(c=[{key:"show",value:function(){this.player.controller.disableAutoHide=!0,this.player.template.controller.classList.add("dplayer-controller-comment"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.container.classList.add("dplayer-show-controller"),this.player.template.commentInput.focus()}},{key:"hide",value:function(){this.player.template.controller.classList.remove("dplayer-controller-comment"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.container.classList.remove("dplayer-show-controller"),this.player.controller.disableAutoHide=!1,this.hideSetting()}},{key:"showSetting",value:function(){this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")}},{key:"hideSetting",value:function(){this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")}},{key:"toggleSetting",value:function(){this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open")?this.hideSetting():this.showSetting()}},{key:"send",value:function(){var e=this;this.player.template.commentInput.blur(),this.player.template.commentInput.value.replace(/^\s+|\s+$/g,"")?this.player.danmaku.send({text:this.player.template.commentInput.value,color:N.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),type:parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)},function(){e.player.template.commentInput.value="",e.hide()}):this.player.notice(this.player.tran("please-input-danmaku"))}}])&&Sa(n.prototype,c),Object.defineProperty(n,"prototype",{writable:!1}),t}();const La=Ba;function kt(t){return kt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},kt(t)}function Ia(t,n){for(var c=0;c<n.length;c++){var e=n[c];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,(a=function(i,m){if(kt(i)!=="object"||i===null)return i;var v=i[Symbol.toPrimitive];if(v!==void 0){var x=v.call(i,"string");if(kt(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(e.key),kt(a)==="symbol"?a:String(a)),e)}var a}var Ra=function(){function t(e){(function(a,i){if(!(a instanceof i))throw new TypeError("Cannot call a class as a function")})(this,t),this.player=e,this.doHotKeyHandler=this.doHotKey.bind(this),this.cancelFullScreenHandler=this.cancelFullScreen.bind(this),this.player.options.hotkey&&document.addEventListener("keydown",this.doHotKeyHandler),document.addEventListener("keydown",this.cancelFullScreenHandler)}var n,c;return n=t,(c=[{key:"doHotKey",value:function(e){if(this.player.focus){var a=document.activeElement.tagName.toUpperCase(),i=document.activeElement.getAttribute("contenteditable");if(a!=="INPUT"&&a!=="TEXTAREA"&&i!==""&&i!=="true"){var m,v=e||window.event;switch(v.keyCode){case 32:v.preventDefault(),this.player.toggle();break;case 37:if(v.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime-5),this.player.controller.setAutoHide();break;case 39:if(v.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime+5),this.player.controller.setAutoHide();break;case 38:v.preventDefault(),m=this.player.volume()+.1,this.player.volume(m);break;case 40:v.preventDefault(),m=this.player.volume()-.1,this.player.volume(m)}}}}},{key:"cancelFullScreen",value:function(e){(e||window.event).keyCode===27&&this.player.fullScreen.isFullScreen("web")&&this.player.fullScreen.cancel("web")}},{key:"destroy",value:function(){this.player.options.hotkey&&document.removeEventListener("keydown",this.doHotKeyHandler),document.removeEventListener("keydown",this.cancelFullScreenHandler)}}])&&Ia(n.prototype,c),Object.defineProperty(n,"prototype",{writable:!1}),t}();const Oa=Ra;function St(t){return St=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},St(t)}function Ta(t,n){for(var c=0;c<n.length;c++){var e=n[c];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,(a=function(i,m){if(St(i)!=="object"||i===null)return i;var v=i[Symbol.toPrimitive];if(v!==void 0){var x=v.call(i,"string");if(St(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(e.key),St(a)==="symbol"?a:String(a)),e)}var a}var Da=function(){function t(e){var a=this;(function(i,m){if(!(i instanceof m))throw new TypeError("Cannot call a class as a function")})(this,t),this.player=e,this.shown=!1,Array.prototype.slice.call(this.player.template.menuItem).forEach(function(i,m){a.player.options.contextmenu[m].click&&i.addEventListener("click",function(){a.player.options.contextmenu[m].click(a.player),a.hide()})}),this.contextmenuHandler=function(i){if(a.shown)a.hide();else{var m=i||window.event;m.preventDefault();var v=a.player.container.getBoundingClientRect();a.show(m.clientX-v.left,m.clientY-v.top),a.player.template.mask.addEventListener("click",function(){a.hide()})}},this.player.container.addEventListener("contextmenu",this.contextmenuHandler)}var n,c;return n=t,(c=[{key:"show",value:function(e,a){this.player.template.menu.classList.add("dplayer-menu-show");var i=this.player.container.getBoundingClientRect();e+this.player.template.menu.offsetWidth>=i.width?(this.player.template.menu.style.right=i.width-e+"px",this.player.template.menu.style.left="initial"):(this.player.template.menu.style.left=e+"px",this.player.template.menu.style.right="initial"),a+this.player.template.menu.offsetHeight>=i.height?(this.player.template.menu.style.bottom=i.height-a+"px",this.player.template.menu.style.top="initial"):(this.player.template.menu.style.top=a+"px",this.player.template.menu.style.bottom="initial"),this.player.template.mask.classList.add("dplayer-mask-show"),this.shown=!0,this.player.events.trigger("contextmenu_show")}},{key:"hide",value:function(){this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.template.menu.classList.remove("dplayer-menu-show"),this.shown=!1,this.player.events.trigger("contextmenu_hide")}},{key:"destroy",value:function(){this.player.container.removeEventListener("contextmenu",this.contextmenuHandler)}}])&&Ta(n.prototype,c),Object.defineProperty(n,"prototype",{writable:!1}),t}();const Ma=Da;function Bt(t){return Bt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Bt(t)}function Pa(t,n){for(var c=0;c<n.length;c++){var e=n[c];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,(a=function(i,m){if(Bt(i)!=="object"||i===null)return i;var v=i[Symbol.toPrimitive];if(v!==void 0){var x=v.call(i,"string");if(Bt(x)!=="object")return x;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}(e.key),Bt(a)==="symbol"?a:String(a)),e)}var a}var Fa=function(){function t(e){var a=this;(function(i,m){if(!(i instanceof m))throw new TypeError("Cannot call a class as a function")})(this,t),this.container=e.template.infoPanel,this.template=e.template,this.video=e.video,this.player=e,this.template.infoPanelClose.addEventListener("click",function(){a.hide()})}var n,c;return n=t,(c=[{key:"show",value:function(){this.beginTime=Date.now(),this.update(),this.player.timer.enable("info"),this.player.timer.enable("fps"),this.container.classList.remove("dplayer-info-panel-hide")}},{key:"hide",value:function(){this.player.timer.disable("info"),this.player.timer.disable("fps"),this.container.classList.add("dplayer-info-panel-hide")}},{key:"triggle",value:function(){this.container.classList.contains("dplayer-info-panel-hide")?this.show():this.hide()}},{key:"update",value:function(){this.template.infoVersion.innerHTML="v".concat("1.27.1"," ").concat("v1.27.0-12-g4f61091"),this.template.infoType.innerHTML=this.player.type,this.template.infoUrl.innerHTML=this.player.options.video.url,this.template.infoResolution.innerHTML="".concat(this.player.video.videoWidth," x ").concat(this.player.video.videoHeight),this.template.infoDuration.innerHTML=this.player.video.duration,this.player.options.danmaku&&(this.template.infoDanmakuId.innerHTML=this.player.options.danmaku.id,this.template.infoDanmakuApi.innerHTML=this.player.options.danmaku.api,this.template.infoDanmakuAmount.innerHTML=this.player.danmaku.dan.length)}},{key:"fps",value:function(e){this.template.infoFPS.innerHTML="".concat(e.toFixed(1))}}])&&Pa(n.prototype,c),Object.defineProperty(n,"prototype",{writable:!1}),t}();const ja=Fa;var Ua=W(568),Na=W.n(Ua);function Lt(t){return Lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Lt(t)}function On(t,n){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),c.push.apply(c,e)}return c}function za(t,n,c){return(n=Dn(n))in t?Object.defineProperty(t,n,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[n]=c,t}function Tn(t,n){for(var c=0;c<n.length;c++){var e=n[c];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,Dn(e.key),e)}}function Dn(t){var n=function(c,e){if(Lt(c)!=="object"||c===null)return c;var a=c[Symbol.toPrimitive];if(a!==void 0){var i=a.call(c,"string");if(Lt(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(c)}(t);return Lt(n)==="symbol"?n:String(n)}var Mn=0,tt=[],Wa=function(){function t(a){var i=this;(function(m,v){if(!(m instanceof v))throw new TypeError("Cannot call a class as a function")})(this,t),this.options=function(m){var v={container:m.element||document.getElementsByClassName("dplayer")[0],live:!1,autoplay:!1,theme:"#b7daff",loop:!1,lang:(navigator.language||navigator.browserLanguage).toLowerCase(),screenshot:!1,airplay:!0,chromecast:!1,hotkey:!0,preload:"metadata",volume:.7,playbackSpeed:[.5,.75,1,1.25,1.5,2],apiBackend:or,video:{},contextmenu:[],mutex:!0,pluginOptions:{hls:{},flv:{},dash:{},webtorrent:{}},preventClickToggle:!1};for(var x in v)v.hasOwnProperty(x)&&!m.hasOwnProperty(x)&&(m[x]=v[x]);return m.video&&!m.video.type&&(m.video.type="auto"),en(m.danmaku)==="object"&&m.danmaku&&!m.danmaku.user&&(m.danmaku.user="DIYgod"),m.subtitle&&(!m.subtitle.type&&(m.subtitle.type="webvtt"),!m.subtitle.fontSize&&(m.subtitle.fontSize="20px"),!m.subtitle.bottom&&(m.subtitle.bottom="40px"),!m.subtitle.color&&(m.subtitle.color="#fff")),m.video.quality&&(m.video.url=m.video.quality[m.video.defaultQuality].url),m.lang&&(m.lang=m.lang.toLowerCase()),m.contextmenu=m.contextmenu.concat([{key:"video-info",click:function(D){D.infoPanel.triggle()}},{key:"about-author",link:"https://diygod.me"},{text:"DPlayer v".concat("1.27.1"),link:"https://github.com/MoePlayer/DPlayer"}]),m}(function(m){for(var v=1;v<arguments.length;v++){var x=arguments[v]!=null?arguments[v]:{};v%2?On(Object(x),!0).forEach(function(D){za(m,D,x[D])}):Object.getOwnPropertyDescriptors?Object.defineProperties(m,Object.getOwnPropertyDescriptors(x)):On(Object(x)).forEach(function(D){Object.defineProperty(m,D,Object.getOwnPropertyDescriptor(x,D))})}return m}({preload:a.video.type==="webtorrent"?"none":"metadata"},a)),this.options.video.quality&&(this.qualityIndex=this.options.video.defaultQuality,this.quality=this.options.video.quality[this.options.video.defaultQuality]),this.tran=new sr(this.options.lang).tran,this.events=new Zr,this.user=new ra(this),this.container=this.options.container,this.noticeList={},this.container.classList.add("dplayer"),this.options.danmaku||this.container.classList.add("dplayer-no-danmaku"),this.options.live?this.container.classList.add("dplayer-live"):this.container.classList.remove("dplayer-live"),N.isMobile&&this.container.classList.add("dplayer-mobile"),this.arrow=this.container.offsetWidth<=500,this.arrow&&this.container.classList.add("dplayer-arrow"),this.options.subtitle&&Array.isArray(this.options.subtitle.url)&&(this.options.subtitle.url.push({subtitle:"",lang:"off"}),this.options.subtitle.defaultSubtitle&&(typeof this.options.subtitle.defaultSubtitle=="string"?this.options.subtitle.index=this.options.subtitle.url.findIndex(function(m){return m.lang===i.options.subtitle.defaultSubtitle||m.name===i.options.subtitle.defaultSubtitle}):typeof this.options.subtitle.defaultSubtitle=="number"&&(this.options.subtitle.index=this.options.subtitle.defaultSubtitle)),(this.options.subtitle.index===-1||!this.options.subtitle.index||this.options.subtitle.index>this.options.subtitle.url.length-1)&&(this.options.subtitle.index=this.options.subtitle.url.findIndex(function(m){return m.lang===i.options.lang})),this.options.subtitle.index===-1&&(this.options.subtitle.index=this.options.subtitle.url.length-1)),this.template=new In({container:this.container,options:this.options,index:Mn,tran:this.tran}),this.video=this.template.video,this.bar=new ca(this.template),this.bezel=new Aa(this.template.bezel),this.fullScreen=new ea(this),this.controller=new Ea(this),this.options.danmaku&&(this.danmaku=new Qr({player:this,container:this.template.danmaku,opacity:this.user.get("opacity"),callback:function(){setTimeout(function(){i.template.danmakuLoading.style.display="none",i.options.autoplay&&i.play()},0)},error:function(m){i.notice(m)},apiBackend:this.options.apiBackend,borderColor:this.options.theme,height:this.arrow?24:30,time:function(){return i.video.currentTime},unlimited:this.user.get("unlimited"),api:{id:this.options.danmaku.id,address:this.options.danmaku.api,token:this.options.danmaku.token,maximum:this.options.danmaku.maximum,addition:this.options.danmaku.addition,user:this.options.danmaku.user,speedRate:this.options.danmaku.speedRate},events:this.events,tran:function(m){return i.tran(m)}}),this.comment=new La(this)),this.setting=new ka(this),this.plugins={},this.docClickFun=function(){i.focus=!1},this.containerClickFun=function(){i.focus=!0},document.addEventListener("click",this.docClickFun,!0),this.container.addEventListener("click",this.containerClickFun,!0),this.paused=!0,this.timer=new ma(this),this.hotkey=new Oa(this),this.contextmenu=new Ma(this),this.initVideo(this.video,this.quality&&this.quality.type||this.options.video.type),this.infoPanel=new ja(this),!this.danmaku&&this.options.autoplay&&this.play(),Mn++,tt.push(this)}var n,c,e;return n=t,c=[{key:"seek",value:function(a){a=Math.max(a,0),this.video.duration&&(a=Math.min(a,this.video.duration)),this.video.currentTime<a?this.notice("".concat(this.tran("ff").replace("%s",(a-this.video.currentTime).toFixed(0)))):this.video.currentTime>a&&this.notice("".concat(this.tran("rew").replace("%s",(this.video.currentTime-a).toFixed(0)))),this.video.currentTime=a,this.danmaku&&this.danmaku.seek(),this.bar.set("played",a/this.video.duration,"width"),this.template.ptime.innerHTML=N.secondToTime(a)}},{key:"play",value:function(a){var i=this;if(this.paused=!1,this.video.paused&&!N.isMobile&&this.bezel.switch(Re.play),this.template.playButton.innerHTML=Re.pause,this.template.mobilePlayButton.innerHTML=Re.pause,a||Y.resolve(this.video.play()).catch(function(){i.pause()}).then(function(){}),this.timer.enable("loading"),this.container.classList.remove("dplayer-paused"),this.container.classList.add("dplayer-playing"),this.danmaku&&this.danmaku.play(),this.options.mutex)for(var m=0;m<tt.length;m++)this!==tt[m]&&tt[m].pause()}},{key:"pause",value:function(a){this.paused=!0,this.container.classList.remove("dplayer-loading"),this.video.paused||N.isMobile||this.bezel.switch(Re.pause),this.template.playButton.innerHTML=Re.play,this.template.mobilePlayButton.innerHTML=Re.play,a||this.video.pause(),this.timer.disable("loading"),this.container.classList.remove("dplayer-playing"),this.container.classList.add("dplayer-paused"),this.danmaku&&this.danmaku.pause()}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeIcon.innerHTML=Re.volumeUp:this.volume()>0?this.template.volumeIcon.innerHTML=Re.volumeDown:this.template.volumeIcon.innerHTML=Re.volumeOff}},{key:"volume",value:function(a,i,m){if(a=parseFloat(a),!isNaN(a)){a=Math.max(a,0),a=Math.min(a,1),this.bar.set("volume",a,"width");var v="".concat((100*a).toFixed(0),"%");this.template.volumeBarWrapWrap.dataset.balloon=v,i||this.user.set("volume",a),m||this.notice("".concat(this.tran("volume")," ").concat((100*a).toFixed(0),"%"),void 0,void 0,"volume"),this.video.volume=a,this.video.muted&&(this.video.muted=!1),this.switchVolumeIcon()}return this.video.volume}},{key:"toggle",value:function(){this.video.paused?this.play():this.pause()}},{key:"on",value:function(a,i){this.events.on(a,i)}},{key:"switchVideo",value:function(a,i){this.pause(),this.video.poster=a.pic?a.pic:"",this.video.src=a.url,this.initMSE(this.video,a.type||"auto"),i&&(this.template.danmakuLoading.style.display="block",this.bar.set("played",0,"width"),this.bar.set("loaded",0,"width"),this.template.ptime.innerHTML="00:00",this.template.danmaku.innerHTML="",this.danmaku&&this.danmaku.reload({id:i.id,address:i.api,token:i.token,maximum:i.maximum,addition:i.addition,user:i.user}))}},{key:"initMSE",value:function(a,i){var m=this;if(this.type=i,this.options.video.customType&&this.options.video.customType[i])Object.prototype.toString.call(this.options.video.customType[i])==="[object Function]"?this.options.video.customType[i](this.video,this):console.error("Illegal customType: ".concat(i));else switch(this.type==="auto"&&(/m3u8(#|\?|$)/i.exec(a.src)?this.type="hls":/.flv(#|\?|$)/i.exec(a.src)?this.type="flv":/.mpd(#|\?|$)/i.exec(a.src)?this.type="dash":this.type="normal"),this.type==="hls"&&(a.canPlayType("application/x-mpegURL")||a.canPlayType("application/vnd.apple.mpegURL"))&&(this.type="normal"),this.type){case"hls":if(window.Hls)if(window.Hls.isSupported()){var v=this.options.pluginOptions.hls,x=new window.Hls(v);this.plugins.hls=x,x.loadSource(a.src),x.attachMedia(a),this.events.on("destroy",function(){x.destroy(),delete m.plugins.hls})}else this.notice("Error: Hls is not supported.");else this.notice("Error: Can't find Hls.");break;case"flv":if(window.flvjs)if(window.flvjs.isSupported()){var D=window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource||{},{type:"flv",url:a.src}),this.options.pluginOptions.flv.config);this.plugins.flvjs=D,D.attachMediaElement(a),D.load(),this.events.on("destroy",function(){D.unload(),D.detachMediaElement(),D.destroy(),delete m.plugins.flvjs})}else this.notice("Error: flvjs is not supported.");else this.notice("Error: Can't find flvjs.");break;case"dash":if(window.dashjs){var P=window.dashjs.MediaPlayer().create().initialize(a,a.src,!1),K=this.options.pluginOptions.dash;P.updateSettings(K),this.plugins.dash=P,this.events.on("destroy",function(){window.dashjs.MediaPlayer().reset(),delete m.plugins.dash})}else this.notice("Error: Can't find dashjs.");break;case"webtorrent":if(window.WebTorrent)if(window.WebTorrent.WEBRTC_SUPPORT){this.container.classList.add("dplayer-loading");var V=this.options.pluginOptions.webtorrent,G=new window.WebTorrent(V);this.plugins.webtorrent=G;var H=a.src;a.src="",a.preload="metadata",a.addEventListener("durationchange",function(){return m.container.classList.remove("dplayer-loading")},{once:!0}),G.add(H,function(q){q.files.find(function(X){return X.name.endsWith(".mp4")}).renderTo(m.video,{autoplay:m.options.autoplay,controls:!1})}),this.events.on("destroy",function(){G.remove(H),G.destroy(),delete m.plugins.webtorrent})}else this.notice("Error: Webtorrent is not supported.");else this.notice("Error: Can't find Webtorrent.")}}},{key:"initVideo",value:function(a,i){var m=this;this.initMSE(a,i),this.on("durationchange",function(){a.duration!==1&&a.duration!==1/0&&(m.template.dtime.innerHTML=N.secondToTime(a.duration))}),this.on("progress",function(){var D=a.buffered.length?a.buffered.end(a.buffered.length-1)/a.duration:0;m.bar.set("loaded",D,"width")}),this.on("error",function(){m.video.error&&m.tran&&m.notice&&m.type!=="webtorrent"&&m.notice(m.tran("video-failed"))}),this.on("ended",function(){m.bar.set("played",1,"width"),m.setting.loop?(m.seek(0),m.play()):m.pause(),m.danmaku&&(m.danmaku.danIndex=0)}),this.on("play",function(){m.paused&&m.play(!0)}),this.on("pause",function(){m.paused||m.pause(!0)}),this.on("timeupdate",function(){m.bar.set("played",m.video.currentTime/m.video.duration,"width");var D=N.secondToTime(m.video.currentTime);m.template.ptime.innerHTML!==D&&(m.template.ptime.innerHTML=D)});for(var v=function(D){a.addEventListener(m.events.videoEvents[D],function(P){m.events.trigger(m.events.videoEvents[D],P)})},x=0;x<this.events.videoEvents.length;x++)v(x);this.volume(this.user.get("volume"),!0,!0),this.options.subtitle&&(this.subtitle=new oa(this.template.subtitle,this.video,this.options.subtitle,this.events),Array.isArray(this.options.subtitle.url)&&(this.subtitles=new da(this)),this.user.get("subtitle")||this.subtitle.hide())}},{key:"switchQuality",value:function(a){var i=this;if(a=typeof a=="string"?parseInt(a):a,this.qualityIndex!==a&&!this.switchingQuality){this.prevIndex=this.qualityIndex,this.qualityIndex=a,this.switchingQuality=!0,this.quality=this.options.video.quality[a],this.template.qualityButton.innerHTML=this.quality.name;var m=this.video.paused;this.video.pause();var v=Na()({current:!1,pic:null,screenshot:this.options.screenshot,preload:"auto",url:this.quality.url,subtitle:this.options.subtitle}),x=new DOMParser().parseFromString(v,"text/html").body.firstChild;this.template.videoWrap.insertBefore(x,this.template.videoWrap.getElementsByTagName("div")[0]),this.prevVideo=this.video,this.video=x,this.initVideo(this.video,this.quality.type||this.options.video.type),this.seek(this.prevVideo.currentTime),this.notice("".concat(this.tran("switching-quality").replace("%q",this.quality.name)),-1,void 0,"switch-quality"),this.events.trigger("quality_start",this.quality),this.on("canplay",function(){if(i.prevVideo){if(i.video.currentTime!==i.prevVideo.currentTime)return void i.seek(i.prevVideo.currentTime);i.template.videoWrap.removeChild(i.prevVideo),i.video.classList.add("dplayer-video-current"),m||i.video.play(),i.prevVideo=null,i.notice("".concat(i.tran("switched-quality").replace("%q",i.quality.name)),void 0,void 0,"switch-quality"),i.switchingQuality=!1,i.events.trigger("quality_end")}}),this.on("error",function(){i.video.error&&i.prevVideo&&(i.template.videoWrap.removeChild(i.video),i.video=i.prevVideo,m||i.video.play(),i.qualityIndex=i.prevIndex,i.quality=i.options.video.quality[i.qualityIndex],i.noticeTime=setTimeout(function(){i.template.notice.style.opacity=0,i.events.trigger("notice_hide")},3e3),i.prevVideo=null,i.switchingQuality=!1)})}}},{key:"notice",value:function(a){var i,m,v,x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2e3,D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.8,P=arguments.length>3?arguments[3]:void 0;if(P&&((i=document.getElementById("dplayer-notice-".concat(P)))&&(i.innerHTML=a),this.noticeList[P]&&(clearTimeout(this.noticeList[P]),this.noticeList[P]=null)),!i){var K=In.NewNotice(a,D,P);this.template.noticeList.appendChild(K),i=K}this.events.trigger("notice_show",i),x>0&&(this.noticeList[P]=setTimeout((m=i,v=this,function(){m.addEventListener("animationend",function(){v.template.noticeList.removeChild(m)}),m.classList.add("remove-notice"),v.events.trigger("notice_hide"),v.noticeList[P]=null}),x))}},{key:"resize",value:function(){this.danmaku&&this.danmaku.resize(),this.controller.thumbnails&&this.controller.thumbnails.resize(160,this.video.videoHeight/this.video.videoWidth*160,this.template.barWrap.offsetWidth),this.events.trigger("resize")}},{key:"speed",value:function(a){this.video.playbackRate=a}},{key:"destroy",value:function(){tt.splice(tt.indexOf(this),1),this.pause(),document.removeEventListener("click",this.docClickFun,!0),this.container.removeEventListener("click",this.containerClickFun,!0),this.fullScreen.destroy(),this.hotkey.destroy(),this.contextmenu.destroy(),this.controller.destroy(),this.timer.destroy(),this.video.src="",this.container.innerHTML="",this.events.trigger("destroy")}}],e=[{key:"version",get:function(){return"1.27.1"}}],c&&Tn(n.prototype,c),e&&Tn(n,e),Object.defineProperty(n,"prototype",{writable:!1}),t}();const Ka=Wa;console.log(`
`.concat(" %c DPlayer v","1.27.1"," ").concat("v1.27.0-12-g4f61091"," %c https://dplayer.diygod.dev ",`
`,`
`),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");const qa=Ka})(),Ue.default})())}(rn)),rn.exports}var ti=ei();const ni=Kn(ti);var an={exports:{}},zn;function ri(){return zn||(zn=1,function(Ot,st){(function(Oe,W){Ot.exports=W()})(self,function(){return function(){var Me={"./node_modules/es6-promise/dist/es6-promise.js":function(T,w,_){/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */(function(S,b){T.exports=b()})(this,function(){function S(F){var z=typeof F;return F!==null&&(z==="object"||z==="function")}function b(F){return typeof F=="function"}var u=void 0;Array.isArray?u=Array.isArray:u=function(F){return Object.prototype.toString.call(F)==="[object Array]"};var r=u,A=0,l=void 0,p=void 0,y=function(z,B){I[A]=z,I[A+1]=B,A+=2,A===2&&(p?p(M):j())};function d(F){p=F}function o(F){y=F}var h=typeof window<"u"?window:void 0,f=h||{},s=f.MutationObserver||f.WebKitMutationObserver,g=typeof self>"u"&&typeof process<"u"&&{}.toString.call(process)==="[object process]",E=typeof Uint8ClampedArray<"u"&&typeof importScripts<"u"&&typeof MessageChannel<"u";function C(){return function(){return process.nextTick(M)}}function R(){return typeof l<"u"?function(){l(M)}:k()}function L(){var F=0,z=new s(M),B=document.createTextNode("");return z.observe(B,{characterData:!0}),function(){B.data=F=++F%2}}function O(){var F=new MessageChannel;return F.port1.onmessage=M,function(){return F.port2.postMessage(0)}}function k(){var F=setTimeout;return function(){return F(M,1)}}var I=new Array(1e3);function M(){for(var F=0;F<A;F+=2){var z=I[F],B=I[F+1];z(B),I[F]=void 0,I[F+1]=void 0}A=0}function U(){try{var F=Function("return this")().require("vertx");return l=F.runOnLoop||F.runOnContext,R()}catch{return k()}}var j=void 0;g?j=C():s?j=L():E?j=O():h===void 0?j=U():j=k();function Y(F,z){var B=this,Q=new this.constructor(te);Q[N]===void 0&&ze(Q);var re=B._state;if(re){var ae=arguments[re-1];y(function(){return Pe(re,Q,ae,B._result)})}else _e(B,Q,F,z);return Q}function ne(F){var z=this;if(F&&typeof F=="object"&&F.constructor===z)return F;var B=new z(te);return xe(B,F),B}var N=Math.random().toString(36).substring(2);function te(){}var ie=void 0,pe=1,J=2;function oe(){return new TypeError("You cannot resolve a promise with itself")}function Se(){return new TypeError("A promises callback cannot return that same promise.")}function se(F,z,B,Q){try{F.call(z,B,Q)}catch(re){return re}}function de(F,z,B){y(function(Q){var re=!1,ae=se(B,z,function($){re||(re=!0,z!==$?xe(Q,$):le(Q,$))},function($){re||(re=!0,Z(Q,$))},"Settle: "+(Q._label||" unknown promise"));!re&&ae&&(re=!0,Z(Q,ae))},F)}function Ae(F,z){z._state===pe?le(F,z._result):z._state===J?Z(F,z._result):_e(z,void 0,function(B){return xe(F,B)},function(B){return Z(F,B)})}function me(F,z,B){z.constructor===F.constructor&&B===Y&&z.constructor.resolve===ne?Ae(F,z):B===void 0?le(F,z):b(B)?de(F,z,B):le(F,z)}function xe(F,z){if(F===z)Z(F,oe());else if(S(z)){var B=void 0;try{B=z.then}catch(Q){Z(F,Q);return}me(F,z,B)}else le(F,z)}function Le(F){F._onerror&&F._onerror(F._result),we(F)}function le(F,z){F._state===ie&&(F._result=z,F._state=pe,F._subscribers.length!==0&&y(we,F))}function Z(F,z){F._state===ie&&(F._state=J,F._result=z,y(Le,F))}function _e(F,z,B,Q){var re=F._subscribers,ae=re.length;F._onerror=null,re[ae]=z,re[ae+pe]=B,re[ae+J]=Q,ae===0&&F._state&&y(we,F)}function we(F){var z=F._subscribers,B=F._state;if(z.length!==0){for(var Q=void 0,re=void 0,ae=F._result,$=0;$<z.length;$+=3)Q=z[$],re=z[$+B],Q?Pe(B,Q,re,ae):re(ae);F._subscribers.length=0}}function Pe(F,z,B,Q){var re=b(B),ae=void 0,$=void 0,We=!0;if(re){try{ae=B(Q)}catch(Ke){We=!1,$=Ke}if(z===ae){Z(z,Se());return}}else ae=Q;z._state!==ie||(re&&We?xe(z,ae):We===!1?Z(z,$):F===pe?le(z,ae):F===J&&Z(z,ae))}function Ie(F,z){try{z(function(Q){xe(F,Q)},function(Q){Z(F,Q)})}catch(B){Z(F,B)}}var Te=0;function Ne(){return Te++}function ze(F){F[N]=Te++,F._state=void 0,F._result=void 0,F._subscribers=[]}function Ee(){return new Error("Array Methods must be provided an Array")}var ke=function(){function F(z,B){this._instanceConstructor=z,this.promise=new z(te),this.promise[N]||ze(this.promise),r(B)?(this.length=B.length,this._remaining=B.length,this._result=new Array(this.length),this.length===0?le(this.promise,this._result):(this.length=this.length||0,this._enumerate(B),this._remaining===0&&le(this.promise,this._result))):Z(this.promise,Ee())}return F.prototype._enumerate=function(B){for(var Q=0;this._state===ie&&Q<B.length;Q++)this._eachEntry(B[Q],Q)},F.prototype._eachEntry=function(B,Q){var re=this._instanceConstructor,ae=re.resolve;if(ae===ne){var $=void 0,We=void 0,Ke=!1;try{$=B.then}catch(Ze){Ke=!0,We=Ze}if($===Y&&B._state!==ie)this._settledAt(B._state,Q,B._result);else if(typeof $!="function")this._remaining--,this._result[Q]=B;else if(re===Ce){var Ge=new re(te);Ke?Z(Ge,We):me(Ge,B,$),this._willSettleAt(Ge,Q)}else this._willSettleAt(new re(function(Ze){return Ze(B)}),Q)}else this._willSettleAt(ae(B),Q)},F.prototype._settledAt=function(B,Q,re){var ae=this.promise;ae._state===ie&&(this._remaining--,B===J?Z(ae,re):this._result[Q]=re),this._remaining===0&&le(ae,this._result)},F.prototype._willSettleAt=function(B,Q){var re=this;_e(B,void 0,function(ae){return re._settledAt(pe,Q,ae)},function(ae){return re._settledAt(J,Q,ae)})},F}();function Fe(F){return new ke(this,F).promise}function He(F){var z=this;return r(F)?new z(function(B,Q){for(var re=F.length,ae=0;ae<re;ae++)z.resolve(F[ae]).then(B,Q)}):new z(function(B,Q){return Q(new TypeError("You must pass an array to race."))})}function Tt(F){var z=this,B=new z(te);return Z(B,F),B}function Dt(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function Yt(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}var Ce=function(){function F(z){this[N]=Ne(),this._result=this._state=void 0,this._subscribers=[],te!==z&&(typeof z!="function"&&Dt(),this instanceof F?Ie(this,z):Yt())}return F.prototype.catch=function(B){return this.then(null,B)},F.prototype.finally=function(B){var Q=this,re=Q.constructor;return b(B)?Q.then(function(ae){return re.resolve(B()).then(function(){return ae})},function(ae){return re.resolve(B()).then(function(){throw ae})}):Q.then(B,B)},F}();Ce.prototype.then=Y,Ce.all=Fe,Ce.race=He,Ce.resolve=ne,Ce.reject=Tt,Ce._setScheduler=d,Ce._setAsap=o,Ce._asap=y;function Mt(){var F=void 0;if(typeof _.g<"u")F=_.g;else if(typeof self<"u")F=self;else try{F=Function("return this")()}catch{throw new Error("polyfill failed because global object is unavailable in this environment")}var z=F.Promise;if(z){var B=null;try{B=Object.prototype.toString.call(z.resolve())}catch{}if(B==="[object Promise]"&&!z.cast)return}F.Promise=Ce}return Ce.polyfill=Mt,Ce.Promise=Ce,Ce})},"./node_modules/events/events.js":function(T){var w=typeof Reflect=="object"?Reflect:null,_=w&&typeof w.apply=="function"?w.apply:function(k,I,M){return Function.prototype.apply.call(k,I,M)},S;w&&typeof w.ownKeys=="function"?S=w.ownKeys:Object.getOwnPropertySymbols?S=function(k){return Object.getOwnPropertyNames(k).concat(Object.getOwnPropertySymbols(k))}:S=function(k){return Object.getOwnPropertyNames(k)};function b(O){console&&console.warn&&console.warn(O)}var u=Number.isNaN||function(k){return k!==k};function r(){r.init.call(this)}T.exports=r,T.exports.once=C,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._eventsCount=0,r.prototype._maxListeners=void 0;var A=10;function l(O){if(typeof O!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof O)}Object.defineProperty(r,"defaultMaxListeners",{enumerable:!0,get:function(){return A},set:function(O){if(typeof O!="number"||O<0||u(O))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+O+".");A=O}}),r.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},r.prototype.setMaxListeners=function(k){if(typeof k!="number"||k<0||u(k))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+k+".");return this._maxListeners=k,this};function p(O){return O._maxListeners===void 0?r.defaultMaxListeners:O._maxListeners}r.prototype.getMaxListeners=function(){return p(this)},r.prototype.emit=function(k){for(var I=[],M=1;M<arguments.length;M++)I.push(arguments[M]);var U=k==="error",j=this._events;if(j!==void 0)U=U&&j.error===void 0;else if(!U)return!1;if(U){var Y;if(I.length>0&&(Y=I[0]),Y instanceof Error)throw Y;var ne=new Error("Unhandled error."+(Y?" ("+Y.message+")":""));throw ne.context=Y,ne}var N=j[k];if(N===void 0)return!1;if(typeof N=="function")_(N,this,I);else for(var te=N.length,ie=s(N,te),M=0;M<te;++M)_(ie[M],this,I);return!0};function y(O,k,I,M){var U,j,Y;if(l(I),j=O._events,j===void 0?(j=O._events=Object.create(null),O._eventsCount=0):(j.newListener!==void 0&&(O.emit("newListener",k,I.listener?I.listener:I),j=O._events),Y=j[k]),Y===void 0)Y=j[k]=I,++O._eventsCount;else if(typeof Y=="function"?Y=j[k]=M?[I,Y]:[Y,I]:M?Y.unshift(I):Y.push(I),U=p(O),U>0&&Y.length>U&&!Y.warned){Y.warned=!0;var ne=new Error("Possible EventEmitter memory leak detected. "+Y.length+" "+String(k)+" listeners added. Use emitter.setMaxListeners() to increase limit");ne.name="MaxListenersExceededWarning",ne.emitter=O,ne.type=k,ne.count=Y.length,b(ne)}return O}r.prototype.addListener=function(k,I){return y(this,k,I,!1)},r.prototype.on=r.prototype.addListener,r.prototype.prependListener=function(k,I){return y(this,k,I,!0)};function d(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function o(O,k,I){var M={fired:!1,wrapFn:void 0,target:O,type:k,listener:I},U=d.bind(M);return U.listener=I,M.wrapFn=U,U}r.prototype.once=function(k,I){return l(I),this.on(k,o(this,k,I)),this},r.prototype.prependOnceListener=function(k,I){return l(I),this.prependListener(k,o(this,k,I)),this},r.prototype.removeListener=function(k,I){var M,U,j,Y,ne;if(l(I),U=this._events,U===void 0)return this;if(M=U[k],M===void 0)return this;if(M===I||M.listener===I)--this._eventsCount===0?this._events=Object.create(null):(delete U[k],U.removeListener&&this.emit("removeListener",k,M.listener||I));else if(typeof M!="function"){for(j=-1,Y=M.length-1;Y>=0;Y--)if(M[Y]===I||M[Y].listener===I){ne=M[Y].listener,j=Y;break}if(j<0)return this;j===0?M.shift():g(M,j),M.length===1&&(U[k]=M[0]),U.removeListener!==void 0&&this.emit("removeListener",k,ne||I)}return this},r.prototype.off=r.prototype.removeListener,r.prototype.removeAllListeners=function(k){var I,M,U;if(M=this._events,M===void 0)return this;if(M.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):M[k]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete M[k]),this;if(arguments.length===0){var j=Object.keys(M),Y;for(U=0;U<j.length;++U)Y=j[U],Y!=="removeListener"&&this.removeAllListeners(Y);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(I=M[k],typeof I=="function")this.removeListener(k,I);else if(I!==void 0)for(U=I.length-1;U>=0;U--)this.removeListener(k,I[U]);return this};function h(O,k,I){var M=O._events;if(M===void 0)return[];var U=M[k];return U===void 0?[]:typeof U=="function"?I?[U.listener||U]:[U]:I?E(U):s(U,U.length)}r.prototype.listeners=function(k){return h(this,k,!0)},r.prototype.rawListeners=function(k){return h(this,k,!1)},r.listenerCount=function(O,k){return typeof O.listenerCount=="function"?O.listenerCount(k):f.call(O,k)},r.prototype.listenerCount=f;function f(O){var k=this._events;if(k!==void 0){var I=k[O];if(typeof I=="function")return 1;if(I!==void 0)return I.length}return 0}r.prototype.eventNames=function(){return this._eventsCount>0?S(this._events):[]};function s(O,k){for(var I=new Array(k),M=0;M<k;++M)I[M]=O[M];return I}function g(O,k){for(;k+1<O.length;k++)O[k]=O[k+1];O.pop()}function E(O){for(var k=new Array(O.length),I=0;I<k.length;++I)k[I]=O[I].listener||O[I];return k}function C(O,k){return new Promise(function(I,M){function U(Y){O.removeListener(k,j),M(Y)}function j(){typeof O.removeListener=="function"&&O.removeListener("error",U),I([].slice.call(arguments))}L(O,k,j,{once:!0}),k!=="error"&&R(O,U,{once:!0})})}function R(O,k,I){typeof O.on=="function"&&L(O,"error",k,I)}function L(O,k,I,M){if(typeof O.on=="function")M.once?O.once(k,I):O.on(k,I);else if(typeof O.addEventListener=="function")O.addEventListener(k,function U(j){M.once&&O.removeEventListener(k,U),I(j)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof O)}},"./node_modules/webworkify-webpack/index.js":function(T,w,_){function S(d){var o={};function h(s){if(o[s])return o[s].exports;var g=o[s]={i:s,l:!1,exports:{}};return d[s].call(g.exports,g,g.exports,h),g.l=!0,g.exports}h.m=d,h.c=o,h.i=function(s){return s},h.d=function(s,g,E){h.o(s,g)||Object.defineProperty(s,g,{configurable:!1,enumerable:!0,get:E})},h.r=function(s){Object.defineProperty(s,"__esModule",{value:!0})},h.n=function(s){var g=s&&s.__esModule?function(){return s.default}:function(){return s};return h.d(g,"a",g),g},h.o=function(s,g){return Object.prototype.hasOwnProperty.call(s,g)},h.p="/",h.oe=function(s){throw console.error(s),s};var f=h(h.s=ENTRY_MODULE);return f.default||f}var b="[\\.|\\-|\\+|\\w|/|@]+",u="\\(\\s*(/\\*.*?\\*/)?\\s*.*?("+b+").*?\\)";function r(d){return(d+"").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}function A(d){return!isNaN(1*d)}function l(d,o,h){var f={};f[h]=[];var s=o.toString(),g=s.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);if(!g)return f;for(var E=g[1],C=new RegExp("(\\\\n|\\W)"+r(E)+u,"g"),R;R=C.exec(s);)R[3]!=="dll-reference"&&f[h].push(R[3]);for(C=new RegExp("\\("+r(E)+'\\("(dll-reference\\s('+b+'))"\\)\\)'+u,"g");R=C.exec(s);)d[R[2]]||(f[h].push(R[1]),d[R[2]]=_(R[1]).m),f[R[2]]=f[R[2]]||[],f[R[2]].push(R[4]);for(var L=Object.keys(f),O=0;O<L.length;O++)for(var k=0;k<f[L[O]].length;k++)A(f[L[O]][k])&&(f[L[O]][k]=1*f[L[O]][k]);return f}function p(d){var o=Object.keys(d);return o.reduce(function(h,f){return h||d[f].length>0},!1)}function y(d,o){for(var h={main:[o]},f={main:[]},s={main:{}};p(h);)for(var g=Object.keys(h),E=0;E<g.length;E++){var C=g[E],R=h[C],L=R.pop();if(s[C]=s[C]||{},!(s[C][L]||!d[C][L])){s[C][L]=!0,f[C]=f[C]||[],f[C].push(L);for(var O=l(d,d[C][L],C),k=Object.keys(O),I=0;I<k.length;I++)h[k[I]]=h[k[I]]||[],h[k[I]]=h[k[I]].concat(O[k[I]])}}return f}T.exports=function(d,o){o=o||{};var h={main:_.m},f=o.all?{main:Object.keys(h.main)}:y(h,d),s="";Object.keys(f).filter(function(L){return L!=="main"}).forEach(function(L){for(var O=0;f[L][O];)O++;f[L].push(O),h[L][O]="(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",s=s+"var "+L+" = ("+S.toString().replace("ENTRY_MODULE",JSON.stringify(O))+")({"+f[L].map(function(k){return""+JSON.stringify(k)+": "+h[L][k].toString()}).join(",")+`});
`}),s=s+"new (("+S.toString().replace("ENTRY_MODULE",JSON.stringify(d))+")({"+f.main.map(function(L){return""+JSON.stringify(L)+": "+h.main[L].toString()}).join(",")+"}))(self);";var g=new window.Blob([s],{type:"text/javascript"});if(o.bare)return g;var E=window.URL||window.webkitURL||window.mozURL||window.msURL,C=E.createObjectURL(g),R=new window.Worker(C);return R.objectURL=C,R}},"./src/config.js":function(T,w,_){_.r(w),_.d(w,{defaultConfig:function(){return S},createDefaultConfig:function(){return b}});var S={enableWorker:!1,enableStashBuffer:!0,stashInitialSize:void 0,isLive:!1,lazyLoad:!0,lazyLoadMaxDuration:3*60,lazyLoadRecoverDuration:30,deferLoadAfterSourceOpen:!0,autoCleanupMaxBackwardDuration:3*60,autoCleanupMinBackwardDuration:2*60,statisticsInfoReportInterval:600,fixAudioTimestampGap:!0,accurateSeek:!1,seekType:"range",seekParamStart:"bstart",seekParamEnd:"bend",rangeLoadZeroStart:!1,customSeekHandler:void 0,reuseRedirectedURL:!1,headers:void 0,customLoader:void 0};function b(){return Object.assign({},S)}},"./src/core/features.js":function(T,w,_){_.r(w);var S=_("./src/io/io-controller.js"),b=_("./src/config.js"),u=function(){function r(){}return r.supportMSEH264Playback=function(){return window.MediaSource&&window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')},r.supportNetworkStreamIO=function(){var A=new S.default({},(0,b.createDefaultConfig)()),l=A.loaderType;return A.destroy(),l=="fetch-stream-loader"||l=="xhr-moz-chunked-loader"},r.getNetworkLoaderTypeName=function(){var A=new S.default({},(0,b.createDefaultConfig)()),l=A.loaderType;return A.destroy(),l},r.supportNativeMediaPlayback=function(A){r.videoElement==null&&(r.videoElement=window.document.createElement("video"));var l=r.videoElement.canPlayType(A);return l==="probably"||l=="maybe"},r.getFeatureList=function(){var A={mseFlvPlayback:!1,mseLiveFlvPlayback:!1,networkStreamIO:!1,networkLoaderName:"",nativeMP4H264Playback:!1,nativeWebmVP8Playback:!1,nativeWebmVP9Playback:!1};return A.mseFlvPlayback=r.supportMSEH264Playback(),A.networkStreamIO=r.supportNetworkStreamIO(),A.networkLoaderName=r.getNetworkLoaderTypeName(),A.mseLiveFlvPlayback=A.mseFlvPlayback&&A.networkStreamIO,A.nativeMP4H264Playback=r.supportNativeMediaPlayback('video/mp4; codecs="avc1.42001E, mp4a.40.2"'),A.nativeWebmVP8Playback=r.supportNativeMediaPlayback('video/webm; codecs="vp8.0, vorbis"'),A.nativeWebmVP9Playback=r.supportNativeMediaPlayback('video/webm; codecs="vp9"'),A},r}();w.default=u},"./src/core/media-info.js":function(T,w,_){_.r(w);var S=function(){function b(){this.mimeType=null,this.duration=null,this.hasAudio=null,this.hasVideo=null,this.audioCodec=null,this.videoCodec=null,this.audioDataRate=null,this.videoDataRate=null,this.audioSampleRate=null,this.audioChannelCount=null,this.width=null,this.height=null,this.fps=null,this.profile=null,this.level=null,this.refFrames=null,this.chromaFormat=null,this.sarNum=null,this.sarDen=null,this.metadata=null,this.segments=null,this.segmentCount=null,this.hasKeyframesIndex=null,this.keyframesIndex=null}return b.prototype.isComplete=function(){var u=this.hasAudio===!1||this.hasAudio===!0&&this.audioCodec!=null&&this.audioSampleRate!=null&&this.audioChannelCount!=null,r=this.hasVideo===!1||this.hasVideo===!0&&this.videoCodec!=null&&this.width!=null&&this.height!=null&&this.fps!=null&&this.profile!=null&&this.level!=null&&this.refFrames!=null&&this.chromaFormat!=null&&this.sarNum!=null&&this.sarDen!=null;return this.mimeType!=null&&this.duration!=null&&this.metadata!=null&&this.hasKeyframesIndex!=null&&u&&r},b.prototype.isSeekable=function(){return this.hasKeyframesIndex===!0},b.prototype.getNearestKeyframe=function(u){if(this.keyframesIndex==null)return null;var r=this.keyframesIndex,A=this._search(r.times,u);return{index:A,milliseconds:r.times[A],fileposition:r.filepositions[A]}},b.prototype._search=function(u,r){var A=0,l=u.length-1,p=0,y=0,d=l;for(r<u[0]&&(A=0,y=d+1);y<=d;)if(p=y+Math.floor((d-y)/2),p===l||r>=u[p]&&r<u[p+1]){A=p;break}else u[p]<r?y=p+1:d=p-1;return A},b}();w.default=S},"./src/core/media-segment-info.js":function(T,w,_){_.r(w),_.d(w,{SampleInfo:function(){return S},MediaSegmentInfo:function(){return b},IDRSampleList:function(){return u},MediaSegmentInfoList:function(){return r}});var S=function(){function A(l,p,y,d,o){this.dts=l,this.pts=p,this.duration=y,this.originalDts=d,this.isSyncPoint=o,this.fileposition=null}return A}(),b=function(){function A(){this.beginDts=0,this.endDts=0,this.beginPts=0,this.endPts=0,this.originalBeginDts=0,this.originalEndDts=0,this.syncPoints=[],this.firstSample=null,this.lastSample=null}return A.prototype.appendSyncPoint=function(l){l.isSyncPoint=!0,this.syncPoints.push(l)},A}(),u=function(){function A(){this._list=[]}return A.prototype.clear=function(){this._list=[]},A.prototype.appendArray=function(l){var p=this._list;l.length!==0&&(p.length>0&&l[0].originalDts<p[p.length-1].originalDts&&this.clear(),Array.prototype.push.apply(p,l))},A.prototype.getLastSyncPointBeforeDts=function(l){if(this._list.length==0)return null;var p=this._list,y=0,d=p.length-1,o=0,h=0,f=d;for(l<p[0].dts&&(y=0,h=f+1);h<=f;)if(o=h+Math.floor((f-h)/2),o===d||l>=p[o].dts&&l<p[o+1].dts){y=o;break}else p[o].dts<l?h=o+1:f=o-1;return this._list[y]},A}(),r=function(){function A(l){this._type=l,this._list=[],this._lastAppendLocation=-1}return Object.defineProperty(A.prototype,"type",{get:function(){return this._type},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"length",{get:function(){return this._list.length},enumerable:!1,configurable:!0}),A.prototype.isEmpty=function(){return this._list.length===0},A.prototype.clear=function(){this._list=[],this._lastAppendLocation=-1},A.prototype._searchNearestSegmentBefore=function(l){var p=this._list;if(p.length===0)return-2;var y=p.length-1,d=0,o=0,h=y,f=0;if(l<p[0].originalBeginDts)return f=-1,f;for(;o<=h;)if(d=o+Math.floor((h-o)/2),d===y||l>p[d].lastSample.originalDts&&l<p[d+1].originalBeginDts){f=d;break}else p[d].originalBeginDts<l?o=d+1:h=d-1;return f},A.prototype._searchNearestSegmentAfter=function(l){return this._searchNearestSegmentBefore(l)+1},A.prototype.append=function(l){var p=this._list,y=l,d=this._lastAppendLocation,o=0;d!==-1&&d<p.length&&y.originalBeginDts>=p[d].lastSample.originalDts&&(d===p.length-1||d<p.length-1&&y.originalBeginDts<p[d+1].originalBeginDts)?o=d+1:p.length>0&&(o=this._searchNearestSegmentBefore(y.originalBeginDts)+1),this._lastAppendLocation=o,this._list.splice(o,0,y)},A.prototype.getLastSegmentBefore=function(l){var p=this._searchNearestSegmentBefore(l);return p>=0?this._list[p]:null},A.prototype.getLastSampleBefore=function(l){var p=this.getLastSegmentBefore(l);return p!=null?p.lastSample:null},A.prototype.getLastSyncPointBefore=function(l){for(var p=this._searchNearestSegmentBefore(l),y=this._list[p].syncPoints;y.length===0&&p>0;)p--,y=this._list[p].syncPoints;return y.length>0?y[y.length-1]:null},A}()},"./src/core/mse-controller.js":function(T,w,_){_.r(w);var S=_("./node_modules/events/events.js"),b=_.n(S),u=_("./src/utils/logger.js"),r=_("./src/utils/browser.js"),A=_("./src/core/mse-events.js"),l=_("./src/core/media-segment-info.js"),p=_("./src/utils/exception.js"),y=function(){function d(o){this.TAG="MSEController",this._config=o,this._emitter=new(b()),this._config.isLive&&this._config.autoCleanupSourceBuffer==null&&(this._config.autoCleanupSourceBuffer=!0),this.e={onSourceOpen:this._onSourceOpen.bind(this),onSourceEnded:this._onSourceEnded.bind(this),onSourceClose:this._onSourceClose.bind(this),onSourceBufferError:this._onSourceBufferError.bind(this),onSourceBufferUpdateEnd:this._onSourceBufferUpdateEnd.bind(this)},this._mediaSource=null,this._mediaSourceObjectURL=null,this._mediaElement=null,this._isBufferFull=!1,this._hasPendingEos=!1,this._requireSetMediaDuration=!1,this._pendingMediaDuration=0,this._pendingSourceBufferInit=[],this._mimeTypes={video:null,audio:null},this._sourceBuffers={video:null,audio:null},this._lastInitSegments={video:null,audio:null},this._pendingSegments={video:[],audio:[]},this._pendingRemoveRanges={video:[],audio:[]},this._idrList=new l.IDRSampleList}return d.prototype.destroy=function(){(this._mediaElement||this._mediaSource)&&this.detachMediaElement(),this.e=null,this._emitter.removeAllListeners(),this._emitter=null},d.prototype.on=function(o,h){this._emitter.addListener(o,h)},d.prototype.off=function(o,h){this._emitter.removeListener(o,h)},d.prototype.attachMediaElement=function(o){if(this._mediaSource)throw new p.IllegalStateException("MediaSource has been attached to an HTMLMediaElement!");var h=this._mediaSource=new window.MediaSource;h.addEventListener("sourceopen",this.e.onSourceOpen),h.addEventListener("sourceended",this.e.onSourceEnded),h.addEventListener("sourceclose",this.e.onSourceClose),this._mediaElement=o,this._mediaSourceObjectURL=window.URL.createObjectURL(this._mediaSource),o.src=this._mediaSourceObjectURL},d.prototype.detachMediaElement=function(){if(this._mediaSource){var o=this._mediaSource;for(var h in this._sourceBuffers){var f=this._pendingSegments[h];f.splice(0,f.length),this._pendingSegments[h]=null,this._pendingRemoveRanges[h]=null,this._lastInitSegments[h]=null;var s=this._sourceBuffers[h];if(s){if(o.readyState!=="closed"){try{o.removeSourceBuffer(s)}catch(g){u.default.e(this.TAG,g.message)}s.removeEventListener("error",this.e.onSourceBufferError),s.removeEventListener("updateend",this.e.onSourceBufferUpdateEnd)}this._mimeTypes[h]=null,this._sourceBuffers[h]=null}}if(o.readyState==="open")try{o.endOfStream()}catch(g){u.default.e(this.TAG,g.message)}o.removeEventListener("sourceopen",this.e.onSourceOpen),o.removeEventListener("sourceended",this.e.onSourceEnded),o.removeEventListener("sourceclose",this.e.onSourceClose),this._pendingSourceBufferInit=[],this._isBufferFull=!1,this._idrList.clear(),this._mediaSource=null}this._mediaElement&&(this._mediaElement.src="",this._mediaElement.removeAttribute("src"),this._mediaElement=null),this._mediaSourceObjectURL&&(window.URL.revokeObjectURL(this._mediaSourceObjectURL),this._mediaSourceObjectURL=null)},d.prototype.appendInitSegment=function(o,h){if(!this._mediaSource||this._mediaSource.readyState!=="open"){this._pendingSourceBufferInit.push(o),this._pendingSegments[o.type].push(o);return}var f=o,s=""+f.container;f.codec&&f.codec.length>0&&(s+=";codecs="+f.codec);var g=!1;if(u.default.v(this.TAG,"Received Initialization Segment, mimeType: "+s),this._lastInitSegments[f.type]=f,s!==this._mimeTypes[f.type]){if(this._mimeTypes[f.type])u.default.v(this.TAG,"Notice: "+f.type+" mimeType changed, origin: "+this._mimeTypes[f.type]+", target: "+s);else{g=!0;try{var E=this._sourceBuffers[f.type]=this._mediaSource.addSourceBuffer(s);E.addEventListener("error",this.e.onSourceBufferError),E.addEventListener("updateend",this.e.onSourceBufferUpdateEnd)}catch(C){u.default.e(this.TAG,C.message),this._emitter.emit(A.default.ERROR,{code:C.code,msg:C.message});return}}this._mimeTypes[f.type]=s}h||this._pendingSegments[f.type].push(f),g||this._sourceBuffers[f.type]&&!this._sourceBuffers[f.type].updating&&this._doAppendSegments(),r.default.safari&&f.container==="audio/mpeg"&&f.mediaDuration>0&&(this._requireSetMediaDuration=!0,this._pendingMediaDuration=f.mediaDuration/1e3,this._updateMediaSourceDuration())},d.prototype.appendMediaSegment=function(o){var h=o;this._pendingSegments[h.type].push(h),this._config.autoCleanupSourceBuffer&&this._needCleanupSourceBuffer()&&this._doCleanupSourceBuffer();var f=this._sourceBuffers[h.type];f&&!f.updating&&!this._hasPendingRemoveRanges()&&this._doAppendSegments()},d.prototype.seek=function(o){for(var h in this._sourceBuffers)if(this._sourceBuffers[h]){var f=this._sourceBuffers[h];if(this._mediaSource.readyState==="open")try{f.abort()}catch(L){u.default.e(this.TAG,L.message)}this._idrList.clear();var s=this._pendingSegments[h];if(s.splice(0,s.length),this._mediaSource.readyState!=="closed"){for(var g=0;g<f.buffered.length;g++){var E=f.buffered.start(g),C=f.buffered.end(g);this._pendingRemoveRanges[h].push({start:E,end:C})}if(f.updating||this._doRemoveRanges(),r.default.safari){var R=this._lastInitSegments[h];R&&(this._pendingSegments[h].push(R),f.updating||this._doAppendSegments())}}}},d.prototype.endOfStream=function(){var o=this._mediaSource,h=this._sourceBuffers;if(!o||o.readyState!=="open"){o&&o.readyState==="closed"&&this._hasPendingSegments()&&(this._hasPendingEos=!0);return}h.video&&h.video.updating||h.audio&&h.audio.updating?this._hasPendingEos=!0:(this._hasPendingEos=!1,o.endOfStream())},d.prototype.getNearestKeyframe=function(o){return this._idrList.getLastSyncPointBeforeDts(o)},d.prototype._needCleanupSourceBuffer=function(){if(!this._config.autoCleanupSourceBuffer)return!1;var o=this._mediaElement.currentTime;for(var h in this._sourceBuffers){var f=this._sourceBuffers[h];if(f){var s=f.buffered;if(s.length>=1&&o-s.start(0)>=this._config.autoCleanupMaxBackwardDuration)return!0}}return!1},d.prototype._doCleanupSourceBuffer=function(){var o=this._mediaElement.currentTime;for(var h in this._sourceBuffers){var f=this._sourceBuffers[h];if(f){for(var s=f.buffered,g=!1,E=0;E<s.length;E++){var C=s.start(E),R=s.end(E);if(C<=o&&o<R+3){if(o-C>=this._config.autoCleanupMaxBackwardDuration){g=!0;var L=o-this._config.autoCleanupMinBackwardDuration;this._pendingRemoveRanges[h].push({start:C,end:L})}}else R<o&&(g=!0,this._pendingRemoveRanges[h].push({start:C,end:R}))}g&&!f.updating&&this._doRemoveRanges()}}},d.prototype._updateMediaSourceDuration=function(){var o=this._sourceBuffers;if(!(this._mediaElement.readyState===0||this._mediaSource.readyState!=="open")&&!(o.video&&o.video.updating||o.audio&&o.audio.updating)){var h=this._mediaSource.duration,f=this._pendingMediaDuration;f>0&&(isNaN(h)||f>h)&&(u.default.v(this.TAG,"Update MediaSource duration from "+h+" to "+f),this._mediaSource.duration=f),this._requireSetMediaDuration=!1,this._pendingMediaDuration=0}},d.prototype._doRemoveRanges=function(){for(var o in this._pendingRemoveRanges)if(!(!this._sourceBuffers[o]||this._sourceBuffers[o].updating))for(var h=this._sourceBuffers[o],f=this._pendingRemoveRanges[o];f.length&&!h.updating;){var s=f.shift();h.remove(s.start,s.end)}},d.prototype._doAppendSegments=function(){var o=this._pendingSegments;for(var h in o)if(!(!this._sourceBuffers[h]||this._sourceBuffers[h].updating)&&o[h].length>0){var f=o[h].shift();if(f.timestampOffset){var s=this._sourceBuffers[h].timestampOffset,g=f.timestampOffset/1e3,E=Math.abs(s-g);E>.1&&(u.default.v(this.TAG,"Update MPEG audio timestampOffset from "+s+" to "+g),this._sourceBuffers[h].timestampOffset=g),delete f.timestampOffset}if(!f.data||f.data.byteLength===0)continue;try{this._sourceBuffers[h].appendBuffer(f.data),this._isBufferFull=!1,h==="video"&&f.hasOwnProperty("info")&&this._idrList.appendArray(f.info.syncPoints)}catch(C){this._pendingSegments[h].unshift(f),C.code===22?(this._isBufferFull||this._emitter.emit(A.default.BUFFER_FULL),this._isBufferFull=!0):(u.default.e(this.TAG,C.message),this._emitter.emit(A.default.ERROR,{code:C.code,msg:C.message}))}}},d.prototype._onSourceOpen=function(){if(u.default.v(this.TAG,"MediaSource onSourceOpen"),this._mediaSource.removeEventListener("sourceopen",this.e.onSourceOpen),this._pendingSourceBufferInit.length>0)for(var o=this._pendingSourceBufferInit;o.length;){var h=o.shift();this.appendInitSegment(h,!0)}this._hasPendingSegments()&&this._doAppendSegments(),this._emitter.emit(A.default.SOURCE_OPEN)},d.prototype._onSourceEnded=function(){u.default.v(this.TAG,"MediaSource onSourceEnded")},d.prototype._onSourceClose=function(){u.default.v(this.TAG,"MediaSource onSourceClose"),this._mediaSource&&this.e!=null&&(this._mediaSource.removeEventListener("sourceopen",this.e.onSourceOpen),this._mediaSource.removeEventListener("sourceended",this.e.onSourceEnded),this._mediaSource.removeEventListener("sourceclose",this.e.onSourceClose))},d.prototype._hasPendingSegments=function(){var o=this._pendingSegments;return o.video.length>0||o.audio.length>0},d.prototype._hasPendingRemoveRanges=function(){var o=this._pendingRemoveRanges;return o.video.length>0||o.audio.length>0},d.prototype._onSourceBufferUpdateEnd=function(){this._requireSetMediaDuration?this._updateMediaSourceDuration():this._hasPendingRemoveRanges()?this._doRemoveRanges():this._hasPendingSegments()?this._doAppendSegments():this._hasPendingEos&&this.endOfStream(),this._emitter.emit(A.default.UPDATE_END)},d.prototype._onSourceBufferError=function(o){u.default.e(this.TAG,"SourceBuffer Error: "+o)},d}();w.default=y},"./src/core/mse-events.js":function(T,w,_){_.r(w);var S={ERROR:"error",SOURCE_OPEN:"source_open",UPDATE_END:"update_end",BUFFER_FULL:"buffer_full"};w.default=S},"./src/core/transmuxer.js":function(T,w,_){_.r(w);var S=_("./node_modules/events/events.js"),b=_.n(S),u=_("./node_modules/webworkify-webpack/index.js"),r=_.n(u),A=_("./src/utils/logger.js"),l=_("./src/utils/logging-control.js"),p=_("./src/core/transmuxing-controller.js"),y=_("./src/core/transmuxing-events.js"),d=_("./src/core/media-info.js"),o=function(){function h(f,s){if(this.TAG="Transmuxer",this._emitter=new(b()),s.enableWorker&&typeof Worker<"u")try{this._worker=r()("./src/core/transmuxing-worker.js"),this._workerDestroying=!1,this._worker.addEventListener("message",this._onWorkerMessage.bind(this)),this._worker.postMessage({cmd:"init",param:[f,s]}),this.e={onLoggingConfigChanged:this._onLoggingConfigChanged.bind(this)},l.default.registerListener(this.e.onLoggingConfigChanged),this._worker.postMessage({cmd:"logging_config",param:l.default.getConfig()})}catch{A.default.e(this.TAG,"Error while initialize transmuxing worker, fallback to inline transmuxing"),this._worker=null,this._controller=new p.default(f,s)}else this._controller=new p.default(f,s);if(this._controller){var g=this._controller;g.on(y.default.IO_ERROR,this._onIOError.bind(this)),g.on(y.default.DEMUX_ERROR,this._onDemuxError.bind(this)),g.on(y.default.INIT_SEGMENT,this._onInitSegment.bind(this)),g.on(y.default.MEDIA_SEGMENT,this._onMediaSegment.bind(this)),g.on(y.default.LOADING_COMPLETE,this._onLoadingComplete.bind(this)),g.on(y.default.RECOVERED_EARLY_EOF,this._onRecoveredEarlyEof.bind(this)),g.on(y.default.MEDIA_INFO,this._onMediaInfo.bind(this)),g.on(y.default.METADATA_ARRIVED,this._onMetaDataArrived.bind(this)),g.on(y.default.SCRIPTDATA_ARRIVED,this._onScriptDataArrived.bind(this)),g.on(y.default.STATISTICS_INFO,this._onStatisticsInfo.bind(this)),g.on(y.default.RECOMMEND_SEEKPOINT,this._onRecommendSeekpoint.bind(this))}}return h.prototype.destroy=function(){this._worker?this._workerDestroying||(this._workerDestroying=!0,this._worker.postMessage({cmd:"destroy"}),l.default.removeListener(this.e.onLoggingConfigChanged),this.e=null):(this._controller.destroy(),this._controller=null),this._emitter.removeAllListeners(),this._emitter=null},h.prototype.on=function(f,s){this._emitter.addListener(f,s)},h.prototype.off=function(f,s){this._emitter.removeListener(f,s)},h.prototype.hasWorker=function(){return this._worker!=null},h.prototype.open=function(){this._worker?this._worker.postMessage({cmd:"start"}):this._controller.start()},h.prototype.close=function(){this._worker?this._worker.postMessage({cmd:"stop"}):this._controller.stop()},h.prototype.seek=function(f){this._worker?this._worker.postMessage({cmd:"seek",param:f}):this._controller.seek(f)},h.prototype.pause=function(){this._worker?this._worker.postMessage({cmd:"pause"}):this._controller.pause()},h.prototype.resume=function(){this._worker?this._worker.postMessage({cmd:"resume"}):this._controller.resume()},h.prototype._onInitSegment=function(f,s){var g=this;Promise.resolve().then(function(){g._emitter.emit(y.default.INIT_SEGMENT,f,s)})},h.prototype._onMediaSegment=function(f,s){var g=this;Promise.resolve().then(function(){g._emitter.emit(y.default.MEDIA_SEGMENT,f,s)})},h.prototype._onLoadingComplete=function(){var f=this;Promise.resolve().then(function(){f._emitter.emit(y.default.LOADING_COMPLETE)})},h.prototype._onRecoveredEarlyEof=function(){var f=this;Promise.resolve().then(function(){f._emitter.emit(y.default.RECOVERED_EARLY_EOF)})},h.prototype._onMediaInfo=function(f){var s=this;Promise.resolve().then(function(){s._emitter.emit(y.default.MEDIA_INFO,f)})},h.prototype._onMetaDataArrived=function(f){var s=this;Promise.resolve().then(function(){s._emitter.emit(y.default.METADATA_ARRIVED,f)})},h.prototype._onScriptDataArrived=function(f){var s=this;Promise.resolve().then(function(){s._emitter.emit(y.default.SCRIPTDATA_ARRIVED,f)})},h.prototype._onStatisticsInfo=function(f){var s=this;Promise.resolve().then(function(){s._emitter.emit(y.default.STATISTICS_INFO,f)})},h.prototype._onIOError=function(f,s){var g=this;Promise.resolve().then(function(){g._emitter.emit(y.default.IO_ERROR,f,s)})},h.prototype._onDemuxError=function(f,s){var g=this;Promise.resolve().then(function(){g._emitter.emit(y.default.DEMUX_ERROR,f,s)})},h.prototype._onRecommendSeekpoint=function(f){var s=this;Promise.resolve().then(function(){s._emitter.emit(y.default.RECOMMEND_SEEKPOINT,f)})},h.prototype._onLoggingConfigChanged=function(f){this._worker&&this._worker.postMessage({cmd:"logging_config",param:f})},h.prototype._onWorkerMessage=function(f){var s=f.data,g=s.data;if(s.msg==="destroyed"||this._workerDestroying){this._workerDestroying=!1,this._worker.terminate(),this._worker=null;return}switch(s.msg){case y.default.INIT_SEGMENT:case y.default.MEDIA_SEGMENT:this._emitter.emit(s.msg,g.type,g.data);break;case y.default.LOADING_COMPLETE:case y.default.RECOVERED_EARLY_EOF:this._emitter.emit(s.msg);break;case y.default.MEDIA_INFO:Object.setPrototypeOf(g,d.default.prototype),this._emitter.emit(s.msg,g);break;case y.default.METADATA_ARRIVED:case y.default.SCRIPTDATA_ARRIVED:case y.default.STATISTICS_INFO:this._emitter.emit(s.msg,g);break;case y.default.IO_ERROR:case y.default.DEMUX_ERROR:this._emitter.emit(s.msg,g.type,g.info);break;case y.default.RECOMMEND_SEEKPOINT:this._emitter.emit(s.msg,g);break;case"logcat_callback":A.default.emitter.emit("log",g.type,g.logcat);break}},h}();w.default=o},"./src/core/transmuxing-controller.js":function(T,w,_){_.r(w);var S=_("./node_modules/events/events.js"),b=_.n(S),u=_("./src/utils/logger.js"),r=_("./src/utils/browser.js"),A=_("./src/core/media-info.js"),l=_("./src/demux/flv-demuxer.js"),p=_("./src/remux/mp4-remuxer.js"),y=_("./src/demux/demux-errors.js"),d=_("./src/io/io-controller.js"),o=_("./src/core/transmuxing-events.js"),h=function(){function f(s,g){this.TAG="TransmuxingController",this._emitter=new(b()),this._config=g,s.segments||(s.segments=[{duration:s.duration,filesize:s.filesize,url:s.url}]),typeof s.cors!="boolean"&&(s.cors=!0),typeof s.withCredentials!="boolean"&&(s.withCredentials=!1),this._mediaDataSource=s,this._currentSegmentIndex=0;var E=0;this._mediaDataSource.segments.forEach(function(C){C.timestampBase=E,E+=C.duration,C.cors=s.cors,C.withCredentials=s.withCredentials,g.referrerPolicy&&(C.referrerPolicy=g.referrerPolicy)}),!isNaN(E)&&this._mediaDataSource.duration!==E&&(this._mediaDataSource.duration=E),this._mediaInfo=null,this._demuxer=null,this._remuxer=null,this._ioctl=null,this._pendingSeekTime=null,this._pendingResolveSeekPoint=null,this._statisticsReporter=null}return f.prototype.destroy=function(){this._mediaInfo=null,this._mediaDataSource=null,this._statisticsReporter&&this._disableStatisticsReporter(),this._ioctl&&(this._ioctl.destroy(),this._ioctl=null),this._demuxer&&(this._demuxer.destroy(),this._demuxer=null),this._remuxer&&(this._remuxer.destroy(),this._remuxer=null),this._emitter.removeAllListeners(),this._emitter=null},f.prototype.on=function(s,g){this._emitter.addListener(s,g)},f.prototype.off=function(s,g){this._emitter.removeListener(s,g)},f.prototype.start=function(){this._loadSegment(0),this._enableStatisticsReporter()},f.prototype._loadSegment=function(s,g){this._currentSegmentIndex=s;var E=this._mediaDataSource.segments[s],C=this._ioctl=new d.default(E,this._config,s);C.onError=this._onIOException.bind(this),C.onSeeked=this._onIOSeeked.bind(this),C.onComplete=this._onIOComplete.bind(this),C.onRedirect=this._onIORedirect.bind(this),C.onRecoveredEarlyEof=this._onIORecoveredEarlyEof.bind(this),g?this._demuxer.bindDataSource(this._ioctl):C.onDataArrival=this._onInitChunkArrival.bind(this),C.open(g)},f.prototype.stop=function(){this._internalAbort(),this._disableStatisticsReporter()},f.prototype._internalAbort=function(){this._ioctl&&(this._ioctl.destroy(),this._ioctl=null)},f.prototype.pause=function(){this._ioctl&&this._ioctl.isWorking()&&(this._ioctl.pause(),this._disableStatisticsReporter())},f.prototype.resume=function(){this._ioctl&&this._ioctl.isPaused()&&(this._ioctl.resume(),this._enableStatisticsReporter())},f.prototype.seek=function(s){if(!(this._mediaInfo==null||!this._mediaInfo.isSeekable())){var g=this._searchSegmentIndexContains(s);if(g===this._currentSegmentIndex){var E=this._mediaInfo.segments[g];if(E==null)this._pendingSeekTime=s;else{var C=E.getNearestKeyframe(s);this._remuxer.seek(C.milliseconds),this._ioctl.seek(C.fileposition),this._pendingResolveSeekPoint=C.milliseconds}}else{var R=this._mediaInfo.segments[g];if(R==null)this._pendingSeekTime=s,this._internalAbort(),this._remuxer.seek(),this._remuxer.insertDiscontinuity(),this._loadSegment(g);else{var C=R.getNearestKeyframe(s);this._internalAbort(),this._remuxer.seek(s),this._remuxer.insertDiscontinuity(),this._demuxer.resetMediaInfo(),this._demuxer.timestampBase=this._mediaDataSource.segments[g].timestampBase,this._loadSegment(g,C.fileposition),this._pendingResolveSeekPoint=C.milliseconds,this._reportSegmentMediaInfo(g)}}this._enableStatisticsReporter()}},f.prototype._searchSegmentIndexContains=function(s){for(var g=this._mediaDataSource.segments,E=g.length-1,C=0;C<g.length;C++)if(s<g[C].timestampBase){E=C-1;break}return E},f.prototype._onInitChunkArrival=function(s,g){var E=this,C=null,R=0;if(g>0)this._demuxer.bindDataSource(this._ioctl),this._demuxer.timestampBase=this._mediaDataSource.segments[this._currentSegmentIndex].timestampBase,R=this._demuxer.parseChunks(s,g);else if((C=l.default.probe(s)).match){this._demuxer=new l.default(C,this._config),this._remuxer||(this._remuxer=new p.default(this._config));var L=this._mediaDataSource;L.duration!=null&&!isNaN(L.duration)&&(this._demuxer.overridedDuration=L.duration),typeof L.hasAudio=="boolean"&&(this._demuxer.overridedHasAudio=L.hasAudio),typeof L.hasVideo=="boolean"&&(this._demuxer.overridedHasVideo=L.hasVideo),this._demuxer.timestampBase=L.segments[this._currentSegmentIndex].timestampBase,this._demuxer.onError=this._onDemuxException.bind(this),this._demuxer.onMediaInfo=this._onMediaInfo.bind(this),this._demuxer.onMetaDataArrived=this._onMetaDataArrived.bind(this),this._demuxer.onScriptDataArrived=this._onScriptDataArrived.bind(this),this._remuxer.bindDataSource(this._demuxer.bindDataSource(this._ioctl)),this._remuxer.onInitSegment=this._onRemuxerInitSegmentArrival.bind(this),this._remuxer.onMediaSegment=this._onRemuxerMediaSegmentArrival.bind(this),R=this._demuxer.parseChunks(s,g)}else C=null,u.default.e(this.TAG,"Non-FLV, Unsupported media type!"),Promise.resolve().then(function(){E._internalAbort()}),this._emitter.emit(o.default.DEMUX_ERROR,y.default.FORMAT_UNSUPPORTED,"Non-FLV, Unsupported media type"),R=0;return R},f.prototype._onMediaInfo=function(s){var g=this;this._mediaInfo==null&&(this._mediaInfo=Object.assign({},s),this._mediaInfo.keyframesIndex=null,this._mediaInfo.segments=[],this._mediaInfo.segmentCount=this._mediaDataSource.segments.length,Object.setPrototypeOf(this._mediaInfo,A.default.prototype));var E=Object.assign({},s);Object.setPrototypeOf(E,A.default.prototype),this._mediaInfo.segments[this._currentSegmentIndex]=E,this._reportSegmentMediaInfo(this._currentSegmentIndex),this._pendingSeekTime!=null&&Promise.resolve().then(function(){var C=g._pendingSeekTime;g._pendingSeekTime=null,g.seek(C)})},f.prototype._onMetaDataArrived=function(s){this._emitter.emit(o.default.METADATA_ARRIVED,s)},f.prototype._onScriptDataArrived=function(s){this._emitter.emit(o.default.SCRIPTDATA_ARRIVED,s)},f.prototype._onIOSeeked=function(){this._remuxer.insertDiscontinuity()},f.prototype._onIOComplete=function(s){var g=s,E=g+1;E<this._mediaDataSource.segments.length?(this._internalAbort(),this._remuxer.flushStashedSamples(),this._loadSegment(E)):(this._remuxer.flushStashedSamples(),this._emitter.emit(o.default.LOADING_COMPLETE),this._disableStatisticsReporter())},f.prototype._onIORedirect=function(s){var g=this._ioctl.extraData;this._mediaDataSource.segments[g].redirectedURL=s},f.prototype._onIORecoveredEarlyEof=function(){this._emitter.emit(o.default.RECOVERED_EARLY_EOF)},f.prototype._onIOException=function(s,g){u.default.e(this.TAG,"IOException: type = "+s+", code = "+g.code+", msg = "+g.msg),this._emitter.emit(o.default.IO_ERROR,s,g),this._disableStatisticsReporter()},f.prototype._onDemuxException=function(s,g){u.default.e(this.TAG,"DemuxException: type = "+s+", info = "+g),this._emitter.emit(o.default.DEMUX_ERROR,s,g)},f.prototype._onRemuxerInitSegmentArrival=function(s,g){this._emitter.emit(o.default.INIT_SEGMENT,s,g)},f.prototype._onRemuxerMediaSegmentArrival=function(s,g){if(this._pendingSeekTime==null&&(this._emitter.emit(o.default.MEDIA_SEGMENT,s,g),this._pendingResolveSeekPoint!=null&&s==="video")){var E=g.info.syncPoints,C=this._pendingResolveSeekPoint;this._pendingResolveSeekPoint=null,r.default.safari&&E.length>0&&E[0].originalDts===C&&(C=E[0].pts),this._emitter.emit(o.default.RECOMMEND_SEEKPOINT,C)}},f.prototype._enableStatisticsReporter=function(){this._statisticsReporter==null&&(this._statisticsReporter=self.setInterval(this._reportStatisticsInfo.bind(this),this._config.statisticsInfoReportInterval))},f.prototype._disableStatisticsReporter=function(){this._statisticsReporter&&(self.clearInterval(this._statisticsReporter),this._statisticsReporter=null)},f.prototype._reportSegmentMediaInfo=function(s){var g=this._mediaInfo.segments[s],E=Object.assign({},g);E.duration=this._mediaInfo.duration,E.segmentCount=this._mediaInfo.segmentCount,delete E.segments,delete E.keyframesIndex,this._emitter.emit(o.default.MEDIA_INFO,E)},f.prototype._reportStatisticsInfo=function(){var s={};s.url=this._ioctl.currentURL,s.hasRedirect=this._ioctl.hasRedirect,s.hasRedirect&&(s.redirectedURL=this._ioctl.currentRedirectedURL),s.speed=this._ioctl.currentSpeed,s.loaderType=this._ioctl.loaderType,s.currentSegmentIndex=this._currentSegmentIndex,s.totalSegmentCount=this._mediaDataSource.segments.length,this._emitter.emit(o.default.STATISTICS_INFO,s)},f}();w.default=h},"./src/core/transmuxing-events.js":function(T,w,_){_.r(w);var S={IO_ERROR:"io_error",DEMUX_ERROR:"demux_error",INIT_SEGMENT:"init_segment",MEDIA_SEGMENT:"media_segment",LOADING_COMPLETE:"loading_complete",RECOVERED_EARLY_EOF:"recovered_early_eof",MEDIA_INFO:"media_info",METADATA_ARRIVED:"metadata_arrived",SCRIPTDATA_ARRIVED:"scriptdata_arrived",STATISTICS_INFO:"statistics_info",RECOMMEND_SEEKPOINT:"recommend_seekpoint"};w.default=S},"./src/core/transmuxing-worker.js":function(T,w,_){_.r(w);var S=_("./src/utils/logging-control.js"),b=_("./src/utils/polyfill.js"),u=_("./src/core/transmuxing-controller.js"),r=_("./src/core/transmuxing-events.js"),A=function(l){var p=null,y=k.bind(this);b.default.install(),l.addEventListener("message",function(I){switch(I.data.cmd){case"init":p=new u.default(I.data.param[0],I.data.param[1]),p.on(r.default.IO_ERROR,R.bind(this)),p.on(r.default.DEMUX_ERROR,L.bind(this)),p.on(r.default.INIT_SEGMENT,d.bind(this)),p.on(r.default.MEDIA_SEGMENT,o.bind(this)),p.on(r.default.LOADING_COMPLETE,h.bind(this)),p.on(r.default.RECOVERED_EARLY_EOF,f.bind(this)),p.on(r.default.MEDIA_INFO,s.bind(this)),p.on(r.default.METADATA_ARRIVED,g.bind(this)),p.on(r.default.SCRIPTDATA_ARRIVED,E.bind(this)),p.on(r.default.STATISTICS_INFO,C.bind(this)),p.on(r.default.RECOMMEND_SEEKPOINT,O.bind(this));break;case"destroy":p&&(p.destroy(),p=null),l.postMessage({msg:"destroyed"});break;case"start":p.start();break;case"stop":p.stop();break;case"seek":p.seek(I.data.param);break;case"pause":p.pause();break;case"resume":p.resume();break;case"logging_config":{var M=I.data.param;S.default.applyConfig(M),M.enableCallback===!0?S.default.addLogListener(y):S.default.removeLogListener(y);break}}});function d(I,M){var U={msg:r.default.INIT_SEGMENT,data:{type:I,data:M}};l.postMessage(U,[M.data])}function o(I,M){var U={msg:r.default.MEDIA_SEGMENT,data:{type:I,data:M}};l.postMessage(U,[M.data])}function h(){var I={msg:r.default.LOADING_COMPLETE};l.postMessage(I)}function f(){var I={msg:r.default.RECOVERED_EARLY_EOF};l.postMessage(I)}function s(I){var M={msg:r.default.MEDIA_INFO,data:I};l.postMessage(M)}function g(I){var M={msg:r.default.METADATA_ARRIVED,data:I};l.postMessage(M)}function E(I){var M={msg:r.default.SCRIPTDATA_ARRIVED,data:I};l.postMessage(M)}function C(I){var M={msg:r.default.STATISTICS_INFO,data:I};l.postMessage(M)}function R(I,M){l.postMessage({msg:r.default.IO_ERROR,data:{type:I,info:M}})}function L(I,M){l.postMessage({msg:r.default.DEMUX_ERROR,data:{type:I,info:M}})}function O(I){l.postMessage({msg:r.default.RECOMMEND_SEEKPOINT,data:I})}function k(I,M){l.postMessage({msg:"logcat_callback",data:{type:I,logcat:M}})}};w.default=A},"./src/demux/amf-parser.js":function(T,w,_){_.r(w);var S=_("./src/utils/logger.js"),b=_("./src/utils/utf8-conv.js"),u=_("./src/utils/exception.js"),r=function(){var l=new ArrayBuffer(2);return new DataView(l).setInt16(0,256,!0),new Int16Array(l)[0]===256}(),A=function(){function l(){}return l.parseScriptData=function(p,y,d){var o={};try{var h=l.parseValue(p,y,d),f=l.parseValue(p,y+h.size,d-h.size);o[h.data]=f.data}catch(s){S.default.e("AMF",s.toString())}return o},l.parseObject=function(p,y,d){if(d<3)throw new u.IllegalStateException("Data not enough when parse ScriptDataObject");var o=l.parseString(p,y,d),h=l.parseValue(p,y+o.size,d-o.size),f=h.objectEnd;return{data:{name:o.data,value:h.data},size:o.size+h.size,objectEnd:f}},l.parseVariable=function(p,y,d){return l.parseObject(p,y,d)},l.parseString=function(p,y,d){if(d<2)throw new u.IllegalStateException("Data not enough when parse String");var o=new DataView(p,y,d),h=o.getUint16(0,!r),f;return h>0?f=(0,b.default)(new Uint8Array(p,y+2,h)):f="",{data:f,size:2+h}},l.parseLongString=function(p,y,d){if(d<4)throw new u.IllegalStateException("Data not enough when parse LongString");var o=new DataView(p,y,d),h=o.getUint32(0,!r),f;return h>0?f=(0,b.default)(new Uint8Array(p,y+4,h)):f="",{data:f,size:4+h}},l.parseDate=function(p,y,d){if(d<10)throw new u.IllegalStateException("Data size invalid when parse Date");var o=new DataView(p,y,d),h=o.getFloat64(0,!r),f=o.getInt16(8,!r);return h+=f*60*1e3,{data:new Date(h),size:10}},l.parseValue=function(p,y,d){if(d<1)throw new u.IllegalStateException("Data not enough when parse Value");var o=new DataView(p,y,d),h=1,f=o.getUint8(0),s,g=!1;try{switch(f){case 0:s=o.getFloat64(1,!r),h+=8;break;case 1:{var E=o.getUint8(1);s=!!E,h+=1;break}case 2:{var C=l.parseString(p,y+1,d-1);s=C.data,h+=C.size;break}case 3:{s={};var R=0;for((o.getUint32(d-4,!r)&16777215)===9&&(R=3);h<d-4;){var L=l.parseObject(p,y+h,d-h-R);if(L.objectEnd)break;s[L.data.name]=L.data.value,h+=L.size}if(h<=d-3){var O=o.getUint32(h-1,!r)&16777215;O===9&&(h+=3)}break}case 8:{s={},h+=4;var R=0;for((o.getUint32(d-4,!r)&16777215)===9&&(R=3);h<d-8;){var k=l.parseVariable(p,y+h,d-h-R);if(k.objectEnd)break;s[k.data.name]=k.data.value,h+=k.size}if(h<=d-3){var O=o.getUint32(h-1,!r)&16777215;O===9&&(h+=3)}break}case 9:s=void 0,h=1,g=!0;break;case 10:{s=[];var I=o.getUint32(1,!r);h+=4;for(var M=0;M<I;M++){var U=l.parseValue(p,y+h,d-h);s.push(U.data),h+=U.size}break}case 11:{var j=l.parseDate(p,y+1,d-1);s=j.data,h+=j.size;break}case 12:{var Y=l.parseString(p,y+1,d-1);s=Y.data,h+=Y.size;break}default:h=d,S.default.w("AMF","Unsupported AMF value type "+f)}}catch(ne){S.default.e("AMF",ne.toString())}return{data:s,size:h,objectEnd:g}},l}();w.default=A},"./src/demux/demux-errors.js":function(T,w,_){_.r(w);var S={OK:"OK",FORMAT_ERROR:"FormatError",FORMAT_UNSUPPORTED:"FormatUnsupported",CODEC_UNSUPPORTED:"CodecUnsupported"};w.default=S},"./src/demux/exp-golomb.js":function(T,w,_){_.r(w);var S=_("./src/utils/exception.js"),b=function(){function u(r){this.TAG="ExpGolomb",this._buffer=r,this._buffer_index=0,this._total_bytes=r.byteLength,this._total_bits=r.byteLength*8,this._current_word=0,this._current_word_bits_left=0}return u.prototype.destroy=function(){this._buffer=null},u.prototype._fillCurrentWord=function(){var r=this._total_bytes-this._buffer_index;if(r<=0)throw new S.IllegalStateException("ExpGolomb: _fillCurrentWord() but no bytes available");var A=Math.min(4,r),l=new Uint8Array(4);l.set(this._buffer.subarray(this._buffer_index,this._buffer_index+A)),this._current_word=new DataView(l.buffer).getUint32(0,!1),this._buffer_index+=A,this._current_word_bits_left=A*8},u.prototype.readBits=function(r){if(r>32)throw new S.InvalidArgumentException("ExpGolomb: readBits() bits exceeded max 32bits!");if(r<=this._current_word_bits_left){var A=this._current_word>>>32-r;return this._current_word<<=r,this._current_word_bits_left-=r,A}var l=this._current_word_bits_left?this._current_word:0;l=l>>>32-this._current_word_bits_left;var p=r-this._current_word_bits_left;this._fillCurrentWord();var y=Math.min(p,this._current_word_bits_left),d=this._current_word>>>32-y;return this._current_word<<=y,this._current_word_bits_left-=y,l=l<<y|d,l},u.prototype.readBool=function(){return this.readBits(1)===1},u.prototype.readByte=function(){return this.readBits(8)},u.prototype._skipLeadingZero=function(){var r;for(r=0;r<this._current_word_bits_left;r++)if(this._current_word&2147483648>>>r)return this._current_word<<=r,this._current_word_bits_left-=r,r;return this._fillCurrentWord(),r+this._skipLeadingZero()},u.prototype.readUEG=function(){var r=this._skipLeadingZero();return this.readBits(r+1)-1},u.prototype.readSEG=function(){var r=this.readUEG();return r&1?r+1>>>1:-1*(r>>>1)},u}();w.default=b},"./src/demux/flv-demuxer.js":function(T,w,_){_.r(w);var S=_("./src/utils/logger.js"),b=_("./src/demux/amf-parser.js"),u=_("./src/demux/sps-parser.js"),r=_("./src/demux/demux-errors.js"),A=_("./src/core/media-info.js"),l=_("./src/utils/exception.js");function p(d,o){return d[o]<<24|d[o+1]<<16|d[o+2]<<8|d[o+3]}var y=function(){function d(o,h){this.TAG="FLVDemuxer",this._config=h,this._onError=null,this._onMediaInfo=null,this._onMetaDataArrived=null,this._onScriptDataArrived=null,this._onTrackMetadata=null,this._onDataAvailable=null,this._dataOffset=o.dataOffset,this._firstParse=!0,this._dispatch=!1,this._hasAudio=o.hasAudioTrack,this._hasVideo=o.hasVideoTrack,this._hasAudioFlagOverrided=!1,this._hasVideoFlagOverrided=!1,this._audioInitialMetadataDispatched=!1,this._videoInitialMetadataDispatched=!1,this._mediaInfo=new A.default,this._mediaInfo.hasAudio=this._hasAudio,this._mediaInfo.hasVideo=this._hasVideo,this._metadata=null,this._audioMetadata=null,this._videoMetadata=null,this._naluLengthSize=4,this._timestampBase=0,this._timescale=1e3,this._duration=0,this._durationOverrided=!1,this._referenceFrameRate={fixed:!0,fps:23.976,fps_num:23976,fps_den:1e3},this._flvSoundRateTable=[5500,11025,22050,44100,48e3],this._mpegSamplingRates=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],this._mpegAudioV10SampleRateTable=[44100,48e3,32e3,0],this._mpegAudioV20SampleRateTable=[22050,24e3,16e3,0],this._mpegAudioV25SampleRateTable=[11025,12e3,8e3,0],this._mpegAudioL1BitRateTable=[0,32,64,96,128,160,192,224,256,288,320,352,384,416,448,-1],this._mpegAudioL2BitRateTable=[0,32,48,56,64,80,96,112,128,160,192,224,256,320,384,-1],this._mpegAudioL3BitRateTable=[0,32,40,48,56,64,80,96,112,128,160,192,224,256,320,-1],this._videoTrack={type:"video",id:1,sequenceNumber:0,samples:[],length:0},this._audioTrack={type:"audio",id:2,sequenceNumber:0,samples:[],length:0},this._littleEndian=function(){var f=new ArrayBuffer(2);return new DataView(f).setInt16(0,256,!0),new Int16Array(f)[0]===256}()}return d.prototype.destroy=function(){this._mediaInfo=null,this._metadata=null,this._audioMetadata=null,this._videoMetadata=null,this._videoTrack=null,this._audioTrack=null,this._onError=null,this._onMediaInfo=null,this._onMetaDataArrived=null,this._onScriptDataArrived=null,this._onTrackMetadata=null,this._onDataAvailable=null},d.probe=function(o){var h=new Uint8Array(o),f={match:!1};if(h[0]!==70||h[1]!==76||h[2]!==86||h[3]!==1)return f;var s=(h[4]&4)>>>2!==0,g=(h[4]&1)!==0,E=p(h,5);return E<9?f:{match:!0,consumed:E,dataOffset:E,hasAudioTrack:s,hasVideoTrack:g}},d.prototype.bindDataSource=function(o){return o.onDataArrival=this.parseChunks.bind(this),this},Object.defineProperty(d.prototype,"onTrackMetadata",{get:function(){return this._onTrackMetadata},set:function(o){this._onTrackMetadata=o},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"onMediaInfo",{get:function(){return this._onMediaInfo},set:function(o){this._onMediaInfo=o},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"onMetaDataArrived",{get:function(){return this._onMetaDataArrived},set:function(o){this._onMetaDataArrived=o},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"onScriptDataArrived",{get:function(){return this._onScriptDataArrived},set:function(o){this._onScriptDataArrived=o},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"onError",{get:function(){return this._onError},set:function(o){this._onError=o},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"onDataAvailable",{get:function(){return this._onDataAvailable},set:function(o){this._onDataAvailable=o},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"timestampBase",{get:function(){return this._timestampBase},set:function(o){this._timestampBase=o},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"overridedDuration",{get:function(){return this._duration},set:function(o){this._durationOverrided=!0,this._duration=o,this._mediaInfo.duration=o},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"overridedHasAudio",{set:function(o){this._hasAudioFlagOverrided=!0,this._hasAudio=o,this._mediaInfo.hasAudio=o},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"overridedHasVideo",{set:function(o){this._hasVideoFlagOverrided=!0,this._hasVideo=o,this._mediaInfo.hasVideo=o},enumerable:!1,configurable:!0}),d.prototype.resetMediaInfo=function(){this._mediaInfo=new A.default},d.prototype._isInitialMetadataDispatched=function(){return this._hasAudio&&this._hasVideo?this._audioInitialMetadataDispatched&&this._videoInitialMetadataDispatched:this._hasAudio&&!this._hasVideo?this._audioInitialMetadataDispatched:!this._hasAudio&&this._hasVideo?this._videoInitialMetadataDispatched:!1},d.prototype.parseChunks=function(o,h){if(!this._onError||!this._onMediaInfo||!this._onTrackMetadata||!this._onDataAvailable)throw new l.IllegalStateException("Flv: onError & onMediaInfo & onTrackMetadata & onDataAvailable callback must be specified");var f=0,s=this._littleEndian;if(h===0)if(o.byteLength>13){var g=d.probe(o);f=g.dataOffset}else return 0;if(this._firstParse){this._firstParse=!1,h+f!==this._dataOffset&&S.default.w(this.TAG,"First time parsing but chunk byteStart invalid!");var E=new DataView(o,f),C=E.getUint32(0,!s);C!==0&&S.default.w(this.TAG,"PrevTagSize0 !== 0 !!!"),f+=4}for(;f<o.byteLength;){this._dispatch=!0;var E=new DataView(o,f);if(f+11+4>o.byteLength)break;var R=E.getUint8(0),L=E.getUint32(0,!s)&16777215;if(f+11+L+4>o.byteLength)break;if(R!==8&&R!==9&&R!==18){S.default.w(this.TAG,"Unsupported tag type "+R+", skipped"),f+=11+L+4;continue}var O=E.getUint8(4),k=E.getUint8(5),I=E.getUint8(6),M=E.getUint8(7),U=I|k<<8|O<<16|M<<24,j=E.getUint32(7,!s)&16777215;j!==0&&S.default.w(this.TAG,"Meet tag which has StreamID != 0!");var Y=f+11;switch(R){case 8:this._parseAudioData(o,Y,L,U);break;case 9:this._parseVideoData(o,Y,L,U,h+f);break;case 18:this._parseScriptData(o,Y,L);break}var ne=E.getUint32(11+L,!s);ne!==11+L&&S.default.w(this.TAG,"Invalid PrevTagSize "+ne),f+=11+L+4}return this._isInitialMetadataDispatched()&&this._dispatch&&(this._audioTrack.length||this._videoTrack.length)&&this._onDataAvailable(this._audioTrack,this._videoTrack),f},d.prototype._parseScriptData=function(o,h,f){var s=b.default.parseScriptData(o,h,f);if(s.hasOwnProperty("onMetaData")){if(s.onMetaData==null||typeof s.onMetaData!="object"){S.default.w(this.TAG,"Invalid onMetaData structure!");return}this._metadata&&S.default.w(this.TAG,"Found another onMetaData tag!"),this._metadata=s;var g=this._metadata.onMetaData;if(this._onMetaDataArrived&&this._onMetaDataArrived(Object.assign({},g)),typeof g.hasAudio=="boolean"&&this._hasAudioFlagOverrided===!1&&(this._hasAudio=g.hasAudio,this._mediaInfo.hasAudio=this._hasAudio),typeof g.hasVideo=="boolean"&&this._hasVideoFlagOverrided===!1&&(this._hasVideo=g.hasVideo,this._mediaInfo.hasVideo=this._hasVideo),typeof g.audiodatarate=="number"&&(this._mediaInfo.audioDataRate=g.audiodatarate),typeof g.videodatarate=="number"&&(this._mediaInfo.videoDataRate=g.videodatarate),typeof g.width=="number"&&(this._mediaInfo.width=g.width),typeof g.height=="number"&&(this._mediaInfo.height=g.height),typeof g.duration=="number"){if(!this._durationOverrided){var E=Math.floor(g.duration*this._timescale);this._duration=E,this._mediaInfo.duration=E}}else this._mediaInfo.duration=0;if(typeof g.framerate=="number"){var C=Math.floor(g.framerate*1e3);if(C>0){var R=C/1e3;this._referenceFrameRate.fixed=!0,this._referenceFrameRate.fps=R,this._referenceFrameRate.fps_num=C,this._referenceFrameRate.fps_den=1e3,this._mediaInfo.fps=R}}if(typeof g.keyframes=="object"){this._mediaInfo.hasKeyframesIndex=!0;var L=g.keyframes;this._mediaInfo.keyframesIndex=this._parseKeyframesIndex(L),g.keyframes=null}else this._mediaInfo.hasKeyframesIndex=!1;this._dispatch=!1,this._mediaInfo.metadata=g,S.default.v(this.TAG,"Parsed onMetaData"),this._mediaInfo.isComplete()&&this._onMediaInfo(this._mediaInfo)}Object.keys(s).length>0&&this._onScriptDataArrived&&this._onScriptDataArrived(Object.assign({},s))},d.prototype._parseKeyframesIndex=function(o){for(var h=[],f=[],s=1;s<o.times.length;s++){var g=this._timestampBase+Math.floor(o.times[s]*1e3);h.push(g),f.push(o.filepositions[s])}return{times:h,filepositions:f}},d.prototype._parseAudioData=function(o,h,f,s){if(f<=1){S.default.w(this.TAG,"Flv: Invalid audio packet, missing SoundData payload!");return}if(!(this._hasAudioFlagOverrided===!0&&this._hasAudio===!1)){this._littleEndian;var g=new DataView(o,h,f),E=g.getUint8(0),C=E>>>4;if(C!==2&&C!==10){this._onError(r.default.CODEC_UNSUPPORTED,"Flv: Unsupported audio codec idx: "+C);return}var R=0,L=(E&12)>>>2;if(L>=0&&L<=4)R=this._flvSoundRateTable[L];else{this._onError(r.default.FORMAT_ERROR,"Flv: Invalid audio sample rate idx: "+L);return}var O=E&1,k=this._audioMetadata,I=this._audioTrack;if(k||(this._hasAudio===!1&&this._hasAudioFlagOverrided===!1&&(this._hasAudio=!0,this._mediaInfo.hasAudio=!0),k=this._audioMetadata={},k.type="audio",k.id=I.id,k.timescale=this._timescale,k.duration=this._duration,k.audioSampleRate=R,k.channelCount=O===0?1:2),C===10){var M=this._parseAACAudioData(o,h+1,f-1);if(M==null)return;if(M.packetType===0){k.config&&S.default.w(this.TAG,"Found another AudioSpecificConfig!");var U=M.data;k.audioSampleRate=U.samplingRate,k.channelCount=U.channelCount,k.codec=U.codec,k.originalCodec=U.originalCodec,k.config=U.config,k.refSampleDuration=1024/k.audioSampleRate*k.timescale,S.default.v(this.TAG,"Parsed AudioSpecificConfig"),this._isInitialMetadataDispatched()?this._dispatch&&(this._audioTrack.length||this._videoTrack.length)&&this._onDataAvailable(this._audioTrack,this._videoTrack):this._audioInitialMetadataDispatched=!0,this._dispatch=!1,this._onTrackMetadata("audio",k);var j=this._mediaInfo;j.audioCodec=k.originalCodec,j.audioSampleRate=k.audioSampleRate,j.audioChannelCount=k.channelCount,j.hasVideo?j.videoCodec!=null&&(j.mimeType='video/x-flv; codecs="'+j.videoCodec+","+j.audioCodec+'"'):j.mimeType='video/x-flv; codecs="'+j.audioCodec+'"',j.isComplete()&&this._onMediaInfo(j)}else if(M.packetType===1){var Y=this._timestampBase+s,ne={unit:M.data,length:M.data.byteLength,dts:Y,pts:Y};I.samples.push(ne),I.length+=M.data.length}else S.default.e(this.TAG,"Flv: Unsupported AAC data type "+M.packetType)}else if(C===2){if(!k.codec){var U=this._parseMP3AudioData(o,h+1,f-1,!0);if(U==null)return;k.audioSampleRate=U.samplingRate,k.channelCount=U.channelCount,k.codec=U.codec,k.originalCodec=U.originalCodec,k.refSampleDuration=1152/k.audioSampleRate*k.timescale,S.default.v(this.TAG,"Parsed MPEG Audio Frame Header"),this._audioInitialMetadataDispatched=!0,this._onTrackMetadata("audio",k);var j=this._mediaInfo;j.audioCodec=k.codec,j.audioSampleRate=k.audioSampleRate,j.audioChannelCount=k.channelCount,j.audioDataRate=U.bitRate,j.hasVideo?j.videoCodec!=null&&(j.mimeType='video/x-flv; codecs="'+j.videoCodec+","+j.audioCodec+'"'):j.mimeType='video/x-flv; codecs="'+j.audioCodec+'"',j.isComplete()&&this._onMediaInfo(j)}var N=this._parseMP3AudioData(o,h+1,f-1,!1);if(N==null)return;var Y=this._timestampBase+s,te={unit:N,length:N.byteLength,dts:Y,pts:Y};I.samples.push(te),I.length+=N.length}}},d.prototype._parseAACAudioData=function(o,h,f){if(f<=1){S.default.w(this.TAG,"Flv: Invalid AAC packet, missing AACPacketType or/and Data!");return}var s={},g=new Uint8Array(o,h,f);return s.packetType=g[0],g[0]===0?s.data=this._parseAACAudioSpecificConfig(o,h+1,f-1):s.data=g.subarray(1),s},d.prototype._parseAACAudioSpecificConfig=function(o,h,f){var s=new Uint8Array(o,h,f),g=null,E=0,C=0,R=0,L=null;if(E=C=s[0]>>>3,R=(s[0]&7)<<1|s[1]>>>7,R<0||R>=this._mpegSamplingRates.length){this._onError(r.default.FORMAT_ERROR,"Flv: AAC invalid sampling frequency index!");return}var O=this._mpegSamplingRates[R],k=(s[1]&120)>>>3;if(k<0||k>=8){this._onError(r.default.FORMAT_ERROR,"Flv: AAC invalid channel configuration");return}E===5&&(L=(s[1]&7)<<1|s[2]>>>7,(s[2]&124)>>>2);var I=self.navigator.userAgent.toLowerCase();return I.indexOf("firefox")!==-1?R>=6?(E=5,g=new Array(4),L=R-3):(E=2,g=new Array(2),L=R):I.indexOf("android")!==-1?(E=2,g=new Array(2),L=R):(E=5,L=R,g=new Array(4),R>=6?L=R-3:k===1&&(E=2,g=new Array(2),L=R)),g[0]=E<<3,g[0]|=(R&15)>>>1,g[1]=(R&15)<<7,g[1]|=(k&15)<<3,E===5&&(g[1]|=(L&15)>>>1,g[2]=(L&1)<<7,g[2]|=8,g[3]=0),{config:g,samplingRate:O,channelCount:k,codec:"mp4a.40."+E,originalCodec:"mp4a.40."+C}},d.prototype._parseMP3AudioData=function(o,h,f,s){if(f<4){S.default.w(this.TAG,"Flv: Invalid MP3 packet, header missing!");return}this._littleEndian;var g=new Uint8Array(o,h,f),E=null;if(s){if(g[0]!==255)return;var C=g[1]>>>3&3,R=(g[1]&6)>>1,L=(g[2]&240)>>>4,O=(g[2]&12)>>>2,k=g[3]>>>6&3,I=k!==3?2:1,M=0,U=0,j="mp3";switch(C){case 0:M=this._mpegAudioV25SampleRateTable[O];break;case 2:M=this._mpegAudioV20SampleRateTable[O];break;case 3:M=this._mpegAudioV10SampleRateTable[O];break}switch(R){case 1:L<this._mpegAudioL3BitRateTable.length&&(U=this._mpegAudioL3BitRateTable[L]);break;case 2:L<this._mpegAudioL2BitRateTable.length&&(U=this._mpegAudioL2BitRateTable[L]);break;case 3:L<this._mpegAudioL1BitRateTable.length&&(U=this._mpegAudioL1BitRateTable[L]);break}E={bitRate:U,samplingRate:M,channelCount:I,codec:j,originalCodec:j}}else E=g;return E},d.prototype._parseVideoData=function(o,h,f,s,g){if(f<=1){S.default.w(this.TAG,"Flv: Invalid video packet, missing VideoData payload!");return}if(!(this._hasVideoFlagOverrided===!0&&this._hasVideo===!1)){var E=new Uint8Array(o,h,f)[0],C=(E&240)>>>4,R=E&15;if(R!==7){this._onError(r.default.CODEC_UNSUPPORTED,"Flv: Unsupported codec in video frame: "+R);return}this._parseAVCVideoPacket(o,h+1,f-1,s,g,C)}},d.prototype._parseAVCVideoPacket=function(o,h,f,s,g,E){if(f<4){S.default.w(this.TAG,"Flv: Invalid AVC packet, missing AVCPacketType or/and CompositionTime");return}var C=this._littleEndian,R=new DataView(o,h,f),L=R.getUint8(0),O=R.getUint32(0,!C)&16777215,k=O<<8>>8;if(L===0)this._parseAVCDecoderConfigurationRecord(o,h+4,f-4);else if(L===1)this._parseAVCVideoData(o,h+4,f-4,s,g,E,k);else if(L!==2){this._onError(r.default.FORMAT_ERROR,"Flv: Invalid video packet type "+L);return}},d.prototype._parseAVCDecoderConfigurationRecord=function(o,h,f){if(f<7){S.default.w(this.TAG,"Flv: Invalid AVCDecoderConfigurationRecord, lack of data!");return}var s=this._videoMetadata,g=this._videoTrack,E=this._littleEndian,C=new DataView(o,h,f);s?typeof s.avcc<"u"&&S.default.w(this.TAG,"Found another AVCDecoderConfigurationRecord!"):(this._hasVideo===!1&&this._hasVideoFlagOverrided===!1&&(this._hasVideo=!0,this._mediaInfo.hasVideo=!0),s=this._videoMetadata={},s.type="video",s.id=g.id,s.timescale=this._timescale,s.duration=this._duration);var R=C.getUint8(0),L=C.getUint8(1);if(C.getUint8(2),C.getUint8(3),R!==1||L===0){this._onError(r.default.FORMAT_ERROR,"Flv: Invalid AVCDecoderConfigurationRecord");return}if(this._naluLengthSize=(C.getUint8(4)&3)+1,this._naluLengthSize!==3&&this._naluLengthSize!==4){this._onError(r.default.FORMAT_ERROR,"Flv: Strange NaluLengthSizeMinusOne: "+(this._naluLengthSize-1));return}var O=C.getUint8(5)&31;if(O===0){this._onError(r.default.FORMAT_ERROR,"Flv: Invalid AVCDecoderConfigurationRecord: No SPS");return}else O>1&&S.default.w(this.TAG,"Flv: Strange AVCDecoderConfigurationRecord: SPS Count = "+O);for(var k=6,I=0;I<O;I++){var M=C.getUint16(k,!E);if(k+=2,M!==0){var U=new Uint8Array(o,h+k,M);k+=M;var j=u.default.parseSPS(U);if(I===0){s.codecWidth=j.codec_size.width,s.codecHeight=j.codec_size.height,s.presentWidth=j.present_size.width,s.presentHeight=j.present_size.height,s.profile=j.profile_string,s.level=j.level_string,s.bitDepth=j.bit_depth,s.chromaFormat=j.chroma_format,s.sarRatio=j.sar_ratio,s.frameRate=j.frame_rate,(j.frame_rate.fixed===!1||j.frame_rate.fps_num===0||j.frame_rate.fps_den===0)&&(s.frameRate=this._referenceFrameRate);var Y=s.frameRate.fps_den,ne=s.frameRate.fps_num;s.refSampleDuration=s.timescale*(Y/ne);for(var N=U.subarray(1,4),te="avc1.",ie=0;ie<3;ie++){var pe=N[ie].toString(16);pe.length<2&&(pe="0"+pe),te+=pe}s.codec=te;var J=this._mediaInfo;J.width=s.codecWidth,J.height=s.codecHeight,J.fps=s.frameRate.fps,J.profile=s.profile,J.level=s.level,J.refFrames=j.ref_frames,J.chromaFormat=j.chroma_format_string,J.sarNum=s.sarRatio.width,J.sarDen=s.sarRatio.height,J.videoCodec=te,J.hasAudio?J.audioCodec!=null&&(J.mimeType='video/x-flv; codecs="'+J.videoCodec+","+J.audioCodec+'"'):J.mimeType='video/x-flv; codecs="'+J.videoCodec+'"',J.isComplete()&&this._onMediaInfo(J)}}}var oe=C.getUint8(k);if(oe===0){this._onError(r.default.FORMAT_ERROR,"Flv: Invalid AVCDecoderConfigurationRecord: No PPS");return}else oe>1&&S.default.w(this.TAG,"Flv: Strange AVCDecoderConfigurationRecord: PPS Count = "+oe);k++;for(var I=0;I<oe;I++){var M=C.getUint16(k,!E);k+=2,M!==0&&(k+=M)}s.avcc=new Uint8Array(f),s.avcc.set(new Uint8Array(o,h,f),0),S.default.v(this.TAG,"Parsed AVCDecoderConfigurationRecord"),this._isInitialMetadataDispatched()?this._dispatch&&(this._audioTrack.length||this._videoTrack.length)&&this._onDataAvailable(this._audioTrack,this._videoTrack):this._videoInitialMetadataDispatched=!0,this._dispatch=!1,this._onTrackMetadata("video",s)},d.prototype._parseAVCVideoData=function(o,h,f,s,g,E,C){for(var R=this._littleEndian,L=new DataView(o,h,f),O=[],k=0,I=0,M=this._naluLengthSize,U=this._timestampBase+s,j=E===1;I<f;){if(I+4>=f){S.default.w(this.TAG,"Malformed Nalu near timestamp "+U+", offset = "+I+", dataSize = "+f);break}var Y=L.getUint32(I,!R);if(M===3&&(Y>>>=8),Y>f-M){S.default.w(this.TAG,"Malformed Nalus near timestamp "+U+", NaluSize > DataSize!");return}var ne=L.getUint8(I+M)&31;ne===5&&(j=!0);var N=new Uint8Array(o,h+I,M+Y),te={type:ne,data:N};O.push(te),k+=N.byteLength,I+=M+Y}if(O.length){var ie=this._videoTrack,pe={units:O,length:k,isKeyframe:j,dts:U,cts:C,pts:U+C};j&&(pe.fileposition=g),ie.samples.push(pe),ie.length+=k}},d}();w.default=y},"./src/demux/sps-parser.js":function(T,w,_){_.r(w);var S=_("./src/demux/exp-golomb.js"),b=function(){function u(){}return u._ebsp2rbsp=function(r){for(var A=r,l=A.byteLength,p=new Uint8Array(l),y=0,d=0;d<l;d++)d>=2&&A[d]===3&&A[d-1]===0&&A[d-2]===0||(p[y]=A[d],y++);return new Uint8Array(p.buffer,0,y)},u.parseSPS=function(r){var A=u._ebsp2rbsp(r),l=new S.default(A);l.readByte();var p=l.readByte();l.readByte();var y=l.readByte();l.readUEG();var d=u.getProfileString(p),o=u.getLevelString(y),h=1,f=420,s=[0,420,422,444],g=8;if((p===100||p===110||p===122||p===244||p===44||p===83||p===86||p===118||p===128||p===138||p===144)&&(h=l.readUEG(),h===3&&l.readBits(1),h<=3&&(f=s[h]),g=l.readUEG()+8,l.readUEG(),l.readBits(1),l.readBool()))for(var E=h!==3?8:12,C=0;C<E;C++)l.readBool()&&(C<6?u._skipScalingList(l,16):u._skipScalingList(l,64));l.readUEG();var R=l.readUEG();if(R===0)l.readUEG();else if(R===1){l.readBits(1),l.readSEG(),l.readSEG();for(var L=l.readUEG(),C=0;C<L;C++)l.readSEG()}var O=l.readUEG();l.readBits(1);var k=l.readUEG(),I=l.readUEG(),M=l.readBits(1);M===0&&l.readBits(1),l.readBits(1);var U=0,j=0,Y=0,ne=0,N=l.readBool();N&&(U=l.readUEG(),j=l.readUEG(),Y=l.readUEG(),ne=l.readUEG());var te=1,ie=1,pe=0,J=!0,oe=0,Se=0,se=l.readBool();if(se){if(l.readBool()){var de=l.readByte(),Ae=[1,12,10,16,40,24,20,32,80,18,15,64,160,4,3,2],me=[1,11,11,11,33,11,11,11,33,11,11,33,99,3,2,1];de>0&&de<16?(te=Ae[de-1],ie=me[de-1]):de===255&&(te=l.readByte()<<8|l.readByte(),ie=l.readByte()<<8|l.readByte())}if(l.readBool()&&l.readBool(),l.readBool()&&(l.readBits(4),l.readBool()&&l.readBits(24)),l.readBool()&&(l.readUEG(),l.readUEG()),l.readBool()){var xe=l.readBits(32),Le=l.readBits(32);J=l.readBool(),oe=Le,Se=xe*2,pe=oe/Se}}var le=1;(te!==1||ie!==1)&&(le=te/ie);var Z=0,_e=0;if(h===0)Z=1,_e=2-M;else{var we=h===3?1:2,Pe=h===1?2:1;Z=we,_e=Pe*(2-M)}var Ie=(k+1)*16,Te=(2-M)*((I+1)*16);Ie-=(U+j)*Z,Te-=(Y+ne)*_e;var Ne=Math.ceil(Ie*le);return l.destroy(),l=null,{profile_string:d,level_string:o,bit_depth:g,ref_frames:O,chroma_format:f,chroma_format_string:u.getChromaFormatString(f),frame_rate:{fixed:J,fps:pe,fps_den:Se,fps_num:oe},sar_ratio:{width:te,height:ie},codec_size:{width:Ie,height:Te},present_size:{width:Ne,height:Te}}},u._skipScalingList=function(r,A){for(var l=8,p=8,y=0,d=0;d<A;d++)p!==0&&(y=r.readSEG(),p=(l+y+256)%256),l=p===0?l:p},u.getProfileString=function(r){switch(r){case 66:return"Baseline";case 77:return"Main";case 88:return"Extended";case 100:return"High";case 110:return"High10";case 122:return"High422";case 244:return"High444";default:return"Unknown"}},u.getLevelString=function(r){return(r/10).toFixed(1)},u.getChromaFormatString=function(r){switch(r){case 420:return"4:2:0";case 422:return"4:2:2";case 444:return"4:4:4";default:return"Unknown"}},u}();w.default=b},"./src/flv.js":function(T,w,_){_.r(w);var S=_("./src/utils/polyfill.js"),b=_("./src/core/features.js"),u=_("./src/io/loader.js"),r=_("./src/player/flv-player.js"),A=_("./src/player/native-player.js"),l=_("./src/player/player-events.js"),p=_("./src/player/player-errors.js"),y=_("./src/utils/logging-control.js"),d=_("./src/utils/exception.js");S.default.install();function o(g,E){var C=g;if(C==null||typeof C!="object")throw new d.InvalidArgumentException("MediaDataSource must be an javascript object!");if(!C.hasOwnProperty("type"))throw new d.InvalidArgumentException("MediaDataSource must has type field to indicate video file type!");switch(C.type){case"flv":return new r.default(C,E);default:return new A.default(C,E)}}function h(){return b.default.supportMSEH264Playback()}function f(){return b.default.getFeatureList()}var s={};s.createPlayer=o,s.isSupported=h,s.getFeatureList=f,s.BaseLoader=u.BaseLoader,s.LoaderStatus=u.LoaderStatus,s.LoaderErrors=u.LoaderErrors,s.Events=l.default,s.ErrorTypes=p.ErrorTypes,s.ErrorDetails=p.ErrorDetails,s.FlvPlayer=r.default,s.NativePlayer=A.default,s.LoggingControl=y.default,Object.defineProperty(s,"version",{enumerable:!0,get:function(){return"1.6.2"}}),w.default=s},"./src/index.js":function(T,w,_){T.exports=_("./src/flv.js").default},"./src/io/fetch-stream-loader.js":function(T,w,_){_.r(w);var S=_("./src/utils/browser.js"),b=_("./src/io/loader.js"),u=_("./src/utils/exception.js"),r=function(){var l=function(p,y){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,o){d.__proto__=o}||function(d,o){for(var h in o)Object.prototype.hasOwnProperty.call(o,h)&&(d[h]=o[h])},l(p,y)};return function(p,y){if(typeof y!="function"&&y!==null)throw new TypeError("Class extends value "+String(y)+" is not a constructor or null");l(p,y);function d(){this.constructor=p}p.prototype=y===null?Object.create(y):(d.prototype=y.prototype,new d)}}(),A=function(l){r(p,l);function p(y,d){var o=l.call(this,"fetch-stream-loader")||this;return o.TAG="FetchStreamLoader",o._seekHandler=y,o._config=d,o._needStash=!0,o._requestAbort=!1,o._contentLength=null,o._receivedLength=0,o}return p.isSupported=function(){try{var y=S.default.msedge&&S.default.version.minor>=15048,d=S.default.msedge?y:!0;return self.fetch&&self.ReadableStream&&d}catch{return!1}},p.prototype.destroy=function(){this.isWorking()&&this.abort(),l.prototype.destroy.call(this)},p.prototype.open=function(y,d){var o=this;this._dataSource=y,this._range=d;var h=y.url;this._config.reuseRedirectedURL&&y.redirectedURL!=null&&(h=y.redirectedURL);var f=this._seekHandler.getConfig(h,d),s=new self.Headers;if(typeof f.headers=="object"){var g=f.headers;for(var E in g)g.hasOwnProperty(E)&&s.append(E,g[E])}var C={method:"GET",headers:s,mode:"cors",cache:"default",referrerPolicy:"no-referrer-when-downgrade"};if(typeof this._config.headers=="object")for(var E in this._config.headers)s.append(E,this._config.headers[E]);y.cors===!1&&(C.mode="same-origin"),y.withCredentials&&(C.credentials="include"),y.referrerPolicy&&(C.referrerPolicy=y.referrerPolicy),self.AbortController&&(this._abortController=new self.AbortController,C.signal=this._abortController.signal),this._status=b.LoaderStatus.kConnecting,self.fetch(f.url,C).then(function(R){if(o._requestAbort){o._status=b.LoaderStatus.kIdle,R.body.cancel();return}if(R.ok&&R.status>=200&&R.status<=299){if(R.url!==f.url&&o._onURLRedirect){var L=o._seekHandler.removeURLParameters(R.url);o._onURLRedirect(L)}var O=R.headers.get("Content-Length");return O!=null&&(o._contentLength=parseInt(O),o._contentLength!==0&&o._onContentLengthKnown&&o._onContentLengthKnown(o._contentLength)),o._pump.call(o,R.body.getReader())}else if(o._status=b.LoaderStatus.kError,o._onError)o._onError(b.LoaderErrors.HTTP_STATUS_CODE_INVALID,{code:R.status,msg:R.statusText});else throw new u.RuntimeException("FetchStreamLoader: Http code invalid, "+R.status+" "+R.statusText)}).catch(function(R){if(!(o._abortController&&o._abortController.signal.aborted))if(o._status=b.LoaderStatus.kError,o._onError)o._onError(b.LoaderErrors.EXCEPTION,{code:-1,msg:R.message});else throw R})},p.prototype.abort=function(){if(this._requestAbort=!0,(this._status!==b.LoaderStatus.kBuffering||!S.default.chrome)&&this._abortController)try{this._abortController.abort()}catch{}},p.prototype._pump=function(y){var d=this;return y.read().then(function(o){if(o.done)if(d._contentLength!==null&&d._receivedLength<d._contentLength){d._status=b.LoaderStatus.kError;var h=b.LoaderErrors.EARLY_EOF,f={code:-1,msg:"Fetch stream meet Early-EOF"};if(d._onError)d._onError(h,f);else throw new u.RuntimeException(f.msg)}else d._status=b.LoaderStatus.kComplete,d._onComplete&&d._onComplete(d._range.from,d._range.from+d._receivedLength-1);else{if(d._abortController&&d._abortController.signal.aborted){d._status=b.LoaderStatus.kComplete;return}else if(d._requestAbort===!0)return d._status=b.LoaderStatus.kComplete,y.cancel();d._status=b.LoaderStatus.kBuffering;var s=o.value.buffer,g=d._range.from+d._receivedLength;d._receivedLength+=s.byteLength,d._onDataArrival&&d._onDataArrival(s,g,d._receivedLength),d._pump(y)}}).catch(function(o){if(d._abortController&&d._abortController.signal.aborted){d._status=b.LoaderStatus.kComplete;return}if(!(o.code===11&&S.default.msedge)){d._status=b.LoaderStatus.kError;var h=0,f=null;if((o.code===19||o.message==="network error")&&(d._contentLength===null||d._contentLength!==null&&d._receivedLength<d._contentLength)?(h=b.LoaderErrors.EARLY_EOF,f={code:o.code,msg:"Fetch stream meet Early-EOF"}):(h=b.LoaderErrors.EXCEPTION,f={code:o.code,msg:o.message}),d._onError)d._onError(h,f);else throw new u.RuntimeException(f.msg)}})},p}(b.BaseLoader);w.default=A},"./src/io/io-controller.js":function(T,w,_){_.r(w);var S=_("./src/utils/logger.js"),b=_("./src/io/speed-sampler.js"),u=_("./src/io/loader.js"),r=_("./src/io/fetch-stream-loader.js"),A=_("./src/io/xhr-moz-chunked-loader.js"),l=_("./src/io/xhr-range-loader.js"),p=_("./src/io/websocket-loader.js"),y=_("./src/io/range-seek-handler.js"),d=_("./src/io/param-seek-handler.js"),o=_("./src/utils/exception.js"),h=function(){function f(s,g,E){this.TAG="IOController",this._config=g,this._extraData=E,this._stashInitialSize=1024*384,g.stashInitialSize!=null&&g.stashInitialSize>0&&(this._stashInitialSize=g.stashInitialSize),this._stashUsed=0,this._stashSize=this._stashInitialSize,this._bufferSize=1024*1024*3,this._stashBuffer=new ArrayBuffer(this._bufferSize),this._stashByteStart=0,this._enableStash=!0,g.enableStashBuffer===!1&&(this._enableStash=!1),this._loader=null,this._loaderClass=null,this._seekHandler=null,this._dataSource=s,this._isWebSocketURL=/wss?:\/\/(.+?)/.test(s.url),this._refTotalLength=s.filesize?s.filesize:null,this._totalLength=this._refTotalLength,this._fullRequestFlag=!1,this._currentRange=null,this._redirectedURL=null,this._speedNormalized=0,this._speedSampler=new b.default,this._speedNormalizeList=[64,128,256,384,512,768,1024,1536,2048,3072,4096],this._isEarlyEofReconnecting=!1,this._paused=!1,this._resumeFrom=0,this._onDataArrival=null,this._onSeeked=null,this._onError=null,this._onComplete=null,this._onRedirect=null,this._onRecoveredEarlyEof=null,this._selectSeekHandler(),this._selectLoader(),this._createLoader()}return f.prototype.destroy=function(){this._loader.isWorking()&&this._loader.abort(),this._loader.destroy(),this._loader=null,this._loaderClass=null,this._dataSource=null,this._stashBuffer=null,this._stashUsed=this._stashSize=this._bufferSize=this._stashByteStart=0,this._currentRange=null,this._speedSampler=null,this._isEarlyEofReconnecting=!1,this._onDataArrival=null,this._onSeeked=null,this._onError=null,this._onComplete=null,this._onRedirect=null,this._onRecoveredEarlyEof=null,this._extraData=null},f.prototype.isWorking=function(){return this._loader&&this._loader.isWorking()&&!this._paused},f.prototype.isPaused=function(){return this._paused},Object.defineProperty(f.prototype,"status",{get:function(){return this._loader.status},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"extraData",{get:function(){return this._extraData},set:function(s){this._extraData=s},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"onDataArrival",{get:function(){return this._onDataArrival},set:function(s){this._onDataArrival=s},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"onSeeked",{get:function(){return this._onSeeked},set:function(s){this._onSeeked=s},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"onError",{get:function(){return this._onError},set:function(s){this._onError=s},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"onComplete",{get:function(){return this._onComplete},set:function(s){this._onComplete=s},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"onRedirect",{get:function(){return this._onRedirect},set:function(s){this._onRedirect=s},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"onRecoveredEarlyEof",{get:function(){return this._onRecoveredEarlyEof},set:function(s){this._onRecoveredEarlyEof=s},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"currentURL",{get:function(){return this._dataSource.url},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"hasRedirect",{get:function(){return this._redirectedURL!=null||this._dataSource.redirectedURL!=null},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"currentRedirectedURL",{get:function(){return this._redirectedURL||this._dataSource.redirectedURL},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"currentSpeed",{get:function(){return this._loaderClass===l.default?this._loader.currentSpeed:this._speedSampler.lastSecondKBps},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"loaderType",{get:function(){return this._loader.type},enumerable:!1,configurable:!0}),f.prototype._selectSeekHandler=function(){var s=this._config;if(s.seekType==="range")this._seekHandler=new y.default(this._config.rangeLoadZeroStart);else if(s.seekType==="param"){var g=s.seekParamStart||"bstart",E=s.seekParamEnd||"bend";this._seekHandler=new d.default(g,E)}else if(s.seekType==="custom"){if(typeof s.customSeekHandler!="function")throw new o.InvalidArgumentException("Custom seekType specified in config but invalid customSeekHandler!");this._seekHandler=new s.customSeekHandler}else throw new o.InvalidArgumentException("Invalid seekType in config: "+s.seekType)},f.prototype._selectLoader=function(){if(this._config.customLoader!=null)this._loaderClass=this._config.customLoader;else if(this._isWebSocketURL)this._loaderClass=p.default;else if(r.default.isSupported())this._loaderClass=r.default;else if(A.default.isSupported())this._loaderClass=A.default;else if(l.default.isSupported())this._loaderClass=l.default;else throw new o.RuntimeException("Your browser doesn't support xhr with arraybuffer responseType!")},f.prototype._createLoader=function(){this._loader=new this._loaderClass(this._seekHandler,this._config),this._loader.needStashBuffer===!1&&(this._enableStash=!1),this._loader.onContentLengthKnown=this._onContentLengthKnown.bind(this),this._loader.onURLRedirect=this._onURLRedirect.bind(this),this._loader.onDataArrival=this._onLoaderChunkArrival.bind(this),this._loader.onComplete=this._onLoaderComplete.bind(this),this._loader.onError=this._onLoaderError.bind(this)},f.prototype.open=function(s){this._currentRange={from:0,to:-1},s&&(this._currentRange.from=s),this._speedSampler.reset(),s||(this._fullRequestFlag=!0),this._loader.open(this._dataSource,Object.assign({},this._currentRange))},f.prototype.abort=function(){this._loader.abort(),this._paused&&(this._paused=!1,this._resumeFrom=0)},f.prototype.pause=function(){this.isWorking()&&(this._loader.abort(),this._stashUsed!==0?(this._resumeFrom=this._stashByteStart,this._currentRange.to=this._stashByteStart-1):this._resumeFrom=this._currentRange.to+1,this._stashUsed=0,this._stashByteStart=0,this._paused=!0)},f.prototype.resume=function(){if(this._paused){this._paused=!1;var s=this._resumeFrom;this._resumeFrom=0,this._internalSeek(s,!0)}},f.prototype.seek=function(s){this._paused=!1,this._stashUsed=0,this._stashByteStart=0,this._internalSeek(s,!0)},f.prototype._internalSeek=function(s,g){this._loader.isWorking()&&this._loader.abort(),this._flushStashBuffer(g),this._loader.destroy(),this._loader=null;var E={from:s,to:-1};this._currentRange={from:E.from,to:-1},this._speedSampler.reset(),this._stashSize=this._stashInitialSize,this._createLoader(),this._loader.open(this._dataSource,E),this._onSeeked&&this._onSeeked()},f.prototype.updateUrl=function(s){if(!s||typeof s!="string"||s.length===0)throw new o.InvalidArgumentException("Url must be a non-empty string!");this._dataSource.url=s},f.prototype._expandBuffer=function(s){for(var g=this._stashSize;g+1024*1024*1<s;)g*=2;if(g+=1024*1024*1,g!==this._bufferSize){var E=new ArrayBuffer(g);if(this._stashUsed>0){var C=new Uint8Array(this._stashBuffer,0,this._stashUsed),R=new Uint8Array(E,0,g);R.set(C,0)}this._stashBuffer=E,this._bufferSize=g}},f.prototype._normalizeSpeed=function(s){var g=this._speedNormalizeList,E=g.length-1,C=0,R=0,L=E;if(s<g[0])return g[0];for(;R<=L;){if(C=R+Math.floor((L-R)/2),C===E||s>=g[C]&&s<g[C+1])return g[C];g[C]<s?R=C+1:L=C-1}},f.prototype._adjustStashSize=function(s){var g=0;this._config.isLive||s<512?g=s:s>=512&&s<=1024?g=Math.floor(s*1.5):g=s*2,g>8192&&(g=8192);var E=g*1024+1024*1024*1;this._bufferSize<E&&this._expandBuffer(E),this._stashSize=g*1024},f.prototype._dispatchChunks=function(s,g){return this._currentRange.to=g+s.byteLength-1,this._onDataArrival(s,g)},f.prototype._onURLRedirect=function(s){this._redirectedURL=s,this._onRedirect&&this._onRedirect(s)},f.prototype._onContentLengthKnown=function(s){s&&this._fullRequestFlag&&(this._totalLength=s,this._fullRequestFlag=!1)},f.prototype._onLoaderChunkArrival=function(s,g,E){if(!this._onDataArrival)throw new o.IllegalStateException("IOController: No existing consumer (onDataArrival) callback!");if(!this._paused){this._isEarlyEofReconnecting&&(this._isEarlyEofReconnecting=!1,this._onRecoveredEarlyEof&&this._onRecoveredEarlyEof()),this._speedSampler.addBytes(s.byteLength);var C=this._speedSampler.lastSecondKBps;if(C!==0){var R=this._normalizeSpeed(C);this._speedNormalized!==R&&(this._speedNormalized=R,this._adjustStashSize(R))}if(this._enableStash)if(this._stashUsed===0&&this._stashByteStart===0&&(this._stashByteStart=g),this._stashUsed+s.byteLength<=this._stashSize){var k=new Uint8Array(this._stashBuffer,0,this._stashSize);k.set(new Uint8Array(s),this._stashUsed),this._stashUsed+=s.byteLength}else{var k=new Uint8Array(this._stashBuffer,0,this._bufferSize);if(this._stashUsed>0){var M=this._stashBuffer.slice(0,this._stashUsed),L=this._dispatchChunks(M,this._stashByteStart);if(L<M.byteLength){if(L>0){var I=new Uint8Array(M,L);k.set(I,0),this._stashUsed=I.byteLength,this._stashByteStart+=L}}else this._stashUsed=0,this._stashByteStart+=L;this._stashUsed+s.byteLength>this._bufferSize&&(this._expandBuffer(this._stashUsed+s.byteLength),k=new Uint8Array(this._stashBuffer,0,this._bufferSize)),k.set(new Uint8Array(s),this._stashUsed),this._stashUsed+=s.byteLength}else{var L=this._dispatchChunks(s,g);if(L<s.byteLength){var O=s.byteLength-L;O>this._bufferSize&&(this._expandBuffer(O),k=new Uint8Array(this._stashBuffer,0,this._bufferSize)),k.set(new Uint8Array(s,L),0),this._stashUsed+=O,this._stashByteStart=g+L}}}else if(this._stashUsed===0){var L=this._dispatchChunks(s,g);if(L<s.byteLength){var O=s.byteLength-L;O>this._bufferSize&&this._expandBuffer(O);var k=new Uint8Array(this._stashBuffer,0,this._bufferSize);k.set(new Uint8Array(s,L),0),this._stashUsed+=O,this._stashByteStart=g+L}}else{this._stashUsed+s.byteLength>this._bufferSize&&this._expandBuffer(this._stashUsed+s.byteLength);var k=new Uint8Array(this._stashBuffer,0,this._bufferSize);k.set(new Uint8Array(s),this._stashUsed),this._stashUsed+=s.byteLength;var L=this._dispatchChunks(this._stashBuffer.slice(0,this._stashUsed),this._stashByteStart);if(L<this._stashUsed&&L>0){var I=new Uint8Array(this._stashBuffer,L);k.set(I,0)}this._stashUsed-=L,this._stashByteStart+=L}}},f.prototype._flushStashBuffer=function(s){if(this._stashUsed>0){var g=this._stashBuffer.slice(0,this._stashUsed),E=this._dispatchChunks(g,this._stashByteStart),C=g.byteLength-E;if(E<g.byteLength)if(s)S.default.w(this.TAG,C+" bytes unconsumed data remain when flush buffer, dropped");else{if(E>0){var R=new Uint8Array(this._stashBuffer,0,this._bufferSize),L=new Uint8Array(g,E);R.set(L,0),this._stashUsed=L.byteLength,this._stashByteStart+=E}return 0}return this._stashUsed=0,this._stashByteStart=0,C}return 0},f.prototype._onLoaderComplete=function(s,g){this._flushStashBuffer(!0),this._onComplete&&this._onComplete(this._extraData)},f.prototype._onLoaderError=function(s,g){switch(S.default.e(this.TAG,"Loader error, code = "+g.code+", msg = "+g.msg),this._flushStashBuffer(!1),this._isEarlyEofReconnecting&&(this._isEarlyEofReconnecting=!1,s=u.LoaderErrors.UNRECOVERABLE_EARLY_EOF),s){case u.LoaderErrors.EARLY_EOF:{if(!this._config.isLive&&this._totalLength){var E=this._currentRange.to+1;E<this._totalLength&&(S.default.w(this.TAG,"Connection lost, trying reconnect..."),this._isEarlyEofReconnecting=!0,this._internalSeek(E,!1));return}s=u.LoaderErrors.UNRECOVERABLE_EARLY_EOF;break}case u.LoaderErrors.UNRECOVERABLE_EARLY_EOF:case u.LoaderErrors.CONNECTING_TIMEOUT:case u.LoaderErrors.HTTP_STATUS_CODE_INVALID:case u.LoaderErrors.EXCEPTION:break}if(this._onError)this._onError(s,g);else throw new o.RuntimeException("IOException: "+g.msg)},f}();w.default=h},"./src/io/loader.js":function(T,w,_){_.r(w),_.d(w,{LoaderStatus:function(){return b},LoaderErrors:function(){return u},BaseLoader:function(){return r}});var S=_("./src/utils/exception.js"),b={kIdle:0,kConnecting:1,kBuffering:2,kError:3,kComplete:4},u={OK:"OK",EXCEPTION:"Exception",HTTP_STATUS_CODE_INVALID:"HttpStatusCodeInvalid",CONNECTING_TIMEOUT:"ConnectingTimeout",EARLY_EOF:"EarlyEof",UNRECOVERABLE_EARLY_EOF:"UnrecoverableEarlyEof"},r=function(){function A(l){this._type=l||"undefined",this._status=b.kIdle,this._needStash=!1,this._onContentLengthKnown=null,this._onURLRedirect=null,this._onDataArrival=null,this._onError=null,this._onComplete=null}return A.prototype.destroy=function(){this._status=b.kIdle,this._onContentLengthKnown=null,this._onURLRedirect=null,this._onDataArrival=null,this._onError=null,this._onComplete=null},A.prototype.isWorking=function(){return this._status===b.kConnecting||this._status===b.kBuffering},Object.defineProperty(A.prototype,"type",{get:function(){return this._type},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"status",{get:function(){return this._status},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"needStashBuffer",{get:function(){return this._needStash},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"onContentLengthKnown",{get:function(){return this._onContentLengthKnown},set:function(l){this._onContentLengthKnown=l},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"onURLRedirect",{get:function(){return this._onURLRedirect},set:function(l){this._onURLRedirect=l},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"onDataArrival",{get:function(){return this._onDataArrival},set:function(l){this._onDataArrival=l},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"onError",{get:function(){return this._onError},set:function(l){this._onError=l},enumerable:!1,configurable:!0}),Object.defineProperty(A.prototype,"onComplete",{get:function(){return this._onComplete},set:function(l){this._onComplete=l},enumerable:!1,configurable:!0}),A.prototype.open=function(l,p){throw new S.NotImplementedException("Unimplemented abstract function!")},A.prototype.abort=function(){throw new S.NotImplementedException("Unimplemented abstract function!")},A}()},"./src/io/param-seek-handler.js":function(T,w,_){_.r(w);var S=function(){function b(u,r){this._startName=u,this._endName=r}return b.prototype.getConfig=function(u,r){var A=u;if(r.from!==0||r.to!==-1){var l=!0;A.indexOf("?")===-1&&(A+="?",l=!1),l&&(A+="&"),A+=this._startName+"="+r.from.toString(),r.to!==-1&&(A+="&"+this._endName+"="+r.to.toString())}return{url:A,headers:{}}},b.prototype.removeURLParameters=function(u){var r=u.split("?")[0],A=void 0,l=u.indexOf("?");l!==-1&&(A=u.substring(l+1));var p="";if(A!=null&&A.length>0)for(var y=A.split("&"),d=0;d<y.length;d++){var o=y[d].split("="),h=d>0;o[0]!==this._startName&&o[0]!==this._endName&&(h&&(p+="&"),p+=y[d])}return p.length===0?r:r+"?"+p},b}();w.default=S},"./src/io/range-seek-handler.js":function(T,w,_){_.r(w);var S=function(){function b(u){this._zeroStart=u||!1}return b.prototype.getConfig=function(u,r){var A={};if(r.from!==0||r.to!==-1){var l=void 0;r.to!==-1?l="bytes="+r.from.toString()+"-"+r.to.toString():l="bytes="+r.from.toString()+"-",A.Range=l}else this._zeroStart&&(A.Range="bytes=0-");return{url:u,headers:A}},b.prototype.removeURLParameters=function(u){return u},b}();w.default=S},"./src/io/speed-sampler.js":function(T,w,_){_.r(w);var S=function(){function b(){this._firstCheckpoint=0,this._lastCheckpoint=0,this._intervalBytes=0,this._totalBytes=0,this._lastSecondBytes=0,self.performance&&self.performance.now?this._now=self.performance.now.bind(self.performance):this._now=Date.now}return b.prototype.reset=function(){this._firstCheckpoint=this._lastCheckpoint=0,this._totalBytes=this._intervalBytes=0,this._lastSecondBytes=0},b.prototype.addBytes=function(u){this._firstCheckpoint===0?(this._firstCheckpoint=this._now(),this._lastCheckpoint=this._firstCheckpoint,this._intervalBytes+=u,this._totalBytes+=u):this._now()-this._lastCheckpoint<1e3?(this._intervalBytes+=u,this._totalBytes+=u):(this._lastSecondBytes=this._intervalBytes,this._intervalBytes=u,this._totalBytes+=u,this._lastCheckpoint=this._now())},Object.defineProperty(b.prototype,"currentKBps",{get:function(){this.addBytes(0);var u=(this._now()-this._lastCheckpoint)/1e3;return u==0&&(u=1),this._intervalBytes/u/1024},enumerable:!1,configurable:!0}),Object.defineProperty(b.prototype,"lastSecondKBps",{get:function(){return this.addBytes(0),this._lastSecondBytes!==0?this._lastSecondBytes/1024:this._now()-this._lastCheckpoint>=500?this.currentKBps:0},enumerable:!1,configurable:!0}),Object.defineProperty(b.prototype,"averageKBps",{get:function(){var u=(this._now()-this._firstCheckpoint)/1e3;return this._totalBytes/u/1024},enumerable:!1,configurable:!0}),b}();w.default=S},"./src/io/websocket-loader.js":function(T,w,_){_.r(w);var S=_("./src/io/loader.js"),b=_("./src/utils/exception.js"),u=function(){var A=function(l,p){return A=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(y,d){y.__proto__=d}||function(y,d){for(var o in d)Object.prototype.hasOwnProperty.call(d,o)&&(y[o]=d[o])},A(l,p)};return function(l,p){if(typeof p!="function"&&p!==null)throw new TypeError("Class extends value "+String(p)+" is not a constructor or null");A(l,p);function y(){this.constructor=l}l.prototype=p===null?Object.create(p):(y.prototype=p.prototype,new y)}}(),r=function(A){u(l,A);function l(){var p=A.call(this,"websocket-loader")||this;return p.TAG="WebSocketLoader",p._needStash=!0,p._ws=null,p._requestAbort=!1,p._receivedLength=0,p}return l.isSupported=function(){try{return typeof self.WebSocket<"u"}catch{return!1}},l.prototype.destroy=function(){this._ws&&this.abort(),A.prototype.destroy.call(this)},l.prototype.open=function(p){try{var y=this._ws=new self.WebSocket(p.url);y.binaryType="arraybuffer",y.onopen=this._onWebSocketOpen.bind(this),y.onclose=this._onWebSocketClose.bind(this),y.onmessage=this._onWebSocketMessage.bind(this),y.onerror=this._onWebSocketError.bind(this),this._status=S.LoaderStatus.kConnecting}catch(o){this._status=S.LoaderStatus.kError;var d={code:o.code,msg:o.message};if(this._onError)this._onError(S.LoaderErrors.EXCEPTION,d);else throw new b.RuntimeException(d.msg)}},l.prototype.abort=function(){var p=this._ws;p&&(p.readyState===0||p.readyState===1)&&(this._requestAbort=!0,p.close()),this._ws=null,this._status=S.LoaderStatus.kComplete},l.prototype._onWebSocketOpen=function(p){this._status=S.LoaderStatus.kBuffering},l.prototype._onWebSocketClose=function(p){if(this._requestAbort===!0){this._requestAbort=!1;return}this._status=S.LoaderStatus.kComplete,this._onComplete&&this._onComplete(0,this._receivedLength-1)},l.prototype._onWebSocketMessage=function(p){var y=this;if(p.data instanceof ArrayBuffer)this._dispatchArrayBuffer(p.data);else if(p.data instanceof Blob){var d=new FileReader;d.onload=function(){y._dispatchArrayBuffer(d.result)},d.readAsArrayBuffer(p.data)}else{this._status=S.LoaderStatus.kError;var o={code:-1,msg:"Unsupported WebSocket message type: "+p.data.constructor.name};if(this._onError)this._onError(S.LoaderErrors.EXCEPTION,o);else throw new b.RuntimeException(o.msg)}},l.prototype._dispatchArrayBuffer=function(p){var y=p,d=this._receivedLength;this._receivedLength+=y.byteLength,this._onDataArrival&&this._onDataArrival(y,d,this._receivedLength)},l.prototype._onWebSocketError=function(p){this._status=S.LoaderStatus.kError;var y={code:p.code,msg:p.message};if(this._onError)this._onError(S.LoaderErrors.EXCEPTION,y);else throw new b.RuntimeException(y.msg)},l}(S.BaseLoader);w.default=r},"./src/io/xhr-moz-chunked-loader.js":function(T,w,_){_.r(w);var S=_("./src/utils/logger.js"),b=_("./src/io/loader.js"),u=_("./src/utils/exception.js"),r=function(){var l=function(p,y){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,o){d.__proto__=o}||function(d,o){for(var h in o)Object.prototype.hasOwnProperty.call(o,h)&&(d[h]=o[h])},l(p,y)};return function(p,y){if(typeof y!="function"&&y!==null)throw new TypeError("Class extends value "+String(y)+" is not a constructor or null");l(p,y);function d(){this.constructor=p}p.prototype=y===null?Object.create(y):(d.prototype=y.prototype,new d)}}(),A=function(l){r(p,l);function p(y,d){var o=l.call(this,"xhr-moz-chunked-loader")||this;return o.TAG="MozChunkedLoader",o._seekHandler=y,o._config=d,o._needStash=!0,o._xhr=null,o._requestAbort=!1,o._contentLength=null,o._receivedLength=0,o}return p.isSupported=function(){try{var y=new XMLHttpRequest;return y.open("GET","https://example.com",!0),y.responseType="moz-chunked-arraybuffer",y.responseType==="moz-chunked-arraybuffer"}catch(d){return S.default.w("MozChunkedLoader",d.message),!1}},p.prototype.destroy=function(){this.isWorking()&&this.abort(),this._xhr&&(this._xhr.onreadystatechange=null,this._xhr.onprogress=null,this._xhr.onloadend=null,this._xhr.onerror=null,this._xhr=null),l.prototype.destroy.call(this)},p.prototype.open=function(y,d){this._dataSource=y,this._range=d;var o=y.url;this._config.reuseRedirectedURL&&y.redirectedURL!=null&&(o=y.redirectedURL);var h=this._seekHandler.getConfig(o,d);this._requestURL=h.url;var f=this._xhr=new XMLHttpRequest;if(f.open("GET",h.url,!0),f.responseType="moz-chunked-arraybuffer",f.onreadystatechange=this._onReadyStateChange.bind(this),f.onprogress=this._onProgress.bind(this),f.onloadend=this._onLoadEnd.bind(this),f.onerror=this._onXhrError.bind(this),y.withCredentials&&(f.withCredentials=!0),typeof h.headers=="object"){var s=h.headers;for(var g in s)s.hasOwnProperty(g)&&f.setRequestHeader(g,s[g])}if(typeof this._config.headers=="object"){var s=this._config.headers;for(var g in s)s.hasOwnProperty(g)&&f.setRequestHeader(g,s[g])}this._status=b.LoaderStatus.kConnecting,f.send()},p.prototype.abort=function(){this._requestAbort=!0,this._xhr&&this._xhr.abort(),this._status=b.LoaderStatus.kComplete},p.prototype._onReadyStateChange=function(y){var d=y.target;if(d.readyState===2){if(d.responseURL!=null&&d.responseURL!==this._requestURL&&this._onURLRedirect){var o=this._seekHandler.removeURLParameters(d.responseURL);this._onURLRedirect(o)}if(d.status!==0&&(d.status<200||d.status>299))if(this._status=b.LoaderStatus.kError,this._onError)this._onError(b.LoaderErrors.HTTP_STATUS_CODE_INVALID,{code:d.status,msg:d.statusText});else throw new u.RuntimeException("MozChunkedLoader: Http code invalid, "+d.status+" "+d.statusText);else this._status=b.LoaderStatus.kBuffering}},p.prototype._onProgress=function(y){if(this._status!==b.LoaderStatus.kError){this._contentLength===null&&y.total!==null&&y.total!==0&&(this._contentLength=y.total,this._onContentLengthKnown&&this._onContentLengthKnown(this._contentLength));var d=y.target.response,o=this._range.from+this._receivedLength;this._receivedLength+=d.byteLength,this._onDataArrival&&this._onDataArrival(d,o,this._receivedLength)}},p.prototype._onLoadEnd=function(y){if(this._requestAbort===!0){this._requestAbort=!1;return}else if(this._status===b.LoaderStatus.kError)return;this._status=b.LoaderStatus.kComplete,this._onComplete&&this._onComplete(this._range.from,this._range.from+this._receivedLength-1)},p.prototype._onXhrError=function(y){this._status=b.LoaderStatus.kError;var d=0,o=null;if(this._contentLength&&y.loaded<this._contentLength?(d=b.LoaderErrors.EARLY_EOF,o={code:-1,msg:"Moz-Chunked stream meet Early-Eof"}):(d=b.LoaderErrors.EXCEPTION,o={code:-1,msg:y.constructor.name+" "+y.type}),this._onError)this._onError(d,o);else throw new u.RuntimeException(o.msg)},p}(b.BaseLoader);w.default=A},"./src/io/xhr-range-loader.js":function(T,w,_){_.r(w);var S=_("./src/utils/logger.js"),b=_("./src/io/speed-sampler.js"),u=_("./src/io/loader.js"),r=_("./src/utils/exception.js"),A=function(){var p=function(y,d){return p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,h){o.__proto__=h}||function(o,h){for(var f in h)Object.prototype.hasOwnProperty.call(h,f)&&(o[f]=h[f])},p(y,d)};return function(y,d){if(typeof d!="function"&&d!==null)throw new TypeError("Class extends value "+String(d)+" is not a constructor or null");p(y,d);function o(){this.constructor=y}y.prototype=d===null?Object.create(d):(o.prototype=d.prototype,new o)}}(),l=function(p){A(y,p);function y(d,o){var h=p.call(this,"xhr-range-loader")||this;return h.TAG="RangeLoader",h._seekHandler=d,h._config=o,h._needStash=!1,h._chunkSizeKBList=[128,256,384,512,768,1024,1536,2048,3072,4096,5120,6144,7168,8192],h._currentChunkSizeKB=384,h._currentSpeedNormalized=0,h._zeroSpeedChunkCount=0,h._xhr=null,h._speedSampler=new b.default,h._requestAbort=!1,h._waitForTotalLength=!1,h._totalLengthReceived=!1,h._currentRequestURL=null,h._currentRedirectedURL=null,h._currentRequestRange=null,h._totalLength=null,h._contentLength=null,h._receivedLength=0,h._lastTimeLoaded=0,h}return y.isSupported=function(){try{var d=new XMLHttpRequest;return d.open("GET","https://example.com",!0),d.responseType="arraybuffer",d.responseType==="arraybuffer"}catch(o){return S.default.w("RangeLoader",o.message),!1}},y.prototype.destroy=function(){this.isWorking()&&this.abort(),this._xhr&&(this._xhr.onreadystatechange=null,this._xhr.onprogress=null,this._xhr.onload=null,this._xhr.onerror=null,this._xhr=null),p.prototype.destroy.call(this)},Object.defineProperty(y.prototype,"currentSpeed",{get:function(){return this._speedSampler.lastSecondKBps},enumerable:!1,configurable:!0}),y.prototype.open=function(d,o){this._dataSource=d,this._range=o,this._status=u.LoaderStatus.kConnecting;var h=!1;this._dataSource.filesize!=null&&this._dataSource.filesize!==0&&(h=!0,this._totalLength=this._dataSource.filesize),!this._totalLengthReceived&&!h?(this._waitForTotalLength=!0,this._internalOpen(this._dataSource,{from:0,to:-1})):this._openSubRange()},y.prototype._openSubRange=function(){var d=this._currentChunkSizeKB*1024,o=this._range.from+this._receivedLength,h=o+d;this._contentLength!=null&&h-this._range.from>=this._contentLength&&(h=this._range.from+this._contentLength-1),this._currentRequestRange={from:o,to:h},this._internalOpen(this._dataSource,this._currentRequestRange)},y.prototype._internalOpen=function(d,o){this._lastTimeLoaded=0;var h=d.url;this._config.reuseRedirectedURL&&(this._currentRedirectedURL!=null?h=this._currentRedirectedURL:d.redirectedURL!=null&&(h=d.redirectedURL));var f=this._seekHandler.getConfig(h,o);this._currentRequestURL=f.url;var s=this._xhr=new XMLHttpRequest;if(s.open("GET",f.url,!0),s.responseType="arraybuffer",s.onreadystatechange=this._onReadyStateChange.bind(this),s.onprogress=this._onProgress.bind(this),s.onload=this._onLoad.bind(this),s.onerror=this._onXhrError.bind(this),d.withCredentials&&(s.withCredentials=!0),typeof f.headers=="object"){var g=f.headers;for(var E in g)g.hasOwnProperty(E)&&s.setRequestHeader(E,g[E])}if(typeof this._config.headers=="object"){var g=this._config.headers;for(var E in g)g.hasOwnProperty(E)&&s.setRequestHeader(E,g[E])}s.send()},y.prototype.abort=function(){this._requestAbort=!0,this._internalAbort(),this._status=u.LoaderStatus.kComplete},y.prototype._internalAbort=function(){this._xhr&&(this._xhr.onreadystatechange=null,this._xhr.onprogress=null,this._xhr.onload=null,this._xhr.onerror=null,this._xhr.abort(),this._xhr=null)},y.prototype._onReadyStateChange=function(d){var o=d.target;if(o.readyState===2){if(o.responseURL!=null){var h=this._seekHandler.removeURLParameters(o.responseURL);o.responseURL!==this._currentRequestURL&&h!==this._currentRedirectedURL&&(this._currentRedirectedURL=h,this._onURLRedirect&&this._onURLRedirect(h))}if(o.status>=200&&o.status<=299){if(this._waitForTotalLength)return;this._status=u.LoaderStatus.kBuffering}else if(this._status=u.LoaderStatus.kError,this._onError)this._onError(u.LoaderErrors.HTTP_STATUS_CODE_INVALID,{code:o.status,msg:o.statusText});else throw new r.RuntimeException("RangeLoader: Http code invalid, "+o.status+" "+o.statusText)}},y.prototype._onProgress=function(d){if(this._status!==u.LoaderStatus.kError){if(this._contentLength===null){var o=!1;if(this._waitForTotalLength){this._waitForTotalLength=!1,this._totalLengthReceived=!0,o=!0;var h=d.total;this._internalAbort(),h!=null&h!==0&&(this._totalLength=h)}if(this._range.to===-1?this._contentLength=this._totalLength-this._range.from:this._contentLength=this._range.to-this._range.from+1,o){this._openSubRange();return}this._onContentLengthKnown&&this._onContentLengthKnown(this._contentLength)}var f=d.loaded-this._lastTimeLoaded;this._lastTimeLoaded=d.loaded,this._speedSampler.addBytes(f)}},y.prototype._normalizeSpeed=function(d){var o=this._chunkSizeKBList,h=o.length-1,f=0,s=0,g=h;if(d<o[0])return o[0];for(;s<=g;){if(f=s+Math.floor((g-s)/2),f===h||d>=o[f]&&d<o[f+1])return o[f];o[f]<d?s=f+1:g=f-1}},y.prototype._onLoad=function(d){if(this._status!==u.LoaderStatus.kError){if(this._waitForTotalLength){this._waitForTotalLength=!1;return}this._lastTimeLoaded=0;var o=this._speedSampler.lastSecondKBps;if(o===0&&(this._zeroSpeedChunkCount++,this._zeroSpeedChunkCount>=3&&(o=this._speedSampler.currentKBps)),o!==0){var h=this._normalizeSpeed(o);this._currentSpeedNormalized!==h&&(this._currentSpeedNormalized=h,this._currentChunkSizeKB=h)}var f=d.target.response,s=this._range.from+this._receivedLength;this._receivedLength+=f.byteLength;var g=!1;this._contentLength!=null&&this._receivedLength<this._contentLength?this._openSubRange():g=!0,this._onDataArrival&&this._onDataArrival(f,s,this._receivedLength),g&&(this._status=u.LoaderStatus.kComplete,this._onComplete&&this._onComplete(this._range.from,this._range.from+this._receivedLength-1))}},y.prototype._onXhrError=function(d){this._status=u.LoaderStatus.kError;var o=0,h=null;if(this._contentLength&&this._receivedLength>0&&this._receivedLength<this._contentLength?(o=u.LoaderErrors.EARLY_EOF,h={code:-1,msg:"RangeLoader meet Early-Eof"}):(o=u.LoaderErrors.EXCEPTION,h={code:-1,msg:d.constructor.name+" "+d.type}),this._onError)this._onError(o,h);else throw new r.RuntimeException(h.msg)},y}(u.BaseLoader);w.default=l},"./src/player/flv-player.js":function(T,w,_){_.r(w);var S=_("./node_modules/events/events.js"),b=_.n(S),u=_("./src/utils/logger.js"),r=_("./src/utils/browser.js"),A=_("./src/player/player-events.js"),l=_("./src/core/transmuxer.js"),p=_("./src/core/transmuxing-events.js"),y=_("./src/core/mse-controller.js"),d=_("./src/core/mse-events.js"),o=_("./src/player/player-errors.js"),h=_("./src/config.js"),f=_("./src/utils/exception.js"),s=function(){function g(E,C){if(this.TAG="FlvPlayer",this._type="FlvPlayer",this._emitter=new(b()),this._config=(0,h.createDefaultConfig)(),typeof C=="object"&&Object.assign(this._config,C),E.type.toLowerCase()!=="flv")throw new f.InvalidArgumentException("FlvPlayer requires an flv MediaDataSource input!");E.isLive===!0&&(this._config.isLive=!0),this.e={onvLoadedMetadata:this._onvLoadedMetadata.bind(this),onvSeeking:this._onvSeeking.bind(this),onvCanPlay:this._onvCanPlay.bind(this),onvStalled:this._onvStalled.bind(this),onvProgress:this._onvProgress.bind(this)},self.performance&&self.performance.now?this._now=self.performance.now.bind(self.performance):this._now=Date.now,this._pendingSeekTime=null,this._requestSetTime=!1,this._seekpointRecord=null,this._progressChecker=null,this._mediaDataSource=E,this._mediaElement=null,this._msectl=null,this._transmuxer=null,this._mseSourceOpened=!1,this._hasPendingLoad=!1,this._receivedCanPlay=!1,this._mediaInfo=null,this._statisticsInfo=null;var R=r.default.chrome&&(r.default.version.major<50||r.default.version.major===50&&r.default.version.build<2661);this._alwaysSeekKeyframe=!!(R||r.default.msedge||r.default.msie),this._alwaysSeekKeyframe&&(this._config.accurateSeek=!1)}return g.prototype.destroy=function(){this._progressChecker!=null&&(window.clearInterval(this._progressChecker),this._progressChecker=null),this._transmuxer&&this.unload(),this._mediaElement&&this.detachMediaElement(),this.e=null,this._mediaDataSource=null,this._emitter.removeAllListeners(),this._emitter=null},g.prototype.on=function(E,C){var R=this;E===A.default.MEDIA_INFO?this._mediaInfo!=null&&Promise.resolve().then(function(){R._emitter.emit(A.default.MEDIA_INFO,R.mediaInfo)}):E===A.default.STATISTICS_INFO&&this._statisticsInfo!=null&&Promise.resolve().then(function(){R._emitter.emit(A.default.STATISTICS_INFO,R.statisticsInfo)}),this._emitter.addListener(E,C)},g.prototype.off=function(E,C){this._emitter.removeListener(E,C)},g.prototype.attachMediaElement=function(E){var C=this;if(this._mediaElement=E,E.addEventListener("loadedmetadata",this.e.onvLoadedMetadata),E.addEventListener("seeking",this.e.onvSeeking),E.addEventListener("canplay",this.e.onvCanPlay),E.addEventListener("stalled",this.e.onvStalled),E.addEventListener("progress",this.e.onvProgress),this._msectl=new y.default(this._config),this._msectl.on(d.default.UPDATE_END,this._onmseUpdateEnd.bind(this)),this._msectl.on(d.default.BUFFER_FULL,this._onmseBufferFull.bind(this)),this._msectl.on(d.default.SOURCE_OPEN,function(){C._mseSourceOpened=!0,C._hasPendingLoad&&(C._hasPendingLoad=!1,C.load())}),this._msectl.on(d.default.ERROR,function(R){C._emitter.emit(A.default.ERROR,o.ErrorTypes.MEDIA_ERROR,o.ErrorDetails.MEDIA_MSE_ERROR,R)}),this._msectl.attachMediaElement(E),this._pendingSeekTime!=null)try{E.currentTime=this._pendingSeekTime,this._pendingSeekTime=null}catch{}},g.prototype.detachMediaElement=function(){this._mediaElement&&(this._msectl.detachMediaElement(),this._mediaElement.removeEventListener("loadedmetadata",this.e.onvLoadedMetadata),this._mediaElement.removeEventListener("seeking",this.e.onvSeeking),this._mediaElement.removeEventListener("canplay",this.e.onvCanPlay),this._mediaElement.removeEventListener("stalled",this.e.onvStalled),this._mediaElement.removeEventListener("progress",this.e.onvProgress),this._mediaElement=null),this._msectl&&(this._msectl.destroy(),this._msectl=null)},g.prototype.load=function(){var E=this;if(!this._mediaElement)throw new f.IllegalStateException("HTMLMediaElement must be attached before load()!");if(this._transmuxer)throw new f.IllegalStateException("FlvPlayer.load() has been called, please call unload() first!");if(!this._hasPendingLoad){if(this._config.deferLoadAfterSourceOpen&&this._mseSourceOpened===!1){this._hasPendingLoad=!0;return}this._mediaElement.readyState>0&&(this._requestSetTime=!0,this._mediaElement.currentTime=0),this._transmuxer=new l.default(this._mediaDataSource,this._config),this._transmuxer.on(p.default.INIT_SEGMENT,function(C,R){E._msectl.appendInitSegment(R)}),this._transmuxer.on(p.default.MEDIA_SEGMENT,function(C,R){if(E._msectl.appendMediaSegment(R),E._config.lazyLoad&&!E._config.isLive){var L=E._mediaElement.currentTime;R.info.endDts>=(L+E._config.lazyLoadMaxDuration)*1e3&&E._progressChecker==null&&(u.default.v(E.TAG,"Maximum buffering duration exceeded, suspend transmuxing task"),E._suspendTransmuxer())}}),this._transmuxer.on(p.default.LOADING_COMPLETE,function(){E._msectl.endOfStream(),E._emitter.emit(A.default.LOADING_COMPLETE)}),this._transmuxer.on(p.default.RECOVERED_EARLY_EOF,function(){E._emitter.emit(A.default.RECOVERED_EARLY_EOF)}),this._transmuxer.on(p.default.IO_ERROR,function(C,R){E._emitter.emit(A.default.ERROR,o.ErrorTypes.NETWORK_ERROR,C,R)}),this._transmuxer.on(p.default.DEMUX_ERROR,function(C,R){E._emitter.emit(A.default.ERROR,o.ErrorTypes.MEDIA_ERROR,C,{code:-1,msg:R})}),this._transmuxer.on(p.default.MEDIA_INFO,function(C){E._mediaInfo=C,E._emitter.emit(A.default.MEDIA_INFO,Object.assign({},C))}),this._transmuxer.on(p.default.METADATA_ARRIVED,function(C){E._emitter.emit(A.default.METADATA_ARRIVED,C)}),this._transmuxer.on(p.default.SCRIPTDATA_ARRIVED,function(C){E._emitter.emit(A.default.SCRIPTDATA_ARRIVED,C)}),this._transmuxer.on(p.default.STATISTICS_INFO,function(C){E._statisticsInfo=E._fillStatisticsInfo(C),E._emitter.emit(A.default.STATISTICS_INFO,Object.assign({},E._statisticsInfo))}),this._transmuxer.on(p.default.RECOMMEND_SEEKPOINT,function(C){E._mediaElement&&!E._config.accurateSeek&&(E._requestSetTime=!0,E._mediaElement.currentTime=C/1e3)}),this._transmuxer.open()}},g.prototype.unload=function(){this._mediaElement&&this._mediaElement.pause(),this._msectl&&this._msectl.seek(0),this._transmuxer&&(this._transmuxer.close(),this._transmuxer.destroy(),this._transmuxer=null)},g.prototype.play=function(){return this._mediaElement.play()},g.prototype.pause=function(){this._mediaElement.pause()},Object.defineProperty(g.prototype,"type",{get:function(){return this._type},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"buffered",{get:function(){return this._mediaElement.buffered},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"duration",{get:function(){return this._mediaElement.duration},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"volume",{get:function(){return this._mediaElement.volume},set:function(E){this._mediaElement.volume=E},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"muted",{get:function(){return this._mediaElement.muted},set:function(E){this._mediaElement.muted=E},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"currentTime",{get:function(){return this._mediaElement?this._mediaElement.currentTime:0},set:function(E){this._mediaElement?this._internalSeek(E):this._pendingSeekTime=E},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"mediaInfo",{get:function(){return Object.assign({},this._mediaInfo)},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"statisticsInfo",{get:function(){return this._statisticsInfo==null&&(this._statisticsInfo={}),this._statisticsInfo=this._fillStatisticsInfo(this._statisticsInfo),Object.assign({},this._statisticsInfo)},enumerable:!1,configurable:!0}),g.prototype._fillStatisticsInfo=function(E){if(E.playerType=this._type,!(this._mediaElement instanceof HTMLVideoElement))return E;var C=!0,R=0,L=0;if(this._mediaElement.getVideoPlaybackQuality){var O=this._mediaElement.getVideoPlaybackQuality();R=O.totalVideoFrames,L=O.droppedVideoFrames}else this._mediaElement.webkitDecodedFrameCount!=null?(R=this._mediaElement.webkitDecodedFrameCount,L=this._mediaElement.webkitDroppedFrameCount):C=!1;return C&&(E.decodedFrames=R,E.droppedFrames=L),E},g.prototype._onmseUpdateEnd=function(){if(!(!this._config.lazyLoad||this._config.isLive)){for(var E=this._mediaElement.buffered,C=this._mediaElement.currentTime,R=0,L=0;L<E.length;L++){var O=E.start(L),k=E.end(L);if(O<=C&&C<k){R=k;break}}R>=C+this._config.lazyLoadMaxDuration&&this._progressChecker==null&&(u.default.v(this.TAG,"Maximum buffering duration exceeded, suspend transmuxing task"),this._suspendTransmuxer())}},g.prototype._onmseBufferFull=function(){u.default.v(this.TAG,"MSE SourceBuffer is full, suspend transmuxing task"),this._progressChecker==null&&this._suspendTransmuxer()},g.prototype._suspendTransmuxer=function(){this._transmuxer&&(this._transmuxer.pause(),this._progressChecker==null&&(this._progressChecker=window.setInterval(this._checkProgressAndResume.bind(this),1e3)))},g.prototype._checkProgressAndResume=function(){for(var E=this._mediaElement.currentTime,C=this._mediaElement.buffered,R=!1,L=0;L<C.length;L++){var O=C.start(L),k=C.end(L);if(E>=O&&E<k){E>=k-this._config.lazyLoadRecoverDuration&&(R=!0);break}}R&&(window.clearInterval(this._progressChecker),this._progressChecker=null,R&&(u.default.v(this.TAG,"Continue loading from paused position"),this._transmuxer.resume()))},g.prototype._isTimepointBuffered=function(E){for(var C=this._mediaElement.buffered,R=0;R<C.length;R++){var L=C.start(R),O=C.end(R);if(E>=L&&E<O)return!0}return!1},g.prototype._internalSeek=function(E){var C=this._isTimepointBuffered(E),R=!1,L=0;if(E<1&&this._mediaElement.buffered.length>0){var O=this._mediaElement.buffered.start(0);(O<1&&E<O||r.default.safari)&&(R=!0,L=r.default.safari?.1:O)}if(R)this._requestSetTime=!0,this._mediaElement.currentTime=L;else if(C){if(!this._alwaysSeekKeyframe)this._requestSetTime=!0,this._mediaElement.currentTime=E;else{var k=this._msectl.getNearestKeyframe(Math.floor(E*1e3));this._requestSetTime=!0,k!=null?this._mediaElement.currentTime=k.dts/1e3:this._mediaElement.currentTime=E}this._progressChecker!=null&&this._checkProgressAndResume()}else this._progressChecker!=null&&(window.clearInterval(this._progressChecker),this._progressChecker=null),this._msectl.seek(E),this._transmuxer.seek(Math.floor(E*1e3)),this._config.accurateSeek&&(this._requestSetTime=!0,this._mediaElement.currentTime=E)},g.prototype._checkAndApplyUnbufferedSeekpoint=function(){if(this._seekpointRecord)if(this._seekpointRecord.recordTime<=this._now()-100){var E=this._mediaElement.currentTime;this._seekpointRecord=null,this._isTimepointBuffered(E)||(this._progressChecker!=null&&(window.clearTimeout(this._progressChecker),this._progressChecker=null),this._msectl.seek(E),this._transmuxer.seek(Math.floor(E*1e3)),this._config.accurateSeek&&(this._requestSetTime=!0,this._mediaElement.currentTime=E))}else window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this),50)},g.prototype._checkAndResumeStuckPlayback=function(E){var C=this._mediaElement;if(E||!this._receivedCanPlay||C.readyState<2){var R=C.buffered;R.length>0&&C.currentTime<R.start(0)&&(u.default.w(this.TAG,"Playback seems stuck at "+C.currentTime+", seek to "+R.start(0)),this._requestSetTime=!0,this._mediaElement.currentTime=R.start(0),this._mediaElement.removeEventListener("progress",this.e.onvProgress))}else this._mediaElement.removeEventListener("progress",this.e.onvProgress)},g.prototype._onvLoadedMetadata=function(E){this._pendingSeekTime!=null&&(this._mediaElement.currentTime=this._pendingSeekTime,this._pendingSeekTime=null)},g.prototype._onvSeeking=function(E){var C=this._mediaElement.currentTime,R=this._mediaElement.buffered;if(this._requestSetTime){this._requestSetTime=!1;return}if(C<1&&R.length>0){var L=R.start(0);if(L<1&&C<L||r.default.safari){this._requestSetTime=!0,this._mediaElement.currentTime=r.default.safari?.1:L;return}}if(this._isTimepointBuffered(C)){if(this._alwaysSeekKeyframe){var O=this._msectl.getNearestKeyframe(Math.floor(C*1e3));O!=null&&(this._requestSetTime=!0,this._mediaElement.currentTime=O.dts/1e3)}this._progressChecker!=null&&this._checkProgressAndResume();return}this._seekpointRecord={seekPoint:C,recordTime:this._now()},window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this),50)},g.prototype._onvCanPlay=function(E){this._receivedCanPlay=!0,this._mediaElement.removeEventListener("canplay",this.e.onvCanPlay)},g.prototype._onvStalled=function(E){this._checkAndResumeStuckPlayback(!0)},g.prototype._onvProgress=function(E){this._checkAndResumeStuckPlayback()},g}();w.default=s},"./src/player/native-player.js":function(T,w,_){_.r(w);var S=_("./node_modules/events/events.js"),b=_.n(S),u=_("./src/player/player-events.js"),r=_("./src/config.js"),A=_("./src/utils/exception.js"),l=function(){function p(y,d){if(this.TAG="NativePlayer",this._type="NativePlayer",this._emitter=new(b()),this._config=(0,r.createDefaultConfig)(),typeof d=="object"&&Object.assign(this._config,d),y.type.toLowerCase()==="flv")throw new A.InvalidArgumentException("NativePlayer does't support flv MediaDataSource input!");if(y.hasOwnProperty("segments"))throw new A.InvalidArgumentException("NativePlayer("+y.type+") doesn't support multipart playback!");this.e={onvLoadedMetadata:this._onvLoadedMetadata.bind(this)},this._pendingSeekTime=null,this._statisticsReporter=null,this._mediaDataSource=y,this._mediaElement=null}return p.prototype.destroy=function(){this._mediaElement&&(this.unload(),this.detachMediaElement()),this.e=null,this._mediaDataSource=null,this._emitter.removeAllListeners(),this._emitter=null},p.prototype.on=function(y,d){var o=this;y===u.default.MEDIA_INFO?this._mediaElement!=null&&this._mediaElement.readyState!==0&&Promise.resolve().then(function(){o._emitter.emit(u.default.MEDIA_INFO,o.mediaInfo)}):y===u.default.STATISTICS_INFO&&this._mediaElement!=null&&this._mediaElement.readyState!==0&&Promise.resolve().then(function(){o._emitter.emit(u.default.STATISTICS_INFO,o.statisticsInfo)}),this._emitter.addListener(y,d)},p.prototype.off=function(y,d){this._emitter.removeListener(y,d)},p.prototype.attachMediaElement=function(y){if(this._mediaElement=y,y.addEventListener("loadedmetadata",this.e.onvLoadedMetadata),this._pendingSeekTime!=null)try{y.currentTime=this._pendingSeekTime,this._pendingSeekTime=null}catch{}},p.prototype.detachMediaElement=function(){this._mediaElement&&(this._mediaElement.src="",this._mediaElement.removeAttribute("src"),this._mediaElement.removeEventListener("loadedmetadata",this.e.onvLoadedMetadata),this._mediaElement=null),this._statisticsReporter!=null&&(window.clearInterval(this._statisticsReporter),this._statisticsReporter=null)},p.prototype.load=function(){if(!this._mediaElement)throw new A.IllegalStateException("HTMLMediaElement must be attached before load()!");this._mediaElement.src=this._mediaDataSource.url,this._mediaElement.readyState>0&&(this._mediaElement.currentTime=0),this._mediaElement.preload="auto",this._mediaElement.load(),this._statisticsReporter=window.setInterval(this._reportStatisticsInfo.bind(this),this._config.statisticsInfoReportInterval)},p.prototype.unload=function(){this._mediaElement&&(this._mediaElement.src="",this._mediaElement.removeAttribute("src")),this._statisticsReporter!=null&&(window.clearInterval(this._statisticsReporter),this._statisticsReporter=null)},p.prototype.play=function(){return this._mediaElement.play()},p.prototype.pause=function(){this._mediaElement.pause()},Object.defineProperty(p.prototype,"type",{get:function(){return this._type},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"buffered",{get:function(){return this._mediaElement.buffered},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"duration",{get:function(){return this._mediaElement.duration},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"volume",{get:function(){return this._mediaElement.volume},set:function(y){this._mediaElement.volume=y},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"muted",{get:function(){return this._mediaElement.muted},set:function(y){this._mediaElement.muted=y},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"currentTime",{get:function(){return this._mediaElement?this._mediaElement.currentTime:0},set:function(y){this._mediaElement?this._mediaElement.currentTime=y:this._pendingSeekTime=y},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"mediaInfo",{get:function(){var y=this._mediaElement instanceof HTMLAudioElement?"audio/":"video/",d={mimeType:y+this._mediaDataSource.type};return this._mediaElement&&(d.duration=Math.floor(this._mediaElement.duration*1e3),this._mediaElement instanceof HTMLVideoElement&&(d.width=this._mediaElement.videoWidth,d.height=this._mediaElement.videoHeight)),d},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"statisticsInfo",{get:function(){var y={playerType:this._type,url:this._mediaDataSource.url};if(!(this._mediaElement instanceof HTMLVideoElement))return y;var d=!0,o=0,h=0;if(this._mediaElement.getVideoPlaybackQuality){var f=this._mediaElement.getVideoPlaybackQuality();o=f.totalVideoFrames,h=f.droppedVideoFrames}else this._mediaElement.webkitDecodedFrameCount!=null?(o=this._mediaElement.webkitDecodedFrameCount,h=this._mediaElement.webkitDroppedFrameCount):d=!1;return d&&(y.decodedFrames=o,y.droppedFrames=h),y},enumerable:!1,configurable:!0}),p.prototype._onvLoadedMetadata=function(y){this._pendingSeekTime!=null&&(this._mediaElement.currentTime=this._pendingSeekTime,this._pendingSeekTime=null),this._emitter.emit(u.default.MEDIA_INFO,this.mediaInfo)},p.prototype._reportStatisticsInfo=function(){this._emitter.emit(u.default.STATISTICS_INFO,this.statisticsInfo)},p}();w.default=l},"./src/player/player-errors.js":function(T,w,_){_.r(w),_.d(w,{ErrorTypes:function(){return u},ErrorDetails:function(){return r}});var S=_("./src/io/loader.js"),b=_("./src/demux/demux-errors.js"),u={NETWORK_ERROR:"NetworkError",MEDIA_ERROR:"MediaError",OTHER_ERROR:"OtherError"},r={NETWORK_EXCEPTION:S.LoaderErrors.EXCEPTION,NETWORK_STATUS_CODE_INVALID:S.LoaderErrors.HTTP_STATUS_CODE_INVALID,NETWORK_TIMEOUT:S.LoaderErrors.CONNECTING_TIMEOUT,NETWORK_UNRECOVERABLE_EARLY_EOF:S.LoaderErrors.UNRECOVERABLE_EARLY_EOF,MEDIA_MSE_ERROR:"MediaMSEError",MEDIA_FORMAT_ERROR:b.default.FORMAT_ERROR,MEDIA_FORMAT_UNSUPPORTED:b.default.FORMAT_UNSUPPORTED,MEDIA_CODEC_UNSUPPORTED:b.default.CODEC_UNSUPPORTED}},"./src/player/player-events.js":function(T,w,_){_.r(w);var S={ERROR:"error",LOADING_COMPLETE:"loading_complete",RECOVERED_EARLY_EOF:"recovered_early_eof",MEDIA_INFO:"media_info",METADATA_ARRIVED:"metadata_arrived",SCRIPTDATA_ARRIVED:"scriptdata_arrived",STATISTICS_INFO:"statistics_info"};w.default=S},"./src/remux/aac-silent.js":function(T,w,_){_.r(w);var S=function(){function b(){}return b.getSilentFrame=function(u,r){if(u==="mp4a.40.2"){if(r===1)return new Uint8Array([0,200,0,128,35,128]);if(r===2)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(r===3)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(r===4)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(r===5)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(r===6)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224])}else{if(r===1)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(r===2)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(r===3)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94])}return null},b}();w.default=S},"./src/remux/mp4-generator.js":function(T,w,_){_.r(w);var S=function(){function b(){}return b.init=function(){b.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],mvex:[],mvhd:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[],".mp3":[]};for(var u in b.types)b.types.hasOwnProperty(u)&&(b.types[u]=[u.charCodeAt(0),u.charCodeAt(1),u.charCodeAt(2),u.charCodeAt(3)]);var r=b.constants={};r.FTYP=new Uint8Array([105,115,111,109,0,0,0,1,105,115,111,109,97,118,99,49]),r.STSD_PREFIX=new Uint8Array([0,0,0,0,0,0,0,1]),r.STTS=new Uint8Array([0,0,0,0,0,0,0,0]),r.STSC=r.STCO=r.STTS,r.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),r.HDLR_VIDEO=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),r.HDLR_AUDIO=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]),r.DREF=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),r.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),r.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0])},b.box=function(u){for(var r=8,A=null,l=Array.prototype.slice.call(arguments,1),p=l.length,y=0;y<p;y++)r+=l[y].byteLength;A=new Uint8Array(r),A[0]=r>>>24&255,A[1]=r>>>16&255,A[2]=r>>>8&255,A[3]=r&255,A.set(u,4);for(var d=8,y=0;y<p;y++)A.set(l[y],d),d+=l[y].byteLength;return A},b.generateInitSegment=function(u){var r=b.box(b.types.ftyp,b.constants.FTYP),A=b.moov(u),l=new Uint8Array(r.byteLength+A.byteLength);return l.set(r,0),l.set(A,r.byteLength),l},b.moov=function(u){var r=b.mvhd(u.timescale,u.duration),A=b.trak(u),l=b.mvex(u);return b.box(b.types.moov,r,A,l)},b.mvhd=function(u,r){return b.box(b.types.mvhd,new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,u>>>24&255,u>>>16&255,u>>>8&255,u&255,r>>>24&255,r>>>16&255,r>>>8&255,r&255,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]))},b.trak=function(u){return b.box(b.types.trak,b.tkhd(u),b.mdia(u))},b.tkhd=function(u){var r=u.id,A=u.duration,l=u.presentWidth,p=u.presentHeight;return b.box(b.types.tkhd,new Uint8Array([0,0,0,7,0,0,0,0,0,0,0,0,r>>>24&255,r>>>16&255,r>>>8&255,r&255,0,0,0,0,A>>>24&255,A>>>16&255,A>>>8&255,A&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,l>>>8&255,l&255,0,0,p>>>8&255,p&255,0,0]))},b.mdia=function(u){return b.box(b.types.mdia,b.mdhd(u),b.hdlr(u),b.minf(u))},b.mdhd=function(u){var r=u.timescale,A=u.duration;return b.box(b.types.mdhd,new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,r>>>24&255,r>>>16&255,r>>>8&255,r&255,A>>>24&255,A>>>16&255,A>>>8&255,A&255,85,196,0,0]))},b.hdlr=function(u){var r=null;return u.type==="audio"?r=b.constants.HDLR_AUDIO:r=b.constants.HDLR_VIDEO,b.box(b.types.hdlr,r)},b.minf=function(u){var r=null;return u.type==="audio"?r=b.box(b.types.smhd,b.constants.SMHD):r=b.box(b.types.vmhd,b.constants.VMHD),b.box(b.types.minf,r,b.dinf(),b.stbl(u))},b.dinf=function(){var u=b.box(b.types.dinf,b.box(b.types.dref,b.constants.DREF));return u},b.stbl=function(u){var r=b.box(b.types.stbl,b.stsd(u),b.box(b.types.stts,b.constants.STTS),b.box(b.types.stsc,b.constants.STSC),b.box(b.types.stsz,b.constants.STSZ),b.box(b.types.stco,b.constants.STCO));return r},b.stsd=function(u){return u.type==="audio"?u.codec==="mp3"?b.box(b.types.stsd,b.constants.STSD_PREFIX,b.mp3(u)):b.box(b.types.stsd,b.constants.STSD_PREFIX,b.mp4a(u)):b.box(b.types.stsd,b.constants.STSD_PREFIX,b.avc1(u))},b.mp3=function(u){var r=u.channelCount,A=u.audioSampleRate,l=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,r,0,16,0,0,0,0,A>>>8&255,A&255,0,0]);return b.box(b.types[".mp3"],l)},b.mp4a=function(u){var r=u.channelCount,A=u.audioSampleRate,l=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,r,0,16,0,0,0,0,A>>>8&255,A&255,0,0]);return b.box(b.types.mp4a,l,b.esds(u))},b.esds=function(u){var r=u.config||[],A=r.length,l=new Uint8Array([0,0,0,0,3,23+A,0,1,0,4,15+A,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([A]).concat(r).concat([6,1,2]));return b.box(b.types.esds,l)},b.avc1=function(u){var r=u.avcc,A=u.codecWidth,l=u.codecHeight,p=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,A>>>8&255,A&255,l>>>8&255,l&255,0,72,0,0,0,72,0,0,0,0,0,0,0,1,10,120,113,113,47,102,108,118,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,255,255]);return b.box(b.types.avc1,p,b.box(b.types.avcC,r))},b.mvex=function(u){return b.box(b.types.mvex,b.trex(u))},b.trex=function(u){var r=u.id,A=new Uint8Array([0,0,0,0,r>>>24&255,r>>>16&255,r>>>8&255,r&255,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]);return b.box(b.types.trex,A)},b.moof=function(u,r){return b.box(b.types.moof,b.mfhd(u.sequenceNumber),b.traf(u,r))},b.mfhd=function(u){var r=new Uint8Array([0,0,0,0,u>>>24&255,u>>>16&255,u>>>8&255,u&255]);return b.box(b.types.mfhd,r)},b.traf=function(u,r){var A=u.id,l=b.box(b.types.tfhd,new Uint8Array([0,0,0,0,A>>>24&255,A>>>16&255,A>>>8&255,A&255])),p=b.box(b.types.tfdt,new Uint8Array([0,0,0,0,r>>>24&255,r>>>16&255,r>>>8&255,r&255])),y=b.sdtp(u),d=b.trun(u,y.byteLength+16+16+8+16+8+8);return b.box(b.types.traf,l,p,d,y)},b.sdtp=function(u){for(var r=u.samples||[],A=r.length,l=new Uint8Array(4+A),p=0;p<A;p++){var y=r[p].flags;l[p+4]=y.isLeading<<6|y.dependsOn<<4|y.isDependedOn<<2|y.hasRedundancy}return b.box(b.types.sdtp,l)},b.trun=function(u,r){var A=u.samples||[],l=A.length,p=12+16*l,y=new Uint8Array(p);r+=8+p,y.set([0,0,15,1,l>>>24&255,l>>>16&255,l>>>8&255,l&255,r>>>24&255,r>>>16&255,r>>>8&255,r&255],0);for(var d=0;d<l;d++){var o=A[d].duration,h=A[d].size,f=A[d].flags,s=A[d].cts;y.set([o>>>24&255,o>>>16&255,o>>>8&255,o&255,h>>>24&255,h>>>16&255,h>>>8&255,h&255,f.isLeading<<2|f.dependsOn,f.isDependedOn<<6|f.hasRedundancy<<4|f.isNonSync,0,0,s>>>24&255,s>>>16&255,s>>>8&255,s&255],12+16*d)}return b.box(b.types.trun,y)},b.mdat=function(u){return b.box(b.types.mdat,u)},b}();S.init(),w.default=S},"./src/remux/mp4-remuxer.js":function(T,w,_){_.r(w);var S=_("./src/utils/logger.js"),b=_("./src/remux/mp4-generator.js"),u=_("./src/remux/aac-silent.js"),r=_("./src/utils/browser.js"),A=_("./src/core/media-segment-info.js"),l=_("./src/utils/exception.js"),p=function(){function y(d){this.TAG="MP4Remuxer",this._config=d,this._isLive=d.isLive===!0,this._dtsBase=-1,this._dtsBaseInited=!1,this._audioDtsBase=1/0,this._videoDtsBase=1/0,this._audioNextDts=void 0,this._videoNextDts=void 0,this._audioStashedLastSample=null,this._videoStashedLastSample=null,this._audioMeta=null,this._videoMeta=null,this._audioSegmentInfoList=new A.MediaSegmentInfoList("audio"),this._videoSegmentInfoList=new A.MediaSegmentInfoList("video"),this._onInitSegment=null,this._onMediaSegment=null,this._forceFirstIDR=!!(r.default.chrome&&(r.default.version.major<50||r.default.version.major===50&&r.default.version.build<2661)),this._fillSilentAfterSeek=r.default.msedge||r.default.msie,this._mp3UseMpegAudio=!r.default.firefox,this._fillAudioTimestampGap=this._config.fixAudioTimestampGap}return y.prototype.destroy=function(){this._dtsBase=-1,this._dtsBaseInited=!1,this._audioMeta=null,this._videoMeta=null,this._audioSegmentInfoList.clear(),this._audioSegmentInfoList=null,this._videoSegmentInfoList.clear(),this._videoSegmentInfoList=null,this._onInitSegment=null,this._onMediaSegment=null},y.prototype.bindDataSource=function(d){return d.onDataAvailable=this.remux.bind(this),d.onTrackMetadata=this._onTrackMetadataReceived.bind(this),this},Object.defineProperty(y.prototype,"onInitSegment",{get:function(){return this._onInitSegment},set:function(d){this._onInitSegment=d},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"onMediaSegment",{get:function(){return this._onMediaSegment},set:function(d){this._onMediaSegment=d},enumerable:!1,configurable:!0}),y.prototype.insertDiscontinuity=function(){this._audioNextDts=this._videoNextDts=void 0},y.prototype.seek=function(d){this._audioStashedLastSample=null,this._videoStashedLastSample=null,this._videoSegmentInfoList.clear(),this._audioSegmentInfoList.clear()},y.prototype.remux=function(d,o){if(!this._onMediaSegment)throw new l.IllegalStateException("MP4Remuxer: onMediaSegment callback must be specificed!");this._dtsBaseInited||this._calculateDtsBase(d,o),this._remuxVideo(o),this._remuxAudio(d)},y.prototype._onTrackMetadataReceived=function(d,o){var h=null,f="mp4",s=o.codec;if(d==="audio")this._audioMeta=o,o.codec==="mp3"&&this._mp3UseMpegAudio?(f="mpeg",s="",h=new Uint8Array):h=b.default.generateInitSegment(o);else if(d==="video")this._videoMeta=o,h=b.default.generateInitSegment(o);else return;if(!this._onInitSegment)throw new l.IllegalStateException("MP4Remuxer: onInitSegment callback must be specified!");this._onInitSegment(d,{type:d,data:h.buffer,codec:s,container:d+"/"+f,mediaDuration:o.duration})},y.prototype._calculateDtsBase=function(d,o){this._dtsBaseInited||(d.samples&&d.samples.length&&(this._audioDtsBase=d.samples[0].dts),o.samples&&o.samples.length&&(this._videoDtsBase=o.samples[0].dts),this._dtsBase=Math.min(this._audioDtsBase,this._videoDtsBase),this._dtsBaseInited=!0)},y.prototype.flushStashedSamples=function(){var d=this._videoStashedLastSample,o=this._audioStashedLastSample,h={type:"video",id:1,sequenceNumber:0,samples:[],length:0};d!=null&&(h.samples.push(d),h.length=d.length);var f={type:"audio",id:2,sequenceNumber:0,samples:[],length:0};o!=null&&(f.samples.push(o),f.length=o.length),this._videoStashedLastSample=null,this._audioStashedLastSample=null,this._remuxVideo(h,!0),this._remuxAudio(f,!0)},y.prototype._remuxAudio=function(d,o){if(this._audioMeta!=null){var h=d,f=h.samples,s=void 0,g=-1,E=-1,C=this._audioMeta.refSampleDuration,R=this._audioMeta.codec==="mp3"&&this._mp3UseMpegAudio,L=this._dtsBaseInited&&this._audioNextDts===void 0,O=!1;if(!(!f||f.length===0)&&!(f.length===1&&!o)){var k=0,I=null,M=0;R?(k=0,M=h.length):(k=8,M=8+h.length);var U=null;if(f.length>1&&(U=f.pop(),M-=U.length),this._audioStashedLastSample!=null){var j=this._audioStashedLastSample;this._audioStashedLastSample=null,f.unshift(j),M+=j.length}U!=null&&(this._audioStashedLastSample=U);var Y=f[0].dts-this._dtsBase;if(this._audioNextDts)s=Y-this._audioNextDts;else if(this._audioSegmentInfoList.isEmpty())s=0,this._fillSilentAfterSeek&&!this._videoSegmentInfoList.isEmpty()&&this._audioMeta.originalCodec!=="mp3"&&(O=!0);else{var ne=this._audioSegmentInfoList.getLastSampleBefore(Y);if(ne!=null){var N=Y-(ne.originalDts+ne.duration);N<=3&&(N=0);var te=ne.dts+ne.duration+N;s=Y-te}else s=0}if(O){var ie=Y-s,pe=this._videoSegmentInfoList.getLastSegmentBefore(Y);if(pe!=null&&pe.beginDts<ie){var J=u.default.getSilentFrame(this._audioMeta.originalCodec,this._audioMeta.channelCount);if(J){var oe=pe.beginDts,Se=ie-pe.beginDts;S.default.v(this.TAG,"InsertPrefixSilentAudio: dts: "+oe+", duration: "+Se),f.unshift({unit:J,dts:oe,pts:oe}),M+=J.byteLength}}else O=!1}for(var se=[],de=0;de<f.length;de++){var j=f[de],Ae=j.unit,me=j.dts-this._dtsBase,oe=me,xe=!1,Le=null,le=0;if(!(me<-.001)){if(this._audioMeta.codec!=="mp3"){var Z=me,_e=3;if(this._audioNextDts&&(Z=this._audioNextDts),s=me-Z,s<=-_e*C){S.default.w(this.TAG,"Dropping 1 audio frame (originalDts: "+me+" ms ,curRefDts: "+Z+" ms)  due to dtsCorrection: "+s+" ms overlap.");continue}else if(s>=_e*C&&this._fillAudioTimestampGap&&!r.default.safari){xe=!0;var we=Math.floor(s/C);S.default.w(this.TAG,`Large audio timestamp gap detected, may cause AV sync to drift. Silent frames will be generated to avoid unsync.
`+("originalDts: "+me+" ms, curRefDts: "+Z+" ms, ")+("dtsCorrection: "+Math.round(s)+" ms, generate: "+we+" frames")),oe=Math.floor(Z),le=Math.floor(Z+C)-oe;var J=u.default.getSilentFrame(this._audioMeta.originalCodec,this._audioMeta.channelCount);J==null&&(S.default.w(this.TAG,"Unable to generate silent frame for "+(this._audioMeta.originalCodec+" with "+this._audioMeta.channelCount+" channels, repeat last frame")),J=Ae),Le=[];for(var Pe=0;Pe<we;Pe++){Z=Z+C;var Ie=Math.floor(Z),Te=Math.floor(Z+C)-Ie,Ne={dts:Ie,pts:Ie,cts:0,unit:J,size:J.byteLength,duration:Te,originalDts:me,flags:{isLeading:0,dependsOn:1,isDependedOn:0,hasRedundancy:0}};Le.push(Ne),M+=Ne.size}this._audioNextDts=Z+C}else oe=Math.floor(Z),le=Math.floor(Z+C)-oe,this._audioNextDts=Z+C}else{if(oe=me-s,de!==f.length-1){var ze=f[de+1].dts-this._dtsBase-s;le=ze-oe}else if(U!=null){var ze=U.dts-this._dtsBase-s;le=ze-oe}else se.length>=1?le=se[se.length-1].duration:le=Math.floor(C);this._audioNextDts=oe+le}g===-1&&(g=oe),se.push({dts:oe,pts:oe,cts:0,unit:j.unit,size:j.unit.byteLength,duration:le,originalDts:me,flags:{isLeading:0,dependsOn:1,isDependedOn:0,hasRedundancy:0}}),xe&&se.push.apply(se,Le)}}if(se.length===0){h.samples=[],h.length=0;return}R?I=new Uint8Array(M):(I=new Uint8Array(M),I[0]=M>>>24&255,I[1]=M>>>16&255,I[2]=M>>>8&255,I[3]=M&255,I.set(b.default.types.mdat,4));for(var de=0;de<se.length;de++){var Ae=se[de].unit;I.set(Ae,k),k+=Ae.byteLength}var Ee=se[se.length-1];E=Ee.dts+Ee.duration;var ke=new A.MediaSegmentInfo;ke.beginDts=g,ke.endDts=E,ke.beginPts=g,ke.endPts=E,ke.originalBeginDts=se[0].originalDts,ke.originalEndDts=Ee.originalDts+Ee.duration,ke.firstSample=new A.SampleInfo(se[0].dts,se[0].pts,se[0].duration,se[0].originalDts,!1),ke.lastSample=new A.SampleInfo(Ee.dts,Ee.pts,Ee.duration,Ee.originalDts,!1),this._isLive||this._audioSegmentInfoList.append(ke),h.samples=se,h.sequenceNumber++;var Fe=null;R?Fe=new Uint8Array:Fe=b.default.moof(h,g),h.samples=[],h.length=0;var He={type:"audio",data:this._mergeBoxes(Fe,I).buffer,sampleCount:se.length,info:ke};R&&L&&(He.timestampOffset=g),this._onMediaSegment("audio",He)}}},y.prototype._remuxVideo=function(d,o){if(this._videoMeta!=null){var h=d,f=h.samples,s=void 0,g=-1,E=-1,C=-1,R=-1;if(!(!f||f.length===0)&&!(f.length===1&&!o)){var L=8,O=null,k=8+d.length,I=null;if(f.length>1&&(I=f.pop(),k-=I.length),this._videoStashedLastSample!=null){var M=this._videoStashedLastSample;this._videoStashedLastSample=null,f.unshift(M),k+=M.length}I!=null&&(this._videoStashedLastSample=I);var U=f[0].dts-this._dtsBase;if(this._videoNextDts)s=U-this._videoNextDts;else if(this._videoSegmentInfoList.isEmpty())s=0;else{var j=this._videoSegmentInfoList.getLastSampleBefore(U);if(j!=null){var Y=U-(j.originalDts+j.duration);Y<=3&&(Y=0);var ne=j.dts+j.duration+Y;s=U-ne}else s=0}for(var N=new A.MediaSegmentInfo,te=[],ie=0;ie<f.length;ie++){var M=f[ie],pe=M.dts-this._dtsBase,J=M.isKeyframe,oe=pe-s,Se=M.cts,se=oe+Se;g===-1&&(g=oe,C=se);var de=0;if(ie!==f.length-1){var Ae=f[ie+1].dts-this._dtsBase-s;de=Ae-oe}else if(I!=null){var Ae=I.dts-this._dtsBase-s;de=Ae-oe}else te.length>=1?de=te[te.length-1].duration:de=Math.floor(this._videoMeta.refSampleDuration);if(J){var me=new A.SampleInfo(oe,se,de,M.dts,!0);me.fileposition=M.fileposition,N.appendSyncPoint(me)}te.push({dts:oe,pts:se,cts:Se,units:M.units,size:M.length,isKeyframe:J,duration:de,originalDts:pe,flags:{isLeading:0,dependsOn:J?2:1,isDependedOn:J?1:0,hasRedundancy:0,isNonSync:J?0:1}})}O=new Uint8Array(k),O[0]=k>>>24&255,O[1]=k>>>16&255,O[2]=k>>>8&255,O[3]=k&255,O.set(b.default.types.mdat,4);for(var ie=0;ie<te.length;ie++)for(var xe=te[ie].units;xe.length;){var Le=xe.shift(),le=Le.data;O.set(le,L),L+=le.byteLength}var Z=te[te.length-1];if(E=Z.dts+Z.duration,R=Z.pts+Z.duration,this._videoNextDts=E,N.beginDts=g,N.endDts=E,N.beginPts=C,N.endPts=R,N.originalBeginDts=te[0].originalDts,N.originalEndDts=Z.originalDts+Z.duration,N.firstSample=new A.SampleInfo(te[0].dts,te[0].pts,te[0].duration,te[0].originalDts,te[0].isKeyframe),N.lastSample=new A.SampleInfo(Z.dts,Z.pts,Z.duration,Z.originalDts,Z.isKeyframe),this._isLive||this._videoSegmentInfoList.append(N),h.samples=te,h.sequenceNumber++,this._forceFirstIDR){var _e=te[0].flags;_e.dependsOn=2,_e.isNonSync=0}var we=b.default.moof(h,g);h.samples=[],h.length=0,this._onMediaSegment("video",{type:"video",data:this._mergeBoxes(we,O).buffer,sampleCount:te.length,info:N})}}},y.prototype._mergeBoxes=function(d,o){var h=new Uint8Array(d.byteLength+o.byteLength);return h.set(d,0),h.set(o,d.byteLength),h},y}();w.default=p},"./src/utils/browser.js":function(T,w,_){_.r(w);var S={};function b(){var u=self.navigator.userAgent.toLowerCase(),r=/(edge)\/([\w.]+)/.exec(u)||/(opr)[\/]([\w.]+)/.exec(u)||/(chrome)[ \/]([\w.]+)/.exec(u)||/(iemobile)[\/]([\w.]+)/.exec(u)||/(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(u)||/(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(u)||/(webkit)[ \/]([\w.]+)/.exec(u)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(u)||/(msie) ([\w.]+)/.exec(u)||u.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(u)||u.indexOf("compatible")<0&&/(firefox)[ \/]([\w.]+)/.exec(u)||[],A=/(ipad)/.exec(u)||/(ipod)/.exec(u)||/(windows phone)/.exec(u)||/(iphone)/.exec(u)||/(kindle)/.exec(u)||/(android)/.exec(u)||/(windows)/.exec(u)||/(mac)/.exec(u)||/(linux)/.exec(u)||/(cros)/.exec(u)||[],l={browser:r[5]||r[3]||r[1]||"",version:r[2]||r[4]||"0",majorVersion:r[4]||r[2]||"0",platform:A[0]||""},p={};if(l.browser){p[l.browser]=!0;var y=l.majorVersion.split(".");p.version={major:parseInt(l.majorVersion,10),string:l.version},y.length>1&&(p.version.minor=parseInt(y[1],10)),y.length>2&&(p.version.build=parseInt(y[2],10))}if(l.platform&&(p[l.platform]=!0),(p.chrome||p.opr||p.safari)&&(p.webkit=!0),p.rv||p.iemobile){p.rv&&delete p.rv;var d="msie";l.browser=d,p[d]=!0}if(p.edge){delete p.edge;var o="msedge";l.browser=o,p[o]=!0}if(p.opr){var h="opera";l.browser=h,p[h]=!0}if(p.safari&&p.android){var f="android";l.browser=f,p[f]=!0}p.name=l.browser,p.platform=l.platform;for(var s in S)S.hasOwnProperty(s)&&delete S[s];Object.assign(S,p)}b(),w.default=S},"./src/utils/exception.js":function(T,w,_){_.r(w),_.d(w,{RuntimeException:function(){return b},IllegalStateException:function(){return u},InvalidArgumentException:function(){return r},NotImplementedException:function(){return A}});var S=function(){var l=function(p,y){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,o){d.__proto__=o}||function(d,o){for(var h in o)Object.prototype.hasOwnProperty.call(o,h)&&(d[h]=o[h])},l(p,y)};return function(p,y){if(typeof y!="function"&&y!==null)throw new TypeError("Class extends value "+String(y)+" is not a constructor or null");l(p,y);function d(){this.constructor=p}p.prototype=y===null?Object.create(y):(d.prototype=y.prototype,new d)}}(),b=function(){function l(p){this._message=p}return Object.defineProperty(l.prototype,"name",{get:function(){return"RuntimeException"},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"message",{get:function(){return this._message},enumerable:!1,configurable:!0}),l.prototype.toString=function(){return this.name+": "+this.message},l}(),u=function(l){S(p,l);function p(y){return l.call(this,y)||this}return Object.defineProperty(p.prototype,"name",{get:function(){return"IllegalStateException"},enumerable:!1,configurable:!0}),p}(b),r=function(l){S(p,l);function p(y){return l.call(this,y)||this}return Object.defineProperty(p.prototype,"name",{get:function(){return"InvalidArgumentException"},enumerable:!1,configurable:!0}),p}(b),A=function(l){S(p,l);function p(y){return l.call(this,y)||this}return Object.defineProperty(p.prototype,"name",{get:function(){return"NotImplementedException"},enumerable:!1,configurable:!0}),p}(b)},"./src/utils/logger.js":function(T,w,_){_.r(w);var S=_("./node_modules/events/events.js"),b=_.n(S),u=function(){function r(){}return r.e=function(A,l){(!A||r.FORCE_GLOBAL_TAG)&&(A=r.GLOBAL_TAG);var p="["+A+"] > "+l;r.ENABLE_CALLBACK&&r.emitter.emit("log","error",p),r.ENABLE_ERROR&&(console.error?console.error(p):console.warn?console.warn(p):console.log(p))},r.i=function(A,l){(!A||r.FORCE_GLOBAL_TAG)&&(A=r.GLOBAL_TAG);var p="["+A+"] > "+l;r.ENABLE_CALLBACK&&r.emitter.emit("log","info",p),r.ENABLE_INFO&&(console.info?console.info(p):console.log(p))},r.w=function(A,l){(!A||r.FORCE_GLOBAL_TAG)&&(A=r.GLOBAL_TAG);var p="["+A+"] > "+l;r.ENABLE_CALLBACK&&r.emitter.emit("log","warn",p),r.ENABLE_WARN&&(console.warn?console.warn(p):console.log(p))},r.d=function(A,l){(!A||r.FORCE_GLOBAL_TAG)&&(A=r.GLOBAL_TAG);var p="["+A+"] > "+l;r.ENABLE_CALLBACK&&r.emitter.emit("log","debug",p),r.ENABLE_DEBUG&&(console.debug?console.debug(p):console.log(p))},r.v=function(A,l){(!A||r.FORCE_GLOBAL_TAG)&&(A=r.GLOBAL_TAG);var p="["+A+"] > "+l;r.ENABLE_CALLBACK&&r.emitter.emit("log","verbose",p),r.ENABLE_VERBOSE&&console.log(p)},r}();u.GLOBAL_TAG="flv.js",u.FORCE_GLOBAL_TAG=!1,u.ENABLE_ERROR=!0,u.ENABLE_INFO=!0,u.ENABLE_WARN=!0,u.ENABLE_DEBUG=!0,u.ENABLE_VERBOSE=!0,u.ENABLE_CALLBACK=!1,u.emitter=new(b()),w.default=u},"./src/utils/logging-control.js":function(T,w,_){_.r(w);var S=_("./node_modules/events/events.js"),b=_.n(S),u=_("./src/utils/logger.js"),r=function(){function A(){}return Object.defineProperty(A,"forceGlobalTag",{get:function(){return u.default.FORCE_GLOBAL_TAG},set:function(l){u.default.FORCE_GLOBAL_TAG=l,A._notifyChange()},enumerable:!1,configurable:!0}),Object.defineProperty(A,"globalTag",{get:function(){return u.default.GLOBAL_TAG},set:function(l){u.default.GLOBAL_TAG=l,A._notifyChange()},enumerable:!1,configurable:!0}),Object.defineProperty(A,"enableAll",{get:function(){return u.default.ENABLE_VERBOSE&&u.default.ENABLE_DEBUG&&u.default.ENABLE_INFO&&u.default.ENABLE_WARN&&u.default.ENABLE_ERROR},set:function(l){u.default.ENABLE_VERBOSE=l,u.default.ENABLE_DEBUG=l,u.default.ENABLE_INFO=l,u.default.ENABLE_WARN=l,u.default.ENABLE_ERROR=l,A._notifyChange()},enumerable:!1,configurable:!0}),Object.defineProperty(A,"enableDebug",{get:function(){return u.default.ENABLE_DEBUG},set:function(l){u.default.ENABLE_DEBUG=l,A._notifyChange()},enumerable:!1,configurable:!0}),Object.defineProperty(A,"enableVerbose",{get:function(){return u.default.ENABLE_VERBOSE},set:function(l){u.default.ENABLE_VERBOSE=l,A._notifyChange()},enumerable:!1,configurable:!0}),Object.defineProperty(A,"enableInfo",{get:function(){return u.default.ENABLE_INFO},set:function(l){u.default.ENABLE_INFO=l,A._notifyChange()},enumerable:!1,configurable:!0}),Object.defineProperty(A,"enableWarn",{get:function(){return u.default.ENABLE_WARN},set:function(l){u.default.ENABLE_WARN=l,A._notifyChange()},enumerable:!1,configurable:!0}),Object.defineProperty(A,"enableError",{get:function(){return u.default.ENABLE_ERROR},set:function(l){u.default.ENABLE_ERROR=l,A._notifyChange()},enumerable:!1,configurable:!0}),A.getConfig=function(){return{globalTag:u.default.GLOBAL_TAG,forceGlobalTag:u.default.FORCE_GLOBAL_TAG,enableVerbose:u.default.ENABLE_VERBOSE,enableDebug:u.default.ENABLE_DEBUG,enableInfo:u.default.ENABLE_INFO,enableWarn:u.default.ENABLE_WARN,enableError:u.default.ENABLE_ERROR,enableCallback:u.default.ENABLE_CALLBACK}},A.applyConfig=function(l){u.default.GLOBAL_TAG=l.globalTag,u.default.FORCE_GLOBAL_TAG=l.forceGlobalTag,u.default.ENABLE_VERBOSE=l.enableVerbose,u.default.ENABLE_DEBUG=l.enableDebug,u.default.ENABLE_INFO=l.enableInfo,u.default.ENABLE_WARN=l.enableWarn,u.default.ENABLE_ERROR=l.enableError,u.default.ENABLE_CALLBACK=l.enableCallback},A._notifyChange=function(){var l=A.emitter;if(l.listenerCount("change")>0){var p=A.getConfig();l.emit("change",p)}},A.registerListener=function(l){A.emitter.addListener("change",l)},A.removeListener=function(l){A.emitter.removeListener("change",l)},A.addLogListener=function(l){u.default.emitter.addListener("log",l),u.default.emitter.listenerCount("log")>0&&(u.default.ENABLE_CALLBACK=!0,A._notifyChange())},A.removeLogListener=function(l){u.default.emitter.removeListener("log",l),u.default.emitter.listenerCount("log")===0&&(u.default.ENABLE_CALLBACK=!1,A._notifyChange())},A}();r.emitter=new(b()),w.default=r},"./src/utils/polyfill.js":function(T,w,_){_.r(w);var S=function(){function b(){}return b.install=function(){Object.setPrototypeOf=Object.setPrototypeOf||function(u,r){return u.__proto__=r,u},Object.assign=Object.assign||function(u){if(u==null)throw new TypeError("Cannot convert undefined or null to object");for(var r=Object(u),A=1;A<arguments.length;A++){var l=arguments[A];if(l!=null)for(var p in l)l.hasOwnProperty(p)&&(r[p]=l[p])}return r},typeof self.Promise!="function"&&_("./node_modules/es6-promise/dist/es6-promise.js").polyfill()},b}();S.install(),w.default=S},"./src/utils/utf8-conv.js":function(T,w,_){_.r(w);function S(u,r,A){var l=u;if(r+A<l.length){for(;A--;)if((l[++r]&192)!==128)return!1;return!0}else return!1}function b(u){for(var r=[],A=u,l=0,p=u.length;l<p;){if(A[l]<128){r.push(String.fromCharCode(A[l])),++l;continue}else if(!(A[l]<192)){if(A[l]<224){if(S(A,l,1)){var y=(A[l]&31)<<6|A[l+1]&63;if(y>=128){r.push(String.fromCharCode(y&65535)),l+=2;continue}}}else if(A[l]<240){if(S(A,l,2)){var y=(A[l]&15)<<12|(A[l+1]&63)<<6|A[l+2]&63;if(y>=2048&&(y&63488)!==55296){r.push(String.fromCharCode(y&65535)),l+=3;continue}}}else if(A[l]<248&&S(A,l,3)){var y=(A[l]&7)<<18|(A[l+1]&63)<<12|(A[l+2]&63)<<6|A[l+3]&63;if(y>65536&&y<1114112){y-=65536,r.push(String.fromCharCode(y>>>10|55296)),r.push(String.fromCharCode(y&1023|56320)),l+=4;continue}}}r.push("�"),++l}return r.join("")}w.default=b}},Oe={};function W(T){var w=Oe[T];if(w!==void 0)return w.exports;var _=Oe[T]={exports:{}};return Me[T].call(_.exports,_,_.exports,W),_.exports}W.m=Me,function(){W.n=function(T){var w=T&&T.__esModule?function(){return T.default}:function(){return T};return W.d(w,{a:w}),w}}(),function(){W.d=function(T,w){for(var _ in w)W.o(w,_)&&!W.o(T,_)&&Object.defineProperty(T,_,{enumerable:!0,get:w[_]})}}(),function(){W.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}()}(),function(){W.o=function(T,w){return Object.prototype.hasOwnProperty.call(T,w)}}(),function(){W.r=function(T){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(T,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(T,"__esModule",{value:!0})}}();var Ue=W("./src/index.js");return Ue}()})}(an)),an.exports}var ai=ri();const Wn=Kn(ai),ii={class:"w-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 py-2 mb-4 text-center font-semibold text-lg shadow-md rounded-lg h-12"},oi={class:"grid gap-4 sm:grid-cols-2 lg:grid-cols-4"},si={class:"text-2xl font-bold"},li={class:"text-xs text-muted-foreground"},di={class:"text-2xl font-bold"},pi={class:"text-xs text-muted-foreground"},ui={class:"text-2xl font-bold"},ci={class:"text-xs text-muted-foreground"},fi={class:"text-2xl font-bold"},hi={class:"text-xs text-muted-foreground"},mi={class:"grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-4 mt-4"},yi={class:"flex items-center justify-between font-semibold text-xl"},Ai=Qa({__name:"index",setup(Ot){const st=Xe(null),Me=Xe(["发现车辆8,直行","发现异常行为,请注意","系统检测到新的违规行为"]),Oe=Xe(["根据车辆（ID：45）的路径分析，发现该车辆存在压实线变道行为，请尽快处理。","根据行人（ID：259）的路径分析，发现该行人存在横越栏杆的行为。"]),W=Xe({title:"服务器压力",content:"极大",bottom:"正常"}),Ue=Xe({title:"检测准确率",content:"75%",bottom:"75%"}),T=Xe({title:"检测分类类别",content:"7",bottom:""}),w=Xe({title:"❄️ 发现非法行为",content:"2",bottom:"0"}),_=Va();function S(){st.value&&Wn.isSupported()&&new ni({container:st.value,live:!0,autoplay:!0,video:{url:_.getSource,type:"flv",customType:{flv(b){const u=Wn.createPlayer({type:"flv",url:b.src});u.attachMediaElement(b),u.load()}}}})}return Xa(()=>{S()}),Za(()=>_.getSource,()=>{S()}),(b,u)=>{const r=Fn("marquee"),A=Fn("CardTitle");return Rt(),Ja(Ya,{title:"城市智慧交通电子眼",description:"DeepSeek StrongSort 双AI赋能"},{default:fe(()=>[ce("div",ii,[he(r,{scrollamount:"10",class:"text-white font-bold text-lg"},{default:fe(()=>[(Rt(!0),qt(jn,null,Un(Me.value,(l,p)=>(Rt(),qt("span",{key:p},[ot(" 📢 "+Be(l)+" 📢 ",1),u[0]||(u[0]=ce("span",{class:"mx-16"},null,-1))]))),128))]),_:1})]),ce("div",oi,[he(ve(rt),null,{default:fe(()=>[he(ve(at),{class:"flex flex-row items-center justify-between pb-2 space-y-0"},{default:fe(()=>[he(A,{class:"text-lg font-medium"},{default:fe(()=>[ot(Be(W.value.title),1)]),_:1}),u[1]||(u[1]=ce("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",class:"w-4 h-4 text-muted-foreground"},[ce("path",{d:"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"})],-1))]),_:1}),he(ve(it),null,{default:fe(()=>[ce("div",si,Be(W.value.content),1),ce("p",li,Be(W.value.bottom),1)]),_:1})]),_:1}),he(ve(rt),null,{default:fe(()=>[he(ve(at),{class:"flex flex-row items-center justify-between pb-2 space-y-0"},{default:fe(()=>[he(A,{class:"text-lg font-medium"},{default:fe(()=>[ot(Be(Ue.value.title),1)]),_:1}),u[2]||(u[2]=ce("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",class:"w-4 h-4 text-muted-foreground"},[ce("path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}),ce("circle",{cx:"9",cy:"7",r:"4"}),ce("path",{d:"M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"})],-1))]),_:1}),he(ve(it),null,{default:fe(()=>[ce("div",di,Be(Ue.value.content),1),ce("p",pi,Be(Ue.value.bottom),1)]),_:1})]),_:1}),he(ve(rt),null,{default:fe(()=>[he(ve(at),{class:"flex flex-row items-center justify-between pb-2 space-y-0"},{default:fe(()=>[he(A,{class:"text-lg font-medium"},{default:fe(()=>[ot(Be(T.value.title),1)]),_:1}),u[3]||(u[3]=ce("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",class:"w-4 h-4 text-muted-foreground"},[ce("rect",{width:"20",height:"14",x:"2",y:"5",rx:"2"}),ce("path",{d:"M2 10h20"})],-1))]),_:1}),he(ve(it),null,{default:fe(()=>[ce("div",ui,Be(T.value.content),1),ce("p",ci,Be(T.value.bottom),1)]),_:1})]),_:1}),he(ve(rt),null,{default:fe(()=>[he(ve(at),{class:"flex flex-row items-center justify-between pb-2 space-y-0"},{default:fe(()=>[he(A,{class:"text-lg font-medium"},{default:fe(()=>[ot(Be(w.value.title),1)]),_:1}),u[4]||(u[4]=ce("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",class:"w-4 h-4 text-muted-foreground"},[ce("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"})],-1))]),_:1}),he(ve(it),null,{default:fe(()=>[ce("div",fi,Be(w.value.content),1),ce("p",hi,Be(w.value.bottom),1)]),_:1})]),_:1})]),ce("div",mi,[he(ve(rt),{class:"relative w-full p-4"},{default:fe(()=>[he(ve(at),{class:"border-b border-gray-300 mb-4"},{default:fe(()=>[ce("div",yi,[u[5]||(u[5]=ot(" 实时直播 ")),he(Ha)])]),_:1}),he(ve(it),null,{default:fe(()=>[ce("div",{ref_key:"dplayerContainer",ref:st,class:"w-full h-60 rounded-md shadow-md bg-gray-200"},null,512)]),_:1})]),_:1}),he(ve(rt),{class:"w-auto max-w-full p-4"},{default:fe(()=>[he(ve(at),{class:"border-b border-gray-300 mb-4"},{default:fe(()=>u[6]||(u[6]=[ce("div",{class:"text-xl font-semibold"}," 公告栏: ",-1)])),_:1}),he(ve(it),{class:"break-words"},{default:fe(()=>[(Rt(!0),qt(jn,null,Un(Oe.value,(l,p)=>(Rt(),qt("div",{key:p,class:"mb-2"},Be(l),1))),128))]),_:1})]),_:1})])]),_:1})}}}),Si=$a(Ai,[["__scopeId","data-v-85dbd2b1"]]);export{Si as default};
