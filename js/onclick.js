 can2.onclick=function(e){
    if (!score.gameover) {
      //点击炮车图片的参数循环一次
      var timer=setInterval(function(){
        if (paocheCount<7) {
         paocheCount ++;} 
      },100)    
      if (paocheCount!=1) {clearInterval(timer);}
      paocheCount=1;
     
     //点击是获取坐标点，然后计算出和子弹固定射出点的角度，创建一个带有固定角度子弹对象
     var bbox = can2.getBoundingClientRect();
     var dx =  e.clientX - bbox.left * (can2.width/bbox.width);
     var dy = e.clientY - bbox.top * (can2.height/bbox.height);
     var jiaodu=Math.atan2(dx-407,dy-560)-Math.PI/2; 
     ajiaodu.push(jiaodu);
  
     var bu=new paodanObj();
     bull.push(bu);
     bu.init();
     bu.draw();

     setTimeout(function(){
      if (bu.alive==false) { score.scoreNum+=50;}
     },1000)
     
  }
}

var play=document.getElementById('play');
play.onclick=function(){
  
    location.reload();
  
}

