let loader = document.querySelector("#loader");
let main = document.querySelector("#main");

setTimeout(function(){

    loader.style.display = "none";
    main.style.display = "block";

},2000);
    let typed = new Typed("#element", {
    strings: [
        "Frontend Web Developer",
        "Basic Graphic Designer",
        "Agentic AI Enthusiast"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});



let about = document.querySelector("#about");

let heading = document.querySelector("#about h1");
let para = document.querySelector("#about #para");

window.addEventListener("scroll", function () {

    let top = about.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
        heading.classList.add("show");

        setTimeout(function () {
            para.classList.add("show");
        }, 300);
    }

});
let h2 = document.querySelector("#about h2");
let p = document.querySelector("#p");
let resumebtn = document.querySelector(".resumebtn");


window.addEventListener("scroll", function(){

    let top = about.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
        h2.classList.add("show");

        setTimeout(function(){
            p.classList.add("show");
        },300);

        setTimeout(function(){
            resumebtn.classList.add("show");
        },600);

    }

});

let cards = document.querySelectorAll(".skill-card");
let skills = document.querySelector("#skills");

window.addEventListener("scroll",function(){

    let top = skills.getBoundingClientRect().top;

    if(top < window.innerHeight-100){

        cards.forEach(function(card,index){

            setTimeout(function(){

                card.classList.add("show");

            },index*150);

        });

    }

});
let projectHeading = document.querySelectorAll(".project-card h2");
let projectPara = document.querySelectorAll(".project-card p");

window.addEventListener("scroll", function () {

    projectHeading.forEach(function(heading, index){

        let top = heading.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            heading.classList.add("show");

            setTimeout(function(){
                projectPara[index].classList.add("show");
            },300);

        }

    });

});


let skillsHeading = document.querySelector("#skills h2");
let skillsPara = document.querySelector("#skills p");

window.addEventListener("scroll", function () {

    let top = skills.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
        skillsHeading.classList.add("show");

        setTimeout(function () {
            skillsPara.classList.add("show");
        }, 300);
    }

});
let name = document.querySelector("#name");
let form = document.querySelector("form");
let email = document.querySelector("#email");
let emailerror = document.querySelector("#emailerror");

form.addEventListener("submit", function(dets){
    dets.preventDefault();

    if(name.value.length < 5){
        document.querySelector("#nameerror").style.display = "block";
    }
    else{
                document.querySelector("#nameerror").style.display = "none";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailans = emailRegex.test(email.value);
    if(!emailans){
        emailerror.style.display = "initial";
        }
        else{
              emailerror.style.display = "none";
        }
});
let project = document.querySelector("#project");
let projectHead = document.querySelector("#project h1");

window.addEventListener("scroll", function () {

    let top = project.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
        projectHead.classList.add("show");
    }

});
let contact = document.querySelector("#contact");

let contactHeading = document.querySelector("#contact h1");
let contactPara = document.querySelector("#contact p");

window.addEventListener("scroll", function () {

    let top = contact.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        contactHeading.classList.add("show");

        setTimeout(function () {
            contactPara.classList.add("show");
        }, 300);

    }

});
let button = document.querySelector("#button");

button.addEventListener("click", function () {
    window.location.href = "#contact";
});