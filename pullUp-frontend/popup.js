

document.getElementById("4534").addEventListener("click",function(){
    const apiKey = document.getElementById("1P811").value
    const catFound = new CustomEvent('animalfound', {
        detail: {
            name: 'cat'
        }
        });
    
    document.dispatchEvent(catFound);
    
})

//popup.js



