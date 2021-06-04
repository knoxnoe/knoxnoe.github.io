import { getPageScroll } from './utils.js'

window.onscroll = function() {
  let {y} = getPageScroll();
  let inialTop = 550
  // 500和inialTop的阈值是否添加配置
  if(y <= 500) {
    $("#joker-toc").css("top", inialTop - y)
  }
}
