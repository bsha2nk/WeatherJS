class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = weather.timezone;
        this.desc.textContent = weather.currently.summary;
        this.string.textContent = weather.currently.temperature + ' \xB0F';
        this.humidity.textContent = `Relative Humidity: ${weather.currently.humidity}`;
        this.feelsLike.textContent = `Feels Like: ${weather.currently.apparentTemperature}`;
        this.dewpoint.textContent = `DewPoint: ${weather.currently.dewPoint}`;
        this.wind.textContent = `Wind: ${weather.currently.windSpeed}`;
        
        const icons = {
            'clearday': Skycons.CLEAR_DAY,
            'clear-night': 'SkyconsCLEAR_NIGHT',
            'partly-cloudy-day': 'Skycons.PARTLY_CLOUDY_DAY',
            'partly-cloudy-night': 'PARTLY_CLOUDY_NIGHT',
            'cloudy': 'CLOUDY',
            'rain': 'RAIN'
        }
        const d = weather.currently.icon;
        var skycons = new Skycons();
        skycons.set("icon", icons.clearday);
        skycons.play();
    }
}