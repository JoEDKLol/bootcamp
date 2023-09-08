
        const key="a5cfced2a578fc30380a514b5136985a";
        const citiesList = [
            'London',
            'Paris',
            'New York',
            'Moscow',
            'Beijing',
            'Seoul',
            'Oaxaca',
            'Udaipur',
            'Chiang Mai',
            'Istanbul',
            'Ubud',
            'Florence',
            'Bangkok',
            'Taipei',

        ];

        async function clickHandler(){

            // alert("clicked");
            // alert(document.getElementById("weather").innerText);

            //Fetch the weather details
            // fetch(url, options)
            // .then((response) => console.log("response:", response))
            // .catch((error) => console.log("error:", error));
            let cityName = document.getElementById("cityName").value;

            if(cityName == ""){
                
                document.getElementById("validation").classList.replace("d-none", "d-block");
                // <div id="hDiv" class="div mt-4"></div>
                document.getElementById("hDiv").classList.replace("mt-5", "mt-1");
                return;
            }

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;
            // let response = await fetch(url)
            // console.log(response.json());

            await fetch(url)
            .then( (weather) => {
            
                if(!weather.ok){
                    throw new Error(weather.status + " Error");
                }

                return weather.json()
            
            })
            .then(displayData)
            .catch((e) => {
                alert(e.message);
                document.getElementById("cityName").focus();
            });

        }

        function displayData(data){
            console.log(data);
            //const dt = data.dt; // unix timestamp in seconds
            //const timezone = data.timezone; // zone in seconds
            // moment.unix - Unix Timestamp (seconds)
            // const dateTime = moment.unix(dt).utc().add(timezone, 's');
            // console.log(dateTime);
            //const sunrise = new Date((data.sys.sunrise + data.timezone) * 1000);
            //alert(dateTime);

            const dt = data.dt; // unix timestamp in seconds
            const timezone = data.timezone; // zone in seconds

           



            let prcData = {}; 
            prcData.name = data.name;
            prcData.country = data.sys.country;

            


            prcData.temp = `${Math.round(Number(data.main.temp) - 273.15)}°C`; 
            prcData.temp_max = `${Math.round(Number(data.main.temp_max) - 273.15)}°C`;
            prcData.temp_min = `${Math.round(Number(data.main.temp_min) - 273.15)}°C`;
            prcData.humidity = data.main.humidity;
            prcData.clouds = data.clouds.all;
            prcData.pressure = data.main.pressure;

            prcData.sunrise = new Date((data.sys.sunrise + data.timezone) * 1000);
            prcData.sunset = new Date((data.sys.sunset + data.timezone) * 1000);
             
            prcData.weatherS = data.weather[0].main;
            prcData.weatherIcon = data.weather[0].icon;
            prcData.description = data.weather[0].description;

            prcData.windSpeed = data.wind.speed;


            let iconClass = "";
            if(prcData.weatherS == "Thunderstorm"){
                iconClass = "bi bi-cloud-lightning-rain";
            }else if(prcData.weatherS == "Drizzle"){
                iconClass = "bi bi-cloud-drizzle";
            }else if(prcData.weatherS == "Rain"){
                iconClass = "bi bi-cloud-rain-heavy";
            }else if(prcData.weatherS == "Snow"){
                iconClass = "bi bi-cloud-snow";
            }else if(prcData.weatherS == "Mist"
                    ||prcData.weatherS == "Smoke"
                    ||prcData.weatherS == "Haze"
                    ||prcData.weatherS == "Dust"
                    ||prcData.weatherS == "Fog"
                    ||prcData.weatherS == "Sand"
                    ||prcData.weatherS == "Ash"
                    ||prcData.weatherS == "Squall"
                    ||prcData.weatherS == "Tornado"
            
            ){
                iconClass = "bi bi-cloud-fog2";
            }else if(prcData.weatherS == "Clear"){
                iconClass = "bi bi-brightness-high";
            }else if(prcData.weatherS == "Clouds"){
                iconClass = "bi bi-cloud";
            }



            if(prcData.description == "clear sky"){
                iconClass = "bi bi-brightness-high";
            }else if(prcData.description == "few clouds"){
                iconClass = "bi bi-cloud-sun";

            }else if(prcData.description == "scattered clouds"){
                iconClass = "bi bi-cloud";

            }else if(prcData.description == "broken clouds"){
                iconClass = "bi bi-clouds";

            }else if(prcData.description == "shower rain"){
                iconClass = "bi bi-cloud-hail";

            }else if(prcData.description == "rain"){
                iconClass = "bi bi-cloud-rain-heavy";

            }else if(prcData.description == "thunderstorm"){
                iconClass = "bi bi-cloud-lightning-rain";

            }else if(prcData.description == "snow"){
                iconClass = "bi bi-cloud-snow";

            }else if(prcData.description == "mist"){
                iconClass = "bi bi-cloud-fog2";
            }
            
            

            prcData.icon = `<i class='bi ${iconClass} fs-3'></i>`;

            
            prcData.date = getWorldTime(timezone);

            //alert(prcData.temp);
            makehtml(prcData);

            


        }

        function makehtml(data){
            

            let strHtml = "";
            strHtml = `<div  class="col-md-4 col-sm-6">
                <div class=" card border-dark mb-3 border-2 me-2" style="max-width: 15rem;">
                    <div id="" class="card-header text-nowrap" style="font-size: .7em;">
                        <span class="fs-4 ">${data.temp}</span> &nbsp 
                        ${data.icon}&nbsp&nbsp
                        ${data.name} (${data.country})</div>
                    
                    <div class="card-body text-dark">
                    
                        <div class="row">
                            <div class="col">
                                <p class="text-nowrap" style="font-size: .8em;">Max/Min Temp</p>
                            </div>
                            <div class="col ">
                                <p class="text-nowrap" style="text-align: right; font-size: .8em;">${data.temp_max} / ${data.temp_min}</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <p class="text-nowrap" style="font-size: .8em;">Humidity</p>
                            </div>
                            <div class="col ">
                                <p class="text-nowrap" style="text-align: right; font-size: .8em;">${data.humidity}%</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <p class="text-nowrap" style="font-size: .8em;">Wind</p>
                            </div>
                            <div class="col ">
                                <p class="text-nowrap" style="text-align: right; font-size: .8em;">${data.windSpeed}m/s</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <p class="text-nowrap" style="font-size: .8em;">Pressure</p>
                            </div>
                            <div class="col ">
                                <p class="text-nowrap" style="text-align: right; font-size: .8em;">${data.pressure}mb</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <p class="text-nowrap" style="font-size: .8em;">clouds</p>
                            </div>
                            <div class="col ">
                                <p class="text-nowrap" style="text-align: right; font-size: .8em;">${data.clouds}%</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col ">
                                <p class="text-nowrap" style="text-align: center; font-size: .8em;">${data.date}</p>
                            </div>
                        </div>
                
                    </div>
                </div>
            </div>`;

            document.getElementById("res").innerHTML += strHtml;

        }


        function checkVal(){
            document.getElementById("validation").classList.replace("d-block", "d-none");
                // <div id="hDiv" class="div mt-4"></div>
            document.getElementById("hDiv").classList.replace("mt-1", "mt-5");
        }

        function clearHtml(){

            //alert("test");
            checkVal();
            document.getElementById("res").innerHTML = "";
            document.getElementById("cityName").value = "";
        }

        //get date
        function getWorldTime(tzOffset) { 

            tzOffset = tzOffset /60 /60;

            var now = new Date();
            var tz = now.getTime() + (now.getTimezoneOffset() * (60 * 1000)) + (tzOffset * (60 * 60 * 1000));
            now.setTime(tz);
            var s = leadingZeros(now.getFullYear(), 4) + '-'
                    + leadingZeros(now.getMonth() + 1, 2) + '-'
                    + leadingZeros(now.getDate(), 2) + ' '
                    + leadingZeros(now.getHours(), 2) + ':'
                    + leadingZeros(now.getMinutes(), 2) + ':'
                    + leadingZeros(now.getSeconds(), 2);
             return s;

        }



        function leadingZeros(n, digits) {
            var zero = '';
            n = n.toString();
            if (n.length < digits) {
                for (i = 0; i < digits - n.length; i++)
                    zero += '0';
            }
            return zero + n;
        }

        document.addEventListener('keydown', (event) => {
            if(event.keyCode == 13){
                clickHandler();
            }
        });

        window.onload = function(){
            setCitiesNames();
        }

        function setCitiesNames(){
            //citiesList
            let setListhtml = "";
            for(let i=0; i<citiesList.length; i++){
                setListhtml += `<option value="${citiesList[i]}">`;
            }

            document.getElementById("datalistOptions").innerHTML += setListhtml;
            //alert(setListhtml);
        }

