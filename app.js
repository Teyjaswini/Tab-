const cl = console.log;

let alltabheading = [...document.querySelectorAll('.tab-heading li')]


function ontabheadingclick(eve){
    let activeli = document.querySelector('.tab-heading .active')
    activeli.classList.remove('active')
    eve.target.classList.add('active')


    let cardId = eve.target.getAttribute('data-id')
    let activecard = document.querySelector('.tab-cards .card.active')
    activecard.classList.remove('active')
    document.getElementById(cardId).classList.add('active')
}


 alltabheading.forEach((li)=>{
    li.addEventListener('click',ontabheadingclick)
 })