class Weather {
    constructor () {
        this.google_api_key = 'dummy';
        this.darksky_api_key = 'dummy';
    }

    async getWeather (city) {
        const latlng = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${this.google_api_key}`);
        const latlngdata = await latlng.json();
        const lat = latlngdata.results[0].geometry.location.lat;
        const lng = latlngdata.results[0].geometry.location.lng;

        const weather = await fetch(`https://api.darksky.net/forecast/${this.darksky_api_key}/${lat},${lng}`);
        const weatherdata = await weather.json();

        return weatherdata;
    }
}   