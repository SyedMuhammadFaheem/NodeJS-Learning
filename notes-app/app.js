const yargs=require('yargs');
const notes=require('./notes');
const chalk=require('chalk');

//Customising the yargs version
yargs.version('1.1.0'); 


//Create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:"This is title!",
            demandOption:true,
            type:'string',
        },
        body:{
            describe:"This is the body!",
            demandOption:true,
            type:'string',   
        }
    },
    handler: (argv)=> 
    {
        notes.addNote(argv.title,argv.body);
    }
})


//Create remove command
yargs.command({
    command:'remove',
    describe:'Remove the note',
    builder:{
        title:{
            describe:"This is title!",
            demandOption:true,
            type:'string',
        },
    },
    handler: ()=> 
    {
        console.log('Title: ',argv.title);
    }
})


//Create list command
yargs.command({
    command:'list',
    describe:'listing the note',
    builder:{
        title:{
            describe:"This is title!",
            demandOption:true,
            type:'string',
        },
    },
    handler: ()=> 
    {
        console.log('Title: ',argv.title);
    }
})



//Create read command
yargs.command({
    command:'read',
    describe:'reading the note',
    builder:{
        title:{
            describe:"This is title!",
            demandOption:true,
            type:'string',
        },
    },
    handler: ()=> 
    {
        console.log('Title: ',argv.title);
    }
})

//print one time
yargs.parse();


// console.log(yargs.argv);
