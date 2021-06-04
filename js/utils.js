'use strict';

// 防抖
function debounce(fn, delay) {
  let timer = null;
  return function() {
    let ctx = this;
    let args = arguments;
    let later = function() {
      timer = null;
      fn.apply(ctx, args);
    }
    clearTimeout(timer);
    timer = setTimeout(later, delay);
  }
}

// 限流
function throttle(fn, delay) {
  let timer = null;
  let preTimer = new Date()
  return function() {
    let ctx = this;
    let args = arguments;
    let curTimer = new Date();
    clearTimeout(timer);
    if(curTimer - preTimer >= delay) {
      preTimer = curTimer;
      setTimeout(later, delay);
    }
  }
}

//获取网页滚动距离的方法
function getPageScroll() {
  let x, y;
  if (window.pageXOffset){//查看有无pageXOffset属性：IE9以及IE9以上的浏览器
      x = window.pageXOffset;
      y = window.pageYOffset;
  }else if (document.compatMode ==  "BackCompact"){//混杂（怪异）模式下浏览器
      x = document.body.scrollLeft;
      y = document.body.scrollTop;
  }else {//标准模式下浏览器
      x = document.documentElement.scrollLeft;
      y = document.documentElement.scrollTop;
  }
  return {x, y}
}

export {
  debounce,
  throttle,
  getPageScroll
}