const {getStats,getTypes,getAbilities,getMoves} = require('../utils/pokemonUtils');

const getPokemonOutput = (data) =>{
    let output = ''
    output = `Name: ${data.name.blue}\nTypes: ${getTypes(data.types)}\nStats: ${getStats(data.stats)}`
    output += `\nAbilities: ${getAbilities(data.abilities)}\nMoves: ${getMoves(data.moves)}`
    return output;
}

module.exports ={
    getPokemonOutput
}