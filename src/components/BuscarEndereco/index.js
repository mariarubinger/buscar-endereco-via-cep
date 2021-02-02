import React from 'react';

function BuscarEndereco() {

  return (
    <form>
      <label>
        <input type="text" name="cep" placeholder="Digite seu CEP" />
      </label>
        <input type="submit" value="Encontrar" />

    </form>
  );
}

export default BuscarEndereco;
