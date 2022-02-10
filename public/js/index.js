//jshint esversion:6
$("#submit").on("click", (e) => {
    const city = $("#city").val();
    if(city !== ""){
        $.getJSON(
            `/getTemperature?q=${city}`,
            (data) => {
                $(".city").text(data.city + ` - ${data.country}` );
                $(".temperture").text(data.temp + " °C");
                $(".description").text(data.weather);
                $(".icon").attr("src",`http://openweathermap.org/img/wn/${data.icon}@2x.png`);
                $("#result").show();
            }
        );
    }
});