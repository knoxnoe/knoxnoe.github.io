import { getPageScroll } from '../utils.js'

function setToc(scrolly) {
  let inialTop = 550
  // 500和inialTop的阈值是否添加配置
  if(scrolly <= 500) {
    $("#joker-toc").css("top", inialTop - scrolly)
  }else {
    $("#joker-toc").css("top", 50)
  }
}

function initToc() {
  let {y} = getPageScroll()
  setToc(y);
}

export {
  setToc,
  initToc
}
