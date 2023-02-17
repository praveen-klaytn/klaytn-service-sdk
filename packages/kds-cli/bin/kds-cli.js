#!/usr/bin/env node

const chalk = require('chalk')
const program = require('commander')
const figlet = require('figlet')

// Cli version
program.version('0.0.3')

// Commands
program
.name('kds-cli')
 .usage('[options] <command> <subcommand>')
 .helpOption(false)

require('./commands/oracle')(program)

if(process.argv.slice(2).length == 0) {
  console.log(
    chalk.yellow(
      figlet.textSync('kds-cli', { horizontalLayout: 'full' })
    )
  );
}

program.parse(process.argv)