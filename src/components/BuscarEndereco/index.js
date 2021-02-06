import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';
import ReactDOM from 'react-dom';


function BuscarEndereco({ validarCep }) {
  
  const [cep, setCep] = useState(""); //useState é um hook, o useState devolve um array com dois elementos
    //cep vai ser a primeira variável que representa o estado
    //setCep  vai ser a função que eu quero que ele use para ajustar aquele estado, para configurar ou atribuir um novo estado àquela variável
    const [erros, setErros] = useState({cep:{valido:true, texto:""}});
    const [informacoes, setInformacoes] = useState({
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
  });

  
  const getInformacoes = () => {
    axios.get(`http://viacep.com.br/ws/${cep}/json/`)
      .then(response => {
        //console.log(response.data)
        if(response.data.erro){
          const html = (
          <div>
            CEP inválido
          </div>
        );
        ReactDOM.render(html,document.getElementById('result'));
        } else{
          const html = (
            <div></div>
          );
          ReactDOM.render(html,document.getElementById('result'));
          setInformacoes(response.data)
        }
      })
      .catch((e) => { 
        const html = (
          <div>
            Serviço indisponível
          </div>
        );
        ReactDOM.render(html,document.getElementById('result'));
        
      });
      //.catch((e) => { console.log(e); });
    };

  return (
    <form
      onSubmit={(event) => { //arrow function anônima
        event.preventDefault(); //para prevenir o comportamento padrão do meu evento de Submit que é recarregar a página
        // console.log({ cep });
      }}
      >
      <TextField
          value={cep}
          onChange={(event) => {
            setCep(event.target.value);
            //atribuindo meu estado ao valor do evento
          }}
          onBlur={(event) => {
            const ehValido = validarCep(cep);
            setErros({cep:ehValido})
          }}
          error={!erros.cep.valido}
          helperText={erros.cep.texto}
          label="CEP"
          type="text"
          placeholder="Digite seu CEP"
          variant="outlined"
          margin="normal"
          fullWidth
        />
    
      <Button
        type="submit"
        variant="contained"
        color="secondary"
       // value="Encontrar"
        onClick={getInformacoes}>
        Encontrar
      </Button>


       <div id="result">
         </div>   
          <ul>
            <p>CEP: {informacoes.cep}</p>
            <p>Logradouro: {informacoes.logradouro}</p>
            <p>Complemento: {informacoes.complemento}</p>
            <p>Bairro: {informacoes.bairro}</p>
            <p>Localidade: {informacoes.localidade}</p>
            <p>UF: {informacoes.uf}</p>
          </ul>
    </form>
  );
}

export default BuscarEndereco;
