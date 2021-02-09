import styled from 'styled-components';

export const Container = styled.div`
  justify-content: center;
  display: flex;
  padding: 40px;
`;

export const CardContainer = styled.div`
  height: 70vh;
  width: 60vh;
  background-color: #FFFFFF;
  border-radius: 5px;
  box-shadow: 1px 1px 3px #000000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  justify-items: center;
`;

export const IconeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.div`
  padding: 40px;
  margin-top: -80px;
`;
 
export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: -50px;
`;

export const Button = styled.div`
  padding: 16.5px 14px;
  width: 70%;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  text-align: center;
  color: #fff;
  background-color: #f50057;
  margin-top: 1rem;
  border-radius: 0.6rem;
  outline: 0px;
  transition: all 0.3s ease 0s;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  color: #4d4a4a;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 13px;
  justify-content: center;
  text-align: center;
`;

export const MessageContainer = styled.div`
  display: flex;
  margin-top: -70px;
  justify-content: center;
`;

export const ResultsContainer = styled.text`
  margin-top: -130px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
