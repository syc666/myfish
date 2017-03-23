var paodanObj=function(){
	this.x;
	this.y;
	this.paodan;

}

paodanObj.prototype.init=function(){
    this.x=canWidth/2.05;
	this.y=canHeight/1.12;
	this.paodan=new Image();
 	this.paodan.src="./img/blue.png";
    
}
paodanObj.prototype.draw=function(){

	for(var i=0;i<bull.length;i++){
	bull[i].x+=deltaTime*Math.cos(ajiaodu[i]);
	bull[i].y-=deltaTime*Math.sin(ajiaodu[i]);
	ctx2.save();
	ctx2.translate(bull[i].x, bull[i].y);
    ctx2.drawImage(this.paodan,0,0);
    ctx2.restore();
    }
     
}

paodanObj.prototype.run=function(){
    
}

