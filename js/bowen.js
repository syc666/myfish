var bowenObj=function(){
	this.x;
	this.y;
	this.bowenPic=[];
	this.boTimer=0;
	this.boCount=1;
}

bowenObj.prototype.init=function(){
	this.x=0;
	this.y=0;
	for(var i=1;i<4;i++){
       this.bowenPic[i]=new Image();
       this.bowenPic[i].src="./img2/bowen1000"+i+".png";
	}
}

bowenObj.prototype.draw=function(){
	this.x=0;
	this.y=300;
	this.boTimer+=deltaTime;
	if(this.boTimer>200){
		this.boCount=(this.boCount)%3+1;
		this.boTimer=0;
	}
	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.drawImage(this.bowenPic[this.boCount],0,0);
	ctx1.restore();
}