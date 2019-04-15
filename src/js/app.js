import IMask from 'imask';

var moduleForm = (function () {

    var sendObj = {};

    var createMask = function (elem) {

        if (!elem) {
            return;
        }
        var phoneInput = document.getElementById(elem);

        var maskOptions = {
            mask: '+{7}(000)000-00-00'
        };

        var mask = new IMask(phoneInput, maskOptions);
    };

    var checkInputs = function (elem) {

        if (!elem) {
            return;
        }

        var getElements = document.querySelectorAll(elem);

        for (var i = 0; i < getElements.length; i++) {

            switch (getElements[i].id) {
                case 'phone':
                    console.log('phone');
                    validateInput(getElements[i].id, getElements[i]);
                    break;
                case 'pass':
                    console.log('pass');
                    validateInput(getElements[i].id, getElements[i]);
                    break;
                case 'button':
                    sendForm(getElements[i]);
                    break;
            }
        }

    };

    var validateInput = function (id, elem) {

        switch (id) {
            case 'phone':
                elem.addEventListener('change', function () {
                    if (elem.value.length === 16) {
                        sendObj.phone = elem.value;
                        elem.parentNode.classList.add('login-form__wrapper--ok');
                        elem.parentNode.classList.remove('login-form__wrapper--err');
                    } else {
                        elem.parentNode.classList.add('login-form__wrapper--err');
                    }
                });
                break;
            case 'pass':
                //var regExPass = /^[a-zA-Z0-9]/gm;
                elem.addEventListener('change', function () {
                    if (elem.value.length >= 5) {
                        sendObj.pass = elem.value;
                        elem.parentNode.classList.add('login-form__wrapper--ok');
                        elem.parentNode.classList.remove('login-form__wrapper--err');
                    } else {
                        elem.parentNode.classList.add('login-form__wrapper--err');
                    }
                });
                break;
        }

    };

    var sendForm = function (btnForm) {
        btnForm.addEventListener('click', function (event) {
            event.preventDefault();

            if (sendObj.phone && sendObj.pass) {
                btnForm.disabled = false;
                console.log(sendObj);
            }

        })
    };

    return {
        createMask: createMask,
        checkInputs: checkInputs,
        sendForm: sendForm,
    }
})();

moduleForm.createMask('phone');
moduleForm.checkInputs('input');