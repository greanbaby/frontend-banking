/**
 * SG JS
 * Add click event to hamburger menu button
 * Toggle open class on click
 * 
 * @Author: Scott Gingras May 2023
 */
const btnHamburg = document.querySelector('#btnHamburger'),
  header = document.querySelector('.header'),
  overlay = document.querySelector('.overlay');

btnHamburg.addEventListener('click', function() {
  console.log('Ham Burger Clicked');
  
  // Check if header contains 'open' class and if so
  // remove the class from the OVERLAY and the HEADER
  if (header.classList.contains('open')) {
    header.classList.remove('open');
    overlay.classList.add('fade-out');
    overlay.classList.remove('fade-in');

  } else {
    header.classList.add('open');
    overlay.classList.add('fade-in');
    overlay.classList.remove('fade-out');

  }

});
