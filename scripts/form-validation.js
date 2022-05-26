// function to validate the fields are completed by the user
(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            }

            else if (form.checkValidity() == true) {
                event.preventDefault();
                getUserInfo();
                $('#UserInputForm').fadeOut('slow', function(){
                    $('#UserInputConfirm').fadeIn('slow');
                });
           }

            form.classList.add('was-validated')
        }, false)
        })
    })()


// populate dropdown menu with list of states
    var select = document.getElementById('selectState');
    var options = [
        'Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia',
        'Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan',
        'Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands',
        'Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia',
        'Washington','West Virginia','Wisconsin','Wyoming'
    ];

    for(var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement('option');
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }

    // create mask for phone number
    $(document).ready(function(){
        $('#InputPhoneNumber').mask('(000)-000-0000');
    });
    
    // create date picker with end date applied
    var date = (new Date()).toISOString().split('T')[0];
    $(document).ready(function(){
        $('#InputBirthDate').datepicker({
            format: 'mm/dd/yyyy',
            endDate: new Date(date)
        });
    });



// store user information
function getUserInfo() {
    first_name      = document.getElementById('InputFirstName').value;
    last_name       = document.getElementById('InputLastName').value;
    user_name       = document.getElementById('InputUserName').value;
    street          = document.getElementById('InputStreet').value;
    city            = document.getElementById('InputCity').value;
    state           = document.getElementById('selectState').value;
    zipcode         = document.getElementById('InputZipCode').value;
    textarea        = document.getElementById('InputTextarea').value;
    email           = document.getElementById('InputEmail').value;
    phone_number    = document.getElementById('InputPhoneNumber').value;
    birth_date      = document.getElementById('InputBirthDate').value;

    document.getElementById('UserFullName').innerHTML = first_name + ' ' + last_name;
    document.getElementById('UserFullUserName').innerHTML = user_name;
    document.getElementById('UserFullAddress').innerHTML = street + ', ' + city + ', ' + state + ' - ' + zipcode;
    document.getElementById('UserFullContactInfo').innerHTML = email + ' | ' + phone_number;
    document.getElementById('UserBirthDate').innerHTML = birth_date;
    document.getElementById('UserMessage').innerHTML = textarea;

}

// function to control use edit of original information
$('#editBtn').click(function(e){    
    $('#UserInputConfirm').fadeOut('slow', function(){
        $('#UserInputForm').fadeIn('slow');
    });
});
$('#sendEmail').click(function(e){    
    $('#UserInputConfirm').fadeOut('slow', function(){
        $('#UserInputSuccess').fadeIn('slow');
    });
});

// function to control sending email
$(function () {
    $('#sendEmail').click(function (event) {
    var email = 'ustropics@gmail.com';
    var subject = 'User Input from ' + first_name + ' ' + last_name;
    var emailBody = 'Full Name: ' + first_name + ' ' + last_name + "%0D%0AUsername: " + user_name + "%0D%0AAddress: " + street + ', ' + city + ', ' + state + ' - ' + zipcode +
    "%0D%0AContact Info: " + email + ' | ' + phone_number + "%0D%0ABirth Date: " + birth_date + "%0D%0AMessage: " + textarea;
    document.location = 'mailto:'+email+'?subject='+subject+'&body='+emailBody;
    });
});

