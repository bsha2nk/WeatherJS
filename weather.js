class Weather {
    constructor (city, state) {
        this.google_api_key = 'AIzaSyCBdcOepnQLMAXJfD-3xyihmq3YsCHzt6M';
        this.darksky_api_key = 'b2b2c90c576ab04e385eeef6b82ac58a';
        this.city = city;
        this.state = state;
    }

    async getWeather (city) {
        const latlng = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${this.google_api_key}`);

        const latlngdata = await latlng.json();

        const lat = latlngdata.results[0].geometry.location.lat;
        const lng = latlngdata.results[0].geometry.location.lng;

        const weather = await fetch(`https://api.darksky.net/forecast/${this.darksky_api_key}/${lat},${lng}`);

        const weatherdata = await weather.json();

        console.log(weatherdata);
    }
}