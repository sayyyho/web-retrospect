const title = document.querySelector(".title-input");
const content = document.querySelector(".content-input");
const postingBtn = document.querySelector(".submit-button");
const DATAS_KEY = "datas";

let getData = localStorage.getItem(DATAS_KEY);
// console.log(getData);
let storedData = [];

if (getData !== null) {
  const data = JSON.parse(getData);
  // console.log(data);
  data.forEach((element) => {
    storedData.push(element);
  });
  console.log(storedData);
}

function updateData() {
  localStorage.setItem(DATAS_KEY, JSON.stringify(storedData));
}

postingBtn.addEventListener("click", () => {
  alert("오늘의 한 줄 회고, 발행 완료 !");
  const newRetrospect = {
    created: title.value,
    retrospect: content.value,
    id: Date.now(),
  };
  title.value = "";
  content.value = "";
  storedData.push(newRetrospect);
  updateData();
});
