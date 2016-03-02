$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'media/Forever.mp3');
    var $fotoramaDiv = $('#fotorama').fotorama();
    var fotorama = $fotoramaDiv.data('fotorama');
    $("#light-overlay").hide();

    $('.fotorama').on("fotorama:fullscreenenter", function() {
        fotorama.startAutoplay(2000);
        audioElement.play();
    });


    $('.fotorama').on("fotorama:fullscreenexit", function() {
        fotorama.stopAutoplay();
        audioElement.pause();
    });

    $('.fotorama').on("fotorama:show", function() {
        var ramdom = Math.floor((Math.random() * 5) + 1);



        switch (ramdom) {
            case 1:
                $(this).children().fadeOut();
                $(this).children().fadeIn();
                break;
            case 2:
                $(this).children().animate({
                    width: 'toggle'
                });
                break;
            case 3:
                $(this).children().animate({ borderSpacing: -360 }, {
                    step: function(now, fx) {
                        $(this).children().css('-webkit-transform', 'rotate(' + now + 'deg)');
                        $(this).children().css('-moz-transform', 'rotate(' + now + 'deg)');
                        $(this).children().css('transform', 'rotate(' + now + 'deg)');
                    },
                    duration: 'slow'
                }, 'linear');
                break;
            case 4:
                $(this).children().animate({
                    height: 'toggle'
                });
                break;
            default:
                break;
        }



    });

    $('.fotorama').on("fotorama:showend", function() {
        $(this).children().fadeIn();
    });

    $("#enable").on("click", function() {
        $(this).hide();
        $("#light-overlay").show();
        $("#disable").show();
        audioElement.play();

        fotorama.startAutoplay(2000);
    })
    $("#disable").on("click", function() {
        $(this).hide();
        $("#light-overlay").hide();
        $("#enable").show();
        audioElement.pause();
        fotorama.stopAutoplay();
    })

    $("#div-flip").on("click", function() {
        $(imageactive).removeClass("imageflipped");
        var imageactive = $(".fotorama__stage__shaft .fotorama__active img");
        if ($(imageactive).hasClass("imageflipped")) {
            $(imageactive).removeClass("imageflipped");
        } else {
            $(imageactive).removeAttr('class');
            $(imageactive).addClass("imageflipped");
        }
    })
    var i = 0;
    $("#div-rotate").on("click", function() {
        i += 1;
        if (i > 4) {
            i = 0;
        }
        var imageactive = $(".fotorama__stage__shaft .fotorama__active img");
        $(imageactive).removeAttr('class');
        switch (i) {
            case 1:
                $(imageactive).addClass("rotate90");
                break;
            case 2:
                $(imageactive).addClass("rotate180");
                break;
            case 3:
                $(imageactive).addClass("rotate270");
                break;
            case 4:
                $(imageactive).addClass("rotate360");
                break;
            default:
                $(imageactive).addClass("rotate90");
                break;
        }


    });
});
