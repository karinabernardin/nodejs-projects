const yargs = require('yargs');
const noteUtils = require('./noteUtils');


yargs.command('add', 'Add note',
    function (yargs) {
    return yargs.option('t', {
        alias: 'title',
        describe: 'Note title',
        demandOption: true,
        type: 'string'
    }).option('b', {
        alias: 'body',
        describe: 'Note body',
        demandOption: true,
        type: 'string'
    })
    },
    function (argv) {
    noteUtils.addNote(argv.title, argv.body)
    }
).help().argv;

yargs.command('remove', 'Remove note',
    function (yargs) {
    return yargs.option('t', {
        alias: 'title',
        describe: 'Note title',
        demandOption: true,
        type: 'string'
    })
    },
    function (argv) {
    noteUtils.removeNote(argv.title)
    }
).help().argv;


yargs.apply();