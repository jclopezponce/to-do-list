import React, {useState} from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


export default function CreateArea(props) {
    const [task , setTask] = useState();

    function submitTask(event){
        console.log(task);
        props.onAdd(task);
        setTask("");
        event.preventDefault();
    }

    return (
        <div className="input">
        <input name="task" type="text" onChange={e => setTask(e.target.value)} value={task} placeholder="Insert text here" />
        <Fab size="small" color="primary" aria-label="add" onClick={submitTask}>
        <AddIcon/>
        </Fab>
        </div>
    )

};