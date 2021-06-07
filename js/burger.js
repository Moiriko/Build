let ham = document.querySelector('.burger')
let menu = document.querySelector('.burger__menu')
let show = document.querySelector('.burger__show')
let close = document.querySelector('.burger__close')

ham.addEventListener('click', toggleMenu)

function toggleMenu(){
    if(menu.classList.contains('showMenu')){
        menu.classList.remove('showMenu')
        close.style.display = 'none'
        show.style.display = 'block'

    }
    else{
        menu.classList.add('showMenu')
        close.style.display = 'block'
        show.style.display = 'none'
    }
}
