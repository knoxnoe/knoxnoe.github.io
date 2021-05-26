import utils from './utils.js';

(function() {
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
})()