'use strict';

let utils = (function() {
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

  return {
    debounce,
    throttle
  }
})()

export default utils;