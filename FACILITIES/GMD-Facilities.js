const gmdImages = [...document.querySelectorAll('.gmdimage')];
const gmdpopup = document.querySelector('.gmd-popup');
const gmdclosebtn = document.querySelector('.gmd-close-btn');
const gmdlargeimage = document.querySelector('.gmd-large-image');
const gmdimageindex = document.querySelector('.gmd-index');
const gmdleftarrow = document.querySelector('.gmd-left-arrow');
const gmdrightarrow = document.querySelector('.gmd-right-arrow');


let gmdIndex = 0;

gmdImages.forEach((item, v) => {
    item.addEventListener('click', () => {
        updateGmdImage(v);
        gmdpopup.classList.toggle('active');
    })
})
const updateGmdImage = (v) => {
    let path = `gmd${v+1}.jpg`; 
    gmdlargeimage.src = path;
    gmdimageindex.innerHTML = `0${v+1}`;
    gmdIndex = v;
}
gmdclosebtn.addEventListener('click', () => {
    gmdpopup.classList.toggle('active');
})

gmdleftarrow.addEventListener('click', () => {
    if(gmdIndex > 0){
        updateGmdImage(gmdIndex - 1);
    }
})

gmdrightarrow.addEventListener('click', () => {
    if(gmdIndex < gmdImages.length - 1){
        updateGmdImage(gmdIndex + 1);
    }
})
