function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!='function'){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload;
			func();
		}
	}
}
function changeSrc(){
	var links=document.getElementsByTagName('a');
	var ifrbox=document.getElementById("g-contentPC");
	var ifrname=ifrbox.name;
	for (var i = 0;i<links.length ; i++) {
		links[i].setAttribute("target",ifrname);
		if(i=0){
			ifrdoc.setAttribute('src','index.html');
		}else{
		links[i].onclick=function(){
			return showIfr(this);
		}
	}
	}
}
function showIfr(whichifr){
	var source=whichifr.getAttribute('href');
	var ifrdoc=document.getElementById('g-contentPC');
	ifrdoc.setAttribute('src','source');
	return false;
}
addLoadEvent(changeSrc);