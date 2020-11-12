import popupStyle from './popup.css';
interface Ipopup {
    title: string;
    width?: string;
    height?: string;
    pos?: string;
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
    constructor(private settings: Ipopup) {
        this.settings = Object.assign({
            width: '880px',
            height: '556px',
            pos: 'center',
            mask: true,
            content: () => {}
        }, this.settings);
        this.init();
    };

    // 初始化
    init() {
        this.template();
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

        // 遮罩
        if (this.settings.mask) {

        }
    };

    // 事件
    handle() {};
}

export default popup;