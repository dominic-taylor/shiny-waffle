var nav = document.getElementsByTagName('nav');
document.getElementById("menu-button").addEventListener("click", 
	function(){
		nav[0].classList.toggle("nav-open");
});
document.getElementById("close-menu").addEventListener("click", 
	function(){
		nav[0].classList.toggle("nav-open");
});
