const form = document.getElementById("postForm");
const onderwerp = document.getElementById("onderwerp");
const type = document.getElementById("type");
const name = document.getElementById("name");
const link = document.getElementById("link");

//post the data in the json file 
//This bin is available at https://api.npoint.io/db2ee5cd92ca82a22b27
function postTheData(onderwerp, type, name, link){
    const dataToPost = `onderwerp: ${onderwerp.value}, type: ${type.value},
    name: ${name.value}, link: ${link.value}`;

    fetch("https://api.npoint.io/db2ee5cd92ca82a22b27", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',        
            },
        body: JSON.stringify(postTheData)
    });
}

//event listener
form.addEventListener("submit", event =>{
    event.preventDefault();
    postTheData(onderwerp, type, name, link);    
})