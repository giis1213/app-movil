
const fetch = require('node-fetch');

async function getPokemonData(pokemon) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await response.json();

    
    const name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    const types = data.types.map(typeInfo => typeInfo.type.name).join(', ');
    const abilities = data.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ');
    const stats = data.stats.map(statInfo => `${statInfo.stat.name}: ${statInfo.base_stat}`).join(', ');

  
    console.log(`Nombre: ${name}`);
    console.log(`Tipo(s): ${types}`);
    console.log(`Habilidades: ${abilities}`);
    console.log(`Stats: ${stats}`);
}

getPokemonData('pikachu');
