let password_length = document.querySelector('input#password_length')

let output_password_length = document.querySelector('output')

password_length.addEventListener('input', function show_password_length() {
    output_password_length.innerHTML = Number(password_length.value)
})

let generate_password_button = document.querySelector('input#generate_password_button')

let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

generate_password_button.addEventListener('click', function password (event) {
    event.preventDefault()

    let random_character = ''

    for (let i = 0; i < password_length.value; i++) {
        random_character += characters.charAt(Math.floor(Math.random() * characters.length))
    }
})