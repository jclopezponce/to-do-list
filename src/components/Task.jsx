import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Task(props) {
const [checked, setChecked] = useState(false);

function isChecked(){
  if (checked == true){
    setChecked(false)
  } else {
    setChecked(true)
  }
}

  return (
    <List className='list'>        
          <ListItem>        
            <ListItemButton onClick={isChecked}>
              <ListItemIcon>
                <Checkbox checked={checked} style={{color: "whitesmoke"}}/>
              </ListItemIcon>
              <ListItemText style={{textDecoration: checked ? "line-through" : "none"}}>{props.task}</ListItemText>
              </ListItemButton>
              <IconButton>
                <DeleteIcon  style={{color: "whitesmoke"}} onClick={() => {
          props.onDelete(props.id);
        }}/>
              </IconButton>
          </ListItem>
        
      
    </List>
  );
}
