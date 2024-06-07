/**
 * Select the navigation container element.
 * @type {Element}
 */
const nav = document.querySelector(".page-nav");

/**
 * Select the button container element.
 * @type {Element}
 */
const button = document.querySelector(".button__background");

/**
 * Initially hide the menu by adding the 'initialPosition' class.
 */
nav.classList.add('initialPosition');

/**
 * Toggle the 'moveToTop' and 'initialPosition' classes on the navigation and its items.
 */
function toggleMenu() {
  nav.classList.toggle('moveToTop');
  nav.classList.toggle('initialPosition');
}

/**
 * Handle the trigger menu action when the button is clicked.
 * @param {Event} e - The event object.
 */
function handleTriggerMenu(e) {
  const buttonTrigger = e.target.closest(".button__container");

  if (!buttonTrigger) return;

  toggleMenu();
}

/**
 * Add click event listener to the button to trigger the menu toggle.
 */
button.addEventListener("click", (e) => {
  handleTriggerMenu(e);
});

/**
 * Add click event listener to the navigation container for event delegation.
 * Toggle the menu when a navigation item is clicked.
 */
nav.addEventListener("click", (e) => {
  const navItem = e.target.closest("li");

  if (navItem) {
    toggleMenu();
  }
});
