// Change the capabilities items
const capabilitiesInformaion = document.querySelector('.capabilities-wrapper');
const capabilitiesButton = document.querySelectorAll('.capabilities-button');
const capabilityItem = document.querySelectorAll('.capabilities-content');

capabilitiesInformaion.addEventListener('click', function (e) {
    const id = e.target.dataset.id;
    if (id) {
        capabilitiesButton.forEach(function (btn) {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');

        capabilityItem.forEach(function (item) {
            item.classList.remove('active');
        });
        const element = document.getElementById(id);
        element.classList.add('active');
    }
});

// Modal window
// Show modal window (delivery)
const deliveryButton = document.querySelector('.delivery-button');
const modalContainer = document.querySelector('.modal-container');
const modalCloseButton = document.querySelector('.modal-close-button');
const fields = document.querySelectorAll('.field');

deliveryButton.addEventListener('click', function () {
    modalContainer.classList.add('modal-container-show');
})

modalCloseButton.addEventListener('click', function () {
    modalContainer.classList.remove('modal-container-show');
    for (let i = 0; i < fields.length; i++) {
        fields[i].parentElement.classList.remove('error');
        fields[i].value = '';
        fields[i].nextElementSibling.innerHTML = '';
        numberField.value = '1';
    }
})

// Check of correct inputs on forms
const modalDeliveryForm = document.querySelector('.modal-delivery-form');
const fieldGroup = modalDeliveryForm.querySelector('.field-group');
const nameField = modalDeliveryForm.querySelector('.field-name');
const emailField = modalDeliveryForm.querySelector('.field-email');
const numberField = modalDeliveryForm.querySelector('.field-number');
const errorText = document.querySelector('.error-text');

modalDeliveryForm.addEventListener('submit', function (e) {

    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            fields[i].parentElement.classList.add('error');
            if (fields[i].classList.contains('field-name')) {
                fields[i].nextElementSibling.innerHTML = 'Добавьте имя';
            }
            e.preventDefault();
        } else {
            fields[i].parentElement.classList.remove('error');
            fields[i].nextElementSibling.innerHTML = '';
        }
    }

    checkValidEmail();

});

function checkValidEmail() {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailField.value.match(validRegex)) {
        emailField.parentElement.classList.add('error');
        emailField.nextElementSibling.innerHTML = 'Забавный у вас адрес';
        e.preventDefault();
    } 
     else {
        emailField.parentElement.classList.remove('error');
        emailField.nextElementSibling.innerHTML = '';
    }

}

//Count in input
const minusButton = document.querySelector('.number-minus');
const plusButton = document.querySelector('.number-plus');

plusButton.addEventListener('click', function (e) {
    increaseValue(e);
});

minusButton.addEventListener('click', function (e) {
    decreaseValue(e);
});

function increaseValue() {
    let modalInputNumber = document.querySelector('.field-number');
    let value = parseInt(modalInputNumber.value, 10);

    value++;

    modalInputNumber.value = value;
}

function decreaseValue() {
    let modalInputNumber = document.querySelector('.field-number');
    let value = parseInt(modalInputNumber.value, 10);

    if (value <= 1) {
        value = 1;
    } else {
        value--;
    }

    modalInputNumber.value = value;
}
