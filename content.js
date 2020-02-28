function myTimer() {
	setTimeout(function () {
		document.getElementById("receive").click();
		document.getElementById("receive").innerText = new Date().toLocaleString();
		myTimer();
	}, 480000);
}
window.onload = () =>{
	myTimer();
}