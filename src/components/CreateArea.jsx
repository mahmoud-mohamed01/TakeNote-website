import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Zoom from '@mui/material/Zoom';






function CreateArea(props) {

    let [notobj,setnotObj]=useState({title:"",content:""});
    let [clicked,setclick]=useState(false);
    

    function handleChange(event)
    {
        let {name,value} =event.target;
        setnotObj((prevnotes)=>
        {
            return{...prevnotes,[name]:value};
        })
    }

    function submitNote(event)
    {
        event.preventDefault();
        props.onAdd(notobj);
      
        setnotObj({title:"",content:""});
        setclick(false)


    }

    function handelAnimationCLick()
    {
      setclick(true);
    }

   


  return (
    <div className="note-input">
      <form className="create-note">
        {clicked?<input value={notobj.title} name="title" placeholder="Title" onChange={handleChange} />:null}
        <textarea onClick={handelAnimationCLick} value={notobj.content}  onChange={handleChange} name="content" placeholder="Take a note..." rows={clicked?3
        :1} />
        <Zoom in={clicked?true:false}> 
        <IconButton  onClick={submitNote}>
          <AddIcon></AddIcon>
          </IconButton>
          </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
