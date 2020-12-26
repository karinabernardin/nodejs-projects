const fs = require('fs');
const chalk = require('chalk');
const fileName = 'notes.json';

const addNote = function (title, body) {
    const allNotes = getNotes();
    const duplicateNotes = allNotes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        allNotes.push({
            title: title,
            body: body
        });
        writeNotes(allNotes);
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
};

const writeNotes = function (allNotes) {
    fs.writeFileSync(fileName, JSON.stringify(allNotes));
};

const removeNote = function(title) {
    const allNotes = getNotes();
    const notesToKeep = allNotes.filter((note) => note.title !== title);

    if (allNotes > notesToKeep) {
        writeNotes(notesToKeep);
        console.log(chalk.green.bold('Note successfully removed'));
    } else {
        console.log(chalk.red.bold('Note not found.'));
    }
};
    
const listNotes = function() {
    const allNotes = getNotes();
    console.log(chalk.green.bold('Your notes:'));
    allNotes.forEach((note) => console.log("- " + note.title));
}

const readNote = function(title) {
    const allNotes = getNotes();
    const desiredNote = allNotes.filter((note) => note.title === title);
    switch (desiredNote.length) {
        case 0:
            console.log(chalk.red.bold('Note not found'));
            break;
        case 1:
            console.log(chalk.green.bold('Title: ' + desiredNote[0].title));
            console.log(chalk.green.bold('Body: ' + desiredNote[0].body));
            break;
        default:
            console.log(chalk.red.bold('Problem accessing note.'));
            break;
    }
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
}
