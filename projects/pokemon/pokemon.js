
let promises = [];
let rand = Math.floor(Math.random()*151)+1;
const section = document.querySelector("section");

const capitalize = function(str){
    str = str.charAt(0).toUpperCase() + str.slice(1);
    let i = str.indexOf("-")
    if(i === -1)
    return str;
    return str.slice(0,i+1) + str.charAt(i+1).toUpperCase() + str.slice(i+2);
}


const normalize = function(str) {
   str = str.toUpperCase();
   str = str.replace(' ', '');
   str = str.replace('-', '');
   return str;
};

const guess = function(guessName) {
    if(normalize(guessName) === normalize(pokemonName))
        img.classList.add("correct");
    else {
        img.classList.add("wrong");
        setTimeout(function(){
            img.classList.remove("wrong")
        }, 3000);
    }

};


//d fix error placement




const img = document.querySelector("img");
let pokemonName = ""

let promise = fetch(`https://pokeapi.co/api/v2/pokemon/${rand}`)
    .then(function(respone){
        return respone.ok ? respone.json() : Promise.reject(respone.status);
    })
    .then(function(pokemon) {
        pokemonName = capitalize(pokemon.name);
        if(pokemonName == "Nidoran-M" || pokemonName == "Nidoran-F"){
            pokemonName = "Nidoran";
        }
        
        
        img.src = `https://aelahi.dev/coen-161/pokemon/${pokemonName}.png`


    })
    .catch(function(err){
        console.log(err);

        const p = document.createElement("p");
        p.textContent = err;
        section.appendChild(p);
    });




const input = document.querySelector("input");



input.addEventListener('keyup',function(event) {
    if(event.key === 'Enter') {
        guess(input.value);
    }
});

/*

const createPokemon = function(pokemon){
    console.log(pokemon.name);
        console.log(pokemon.sprites.front_default);
        const main = document.querySelector("main");
        const figure = document.createElement("figure");
        const figcaption = document.createElement("figcaption");
        const image = document.createElement("img");

        figcaption.textContent = pokemon.name;
        image.src = pokemon.sprites.front_default;
        figure.appendChild(image);
        figure.appendChild(figcaption);
        main.appendChild(figure);
}

for(let i = 1; i < 151; i++)
{
    promises.push(
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(function(respone){
            return respone.ok ? respone.json() : Promise.reject(respone.status);
        })
        .catch(function(err){
            console.log(err);
        })
    );
}

Promise.all(promises).then(function (pokemons) {
    for (const pokemon of pokemons) {
        createPokemon(pokemon);
    }
})
*/