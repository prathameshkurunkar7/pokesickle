const colors = require('colors');

const pokemonUtils = {
    getTypes(types){
        const newTypes = types.map((t)=>(
            t.type.name.blue
        ))
        return newTypes;
    },
    getStats(stats){
        const newStats = stats.map((s)=>{
            return "\n"+colors.cyan(s.stat.name)+":"+colors.blue(s.base_stat)
        })
        return newStats;
    },
    getAbilities(abilities){
        const newAbilities = abilities.map((ab)=>{
           if(ab.is_hidden){
               return "\n"+colors.italic("Hidden:") + colors.green(ab.ability.name)
           }else{
                return "\n"+colors.italic("Primary:") + colors.green(ab.ability.name)
           }
        })
        return newAbilities;
    },
    getMoves(moves){
        const newMoves = moves.map((mov)=>{
            return "\n"+colors.yellow(mov.move.name)
        })
        return newMoves;
    }
}

module.exports = pokemonUtils;