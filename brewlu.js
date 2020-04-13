$(document).ready(function() {
    $(".answer").hide();

    $(".question").click(function() {
        
        if( $(this).next().is(":visible")){
            $(this).next().slideToggle();
            /*$(this).next().animate(
                {
                    background: red,
                    opacity: 0.2
                }
            );*/
        }
        else {
            // hide all open answer divs
            $(".answer").hide();

            // show the next answer div
            $(this).next().slideToggle();
        }
    });

    $(window).on("scroll", function(){
        if( $(window).scrollTop() > 0) {

            document.getElementById("brewlulogo").style.color = "black";
            document.getElementById("login").style.color = "black";
            document.getElementsByClassName("top-bar")[0].style.background = "white";

            /*$(".top-bar") =
                {background: 'white'};
            $(".top-bar #brewlulogo").animate( {
                color: 'black'
            } );
            $("top-bar #login").animate( {
                color: 'black'
            } );*/
        }
        else {
            document.getElementById("brewlulogo").style.color = "white";
            document.getElementById("login").style.color = "white";
            document.getElementsByClassName("top-bar")[0].style.background = "transparent";
            /*$(".top-bar") =
                {background: 'transparent'};
            $(".top-bar #brewlulogo").animate( {
                color: 'white'
            } );
            $("top-bar #login").animate( {
                color: 'white'
            } );*/
        }
    });

    var slider = tns({
        container: '.movie-list-slider',
        items: 4, 
        loop: false,
        nav: false,
        prevButton: '.previous',
        nextButton: '.next',
        slideBy: 'page'
    });

    $(".previous").click(function(e){
        e.preventDefault();
    });

    $(".next").click(function(e){
        e.preventDefault();
    });

    
  });