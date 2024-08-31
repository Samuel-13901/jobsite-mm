let btn = document.getElementById('barMenu');
let dropMenu = document.getElementById('dropList');
let upBtn = document.getElementById('upBtn');

btn.addEventListener('click',function(){
    dropMenu.classList.toggle('hidden');
});

window.addEventListener('scroll',function(){
    let offsetY = this.window.scrollY;
    if(offsetY > 300){
        upBtn.classList.remove('hidden');
    }
    else{
        upBtn.classList.add('hidden');
    }
})