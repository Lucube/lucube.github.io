function init() {
	var endpoint1 = "https://euw1.api.riotgames.com/tft/summoner/v1/summoners/by-name/Tivorak";
	var xhttp = new XMLHttpRequest();
	
	var apikey = document.getElementById("apikey").value;

	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		document.getElementById("outputtext").innerHTML = this.responseText;
	}
	else {
		document.getElementById("outputtext").innerHTML = this.status;
	}};
	
	xhttp.open("GET", endpoint1, true);
	xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
	xhttp.setRequestHeader("X-Riot-Token", apikey);
	xhttp.send();
}