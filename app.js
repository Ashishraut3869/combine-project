// console.dir(document.querySelector("p"));
// console.log(document.querySelector("p"));
// console.dir(document.querySelector("#description"));

// let link=document.querySelectorAll('.box a');
// for(let i=0;i<link.length;i++)
// {
//     link[i].style.color="purple"
// }
/* """"""""""""""""""""""""""""""""""""""*/
// let add=document.createElement("p");
// add.innerText="hey im red";
// document.querySelector("body").append(add);
// add.classList.add('red');
// let add2=document.createElement("p");
// add2.innerText="hey im blue";
// document.querySelector("body").append(add2);
// add2.classList.add("blue");
 

// let div = document.createElement("div");
// let h1  = document.createElement("h1");
// let p2  = document.createElement("p");
// h1.innerText="im heading";
// p2.innerText="im para 2 ";
// div.append(h1);
// div.append(p2);
//  div.classList.add("box");
//  document.querySelector("body").append(div);

//code for button 1 and button 2,3
// let btns = document.querySelectorAll("button");
// for (let btn of btns) {
//     btn.onclick = function() {
//         console.log("hi");
//     }
// }
//usin  on click we set the single value
// but using eventListener we can add multiple eventListener
let btns = document.querySelectorAll("button");
for (let btn of btns) {
    btn.addEventListener("click",function(){alert("hello");});
    btn.addEventListener("click",lisen);
    }
   

function lisen()
{
    alert("im there")
}