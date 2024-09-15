const btn = document.querySelector('.menu')
const menu = document.querySelector('.menu-mobile')
const closeBtn = document.querySelector('.menu-close')

btn.addEventListener('click', () =>{
    menu.style.display = 'flex'
})

closeBtn.addEventListener('click', () =>{
    menu.style.display = 'none'
})

