function scrollFunction() {
	window.innerWidth < 768
		? ((document.getElementById("logo").style.width = "100px"),
		  (document.getElementById("navbar").style.padding = "0.75rem 1.5rem"))
		: document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
		? ((document.getElementById("navbar").style.background = "#100420de"),
		  (document.getElementById("navbar").style.padding = "0.75rem 2.5rem"),
		  (document.getElementById("logo").style.width = "125px"))
		: ((document.getElementById("navbar").style.background = "none"),
		  (document.getElementById("navbar").style.padding = "2rem 3.5rem"),
		  (document.getElementById("logo").style.width = "150px"));
}
window.onscroll = function () {
	scrollFunction();
};
