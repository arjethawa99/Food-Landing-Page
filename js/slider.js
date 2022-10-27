// function Slider() {
//     let back = document.querySelector('.previous')
//     let go = document.querySelector('.next')
//     let items = document.querySelectorAll('.slider')
//     let i = 0;
//     go.addEventListener('click', () => {
//         i++
//         if (items.length - 1 < i) {
//             i = 0
//         }
//         items.forEach(item => {
//             item.classList.remove('active')
//         })
//         items[i].classList.add('active')
//     })
//     back.addEventListener('click', () => {
//         i--;
//         if (0 >= i) {
//             i = 0
//         }
//         items.forEach(item => {
//             item.classList.remove('active')
//         })
//         items[i].classList.add('active')
//         console.log(i)
//     })
// }
// Slider()

var currentIndex = 1;
displaySlides(currentIndex);

function setSlides(num){
    console.log(num)
    displaySlides(currentIndex+=num);
}
// function setSlider(num){
//     console.log(num)
//     displaySlides(currentIndex=num);
// }

function displaySlides(num) {
    var x;
    var slides = document.getElementsByClassName("slider");
    if (num > slides.length) { currentIndex = 1 }
    if (num < 1) { currentIndex = slides.length }
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    slides[currentIndex - 1].style.display = "block";
}

