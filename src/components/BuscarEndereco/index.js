import React, { useState } from 'react';
import axios from 'axios';
import { TextField } from '@material-ui/core';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import CepMask from '../CepMask/index';

import {
  CardContainer,
  TitleContainer,
  Title,
  IconeContainer,
  MessageContainer,
  ResultsContainer,
  Container,
  InputContainer,
  ButtonContainer,
  Button,
} from './styles';

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
  const [showMessageServIndisponivel, setShowMessageServIndisponivel] = useState("hidden");
  const [showHeader, setShowHeader] = useState("show");

  const getInformacoes = () => {
    var verificacao = validarCep(cep);
    if(verificacao.valido === true){
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => {
        //console.log(response.data)
        if(response.data.erro){
      /*     const html = (
          <div>
            CEP inválido
          </div>
        ); */
        setShowResults('hidden');
        setShowMessage('show');
        setShowHeader('hidden');
        setShowMessageServIndisponivel('hidden');
        //ReactDOM.render(document.getElementById('message'));
        } else{
          setShowResults('show');
          setShowMessage('hidden');
          setShowHeader('hidden');
          setShowMessageServIndisponivel('hidden');
          setInformacoes(response.data);
        }
      })
      .catch((e) => { 
       /*  const html = (
          <div>
            Serviço indisponível
          </div>
        ); */
        //ReactDOM.render(document.getElementById('message'));
        setShowResults('hidden');
        setShowMessage('hidden');
        setShowHeader('hidden');
        setShowMessageServIndisponivel('show');
        
      });
      }else{
        setShowHeader('show');
        setShowResults('hidden');
        setShowMessage('hidden');    
      }
      //.catch((e) => { console.log(e); });
    };
 
  return (
    <Container>
      <CardContainer>    
        
        <div className={showHeader}>
          <IconeContainer>
          <MapOutlinedIcon style={{ fontSize: 60 }} justify-content="center" color="secondary" />
          </IconeContainer>
         
        </div>
        
        <form
          onSubmit={(event) => { //arrow function anônima
            event.preventDefault(); //para prevenir o comportamento padrão do meu evento de Submit que é recarregar a página
            // console.log({ cep });
          }}
        >
          <div className={showHeader}>
            <InputContainer>
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
                //label="Digite seu CEP"          
                placeholder="Digite seu CEP"
                variant="outlined"          
                margin="normal"
                fullWidth                  
              />
            </InputContainer>
            
            <ButtonContainer>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              // value="Encontrar"
              onClick={getInformacoes}>
                Encontrar
            </Button>
            </ButtonContainer>
            
            <TitleContainer>
              <Title>
                <p>Encontramos qualquer endereço do Brasil :)</p>
              </Title>
            </TitleContainer>
          </div>
        </form>

        <MessageContainer>
          <div id="message" className={showMessage}>
            <p>CEP inválido.</p>
            <p>Faça uma Nova Busca!</p>
            <IconeContainer>
              <SentimentVeryDissatisfiedIcon style={{ fontSize: 40 }} color="secondary" />
            </IconeContainer>
           </div>
        </MessageContainer>   

           <div id="message" className={showMessage}>
            <ButtonContainer>
              <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  onClick={novaBusca}
                >
                  Nova Busca
              </Button>
            </ButtonContainer>   
            </div>


            <MessageContainer>
          <div id="message" className={showMessageServIndisponivel}>
            <p>SERVIÇO INDISPONÍVEL!</p>
            <IconeContainer>
              <SentimentVeryDissatisfiedIcon style={{ fontSize: 40 }} color="secondary" />
            </IconeContainer>
           </div>
        </MessageContainer>   

           <div id="message" className={showMessageServIndisponivel}>
            <ButtonContainer>
              <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  onClick={novaBusca}
                >
                  Nova Busca
              </Button>
            </ButtonContainer>   
            </div>


        <ResultsContainer>
          <div className={showResults}>
            <ul>
              <strong>CEP:</strong> <value>{informacoes.cep}</value>
              <br></br><br></br>
              <strong>Logradouro:</strong> <value>{informacoes.logradouro}</value>
              <br></br><br></br>
              <strong>Complemento:</strong> <value>{informacoes.complemento}</value>
              <br></br><br></br>
              <strong>Bairro:</strong> <value>{informacoes.bairro}</value>
              <br></br><br></br>
              <strong>Localidade:</strong> <value>{informacoes.localidade}</value>
              <br></br><br></br>
              <strong>UF:</strong> <value>{informacoes.uf}</value>
            </ul>
            </div>
 
        </ResultsContainer>    

        <div className={showResults}>
            <ButtonContainer>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                onClick={novaBusca}
              >
                Nova Busca
              </Button>
            </ButtonContainer>
        </div>
  

      </CardContainer>    
   </Container>  
  );
}

export default BuscarEndereco;
