// ckeck if there's local storage color option
let mainColors = localStorage.getItem('color-option');

if(mainColors !== null) {
    document.documentElement.style.setProperty('--main-color' , localStorage.getItem('color-option'));

    // remove active class from all colors li 
    document.querySelectorAll('.colors_list li').forEach(function(element) {
        element.classList.remove('active');
    // add active class on elemet with data-color === local storage item
    if(element.dataset.color === mainColors) {
        // add active class
        element.classList.add('active');
    }
    });    
}

// random background option
let backgroundOption = true;

// let to control the background interval interval
let backgroundInterval;

// check if there's local storage random background item
let backgroundLocalItem = localStorage.getItem('background_option');
// check if random background local storage is not null
if(backgroundLocalItem != null) {
    console.log(typeof(backgroundLocalItem));

    if(backgroundLocalItem === 'true') {
        backgroundOption = true;
    }
    else{
        backgroundOption = false;
    }
    console.log(backgroundLocalItem);


    // remove active class from all span
    document.querySelectorAll('.random_backgrounds span').forEach(function(element) {
        element.classList.remove('active');

    });

    if(backgroundLocalItem === 'true') {
        document.querySelector('.random_backgrounds .yes').classList.add('active')
    }
    else{
        document.querySelector('.random_backgrounds .no').classList.add('active')
    }
}






let btn = document.querySelector('.toggle_settings');
let gear = document.querySelector('.fa-gear');
let settingsBox = document.querySelector('.settings-box');
btn.onclick = ()=> {
    gear.classList.toggle('spin');
}
gear.onclick = function() {
    settingsBox.classList.toggle('open');
}




    
let colorsLi = document.querySelectorAll('.colors_list li');

colorsLi.forEach( function(li) {
    li.addEventListener('click' , function(e) {
        console.log(e.target.dataset.color);
        document.documentElement.style.setProperty('--main-color' , e.target.dataset.color);

        localStorage.setItem('color-option' , e.target.dataset.color);

        // remove active class from all child
        e.target.parentElement.querySelectorAll('.active').forEach(function(element) {
            element.classList.remove('active');
        });
        // add active class
        e.target.classList.add('active');
    });
});

// switch random background option
let randomBackgroundsElement = document.querySelectorAll('.random_backgrounds span');

randomBackgroundsElement.forEach( function(span) {
    span.addEventListener('click' , function(e) {
        // remove active class from all span
        e.target.parentElement.querySelectorAll('.active').forEach(function(element) {
            element.classList.remove('active');
        });
        // add active class
        e.target.classList.add('active');

        if(e.target.dataset.background === 'yes') {
            backgroundOption = true;
            console.log(backgroundOption);

            randomizeImgs();
            localStorage.setItem('background_option' , true);
        }
        else{
            backgroundOption = false;
            console.log(backgroundOption);

            clearInterval(backgroundInterval);
            localStorage.setItem('background_option' , true);
        }
    });
});






// select landing page element
let landingPage = document.querySelector('.landing_page');
// get array of imgs
let imgArray = ['01.jpg' , '02.jpg' , '03.jpg' , '04.jpg' , '05.jpg'];


// funcation randomize imgs
function randomizeImgs() {
    if(backgroundOption === true) {

        backgroundInterval = setInterval(function() {
            // get rendom number
            let rendomNumber = Math.floor(Math.random()* imgArray.length);
            // change background img Url
            landingPage.style.backgroundImage = 'url("imgs/' + imgArray[rendomNumber] + '")';
            console.log(rendomNumber);
        }, 4000);
    }
}randomizeImgs();












// select our_skills selector
let ourSkills = document.querySelector('.our-skills');
window.onscroll = function() {
    // skills offset top
    let skillsOffsetTop = ourSkills.offsetTop;
    // skills outer height
    let skillsOuterHight = ourSkills.offsetHeight;
    // window height
    let windowHeight = this.innerHeight;
    // window scroll top
    let windowScrollTop = this.pageYOffset;


    if(windowScrollTop > (skillsOffsetTop + skillsOuterHight - windowHeight)) {
        let allSkills = document.querySelectorAll(".skill-box  .skill-progress  span");
        allSkills.forEach(function(skill) {
            skill.style.width = skill.dataset.prog;
        });
    }
};







