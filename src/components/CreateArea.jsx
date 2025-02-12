import React, {useState} from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Alert from '@mui/material/Alert';


export default function CreateArea(props) {
    const [task , setTask] = useState("");
    const [alert, setAlert] = useState("");
   

    function submitTask(event){
        if (task === "") {
            setAlert(<Alert severity="warning" >Not empty values accepted</Alert>)       
        } else {
            console.log(task);
            props.onAdd(task);
            setTask("");
            setAlert("");
            event.preventDefault();
        }
    }

    return (
        <div>
            {alert}
        <div className="input">
        
        <input required name="task" type="text" onChange={e => setTask(e.target.value) + setAlert("")} value={task} placeholder="Insert text here"/>
        <Fab size="small" type="submit" aria-label="add" onClick={submitTask}>
        <AddIcon/>
        </Fab>
        </div>
        </div>
    )

};