function getPostText() {

    var xhttp;
    var fbid = sessionStorage.getItem("id_user");
    var postid = "112510383726603_128873248756983";
	var url = "https://web-rfnl5hmkocvsi.azurewebsites.net/FBFINAL/REST.php?do=getText&postId=" + postid + "&fbid=" + fbid ;
    console.log(url);
    
	var displayed = 0; 

	if (window.XMLHttpRequest) {
		xhttp = new XMLHttpRequest()
	} else {
		xhttp = new ActiveXObject('Microsoft.XMLHTTP')
	};

	xhttp.onreadystatechange = function() {

		if (this.readyState == 4 && this.status == 200)
		{
			console.log(xhttp.response);
			var obj = JSON.parse(this.responseText);
			alert_message ="MESAJUL: " + obj.MESSAGE;
			console.log(alert_message);
			//alert(alert_message);

			document.getElementById("divLocation").innerHTML = alert_message;
        }
        else
        if (this.status == 404) {
            if (displayed == 0) {
              alert('No information found')
              location.reload()
              displayed++
            }
          }

	};

	xhttp.open('GET', url, true);
	xhttp.send(null);
}