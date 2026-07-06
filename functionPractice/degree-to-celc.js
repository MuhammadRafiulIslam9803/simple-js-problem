function degreeToCelsius(degree) {
  return (degree - 32) * 5/9;
}

const celcius = degreeToCelsius(100).toFixed(2);
console.log(celcius);