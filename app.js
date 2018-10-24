// console.log("starting app.js");

const fs = require('fs');

// const os = require('os');
const _ = require('lodash');

const notes = require('./notes.js');

const yargs = require('yargs');


// console.log(_.isString(true));
// console.log(_.isString('Ashi'));

// var res = notes.addNote();
// console.log(res);
// var res = notes.add(2,3);
//  console.log(res);

// var user = os.userInfo();


//console.log(user);

//fs.appendFileSync('greetings.txt','Hello'+ user.username+'!'); 
// fs.appendFileSync('greetings.txt',`Hello ${user.username}! You are ${notes.age}.`);  

// var filteredArray = _.uniq(['Ashi',1,'Ashi',1,2,3]);
// console.log(filteredArray);
const argv = yargs.argv;

var command = process.argv[2];
// console.log(process.argv);
// console.log('Process:',process.argv);
// console.log('yargs:',argv);

if(command == 'add'){
    // console.log("adding new note");
  var note =  notes.addNote(argv.title,argv.body);

  if(note){

 console.log("Note created");
 notes.logNote(note);

  }else {

 console.log("Note title taken");

  }
}else if(command =='list'){
   var allNotes = notes.getAll();

   console.log('Printing'+ allNotes.length+'note(s)');

   allNotes.forEach((note) => notes.logNote(note));
}else if(command == 'read'){

  var noteMatched =  notes.getNote(argv.title);
  if(noteMatched){

    console.log("Note matched");
    notes.logNote(noteMatched);
   
     }else {
   
    console.log("Note not matched");
   
     }

}else if(command =='remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'note was removed' : 'not found';
    console.log(message);
}else{
    console.log('Command not recognised');
}


//To display arguments
// console.log(process.argv);