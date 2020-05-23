$(document).ready(function () {
    // Navbar Active
    $(".navbar-default .navbar-nav>li>a").click(function () {
        $(this).parent().addClass("active").siblings().removeClass("active");
        var hrefClicked = $(this).parent().attr("scrollTo");
        $("html,body").animate({
            scrollTop: $(hrefClicked).offset().top - $(".navbar").height()
        }, 1000);
    });

    $(".header .content button").click(function () {
        $("html,body").animate({
            scrollTop: $(".services").offset().top - $(".navbar").height()
        }, 1000);
    });


    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(".header").height() - $(".navbar").height() - 1) {
            $(".navbar-default").css("background-color", "rgba(0,0,0,0.9)");
        } else {
            $(".navbar-default").css("background-color", "transparent");
        }
    });

    $(".h1-resp").fitText(1.2 ,{
        minFontSize: '20px',
        maxFontSize: '80px'
    });
    
    $(".h2-resp").fitText(1.2 ,{
        minFontSize: '20px',
        maxFontSize: '40px'
    });
});

// Loading Screen
$(window).load(function () {
    $(".loading .cssload-loader").delay(1000).fadeOut(1000, function () {
        $(".loading").fadeOut(1000, function () {
            $("body").css("overflow", "auto");
            $(".loading").remove();
        });
    });
});
