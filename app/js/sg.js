/**
 * SG JS
 * Add click event to hamburger menu button
 * Toggle open class on click
 * 
 * @Author: Scott Gingras May 2023
 */
const btnHamburg = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');

btnHamburg.addEventListener('click', function() {
  console.log('Ham Burger Clicked');
  header.classList.toggle('open');
});
