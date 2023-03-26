document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.navbar');
    const navColapse = document.querySelector('.navbar-collapse')
    const link = document.querySelectorAll('.nav-link')

    const addShadow = () => {
        if (window.scrollY >= 0) {
            nav.classList.add('shadow-bg')
        }
        else if (window.scrollY >= 80) {
            nav.classList.add('shadow-bg')
        }
        else {
            nav.classList.remove('shadow-bg')
        }
    }
    const hideNavBar = () => {
        navColapse.classList.remove('show')
    }
    window.addEventListener('scroll', addShadow);
    window.addEventListener('DOMContentLoaded', addShadow)
    link.forEach(link => {
        link.addEventListener('click', hideNavBar);
    })
})
