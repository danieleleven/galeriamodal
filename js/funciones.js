const modal = document.querySelector(".modal");
const miniaturas = document.querySelectorAll(".galeria a");
const imgModal = document.querySelector(".modal img");
const flechas = document.querySelectorAll(".modal button");
let imgActual = 0;
let rutasImg = [];

//al hacer click en cualquiera de las miniaturas, la clase visible se le pone a la modal

miniaturas.forEach( (miniatura,indice) => {

	rutasImg.push(miniatura.getAttribute("href"));

	miniatura.addEventListener("click", function(evento){
		evento.preventDefault();

		imgActual = indice;
		imgModal.setAttribute("src",rutasImg[imgActual]);

		modal.classList.add("visible");
	});
});




//al hacer click en la modal, se le quita la clase visible
modal.addEventListener("click", function(){
	modal.classList.remove("visible");
});

//navegación imágenes
flechas.forEach((flecha,indice) => {
	flecha.addEventListener("click", evento => {
		evento.stopPropagation();
		if(indice == 0){
			//anterior
			imgActual = imgActual > 0 ? imgActual - 1 : miniaturas.length - 1;
		}else{
			//siguiente
			imgActual = imgActual < miniaturas.length - 1 ? imgActual + 1 : 0;
		}
		imgModal.setAttribute("src",rutasImg[imgActual]);
	});
});