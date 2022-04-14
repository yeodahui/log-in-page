const closeModal = document.querySelector("#closeModal");
const openModal = document.querySelector("#openModal");
const bgModal = document.querySelector("#bgModal");

let modal = false;

if (closeModal) {
  closeModal.addEventListener("click", function () {
    console.log("클릭됨");
    if (modal == true) {
      bgModal.style.display = "none";
      modal = false;
    }
  });
}

if (openModal) {
  openModal.addEventListener("click", function () {
    console.log("클릭됨");
    if (modal == false) {
      bgModal.style.display = "flex";
      modal = true;
    }
  });
}
