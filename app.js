const materiallar = [
	{imgHref: "rasm1.jpg"},
	{ audioHref: "aud1.mp3"},
	{ videoHref: "v1.mp4"},
	{imgHref: "rasm2.jpg"},
	{ audioHref: "aud2.mp3"},
	{ videoHref: "v2.mp4"},
	{imgHref: "rasm3.jpg"},
	{imgHref: "rasm4.jpg"},
	{ audioHref: "aud3.m4a"},
	{ videoHref: "v3.mp4"}
]
const asosiyTana = document.getElementById('a');
const svgDownload = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>';

materiallar.forEach(material => {
	const container = document.createElement('div');
	container.classList.add('container');
	container.innerHTML += `<img src="${material.imgHref}" alt="kartinka" class="rasm"><a href="${material.imgHref}" download>${svgDownload}</a>`;
	container.innerHTML += `<audio controls class="audio"><source src="${material.audioHref}" type="audio/mpeg"></audio><a href="${material.audioHref}" download>${svgDownload}</a>`;
	container.innerHTML += `<video controls class="video"><source src="${material.videoHref}" type="video/mp4"></video><a href="${material.videoHref}" download>${svgDownload}</a>`;
	asosiyTana.appendChild(container);
})