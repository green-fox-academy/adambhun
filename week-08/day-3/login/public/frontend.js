'use strict';

document.querySelector('.field-icon').addEventListener('mouseover', function (e) {
    document.querySelector('input[name="PASSWORD"]').setAttribute('type', 'text');
});

document.querySelector('.field-icon').addEventListener('mouseout', function (e) {
    document.querySelector('input[name="PASSWORD"]').setAttribute('type', 'password');
});
