let contenedor = document.getElementById('contenedor');

fetch("https://rickandmortyapi.com/api/character")
.then((response)=>response.json())
.then((data)=>{
console.log(data)

data.results.map((elemento)=>{
	const contenedorPers = document.createElement("contenedor")
	/*trabajando sobre esto*/
		
   	/*trabajando sobre esto*/
    contenedorPers.classList.add("card")
    contenedorPers.innerHTML= 
   
    `
		<img src="${elemento.image}" alt="${elemento.name}" class="card-img-top">
		<div class="card-body">
			<h3 class="card-title">${elemento.name}</h3>
			<p class="card-text">Especie: ${elemento.species}</p>
			<p class="card-text">Genero: ${elemento.gender}</p>
			<p class="card-text">Estado: ${elemento.status}</p>
		</div>
    `;

    contenedor.append(contenedorPers)
})  })