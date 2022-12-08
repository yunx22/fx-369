var preLoad;
function loaderFunc() {
	preLoad = setTimeout(showPage, 1500);
}

function showPage() {
	document.getElementById("loader").style.display = "none";
	document.getElementById("mainBlock").style.display = "block";
}