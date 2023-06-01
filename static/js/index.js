const logintStatus = document.querySelector("#login");
const myPageButton = document.querySelector("#user-info");
const postingButton = document.querySelector("#posting");
const contentButton = document.querySelector("#contents");
const USER_KEY = "user";

let userName = sessionStorage.getItem(USER_KEY);

if (userName === null) {
  if (logintStatus.innerHTML !== "") {
    sessionStorage.setItem(USER_KEY, JSON.stringify(logintStatus.innerHTML));
    logintStatus.innerHTML = "logout";
  } else {
    logintStatus.innerHTML = "login";
  }
} else {
  logintStatus.innerHTML = "logout";
}

function checkLogined() {
  userName = sessionStorage.getItem(USER_KEY);
  if (userName === null) {
    return false;
  }
  return true;
}

function checkStatus() {
  if (logintStatus.innerHTML === "login") {
    window.location.href =
      "https://kauth.kakao.com/oauth/authorize?client_id=ec5ad0267ec5500511fd40d6fe705d43&redirect_uri=http://127.0.0.1:5000/login/&response_type=code";
  } else {
    sessionStorage.removeItem(USER_KEY);
    logintStatus.innerHTML = "login";
    userName = null;
    window.location = "/";
  }
}

logintStatus.addEventListener("click", checkStatus);
myPageButton.addEventListener("click", () => {
  const ret = checkLogined();
  if (ret === true) {
    window.location.href = "/user";
  } else {
    alert("로그인 후 이용해주세요.");
    window.location.href = "/";
  }
});

postingButton.addEventListener("click", () => {
  const ret = checkLogined();
  if (ret === true) {
    window.location.href = "/post";
  } else {
    alert("로그인 후 이용해주세요.");
    window.location.href = "/";
  }
});

contentButton.addEventListener("click", () => {
  const ret = checkLogined();
  if (ret === true) {
    window.location.href = "/content";
  } else {
    alert("로그인 후 이용해주세요.");
    window.location.href = "/";
  }
});
