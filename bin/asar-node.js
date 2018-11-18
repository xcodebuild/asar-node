#!/usr/bin/env node

const args = process.argv.slice(2)
args.unshift('--require=..')
require('child_process').spawnSync(process.argv0, args, { stdio: 'inherit' })