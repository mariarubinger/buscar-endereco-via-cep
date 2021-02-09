import React, { Component } from 'react';
import BuscarEndereco from './components/BuscarEndereco';
//import { Container } from "@material-ui/core";
import './App.css';

class App extends Component {
  render(){
    return (
      //<Container component="article" maxWidth="sm" >      
        <BuscarEndereco />
      //</Container>
    );
  }
}

export default App;
