//Initial configuration

function navBarFunction() {
    var x = document.getElementById("nav-bar");
    if (x.className === "nav-bar row") {
        x.className += " responsive";
    } else {
        x.className = "nav-bar row";
    }
}

$('.nav-bar-items > a').on('click', function(event){
    // First we take away the background color (selection) from the <li>
    $('.selectedNavElement').removeClass('selectedNavElement');

    let $currentElement = $(this);

    // We update the just clicked <li> with the background color
    $currentElement.addClass('selectedNavElement');
});

//quick easy fix for navigating pages
$('#bio-button').on('click', function (event) {

    $('#bio').prop('hidden', false);

    $('#project-1').prop('hidden', true);

    $('#project-2').prop('hidden', true);

    $('#project-3').prop('hidden', true);

    console.log('test')
});

$('#project-1-button').on('click', function (event) {

    $('#bio').prop('hidden', true);

    $('#project-1').prop('hidden', false);

    $('#project-2').prop('hidden', true);

    $('#project-3').prop('hidden', true);

});

$('#project-2-button').on('click', function (event) {

    $('#bio').prop('hidden', true);

    $('#project-1').prop('hidden', true);

    $('#project-2').prop('hidden', false);

    $('#project-3').prop('hidden', true);

});

$('#project-3-button').on('click', function (event) {

    $('#bio').prop('hidden', true);

    $('#project-1').prop('hidden', true);

    $('#project-2').prop('hidden', true);

    $('#project-3').prop('hidden', false);

});