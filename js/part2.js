const textParagraph = document.getElementById("textParagraph");
const changeTextBtn = document.getElementById("changeTextBtn");

changeTextBtn.addEventListener("click", () => {
  textParagraph.textContent = "The paragraph text has been updated successfully!";
});

const styledBox = document.getElementById("styledBox");
const changeBgBtn = document.getElementById("changeBgBtn");
const changeFontBtn = document.getElementById("changeFontBtn");

changeBgBtn.addEventListener("click", () => {
  styledBox.style.backgroundColor = styledBox.style.backgroundColor === "lightgreen" ? "#f0f0f0" : "lightgreen";
});

changeFontBtn.addEventListener("click", () => {
  styledBox.style.fontSize = styledBox.style.fontSize === "20px" ? "16px" : "20px";
});

const dynamicList = document.getElementById("dynamicList");
const addItemBtn = document.getElementById("addItemBtn");
const removeItemBtn = document.getElementById("removeItemBtn");

addItemBtn.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${dynamicList.children.length + 1}`;
  dynamicList.appendChild(newItem);
});

removeItemBtn.addEventListener("click", () => {
  if (dynamicList.lastElementChild) {
    dynamicList.removeChild(dynamicList.lastElementChild);
  }
});