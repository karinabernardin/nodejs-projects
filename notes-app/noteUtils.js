const fs = require('fs');
const chalk = require('chalk');
const fileName = 'notes.json';

const addNote = function (title, body) {
    const allNotes = getNotes();
    const duplicateNote = allNotes.find((note) => note.title === title);
    if (!duplicateNote) {
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
    const desiredNote = allNotes.find((note) => note.title === title);
    if (desiredNote) {
        console.log(chalk.blue.bold('Title: ' + desiredNote.title));
        console.log(chalk.blue.bold('Body: ' + desiredNote.body));
    } else {
        console.log(chalk.red.bold('Note not found'));
    }
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
}
