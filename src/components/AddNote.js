import React, { useState } from "react";

const AddNote=({handleAddNote})=> {
const[noteText, setNoteText] = useState("");
const characterLimit = 300;

const handleChange = (event)=>{
const value = event.target.value
if(characterLimit-value.length>=0){
    setNoteText(value)
}
}

const handleSave = (e)=>{
    if(noteText.trim().length>0){
        handleAddNote(noteText)
        setNoteText("");
    }
    

}

  return (
    <div className="note new-note">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit-noteText.length} Remaining</small>
        <button className="btn"
        onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default AddNote;
