import popupStyle from './popup.css';
interface Ipopup {
    title: string;
    width?: string;
    height?: string;
    mask?: boolean;
    content?: () => void;
}

interface Icomponent {
    tempContainer: HTMLElement;
    init: () => void;
    template: () => void;
    handle: () => void;
}

function popup(options: Ipopup) {
    return new Popup(options);
}

class Popup implements Icomponent {
    tempContainer;
    maskElement;
    constructor(private settings: Ipopup) {
        this.settings = Object.assign({
            width: '880px',
            height: '556px',
            mask: true,
            content: () => {}
        }, this.settings);
        this.init();
    };

    // 初始化
    init() {
        // 创建弹框
        this.template();
        // 遮罩
        this.settings.mask && this.createMask();
    };

    // 创建模板
    template() {
        this.tempContainer = document.createElement('div');
        this.tempContainer.className = popupStyle['popup'];
        this.tempContainer.style.width = this.settings.width;
        this.tempContainer.style.height = this.settings.height;
        this.tempContainer.innerHTML = `
            <div class="${popupStyle['popup-title']}">
                <h3>${this.settings.title}</h3>
                <i class="iconfont icon-guanbi"></i>
            </div>
            <div class="${popupStyle['popup-content']}">
            
            </div>
        `;
        document.body.appendChild(this.tempContainer);
    };

    // 事件
    handle() {};

    // 创建遮罩层
    createMask() {
        this.maskElement = document.createElement('div');
        this.maskElement.className = popupStyle['popup-mask'];
        document.body.appendChild(this.maskElement);
    };
}

export default popup;