var axios = require('axios');

const OPEN_WEATHER_MAP_URL ='http://api.openweathermap.org/data/2.5/weather?appid=11ea233f65a3156f2900cbfa3976d4a9&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      console.log(res);
      if (res.data.cod && res.data.message) {
        throw new Error('Not found city');
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error('Not found city');
    });
  }
}
