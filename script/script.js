const password_length_input = document.querySelector('input#password_length')

password_length_input.addEventListener('input', show_password_length)

const password_length_output = document.querySelector('output')

function show_password_length() {
    password_length_output.innerHTML = Number(password_length_input.value)
}

const button_uppercase = document.querySelector('input#uppercase')
const button_lowecase = document.querySelector('input#lowercase')
const button_numbers = document.querySelector('input#numbers')
const button_symbols = document.querySelector('input#symbols')

const generate_password_button = document.querySelector('input#generate_password_button')

generate_password_button.addEventListener('click', generate_password)

const characters_list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

const area_password = document.querySelector('h1#generated_password_area')

const button_copy_password = document.querySelector('input[type = button]')

function generate_password(event) {
    event.preventDefault()
        button_copy_password.classList.add('show_button')

        let random_character = ''

        for (let i = 0; i < password_length_input.value; i++) {
            random_character += characters_list.charAt(
                Math.floor(
                    Math.random() * characters_list.length
                )
            )
        }

        area_password.innerHTML = random_character
}

button_copy_password.addEventListener('click', copy_password)

function copy_password() {
    navigator.clipboard.writeText(area_password.innerHTML)

    alert('senha copiada para a área de transferência')
}