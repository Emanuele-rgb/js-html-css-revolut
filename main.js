var dropDown = $('.with-dropdown');
var dropLinks = dropDown.children('a');
var drop = dropDown.children('.dropdown')


dropLinks.click(function(){

  var actualMenu = $(this).next('.dropdown')

  drop.not(actualMenu).hide();

  actualMenu.toggle();

});
