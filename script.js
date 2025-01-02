let form = document.querySelector('form');
let output = document.querySelector('.output'); 



form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let formData = new FormData(form);
  
  const formObject = {};
formData.forEach((value, key) => {
  formObject[key] = value;
});
console.log(formObject)
allDataDate(formObject);
});


function allDataDate(yourBirthDate) {
let date1 = new Date(`${yourBirthDate.year}-${yourBirthDate.month}-${yourBirthDate.date}`);
let date2 = new Date();
let currentMonth = date2.getMonth();
currentMonth++

let year = date2.getFullYear() - date1.getFullYear();
if (date1.getMonth() > date2.getMonth() || ((date1.getMonth() == date2.getMonth()) && (date1.getDate() > date2.getDate()))) {
  year--
}

console.log(date2.getMonth())

let month;
if (date1.getMonth() > date2.getMonth() && date1.getDate() > date2.getDate()) {
  month = (date1.getMonth() - date2.getMonth())-1;
} else if (date1.getMonth() < date2.getMonth() && date1.getDate() > date2.getDate()) {
  month = (date2.getMonth() - date1.getMonth())-1;
} else if(date1.getMonth() < date2.getMonth() && date1.getDate() < date2.getDate()){
  month = (date2.getMonth() - date1.getMonth());
} else if (date1.getMonth() === date2.getMonth()) {
  if (date1.getDate() > date2.getDate()){
    month = (date2.getMonth() - date1.getMonth())-1;
  } else {
    month = (date2.getMonth() - date1.getMonth());
  }
}

let day;
if (date2.getDate() > date1.getDate()) {
  day = (date2.getDate() - date1.getDate())-1;
} else {
  day = ((30 - date1.getDate()) + date2.getDate())-1;  
}

output.innerHTML = `আপনার বয়স হচ্ছে ${year} বছর ${month} মাস ${day} দিন ।`;
}