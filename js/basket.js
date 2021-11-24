let basket = document.querySelector('.navigation-user-basket');
let popup_basket = document.querySelector('.popup-basket');

basket.onclick = function() {
  popup_basket.classList.toggle('popup-basket--open');
}
