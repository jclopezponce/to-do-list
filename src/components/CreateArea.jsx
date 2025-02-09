import React, {useState} from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


export default function CreateArea() {
    const [input , setInput] = useState("");

    function handleChange(event) {
        setInput(event.target.value);
    }

    function handleSubmit(){
        console.log(input)
    }

    return (
        <div className="input">
        <input type="text"  placeholder="Insert text here" onChange={handleChange} value={input}/>
        <Fab size="small" color="primary" aria-label="add" onClick={handleSubmit}>
        <AddIcon/>
        </Fab>
        </div>
    )

};