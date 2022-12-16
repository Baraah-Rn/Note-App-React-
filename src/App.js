import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: uuidv4(),
      text: "text1",
      date: "12/12/2012",
    },
    {
      id: uuidv4(),
      text: "text2",
      date: "12/12/2012",
    },
    {
      id: uuidv4(),
      text: "text3",
      date: "12/12/2012",
    },
    {
      id: uuidv4(),
      text: "text4",
      date: "12/12/2012",
    },
  ]);
  const [searchText, setSearchText] = useState("");

  const addNote = (noteText) => {
    const date = new Date();
    const newNote = {
      id: uuidv4(),
      text: noteText,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <h1>My Notes</h1>
      <Search handleSearch={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
