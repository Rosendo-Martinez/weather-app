const API_KEY = '89ce0b8619fbcff23bebdba6f0624f9f';
const CORS = {mode: 'cors'};

async function getGeoCoordinatesOfCity(city) {
    const response = await fetch(`HTTPS://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`, CORS);
    if (response.ok) {
        const dataArray = await response.json();
        if (dataArray.length === 1) {
            return {lat: dataArray[0].lat, lon: dataArray[0].lon};
        } else {
            throw new Error(`Error: Could not find city with input name!`);
        }
    } else {
        throw new Error(`Error ${response.status}: Could not get geo-coordinates of city!`);
    }
}

async function getCurrentWeatherOfCity(city) {
    const coordinates = await getGeoCoordinatesOfCity(city);
    const response = await fetch(`HTTPS://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=metric&appid=${API_KEY}`, CORS);
    if (response.ok) {
        const weatherData = await response.json();
        return weatherData;
    } else {
        throw new Error(`Error ${response.status}: Could not get city weather!`);
    }
}

export { getCurrentWeatherOfCity };