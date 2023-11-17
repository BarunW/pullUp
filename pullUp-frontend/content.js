const popUp = document.createElement("div");

let pullup_type = "default";
let isDragging = false;
let offsetX;
let offsetY;
let apiKey ;


(() => {
    document.body.appendChild(popUp);
    popUp.style.display = "none";
    
})()
// make resizable 

// check the codeAI route 

// we can fetch many image from the api and show as thumail on click we can send to original link or popup the original image

// font size control


const promptInput = document.createElement("input");
const topGbutton = document.createElement("h5");
const contentContainer = document.createElement("div")
const selectedContent = document.createElement('p');
const closeButton = document.createElement("img");
const navBar = document.createElement('nav');
const maxToken = document.createElement("input")
const iconSettings = document.createElement("img");
const settingContainer = document.createElement("div");

const imageHolder  = document.createElement("div");

const image_pullup_button = document.createElement("h5");
const resizeBtn = document.createElement("button")


// appending child
function appendChild(){
    popUp.appendChild(navBar);
    navBar.appendChild(closeButton)
    navBar.appendChild(resizeBtn);
    navBar.appendChild(iconSettings);
    popUp.appendChild(promptInput);
    popUp.appendChild(contentContainer);   
    contentContainer.appendChild(selectedContent); 
    popUp.appendChild(topGbutton);
    popUp.appendChild(image_pullup_button);
}
appendChild();

// inorder to make dynamically ove the Popup element i.e main element is style when any page loads any iife 
(() =>{
    popUp.style.left = '50%'
    popUp.style.top = '50%'
    popUp.style.transform = 'translate(-50%,-50%)'
    popUp.style.height = '600px';
    popUp.style.width = "600px";
    popUp.style.position = "fixed";
    popUp.style.backgroundColor = "#222831";
    popUp.style.flexDirection = 'column';
    popUp.style.padding = '10px';
    popUp.style.zIndex = 9999;
    popUp.style.borderRadius = '5px';
    

})();

