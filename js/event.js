import utils from './utils.js';

/*首页文章卡片翻转*/
$('.font-post').each(function(index) {

  const handle = () => {
    $(this).parent('.card-post').removeClass().addClass('card-post rotatepost')
  }
  
  $(this).on('click', utils.debounce(handle, 600))
})

$('.back-post').each(function(index) {

  const handle = () => {
    $(this).parent('.card-post').removeClass().addClass('card-post')
  }
  $(this).on('click', utils.debounce(handle, 600))
})


/*移动端隐藏菜单*/
$('#menu').on('touchstart', function() {
  var e=window.event || event;
    if(e.stopPropagation){    
        e.stopPropagation();   
    }else{     
        e.cancelBubble = true;   
    }
  $(this).next().addClass('menu-list-show')
})

$('.menu-list a').on('touchstart', function() {
  var e=window.event || event;
  if(e.stopPropagation){    
      e.stopPropagation();   
  }else{     
      e.cancelBubble = true;   
  }
})

$('body').on('touchstart', function() {
  $('.menu-list').removeClass('menu-list-show')
})
