 // document.getElementById("count-el").innerText = 5

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el") //pass in argument
let count = 0 

function increment() {
  count += 1
  countEl.innerText = count
}

function save() {
  let countSt = count + " - "
  saveEl.textContent += countSt
  countEl.textContent = 0
  count = 0
}

// test
