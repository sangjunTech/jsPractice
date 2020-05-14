function scrollAppear() {
    var introText = document.querySelector('.intro_text');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight /1.3;

    if(introPosition < screenPosition) {
        introText.classList.add('intro_appear');
    }
}

    window.addEventListener('scroll',scrollAppear);