$(document).ready(() => {

    // Udaljenost elemenata od vrha strane

    let letsTalkBigButton = $('#letsTalkMain').offset().top;

    let whatWeDoHeading = $('#whatWeDoHeading').offset().top;

    let howWeWorkHeading = $('#howWeWorkHeading').offset().top;

    let ourProjectsHeading = $('#ourProjectsHeading').offset().top;
    

    $(window).on('scroll', () => {

        //Trenutna koordinata na stranici

       let scroll = $(window).scrollTop();

       //

      // Envelope dugme prikaz i sakrivanje

      if(scroll >= letsTalkBigButton - 100){

        $('#letsTalkMain').addClass('letsTalkMainRemove');

        $('#envelopeButton').addClass('envelopeAdd');

      }

      else{

        $('#letsTalkMain').removeClass('letsTalkMainRemove');

        $('#envelopeButton').removeClass('envelopeAdd');

      }

      ////////



      // Prikazivanje projekt boxova

      // if(scroll >= ourProjectsHeading - 200){


      //   $('.projectBoxes > .projectBox:first-child').css({

      //     'animation' : 'oddProjectTranslate 2s',
      //     'animation-fill-mode' : 'forwards'


      //   });

        
      // }

      // if(scroll >= ourProjectsHeading - 100){


      //   $('.projectBoxes > .projectBox:nth-child(2)').css({

      //     'animation' : 'evenProjectTranslate 2s',
      //     'animation-fill-mode' : 'forwards',
      //     'animation-delay' : '.2s'


      //   });

        
      // }

      // if(scroll >= ourProjectsHeading + 100){


      //   $('.projectBoxes > .projectBox:nth-child(3)').css({

      //     'animation' : 'oddProjectTranslate 2s',
      //     'animation-fill-mode' : 'forwards',
      //     'animation-delay' : '.2s'


      //   });

        
      // }


      ////////


      // Robot Guideovi


      //Robot Guide Main

      if(scroll > 0){

        $('.robotGuideRotateDivMain').css(

          {
            
            'animation' : 'robotGuideLeftTranslate 8.5s',
            'animation-fill-mode' : 'forwards'

          });

          $('.robotGuideRotateDivMain > img').css(

            {
              
              'animation' : 'robotGuideLeftRotate 8.5s',
              'animation-fill-mode' : 'forwards'
  
            });

            $('.circleOneMain').css(

              {
                
                'animation' : 'messageAndCircleShower 1s',
                'animation-delay' : '.8s',
                'animation-fill-mode' : 'forwards'
  
              });
  
            $('.circleTwoMain').css(
  
              {
                  
                'animation' : 'messageAndCircleShower 1s',
                'animation-delay' : '1.3s',
                'animation-fill-mode' : 'forwards'
    
              });
  
            $('.messageBoxMain').css(
  
                {
                    
                  'animation' : 'messageAndCircleShower 1s',
                  'animation-delay' : '1.8s',
                  'animation-fill-mode' : 'forwards'
      
               });


            setTimeout(() => {

              $('.circleOneMain').hide();

            }, 6000);

            setTimeout(() => {

              $('.circleTwoMain').hide();

            }, 5500);

            setTimeout(() => {

              $('.messageBoxMain').hide();

            }, 5000);

      }


      // Robot Guide What We Do
      
      if(scroll > whatWeDoHeading - 150){

        $('.robotGuideRotateDivWhatWeDo').css(

          {
            
            'animation' : 'robotGuideRightTranslate 8.5s',
            'animation-fill-mode' : 'forwards'

          });

          $('.robotGuideRotateWhatWeDo > img').css(

            {
              
              'animation' : 'robotGuideRightRotate 8.5s',
              'animation-fill-mode' : 'forwards'
  
            });

            $('.circleOneWhatWeDo').css(

              {
                
                'animation' : 'messageAndCircleShower 1s',
                'animation-delay' : '.8s',
                'animation-fill-mode' : 'forwards'
  
              });
  
            $('.circleTwoWhatWeDo').css(
  
              {
                  
                'animation' : 'messageAndCircleShower 1s',
                'animation-delay' : '1.3s',
                'animation-fill-mode' : 'forwards'
    
              });
  
            $('.messageBoxWhatWeDo').css(
  
                {
                    
                  'animation' : 'messageAndCircleShower 1s',
                  'animation-delay' : '1.8s',
                  'animation-fill-mode' : 'forwards'
      
               });


            setTimeout(() => {

              $('.circleOneWhatWeDo').hide();

            }, 6000);

            setTimeout(() => {

              $('.circleTwoWhatWeDo').hide();

            }, 5500);

            setTimeout(() => {

              $('.messageBoxWhatWeDo').hide();

            }, 5000);

      }

          

      ///////////////


      // Robot Guide How We Work

        if(scroll > howWeWorkHeading - 150){

          $('.robotGuideRotateDivHowWeWork').css(

            {
              
              'animation' : 'robotGuideLeftTranslate 8.5s',
              'animation-fill-mode' : 'forwards'
  
            });
  
            $('.robotGuideRotateDivHowWeWork > img').css(
  
              {
                
                'animation' : 'robotGuideLeftRotate 8.5s',
                'animation-fill-mode' : 'forwards'
    
              });
  
              $('.circleOneHowWeWork').css(
  
                {
                  
                  'animation' : 'messageAndCircleShower 1s',
                  'animation-delay' : '.8s',
                  'animation-fill-mode' : 'forwards'
    
                });
    
              $('.circleTwoHowWeWork').css(
    
                {
                    
                  'animation' : 'messageAndCircleShower 1s',
                  'animation-delay' : '1.3s',
                  'animation-fill-mode' : 'forwards'
      
                });
    
              $('.messageBoxHowWeWork').css(
    
                  {
                      
                    'animation' : 'messageAndCircleShower 1s',
                    'animation-delay' : '1.8s',
                    'animation-fill-mode' : 'forwards'
        
                 });
  
  
              setTimeout(() => {
  
                $('.circleOneHowWeWork').hide();
  
              }, 6000);
  
              setTimeout(() => {
  
                $('.circleTwoHowWeWork').hide();
  
              }, 5500);
  
              setTimeout(() => {
  
                $('.messageBoxHowWeWork').hide();
  
              }, 5000);

        }



      ///////////////


      ///////////////


    });

});