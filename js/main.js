let toggleMenu = document.querySelector(".toggle-menu");
let menuLinks = document.querySelector(".landing .links")

toggleMenu.addEventListener("click" , (e) => {
    e.stopPropagation()
    menuLinks.classList.toggle("open")
    toggleMenu.classList.toggle("toggle-arrow")    
})

menuLinks.onclick = function (e) {
    e.stopPropagation()
}

document.addEventListener('click', (e) => {
    if (e.target !== menuLinks && e.target !== toggleMenu) {
        if(menuLinks.classList.contains("open")) {
            menuLinks.classList.toggle("open")
            toggleMenu.classList.toggle("toggle-arrow")
        }
    }
})


let settings = document.querySelector(".settings .details");
let settingsIcons = document.querySelector(".settings .icons");
let gearIcon = document.querySelector(".settings .gear")


settingsIcons.addEventListener("click" , () => {
    settings.classList.toggle("opene")
    gearIcon.classList.toggle("fa-spin")
})


let colorLis = document.querySelectorAll(".settings .colors ul li");

if(localStorage.getItem("--main-color")) {
    document.documentElement.style.setProperty("--main-color" , `${localStorage.getItem("--main-color")}`);
    colorLis.forEach((li) => {
        li.classList.remove("active");
        if(li.getAttribute("data-color") == `${localStorage.getItem("--main-color")}` ) {
            li.classList.add("active")
        }
    })
}
colorLis.forEach((li) => {
    li.addEventListener("click" , (e) => {
        colorLis.forEach((li) => {
            li.classList.remove("active")
        })
        document.documentElement.style.setProperty("--main-color" , e.currentTarget.dataset.color);
        localStorage.setItem("--main-color" , e.currentTarget.dataset.color);
        e.currentTarget.classList.add("active")
    })
}) 

let showBullets = document.querySelectorAll(".show-bullets .buttons button");

if(localStorage.getItem("bullets-no")) {
    showBullets.forEach((btn) => {
        btn.classList.remove("active")
        if(btn.classList.contains("no")) {
            btn.classList.add("active")
        }
    })
} if(localStorage.getItem("bullets-yes")) {
    showBullets.forEach((btn) => {
        btn.classList.remove("active")
        if(btn.classList.contains("yes")) {
            btn.classList.add("active")
        }
    })
}

showBullets.forEach((btn) => {
    btn.addEventListener("click" , (e) => {
        showBullets.forEach((btn) => {
            btn.classList.remove("active")
            e.currentTarget.classList.add("active")
            if(e.currentTarget.classList.contains("no")) {
                localStorage.setItem("bullets-no" , "no")
                localStorage.removeItem("bullets-yes")
            }if(e.currentTarget.classList.contains("yes")) {
                localStorage.setItem("bullets-yes" , "yes")
                localStorage.removeItem("bullets-no")
            }
        })
    })
})

// show or hidden the bullets 

let navBullets = document.querySelector (".nav-bullets");

if(localStorage.getItem("bullets-no")) {
    navBullets.style.display = "none"
} else if(localStorage.getItem("bullets-no")) {
    navBullets.style.display = "block"
}

showBullets.forEach((li) => {
    li.addEventListener("click" , (e) => {
        if(li.classList.contains("no")) {
            navBullets.style.display = "none"
        } else if(li.classList.contains("yes")) {
            navBullets.style.display = "block"
        }
    })
})



// go to any section by click on any bullet in navdullets 


let bulletInNav = document.querySelectorAll(".nav-bullets ul li") 



bulletInNav.forEach(bullet => {
    bullet.addEventListener('click' , (e) => {

        // Just Another Way To Go To Section 

        // let idSection = document.getElementById(`${e.currentTarget.dataset.section}`)
        // console.log(idSection.offsetTop)
        // window.scrollTo(0,idSection.offsetTop)


        document.getElementById(`${e.currentTarget.dataset.section}`).scrollIntoView({
            behavior : "smooth"
        })
        
    })
})



let randomBack = document.querySelectorAll(".random-back .buttons button");

if(localStorage.getItem("random-no")) {
    randomBack.forEach((btn) => {
        btn.classList.remove("active")
        if(btn.classList.contains("no")) {
            btn.classList.add("active")
        }
    })
} if(localStorage.getItem("random-yes")) {
    randomBack.forEach((btn) => {
        btn.classList.remove("active")
        if(btn.classList.contains("yes")) {
            btn.classList.add("active")
        }
    })
}

