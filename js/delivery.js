let delivery_btn = document.querySelector('.conditions-special-delivery');
let modal_delivery = document.querySelector('.modal-container');
let modal_btn_close = document.querySelector('.modal-delivery-btn');

delivery_btn.onclick = function() {
  modal_delivery.classList.remove('modal-container-close');
}

modal_btn_close.onclick = function() {
  modal_delivery.classList.add('modal-container-close');
}


