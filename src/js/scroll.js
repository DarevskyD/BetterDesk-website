document.addEventListener('scroll', onScroll);

function onScroll() {
    const currentPosition = window.scrollY,
        headerFixed = document.querySelector('.header__fixed'),
        signIn = document.querySelector('.sign-in'),
        signUp = document.querySelector('.sign-up');


    if (currentPosition > 600) {
        headerFixed.classList.add('header__fixed-active');        
        signIn.classList.add('sign-change');
        signUp.classList.add('sign-change');
    } else {
        headerFixed.classList.remove('header__fixed-active');
        signIn.classList.remove('sign-change');
        signUp.classList.remove('sign-change');
    }

}

module.exports = scroll;