randomBack.forEach((btn) => {
    btn.addEventListener("click" , (e) => {
        randomBack.forEach((btn) => {
            btn.classList.remove("active")
            e.currentTarget.classList.add("active")
            if(e.currentTarget.classList.contains("no")) {
                localStorage.setItem("random-no" , "no")
                localStorage.removeItem("random-yes")
            }if(e.currentTarget.classList.contains("yes")) {
                localStorage.setItem("random-yes" , "yes")
                localStorage.removeItem("random-no")
            }
        })
    })
})


let backgroundImage = ["01.jpg" , "02.jpg" , "03.jpg" , "04.jpg" , "05.jpg"]
let landing =  document.querySelector(".landing");
let random;

function ran() {
    random = setInterval(() => {
        landing.style.backgroundImage = `url(imgs/${backgroundImage[Math.ceil(Math.random()*(backgroundImage.length-1))]})`;
    }, 10000);
}


if(localStorage.getItem("random-no")) {
    clearInterval(random)
    landing.style.backgroundImage = `url(imgs/01.jpg)`;
}if(localStorage.getItem("random-yes")) {
    ran()
}   



randomBack.forEach((btn) => {
    btn.addEventListener("click" , (e) => {
        if(e.currentTarget.classList.contains("no")) {
            clearInterval(random)
            landing.style.backgroundImage = `url(imgs/01.jpg)`;
        }else if(e.currentTarget.classList.contains("yes")) {
            ran()
        }
    })
})

let resetOptions = document.querySelector(".reset-options");

resetOptions.addEventListener("click" , () => {
    window.localStorage.clear();

    window.location.reload()

    document.querySelector(".random-back .buttons .yes").click()
    
})




let skills = document.querySelector(".our-skills");
let skillsSpan = document.querySelectorAll(".skill-box .skill-progress span")

window.onscroll = () => {

    let offsetTop = skills.offsetTop

    let skillHeight = skills.offsetHeight

    let pageYoff = this.scrollY

    if (pageYoff > (offsetTop + skillHeight - this.innerHeight))

        skillsSpan.forEach(span => {
            span.style.width = span.dataset.skill
        })
}



// Create Popup in Gallery Section 

let gallery = document.querySelectorAll(".gallery .pic div")

gallery.forEach(pic => {
    pic.addEventListener("click" , (e) => {

        let overLay = document.createElement("div");

        overLay.style.cssText = 
        `position: fixed; left: 0; top: 0; width:100% ; height: 100%; background-color: rgba(0, 0, 0, .7); z-index: 10000`

        let bigDiv = document.createElement("div");

        bigDiv.style.cssText = `display: flex; align-items: center; flex-direction: column; justify-content: center; 
        background-color: white; padding: 10px; z-index: 10001`

        bigDiv.classList.add("center-fix")

        if (window.innerWidth < 768) {
            bigDiv.style.width = `${(window.innerWidth /1.5).toString()}px`
        } else {
            
            bigDiv.style.width = `${(window.innerWidth /2).toString()}px`
        }

        let iconX = document.createElement("span");

        // I Know That There's Better Way To Style The Element By Using Classes and Css But I Want To Practice on CssText in Js

        iconX.style.cssText = `position: absolute; right: -10px; top: -10px; background-color: var(--main-color); border-radius: 50%;
        display: flex; justify-content: center; align-items: center; padding: 15px; width: 20px; height: 20px; color: white;
        font-size: 20px; cursor: pointer;`

        let xLetter = document.createTextNode("X");

        let title = document.createTextNode(`Image ${e.currentTarget.dataset.num}`)

        let divTitle = document.createElement("div");

        divTitle.style.cssText = `text-align: center; color: var(--main-color); font-weight: bold; font-size: 20px; margin-bottom: 15px;
        margin-top: 15px`;

        let imgDiv = document.createElement ("div");

        imgDiv.style.cssText = `margin: 10px`;

        let img = document.createElement("img");

        img.style.cssText = `max-width: 100%`;

        img.setAttribute("src" , pic.firstElementChild.src )

        iconX.addEventListener("click" , () => {
            bigDiv.style.display = `none`
            overLay.style.display = `none`
        })

        imgDiv.appendChild(img);

        divTitle.appendChild(title);

        bigDiv.appendChild(divTitle);

        iconX.appendChild(xLetter);

        bigDiv.appendChild(iconX);

        bigDiv.appendChild(imgDiv);

        document.body.appendChild(overLay);

        document.body.appendChild(bigDiv);
    })
})
    



