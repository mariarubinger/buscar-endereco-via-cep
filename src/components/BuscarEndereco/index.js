import React, { useState } from 'react';
import axios from 'axios';

function BuscarEndereco() {
  const [cep, setCep] = useState(""); //useState é um hook, o useState devolve um array com dois elementos
  //cep vai ser a primeira variável que representa o estado
  //setCep  vai ser a função que eu quero que ele use para ajustar aquele estado, para configurar ou atribuir um novo estado àquela variável
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
      .then(response => setInformacoes(response.data))

    };

/* 
  const getInformacoes = () => {
    axios.get(`http://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json() 
      .then(response => {
        setInformacoes(response.data)
      }))
     // .catch(() => { console.log('Erro'); });
    }
/* 
    componentDidMount() {
      this.refresh()
  } */


  return (
    <form
      onSubmit={(event) => { //arrow function anônima
        event.preventDefault(); //para prevenir o comportamento padrão do meu evento de Submit que é recarregar a página
        console.log({ cep });
      }}
    >
      <label>
        <input
          onChange={(event) => {
            setCep(event.target.value); //atribuindo meu estado ao valor do evento
          }}
          type="text"
          name="cep"
          placeholder="Digite seu CEP"
        />
      </label>
      <button
        type="submit"
        value="Encontrar"
        onClick={getInformacoes}>
        Encontrar
      </button>

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
