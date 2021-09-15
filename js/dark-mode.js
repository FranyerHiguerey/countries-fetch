const btnDark = document.querySelector(".btn-dark-mode")
const configUser = window.matchMedia('(prefers-color-scheme: dark)')
const localConfig = localStorage.getItem("tema")
const body = document.querySelector("body")
const iconBtn = document.querySelector("button i.far")
let theme

window.addEventListener("DOMContentLoaded", () =>{
    if(localConfig === 'dark-mode'){
        body.classList.toggle('dark-mode')  
    }else if(localConfig === 'light-mode'){
        body.classList.toggle('light-mode')
    }
    body.classList.contains("dark-mode") ?  btnDark.innerHTML = `<i class="far fa-moon"></i> Dark mode` : btnDark.innerHTML = `<i class="far fa-sun"></i>light mode`
})


btnDark.addEventListener("click", () =>{
    if(configUser.matches){
        body.classList.toggle('light-mode')
        theme = body.classList.contains('light-mode') ? "light-mode" : "dark-mode"
    }else{
        body.classList.toggle('dark-mode')
        theme = body.classList.contains('dark-mode') ? "dark-mode" : "light-mode"
    }
    body.classList.contains("dark-mode") ?  btnDark.innerHTML = `<i class="far fa-moon"></i> Dark mode` : btnDark.innerHTML = `<i class="far fa-sun"></i>light mode`
    localStorage.setItem('tema', theme)
})


