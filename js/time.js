var t=document.getElementsByTagName('strong')[0];
function timeon(){
	var timer=setInterval(function(){
		t.innerHTML--;
		if (t.innerHTML<0) {
		score.gameover=true;
	   t.innerHTML=0;
       clearInterval(timer);
        }
	},1000)
	
}
timeon();

