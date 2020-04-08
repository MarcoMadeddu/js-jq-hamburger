// Hamburger menu: mostrare / nascondere il menu principale (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).

var hamburger = $ (".header-right a");
var menu = $(".hamburger-menu");
var close = $(".hamburger-menu .close");

hamburger.click (function(){

  console.log("click menu");
  menu.addClass("active");

})

close.click (function(){

  console.log("clik exit");
  menu.removeClass("active");

})
