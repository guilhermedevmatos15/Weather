import changeBg from './changeImage.js';
import { fahrenheitForCelsius } from './convertTemp.js';

const resultDiv = document.querySelector('.result');
const okResult = document.querySelector('.result .ok');
const form = document.querySelector('form');
const input = form.querySelector('input');

async function callAPI(url) {
   try {
      const response = await fetch(url);

      // Verificar se a resposta HTTP não é bem-sucedida
      if (!response.ok) {
         throw new Error(`Erro HTTP: ${response.status}`);
      }

      const data = await response.json();
      return data;
   } catch (e) {
      console.log(e);
      throw e; // Repassa o erro para o catch no .then().catch()
   }
}

form.addEventListener('submit', (e) => {
   e.preventDefault();

   const KEY = 'da4dc986ca1f6c6c45ae0c9bbeea664d';
   const location = input.value.trim().toLowerCase();

   callAPI(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${KEY}`
   )
      .then((data) => {
         if (data) {
            resultDiv.classList.remove('init', 'error');
            resultDiv.classList.add('ok');

            okResult.querySelector('h1').innerHTML = `${fahrenheitForCelsius(data.main.temp)}°C`;
            okResult.querySelector('h2').innerHTML = `${data.name}, ${data.sys.country}`;
            okResult.querySelector('.humidity strong').innerHTML = `${data.main.humidity}%`;
            okResult.querySelector('.wind strong').innerHTML = `${data.wind.speed}%`;

            changeBg(data.weather[0].main);
         }
      })
      .catch((e) => {
         resultDiv.classList.remove('init', 'ok');
         resultDiv.classList.add('error');
         changeBg('error');

         console.log(e);

         // Waiting a little until the bg changes and we present the error
         setTimeout(() => {
            alert('Sorry, but maybe you mistyped the location');
         }, 200);
      });
});
