 // document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el") //pass in argument
let count = 0 

function increment() {
  count += 1
  countEl.innerText = count
}

function save() {
  console.log(count)
}