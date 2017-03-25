
var allfishObj=function(){
  this.x;
  this.y;
  this.onefish=[];
  this.speed;
  this.fishTimer=0;
  this.fishCount=0;
  this.alive;
  this.CLASS;
  this.angle;
}

allfishObj.prototype.init=function(){
   var j=0;
   var x=0;
   var y=0;
   //鱼的生成位置
    for(;j<100;j++){
      x=Math.random()*1200-200;
      y=Math.random()*1200-300;
      if (calLength2(x,y,400,300)>250000) {
        this.x=x;
        this.y=y;
        j=101;
      }
    }
    //随机角度
    this.angle=Math.random()*Math.PI*2;
    //随机速度
	  this.speed = Math.random() * 0.017 + 0.003; //[0.003,0.02];
    //8种鱼随机生成一条
    this.CLASS=Math.floor(9*Math.random());
    for (var i = 0; i < 8; i++) {
       this.onefish[i] = new Image();
       this.onefish[i].src = "./img/fish"+this.CLASS+"000" + i + ".png";
    }
   this.alive=true;
}

allfishObj.prototype.draw=function(){
  //死了被子弹打中或越界）鱼停留原地几秒后，重新初始化init（）；
    if (this.x<-200||this.x>1000||this.y<-300||this.y>900||this.alive==false) {
       this.fishTimer+=deltaTime;
        if (this.fishTimer>200) {
            this.fishCount=(this.fishCount)%7+1;
            this.fishTimer=0;
        }
       ctx1.save();
       ctx1.drawImage(this.onefish[this.fishCount],this.x,this.y);
       ctx1.restore();
       if (this.fishCount==7) {
          this.init();
          this.CLASS=Math.floor(8*Math.random());   
       }
    }else{
      this.x+=this.speed*10*deltaTime*Math.cos(this.angle);
      this.y+=this.speed*10*deltaTime*Math.sin(this.angle);
      this.fishTimer += deltaTime+Math.floor(this.speed*4000);
      if (this.fishTimer > 300) {
       this.fishCount = (this.fishCount + 1) % 8;
       this.fishTimer = 0;
      }
  
      ctx1.save();
      ctx1.translate(this.x,this.y);
      ctx1.rotate(this.angle+Math.PI);
      // 鱼的头部为坐标点
      ctx1.drawImage(this.onefish[this.fishCount],-20,-this.onefish[3].height*0.5);
      ctx1.restore();
    
    }

}

