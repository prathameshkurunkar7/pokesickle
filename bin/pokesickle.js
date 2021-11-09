#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();
const pkg = require('../package.json');

program.version(pkg.version).command('pokemon','All about Pokemons').parse(process.argv);