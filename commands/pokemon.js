const PokeAPI = require('../lib/pokeAPI');
const pokemon = {
    async show(cmd){
        try {
            const api = new PokeAPI();
            let outputData;
            if(cmd.id){
                outputData=await api.getPokemonById(cmd.id);
            }else{
                outputData = await api.getPokemonByName(String(cmd.name).toLowerCase());
            }
            console.log(outputData);
        } catch (err) {
            console.error("Some error occured: ",err.message.red);
        }
    }
}

module.exports = pokemon;