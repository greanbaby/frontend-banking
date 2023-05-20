const btnHamburg = document.querySelector('#btnHamburger')
btnHamburg.addEventListener('click', function() {
  console.log('Ham Burger Clicked');
  btnHamburg.classList.toggle('open');
});