// craete popup with img
let ourGallery = document.querySelectorAll('.gallery img');
ourGallery.forEach(function(img) {
    img.addEventListener('click' , function(e) {
        // craete overlay elemet
        let overlay = document.createElement('div');
        // add to class overlay
        overlay.className = 'popup-overlay';
        // appen overlay to body
        document.body.appendChild(overlay);
        // create popup box
        let popupBox = document.createElement('div');
        // add to class popup box
        popupBox.className = 'popup-box';
        // craete the popup image
        let popupImage = document.createElement('img');
        // set img src
        popupImage.src = img.src;
        // add image to popup box
        popupBox.appendChild(popupImage);
        // appen the popup box to body
        document.body.appendChild(popupBox);



        if(img.alt !== null) {
            // create heading
            let imgHeading = document.createElement('h3');
            // create text for heading
            let imgText = document.createTextNode(img.alt);
            // append the text to the heading
            imgHeading.appendChild(imgText);
            // append the heading to the popup box
            popupBox.appendChild(imgHeading);
        }


        // create close span
        let closeButton = document.createElement('span');
        // create close buttob text
        let closeButtobText = document.createTextNode('x');
        // appent text to close button
        closeButton.appendChild(closeButtobText);
        // add class to close button
        closeButton.className = 'close-button';
        // add close button to the popup box
        popupBox.appendChild(closeButton);
    });
});

// close popup
document.addEventListener('click' , function(e) {
    if(e.target.className == 'close-button') {
        // remove the current popup
        e.target.parentNode.remove();

        // remove the overlay
        document.querySelector('.popup-overlay').remove();
    }
});









// select all bullets
let allBullets = document.querySelectorAll('.nav-bullets .bullet');

// allBullets.forEach(function(bullet) {
//     bullet.addEventListener('click' , function(e) {
//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });



// select all links
let allLinks = document.querySelectorAll('.links a');

// allLinks.forEach(function(link) {
//     link.addEventListener('click' , function(e) {
//         e.preventDefault();
//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

function scrollToAnywhere(elements) {
    elements.forEach(function(ele) {
        ele.addEventListener('click' , function(e) {
    
            e.preventDefault();
    
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
scrollToAnywhere(allBullets);
scrollToAnywhere(allLinks);







// switch bullets option 
let bulletsSpan = document.querySelectorAll('.bullets-option span');
let bulletsContainer = document.querySelector('.nav-bullets');

let yes = document.querySelector ('.bullets-option .yes');
let no = document.querySelector ('.bullets-option .no');

let bulletsLocalItem = localStorage.getItem('bullets-option');
if (bulletsLocalItem !== null) {
    console.log('Not Empty');
    // remove active class from all span
    bulletsSpan.forEach(function(element) {
    element.classList.remove('active');
    });

    if (bulletsLocalItem === 'block') {
        bulletsContainer.style.display = 'block' ;
        
        // add active class
        yes.classList.add('active');

    }else {
        bulletsContainer.style.display = 'none' ;

        // add active class
        no.classList.add('active');
    }
}

bulletsSpan.forEach(function(span) {
    span.addEventListener('click' , function(e) {
        if (span.dataset.display === 'show') {
            bulletsContainer.style.display = 'block' ;

            localStorage.setItem('bullets-option' , 'block');
        }
        else {
            bulletsContainer.style.display = 'none' ;
        
            localStorage.setItem('bullets-option' , 'none');    
        }
    });
});


let reset = document.querySelector('.reset-option');
reset.onclick = function() {
    // localStorage.clear();

    localStorage.removeItem('color-option');
    localStorage.removeItem('background_option');
    localStorage.removeItem('bullets-option');

    // reload window
    window.location.reload();
}








// create toggle menu
let toggleBtn = document.querySelector('.toggle-menu');
let toggleLinks = document.querySelector('.links');
toggleBtn.onclick = function() {
    // toggle class "open" on links
    toggleLinks.classList.toggle("open");
}
