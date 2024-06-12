let userInput = 0
let meters = 0
let feet = 0
let liters = 0
let gallons = 0
let kilos = 0
let pounds = 0

const lengthText = document.getElementById("length-el")
const volumeText = document.getElementById("volume-el")
const massText = document.getElementById("mass-el")
const inputForm = document.getElementById("input-form")
const convertButton = document.getElementById("convert-btn")

let lengthString = `${userInput} meters = ${feet} feet | ${userInput} feet = ${meters} meters`
let volumeString = `${userInput} liters = ${gallons} gallons | ${userInput} gallons = ${liters} liters`
let massString = `${userInput} kilos = ${pounds} pounds | ${userInput} pounds = ${kilos} kilos`

inputForm.value = 0
lengthText.textContent = lengthString
volumeText.textContent = volumeString
massText.textContent = massString

convertButton.addEventListener("click", () => {
    userInput = inputForm.value
    conversion(userInput)
})

function conversion(userInput) {
    feet = userInput * 3.281
    meters = userInput / 3.281
    liters = userInput * 3.785
    gallons = userInput / 3.785
    kilos = userInput / 2.205
    pounds = userInput * 2.205

    lengthString = `${userInput} meters = ${feet.toFixed(3)} feet | ${userInput} feet = ${meters.toFixed(3)} meters`
    volumeString = `${userInput} liters = ${gallons.toFixed(3)} gallons | ${userInput} gallons = ${liters.toFixed(3)} liters`
    massString = `${userInput} kilos = ${pounds.toFixed(3)} pounds | ${userInput} pounds = ${kilos.toFixed(3)} kilos`

    lengthText.textContent = lengthString
    volumeText.textContent = volumeString
    massText.textContent = massString
}