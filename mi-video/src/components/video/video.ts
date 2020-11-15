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
                    <div class="${videoStyle['video-progress-now']}"></div>
                    <div class="${videoStyle['video-progress-suc']}"></div>
                    <div class="${videoStyle['video-progress-bar']}"></div>
                </div>
                <div class="${videoStyle['video-play']}">
                    <i class="iconfont icon-bofang"></i>
                </div>
                <div class="${videoStyle['video-time']}">
                    <span>00:00</span> / <span>00:00</span>
                </div>
                <div class="${videoStyle['video-volume']}">
                    <i class="iconfont icon-laba"></i>
                    <div class="${videoStyle['volume-progress']}">
                        <div class="${videoStyle['volume-progress-now']}"></div>
                        <div class="${videoStyle['volume-progress-suc']}"></div>
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
        
    };
}

function video(options: Ivideo) {
    return new Video(options);
}

export default video;