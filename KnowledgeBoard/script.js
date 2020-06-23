const radioButton = document.querySelectorAll(".selectButton");


//ophalen van de data
function searchsSource(choise){
   const findknowledge = KnowledgeSource.filter(filter =>{
       return filter.onderwerp.includes(choise)
   })
    console.log(findknowledge);
}

// event listener voor de radio buttons
Array.from(radioButton).forEach((button) => {
    button.addEventListener("change", () => {
        const source = event.target.value; 
        searchsSource(source);       
    })
    
});
