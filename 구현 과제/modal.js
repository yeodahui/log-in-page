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
    const pw = document.querySelector("#pw");
    const parent = id.parentElement;

    event.preventDefault();

    if (id.value) {
      console.log("아이디 인식되었음");
      id.nextElementSibling.style.display = "none";
      parent.classList.remove("error");

      // 비밀번호 확인
      if (false) {
        console.log("로그인 성공");
      } else {
        pw.nextElementSibling.style.display = "block";
      }
    } else {
      console.log("아이디 없음");

      id.nextElementSibling.style.display = "block";
      parent.classList.toggle("error");
    }
  });
}
