const closeModal = document.querySelector("#closeModal");
const openModal = document.querySelector("#openModal");
const bgModal = document.querySelector("#bgModal");
const loginBtn = document.querySelector("#login");

let modal = false;

if (closeModal) {
  closeModal.addEventListener("click", function () {
    if (modal == true) {
      bgModal.style.display = "none";
      modal = false;
    }
  });
}

if (openModal) {
  openModal.addEventListener("click", function () {
    if (modal == false) {
      bgModal.style.display = "flex";
      modal = true;
    }
  });
}

if (loginBtn) {
  console.log("버튼 인식됨");
  loginBtn.addEventListener("click", function (event) {
    const id = document.querySelector("#id");
    event.preventDefault();

    if (id.value) {
      console.log("아이디 비밀번호 입력 성공 아마도");
    } else {
      let notice = document.createElement("div");

      notice.classList.add("notice");
      notice.innerHTML = "아이디를 입력해 주세요.";

      id.parentElement.insertBefore(notice, id.nextSibling);
      id.style.border = "2px solid #F4492E";
    }
  });
}
