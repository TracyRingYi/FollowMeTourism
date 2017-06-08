$(document).ready(function(){
	var _width=$(window).width();
	if(_width>=640){
		$(".u-list a li").hover(function(){
			$(this).children(".u-note").stop(true,true).slideDown();},
			function(){
				$(this).children(".u-note").stop(true,true).slideUp();})
			}
		})
	


    
