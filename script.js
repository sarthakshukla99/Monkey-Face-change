const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');

closedFace.addEventListener('click', function(){
    if(closedFace != 'none'){
        closedFace.style.display = 'none'
        openFace.style.display = 'block'
    }
    
})
openFace.addEventListener('click', function(){
    if(openFace != 'none'){
        openFace.style.display = 'none'
        closedFace.style.display = 'block'
    }
    
})

