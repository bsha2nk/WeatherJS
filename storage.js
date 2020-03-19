class Storage {
    constructor () {
        this.defaultCity = 'Bangalore';
    }

    setLocationData(city) {
        localStorage.setItem('city', city);
    }

    getLocationData() {
        var city;
        if(localStorage.getItem('city') === null) {
            city = this.defaultCity;
        } else {
            city = localStorage.getItem('city');
        }

        return city;
    }
}