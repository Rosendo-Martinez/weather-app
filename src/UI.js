import { getCurrentWeatherOfCity } from "./Weather";
import hdate from 'human-date';

const UI = (function() {

    document.querySelector('.open-modal').addEventListener('click', () => {
        document.querySelector('.modal-container').classList.toggle('display-none');
    })

    document.querySelector('.close-modal').addEventListener('click', () => {
        document.querySelector('.modal-container').classList.toggle('display-none');
    })

    document.querySelector('.city-name-form').addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(e) {
        e.preventDefault();
        getCurrentWeatherOfCity(document.querySelector('.city-name-input').value)
            .then(weather => renderWeatherDataToDOM(weather))
            .catch(error => alert(error.message));
    }

    function renderWeatherDataToDOM(weather) {
        // top left
        const currentWeatherDescription = document.querySelector('.current-weather-description');
        const currentTemperature = document.querySelector('.current-temperature');
        const currentWeatherIcon = document.querySelector('img.current-weather-icon');
        currentWeatherDescription.textContent = weather.weather[0].description;
        currentTemperature.textContent = weather.main.temp + ' °C';
        currentWeatherIcon.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
        // top right
        const cityName = document.querySelector('.city-name');
        const countryName = document.querySelector('.country-name');
        const cityDate = document.querySelector('.city-date');
        cityName.textContent = weather.name;
        countryName.textContent = weather.sys.country;
        cityDate.textContent = hdate.prettyPrint(getCityDateObj(weather.timezone), {showTime: true});
        // bottom left
        const feelsLike = document.querySelector('.feels-like');
        const humidity = document.querySelector('.humidity');
        const pressure = document.querySelector('.pressure');
        const windSpeed = document.querySelector('.wind-speed');
        const cloudiness = document.querySelector('.cloudiness');
        const visibility = document.querySelector('.visibility');
        feelsLike.textContent = weather.main['feels_like'];
        humidity.textContent = weather.main.humidity;
        pressure.textContent = weather.main.pressure;
        windSpeed.textContent = weather.wind.speed;
        cloudiness.textContent = weather.clouds.all;
        visibility.textContent = weather.visibility;
    }

    function getCityDateObj(timezone) {
        const currentDate = new Date()
        const localTime = currentDate.getTime()
        const localOffset = currentDate.getTimezoneOffset() * 60000
        const utc = localTime + localOffset
        const cityTime = utc + (1000 * timezone);
        return new Date(cityTime);
    }

    return {renderWeatherDataToDOM}
})();

export { UI };