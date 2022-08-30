
// const search = document.querySelector('.weather-search')

// = = = = =  API = = = = = //

let Keys = {
    apikey: "8857272b48c13776ef7c9b3cb0f5e3bf",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + '&units=metric&appid=' + this.apikey  
            /*
                1. city
                2. api_key

                $_GET['q'] = 'Toshkent'

                PHP => Laravel | MySQL  

                SELECT shahar_id FROM shaharlar WHERE shahar_name = $_GET['q']
            */
            ).then((response) => response.json())
            .then((data) => {
                this.displayWeather(data)
                document.querySelector('.not-found-data').style.display = "none"
                document.querySelector('.found-data').style.display = "block"
                
            })
            .catch((err) => {
                document.querySelector('.not-found-data').style.display = "block"
                document.querySelector('.found-data').style.display = "none"
                
            })
        },
        displayWeather: function (data) {
        
        const { name } = data ;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const { country } = data.sys;
        // console.log(name,country, icon, description, temp, humidity, speed);
        
        const degree = document.querySelector('.degree').innerHTML = temp +'°C'
        const personality = document.querySelector('.personality').innerHTML =  + humidity + '%'  
        const state = document.querySelector('.country').innerHTML = country
        const sp = document.querySelector('.speed').textContent = speed+'' +'km/h'
        const time = document.querySelector('.city').innerHTML = name
        const howWeather = document.querySelector('.howWeather').innerHTML =  description 
        const iconWeather = document.querySelector('.icon').src = `https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/icons/logo_32x32.png`

    },
    search: function () {
    this.fetchWeather(document.querySelector('.weather-search').value)
    }
}

// document.body.addEventListener('keypress', function (event) {
    // })
    if (document.body.addEventListener('keypress', function () {
        
        if (event.keyCode == 13) {
            Keys.search()
        }
    }) || document.querySelector('#icon-search').addEventListener('click', function () {
        Keys.search()
    }))
    
    
{
    
}