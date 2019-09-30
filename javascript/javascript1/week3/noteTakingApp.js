let notes = [];

function addNote(content, id) {
  notes.push({content,id});
}

function getNoteFromId(id) {

  if(typeof id === "number" && id != undefined) { 
    for(let i=0; i<notes.length; i++) {
      if(notes[i].id === id) {
        return notes[i];
      }
    }
  }
  return "No note with such ID";
}

function getNotes() {
  return notes;
}

function logOutNotesFormatted() {

  for(let key in notes) {
   console.log("The note with id: " +notes[key].id+ ", has the following note text: " +notes[key].content); 
  }
}