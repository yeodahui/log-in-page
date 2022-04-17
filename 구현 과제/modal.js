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

      // 비밀번호 확인
      if (true) {
        const notice = document.createElement("div");

        notice.classList.add("notice");
        notice.innerHTML = "아이디 혹은 비밀번호가 일치하지 않습니다.";

        // 문구 중복 출력 방지
        if (pw.nextSibling.innerHTML != notice.innerHTML) {
          parent.insertBefore(notice, pw.nextSibling);
        }
      } else {
        console.log("로그인 성공");
      }
    } else {
      const notice = document.createElement("div");

      notice.classList.add("notice");
      notice.innerHTML = "아이디를 입력해 주세요.";

      // 문구 중복 출력 방지
      if (id.nextSibling.innerHTML != notice.innerHTML) {
        parent.insertBefore(notice, id.nextSibling);
        id.style.border = "2px solid #F4492E";
      }
    }
  });
}
