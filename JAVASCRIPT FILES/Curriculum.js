/*FIRST YEAR FIRST SEM*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/*********************************************************/
/*FIRST YEAR SECOND SEM*/


/*Displaying semesters*/

        function displaySem1First(){
        var acurrriculum=1;   
            if (acurrriculum==1) {
                document.getElementById("firstsem-firstyear").style.display="inline";
                document.getElementById("secondsem-firstyear").style.display="none";
                document.getElementById("firstsem-secondyear").style.display="none";
                document.getElementById("secondsem-secondyear").style.display="none";
                document.getElementById("firstsem-thirdyear").style.display="none";
                document.getElementById("secondsem-thirdyear").style.display="none";
                document.getElementById("firstsem-fourthyear").style.display="none";
                document.getElementById("secondsem-fourthyear").style.display="none";
                return acurrriculum=0;
            }
        }

        function displaySem2First(){
        var bcurrriculum=1   
          if (bcurrriculum==1) {
              document.getElementById("firstsem-firstyear").style.display="none";
              document.getElementById("secondsem-firstyear").style.display="inline";
              document.getElementById("firstsem-secondyear").style.display="none";
              document.getElementById("secondsem-secondyear").style.display="none";
              document.getElementById("firstsem-thirdyear").style.display="none";
              document.getElementById("secondsem-thirdyear").style.display="none";
              document.getElementById("firstsem-fourthyear").style.display="none";
              document.getElementById("secondsem-fourthyear").style.display="none";
              return bcurrriculum=0;
          }
      }
      function displaySem1Second(){
        var ccurrriculum=1   
          if (ccurrriculum==1) {
            document.getElementById("firstsem-firstyear").style.display="none";
            document.getElementById("secondsem-firstyear").style.display="none";
            document.getElementById("firstsem-secondyear").style.display="inline";
            document.getElementById("secondsem-secondyear").style.display="none";
            document.getElementById("firstsem-thirdyear").style.display="none";
            document.getElementById("secondsem-thirdyear").style.display="none";
            document.getElementById("firstsem-fourthyear").style.display="none";
            document.getElementById("secondsem-fourthyear").style.display="none";
            return ccurrriculum=0;
          }
      }
      function displaySem2Second(){
        var dcurrriculum=1   
          if (dcurrriculum==1) {
            document.getElementById("firstsem-firstyear").style.display="none";
            document.getElementById("secondsem-firstyear").style.display="none";
            document.getElementById("firstsem-secondyear").style.display="none";
            document.getElementById("secondsem-secondyear").style.display="inline";
            document.getElementById("firstsem-thirdyear").style.display="none";
            document.getElementById("secondsem-thirdyear").style.display="none";
            document.getElementById("firstsem-fourthyear").style.display="none";
            document.getElementById("secondsem-fourthyear").style.display="none";
            return dcurrriculum=0;
          }
      }
      function displaySem1Third(){
        var ecurrriculum=1   
          if (ecurrriculum==1) {
            document.getElementById("firstsem-firstyear").style.display="none";
            document.getElementById("secondsem-firstyear").style.display="none";
            document.getElementById("firstsem-secondyear").style.display="none";
            document.getElementById("secondsem-secondyear").style.display="none";
            document.getElementById("firstsem-thirdyear").style.display="inline";
            document.getElementById("secondsem-thirdyear").style.display="none";
            document.getElementById("firstsem-fourthyear").style.display="none";
            document.getElementById("secondsem-fourthyear").style.display="none";
            return ecurrriculum=0;
          }
      }
      function displaySem2Third(){
        var fcurrriculum=1   
          if (fcurrriculum==1) {
            document.getElementById("firstsem-firstyear").style.display="none";
            document.getElementById("secondsem-firstyear").style.display="none";
            document.getElementById("firstsem-secondyear").style.display="none";
            document.getElementById("secondsem-secondyear").style.display="none";
            document.getElementById("firstsem-thirdyear").style.display="none";
            document.getElementById("secondsem-thirdyear").style.display="inline";
            document.getElementById("firstsem-fourthyear").style.display="none";
            document.getElementById("secondsem-fourthyear").style.display="none";
            return fcurrriculum=0;
          }
      }
      function displaySem1Fourth(){
        var gcurrriculum=1   
          if (gcurrriculum==1) {
            document.getElementById("firstsem-firstyear").style.display="none";
            document.getElementById("secondsem-firstyear").style.display="none";
            document.getElementById("firstsem-secondyear").style.display="none";
            document.getElementById("secondsem-secondyear").style.display="none";
            document.getElementById("firstsem-thirdyear").style.display="none";
            document.getElementById("secondsem-thirdyear").style.display="none";
            document.getElementById("firstsem-fourthyear").style.display="inline";
            document.getElementById("secondsem-fourthyear").style.display="none";
            return gcurrriculum=0;
          }
      }
      function displaySem2Fourth(){
        var hcurrriculum=1   
          if (hcurrriculum==1) {
            document.getElementById("firstsem-firstyear").style.display="none";
            document.getElementById("secondsem-firstyear").style.display="none";
            document.getElementById("firstsem-secondyear").style.display="none";
            document.getElementById("secondsem-secondyear").style.display="none";
            document.getElementById("firstsem-thirdyear").style.display="none";
            document.getElementById("secondsem-thirdyear").style.display="none";
            document.getElementById("firstsem-fourthyear").style.display="none";
            document.getElementById("secondsem-fourthyear").style.display="inline";
            return hcurrriculum=0;
          }
      }