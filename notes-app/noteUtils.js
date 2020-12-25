const fs = require('fs');
const chalk = require('chalk');
const fileName = 'notes.json';

const addNote = function (title, body) {
    const allNotes = getNotes();
    const duplicateNotes = allNotes.filter(function (note) {
        return (note.title === title);
    });
    if (duplicateNotes.length === 0) {
        allNotes.push({
            title: title,
            body: body
        });
        fs.writeFileSync(fileName, JSON.stringify(allNotes));
        console.log(chalk.green.bold('New note added!'));
    } else {
        console.log(chalk.red.bold('Note title already exists.'));
    }
};

const getNotes = function () {
    try {
        return JSON.parse(fs.readFileSync(fileName).toString());
    } catch (err) {
        return [];
    }
}

const removeNote = function(title) {
    const allNotes = getNotes();
    const noteIndex = allNotes.findIndex(function(note) {return (note.title === title)});
    if (noteIndex === -1) {
        console.log(chalk.red.bold('Note not found.'));
    } else {
        allNotes.splice(noteIndex, 1);
        fs.writeFileSync(fileName, JSON.stringify(allNotes));
        console.log(chalk.green.bold('Note successfully removed'));
    }
};
    

module.exports = {
    addNote,
    removeNote,
}
