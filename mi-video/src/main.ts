import './main.css'
import './assets/iconfont/iconfont.css'
import popup from './components/popup/popup'

const listItem = document.querySelectorAll('#videoList li');

listItem.forEach(item => {
    item.addEventListener('click', function() {
        const videoSrc = this.dataset.src;
        const videoTitle = this.dataset.title;
        console.log('videoSrc', videoSrc)
        console.log('videoTitle', videoTitle)
        
        popup({
            title: '提示'
        })
    })
})