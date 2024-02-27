import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import { collection, getDocs, getFirestore, addDoc, doc, deleteDoc } from 'firebase/firestore/lite';
import {app} from './firebase';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state={
      notes:[]
    }
  }
  
  async refreshNotes(){
    var notesList=[];
    const db=getFirestore(app);
    const notesCol=collection(db, 'notes');
    const notesSnapshot=await getDocs(notesCol);

    notesSnapshot.forEach(doc=>{
      let note=doc.data();
      note.id=doc.id;
      notesList.push(note);
    })

    this.setState({notes:notesList});
  }

  componentDidMount(){
    this.refreshNotes();
  }

  async addClick(){
    var newNotes=document.getElementById("newNotes").value;
    var newNotesObject={description:newNotes};
    const db=getFirestore(app);
    const notesCol=collection(db,'notes');
    await addDoc(notesCol,newNotesObject);
    this.refreshNotes();
  }

  async deleteClick(id){
    const db=getFirestore(app);
    const notesRef=doc(db,'notes/'+id);
    await deleteDoc(notesRef);
    this.refreshNotes();
  }

  render(){
    const {notes}=this.state;
    return (
      <div className="container">
        <h1>Lista de tareas</h1>
        <input id="newNotes"/>&nbsp;
        <button onClick={()=>this.addClick()}>Agregar tarea</button>
        {notes.map(note=>(
          <p>
            <b>*{note.description}</b>&nbsp;
          <button onClick={()=>this.deleteClick(note.id)}>Eliminar tarea</button>

          </p>
        ))
        }
      </div>
    );
  }
}

export default App;
