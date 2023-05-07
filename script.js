const headingText = document.querySelector('.heading-text');
const heading = document.querySelector('.heading');
const rotatingIcon = document.querySelector('.plus-icon');
const headingFrontText = document.querySelector('.heading-front-text');
const headingSecondaryText = document.querySelector('.heading-secondary-text');

let scrollDownStop = false;
let scrollTopStop = false;

heading.addEventListener('mouseenter', () => {
    scrollTopStop = true;
    scrollToBottom(headingText.scrollTop, headingText.scrollHeight);
    rotatingIcon.style.transform = "rotate(90deg)";
    rotatingIcon.style.transition = "transform 0.3s ease-out";
    console.log('hello');
})

heading.addEventListener('mouseleave', () => {
    scrollDownStop = true;
    scrollToTop(headingText.scrollTop, 0);
    rotatingIcon.style.transform = "rotate(0deg)";
    rotatingIcon.style.transition = "transform 0.3s ease-out";
    console.log('leaving'); 
})

function scrollToBottom(start, end){
    let scrolled = start;
    let scrollEnd = end; 
    const scrollInterval = setInterval(() => {
        headingText.scrollTop = scrolled;
        scrolled+=1.5;
        scrollTopStop = false;
        if(scrollDownStop || scrolled >= scrollEnd){
            console.log(scrolled);
            clearInterval(scrollInterval);
        }
    }, 1);
}

function scrollToTop(start, end){
    let scrolled = start;
    let scrollEnd = end; 
    const scrollInterval = setInterval(() => {
        headingText.scrollTop = scrolled;
        scrolled-=1.5;
        scrollDownStop = false;
        if(scrollTopStop || scrolled <= scrollEnd){
            clearInterval(scrollInterval);
        }
    }, 1);
}
