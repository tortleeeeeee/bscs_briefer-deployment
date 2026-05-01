/*FOURTH YEAR SECOND SEM*/
let slideIndex7 = 1;
showSlides7(slideIndex7);

function plusSlides7(n) {
  showSlides7(slideIndex7 += n);
}

function currentSlide7(n) {
  showSlides7(slideIndex7 = n);
}

function showSlides7(n) {
  let i;
  let slides7 = document.getElementsByClassName("mySlides7");
  let dots7 = document.getElementsByClassName("dot7");
  if (i > slides7.length) {slideIndex7 = 1}    
  if (i < 1) {slideIndex7 = slides7.length}
  for (i = 0; i < slides7.length; i++) {
    slides7[i].style.display = "none";  
  }
  for (i = 0; i < dots7.length; i++) {
    dots7[i].className = dots7[i].className.replace(" active", "");
  }
  slides7[slideIndex7-1].style.display = "block";  
  dots7[slideIndex7-1].className += " active";
}
