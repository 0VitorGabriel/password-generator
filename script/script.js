let password_length = document.querySelector('input#password_length')

let output_password_length = document.querySelector('output')

password_length.addEventListener('input', function show_password_length() {
    output_password_length.innerHTML = Number(password_length.value)
})