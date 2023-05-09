let scrollDownStop = false;
let scrollTopStop = false;
let activeIndex = 0;
const slides = document.getElementsByTagName("article");

function handleMouseEnter() {
    console.log("Mouse entered!");
    console.log(activeIndex);
    const heading = document.querySelector(`[data-index="${activeIndex}"] .heading`);
    const headingText = document.querySelector(`[data-index="${activeIndex}"] .heading .heading-text`);
    const rotatingIcon = document.querySelector(`[data-index="${activeIndex}"] .heading .rotating-icon img`);
    scrollTopStop = true;
    scrollToBottom(headingText.scrollTop, headingText.scrollHeight, headingText);
    rotatingIcon.style.transform = "rotate(90deg)";
    rotatingIcon.style.transition = "transform 0.3s ease-out";
  }
  
  function handleMouseExit() {
    console.log("Mouse left!");
    const heading = document.querySelector(`[data-index="${activeIndex}"] .heading`);
    const headingText = document.querySelector(`[data-index="${activeIndex}"] .heading .heading-text`);
    const rotatingIcon = document.querySelector(`[data-index="${activeIndex}"] .heading .rotating-icon img`);
    scrollDownStop = true;
    scrollToTop(headingText.scrollTop, 0, headingText);
    rotatingIcon.style.transform = "rotate(0deg)";
    rotatingIcon.style.transition = "transform 0.3s ease-out";
  }
  

function scrollToBottom(start, end, headingText){
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

function scrollToTop(start, end, headingText){
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

function handleRightBtn(){
    const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;
  
    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
          nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
    
    currentSlide.dataset.status = "before";
    
    nextSlide.dataset.status = "becoming-active-from-after";
    
    setTimeout(() => {
      nextSlide.dataset.status = "active";
      activeIndex = nextIndex;
    });
}

function handleLeftBtn(){
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;
  
    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
          nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
          
    currentSlide.dataset.status = "after";
    
    nextSlide.dataset.status = "becoming-active-from-before";
    
    setTimeout(() => {
      nextSlide.dataset.status = "active";
      activeIndex = nextIndex;
    });
}
