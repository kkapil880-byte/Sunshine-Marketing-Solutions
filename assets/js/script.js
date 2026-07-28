/*==================================================
    SUNSHINE MARKETING SOLUTIONS
    JAVASCRIPT - VERSION 1.0
==================================================*/


/*==================================================
    SCROLL TO TOP BUTTON
==================================================*/

const scrollTopBtn = document.getElementById("scrollTopBtn");


/* Page नीचे जाने पर Button दिखाएँ */

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        scrollTopBtn.style.display = "block";

    } else {

        scrollTopBtn.style.display = "none";

    }

});


/* Button पर Click करने पर ऊपर जाएँ */

scrollTopBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});