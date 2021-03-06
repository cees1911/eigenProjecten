const radioButton = document.querySelectorAll(".selectButton");
const getUl = document.getElementById("infoList");

//ophalen van de data
function searchsSource(choice) {
  const findknowledge = KnowledgeSource.filter(filter => 
    filter.onderwerp.includes(choice));
    pushDataInDom(choice, findknowledge);
}

// Het plaatsen van data in de DOM
function pushDataInDom(logo, info) {

  document.getElementById("logoImage").src = `images/${logo}.png`;
  
  getUl.innerHTML= "";  

  for (let i = 0; i < info.length; i++) {
    let newLi = document.createElement("li");
    newLi.innerHTML = `<a target="_blank" href=${info[i].link}> ${info[i].name} </a>`;
    getUl.appendChild(newLi);
  }
}

// event listener voor de radio buttons
radioButton.forEach((button) => {
  button.addEventListener("change", () => {
    searchsSource(event.target.value);
  });
});