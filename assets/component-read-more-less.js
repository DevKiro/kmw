function toggleReadMore(shortId, fullId, anchorId) {
	const shortElement = document.getElementById(shortId);
	const fullElement = document.getElementById(fullId);
	const anchorElement = document.getElementById(anchorId);
	const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-height"), 10) * 3;

	const isHiddenShort = shortElement.getAttribute("aria-hidden") === "true";
	const isHiddenFull = fullElement.getAttribute("aria-hidden") === "true";

	shortElement.setAttribute("aria-hidden", !isHiddenShort);
	fullElement.setAttribute("aria-hidden", !isHiddenFull);

	if (!isHiddenShort) {
		shortElement.focus();
	} else {
		fullElement.focus();
	}

	window.scrollTo({
		top: anchorElement.getBoundingClientRect().top + window.pageYOffset - headerHeight,
		behavior: "smooth",
	});
}

document.addEventListener("keydown", function (event) {
	if (event.key === "Enter" || event.key === " ") {
		const activeBtn = document.activeElement;
		if (activeBtn && (activeBtn.classList.contains("readmore-link") || activeBtn.classList.contains("readless-link"))) {
			activeBtn.click();
			event.preventDefault();
		}
	}
});
