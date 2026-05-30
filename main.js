//Open menu
const menuOn = document.querySelector('.dark-menu-on')
const menuOff = document.querySelector('.light-menu-off')
//dark mode
// const menuOn = document.querySelector('.light-menu-on')
// const menuOff = document.querySelector('.dark-menu-off')

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
    treshold: .9,
};

const observer= new IntersectionObserver(addActiveClass, options)
const sections = document.querySelectorAll("section")
sections.forEach(section => {
    observer.observe(section)
})



// Zoomable image
document.addEventListener('DOMContentLoaded', () => {
  const zoomableImages = document.querySelectorAll('.zoomable');
  const overlay = document.getElementById("fullscreen-overlay");
  const fullscreenImage = document.getElementById("fullscreen-image");
  
  zoomableImages.forEach(image => {
    image.addEventListener('click', () => {
      fullscreenImage.src = image.src;
      overlay.style.display = "grid"; // Use grid from the previous fix
    });
  });
});

function closeFullscreen(event) {
  // Check if the event target is the overlay itself or the close button
  if (event.target.id === 'fullscreen-overlay' || event.target.className === 'close-btn') {
    event.stopPropagation(); // Stop the event from propagating
    const overlay = document.getElementById("fullscreen-overlay");
    overlay.style.display = "none";
  }
}





// scroll break
// document.addEventListener('DOMContentLoaded', function () {
//     const mediaProjects = document.querySelectorAll('.mediaProject');

//     function scrollToElement(element) {
//         element.scrollIntoView({
//             behavior: 'auto'
//         });
//     }




//     mediaProjects.forEach(project => {
//         project.addEventListener('click', function () {
//             scrollToElement(project);
//         });



//     });

//     function findCurrentProject() {
//         let currentProject = null;
//         mediaProjects.forEach(project => {
//             const rect = project.getBoundingClientRect();
//             if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
//                 console.log(project)
//                 currentProject = project;
//             }
//         });

//         return currentProject;
//     }

//     window.addEventListener('scroll', function () {
//         console.log('window scroll')
//         const currentProject = findCurrentProject();
//         if (currentProject) {
//             scrollToElement(currentProject);
//         }
//     });
// });