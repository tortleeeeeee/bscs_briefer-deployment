/*THIRD YEAR SECOND SEM*/
let slideIndex5 = 1;
showSlides5(slideIndex5);

function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}

function currentSlide5(n) {
  showSlides5(slideIndex5 = n);
}

function showSlides5(n) {
  let i;
  let slides5 = document.getElementsByClassName("mySlides5");
  let dots5 = document.getElementsByClassName("dot5");
  if (i > slides5.length) {slideIndex5 = 1}    
  if (i < 1) {slideIndex5 = slides5.length}
  for (i = 0; i < slides5.length; i++) {
    slides5[i].style.display = "none";  
  }
  for (i = 0; i < dots5.length; i++) {
    dots5[i].className = dots5[i].className.replace(" active", "");
  }
  slides5[slideIndex5-1].style.display = "block";  
  dots5[slideIndex5-1].className += " active";
}
