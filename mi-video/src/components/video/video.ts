let { default: videoStyle } = require('./video.css');

interface Ivideo {
    src: string;
    elem: Element;
    autoplay?: boolean;
}
interface Icomponent {
    tempContainer: HTMLElement;
    init: () => void;
    template: () => void;
    handle: () => void;
}

class Video implements Icomponent {
    tempContainer: HTMLElement;
    constructor(private settings: Ivideo) {
        this.settings = Object.assign({
            width: '100%',
            height: '100%',
            autoplay: true,
        }, this.settings);
        this.init();
    }
    init () {
        this.template();
        this.handle();
    };
    template () {
        this.tempContainer = document.createElement('div');
        this.tempContainer.className = videoStyle['video-container'];
        this.tempContainer.innerHTML = `
            <video class="${videoStyle['video']}" src="${this.settings.src}" autoplay="true"></video>
            <div class="${videoStyle['video-controls']}">
                <div class="${videoStyle['video-progress']}">
                    <div class="${videoStyle['video-progress-suc']}"></div>
                    <div class="${videoStyle['video-progress-now']}"></div>
                    <div class="${videoStyle['video-progress-bar']}"></div>
                </div>
                <div class="${videoStyle['video-play']}">
                    <i class="iconfont icon-bofang"></i>
                </div>
                <div class="${videoStyle['video-time']}">
                    <span>00:00</span>/<span>00:00</span>
                </div>
                <div class="${videoStyle['video-volume']}">
                    <i class="iconfont icon-laba1"></i>
                    <div class="${videoStyle['volume-progress']}">
                        <div class="${videoStyle['volume-progress-now']}"></div>
                        <div class="${videoStyle['volume-progress-bar']}"></div>
                    </div>
                </div>
                <div class="${videoStyle['video-full']}">
                    <i class="iconfont icon-quanping"></i>
                </div>
            </div>
        `;
        this.settings.elem.appendChild(this.tempContainer);
    };
    handle () {
        const videoContent: HTMLVideoElement = document.querySelector(`.${videoStyle['video']}`);
        const videoPlay: HTMLElement = document.querySelector(`.${videoStyle['video-play']} i.iconfont`);
        const videoTime: NodeListOf<Element> = document.querySelectorAll(`.${videoStyle['video-time']} span`);
        const videoFull: HTMLElement = document.querySelector(`.${videoStyle['video-full']}`);
        const videoProgressSuc: HTMLElement = document.querySelector(`.${videoStyle['video-progress-suc']}`);
        const videoProgressNow: HTMLElement = document.querySelector(`.${videoStyle['video-progress-now']}`);
        const videoProgressBar: HTMLElement = document.querySelector(`.${videoStyle['video-progress-bar']}`);
        let timer = null;
        // 视频是否加载完毕
        videoContent.addEventListener('canplay', (): void => {
            videoTime[1].innerHTML = toTimeString(videoContent.duration);
        });
        // 视频播放事件
        videoContent.addEventListener('play', (): void => {
            videoPlay.className = 'iconfont icon-zantingtingzhi';
            timer = setInterval(() => {
                playing(videoContent.currentTime);
            }, 1000);
        });
        // 视频暂停事件
        videoContent.addEventListener('pause', (): void => {
            videoPlay.className = 'iconfont icon-bofang';
            if (timer) clearInterval(timer);
        });
        // 点击播放/暂停
        videoPlay.addEventListener('click', (): void => {
            if (videoContent.paused) {
                videoContent.play();
            } else {
                videoContent.pause();
            }
        });
        // 点击全屏
        videoFull.addEventListener('click', (): void => {
            videoContent.requestFullscreen();
        });
        // 视频播放中
        const playing = (seconds: number): void => {
            videoTime[0].innerHTML = toTimeString(seconds)
            const nowScale = videoContent.currentTime / videoContent.duration;
            const sucScale = videoContent.buffered.end(0) / videoContent.duration;
            videoProgressNow.style.width = nowScale * 100 + '%';
            videoProgressSuc.style.width = sucScale * 100 + '%';
            videoProgressBar.style.left = nowScale * 100 + '%';
        };
        // 秒 to 分:秒
        const toTimeString = (seconds: number): string => {
            if (!seconds) return '00:00';
            const secondsTotal: number = Math.round(seconds);
            const minutes: number = Math.floor(secondsTotal/60);
            const second: number = secondsTotal % 60;
            return `${prevZero(minutes)}:${prevZero(second)}`;
        };
        // 前置0
        const prevZero = (num: number): string => {
            if (num > 9) return `${num}`;
            return `0${num}`;
        };
    };
}

function video(options: Ivideo) {
    return new Video(options);
}

export default video;