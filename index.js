"use strict"

const burger = document.getElementById('navbar__button')
const close = document.getElementById('close')
const open = document.getElementById('open')
const navbar = document.getElementById('navbar')
const logo = document.getElementById('logo')
const logo__text = document.getElementById('logo__text')
const list = document.getElementsByClassName('navbar__list_element')

burger.addEventListener('click', () => {
    if(open.classList.length >= 2){
        close.classList.add('burger__none')
        open.classList.remove('burger__none')
        navbar.classList.remove('open__navbar')
        Array.from(list).map((item)=>{
            item.children[1].classList.remove('text__block')
            item.classList.remove('block')
        })
        logo.classList.remove('block')
        logo__text.classList.remove('block')
    }else{
        logo__text.classList.add('block')
        Array.from(list).map((item)=>{
            item.children[1].classList.add('text__block')
            item.classList.add('block')
        })
        logo.classList.add('block')
        open.classList.add('burger__none')
        close.classList.remove('burger__none')
        navbar.classList.add('open__navbar')

    }
})
