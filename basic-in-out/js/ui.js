//selector

const root=document.querySelector("#root")
root.classList.add("p-5")

//create h1 element
const heading=document.createElement("h1")
heading.innerText="I am Sai Htee Sai"


//adding class heading
// heading.className="text-3xl font-bold font-serif"

heading.classList.add("font-bold","text-3xl","font-serif")

//add title attribute
heading.title ="This is heading"
heading.id="heading"
console.log(heading)


//add img element
const saiImg=document.createElement("img")
saiImg.src="https://alchetron.com/cdn/sai-htee-saing-126b086c-bfe4-4afe-b960-99e0bac60db-resize-750.jpeg"
saiImg.classList.add("h-5","w-20","p-5")
console.log(saiImg)
//add img attribute

//add ul li element
const listGroup =document.createElement("ul")

const createList = (text) => {
    const li = document.createElement("li") 
    li.classList.add("border","p-3","mb-3")
    li.innerText=text;
    return li
}

listGroup.append(createList("apple"))
listGroup.append(createList("orange"))
listGroup.append(createList("banana"))
listGroup.append(createList("pieapple"))


// console.log(createList("haha"))
console.log(listGroup)


//add heading element to main
root.append(heading)
root.append(saiImg)
root.append(listGroup)
