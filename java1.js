$(document).on('click', 'button', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);

});

$(document).ready(function () {
    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.navigation button').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navigation button').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("body").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("body").style.marginLeft= "0";
}

function openNav1() {
    document.getElementById("social_media").style.width = "250px";
    document.getElementById("body").style.marginLeft = "250px";
}

function closeNav1() {
    document.getElementById("social_media").style.width = "0";
    document.getElementById("body").style.marginLeft= "0";
}
