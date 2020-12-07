// Prikaz loadera u zavinsosti od vremena

let time = Math.round(new Date().getTime() / 1000 / 60);

if (localStorage) {

    if (!localStorage.getItem('videoShowSigma')) {

        setTimeout(function (e) {

            $('.preloader').fadeOut();

            $('.changedDot').css({

                'animation' : 'movingDotMain 1s ease',
                'animation-delay' : '3.7s',
                'animation-fill-mode' : 'forwards'

            })

            $('#sigmaHeadingSpan').addClass('changedDot');

           // $('html').addClass('vert');

            $('html').addClass('vert');

            localStorage.setItem('videoShowSigma', time);

        }, 3000);

        // $('body').css('overflow-y', "hidden");

        // $('.preloader').fadeOut();

        // $('.infoBlock img').css("animation-delay", "1s");

        // $('.infoBlock a').css("animation-delay", "2s");

        // $('body').addClass('vert');

    }

    else {

        let getTimeFromLocal = JSON.parse(localStorage.getItem('videoShowSigma'));

       // console.log(time - getTimeFromLocal, time, getTimeFromLocal)

        if (time - getTimeFromLocal >= 5) {

            setTimeout(function (e) {

                $('.changedDot').css({

                    'animation' : 'movingDotMain 1s ease',
                    'animation-delay' : '3.7s',
                    'animation-fill-mode' : 'forwards'
    
                })
    
                $('#sigmaHeadingSpan').addClass('changedDot');

                $('.preloader').fadeOut();

                $('html').addClass('vert');

                localStorage.removeItem('videoShowSigma');

            }, 3000);

        }

        else {

            $('#sigmaHeadingSpan').addClass('changedDot');

            $('html').css('overflow-y', "auto");

            $('.preloader').fadeOut();
            
        }

    }

}

else {

    alert('Local Storage is not supported on your browser !');

}

  // Promena ikonice preloadera

  setTimeout(function(){

    $('#logoSigmaBigger').attr('src', 'assets/images/velikiLogoiSigma/Sigma logo crni.png');

  }, 1950);