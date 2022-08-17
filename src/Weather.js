const API_KEY = '89ce0b8619fbcff23bebdba6f0624f9f';
const CORS = {mode: 'cors'};

async function getGeoCoordinatesOfCity(city) {
    let response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`, CORS);
    if (response.ok) {
        let apiData = await response.json();
        const cityData = {lat: apiData[0].lat, lon: apiData[0].lon};
        return cityData;
    } else {
        throw new Error(`${response.status} - Could not get geo-coordinates of city`);
    }
}

async function getCurrentWeatherOfCity(city) {
    let cityData = await getGeoCoordinatesOfCity(city);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${cityData.lat}&lon=${cityData.lon}&units=metric&appid=${API_KEY}`;
    let response = await fetch(url, CORS);
    if (response.ok) {
        let apiData = await response.json();
        return apiData;
    } else {
        throw new Error(`${response.status} - Could not get city weather`);
    }
}

export {getCurrentWeatherOfCity};