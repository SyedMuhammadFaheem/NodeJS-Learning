const fs=require('fs');
const chalk=require('chalk');
const getNotes=() => 'Your Notes...';


const addNote=(title,body)=>
{
    const notes=loadNotes();
    const duplicateNote=notes.find((note)=> note.title===title);


    if(!duplicateNote)
    {
        notes.push({
            title:title,
            body:body,
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('New Note added!'));

    }
    else
    console.log(chalk.red.inverse("Title of the note already taken!"));
}


const removeNote=title=>
{
    const notes=loadNotes();
    const findTitle=notes.filter(note=> note.title===title);
    
    if(findTitle.length)
    {
        const index=notes.findIndex(obj=>{
            return obj.title===title;
        })
        notes.splice(index,1);
        saveNotes(notes);
        console.log(chalk.inverse.green("Note removed successfully!"));
    }
    else
    console.log(chalk.inverse.red("The title could not be found!"));
}


const listNotes=()=>
{
    const notes=loadNotes();
    console.log(chalk.inverse('Your notes'))
    notes.forEach(note=> 
        {
            console.log(note.title);
        });
}

const readNote=title =>
{
    const notes=loadNotes();
    const findNote=notes.find(note=> note.title===title);
    if(findNote)
    {
        console.log(chalk.inverse(findNote.title));
        console.log(findNote.body);
    }
    else
    console.log(chalk.red.inverse('Note not found!'));
}


const loadNotes=() =>
{
    try
    {
        const dataBuffer= fs.readFileSync('notes.json');
        const dataJSON= dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e)
    {
        return [];
    }
}


const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote,
};