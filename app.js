const slides = document.querySelectorAll('.slide');

for(const slide of slides) {
     slide.addEventListener('mouseover',() => {
        clearActiveClasses();

        slide.classList.add('active');
     })
}

function clearActiveClasses() {
    for(const i of slides) {
    i.classList.remove('active');
}
}
