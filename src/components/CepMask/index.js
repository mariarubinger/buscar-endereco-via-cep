const cepMask = (value) => { 
   return value
   .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada   
   .replace(/(\d{5})(\d{1,2})/, '$1-$2')
   .replace(/(-\d{3})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}

export default cepMask;
