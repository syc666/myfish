var goldObj=function(){
  this.x;
  this.y;
  this.goldPic=[];
  this.goldTimer=0;
  this.goldCount=0;
}

goldObj.prototype.init=function(){
  this.x=0;
  this.y=0;
  for(var i=0;i<10;i++){
  	this.goldPic[i]=new Image();
  	this.goldPic[i].src="./img2/gold_0000"+i+".png";
  }
}

goldObj.prototype.draw=function(){
	this.x=700;
	this.y=520;
   this.goldTimer+=deltaTime;
   if (this.goldTimer>100) {
   	this.goldCount=(this.goldCount+1)%10;
   	this.goldTimer=0;
   }
   ctx2.save();
   ctx2.translate(this.x,this.y);
   ctx2.drawImage(this.goldPic[this.goldCount],0,0);
   ctx2.restore();
}