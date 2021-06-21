const generateButton = document.querySelector('.generate-button')
const caps = document.querySelector('.caps')
const specials = document.querySelector('.special')
const password = document.querySelector('.password')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'b', 'v', 'c', 'x', 'z', 'o', 'p', 'q', 'w', 'r']
const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
const specialCharacters = ['-', '_', '*']

const lowerCaseAndSpecial = numbers.concat(lowerCaseLetters, specialCharacters)
const numbersAndLowersCase = numbers.concat(lowerCaseLetters, upperCaseLetters)
const numbersLowersAndUpper = numbers.concat(lowerCaseLetters, upperCaseLetters)
const allCharacters = numbers.concat(lowerCaseLetters, upperCaseLetters, specialCharacters)

let createdPassword = ''

const randomNumber = (array) => {
    const random = Math.floor(Math.random() * array.length)
    return array[random]
}

const createPassword = () => {
    if (specials.checked) {
        for (i = 0; i <= 20; i++) {
            createdPassword += randomNumber(lowerCaseAndSpecial)
      }}

    if (caps.checked) {
      for (i = 0; i <= 20; i++) {
          createdPassword += randomNumber(numbersLowersAndUpper)
    }}

    if (caps.checked && specials.checked) {
        for (i = 0; i <= 20; i++) {
            createdPassword += randomNumber(allCharacters)
      }}
      
      if (!caps.checked && !specials.checked) {
          for (i = 0; i <= 20; i++) {
            createdPassword += randomNumber(numbersAndLowersCase)
      }
    }}


generateButton.addEventListener('click', () => {
    createPassword()
    password.innerText = createdPassword
    createdPassword = ''
})

