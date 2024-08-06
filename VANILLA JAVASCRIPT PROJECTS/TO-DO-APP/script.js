const nameBox = document.querySelector(".nameBox");
const nameBtn = document.querySelector(".nameBtn");
const nameTxt = document.querySelector(".nameTxt");
const closeIcon = document.querySelector(".close-icon");
const workType = document.querySelector(".work-type");
const dateTime = document.querySelector(".dateTime");

let date = new Date().toJSON().slice(0, 10);
dateTime.innerHTML = date;

function nameInput() {
  nameTxt.innerHTML = `Welcome:${nameBox.value} `;
}

function openWorkType() {
  workType.classList.add("open");
}

nameBtn.addEventListener("click", (e) => {
  if (nameBox.value != "") {
    nameInput();
    openWorkType();
  }
});

closeIcon.addEventListener("click", (e) => {
  workType.classList.remove("open");
});

const category = document.getElementsByName("category");
const taskAddInput = document.querySelector(".taskAddInput");
const taskAddBtn = document.querySelector(".taskAddBtn");

const myData = JSON.parse(localStorage.getItem("myData")) || [];

const addData = (myName, task, category, date) => {
  myData.push({ myName, task, category, date });
  localStorage.setItem("myData", JSON.stringify(myData));
  return myName, task, category, date;
};

taskAddBtn.addEventListener("click", (e) => {
  for (let i = 0; i < category.length; i++) {
    if (category[i].checked && nameBox.value != "") {
      addData(nameBox.value, taskAddInput.value, category[i].value, date);
    }
  }
  findData();
});

const taskShow = document.querySelector(".taskShow");

function findData() {
  myData.map((e) => {
    console.log(e.myName);

    const taskList = document.createElement("div");
    taskList.className = "taskList";
    const allTaskList = document.createElement("div");
    allTaskList.className = "allTaskList";
    allTaskList.appendChild(taskList);
    taskList.appendChild(taskShow);
    const showTask = document.createElement("p");
    showTask.className = "showName";
    showTask.innerText = e.task;
  });
}
