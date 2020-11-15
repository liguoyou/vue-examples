import './main.css';
import './assets/iconfont/iconfont.css';
import popup from './components/popup/popup';
import video from './components/video/video';

const listItem = document.querySelectorAll('#videoList li');

listItem.forEach(item => {
    item.addEventListener('click', function() {
        const videoSrc = this.dataset.src;
        const videoTitle = this.dataset.title;
        
        popup({
            title: videoTitle,
            width: '500px',
            height: '300px',
            content: (content)=> {
                video({
                    src: videoSrc,
                    elem: content,
                });
            },
        });
    });
});