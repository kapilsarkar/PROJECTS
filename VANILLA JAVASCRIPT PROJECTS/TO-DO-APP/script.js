const nameBox = document.querySelector(".nameBox");
const nameBtn = document.querySelector(".nameBtn");
const nameTxt = document.querySelector(".nameTxt");
const closeIcon = document.querySelector(".close-icon");
const workType = document.querySelector(".work-type");
const dateTime = document.querySelector(".dateTime");

let date = new Date().toJSON().slice(0,10)
dateTime.innerHTML = date

function nameInput() {
  nameTxt.innerHTML = `Welcome:${nameBox.value} `;
}

function openWorkType() {
  workType.classList.add("open");
}

nameBtn.addEventListener("click", (e) => {
  nameInput();
  openWorkType();
});

closeIcon.addEventListener("click", (e) => {
  workType.classList.remove("open");
});


