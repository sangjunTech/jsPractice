function bgChanger() {
    if(this.scrollY > window.innerHeight/1.5) {
        document.body.classList.add("active_bodycolor")
    } else {
        document.body.classList.remove("active_bodycolor")
    }

    ;
    
}

window.addEventListener("scroll",bgChanger);