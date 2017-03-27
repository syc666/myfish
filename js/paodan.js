var paodanObj=function(){
	this.x;
	this.y;
	this.paodan=[];
    this.alive;
    this.jiaodu=0;
    this.yuwang=[];
    this.wangTimer=0;
    this.wangCount=1;
    this.danTimer=0;
    this.danCount=1;
}

paodanObj.prototype.init=function(){
    this.x=canWidth/2.05;
	this.y=canHeight/1.09;
    for(var i=1;i<5;i++){
	this.paodan[i]=new Image();
 	this.paodan[i].src="./img2/bullet2000"+i+".png";
    }
    for(var i=1;i<12;i++){
 	this.yuwang[i]=new Image();
 	this.yuwang[i].src="./img/net5000"+i+".png";
    }
     this.alive=true;

}
paodanObj.prototype.draw=function(){
    //炮弹打中变成渔网
    if (this.alive==false) {
        this.wangTimer+=deltaTime;
        if (this.wangTimer>100) {
            this.wangCount=(this.wangCount)%11+1;
            this.wangTimer=0;
        }
    	ctx2.save();
       ctx2.drawImage(this.yuwang[this.wangCount],this.x-100,this.y-100);
       ctx2.restore();
       if (this.wangCount==11) {this.alive=true;this.x=-100;this.y=-100;}
      
    }else{
    //每个炮弹随他们的固定角度射出
     this.danTimer+=deltaTime;
     if (this.danTimer>50) {
         this.danCount=(this.danCount)%4+1;
        this.danTimer=0;
    }
	ctx2.save();
	ctx2.translate(this.x, this.y);
    ctx2.rotate(-this.jiaodu-Math.PI*1.5);
    ctx2.drawImage(this.paodan[this.danCount],-this.paodan[2].width*0.5,-this.paodan[2].height*0.5);
    ctx2.restore();
    this.x+=0.5*deltaTime*Math.cos(this.jiaodu);
    this.y-=0.5*deltaTime*Math.sin(this.jiaodu);
   }
   
}



