const storage = new Storage;
const weatherLocation = storage.getLocationData();

const weather = new Weather();
const ui = new UI;


document.addEventListener('DOMContentLoaded', getWeather(weatherLocation));

document.getElementById('w-change-btn').addEventListener('click', e => {
    const city = document.getElementById('city').value;
    
    getWeather(city);
    storage.setLocationData(city);

    $('#locModal').modal('hide');
})

function getWeather(s) {
    weather.getWeather(s)
    .then(data => ui.paint(data))
    .catch(err => console.log(err));
}