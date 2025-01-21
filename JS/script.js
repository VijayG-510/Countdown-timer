const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");
const milliseconds=document.querySelector("#milliseconds");
function UpdateTime(){
    const currentYear=new Date().getFullYear();

const newYear=new Date(`January 1 ${currentYear+1} 00:00:00`);/* concardination doing and tick symbol use for quotation*/
// console.log(newYear);

const currentDate=new Date();
// console.log(currentDate);

const difference=newYear-currentDate;
// console.log(difference);/* millisecond இருக்கும் */

/* 
1000ms = 1s
60s = 1m
60m = 1hr
24hrs = 1day
*/

const setDays=Math.floor(difference/1000/60/60/24);/* Math.floor use பண்ணும் போது decimal எடுக்க */
const setHours=Math.floor((difference/1000/60/60)%24);

const setMinutes=Math.floor((difference/1000/60)%60);

const setSeconds=Math.floor((difference/1000)%60);
const setMilliSeconds=Math.floor((difference)%1000);
// console.log(setDays+" "+setHours+" "+setMinutes+" "+setSeconds); //console-ல check me this output
days.innerHTML=setDays;
hours.innerHTML=setHours;
minutes.innerHTML=setMinutes;
seconds.innerHTML=setSeconds;
milliseconds.innerHTML=setMilliSeconds;
}
setInterval(UpdateTime,10);// second speed=10
/*function call and timer is running*/