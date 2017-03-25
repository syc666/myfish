var paocheObj=function(){
	this.x;
	this.y;
	this.paocheyu=[];
  this.angle;
}

paocheObj.prototype.init=function(){
	this.x=canWidth/2;
	this.y=canHeight/1.1;
    for (var i = 1; i < 8; i++) {
       this.paocheyu[i] = new Image();
       this.paocheyu[i].src = "./img/shot5000" + i + ".png";
    }
    this.angle=0;
    
}

paocheObj.prototype.draw=function(){
  //随着鼠标转动
    var deltaY = my - this.y;
    var deltaX = mx - this.x;
    var beta = Math.atan2(deltaY, deltaX)+Math.PI*0.5;
    this.angle = lerpAngle(beta, this.angle, 0.6);
    paocheTimer = 0;
   	ctx2.save();
  	ctx2.translate(this.x, this.y);
	  ctx2.rotate(this.angle);
    ctx2.drawImage(this.paocheyu[paocheCount],-this.paocheyu[4].width*0.5,-this.paocheyu[4].width);
    ctx2.restore();
}

