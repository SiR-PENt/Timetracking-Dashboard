
 function func(e){
  for(let i=0; i<timeframe.length; i++){ 
    timeframe[i].className='timeframe bg-color-p'; 
  }
  e.target.className="timeframe bg-color-p-timeframe"
} 
 
let compiled_time = document.querySelectorAll('p.compiled-time');
let timeframe = Array.from(document.querySelectorAll('.timeframe'));
timeframe.map(item => item.addEventListener('click',func));

let compiled = document.querySelectorAll('.compiled-time')
let hours = document.querySelectorAll('.hours')

function firstTimeframe(){
   compiled[0].innerHTML = 'Previous - 7hrs'
   hours[0].innerHTML = '5hrs'
   
   compiled[1].innerHTML = 'Previous - 2hrs'
   hours[1].innerHTML = '1hr'

   compiled[2].innerHTML = 'Previous - 1hr'
   hours[2].innerHTML = '0hr'

   compiled[3].innerHTML = 'Previous - 1hr'
   hours[3].innerHTML = '1hr'

   compiled[4].innerHTML = 'Previous - 3hrs'
   hours[4].innerHTML = '1hr'

   compiled[5].innerHTML = 'Previous - 1hr'
   hours[5].innerHTML = '0hr'
} 

function secondTimeframe(){
  compiled[0].innerHTML = 'Previous - 36hrs'
  hours[0].innerHTML = '32hrs'
  
  compiled[1].innerHTML = 'Previous - 8hrs'
  hours[1].innerHTML = '10hrs'

  compiled[2].innerHTML = 'Previous - 7hrs'
  hours[2].innerHTML = '4hrs'

  compiled[3].innerHTML = 'Previous - 5hrs'
  hours[3].innerHTML = '4hr'

  compiled[4].innerHTML = 'Previous - 10hrs'
  hours[4].innerHTML = '5hrs'

  compiled[5].innerHTML = 'Previous - 2hrs'
  hours[5].innerHTML = '2hrs'
} 

function thirdTimeframe(){
  compiled[0].innerHTML = 'Previous - 128hrs'
  hours[0].innerHTML = '103hrs'
  
  compiled[1].innerHTML = 'Previous - 29hrs'
  hours[1].innerHTML = '23hrs'

  compiled[2].innerHTML = 'Previous - 19hrs'
  hours[2].innerHTML = '13hrs'

  compiled[3].innerHTML = 'Previous - 18hrs'
  hours[3].innerHTML = '11hrs'

  compiled[4].innerHTML = 'Previous - 23hrs'
  hours[4].innerHTML = '21hrs'

  compiled[5].innerHTML = 'Previous - 11hrs'
  hours[5].innerHTML = '7hrs'
} 
timeframe[0].addEventListener('click',firstTimeframe);
timeframe[1].addEventListener('click',secondTimeframe);
timeframe[2].addEventListener('click',thirdTimeframe);
