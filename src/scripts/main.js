document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("[data-tab-button]");
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(btn){
            const abas = btn.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abas}]`)
            changeList()
            aba.classList.add("shows__list-is--active")
            removeIndex()
            btn.target.classList.add("shows__tabs__button-is--active")
        })
    }
})

function removeIndex(){
    const buttons = document.querySelectorAll("[data-tab-button]");
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("shows__tabs__button-is--active")
    }
}

function changeList(){
    const tab = document.querySelectorAll("[data-tab-id]");
    for(let i = 0; i < tab.length; i++) {
        tab[i].classList.remove("shows__list-is--active")
    }
}