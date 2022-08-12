import { getCurrentWeatherOfCity } from "./Weather";

const UI = (function() {
    document.querySelector('.city-name-form').addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(e) {
        e.preventDefault();
        getCurrentWeatherOfCity(document.querySelector('.city-name-input').value).then(weather => {
            console.log(weather);
            renderWeatherDataToDOM(weather);
        });
    }

    function renderWeatherDataToDOM(weather) {
        // top left
        const currentWeatherDescription = document.querySelector('.current-weather-description');
        const currentTemperature = document.querySelector('.current-temperature');
        const temperatureUnit = document.querySelector('.temperature-unit');
        const currentWeatherIcon = document.querySelector('img.current-weather-icon');
        currentWeatherDescription.textContent = weather.weather[0].description;
        currentTemperature.textContent = weather.main.temp;
        temperatureUnit.textContent = 'C';
        currentWeatherIcon.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
        // top right
        const cityName = document.querySelector('.city-name');
        const countryName = document.querySelector('.country-name');
        const cityTime = document.querySelector('.city-time');
        const cityDate = document.querySelector('.city-date');
        cityName.textContent = weather.name;
        countryName.textContent = weather.sys.country;
        cityTime.textContent = weather.dt;
        cityDate.textContent = 'date!!!';
        // bottom left
        const feelsLike = document.querySelector('.feels-like');
        const feelsLikeUnit = document.querySelector('.feels-like-unit');
        const humidity = document.querySelector('.humidity');
        const pressure = document.querySelector('.pressure');
        const pressureUnit = document.querySelector('.pressure-unit');
        const windSpeed = document.querySelector('.wind-speed');
        const windSpeedUnit = document.querySelector('.wind-speed-unit');
        const sunsetTime = document.querySelector('.sunset-time');
        const sunriseTime = document.querySelector('.sunrise-time');
        const cloudiness = document.querySelector('.cloudiness');
        const visibility = document.querySelector('.visibility');
        const visibilityUnits = document.querySelector('.visibility-unit')
        feelsLike.textContent = weather.main['feels_like'];
        feelsLikeUnit.textContent = 'C';
        humidity.textContent = weather.main.humidity;
        pressure.textContent = weather.main.pressure;
        pressureUnit.textContent = 'hPa';
        windSpeed.textContent = weather.wind.speed;
        windSpeedUnit.textContent = 'km/h';
        sunsetTime.textContent = weather.sys.sunset;
        sunriseTime.textContent = weather.sys.sunrise;
        cloudiness.textContent = weather.clouds.all;
        visibility.textContent = weather.visibility;
        visibilityUnits.textContent = 'km';
    }
})();

export {UI};