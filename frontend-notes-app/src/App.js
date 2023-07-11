import { useState, useEffect } from 'react';
import axios from 'axios';
import Note from './components/Note';

//aqui la sintaxis { notes: findNotes } indica que se lecambia el nombre en la desestructuracion
const App = ({ notes: findNotes }) => {
  //el estado es una caracteristica que permite almacenar y gestionar la informacion que cambia en una aplicacion, el estado pertenece al componente en el que se encuentra, cada vez que se cambia el estado, el componente se renderiza nuevamente
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('una nueva nota...');
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }
  useEffect(hook, [])
  console.log('render', notes.length, 'notes');

  //el evento es un objeto
  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    setNotes(notes.concat(noteObject));
    setNewNote('');
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };
  //operador ternario en conjunto de un filtro
  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important === true)
  //filter hace un nuevo arreglo 
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
      {notesToShow.map(note => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;