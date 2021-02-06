import React, { Component } from 'react';
import BuscarEndereco from '../components/BuscarEndereco';
import { Container, Typography, CardContent } from "@material-ui/core";
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import './App.css';


class App extends Component {
  render(){
    return (
      <Container component="article" maxWidth="sm">
        <CardContent variant="outlined">
          <MapOutlinedIcon style={{ fontSize: 60 }} color="secondary" />
            <Typography variant="h5" component="h1" align="center">
              Encontramos qualquer endereço do Brasil 
            </Typography>
            <BuscarEndereco />
        </CardContent>
      </Container>
    );
  }
}



export default App;
