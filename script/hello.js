
let username;

document.getElementById("my submit").onclick = function(){
  username = document.getElementById("my text").value;
  document.getElementById("my h1").textContent = `hello ${username}`
  console.log(username)
}