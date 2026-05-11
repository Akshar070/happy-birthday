let currentLevel = 1;

const levels = {

  1:{
    question:
    "Mission 1:\nWhich organization trusted Adarsh enough to let him near a satellite?",
    answer:"isro"
  },

  2:{
    question:
    "Mission 2:\nWhat branch suffers the most from circuits, signals, and sleep deprivation?",
    answer:"ece"
  },

  3:{
    question:
    "Mission 3:\nComplete this legendary sentence:\n'I built a satellite but still can't fix my ____.'",
    answer:"sleep"
  }

};

/* PHOTO CAROUSEL */

const photos = [

  {
    image:"assets/photo1.jpg",

    caption:
    "POV: ISRO scientists pretending this guy is completely under control."
  },

  {
    image:"assets/photo2.jpg",

    caption:
    "Built a satellite but still struggles to reply to messages."
  },

  {
    image:"assets/photo3.jpg",

    caption:
    "ECE engineers after solving one circuit problem and developing 14 new mental issues."
  },

  {
    image:"assets/photo4.jpg",

    caption:
    "Somewhere between satellites and semiconductors, bro forgot what sleep feels like."
  }

];

let currentSlide = 0;

const clickSound =
document.getElementById("clickSound");

const successSound =
document.getElementById("successSound");

const bgMusic =
document.getElementById("bgMusic");

/* SOUND */

function playClick(){

  clickSound.currentTime = 0;
  clickSound.play();

}

/* START LEVEL */

function startLevel(level){

  playClick();

  currentLevel = level;

  document.getElementById("gameScreen")
  .style.display = "block";

  document.getElementById("levelTitle")
  .innerText = "LEVEL " + level;

  document.getElementById("questionText")
  .innerText = levels[level].question;

  document.getElementById("answerInput")
  .value = "";

}

/* CHECK ANSWERS */

function checkAnswer(){

  playClick();

  const userAnswer =
  document.getElementById("answerInput")
  .value
  .toLowerCase()
  .trim();

  if(userAnswer === levels[currentLevel].answer){

    successSound.play();

    /* LEVEL 1 */

    if(currentLevel === 1){

      unlockLevel(2);

      showPopup(
        "MISSION 1 COMPLETE 🚀\n\nISRO somehow approved this man."
      );

      setTimeout(() => {

        closePopup();

        startLevel(2);

      }, 2200);

    }

    /* LEVEL 2 */

    else if(currentLevel === 2){

      unlockLevel(3);

      showPopup(
        "MISSION 2 COMPLETE ⚡\n\nECE survived. Barely."
      );

      setTimeout(() => {

        closePopup();

        startLevel(3);

      }, 2200);

    }

    /* LEVEL 3 */

    else if(currentLevel === 3){

      showPopup(
        "🎉 HAPPY BIRTHDAY ADARSH BACCHA 🚀\n\nSatellite Engineer.\nCircuit Destroyer.\nProfessional Sleep Sacrificer."
      );

      launchConfetti();

      setTimeout(() => {

        closePopup();

        openFinalScreen();

      }, 3500);

    }

  }

  else{

    alert(
      "❌ Wrong Answer.\n\nSignal lost. Try again."
    );

  }

}

/* UNLOCK */

function unlockLevel(level){

  const btn =
  document.getElementById("level" + level);

  btn.classList.remove("locked");

  btn.classList.add("level-btn");

  btn.innerHTML = "LEVEL " + level;

  btn.onclick = function(){

    startLevel(level);

  };

}

/* POPUP */

function showPopup(text){

  document.getElementById("popupText")
  .innerText = text;

  document.getElementById("popup")
  .style.display = "flex";

}

function closePopup(){

  playClick();

  document.getElementById("popup")
  .style.display = "none";

}

/* SIDE QUEST */

function sideQuest(){

  playClick();

  alert(
    "SIDE QUEST:\n\nFind hidden birthday memories later."
  );

}

/* MUSIC */

function toggleMusic(){

  if(bgMusic.paused){

    bgMusic.play();

  }

  else{

    bgMusic.pause();

  }

}

/* CONFETTI */

function launchConfetti(){

  confetti({
    particleCount:250,
    spread:180,
    origin:{ y:0.6 }
  });

}

/* FINAL SCREEN */

function openFinalScreen(){

  document.getElementById("finalScreen")
  .style.display = "flex";

  updateCarousel();

}

/* CAROUSEL */

function updateCarousel(){

  const image =
  document.getElementById("carouselImage");

  const caption =
  document.getElementById("carouselCaption");

  image.classList.remove(
    "carousel-slide-animation"
  );

  void image.offsetWidth;

  image.src =
  photos[currentSlide].image;

  caption.innerText =
  photos[currentSlide].caption;

  image.classList.add(
    "carousel-slide-animation"
  );

}

function nextSlide(){

  playClick();

  currentSlide++;

  if(currentSlide >= photos.length){

    currentSlide = 0;

  }

  updateCarousel();

}

function prevSlide(){

  playClick();

  currentSlide--;

  if(currentSlide < 0){

    currentSlide = photos.length - 1;

  }

  updateCarousel();

}
function backToHome(){

  playClick();

  document.getElementById("gameScreen")
  .style.display = "none";

}
function backToLevelsFromFinal(){

  playClick();

  document.getElementById("finalScreen")
  .style.display = "none";

  document.getElementById("gameScreen")
  .style.display = "none";

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

}