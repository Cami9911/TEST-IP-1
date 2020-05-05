function getProfileInf(){
    var xhttp;
    var url = "http://sma-a4.herokuapp.com/linkedin/profile";
    console.log(url);

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest()
    } else {
        xhttp = new ActiveXObject('Microsoft.XMLHTTP')
    };
    
    xhttp.open('GET', url, true)
    xhttp.send(null)  
}