let iconElement = document.querySelector("#menuBtn")
let ulElement = document.querySelector("#links")
let button = document.querySelector("#Btn")
let closButton = document.querySelector("#closBtn")


iconElement.addEventListener("click", function () {
ulElement.style.display = "flex"
button.style.display = "block"
iconElement.style.display = "none"
closButton.style.display = "block"
})


closButton.addEventListener("click", function () {
    ulElement.style.display = "none"
    button.style.display = "none"
    iconElement.style.display = "block"
    closButton.style.display = "none"
})