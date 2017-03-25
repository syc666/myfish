var seaweedObj=function(){
	this.x;
	this.y;
	this.seaweedPic=[];
	this.seaTimer=0;
	this.seaCount=0;
	this.CLASS=[];

}

seaweedObj.prototype.init=function(a){
    this.x=0;
    this.y=0;
    this.CLASS=['dongtai12000','dongtai44000','动态21000','动态24000','动态25000','动态26000'];

   for(var i=0;i<9;i++){
    	this.seaweedPic[i]=new Image();
    	this.seaweedPic[i].src="./img2/"+this.CLASS[a]+i+".png";
    }
  
}

seaweedObj.prototype.draw = function(a){
    switch(a){
    	case 0:this.x=100;this.y=400;break;
    	case 1:this.x=240;this.y=400;break;
    	case 2:this.x=600,this.y=500;break;
    	case 3:this.x=460,this.y=400;break;
    	case 4:this.x=70,this.y=400;break;
    	case 5:this.x=400;this.y=500;break;
    	default:this.x=0;this.y=0;
    }
	this.seaTimer+=deltaTime;
	if (this.seaTimer>200) {
		this.seaCount=(this.seaCount+1)%9;
		this.seaTimer=0;
	}

   ctx1.save();
   ctx1.translate(this.x,this.y);
   ctx1.drawImage(this.seaweedPic[this.seaCount],0,0);
   ctx1.restore();

}