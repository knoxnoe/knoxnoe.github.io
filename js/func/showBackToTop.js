function showBackToTop(scrolly) {
  if(scrolly > 500) {
    $('#joker-back-to-top').css("display", "block")
  }else {
    $('#joker-back-to-top').css("display", "none")
  }
}

export default showBackToTop;