$(document).ready(function(){

    ////////

    $('.formDropDown').on('change', function(){

        let dropDownValue = $(this).val();

        if(dropDownValue == 0){

            $(this).next().css('display', 'block');

        }

        else{

            $(this).next().css('display', 'none');

        }
        
    });

    ////////

    $('#mail').on('blur', function(){

        let regexMail = /^[a-z\/\.\-\_\d]+\@[a-z]+(\.[a-z]+){1,2}$/;

        let mailValue = $(this).val();

        if(regexMail.test(mailValue)){

            $(this).next().css('display', 'none');

        }

        else{

            $(this).next().css('display', 'block');

        }

    });

    /////////

    $('#completeFormButton').on('click', checkForm);

});



function checkForm(){

    let greske = [];

    // Vrednosti polja

    let mailValue = $('#mail').val();

    // Regex for mail

    let regexMail = /^[a-z\/\.\-\_\d]+\@[a-z]+(\.[a-z]+){1,2}$/;

    // Provera maila

    if(regexMail.test(mailValue)){

        document.getElementById('mailErrorPar').style.display = 'none';

    }

    else{

        document.getElementById('mailErrorPar').style.display = 'block';

        greske.push('error');

    }

    // Funckija za dropdown-e

    let dropdownsNodeList = document.getElementsByClassName('formDropDown');

    let dropdownsArray = Array.from(dropdownsNodeList);

    for(let i = 0; i < dropdownsArray.length ; i++){

        let currValue = dropdownsArray[i].value;

        if(currValue == 0){

            dropdownsArray[i].nextElementSibling.style.display = 'block';

            greske.push('error');

        }

        else{

            console.log('meme')

            dropdownsArray[i].nextElementSibling.style.display = 'none';

        }

    }

    // Uspeh forme

    // console.log(greske)

    if(greske.length == 0){

        document.getElementById('successFormPar').style.display = 'block';

        setTimeout(function(){

            // Ajax

        }, 1500);

    }

}