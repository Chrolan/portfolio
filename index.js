//Initial configuration

function navBarFunction() {
    var x = document.getElementById("nav-bar");
    if (x.className === "nav-bar") {
        x.className += " responsive";
    } else {
        x.className = "nav-bar";
    }
}

$('.nav-bar > a').on('click', function(event){
    // First we take away the background color (selection) from the <li>
    $('.selectedNavElement').removeClass('selectedNavElement');

    let $currentElement = $(this);

    // We update the just clicked <li> with the background color
    $currentElement.addClass('selectedNavElement');

    $('.js-error-message-box').empty()
});

