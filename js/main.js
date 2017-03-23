var can1;
var can2;
var ctx1;
var ctx2;
var lastTime = Date.now();
var deltaTime = 0;
// var bg_img=new Image();
var canWidth;
var canHeight;
var mx;
var my;
var paoche;
var allfish=[];
var paodan;
var z=1;
var paocheTimer=0;
var paocheCount=1;
var bull=[];
var ajiaodu=[];

    
game();
function game() {
	init();
	gameloop();
}

function init(){
	can1=document.getElementById('canvas1');
	can2=document.getElementById('canvas2');
	ctx1=can1.getContext("2d");
	ctx2=can2.getContext("2d");
    canWidth=can1.width;
    canHeight=can1.height;
     mx=canWidth/2;
    my=canHeight/2;
    can2.addEventListener("mousemove", onMouseMove, false);

    paoche=new paocheObj();
    paoche.init();
   for(var i=0;i<15;i++){
     allfish[i]=new allfishObj();
     allfish[i].init();
   }
    paodan=new paodanObj();
    paodan.init();

}

function gameloop(){
	 window.requestAnimationFrame(gameloop);
	 ctx1.clearRect(0, 0, canWidth,canHeight);

     for(var i=0;i<15;i++){
        allfish[i].draw();
     }
     
	 ctx2.clearRect(0, 0, canWidth,canHeight);

     paodan.draw();
     paoche.draw();
   collision();
      // 序列帧变化
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;

}

function onMouseMove(e) {
    mx = e.offsetX;
    my = e.offsetY;
    
}

  