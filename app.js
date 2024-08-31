let btn = document.getElementById('barMenu');
let dropMenu = document.getElementById('dropList');
let upBtn = document.getElementById('upBtn');
let navBar = document.getElementById('navbar');
let startBtn = document.getElementById('startBtn');


btn.addEventListener('click',function(){
    dropMenu.classList.toggle('hidden');
    dropMenu.classList.toggle('animate__slideInDown');
    let check = dropMenu.classList.contains('hidden');
    if(!check){
        btn.classList.remove('fa-bars');
        btn.classList.add('fa-x');
    }else{
        btn.classList.remove('fa-x');
        btn.classList.add('fa-bars');
    }
});


window.addEventListener('scroll',function(){
    let offsetY =   this.window.scrollY;

    if(offsetY > 300){
        upBtn.classList.remove('hidden');
        upBtn.classList.add('animate__slideOutUp');
    }
    else if(offsetY < 300){
        upBtn.classList.add('hidden');
        upBtn.classList.remove('animate__slideOutUp');
    }

})

window.addEventListener('scroll',function(){
    let offsetY =   this.window.scrollY;
    if(offsetY > 100){
        navBar.classList.add('fixed','top-0','w-full','z-50','bg-jobs_nav','shadow-md','backdrop:blur-md','opacity-90','animate__slideInDown');
    }
    else{
        navBar.classList.remove('fixed','top-0','w-full','z-50','bg-jobs_nav','shadow-md','backdrop:blur-md','opacity-90','animate__slideInDown');
    }
})

// btn.addEventListener('click', function() {
//     if (dropMenu.classList.contains('hidden')) {
//         // Remove the hidden class and add the animation class
//         dropMenu.classList.remove('hidden');
//         dropMenu.classList.add('animate__slideInDown');
        
//         // Optionally, remove animation class after animation ends
//         dropMenu.addEventListener('animationend', () => {
//             dropMenu.classList.remove('animate__slideInDown');
//         });
//     } else {
//         // Add the hidden class and remove the animation class
//         dropMenu.classList.add('animate__slideOutUp'); // Change animation class for hiding
//         dropMenu.addEventListener('animationend', () => {
//             dropMenu.classList.add('hidden');
//             dropMenu.classList.remove('animate__slideOutUp');
//         });
//     }
// });
