import { UI } from "./UI";
import { getCurrentWeatherOfCity } from "./Weather";

window.addEventListener('load', () => {
    getCurrentWeatherOfCity('london')
        .then(weather => {
            UI.renderWeatherDataToDOM(weather);
        });
})