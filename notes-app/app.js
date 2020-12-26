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
    (argv) => noteUtils.addNote(argv.title, argv.body)
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
    (argv) => noteUtils.removeNote(argv.title)
).help().argv;

yargs.command('list', 'List notes',
    () => noteUtils.listNotes()
).help().argv;

yargs.command('read', 'Read note',
    function (yargs) {
    return yargs.option('t', {
        alias: 'title',
        describe: 'Note title',
        demandOption: true,
        type: 'string'
    })
    },
    (argv) => noteUtils.readNote(argv.title)
).help().argv;

yargs.apply();