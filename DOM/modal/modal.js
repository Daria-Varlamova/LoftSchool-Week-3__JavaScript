const openButton = document.querySelector("#openOverlay");
const body = document.body;




openButton.addEventListener("click", function () {
    const overlayElement = document.createElement("div");
    overlayElement.classList.add("overlay");

    overlayElement.addEventListener("click", function (e) {
        if (e.target === overlayElement) {
            closeElement.click();
        }
    })

    const contentElement = document.createElement("div");
    contentElement.classList.add("content");

    contentElement.innerHTML = "Hello!"

    const closeElement = document.createElement("a");
    closeElement.classList.add("close");
    closeElement.textContent = "x";
    closeElement.href = "#";

    closeElement.addEventListener("click", function (e) {
        e.preventDefault();
        body.removeChild(overlayElement);
    })

    const containerElement = document.createElement("div");
    containerElement.classList.add("modal-container");

    overlayElement.appendChild(containerElement);
    containerElement.appendChild(closeElement);
    containerElement.appendChild(contentElement);
    body.appendChild(overlayElement);
});