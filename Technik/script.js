let currentIndex = 0; // Start bei der ersten Slide
const slides = document.querySelectorAll('.slide');
const track = document.querySelector('.carousel-track');

function updateCarousel() {
    // Verschiebe die "carousel-track" entsprechend der aktuellen Slide
    const offset = -currentIndex * 100; // Verschiebt um die Breite eines Slides
    track.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Gehe zur nächsten Slide, zurück zum Anfang wenn am Ende
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Gehe zur vorherigen Slide
    updateCarousel();
}
document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.addEventListener('click', () => {
            const paragraph = box.querySelector('p');
            // Umschalten der Sichtbarkeit
            if (paragraph.style.display === 'none' || paragraph.style.display === '') {
                paragraph.style.display = 'block'; // Text anzeigen
                box.style.backgroundColor = 'red'; // Hintergrundfarbe ändern
            } else {
                paragraph.style.display = 'none'; // Text verstecken
                box.style.backgroundColor = '#FFD700'; // Originalfarbe wiederherstellen
            }
        });
    });
});
document.getElementById('startSteam').addEventListener('click', () => {
    const steam = document.getElementById('steam');

    // Setze den Dampf in die Ausgangsposition
    steam.style.opacity = '1';
    steam.style.top = '50px';
    steam.style.backgroundColor = 'rgb(0, 0, 0)';
    let opacity =1;


    // Starte eine Animation
    let position = 50; // Startposition (px)
    const interval = setInterval(() => {
        opacity -=0.02;
        position -= 2; // Der Dampf steigt nach oben
        steam.style.top = position + 'px';
        steam.style.opacity = opacity.toString(); // Opacity setzen


        // Wenn der Dampf zu hoch ist, stoppen und unsichtbar machen
        if (position < -150) {
            clearInterval(interval);
            steam.style.opacity = '0';
        }
    }, 50); 
});
