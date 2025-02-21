const inputEl = document.querySelector('#input')
const buttonEl = document.querySelector('#add-btn')
const contEl = document.querySelector('#the-list-container')
const todos = []

buttonEl.addEventListener('click',function(){
    const inputValue = inputEl.value
    todos.push(inputValue)

    console.log(todos)
    contEl.innerHTML=''
    for(let i=0; i<todos.length; i++){
        const paraEl = document.createElement('p')
        paraEl.textContent=todos[i]
        //before I append clear what was there before
        contEl.appendChild(paraEl)
    }
})