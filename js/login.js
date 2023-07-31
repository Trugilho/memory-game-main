const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

const validateInput = ({ target }) => {
  //Esta arrow function exige que o campo input tenha no mínimo 2 caracteres preenchidos://
  if (target.value.length > 2) {
    //Se foram digitados mais de dois caracteres habilito o botão que foi criado desabilitado://
    button.removeAttribute('disabled');
    return;
  }
  //Se não foram digitados menos de tres caracteres desabilito o botão novamente://
  button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
  event.preventDefault();
  //Quando clico no botão, por default o formulário é resetado e os dados digitados 
  //são limpos, para eu pegar o que foi digitado e salvar coloco este event.prevendDefault, 
  //que não deixa que o formulário seja limpo imediatamente, ai eu capturo o que foi digitado:
  localStorage.setItem('player', input.value);
  //Redireciono o usuário para a pagina game.html
  window.location = 'pages/game.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);
