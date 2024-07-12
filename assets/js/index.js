// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
        loop: true,
        items: 1,
        navigation: true,
        navigationText: ["", ""],
        pagination: false,
        autoplay: true,
        slideTransition: 'linear',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});

$(document).ready(function () {
    $("#demo").owlCarousel({
        loop: true,
        items: 4,
        navigation: true,
        navigationText: ["", ""],
        pagination: true,
        autoplay: true,
        autoplayHoverPause: true,
        slideTransition: 'linear',
        autoplayTimeout: 3000,
        autoplaySpeed: 15000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});

$(document).ready(function () {
    $("#slider").owlCarousel({
        loop: true,
        items: 4,
        rtl: true,
        navigation: true,
        navigationText: ["", ""],
        pagination: true,
        autoplay: true,
        autoplayHoverPause: true,
        slideTransition: 'linear',
        autoplayTimeout: 3000,
        autoplaySpeed: 15000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});

function openForm() {
    document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}

document.querySelector('.btn').addEventListener('click', openForm);

$(document).ready(function(){
    $("#myModal").modal('show');
});

