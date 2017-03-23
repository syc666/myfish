
var allfishObj=function(){
  this.x;
  this.y;
  this.onefish=[];
  this.speed;
  this.fishTimer=0;
  this.fishCount=0;
  this.alive;
  this.CLASS;
}

allfishObj.prototype.init=function(){
    this.x=canWidth/0.7;
    this.y=(canHeight-"300")*Math.random();
	 this.speed = Math.random() * 0.017 + 0.003; //[0.003,0.02];
    this.CLASS=Math.floor(9*Math.random());
    for (var i = 0; i < 8; i++) {
       this.onefish[i] = new Image();
       this.onefish[i].src = "./img/fish"+this.CLASS+"000" + i + ".png";
    }
   this.alive=true;
}

allfishObj.prototype.draw=function(){

	  this.x -= this.speed * 7 * deltaTime;
    this.fishTimer += deltaTime+Math.floor(this.speed*1000);
    if (this.fishTimer > 300) {
       this.fishCount = (this.fishCount + 1) % 8;
       this.fishTimer = 0;
    }
    if (this.x<-this.onefish[5].width||this.alive==false) {
      this.alive=true;
       this.x=canWidth*(Math.random()*2+1);
       this.y=(canHeight-"300")*Math.random();
       this.CLASS=Math.floor(8*Math.random());
    }
    ctx1.save();
    	ctx1.drawImage(this.onefish[this.fishCount],this.x,this.y);
    ctx1.restore();
    
  
}



