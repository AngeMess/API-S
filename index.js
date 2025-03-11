fetchData();

async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("No se ha encontrado");
        }

        const data = await response.json();
        const pokemoSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemoSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}