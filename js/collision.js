
   function collision(){
          for(var i=0;i<15;i++){
            for(var j=0;j<bull.length;j++){
               var l=calLength2(allfish[i].x,allfish[i].y,bull[j].x,bull[j].y);
               if (l<900) {allfish[i].alive=false;}
            }
        }
         
    }