const checkboxes = document.querySelectorAll("input");
console.log(checkboxes);
let lastChecked;
function handleCheck(event){
  console.log(event);
  // check if shift is being held down
  // and check the box is being checked not un checked
  let inBetween = false;
  if (event.shiftKey && this.checked){
    // loop over all the inputs to see if they are inbetween
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if(checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween
      }

      if(inBetween){
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
