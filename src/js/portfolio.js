const section2 = document.querySelector('.thumbnail');
const jumbo = document.querySelector('.jumbo');

section2.addEventListener('click', function(e){
    if (e.target.className == 'thumb'){
        jumbo.src = e.target.src;
    }
})