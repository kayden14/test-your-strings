let btn = document.querySelector('.off');

// Add your code here
    function changeText (){
        btn.style.color = 'aqua';
        btn.style.border = '5px dotted salmon'
        btn.style.textTransform = 'capitalize'
        
}

   btn.addEventListener('click', changeText);
//    btn.removeEventListener('click', changeText);