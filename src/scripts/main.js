document.addEventListener("DOMContentLoaded", function() {
    tabsMovies();
    faq();

})

function faq(){
    const questions = document.querySelectorAll("[data-faq-answer]");
    const modifier = 'faq__questions__item--is-open';

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener("click", function(element){
            const currentElement = element.target.parentNode;
            currentElement.classList.toggle(modifier)
        })
    }
}

function tabsMovies(){
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
}

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