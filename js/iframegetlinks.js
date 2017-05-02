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
function initLinks(){
	var links=document.getElementsByTagName("a");
	var ifrbox=document.getElementById("g-contentPC");
	ifrbox.setAttribute('src','home.html');
	var ifrname=ifrbox.name;
	for(var i=0;i<links.length;i++){
		links[i].setAttribute("target",ifrname);
	}
	for(var j=0;j<links.length;j++){
		links[j].onclick=function(){
	if(j!=0){
		links[j].className="m-aper";
	}
	return false;
}
}
}

addLoadEvent(initLinks);
