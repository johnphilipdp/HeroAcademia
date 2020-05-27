// ELEMENTS
const midoriya = document.querySelector('.midoriya');
const logo = document.querySelector('.logo');
const bush = document.querySelector('.bush');
const bush2 = document.querySelector('.bush-2');

const row = document.querySelector('.row');
const content = document.querySelector('.content');

const imgs = document.querySelectorAll('.gallery img');
const gallery = document.querySelector('.gallery');

const review = document.querySelector('.review');
const reviews = document.querySelectorAll('.review .col-3');

document.addEventListener('scroll', () => {
    let scrollCount = window.pageYOffset;

    // PARALLAX ANIMATION
    midoriya.style.transform = 'translateY(' + -(scrollCount / 3) + 'px)';
    logo.style.transform = 'translateY(' + (scrollCount / 4) + 'px)';
    bush.style.transform = 'translateY(' + -(scrollCount / 8) + 'px)';
    bush2.style.transform = 'translateY(' + (scrollCount / 2) + 'px)';

    // TRANSITION
    if (scrollCount > row.offsetTop - (window.innerHeight / 2)) {
        row.classList.remove('animate-out');
    }
    if (scrollCount > gallery.offsetTop - (window.innerHeight / 2)) {
        imgs.forEach((el, index) => {
            setInterval(() => {
                el.classList.remove('animate-out-img');

            }, 500 * (index / 2));

        })
    }

    if (scrollCount > review.offsetTop - (window.innerHeight / 2)) {
        reviews[0].style.transform = 'translateX(0)';
        reviews[1].style.transform = 'translateY(-100px)';
        reviews[2].style.transform = 'translateX(0px)';
    } else {

        reviews[0].style.transform = 'translateX(-225px)';
        reviews[1].style.transform = 'translateY(0px)';
        reviews[2].style.transform = 'translateX(225px)';
    }

});