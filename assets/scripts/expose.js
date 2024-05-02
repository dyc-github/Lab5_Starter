// expose.js
// import JSConfetti from './js-confetti.browser.js'
window.addEventListener("DOMContentLoaded", init);

let horns = {
  "air-horn": {
    image: "assets/images/air-horn.svg",
    audio: "assets/audio/air-horn.mp3",
    hasConfetti: false,
  },
  "car-horn": {
    image: "assets/images/car-horn.svg",
    audio: "assets/audio/car-horn.mp3",
    hasConfetti: false,
  },
  "party-horn": {
    image: "assets/images/party-horn.svg",
    audio: "assets/audio/party-horn.mp3",
    hasConfetti: true,
  },
};

function init() {
  initSelector();
  initVolumeSlider();
  initPlaySoundButton();
}

//selector
//listenOnSelect obj =>
//setImage
//setAudio
//hasConfetti

function addConfetti (){
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti();
}

function initSelector() {
  let selector = document.getElementById("horn-select");
  let hornImage = document.getElementsByTagName("img")[0];
  let hornAudio = document.getElementsByTagName("audio")[0];
  let playSoundButton = document.getElementsByTagName("button")[0];

  selector.addEventListener("change", (event) => {
    let hornId = event.target.value;
    hornImage.src = horns[hornId].image;
    hornAudio.src = horns[hornId].audio;

    //add confetti
    if (horns[hornId].hasConfetti) {
      playSoundButton.addEventListener("click", addConfetti);
    }
    else{
      playSoundButton.removeEventListener("click", addConfetti);
    }
  });
}

function initVolumeSlider() {
  //volume controls
  let volumeSlider = document.getElementById("volume");
  let volumeImage = document.querySelector("#volume-controls img");

  //audio player
  let audio = document.getElementsByTagName("audio")[0];

  volumeSlider.addEventListener("input", (event) => {
    let volume = event.target.value;

    //set audio volume
    audio.volume = volume / 100;

    //set volume image
    let volumeImageSrc = "assets/icons/";
    if (volume == 0) volumeImageSrc += "volume-level-0.svg";
    else if (0 < volume && volume < 33) volumeImageSrc += "volume-level-1.svg";
    else if (33 <= volume && volume < 67)
      volumeImageSrc += "volume-level-2.svg";
    else volumeImageSrc += "volume-level-3.svg";
    volumeImage.src = volumeImageSrc;
  });
}

function initPlaySoundButton() {
  let playSoundButton = document.getElementsByTagName("button")[0];
  let hornAudio = document.getElementsByTagName("audio")[0];
  playSoundButton.addEventListener("click", ()=>{
    hornAudio.play();
  });
}
