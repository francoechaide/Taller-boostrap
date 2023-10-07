const boton = document.getElementById("boton");
const optionsDropdown2 = document.getElementById("optionsDropdown2");

document.getElementById("menu").addEventListener("click", () => {
	optionsDropdown2.style.display = "none";
});

boton.addEventListener("click", () => {
	if (optionsDropdown2.style.display == "none") {
		optionsDropdown2.style.display = "block";
	} else {
		optionsDropdown2.style.display = "none";
	}
});
