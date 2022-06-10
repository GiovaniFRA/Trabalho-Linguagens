let cowboy = document.getElementById("cowboy").style;
let posi=50;
document.addEventListener("keydown",tecla);

function tecla(event){
    let Tec=event.keyCode;
   
    if(Tec==40 && posi<450){
     posi=posi+120;
     console.log(posi);
     cowboy.top=posi+"px";
    }
    if(Tec==38 && posi>50){
        posi=posi-120;
        console.log(posi);
        cowboy.top=posi+"px";
       }
}





