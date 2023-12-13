
let navLinks = document.getElementById('iop');


function showMenu(){
    navLinks.style.left = "0"
}
function hideMenu(){
    navLinks.style.left = "-200px"
}


const produit = document.querySelector('.produit');
const cardImage = document.querySelectorAll('.card-image');
const price = document.getElementById('price');
const bas = document.getElementById('bas');
const seul = document.getElementById('seul');
const moins = document.querySelector('.moins');
const plus = document.querySelector('.plus');
const btnAjout = document.querySelector('.nn');
/* Recuperation du DOM pour les card */
const cardDisplay = document.querySelector('.card-display');
const checkout = document.getElementById('checkout');
const btnDelet = document.querySelectorAll('.pm');

console.log(seul.textContent);
cardImage.forEach((element) => {
  element.addEventListener('click', () => {
    produit.innerHTML = element.innerHTML;
    console.log('xcvghjk');
  });
});

let cpta = parseInt(seul.innerHTML);
plus.addEventListener('click', function(){
  cpta = cpta + 1;
  seul.innerHTML = cpta;
});
moins.addEventListener('click', function(){
  cpta = cpta - 1;
  if (cpta <= 0) {
    alert('impossible')
  }
  else{
    seul.innerHTML = cpta;
  }
});

btnAjout.addEventListener('click', () => {
  ajoutProduit();
  console.log(btnDelet);
});
const ess = document.querySelector('.card');
const cah = document.getElementById('cah');
function ajoutProduit() {
  let total;
  total = seul.innerHTML * 125.00;
  cah.style.display = 'none';
  const div = document.createElement('div');
  div.classList.add('card-display');
  div.innerHTML += `
  <div class="card-baout">
  <span class="pl">${produit.innerHTML}</span>
  <span class="po">Fall Limited Edition Sneakers <br> $125.00x${seul.textContent} <span style="color: black;">$${total}</span></span>
  <span class="pm"><img src="images/icon-delete.svg" alt="" class="btnDelet"></span>
  </div>
  <button type="submit" id="checkout">Checkout</button>
  `;
  ess.appendChild(div);
  const btnDelet = document.querySelectorAll('.pm');
  btnDelet.forEach((element) => {
    element.addEventListener('click', () => {
      element.parentElement.parentElement.remove();
    });
  });
}
const shop = document.getElementById('shop');
const card = document.querySelector('.card');
shop.addEventListener('click', () =>{
  card.style.display = 'block';
})