$(document).ready(() => {

    // Project type dropdown

    $("#projectType").on('change', function(){

        let projectValue = $(this).val();

        if(projectValue == 0){

            $('.levelOneSvgs').css('transform', 'translateX(1500px)');

        }

        else{

            $('.levelOneSvgs').css('transform', 'translateX(0px)');

        }

        if(projectValue == 1){

            $('.levelOneSvgs').html(`<img src="assets/images/contactFormImages/staticWebsiteSvg.svg" alt="Static website icon"/>`);

        }

        if(projectValue == 2){

            $('.levelOneSvgs').html(`<img src="assets/images/contactFormImages/staticWebsiteSvg.svg" alt="Static website icon"/>
            <img src="assets/images/contactFormImages/interactiveWebsiteSvg.svg" alt="Interactive website icon"/>`);

        }

        if(projectValue == 3){

            $('.levelOneSvgs').html(`<img src="assets/images/contactFormImages/dynamicWebsiteSvg.svg" alt="Dynamic website icon"/>`);

        }

        if(projectValue == 4){

            $('.levelOneSvgs').html(`<img src="assets/images/contactFormImages/dynamicWebsiteSvg.svg" alt="Dynamic website icon"/>
            <img src="assets/images/contactFormImages/interactiveWebsiteSvg.svg" alt="Interactive website icon"/>`);

        }

        if(projectValue == 5){

            $('.levelOneSvgs').html(`<img src="assets/images/contactFormImages/webAppSvg.svg" alt="Web app icon"/>`);

        }

        if(projectValue == 6){

            $('.levelOneSvgs').html(`<img src="assets/images/contactFormImages/ecommerceSvg.svg" alt="Shopping cart icon"/>`);

        }

    });



    // Content type

    $("#contentType").on('change', function(){

        let contentValue = $(this).val();

        if(contentValue == 0){

            $('.levelTwoSvgs').css('transform', 'translateX(1500px)');

        }

        else{

            $('.levelTwoSvgs').css('transform', 'translateX(0px)');

        }


    });


    // Design type

    $("#designType").on('change', function(){

        let designValue = $(this).val();

        if(designValue == 0){

            $('.levelThreeSvgs').css('transform', 'translateX(1500px)');

        }

        else{

            $('.levelThreeSvgs').css('transform', 'translateX(0px)');

        }


    });


    // Colors type

    $("#colorType").on('change', function(){

        let colorsValue = $(this).val();

        if(colorsValue == 0){

            $('.levelFourSvgs').css('transform', 'translateX(1500px)');

        }

        else{

            $('.levelFourSvgs').css('transform', 'translateX(0px)');

        }


    });


});