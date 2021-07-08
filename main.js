const slides = document.querySelectorAll('.carousel-item')
let slidePosition = 0
const totalSlides = slides.length

const nextBtn = document.querySelector('.next-slide')
const prevBtn = document.querySelector('.prev-slide')

nextBtn.addEventListener('click', moveToNext)
prevBtn.addEventListener('click', moveToPrev)

function hidePrev() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("carousel-item-visible")
    }
}

function moveToNext() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0
    } else {
        slidePosition++
    }
    hidePrev()
    slides[slidePosition].classList.add("carousel-item-visible")
}

function moveToPrev() {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1
    } else {
        slidePosition--
    }
    hidePrev()
    slides[slidePosition].classList.add("carousel-item-visible")
}