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

// test

let name = 'heru'
let greeting = 'Hi, my name is '

let myGreeting = greeting + name;

console.log(myGreeting);