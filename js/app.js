console.log("JS is alive");

// ------------- CASHED ELEMENT RESERVE ---------------------
const inputEl = document.getElementById('input')
const btnEl = document.getElementById('submit-button')
const ulEl = document.getElementById('todo-list')
// -------------------------------------------

btnEl.addEventListener('click', function(evt){
  const li = document.createElement('li')
  const inpEl = document.querySelector('input')
  li.textContent = inpEl.value
  document.querySelector('ul').appendChild(li)
  inpEl.value = ""
  }
)