// explore.js

let speechSynthesis;

window.addEventListener("DOMContentLoaded", init);

function init() {
  speechSynthesis = window.speechSynthesis;
  initVoiceSelect();
  initTalkButton();
}

function initVoiceSelect() {
  let voiceSelect = document.getElementById("voice-select");
  speechSynthesis.addEventListener("voiceschanged", () => {
    let voices = speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  });
}
function initTalkButton() {
  let talkButton = document.getElementsByTagName("button")[0];
  talkButton.addEventListener("click", () => {
    let voiceSelect = document.getElementById("voice-select");
    let voiceName = voiceSelect.selectedOptions[0].getAttribute("data-name");
    let text = document.getElementById("text-to-speak").value;
    playText(text, voiceName);
  });
}

//playText(text)
function playText(text, voiceName = "") {
  let voices = speechSynthesis.getVoices();
  let utterance = new SpeechSynthesisUtterance(text);
  let faceImage = document.getElementsByTagName("img")[0];

  utterance.addEventListener("start", () => {
    faceImage.src = "assets/images/smiling-open.png";
  });
  utterance.addEventListener("end", () => {
    faceImage.src = "assets/images/smiling.png";
  });

  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === voiceName) {
      utterance.voice = voices[i];
    }
  }
  speechSynthesis.speak(utterance);
}
