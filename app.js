const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const input = document.querySelector('.input');
const todoSection = document.querySelector("#todo-section");

const ul = document.createElement('ul');
todoSection.appendChild(ul);

plus.addEventListener("click",() =>{
    if(!input.value){
        alert("This place cannot be left blank!");
    }else{
        ul.innerHTML += `<div class="task">
         <button class="check">
        <i class="fa-solid fa-check"></i>
         </button>
          <li class="list">${input.value}</li>
          <button class="delete">
            <i class="far fa-trash-alt"></i>
         </button>
         </div>`;
        input.value = "";

        let close = document.querySelectorAll(".delete");
        for(let i = 0; i < close.length; i++){
            close[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        let check = document.querySelectorAll(".check");
        for(let i = 0; i < check.length; i++){
            check[i].onclick = function(){
                this.parentNode.style.textDecoration = "line-through";
                this.parentNode.style.color = "aqua";
                this.nextElementSibling.style.color = "aqua";
                this.style.backgroundColor = "green";
            }
        }
        for (let i = 0; i < check.length; i++) {
          check[i].ondblclick = function () {
            this.parentNode.style.textDecoration = "none";
            this.nextElementSibling.style.opacity = "1";
            this.nextElementSibling.style.color = "black";
            this.style.backgroundColor = "white";
            this.nextElementSibling.style.fontStyle = "normal";
          };
        }
    }
});
// minus.addEventListener("click",() =>{
//     ul.childElementCount > 0
//     ? ul.removeChild(ul.lastElementChild)
//     : alert("There is nothing to delete!");
// })



input.addEventListener("keydown",(e) =>{
    if(e.keyCode === 13){
       plus.click();
    }
    if(e.code === "Delete"){
        minus.click();
    }   
    });

 function removeAll() {
   document.querySelector("ul").innerHTML = "";
 }

// window.onload = () => {
//     input.focus();
// }

input.focus();