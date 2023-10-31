const menuOn = document.querySelector('.menu-on')
const menuOff = document.querySelector('.menu-off')

const menuExpand = document.querySelector('.menu-container')

//Open menu
menuOn.addEventListener('click', () => {
    menuExpand.classList.remove('visually-hidden');
});

//close menu through close button or Escape key
menuOff.addEventListener('click', () => {
    console.log("clicked")
    menuExpand.classList.add('visually-hidden');
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        menuExpand.classList.add('visually-hidden');
    }
});