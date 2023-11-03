import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
//import notes from "../notes.js";
import CreateArea  from"./CreateArea"


function App()
{

    
    const[notesArr,setNote]=useState([]);

    function addNote(inputNote)
    {
        console.log(inputNote);
        setNote((prev)=>{ return [...prev,inputNote]});
     
    }


    function deleteNote(id)
    {
         setNote(prev=>{
            return prev.filter((note,idx)=> 
            {return idx!==id});
         });
       

    }

    console.log(notesArr);

    return(
    <div>
        <Header></Header>
        <CreateArea onAdd={addNote}></CreateArea>
        {notesArr.map((note,idx)=>{ return <Note onDelete={deleteNote} key={idx} id={idx} title={note.title} content={note.content}></Note>})}
        <Footer></Footer>
      
    </div>);
}

export default App;