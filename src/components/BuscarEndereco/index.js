import React, { useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { TextField, Button, Typography } from '@material-ui/core';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import CepMask from '../CepMask/index';

function BuscarEndereco() {

  function validarCep(cep){
    
    var ehValido = {valido:true, texto:""};  
      if(cep.length !== 9){        
        ehValido = {valido:false, texto:"O CEP deve ter 8 dígitos."}
      }else{
        ehValido = {valido:true, texto:""}
      }
      setErros({cep:ehValido})
      return ehValido;
  }   

  const novaBusca = () => {
    setShowHeader('show');
    setShowResults('hidden');
    setShowMessage('hidden');   
  }
  
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
  const [showResults, setShowResults] = useState("hidden");
  const [showMessage, setShowMessage] = useState("hidden");
  const [showHeader, setShowHeader] = useState("show");

  const getInformacoes = () => {
    var verificacao = validarCep(cep);
    if(verificacao.valido === true){
    axios.get(`http://viacep.com.br/ws/${cep}/json/`)
      .then(response => {
        //console.log(response.data)
        if(response.data.erro){
          const html = (
          <div>
            CEP inválido
          </div>
        );
        setShowResults('hidden');
        setShowMessage('show');
        setShowHeader('show');
        ReactDOM.render(html,document.getElementById('message'));
        } else{
          setShowResults('show');
          setShowMessage('hidden');
          setShowHeader('hidden');
          setInformacoes(response.data)
        }
      })
      .catch((e) => { 
        const html = (
          <div>
            Serviço indisponível
          </div>
        );
        ReactDOM.render(html,document.getElementById('message'));
        
      });
      }else{
        setShowHeader('show');
        setShowResults('hidden');
        setShowMessage('hidden');    
      }
      //.catch((e) => { console.log(e); });
    };
 
  return (
    <div>
      <div className="box">
        <div className={showHeader}>
          <MapOutlinedIcon style={{ fontSize: 60 }} justify-content="center" color="secondary" />
            <Typography variant="h5" component="h1" align="center">              
              Encontramos qualquer endereço do Brasil 
            </Typography>
        </div>
      </div>
        
        <form
          onSubmit={(event) => { //arrow function anônima
            event.preventDefault(); //para prevenir o comportamento padrão do meu evento de Submit que é recarregar a página
            // console.log({ cep });
          }}
        >
          <div className={showHeader}>
            <TextField
              value={cep}
              onChange={(event) => {          
                var valueWithMask = CepMask(event.target.value)
                  setCep(
                    valueWithMask
                  );                         
                  validarCep(valueWithMask);            
              }}
              error={!erros.cep.valido}
              helperText={erros.cep.texto}
              label="CEP"          
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
          </div>
        </form>

        <div id="message" className={showMessage}></div>   
          <div className={showResults}>
            <ul>
              <p>CEP: {informacoes.cep}</p>
              <p>Logradouro: {informacoes.logradouro}</p>
              <p>Complemento: {informacoes.complemento}</p>
              <p>Bairro: {informacoes.bairro}</p>
              <p>Localidade: {informacoes.localidade}</p>
              <p>UF: {informacoes.uf}</p>
            </ul>

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              // value="Encontrar"
              onClick={novaBusca}
            >
              Nova Busca
            </Button>
          </div>
        </div>
        //</Box>          

    );
  }

export default BuscarEndereco;
