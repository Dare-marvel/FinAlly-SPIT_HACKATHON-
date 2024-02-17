import React from "react";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';

const ExpenseItem = (props) => {

  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    // <li>
    //   <Card className="expense-item">
    //     <ExpenseDate date={props.date} />
    //     <div className="expense-item__description">
    //       <h2>{props.title}</h2>
    //       <div className="expense-item__price">${props.amount}</div>
    //     </div>
    //   </Card>
    // </li>

    <List sx={{ width: '100%', maxWidth: 797, bgcolor: 'background.paper', borderRadius:10 }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PaidRoundedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={<span style={{ fontSize: '1.7em',fontWeight: 'bold' }}>{props.title}</span>} secondary={`${month} ${day}, ${year}`} />
        <div className="expense-item__price">₹{props.amount}</div>
      </ListItem>
    </List>
  );
};

export default ExpenseItem;
