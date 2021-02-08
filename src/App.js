import React, { Component } from 'react';
import BuscarEndereco from './components/BuscarEndereco';
import { Container, CardContent } from "@material-ui/core";
import './App.css';

class App extends Component {
  render(){
    return (
      <Container component="article" maxWidth="sm">
        <CardContent variant="outlined">         
            <BuscarEndereco />
        </CardContent>
      </Container>
    );
  }
}

export default App;
