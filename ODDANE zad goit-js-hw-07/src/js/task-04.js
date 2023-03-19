const createButton = document.querySelector("button[data-create]");

const destroyButton = document.querySelector("button[data-destroy]");

const boxes = document.querySelector("#boxes");

const input = document.querySelector("input");
let amount = 0;

input.addEventListener("input", () => {
  amount = input.value;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
    size *= 1.1;
  }
}

function destroyBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const lastBox = boxes.lastElementChild;
    boxes.removeChild(lastBox);
  }
}

createButton.addEventListener("click", () => createBoxes(input.value));

destroyButton.addEventListener("click", () => destroyBoxes(input.value));
