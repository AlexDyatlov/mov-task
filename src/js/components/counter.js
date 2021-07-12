document.querySelector('.figure__item').addEventListener('click', (e) => {
  let value = 0;
  const btn = e.target;
  const delay = 700;
  
  const increment = () => {
    value++;
    btn.innerHTML = value;
    
    if(value <4) {
      setTimeout(increment, delay);
    } else {
      value = 0
      btn.innerHTML = "Go!"
    }
  }
  
  setTimeout(increment, delay);
  
});