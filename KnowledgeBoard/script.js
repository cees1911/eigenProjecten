const radioButton = document.querySelectorAll(".selectButton");
const getUl = document.getElementById("infoList");

//ophalen van de data
function searchsSource(choise) {
  const findknowledge = KnowledgeSource.filter((filter) => {
    return filter.onderwerp.includes(choise);
  });
  putOnScreen(choise, findknowledge);
}

// Het plaatsen van data in de DOM
function putOnScreen(logo, info) {
  switch (logo) {
    case "CSS3":
      document.getElementById("logoImage").src = "images/CSS3.png";
      break;
    case "HTML5":
      document.getElementById("logoImage").src = "images/HTML5.png";
      break;
    case "Javescript":
      document.getElementById("logoImage").src = "images/Javascript.png";
      break;
    case "React":
      document.getElementById("logoImage").src = "images/React.png";
      break;
    case "Tools":
      document.getElementById("logoImage").src = "images/Tools.png";
      break;
  }
  // leeg halen van de <ul>
  while (getUl.firstChild) {
    getUl.firstChild.remove();
  }

  for (let i = 0; i < info.length; i++) {
    let newLi = document.createElement("li");
    newLi.innerHTML = `<a target="_blank" href=${info[i].link}> ${info[i].name} </a>`;
    getUl.appendChild(newLi);
  }
}

// event listener voor de radio buttons
Array.from(radioButton).forEach((button) => {
  button.addEventListener("change", () => {
    searchsSource(event.target.value);
  });
});
