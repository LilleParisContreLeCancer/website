const burgerOpen = document.getElementById('open')
const burgerClose = document.getElementById('closed')
const menu = document.querySelector('nav')
burgerClose.style.display= "none"


burgerOpen.addEventListener('click',(e)=>{
    burgerOpen.style.display= "none"
    burgerClose.style.display= "block"
    menu.style.display = "flex"

    document.querySelector('body').style.overflowY= "hidden"
})

burgerClose.addEventListener('click',(e)=>{
    document.querySelector('body').style.overflowY= "auto"
    burgerOpen.style.display= "block"
    burgerClose.style.display= "none"
    menu.style.display = "none"
})