// majority of the element styles here
function style(){
    
    navBar.style.boxShadow = "0px 3px 1px 0px grey"
    promptInput.style.cssText = "height:7%; border: 2px solid black;padding: 5px; border-radius: 5px;text-indent: 2px;font-size: 16px;width:99% "
    contentContainer.style.cssText = "width:99%; height:75%; overflow-x:hidden; oveflow-y:scroll;text-color:white; display:flex; flex-direction:column; color-white;zIndex:5"
    topGbutton.innerText ="PULL-UP" 
    topGbutton.style.cssText = "height:auto; width:auto; background:transparent;color:white; border:3px solid blue; padding:2px; cursor:pointer "
    image_pullup_button.style.cssText = "height:auto; width:auto;background:transparent;color:white; border:3px solid blue; padding:2px; cursor:pointer"
    image_pullup_button.innerText = "Image-Mode"
    closeButton.innerText = "X";
    closeButton.style.cssText = "color:red; margin-top:0;height:2%; cursor:context-menu; margin-bottom:2px"
    navBar.style.cssText = "cursor:context-menu; margin-bottom:2px; padding:2px ;height:6%; width:100%; display:flex; flex-direction:row; justify-content:space-between; align-items:center; z-index:5"
    resizeBtn.innerHTML = "OF"
    resizeBtn.style.cssText = "height:2%; width:2%; background:transparent;color:white; border:3px solid blue; cursor:pointer; font-size:16px"
    iconSettings.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE/klEQVR4nO1aSYhdRRT9GqfglIhiEhEjahbiECckRgMGNTigaOKwEgUNYou4yABujRNkIW4kiujCAdSFCwNuogimO0KidAczaWz8QZo/1Dn1f8fW1rRPTudWKJ5/eO0f+jf8Cw/633fr1j1Vd6p6ncv1qU99+l8E4D4AO0geJZnM8jMuWwDcOyMQJLf0gPFJneelzDuhAQD+JLmhWCwuzs0yFYvFxSQ3mk1Jpp0B8JUh35DrMSK5yYDsyCI8LuFCobAo12NUKBQW2SJXmwoHX2x1Uu/9owD+CPoA0Ht/U6t6mdW+dgEh+XmNQH15LgLJS0+lUllGcq3p/aLngJTL5StJvuq9vzz9rlqtnh98OUmSkyuVyhX2+0idOQX0rVKptKSrQABcC6BkshPe+81JkswL7733a+zdN/otMCGJCGSQGx8fvxDAp1EcHSqXyxd1BYhz7qoAAsDPkf8PVSqVmwE8D+An470R6R0y3l7n3DMknwDgjFchud90HqhWqxd0HAiAd23C3UmSnOacuyfEQ+r5EcA10QLcLSNryG13zl1s7njUeE92HAjJ2wH8oyqrOBGvXC6fA2AbgEkAn8j16o1XClbQCzyAx6MFes7m/o3kgo4DsUm3mdyg/D/w4ziZCZFcGmIIwAOt2pdZUDsQudMLuRYJwJem6+N22DcjQe/9I/VSqmJHrgJgl/m9niEAA3qX0nOZ7cQxZbGuAwHwosm+H/NVCwD8UK8NB/B9XC8sNQ/rnfd+TdeAJElyuvf+BpK/Kui1ovE7GRp2iuS6Uql0th6SDwI4aGD2xDvjnHvM+F8rhefz+fkdAQLgfpIfqgYA+Dta3e9SciHzHPHen5fWLZ4B1NiBwB8bGzszBDuPv9McwwDeU9VvGxCSv0eTHCO5j+RH2pkUkF0mt66efu/9w6GApvh3yU1JjqQWa7KdQKZ53vsbm2z79KrKlZpkvIZninw+P18u1siWVoHc4b1f2GBstRkQAOc2A+K9X6i5OgFk2sBou38B8BmAVXVc66EG+kNLP5gau0oNpHSnMl2lbUA0Cck3Se6Mr4fUNKbkBox/sF6wq8M1mWcDP0mSkwAcjozXHN9qzvRitTP9zrOzyIjk5MupQngi/SqwFRMWF2sjEGo4Tw3jnHMrbMyIdDdqdTpR2deH7rVGQdzToCDuTl8xWROpGFzfLvsyC5JcbbITceMY7YzcbNAymZ6dcqd4J6LKPmG6VncViCq4zhsmu6Wp0ow3mwAOjI6OntGqfZkFdRticvsEKvCTJDklq/GxrC2MimzTm5a2ASG5XJUXwJRz7pZQwABsVRW2E9+KeuMtsLfbIWxrKLDiA5iyqr6840AAvB5Sb6FQOMvy/6EaQX3YObcyArAylWJPXDhIh/ot2FkfwGsdB2KnuelDlQzTKtqYYRlL8qmQmtVoRuM+MN5ekk8DuDW073Z0DiCle2nHgYgAXAJg1Iz4SysYt+Ukrzc9+yPe9C0JyeviONFVUrhl5/Ha8597so4BiXbmFQBXp99Z+lUMTMn9zAXl/5PpE2K4YpIukpf23JVpKIpyIQC3hWLYql7OApB3agT223MOiPf+zvjUp7/F6yaQqgR74ZNbmnQvXKu1r0n2JVfCG3M9Rt77zZk/velDowkrJW7KctXfaSqVSkssTU9m/hgq0ifgem34nPk8HUiozc3igJ1b/zDQpz71KRfoX+ExValbc0yhAAAAAElFTkSuQmCC"
    closeButton.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABrElEQVR4nO2aUU7DMAxAcwnQNo4EF2Hf2zgAXGscAqRVsZDa2tP2zcYHfIFcUlRVY02TLsk0P6laP5IpT07iRK5SgiA4sYb1HQIuEfCDgL5jPgi457GQptteEgT0FHvw9P/zaB2JqoOmT9Q4K1bFWEWmWBVj1DjnMZmxdUcGNT5X4dQ4U4mBgAsz1ZY2jffcOM/zkUqMPM9HRmTX2bieiypRyHZ8IhIIkogkBklEOiihvN++ba+VI9yX/yNqRBBwajLtq4sM9+G+JjdMo4lsYHNFQC9mIFmf40y7r20CplOtERcZV4mTL/Y+Mj4SQXYtGxlfiWDb7zGZISSC5pFDMkNJBE+IzW21+m28++ScKJm9GYUhIpGUyBDXZpKp1ZNDC9vnBJDE9ttcE0PJUOiEeGhhDyFDIY8ox3YnXxkKdWi02WJ9ZCjEMb5PnnCVIblYXcJVNwYkIolBEpHEoIuLCALuuGEKJbc2qPHG3DTfuxtz9fS39DZXiUFAD9alNy40/hVDARdlVk5UZMqsnBiJL+tiKMMl4FZJ+PzK0zVsbT4YqIqjZ/nBgCAIquYHceezhRDm6u8AAAAASUVORK5CYII="
    iconSettings.style.cssText = "height: 35px; width: 35px;cursor: pointer;"
    closeButton.style.cssText = "height: 35px; width: 35px;cursor: pointer;"
    selectedContent.style.cssText = "font-size: 14px; color: white; font-weight: bold; overflow:hidden; position:fixed;background-color: #222731; overflow:hidden; height:4%;"
    imageHolder.style.cssText = "overflow-x:scroll; width: 100%; height: 100%;display: flex; flex-direction:row; justify-content:space-around; align-items: center; padding:3px"
}

navBar.addEventListener('mousedown', (event) => {
    isDragging = true;
    offsetX = event.clientX - popUp.offsetLeft;
    offsetY = event.clientY - popUp.offsetTop;
  });
  
