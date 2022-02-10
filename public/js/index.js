//jshint esversion:6
$("#submit").on("click", (e) => {
    const city = $("#city").val();
    const unit = $("#unit").val();
    if(city !== ""){
        $.post(
            `/getTemperature`,
            { 'q': city, 'unit': unit },
            (data) => {
                $(".city").text(data.city + ` - ${data.country}` );
                if(unit === "metric"){
                    $(".temperture").text(data.temp + " °C");
                }else{
                    $(".temperture").text(data.temp + " °F");
                }
                $(".description").text(data.weather);
                $(".icon").attr("src",`http://openweathermap.org/img/wn/${data.icon}@2x.png`);
                $("#result").show();
            }
        );
    }
});