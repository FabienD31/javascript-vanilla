const emojy = document.querySelector('.fa-meh-blank');
const btnSubscribe = document.querySelector('.btn-abonne');

function abonnement() {
  emojy.classList.toggle('fa-smile-wink');
}

btnSubscribe.addEventListener("click", ()=>{
  btnSubscribe.classList.toggle('btn-abonne-active');
  abonnement();
  if(btnSubscribe.classList.contains('btn-abonne-active')){
    btnSubscribe.innerHTML = 'Abonné';
  } else {
    btnSubscribe.innerText = "S'abonner";
  }
});
