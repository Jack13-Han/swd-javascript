const result=document.getElementById("result")
const width=document.getElementById("width")
const breath=document.getElementById("breath")
const storeBtn=document.getElementById("storeBtn")
const clearBtn=document.getElementById("clearBtn")
const click=document.getElementById("calcBtn")
const recordList=document.getElementById("recordList")

const title=document.getElementById("title")
const titleSmaller=document.getElementById("titleSmaller")
const titleLarger=document.getElementById("titleLarger")

//function
const area=(w,b) => w*b;

click.onclick=() => {
    const w= width.valueAsNumber;
    const b=breath.valueAsNumber;

    const a= area(w,b);

    result.innerText =`${w} ft * ${b} ft =${a} sqft`;

    width.value=""
    breath.value=""
}

clearBtn.onclick=() => {
    result.innerText=""
}

storeBtn.onclick=() => {
     recordList.innerHTML +=`<li>${result.innerText}</li>` 
      result.innerText=""
}

click.onclick=() => {
     title.style.color="green"
     title.style.backgroundColor="gray"
}

titleLarger.onclick=() => {

 const current= parseInt(title.style.fontSize)
 title.style.fontSize=`${current +5}px`
}

titleSmaller.onclick=() => {
    
 const current=parseInt(title.style.fontSize)
     title.style.fontSize=`${current - 5}px`
}