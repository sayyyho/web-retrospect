const cntPost = document.querySelector("#count-posting");
const greeting = document.querySelector(".greeting");
const greetingEmail = document.querySelector("#email");

const EMAIL_KEY = "email";
const USER_KEY = "user";
const DATAS_KEY = "datas";

const email = JSON.parse(sessionStorage.getItem(EMAIL_KEY));
const user = JSON.parse(sessionStorage.getItem(USER_KEY));
greeting.innerHTML = user;

if (email === null) {
  sessionStorage.setItem(EMAIL_KEY, JSON.stringify(greetingEmail.innerHTML));
} else {
  greetingEmail.innerHTML = email;
}

let cnt = 0;

function cntNum() {
  cnt = cnt + 1;
}

const checkData = localStorage.getItem(DATAS_KEY);

if (checkData !== null) {
  const cntData = JSON.parse(checkData);
  cntData.forEach(cntNum);
}

cntPost.innerText = cnt + "회";
