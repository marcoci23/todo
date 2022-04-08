import React from 'react';
import './App.css';
import Header from "./Header"
import Data from "./Data";
import ListItem from "./ListItem";
import AddButton from './AddButton';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
   

class App extends React.Component {


 
  render(){
    const todoItems = Data.map(item => <ListItem key={item.id} item={item}/>)
    return (
      <div>
       <Header/>
        {todoItems}
        <AddButton/>   
      </div>
    );
  }
}

export default App;
