const convertToCelsius = function (FahrenheitTemperature)
{
  if ('number' !== typeof FahrenheitTemperature)
  {
    return 'ERROR';
  }
  
  return parseFloat(((FahrenheitTemperature - 32)*(5/9)).toFixed (1));
};

const convertToFahrenheit = function(celsiusTemperature)
{
  if ('number' !== typeof celsiusTemperature)
  {
    return 'ERROR';
  }

  return parseFloat(((9/5)*celsiusTemperature + 32).toFixed (1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
