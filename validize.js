const inputs = document.querySelectorAll('input');

const patterns = {
    username: /^[a-z0-9A-Z]{8,15}$/,
    email: /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[\w]{8,20}$/,
    phone: /^\+62[\d]{10,12}$/
};

function validate(field, regex) {
    return regex.test(field.value);
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        if (e.target.value === '') {
            document.getElementById(e.target.attributes.name.value).className = "form-group has-error";
            if (check_form()) {
                document.getElementById('btnLogin').className = 'btn btn-danger';
            } else {
                document.getElementById('btnLogin').className = 'btn btn-danger disabled';
            }
        } else if (validate(e.target, patterns[e.target.attributes.name.value])) {
            document.getElementById(e.target.attributes.name.value).className = "form-group has-success";
            if (check_form()) {
                document.getElementById('btnLogin').className = 'btn btn-danger';
            } else {
                document.getElementById('btnLogin').className = 'btn btn-danger disabled';
            }
        } else {
            document.getElementById(e.target.attributes.name.value).className = "form-group has-warning";
            if (check_form()) {
                document.getElementById('btnLogin').className = 'btn btn-danger';
            } else {
                document.getElementById('btnLogin').className = 'btn btn-danger disabled';
            }
        }
    });
});

function check_form() {
    var res = true;
    inputs.forEach((input) => {
        if (document.getElementById(input.name).className != 'form-group has-success') {
            res = false;
        }
    });
    return res;
}