const burger - document.querySelector('#burger')
const burger - document.querySelector('#menu')

burger.addEventListenner('click', () => {
    if(menu.classList.contain ('hidden')) {
        menu.classList.remove('hidden')
    } else {
        menu.classList.add('hidden')
    }
})