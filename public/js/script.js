import { dom } from "./variables.js";
// import { convert } from './units';

dom.bg.onload = () => {
  setTimeout(() => {
    dom.currentSection.style.opacity = "1";
  }, 1000);

  setTimeout(() => {
    dom.dailySection.style.opacity = "1";
  }, 1000);

  setTimeout(() => {
    dom.hourlySection.style.opacity = "1";
  }, 1500);
};



// CHANGING UNITS
var tempC = []
var tempF = []
for(var i=0; i<39; ++i) {
  let temp = parseInt((document.querySelectorAll('.current-temp')[i].innerText).slice(0, 2))
  tempC.push(parseInt((document.querySelectorAll('.current-temp')[i].innerText).slice(0, 2)) + '°')
  temp = ((9*temp/5) + 32).toFixed(0) + '°'
  tempF.push(temp)
}
// console.log(tempC, tempF);

dom.degreeC.addEventListener("click", () => {
  dom.degreeC.classList.add("button-active");
  dom.degreeF.classList.remove("button-active");

  for(var i=0; i<39; ++i) {
    document.querySelectorAll('.current-temp')[i].innerText = tempC[i];
  }
});
dom.degreeF.addEventListener("click", () => {
  dom.degreeF.classList.add("button-active");
  dom.degreeC.classList.remove("button-active");
  
  for(var i=0; i<39; ++i) {
    document.querySelectorAll('.current-temp')[i].innerText = tempF[i];
  }
});



// HOURLY-SECTION
dom.btnNext1.addEventListener("click", () => {
  dom.hourlyContainer1.style.animation = "animation-slide-next 1s ease-in-out";
  dom.hourlyContainer1.style.transform = "translateX(-1150px)";
});
dom.btnPrev1.addEventListener("click", () => {
  dom.hourlyContainer1.style.animation = "animation-slide-prev 1s ease-in-out";
  dom.hourlyContainer1.style.transform = "translateX(0px)";
});
dom.btnNext2.addEventListener("click", () => {
  dom.hourlyContainer2.style.animation = "animation-slide-next 1s ease-in-out";
  dom.hourlyContainer2.style.transform = "translateX(-1150px)";
});
dom.btnPrev2.addEventListener("click", () => {
  dom.hourlyContainer2.style.animation = "animation-slide-prev 1s ease-in-out";
  dom.hourlyContainer2.style.transform = "translateX(0px)";
});

// HOURLY-MOBILE-VIEW-TOGGLE
dom.btnHourlyToggle.addEventListener('click', () => {
    $('#hourly-toggle').toggleClass('span-toggle')
    if($('#hourly-toggle').hasClass('span-toggle')) {
        $('#hourly-section').css({height: 'auto'})
    }
    else {
        $('#hourly-section').css({height: '40px'})
    }
})
