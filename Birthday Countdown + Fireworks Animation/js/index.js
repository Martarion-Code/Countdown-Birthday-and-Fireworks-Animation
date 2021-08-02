"use strict";

const happyContainer = document.querySelector('.happy__content'); 
const countdownContainer = document.querySelector('.countdown__content'); 
const settingIcon = document.querySelector('.setting-icon');
const modalbox = document.querySelector('.content-modalbox');
const birthdayInput = document.querySelector('.birthday__input');
const submitBtn = document.querySelector('.submit-btn__input--style');
const day = document.querySelector('.days');
const hour = document.querySelector('.hours');
const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');

const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];


const d = new Date();

const oneYearFromNow = new Date(d.setFullYear(d.getFullYear() + 1));

let birthday = '';

birthday = `20 March, ${oneYearFromNow.getFullYear()} 00:00:00`;

function submitDate(e){
  //e.preventDefault();

  let year, str;
  if(birthdayInput.value !== ''){
     str = birthdayInput.value.split(' ');
    if( isNaN(str[0] - 0) && str[0] > 31){
      alert('You have to insert with format like this "Date Month Year". Exp : 20 July 1998');
  
      return;
    }else if(!months.includes(str[1].toLowerCase())){
        alert('You have to insert right month and write it in english!')
  
        return;
    }

  }else{
    alert('You have to insert date!!')
    return;
  }

    const data = new Date(str[0] + ' ' +  str[1] + ' ' + new Date().getFullYear()).setHours(0, 0, 0, 0);

    const now = new Date().setHours(0, 0, 0, 0);

    const lastDateInThisYear = new Date('31 December' + new Date().getFullYear());

    console.log(str[0] + ' ' +  str[1] + ' ' + new Date().getFullYear())
    console.log(new Date(str[0] + ' ' +  str[1] + ' ' + new Date().getFullYear()))

    if(data  < now){
      console.log('past')
      birthday = `${str[0]} ${str[1]} ${oneYearFromNow.getFullYear()} 00:00:00`;
      
    }else if(data <= lastDateInThisYear){
      console.log('_______________________________')
      console.log('not until last date')
      birthday = `${str[0]} ${str[1]} ${new Date().getFullYear()} 00:00:00`;
    }


    modalbox.style.display = 'none';
    

  // console.log(now)
  console.log(`this is ${birthday}`);

}

modalbox.addEventListener('keyup', e =>{
  if(e.key === 'Enter'){
    submitDate();
  } 

  console.log(e.key);
})
submitBtn.addEventListener('click', submitDate)



if(Date.parse()-Date.parse(new Date())<0){
   
}

let distanceOfTime;

let interval = setInterval(() => {

  // if(Date.parse(birthday)-Date.parse(new Date())<0){
  //   console.log('date in past')

  // }

  const date = new Date(birthday),
        seconds = 1000,
        minutes = seconds * 60,
        hours = minutes * 60,
        days = hours * 24;
  
  // console.log(date);
  
  let countDown = date.getTime();
  let now = new Date().getTime();
    
  distanceOfTime =   countDown - now;
    

    day.textContent = Math.floor(distanceOfTime /  (days))
    hour.textContent = Math.floor((distanceOfTime %  (days))  / (hours));
    minute.textContent = Math.floor((distanceOfTime %  (hours))  / (minutes));
    second.textContent = Math.floor((distanceOfTime %  (minutes))  / (seconds));

    // console.log(birthday);


    if(distanceOfTime < 0){
      countdownContainer.style.display = 'none';
      happyContainer.style.display = 'block';

    }else{
      countdownContainer.style.display = 'block';
      happyContainer.style.display = 'none';
    }

    
}, 0);



settingIcon.addEventListener("click", () =>{
  const styleModalbox = getComputedStyle(modalbox);
   
  (styleModalbox.display === 'none') ? modalbox.style.display  = "flex" : modalbox.style.display  = "none";

  birthdayInput.focus()
  

  
})




// addEventListener('keypress', function (e) {
//   if (e.key === 'Enter') {
//     submitDate();
//   }
// });