const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const input = document.querySelector('.input');
const todoSection = document.querySelector("#todo-section");

const ul = document.createElement('ul');
todoSection.appendChild(ul);

plus.addEventListener("click",() =>{
    if(!input.value){
        alert("Boş bırakmayınız!")
    }else{
        ul.innerHTML += `<li style="list-style-type:none;">${input.value}</li>`;
        input.value = "";
    }
});
minus.addEventListener("click",() =>{
    ul.childElementCount > 0
    ? ul.removeChild(ul.lastElementChild)
    : alert("Silinecek bir şey yok!");
})

input.addEventListener("keydown",(e) =>{
    if(e.keyCode === 13){
       plus.click();
    }
    if(e.code === "Delete"){
        minus.click();
    }   
    });

 

window.onload = () => {
    input.focus();
}