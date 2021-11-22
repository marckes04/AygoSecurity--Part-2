const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length -1];


const btnLeft = document.querySelector("#btn_left");
const btnRight = document.querySelector("#btn_right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
    let sliderSectionFirst =  document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft ="-100%";
    slider.style.transition ="all 0.5s";
    
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend',sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    },500);
}

function Prev(){
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft ="0%";
    slider.style.transition ="all 0.5s";
    
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin',sliderSectionLast);
        slider.style.marginLeft = "-100%";
    },500);
}



btnRight.addEventListener('click',function(){

    Next();
});

btnLeft.addEventListener('click',function(){

    Prev();
});


setInterval(function(){
    Next();
}, 5000);