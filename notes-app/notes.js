const fs=require('fs');
const getNotes=() => 'Your Notes...';


const addNote=(title,body)=>
{
    const notes=loadNotes();
    const duplicateNotes=notes.filter((note)=>
    {
        return note.title===title;
    })

    
    if(!duplicateNotes.length)
    {
        notes.push({
            title:title,
            body:body,
        })
        saveNotes(notes);
        console.log('New Note added!');

    }
    else
    console.log("Title of the note already taken!");
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
};