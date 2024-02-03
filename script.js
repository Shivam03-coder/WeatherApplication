let SearchBtn = document.querySelector('#btn');

let InputValue = document.querySelector('#InputBox');

let Result = document.querySelector('#Result');

let Text1 = document.querySelector('#text1');

let Text2 = document.querySelector('#text2');

let Icon = document.querySelector('#text3');

let Temperature = document.querySelector('#Text4');

let MinTemp = document.querySelector('#MinTemp');

let MaxTemp = document.querySelector('#MaxTemp');

ApiKey = 'e382cda9c2a50543dce361b94a283832';


const GetWeatherInfo = () => {

  let CityLocation = InputValue.value;

  let URL = `https://api.openweathermap.org/data/2.5/weather?q=${CityLocation}&appid=${ApiKey}&units=metric`;


  if (CityLocation.length === 0) {
    Result.innerHTML = 'Please Enter a city Name';
  } else {
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        Result.innerHTML = `${data.name}`;
        Icon.innerHTML = `<img src="https://api.openweathermap.org/img/w/${data.weather[0].icon}.png" alt="">`;

        Temperature.innerHTML = `Temp : ${data.main.temp}°C  `;

        MaxTemp.innerHTML = `${data.main.temp_max}°C`;
        MinTemp.innerHTML = `${data.main.temp_min}°C`;
        Text1.innerHTML = `${data.weather[0].description}`
        Text2.innerHTML = `${data.weather[0].main}`

      })
      .catch((error) => {
        Result.innerHTML = 'City Not Found';
      });
  }
};

window.addEventListener('load', GetWeatherInfo);
SearchBtn.addEventListener('click', GetWeatherInfo);
