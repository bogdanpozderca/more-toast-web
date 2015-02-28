var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function getPic() {
    facebookConnectPlugin.api( "me/picture?redirect=false",
        function (response) { $('#profilePic').attr('src', response['data']['url']) },
        function (response) { $('#profilePic').attr('src', response['data']['url']) }); 
}

function storeUser(id){
    $.ajax({
            type: 'post',
            url: "../php/user.php",
            data: {'fb_Id':id},
            success: function(data) {
                console.log(data);
            }
    }); 

}



var login = function () {
    if (window.cordova.platformId == "browser") {
        var appId = prompt("Enter FB Application ID", "779017215511360");
        facebookConnectPlugin.browserInit('779017215511360');
    }
    facebookConnectPlugin.login( ['public_profile','email','user_friends']); 
    $('.fbli').fadeOut('slow', function() {
        $('.fblo').fadeIn('slow');
        facebookConnectPlugin.api( "me",
            function (response) { },
            function (response) { 
                $('#title').html(response['name']);
                getPic();

                storeUser(response['id']);
            }); 
    });

}



var logout = function () { 
    facebookConnectPlugin.logout();
    $('.fblo').fadeOut('slow', function() {
        $('.fbli').fadeIn('slow');
    }); 
}