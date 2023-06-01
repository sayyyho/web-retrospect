// 논리 -> localStorage의 내용을 참조하고 업데이트 하면서 화면에 표시

const dataList = document.querySelector("#data-list");
const DATAS_KEY = "datas";

const newDatas = localStorage.getItem(DATAS_KEY);

let datas = [];

function saveDatas() {
  localStorage.setItem(DATAS_KEY, JSON.stringify(datas));
}

function deletData(event) {
  const li = event.target.parentNode;
  li.remove();
  datas = datas.filter((item) => item.id !== parseInt(li.id));
  saveDatas();
}

function makeRetrospect(data) {
  const li = document.createElement("li");
  li.id = data.id;
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  span1.innerText = data.created + " : ";
  span2.innerText = data.retrospect + " ";
  const button = document.createElement("button");
  button.innerText = "x";
  button.addEventListener("click", deletData);
  li.appendChild(span1);
  li.appendChild(span2);
  li.append(button);
  dataList.appendChild(li);
}

if (newDatas !== null) {
  const receivingData = JSON.parse(newDatas);
  datas = receivingData;
  receivingData.forEach(makeRetrospect);
}
