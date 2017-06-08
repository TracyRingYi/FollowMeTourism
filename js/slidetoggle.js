$(document).ready(function(){
	var _width=$(window).width();
	if(_width<=639){
		$(".flip").click(function(){
			var index=$(".flip").index(this);
			$(".panel").eq(index).slideToggle("slow");
		});
    }
});