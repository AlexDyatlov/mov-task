"use strict";document.querySelector(".figure__item").addEventListener("click",(function(e){var t=0,i=e.target;setTimeout((function e(){t++,i.innerHTML=t,t<4?setTimeout(e,700):(t=0,i.innerHTML="Go!")}),700)}));