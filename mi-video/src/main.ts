import './main.css'
import './assets/iconfont/iconfont.css'
import popup from './components/popup/popup'

const listItem = document.querySelectorAll('#videoList li');

listItem.forEach(item => {
    item.addEventListener('click', function() {
        const videoSrc = this.dataset.src;
        const videoTitle = this.dataset.title;
        
        popup({
            title: '提示',
            width: '500px',
            height: '300px',
        })
    })
})