const controlNav=document.querySelector("#controlNav")
const sideBar=document.querySelector("#sideBar")
const lists=document.querySelectorAll(".lists")
const skillCount=document.querySelector("#skillCount")


lists.forEach((list) => {
     list.onclick=() => {
        list.classList.toggle("bg-gray-300") 
        const countSelect = document.querySelectorAll(".lists.bg-gray-300")
        // console.log(countSelect.length)
        skillCount.innerText=countSelect.length
     }
})

// console.log(lists)


// console.log(controlNav)
controlNav.onclick=() => {
     sideBar.classList.toggle("translate-x-full")
}