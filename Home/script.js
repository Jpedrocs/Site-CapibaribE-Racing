var iconMenu = document.querySelectorAll('.material-icons')

iconMenu[0].addEventListener('click', ()=>{
    menu = document.getElementById('menu')

    if(menu.classList.contains('hide')){
        menu.classList.add('show')
        menu.classList.remove('hide')
    }
    if(menu.classList.contains('show')){
        menu.classList.add('hide')
        menu.classList.remove('show')
    }


})
