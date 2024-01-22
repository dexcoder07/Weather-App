const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3d48cb4350mshd768859cf06428dp1a8029jsn9d0d337ee3b5',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const TimeConverter = (curr_time) => {
    const sunriseDate = new Date(curr_time * 1000); // Convert to milliseconds by multiplying with 1000

    // Get individual components of the date
    const sunriseHours = sunriseDate.getHours().toString().padStart(2, '0');
    const sunriseMinutes = sunriseDate.getMinutes().toString().padStart(2, '0');
    const sunriseSeconds = sunriseDate.getSeconds().toString().padStart(2, '0');
    
    const formattedSunriseTime = `${sunriseHours}:${sunriseMinutes}:${sunriseSeconds}`;
    
    return formattedSunriseTime;
    
}

(async () => {
    try {
        const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chennai', options);
        const result = await response.json();
        console.log(result);
        document.getElementById('c_temp').innerHTML = result.temp;
        document.getElementById('c_max_temp').innerHTML = result.max_temp;
        document.getElementById('c_min_temp').innerHTML = result.min_temp;
        document.getElementById('c_feels_like').innerHTML = result.feels_like;
        document.getElementById('c_humidity').innerHTML = result.humidity;
        document.getElementById('c_ws').innerHTML = ((result.wind_speed * 1.852) .toPrecision(3));
        document.getElementById('c_wind_deg').innerHTML = result.wind_degrees;
        document.getElementById('c_sunrise').innerHTML = TimeConverter(result.sunrise);
        document.getElementById('c_sunset').innerHTML = TimeConverter(result.sunset);
    } catch (error) {
        console.error(error);
    }
  })();
  (async () => {
    try {
        const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=goa', options);
        const result = await response.json();
        console.log(result);
        document.getElementById('g_temp').innerHTML = result.temp;
        document.getElementById('g_max_temp').innerHTML = result.max_temp;
        document.getElementById('g_min_temp').innerHTML = result.min_temp;
        document.getElementById('g_feels_like').innerHTML = result.feels_like;
        document.getElementById('g_humidity').innerHTML = result.humidity;
        document.getElementById('g_ws').innerHTML = ((result.wind_speed * 1.852) .toPrecision(3));
        document.getElementById('g_wind_deg').innerHTML = result.wind_degrees;
        document.getElementById('g_sunrise').innerHTML = TimeConverter(result.sunrise);
        document.getElementById('g_sunset').innerHTML = TimeConverter(result.sunset);
    } catch (error) {
        console.error(error);
    }
  })();
  (async () => {
    try {
        const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai', options);
        const result = await response.json();
        console.log(result);
        document.getElementById('m_temp').innerHTML = result.temp;
        document.getElementById('m_max_temp').innerHTML = result.max_temp;
        document.getElementById('m_min_temp').innerHTML = result.min_temp;
        document.getElementById('m_feels_like').innerHTML = result.feels_like;
        document.getElementById('m_humidity').innerHTML = result.humidity;
        document.getElementById('m_ws').innerHTML = ((result.wind_speed * 1.852) .toPrecision(3));
        document.getElementById('m_wind_deg').innerHTML = result.wind_degrees;
        document.getElementById('m_sunrise').innerHTML = TimeConverter(result.sunrise);
        document.getElementById('m_sunset').innerHTML = TimeConverter(result.sunset);
    } catch (error) {
        console.error(error);
    }
  })();
  (async () => {
    try {
        const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mysore', options);
        const result = await response.json();
        console.log(result);
        document.getElementById('my_temp').innerHTML = result.temp;
        document.getElementById('my_max_temp').innerHTML = result.max_temp;
        document.getElementById('my_min_temp').innerHTML = result.min_temp;
        document.getElementById('my_feels_like').innerHTML = result.feels_like;
        document.getElementById('my_humidity').innerHTML = result.humidity;
        document.getElementById('my_ws').innerHTML = ((result.wind_speed * 1.852) .toPrecision(3));
        document.getElementById('my_wind_deg').innerHTML = result.wind_degrees;
        document.getElementById('my_sunrise').innerHTML = TimeConverter(result.sunrise);
        document.getElementById('my_sunset').innerHTML = TimeConverter(result.sunset);
    } catch (error) {
        console.error(error);
    }
  })();
  (async () => {
    try {
        const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=ranchi', options);
        const result = await response.json();
        console.log(result);
        document.getElementById('r_temp').innerHTML = result.temp;
        document.getElementById('r_max_temp').innerHTML = result.max_temp;
        document.getElementById('r_min_temp').innerHTML = result.min_temp;
        document.getElementById('r_feels_like').innerHTML = result.feels_like;
        document.getElementById('r_humidity').innerHTML = result.humidity;
        document.getElementById('r_ws').innerHTML = ((result.wind_speed * 1.852) .toPrecision(3));
        document.getElementById('r_wind_deg').innerHTML = result.wind_degrees;
        document.getElementById('r_sunrise').innerHTML = TimeConverter(result.sunrise);
        document.getElementById('r_sunset').innerHTML = TimeConverter(result.sunset);
    } catch (error) {
        console.error(error);
    }
  })();
  (async () => {
    try {
        const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=hyderabad', options);
        const result = await response.json();
        console.log(result);
        document.getElementById('h_temp').innerHTML = result.temp;
        document.getElementById('h_max_temp').innerHTML = result.max_temp;
        document.getElementById('h_min_temp').innerHTML = result.min_temp;
        document.getElementById('h_feels_like').innerHTML = result.feels_like;
        document.getElementById('h_humidity').innerHTML = result.humidity;
        document.getElementById('h_ws').innerHTML = ((result.wind_speed * 1.852) .toPrecision(3));
        document.getElementById('h_wind_deg').innerHTML = result.wind_degrees;
        document.getElementById('h_sunrise').innerHTML = TimeConverter(result.sunrise);
        document.getElementById('h_sunset').innerHTML = TimeConverter(result.sunset);
    } catch (error) {
        console.error(error);
    }
  })();



const getWeather = (cityName) => {
    (async () => {
        try {
            const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName}`, options);
            const result = await response.json();
            console.log(result);
            document.getElementById('main_heading').innerHTML = `Weather for ${cityName.toUpperCase()}`;
            document.getElementById('temperature').innerHTML = result.temp;
            document.getElementById('max_temp').innerHTML = result.max_temp;
            document.getElementById('min_temp').innerHTML = result.min_temp;
            document.getElementById('feels_like').innerHTML = result.feels_like;
            document.getElementById('humidity').innerHTML = result.humidity;
            document.getElementById('wind_speed').innerHTML = ((result.wind_speed * 1.852) .toPrecision(3));
            document.getElementById('sunrise').innerHTML = TimeConverter(result.sunrise);
            document.getElementById('sunset').innerHTML = TimeConverter(result.sunset);
            document.getElementById('wind_degrees').innerHTML = result.wind_degrees;
        } catch (error) {
            console.error(error);
        }
      })();
}


getWeather('Delhi');


document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    getWeather(city_inp.value);
})