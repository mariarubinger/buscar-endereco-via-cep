import React, { useState } from 'react';

function BuscarEndereco() {
  const [cep, setCep] = useState(""); //useState é um hook, o useState devolve um array com dois elementos
  //cep vai ser a primeira variável que representa o estado
  //setCep  vai ser a função que eu quero que ele use para ajustar aquele estado, para configurar ou atribuir um novo estado àquela variável

  return (
    <form
      onSubmit={(event) => { //arrow function anônima
        event.preventDefault(); //para prevenir o comportamento padrão do meu evento de Submit que é recarregar a página
        console.log({ cep });
      }}
    >
      <label>
        <input
          onChange={(event) => { //
            setCep(event.target.value); //atribuindo meu estado ao valor do evento
          }}
          type="text"
          name="cep"
          placeholder="Digite seu CEP"
        />
      </label>
      <input
        type="submit"
        value="Encontrar"
      />
    </form>
  );
}

export default BuscarEndereco;
