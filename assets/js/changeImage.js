/*
   Clear: Indicates clear skies with no significant cloud cover.
   Clouds: Signifies varying levels of cloudiness, from few clouds to overcast.
   Rain: Refers to different intensities of rain, including light, moderate, or heavy rain.
   Drizzle: Light rain falling in fine drops.
   Thunderstorm: Describes thunderstorms, which may also include rain.
   Snow: Indicates snow or snow showers.
   Mist: Reduced visibility due to mist.
   Haze: Obscured atmospheric conditions often caused by smoke or dust.
   Fog: Dense fog reducing visibility significantly.
*/

export default function changeBg(situation) {
   const body = document.querySelector('body');

   switch (situation.trim().toLowerCase()) {
      case 'clear':
         body.style.backgroundImage = 'url(assets/img/bg/clear.jpg)';
         break;
      case 'clouds':
         body.style.backgroundImage = 'url(assets/img/bg/cloud.jpg)';
         break;
      case 'storm':
      case 'drizzle':
         body.style.backgroundImage = 'url(assets/img/bg/storm.jpg)';
         break;
      case 'thunderstorm ':
         body.style.backgroundImage = 'url(assets/img/bg/rain.jpg)';
         break;
      case 'snow':
      case 'mist':
      case 'haze':
      case 'fog':
         body.style.backgroundImage = 'url(assets/img/bg/snow.jpg)';
         break;
      case 'error':
         body.style.backgroundImage = 'url(assets/img/bg/error.jpg)';
         break;
      default:
         body.style.backgroundImage = 'url(assets/img/bg/default.jpg)';
   }
}
