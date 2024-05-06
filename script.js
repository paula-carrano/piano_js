
      volumeSlider = document.querySelector(".volume-slider input"),
      keysCheckbox = document.querySelector(".keys-checkbox input");
let allKeys = [];

const audio = new Audio();

console.log(document.querySelectorAll(".piano-keys .key"));

const playTune = (keyName) => { 
    audio.src = `tunes/${keyName}.wav`;
    audio.play();
    const clickedKey = document.querySelector(`[data-key="${keyName}"]`); 
    clickedKey.classList.add("active"); 
    setTimeout(() => { 
        clickedKey.classList.remove("active");
    }, 150);
}

pianoKeysAction.forEach(key => {
    allKeys.push(key.dataset.name);
    key.addEventListener("click", () => playTune(key));
    console.log(allKeys);
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKeys = () => {
    pianoKeysAction.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (e) => {
    if(allKeys.includes(e.key)) playTune(e.key);
}

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);
