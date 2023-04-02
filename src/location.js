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
            document.getElementById("currentTMP").innerHTML = `${Math.round(data.main.temp)}℃`;
            temp = data.main.temp
            console.log(temp)
            if (temp < 16) {
                document.getElementById("alerMSG").innerHTML = "No heat stroke risk";
            }else if(temp < 19){
                document.getElementById("alerMSG").innerHTML = "Generally safe to exercise dogs at all times of day, although keep a close eye on large, obese and flat-faced breeds!";
            }else if(temp <23){
                document.getElementById("alerMSG").innerHTML = "Even at this temperature dogs are at risk of getting heat stroke if exercised too rigorously. Be careful!";
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