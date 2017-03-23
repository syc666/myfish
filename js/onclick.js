
    can2.onclick=function(e){
      var timer=setInterval(function(){
        if (paocheCount<7) {
         paocheCount ++;} 
      },100)    
      if (paocheCount!=1) {clearInterval(timer);}
      paocheCount=1;

     var bbox = can2.getBoundingClientRect();
     var dx =  e.clientX - bbox.left * (can2.width/bbox.width);
     var dy = e.clientY - bbox.top * (can2.height/bbox.height);
     var jiaodu=Math.atan2(dx-390,dy-535)-Math.PI/2; 
     ajiaodu.push(jiaodu);

     var bu=new paodanObj();
     bull.push(bu);
     bu.init();
     bu.draw();
     // bull[bull.length-1].timer=setInterval('bull['+(bull.length-1)+'].run()',50);
     // bull[bull.length-1].x-=canWidth;
     // if (800<paodan.x||paodan.x<0||paodan.y<0||paodan.y>600) {
     // 	clearInterval(timer);
     //    paodan.x=canWidth/2.05;
     //    paodan.y=canHeight/1.12;
     // }

     console.log(bull[bull.length-1])
     console.log(allfish[1].alive)
    }

