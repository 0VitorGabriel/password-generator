const password_length_input = document.querySelector('input#password_length')

const password_length_output = document.querySelector('output')

password_length_input.addEventListener('input', function show_password_length() {
    password_length_output.innerHTML = Number(password_length_input.value)
})

const generate_password_button = document.querySelector('input#generate_password_button')

const characters_list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

generate_password_button.addEventListener('click', function generate_password (event) {
    event.preventDefault()

    let random_character = ''

    for (let i = 0; i < password_length_input.value; i++) {
        random_character += characters_list.charAt(
            Math.floor(
                Math.random() * characters_list.length
            )
        )
    }
})