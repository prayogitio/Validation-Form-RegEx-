const inputs = document.querySelectorAll('input');

const patterns = {
    username: /^[a-z0-9A-Z]{8,10}$/,
    email: /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[\w]{8,20}$/,
    phone: /^\+62[\d]{11,13}$/
};

function validate(field, regex) {
    return regex.test(field.value);
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        if (e.target.value === '') {
            document.getElementById(e.target.attributes.name.value).className = "form-group has-error";
            console.log(document.getElementById(e.target.attributes.name.value).className);
        } else if (validate(e.target, patterns[e.target.attributes.name.value])) {
            console.log(document.getElementById(e.target.attributes.name.value).className);
            document.getElementById(e.target.attributes.name.value).className = "form-group has-success";
        } else {
            console.log(document.getElementById(e.target.attributes.name.value).className);
            document.getElementById(e.target.attributes.name.value).className = "form-group has-warning";
        }
    });
});