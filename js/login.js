var LoginForm = document.getElementById("LoginForm");
    var RegForm = document.getElementById("RegForm");
    var Indicator = document.getElementById("Indicator");


    function register(){
        LoginForm.transform = "translatex(300px)";
        RegForm.style.transform = "translatex(300px)";
        Indicator.style.transform = "translatex(55px)";
    }
    function login(){
        LoginForm.style.transform = "translatex(300px)";
        RegForm.style.transform = "translatex(300px)";
        Indicator.style.transform = "translatex(-45px)";
    }