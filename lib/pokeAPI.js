const axios = require('axios');
const colors = require('colors');
const {getPokemonOutput} = require('../utils/formattedOutputs');

class PokeAPI{
    constructor(){
        this.baseURL = 'https://pokeapi.co/api/v2';
    }

    async getPokemonById(id){
        try {
          const res = await axios.get(`${this.baseURL}/pokemon/${id}`);
          const output = getPokemonOutput(res.data);
          return output;
        
        } catch (err) {
            console.error(err);
        }
    }

    async getPokemonByName(name){
        try {
          const res = await axios.get(`${this.baseURL}/pokemon/${name}`);
          const output = getPokemonOutput(res.data);
          return output;

        } catch (err) {
            console.error("Some error occured: ",err.message.red);
        }
    }
}

module.exports = PokeAPI;