function typing() {
  /*  Versões 0.0.2 e 0.0.3: Contar o número de caracteres de forma regressiva */
  var counter = document.querySelector('.counter');
  var textToTweet = document.querySelector('.toTweet').value;
  counter.innerHTML = 140 - textToTweet.length;
  /* Versões 0.0.2 e 0.0.3: Ativar/desativar o botão "twittar" */
  var button = document.querySelector('.button');
  if (textToTweet.length === 0 || textToTweet.length > 140) {
    button.classList.remove('activeButton');
    button.removeEventListener('click', tweet);
  } else {
    button.addEventListener('click', tweet);
    button.classList.add('activeButton');
  }
  /* Versão 0.0.3: contador com outras cores. */
  if (counter.textContent < 20 && counter.textContent >= 10 ) {
    counter.classList.remove('redCounter');
    counter.classList.add('orangeCounter');
  } else if (counter.textContent < 10) {
    counter.classList.add('redCounter');
  } else {
    counter.classList.remove('orangeCounter');
    counter.classList.remove('redCounter');
  }
  /* Versão 0.0.5 (Extra):Adiciomar mais uma linha na área de texto para que a rolagem não apareça. */
  var textArea = document.querySelector('.toTweet');
  textArea.style.overflow = 'hidden';
  textArea.style.height = 0;
  textArea.style.height = textArea.scrollHeight + 'px';
}

function tweet() {
  /* Versão 0.0.1: adicionar o texto do formulário ao HTML. */
  var textToTweet = document.querySelector('.toTweet').value;
  var main = document.querySelector('main');
  var newPost = document.createElement('p');
  newPost.innerHTML = textToTweet;
  main.appendChild(newPost);
  newPost.classList.add('newPost');
  /* Versão 0.0.6 (Extra): adicionar a hora em que o tweet foi publicado no formato de 24 horas hh:mm. */
  if (new Date().getMinutes() < 10) {
    var hour = new Date().getHours() + ":" + '0' + new Date().getMinutes();
  } else {
    var hour = new Date().getHours() + ":" + new Date().getMinutes();
  }
  newPost.innerHTML += '<br><span>' + hour + '</span>';
  
  document.querySelector('.toTweet').value = '';
  document.querySelector('.toTweet').blur();
  var counter = document.querySelector('.counter');
  counter.innerHTML = '140';
  counter.classList.remove('orangeCounter');
  counter.classList.remove('redCounter');
  var button = document.querySelector('.button');
  button.removeEventListener('click', tweet);
  button.classList.remove('activeButton');
}

/* Função para 'reload' na página */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector('.toTweet').value = '';
});
