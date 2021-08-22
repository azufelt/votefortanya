const date = new Date();
const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
document.querySelector("#currentyear").innerHTML = date.getFullYear();
 

const button = document.querySelector(".ham");
const navlist = document.querySelector("nav");
button.addEventListener("click",() =>{navlist.classList.toggle("responsive")}, false);

