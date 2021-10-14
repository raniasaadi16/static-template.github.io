// nav bar scroll :
window.addEventListener("scroll",() => {
    // select nav 
    const nav = document.querySelector('nav');
    // add sticky classe when you scroll and remove it when you back to top
    nav.classList.toggle("sticky",window.scrollY > 0);
})



// navbar for mobile version :
// select nav 
let nav = document.querySelector("nav");
// select hamburger nav (the 3 lines)
let humb = document.querySelector("nav .hamb");

//when you click on humburger nav the "openNav" function will run
humb.addEventListener("click",openNav);

// openNav function
function openNav(){
    // add open classe to nav when you click on hamburger and remove it when you click for the second time
    nav.classList.toggle("open")
}



// scroll to element of the page :
// select all links of the nav
let navLinks = document.querySelectorAll("nav ul li a");

// for each link 
navLinks.forEach((link) => {
    link.addEventListener("click",(e) => {
        e.preventDefault();
        // get the data-link value
        let targetId = link.getAttribute("data-link");
        // scrollTo function
        window.scrollTo({
            // scroll to the element position - 60px (-60px is added because of the margin-top of each section)
            top: document.getElementById(targetId).offsetTop-60,
            behavior : "smooth"
        });
        // for mobile version , when you click on link the nav will close 
        nav.classList.remove("open");
    })
})



// family slide : 
// select one image from family-slide
let img = document.querySelector(".about .family-slides .img-box img");
// select family-slides section
let slides = document.querySelector('.about .family-slides')
// create array of all images
let allImages = document.querySelectorAll('.about .family-slides img');
// select the next button
let nextBtn = document.querySelector('.about .next');
// select the prev button
let prevBtn = document.querySelector('.about .prev');
// get the width of one image + 20px (i add 20px because of the margin-left and the margin-right) 
let size = img.clientWidth +20;
// declaret a variable named index and set it to 0
let index =0;
// declaret variable named arr 
let arr;

// arr variable for tablette and mobile versions
if(window.innerWidth < 1040){
    arr = allImages.length // this value represente the total number of images , if you have 9 images the arr will be arr=9, so when you are on the image number 9 the next button will disappear 
}else{// arr variable for desktop version
    arr = allImages.length - 2; // i subtract 2 because in the desktop version we have 3 images displayed but in the mobile we have just 1
}

// when you click on next button the function "slideNext()" will run
nextBtn.addEventListener('click',slideNext);
// when you click on next button the function "slidePrev()" will run
prevBtn.addEventListener('click',slidePrev);

// slideNext() function
function slideNext() {
    // in css : "transform = translateX((-size - index*size)px)"
    // initialyl index = 0
    slides.style.transform = "translateX("+(-size - index*size)+"px)";
    // i= i+1
    index++;
    // if we are not in the first image the prev button will have in css "display = flex"
    if(index > 0){
        prevBtn.style.display = "flex";
    }
    // if we are in the last image the next button will have in css "display : none" 
    if (index === arr-1) {
        nextBtn.style.display = "none";
    }
}

// slidePrev() function
function slidePrev() {
    // i = i-1
    index--;
    // in css : "transform = translateX((- index*size)px)"
    slides.style.transform = "translateX("+(-index*size)+"px)";
    // if we are not in the last image the next button will have in css "display : flex" 
    if (index < arr-1) {
        nextBtn.style.display= "flex";
    }
    // if we are in the first image the prev button will have in css "display = none"
    if (index === 0) {
        prevBtn.style.display = "none";
    }
}



// hobbies slide :
// select all hobbies
let hobbies = document.querySelectorAll(".hobby");
// select the active hobby
let activeHobby = document.querySelector(".hobby.active");
// select next button
let nextHobbyBtn = document.querySelector(".my-hobbies .next");
// select prev button
let prevHobbyBtn = document.querySelector(".my-hobbies .prev");
// declaret variable named ind and set it to 0
let ind = 0;

// when you click on next button the function "nextHobby" will run
nextHobbyBtn.addEventListener("click",nextHobby);
// when you click on prev button the function "prevtHobby" will run
prevHobbyBtn.addEventListener("click",prevHobby);

/* important :
                hobbies[0]=the first hobby
                hobbies[1]=the second hobby
                .
                .
                hobbies[hobbies.length]=the last hobby
*/

// nextHobby function
function nextHobby(){
    // remove the class active from the current hobby
    for(i=0 ;i < hobbies.length;i++){
        hobbies[i].classList.remove("active");
    };
    // if we are in the last hobby the variable ind will return to 0
    if (ind == hobbies.length-1) {
        ind = 0;
    }else{
        // if we are not in the last hobby the ind variable will increase i=i+1
        ind++;
    }
    // add the class active to the next hobby
    hobbies[ind].classList.add("active");
}

// prevHobby function
function prevHobby() {
    // remove the class active from the current hobby
    for(i=0 ;i < hobbies.length;i++){
        hobbies[i].classList.remove("active");
    };
    // if we are in the first hobby the variable ind will return to the last hobby
    if (ind == 0) {
        ind = hobbies.length-1;
    }else{
        // if we are not in the last hobby the ind variable will decrease i=i-1 
        ind --;
    };
    // add the class active to the prev hobby
    hobbies[ind].classList.add("active");
    
}









