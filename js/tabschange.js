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
function getChildNodes(ele){
	var childArr=ele.childNodes;
	childArrTem=[];
	for(var i=0;i<childArr.length;i++){
		if(childArr[i].nodeType==1){
			childArrTem.push(childArr[i]);
		}
	}
	return childArrTem;
}
function changeTabs(){
	var tabbox=document.getElementById('cm-box');
	var conbox=document.getElementById('cm-tabcon');
	var tabs=tabbox.getElementsByTagName('li');
	var cons=getChildNodes(conbox);
for(var i=0;i<tabs.length;i++){
	tabs[i].index=i;
	tabs[i].onclick=function(){
		for(var j=0;j<tabs.length;j++){
			tabs[j].className='cu-cidnav';
			cons[j].className='';
		}
		this.className='cu-cidnav cm-ati';
		cons[this.index].className='cm-aper';
	}
}
}
addLoadEvent(changeTabs);