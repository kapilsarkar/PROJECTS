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
  openWorkType()
});

closeIcon.addEventListener("click", (e) => {
  workType.classList.remove("open");
});

const category = document.getElementsByName("category")
const taskAddInput = document.querySelector(".taskAddInput");
const taskAddBtn = document.querySelector(".taskAddBtn");

const myData = JSON.parse(localStorage.getItem("myData")) || []

const addData = (myName,task,category) =>{
  myData.push({myName,task,category})
  localStorage.setItem("myData",JSON.stringify(myData))
  return myName,task,category
}

taskAddBtn.addEventListener("click",(e)=>{
     for(let i =0; i < category.length;i++){
      if(category[i].checked)
      addData(nameBox.value,taskAddInput.value,category[i].value)
     }
    
  
  
})


