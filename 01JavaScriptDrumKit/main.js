window.addEventListener("keydown", function(event){
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  console.log(audio)
  //check if ther is an audio element associated with the key
  if (!audio) return;
  //set the audio to the start
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
})

function removeTransition(event){
  if (event.propertyName !== "transform") return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll(".key");
console.log(keys);
keys.forEach(key => key.addEventListener("transitionend", removeTransition))
