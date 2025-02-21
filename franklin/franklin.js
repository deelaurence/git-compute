const closeBtnEl = document.querySelector('.close-btn')
const showBtnEl = document.querySelector('.show')
const headerEl = document.querySelector('header')
closeBtnEl.addEventListener('click',function(){
    console.log("clicked")
    headerEl.style.transform='translateX(350px)'
})
showBtnEl.addEventListener('click',function(){
    console.log("clicked")
    headerEl.style.transform='translateX(0)'
})