document.addEventListener('mousemove', (event) => {
    if (!isDragging) return;
    const x = event.clientX - offsetX;
    const y = event.clientY - offsetY;
    popUp.style.left = x + 'px';
    popUp.style.top  = y + 'px';
  });
  
document.addEventListener('mouseup', () => {
    isDragging = false;
});



// creating and appending all the elements into settings container

(()=>{
    settingContainer.style.backgroundColor ='#222731'
    settingContainer.style.width = '50%'; 
    settingContainer.style.height = '40%';
    settingContainer.style.position = "absolute"
    settingContainer.style.top = '50%'; 
    settingContainer.style.left = '50%';
    settingContainer.style.transform = 'translate(-50%, -50%)';
    settingContainer.style.flexDirection = 'column';
    settingContainer.style.display='none'
    settingContainer.style.borderRadius = '5px'
    popUp.append(settingContainer);
})()

function settingsComponent(){
    const apiKeyInput = document.createElement("input");
    const maxToken = document.createElement("input");
    const button = document.createElement("button");
    const apikeyLabel = document.createElement("label");
    const maxTokenLabel = document.createElement("label");

    settingContainer.appendChild(apiKeyInput);
    settingContainer.appendChild(maxToken);
    settingContainer.appendChild(button);

    apiKeyInput.style.cssText = "width:90%; height: 10%; margin: 2px;"
    maxToken.style.cssText = "width:50%; height: 20%; margin: 2px;"
    button.innerText = "Save"
}

settingsComponent();


// settings logic
let isSettingsOpen = false;

iconSettings.addEventListener('click',(e)=>{    
    alert(isSettingsOpen);

    switch(isSettingsOpen){
        case true:
            settingContainer.style.display = "none";
            isSettingsOpen = false;
            break;
        default :
            isSettingsOpen = true;
            settingContainer.style.display = "flex";
            break;
    }
})


// main Event listener ie mouseup when user selects text

let selectedTextContent = " "
document.addEventListener('mouseup', function(){
    const selection = document.getSelection();
    const selectedText = selection.toString();
    style();
    if( selectedText!== '' && selectedText.trim()!==''){
        selectedTextContent = selectedText;
        selectedContent.innerText = selectedText;
        popUp.style.display = "flex";
            topGbutton.addEventListener('click',async function(){
               const prompt = promptInput.value.concat(" ").concat(selectedText)
                switch(pullup_type){
                    case 'code':
                        fetchCode(prompt)
                        .then(response => response.toString())
                        .then(generatedCode = content.innerText = generatedCode)
                        break;
                    default:
                        const response = await fetchData(prompt)
                        pushContent(response);
                        promptInput.value = '';
                        break;

                }
            })
    }
    else{
        popUp.display = "none";
    }

});


// the fetch data from api is pushed into the content container
function pushContent(text){
    const content = document.createElement("p");
    content.id = "content";
    content.style.cssText = "color:white"
    content.innerText = text
    contentContainer.appendChild(content);
}


// fetch and render image from api
image_pullup_button.addEventListener('click',async() =>{
    const prompt = promptInput.value.concat(" ").concat(selectedTextContent);
    const urls = await fetchImage(prompt);
    console.log(urls);
    for(let i = 0; i<urls.length; i++){
        const img = document.createElement("img");
        img.id = `img1${i}`;
        img.src = urls[i].url; 
        img.style.width = "32%"
        img.style.height = "45%"
        img.style.margin = "2px"
        img.style.borderRadius = "4px"
        imageHolder.appendChild(img)    ;
    }
    contentContainer.appendChild(imageHolder);
    promptInput.value = '';

})

// close button logic
closeButton.addEventListener('click',()=>{
    popUp.style.display = "none";
    selectedContent.innerText = '';
})





// fetch text from api
async function fetchData(userPrompt){
    const response = await fetch("http://localhost:8080/text-completion",{
        method:"POST",
        body   :  JSON.stringify({apiKey:"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",prompt:userPrompt,maxToken:500}),
        headers:{
            "Content-Type" : "application/json"
        }
    })
   
    const text = await response.text();
    return text;
}

// fetch image
async function fetchImage(userPrompt){
    const response = await fetch("http://localhost:8080/image-generation",{
        method:"POST",
        body   :  JSON.stringify({apiKey:"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",prompt:userPrompt}),
        headers:{
            "Content-Type" : "application/json"
        }
    })

   
    const urls = await response.json();
    return urls;
}

async function fetchCode(userPrompt){
    const response = await fetch("http://localhost:8080/code-AI",{
        method:"POST",
        body   :  JSON.stringify({apiKey:"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",prompt:userPrompt,maxToken:100}),
        headers:{
            "Content-Type" : "application/json"
        }
    })
   
    const gernerated_code = await response.text();
    return gernerated_code;
}



