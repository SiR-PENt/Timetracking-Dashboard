function func(e){
  e.target.classList.add('bg-color-timeframes');
} 
let compiled_time = document.querySelectorAll('p.compiled-time');
let timeframe = Array.from(document.querySelectorAll('.timeframe'));
timeframe.map(item => item.addEventListener('click',func));
