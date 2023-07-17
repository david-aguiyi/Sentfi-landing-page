function scrollFunction() {
	if (window.innerWidth < 768) {
		document.getElementById("logo").style.width = "100px";
		// doc1ument.getElementById("navbar").style.padding = "0.75rem 1.5rem";
	} else if (
		document.body.scrollTop > 50 ||
		document.documentElement.scrollTop > 50
	) {
		document.getElementById("navbar").style.background = "#100420de";
		document.getElementById("navbar").style.padding = "1rem 1.7rem";
		document.getElementById("logo").style.width = "125px";
		document.getElementById("navbar").style.height = "6rem";
	} else {
		document.getElementById("navbar").style.background = "none";
		document.getElementById("navbar").style.padding = "-0.77rem 0.5rem";
		document.getElementById("logo").style.width = "150px";
		document.getElementById("navbar").style.height = "5rem";
	}
}

window.onscroll = function () {
	scrollFunction();
};
