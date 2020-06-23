const radioButton = document.querySelectorAll(".selectButton");



//ophalen van de data
function searchsSource(choise){
   const findknowledge = KnowledgeSource.filter(filter =>{
       return filter.onderwerp.includes(choise)
   })
    console.log(findknowledge);
    putOnScreen(choise, findknowledge);
}

function putOnScreen(logo, info){
   
    switch(logo){

        case "CSS3" :
            document.getElementById("logoImage").src ="images/CSS3.png";
        break;

        case "HTML5" :
            document.getElementById("logoImage").src ="images/HTML5.png";
        break;

        case "Javescript" :
            document.getElementById("logoImage").src ="images/Javascript.png";
        break;

        case "React" :
            document.getElementById("logoImage").src ="images/React.png";
        break;

        case "Tools" :
            document.getElementById("logoImage").src ="images/Tools.png";
        break;

    }
}

// event listener voor de radio buttons
Array.from(radioButton).forEach((button) => {
    button.addEventListener("change", () => {
        const source = event.target.value; 
        searchsSource(source);       
    })
    
});
