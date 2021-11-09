const { Command } = require('commander');
const pokemon = require('../commands/pokemon');
const program = new Command();

program.command('show').description('Shows Pokemon details')
.option('-id, --id <int>', 'Add Pokemon ID (PokeDex Number)')
.option('-name, --name <string>','Add Pokemon Name')
.action((cmd)=>{pokemon.show(cmd)})

program.parse(process.argv);