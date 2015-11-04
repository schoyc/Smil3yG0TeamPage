var main = function() {

$('#employee-list').animate({
     scrollTop: $('#employee-list li:nth-child(2)').position().top
}, 'slow');
// $('#scroll-me').click(function(){

// 	$(this).hide();
// });

}

$(document).ready(main);