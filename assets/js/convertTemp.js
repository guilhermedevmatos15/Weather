export function fahrenheitForCelsius(fahrenheit) {
   return ((fahrenheit - 32) / 9/5).toFixed(0).toString().replace('.', ',');
}
