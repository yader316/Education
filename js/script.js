var slideIndex = 1;
showSlides(slideIndex);

const currentSlide = (n) =>{
  showSlides(slideIndex = n)
}
function showSlides(n) {
  var i;
  const slides = document.getElementsByClassName("learning-container__day");
  const dots = document.getElementsByClassName("learning-container__dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex-1].style.display = "flex"; 
  dots[slideIndex-1].className += " active-dot";
}

//js container client
var slideIndexClient = 1;
showSlidesClient(slideIndexClient);

const plusSlidesImg = (n) => {
  showSlidesClient(slideIndex += n);
}

const imgSlide = (n) => {
  showSlidesClient(slideIndex = n);
}

function showSlidesClient(n) {
  var i;
  const slides = document.getElementsByClassName("client-container__info-client");
  const dots = document.getElementsByClassName("client-container__img");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-client", "");
  }
  slides[slideIndex-1].style.display = "flex"; 
  dots[slideIndex-1].className += " active-client";
}
