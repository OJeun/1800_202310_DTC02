const findMyLocation = () => {

    const success = (position) => {
        console.log(position)
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(latitude + " " + longitude);

        const API = '242606ab0ab1a8970d797a2227fb42a7';
        const units = 'metric';
        const tempAPIUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API}&units=${units}`
        
        fetch(tempAPIUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.getElementById("currentTMP").innerHTML = `${data.main.temp}℃`;
            temp = data.main.temp
            console.log(temp)
            if (temp < 5) {
                document.getElementById("alerMSG").innerHTML = "Cold! Feel like Fridge!";
            }else if(temp <15){
                document.getElementById("alerMSG").innerHTML = "Cool Weather";
            }else if(temp <30){
                document.getElementById("alerMSG").innerHTML = "Warm! Good to go!";
            }else{
                document.getElementById("alerMSG").innerHTML = "Very Hot! Better to stay home!";}

    

            var iconcode = data.weather[0].icon;
            var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
            $('#wicon').attr('src', iconurl);
        })
    }

    const error = () => {
        console.log("Unable to retrieve your location")
    }

    navigator.geolocation.getCurrentPosition(success, error);

}

$( document ).ready(findMyLocation)
// document.querySelector("#temerature").addEventListener('click', findMyLocation)