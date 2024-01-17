//Open menu
const menuOn = document.querySelector('.menu-on')
const menuOff = document.querySelector('.menu-off')

const menuExpand = document.querySelector('.menu-container')

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



//Scroll Spy
const items = document.querySelectorAll(".sidebar a")

const removeActiveClass = () => {
    items.forEach((item) => {
        item.classList.remove("active")
    })
}

const addActiveClass = (entries, observer) =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            console.log(entry.target)
            let currentSection = document.querySelector(`.sidebar div a[href='#${entry.target.id}']`);
            removeActiveClass();
            currentSection.classList.add("active");
            currentSection.parentElement.previousElementSibling.classList.add("active")
        }
    })
}
const addActiveClassOnClick = () =>{
    items.forEach((item) => {
        item.addEventListener('click' , directClick , false )
    })

    function directClick() {
        addActiveClass
    }
}

const options = {
    treshold: 0.9,
};

const observer= new IntersectionObserver(addActiveClass, options)
const sections = document.querySelectorAll("section")
sections.forEach(section => {
    observer.observe(section)
})