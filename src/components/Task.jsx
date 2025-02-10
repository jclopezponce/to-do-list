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
            <ListItemButton>
              <ListItemIcon>
                <Checkbox onClick={isChecked} checked={checked}/>
              </ListItemIcon>
              <ListItemText style={{textDecoration: checked ? "line-through" : "none"}}>{props.task}</ListItemText>
              </ListItemButton>
              <IconButton>
                <DeleteIcon onClick={() => {
          props.onDelete(props.id);
        }}/>
              </IconButton>
          </ListItem>
        
      
    </List>
  );
}
