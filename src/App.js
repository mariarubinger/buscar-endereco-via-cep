import React, { Component } from 'react';
import BuscarEndereco from './components/BuscarEndereco';
import './App.css';

class App extends Component {
  render(){
    return (
      <>
        <td>Encontre qualquer endereço do Brasil digitando o CEP</td>
        <BuscarEndereco />
      </>
    );
  }
}

export default App;
