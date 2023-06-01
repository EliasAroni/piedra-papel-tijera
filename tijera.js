let piedra= document.querySelector(".piedra");
let tijera= document.querySelector(".tijera");
let papel= document.querySelector(".papel");
let display= document.querySelector(".imagen");
let empezar= document.querySelector(".jugar");
let displayP=document.querySelector(".imagenP")


piedra.addEventListener('click',()=>{
	display.innerHTML=	piedra.innerHTML;
})
tijera.addEventListener('click',()=>{
	display.innerHTML=	tijera.innerHTML;
})
papel.addEventListener('click',()=>{
	display.innerHTML=	papel.innerHTML;
})

function aleatorio() {	
	let juegaPc=Math.floor(Math.random()*3);
	if(juegaPc==0){
		displayP.innerHTML=	papel.innerHTML;
	}
	if(juegaPc==1){
		displayP.innerHTML=	tijera.innerHTML;
	}
	if(juegaPc==2){
		displayP.innerHTML=	piedra.innerHTML;
	}


}

empezar.addEventListener('click',()=>{
	aleatorio();
})

