// const x= window.prompt("Input first number")
// const y= window.prompt("Input Second Number")

// console.log(x+y)

// const result = parseFloat(x)+parseFloat(y)

// console.log(result)

// const age = window.prompt("How Old are you?")
// const birthYear=2025- parseInt(age);

// window.alert(`Your was born in ${birthYear}`)



//Change Title 

//1.select
const title=document.getElementById("title")
const textInput =document.getElementById("textInput")
const btn =document.getElementById("btn")

//2.set

function changeTitle(){
    title.innerHTML=textInput.value;
    textInput.value=""
}

// btn.onclick =changeTitle;
btn.addEventListener("click",changeTitle)

//3.clear
