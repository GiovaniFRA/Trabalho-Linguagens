let cowboy = document.getElementById("cowboy").style;
let posi=50;
let cont=0;
document.addEventListener("keydown",tecla);

function tecla(event){
    let Tec=event.keyCode;
   
    if(Tec==40 && posi<400){
     posi=posi+120;
     console.log(posi);
     cowboy.top=posi+"px";
    }

    if(Tec==38 && posi>50){
        posi=posi-120;
        console.log(posi);
        cowboy.top=posi+"px";
       }

    if(Tec==32){
            function shot(){
                document.getElementById("bullet1").id="bullet";
                document.getElementById("bullet").style.top=posi+40+"px";
               
            }
            shot();

            

            function shotE(){document.getElementById("bullet").id="bullet1";}
            setTimeout(shotE,500);
            cont++
       }

       if(cont==1){
        function newTab(){window.location.assign("");}
        setTimeout(newTab,1000);
        }

        if(cont==1 && posi==170){
            function newTab(){window.location.assign("");}
            setTimeout(newTab,1000);
        }

        if(cont==1 && posi==290){
            function newTab(){window.location.assign("");}
            setTimeout(newTab,1000);
            }
        
        if(cont==1 && posi==410){
                function newTab(){window.location.assign("");}
                setTimeout(newTab,1000);
                }

        
      
    
}





