import styled from 'styled-components';

export const Container = styled.div`
  justify-content: center;
  display: flex;
  padding: 80px;
  justify-items: center;
  margin: 0;
  box-sizing: border-box;
`;

export const CardContainer = styled.div`
  height: 350px;
  width: 300px;
  background-color: #FFFFFF;
  border-radius: 5px;
  box-shadow: 1px 1px 3px #000000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  justify-items: center;
  padding: 15px 15px;
  margin: 15px 15px;
`;

export const IconeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px ;
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.div`
  margin-top: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
 
export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Button = styled.div`
  padding: 16.5px 14px;
  width: 150px;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
`;
