// Buttons
const btnScrollSmjerovi = document.querySelector('.scroll-to-smjerovi');
const btnScrollOglasna = document.querySelector('.scroll-to-oglasna');
const btnScrollHeaderSmjerovi = document.querySelector('.scroll-to-smjeroviH');
const btnScrollNastava = document.querySelector('.scroll-to-nastava');
const btnScrollOnama = document.querySelector('.scroll-to-onama');
const btnScrollkontakt = document.querySelector('.scroll-to-kontakt');
const btnScrollJavneNabavke = document.querySelector(
    '.scroll-to-javne-nabavke'
);

// Section
const sectionOglasna = document.querySelector('.oglasna');
const sectionSmjerovi = document.querySelector('.smjerovi');
const sectionJavneNabavke = document.querySelector('.javne-nabavke');

btnScrollSmjerovi.addEventListener('click', function (e) {
    sectionSmjerovi.scrollIntoView({ behavior: 'smooth' });
});

btnScrollOglasna.addEventListener('click', function (e) {
    sectionOglasna.scrollIntoView({ behavior: 'smooth' });
    // this.style.color = "white";
});

btnScrollHeaderSmjerovi.addEventListener('click', function (e) {
    sectionSmjerovi.scrollIntoView({ behavior: 'smooth' });
});

btnScrollJavneNabavke.addEventListener('click', function (e) {
    sectionJavneNabavke.scrollIntoView({ behavior: 'smooth' });
});
