import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NotesList from './components/NotesList';

const App=()=> {
  const[notes,setNotes]= useState([
    {
    id:uuidv4 (),
    text : "text1",
    date: "12/12/2012"
  },  {
    id: uuidv4 (),
    text : "text2",
    date: "12/12/2012"
  },  {
    id: uuidv4 (),
    text : "text3",
    date: "12/12/2012"
  },  {
    id: uuidv4 (),
    text : "text4",
    date: "12/12/2012"
  },
  ]);


  return (
    <div className='container'>
      <NotesList notes={notes}/>
    </div>
  );
}

export default App;
