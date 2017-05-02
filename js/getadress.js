function getAddress(){
	var adebox=document.getElementsByTagName('option');
	var addres=adebox.lastchild.nodeValue;
	var titles=document.getElementsByTagName('h2')
	for (var i = 0; i <adebox.length; i++) {
		adebox[i].onclick=function(){
			for (var j = 0;j<titles.length ; j++) {
				var tlechi=titles[j].lastchild.nodeValue;
				if(addres[i]==tlechi){
					titles[j].pre
				}
			}
		}
	}
}