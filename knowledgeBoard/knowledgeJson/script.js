const radioButton = document.querySelectorAll(".selectButton");
const getUl = document.getElementById("infoList");

//ophalen van de data   190c4e4a-3b0d-46f9-98a4-314aa77804f5 
function fetchData(choice) {
  fetch("https://api.npoint.io/db2ee5cd92ca82a22b27")
    .then((res) => res.json())
    .then((data) => {
      const findknowledge = data.filter((filter) =>
        filter.onderwerp.includes(choice)
      );
      pushDataInDom(choice, findknowledge);
    });
}

// Het plaatsen van data in de DOM
function pushDataInDom(logo, info) {
  document.getElementById("logoImage").src = `images/${logo}.png`;

  getUl.innerHTML = "";

  for (let i = 0; i < info.length; i++) {
    let newLi = document.createElement("li");
    newLi.innerHTML = `<a target="_blank" href=${info[i].link}> ${info[i].name} </a>`;
    getUl.appendChild(newLi);
  }
}

// event listener voor de radio buttons
radioButton.forEach((button) => {
  button.addEventListener("change", () => {
    fetchData(event.target.value);
  });
});
