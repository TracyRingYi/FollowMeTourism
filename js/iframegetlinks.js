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
<<<<<<< HEAD
function initlinks(){
=======
function initLinks(){
>>>>>>> c9f3826b043a4913f507bbac7ca8f488c5125fa5
	var links=document.getElementsByTagName("a");
	var ifrbox=document.getElementById("g-contentPC");
	ifrbox.setAttribute('src','home.html');
	var ifrname=ifrbox.name;
	for(var i=0;i<links.length;i++){
		links[i].setAttribute("target",ifrname);
<<<<<<< HEAD
		//点击，重置状态，设立当前高亮
		/*point[i].onclick=function(){
            for(var j=0;j<point.length;j++){
				point[j].className='';
		    }
			if(i!=0){
				this.className='m-aper';
			}
	    }*/
	}
	for(var j=0;j<links.length;j++){
		links[j].onclick=function(e){
			links = Array.prototype.slice.call(links,0);
			links.forEach(function(el){
				el.className="";
			})
			if(j!=0){
				this.className="m-aper";
			}
			// return false;
		}

        //比对href与iframe.src的区别，若为ture，高亮，false，重置状态
		/*var links=point[j].href;
		var lcsrc=ifrbox.contentWindow.location.href; 
		if(lcsrc.indexOf(links) != -1&&j!=0){
			point[j].className='m-aper';
		}else{
			point[j].className='';
		}*/
	}
}
addLoadEvent(initlinks);
=======
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
>>>>>>> c9f3826b043a4913f507bbac7ca8f488c5125fa5
