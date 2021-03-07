import React, { useState } from 'react';
import axios from 'axios';
import { TextField } from '@material-ui/core';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import CepMask from '../CepMask/index';
import imageLoading from '../../assets/img/loading.gif';
import {
  Container,
  CardContainer,
  TitleContainer,
  Title,
  IconeContainer,
  MessageContainer,
  ResultsContainer,
  InputContainer,
  ButtonContainer,
  Button,
  Loading,
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
    setShowMessageServIndisponivel('hidden');
  }
  
  const [cep, setCep] = useState("");
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
  const [loading, setLoading] = useState("hidden");

  const getInformacoes = () => {
    var verificacao = validarCep(cep);
    if(verificacao.valido === true){
      setLoading('show');
      setShowHeader('hidden');
      setShowMessageServIndisponivel('hidden');

    axios.get(`https://viacep.com.br/ws/${cep}/json/`)

    .then(response => {
        if(response.data.erro){
        setShowResults('hidden');
        setShowMessage('show');
        setLoading('hidden');
        } else{
          setShowMessage('hidden'); 
          setTimeout( () => {
            setShowResults('show');                        
            setInformacoes(response.data);
            setLoading('hidden')
          },2000);
        }
      })
      .catch((e) => { 
        setShowResults('hidden');
        setShowMessage('hidden');
        setShowHeader('hidden');
        setShowMessageServIndisponivel('show');
        setLoading('hidden')
      });
      }else{
        setShowHeader('show');
        setShowResults('hidden');
        setShowMessage('hidden');    
        setShowMessageServIndisponivel('hidden');
      }
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
          onSubmit={(event) => { // arrow function anônima
            event.preventDefault(); // para prevenir o comportamento padrão do meu evento de Submit que é recarregar a página
          }}
        >

        <Loading>
          <div className={loading}>
            <img src={imageLoading} />
          </div>
        </Loading>
     
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
                placeholder="Digite seu CEP"
                variant="outlined"  
                justify-content= "center" 
                justify-align="center"                     
              />
            </InputContainer>
            
            <ButtonContainer>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              onClick={getInformacoes}>
                Encontrar
            </Button>
            </ButtonContainer>
            
            <TitleContainer>
              <Title>
                <p>Encontramos qualquer endereço do Brasil :)</p>
                <p>Exemplo: 72015-180</p>
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
              <div className={showMessageServIndisponivel}>
                <p>SERVIÇO INDISPONÍVEL</p>
              <IconeContainer>
                <SentimentVeryDissatisfiedIcon style={{ fontSize: 40 }} color="secondary" />
              </IconeContainer>
              </div>
            </MessageContainer>   

          <div className={showMessageServIndisponivel}>
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
            <div>
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
            </div>
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
