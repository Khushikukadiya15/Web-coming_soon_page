var countDownDate = new Date("auguest 12 , 2024 00:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("Hours").innerHTML = hours;
    document.getElementById("minites").innerHTML = minutes;
    document.getElementById("Seconds").innerHTML = seconds;

    if (distance < x)
    {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("Hours").innerHTML = "00";
        document.getElementById("minites").innerHTML = "00";
        document.getElementById("Seconds").innerHTML = "00";
    }

}, 1000)
