const popupStyle = require('./popup.css').default;

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
            width: '600px',
            height: '500px',
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
        console.log('popupStyle', popupStyle)
        this.tempContainer.className = popupStyle.popup;
        this.tempContainer.innerHTML = `
            Hello
        `;
        document.body.appendChild(this.tempContainer);
    };

    // 事件
    handle() {};
}

export default popup;