function tabcon(){
	var tabs=document.getElementByClassName('cm-box').getElementsByTagName('li');
	var cons=document.getElementByClassName('cm-tabcon').childNodes;
for(var i=0;i<tabs.length;i++){
	tabs[i].onclick=function(){
		change(this);
	}
}
}
function change(obj){
	for(var i=0;i<tabs.length;i++){
		if(tabs[i]==obj){
			tabs[i].className='cu-cidna cm-ati';
			cons[i].className='cm-aper';
		}
		else{
			tabs[i].className='cu-cidnav';
			cons[i].className='';
		}
	}
}