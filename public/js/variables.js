// const bg = document.querySelector('body');
// const h1 = document.querySelector("h1");
// const currentSection = document.querySelector('#current-section')

var dom = {
    bg: document.querySelector('body'),
    temp: document.querySelectorAll('.current-temp'),
    currentSection: document.querySelector('#current-section'),
    degreeC: document.querySelector('#degreeC'),
    degreeF: document.querySelector('#degreeF'),
    h1: document.querySelector("h1"),
    dailySection: document.querySelector('#daily-section'),
    hourlySection: document.querySelector('#hourly-section'),
    hourlyContainer1: document.querySelector('.container-hourly1'),
    hourlyContainer2: document.querySelector('.container-hourly2'),
    btnPrev1: document.querySelector('.prev1'),
    btnNext1: document.querySelector('.next1'),
    btnPrev2: document.querySelector('.prev2'),
    btnNext2: document.querySelector('.next2'),
    btnHourlyToggle: document.querySelector('#hourly-toggle')
};

export { dom }