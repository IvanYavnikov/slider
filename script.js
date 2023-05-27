let slideIndex = 1;

function nextSlide() {
    showSlides(slideIndex += 1);
    showCity(slideIndex);
    showAreas(slideIndex);
    showTimes(slideIndex);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
    showCity(slideIndex);
    showAreas(slideIndex);
    showTimes(slideIndex);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    showCity(slideIndex);
    showAreas(slideIndex);
    showTimes(slideIndex);
}

/* Слайдер картинок+Доты+названия */

showSlides(slideIndex);

function showSlides(n) {

    let i;
    let slides = document.getElementsByClassName("image");
    let dots = document.getElementsByClassName("button-dot");
    let rooms = document.getElementsByClassName("rooms");

    if (n > slides.length) {
      slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }


    for (let slide of slides) {
        slide.style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex -1].className += " active";

    for (i = 0; i < rooms.length; i++) {
         rooms[i].className = rooms[i].className.replace(" rooms-style", "");    
        }
    
    rooms[slideIndex -1].className += " rooms-style";
    
   

}
 
/* Слайдер городов */

 showCity(slideIndex);

function showCity(n) {

    let city = document.getElementsByClassName("city-text");

    if (n > city.length) {
      slideIndex = 1
    }

    if (n < 1) {
        slideIndex = city.length
    }

    for (let cit of city) {
        cit.style.display = "none";
    }

    city[slideIndex - 1].style.display = "block";

}

/* Слайдер площади */

showAreas(slideIndex);

function showAreas(n) {

    let areas = document.getElementsByClassName("area-text");

    if (n > areas.length) {
      slideIndex = 1
    }

    if (n < 1) {
        slideIndex = areas.length
    }

    for (let area of areas) {
        area.style.display = "none";
    }

    areas[slideIndex - 1].style.display = "block";

}


/* Слайдер времени */

showTimes(slideIndex);

function showTimes(n) {

    let times = document.getElementsByClassName("time-text");

    if (n > times.length) {
      slideIndex = 1
    }

    if (n < 1) {
        slideIndex = times.length
    }

    for (let time of times) {
        time.style.display = "none";
    }

    times[slideIndex - 1].style.display = "block";

};