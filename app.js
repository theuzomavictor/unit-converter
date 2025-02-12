const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

btnEl.addEventListener("click", function() {
    let inputValue = Number(inputEl.value)

    // FOR METERS

    lengthEl.textContent = `
    ${inputValue} meters = ${(inputValue*3.281).toFixed(3)} feet | ${inputValue} feet = ${(inputValue*0.305).toFixed(3)} meters
    `

    // FOR VOLUMES

    volumeEl.textContent = `
    ${inputValue} liters = ${(inputValue*0.264).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue*3.785).toFixed(3)} liters
    `

    // FOR MASS

    massEl.textContent = `
    ${inputValue} kilograms = ${(inputValue*2.204).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue*0.453).toFixed(3)} kilograms
    `
})