let cowboy = document.getElementById("cowboy").style;
let posi=40;
let cont=0;
document.addEventListener("keydown",tecla);

function tecla(event){
    let Tec=event.keyCode;
   
    if(Tec==40 && posi<80){
     posi=posi+10;
     console.log(posi);
     cowboy.top=posi+"%";
    }

    if(Tec==38 && posi>40){
        posi=posi-10;
        console.log(posi);
        cowboy.top=posi+"%";
       }

    if(Tec==32){
            function shot(){
                document.getElementById("bullet1").id="bullet";
                document.getElementById("bullet").style.top=posi+8+"%";
               
            }
            shot();
            
            
            cont++
       }

       if(cont==1 && posi==40){
        function newTab(){window.location.assign("Pag1.html");}
        setTimeout(newTab,1300);
        }
       if(cont==1 && posi==50){
        function newTab(){window.location.assign("Pag2.html");}
        setTimeout(newTab,1300);
        }

        if(cont==1 && posi==60){
            function newTab(){window.location.assign("Pag3.html");}
            setTimeout(newTab,1300);
        }

        if(cont==1 && posi==70){
            function newTab(){window.location.assign("Pag4.html");}
            setTimeout(newTab,1300);
            }
        
        if(cont==1 && posi==80){
                function newTab(){window.location.assign("Pag5.html");}
                setTimeout(newTab,1300);
                }

     
      
    
}





