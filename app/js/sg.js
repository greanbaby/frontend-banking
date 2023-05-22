/**
 * SG JS
 * Add click event to hamburger menu button
 * Toggle open class on click
 * 
 * @Author: Scott Gingras May 2023
 */
const btnHamburg = document.querySelector('#btnHamburger'),
  body = document.querySelector('body'),
  header = document.querySelector('.header'),
  overlay = document.querySelector('.overlay'),
  fadeElems = document.querySelectorAll('.has-fade');

btnHamburg.addEventListener('click', function() {

  console.log('Ham Burger Clicked');
  
  // Check if header contains 'open' class and if so
  // remove the class from the OVERLAY and the HEADER
  if (header.classList.contains('open')) {
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElems.forEach(function(element) {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
    overlay.classList.add('fade-out');
    overlay.classList.remove('fade-in');

  } else {  // Open Hamburger Menu
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach(function(element) {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
    overlay.classList.add('fade-in');
    overlay.classList.remove('fade-out');

  }

});
