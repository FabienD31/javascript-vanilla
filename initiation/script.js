let btnRed = document.getElementById('btn-red');
let btnBlue = document.getElementById('btn-blue');
let score = document.getElementById('score');
let refresh = document.getElementById('refresh-btn');
let compteur = 0;



refresh.addEventListener("click", ()=>{
  location.reload();
});
setTimeout(()=>{
  btnBlue.style.display = "none";
  btnRed.style.display = "none";
},5000);
function add() {
  compteur += 1
  score.innerHTML = "mon score est de : " + compteur;
}
btnRed.addEventListener('click', function() {
add();
});
btnBlue.addEventListener('click', function() {
add();
});