const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");

buttonContainer.addEventListener("click", (event) => {
  alert("Container clicked!");
});

function showMessage(event) {
  event.stopPropagation();
  alert("Button 1 clicked!");
}

const button2 = document.getElementById("button2");
button2.onclick = (event) => {
  event.stopPropagation();
  alert("Button 2 clicked!");
};

const button3 = document.getElementById("button3");
button3.addEventListener("click", (event) => {
  event.stopPropagation();
  alert("Button 3 clicked!");
});

buttonChildContainer.addEventListener("click", (event) => {
  event.stopPropagation();
  if (event.target.id === "button4") {
    alert("Button 4 clicked!");
    return;
  } else if (event.target.id === "button5") {
    alert("Button 5 clicked!");
    return;
  }
  alert("Child container clicked!");
});
