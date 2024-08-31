let btn = document.getElementById('barMenu');
let dropMenu = document.getElementById('dropList');

btn.addEventListener('click',function(){
    dropMenu.classList.toggle('hidden');
})