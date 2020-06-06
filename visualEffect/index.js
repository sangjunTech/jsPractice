function scrollAppear() {
    const introText = document.querySelector('.intro_text');
    const introPosition = introText.getBoundingClientRect().top;
    const screenPosition = window.innerHeight /1.3;

    if(introPosition < screenPosition) {
        introText.classList.add('intro_appear');
    }
}

    window.addEventListener('scroll',scrollAppear);