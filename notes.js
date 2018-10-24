// console.log('Starting notes.js');

// console.log('module');
// module.exports.age = 25;
// module.exports.addNote = () =>{
//     console.log('addNote');
//     return 'New note';
// }


// module.exports.add = function( a, b){
//     return (a+b);
// }
const fs = require('fs');

var fetchNotes = () => {
    try{

        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);

    } catch(e){


    }
};

var saveNotes = (notes) => {

    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
    

};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    
    var duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length === 0){

        notes.push(note);
        saveNotes(notes);
        return note;

    }

};

var getAll = () => {

    return fetchNotes();

};

var getNote = (title) => {
    var notes = fetchNotes();
    var matchNotes = notes.filter((note) => note.title === title);
    return matchNotes[0];

};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filterNotes = notes.filter((note) => note.title !== title);
    saveNotes(filterNotes);
    return notes.length !== filterNotes.length;

};
var logNote = (note) => {
    console.log("----");
    console.log('Title:'+ note.title);
   
    console.log('Body:'+ note.body);


};
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote

};