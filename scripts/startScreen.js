(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);


    var addUser = document.getElementById("addUser");
    addUser.onclick = function () {
        window.open("http://m.me/2166048600129373/");   

        var gender = document.getElementById("sex_f").checked ? "female" : "male";
        var email = document.getElementById("email").value;
        var height = document.getElementById("height").value;
        var weight = document.getElementById("weight").value;
        var age = document.getElementById("age").value;

        var rootRef = firebase.database().ref();
        var usersRef = rootRef.child('users');
        var newUserRef = usersRef.push();
        newUserRef.set({
            "gender": gender,
            "email": email,
            "height": height,
            "weight": weight,
            "age": age,
        });
    }

    function onDeviceReady() {
        var config = {
            apiKey: "AIzaSyARfv3pU-xkqRPR9JobqOJtxxLiHL42sLc",
            authDomain: "healthcoach-7e29a.firebaseapp.com",
            databaseURL: "https://healthcoach-7e29a.firebaseio.com",
            projectId: "healthcoach-7e29a",
            storageBucket: "healthcoach-7e29a.appspot.com",
            messagingSenderId: "561547049284"
        };
        firebase.initializeApp(config);
    };

})();