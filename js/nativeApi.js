import { setToc } from './func/toc.js'
import showBackToTop from './func/showBackToTop.js'
import { getPageScroll } from './utils.js'

window.onscroll = function() {
  let {y} = getPageScroll()
  console.log(y)
  setToc(y)
  showBackToTop(y)
}