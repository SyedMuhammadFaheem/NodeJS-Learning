const fs= require('fs');

fs.writeFileSync('note.txt','My name is Faheem.');


//challenge: append something to the file

fs.appendFileSync('note.txt','\nI will be turning 20 this year on 15 December 2022');
