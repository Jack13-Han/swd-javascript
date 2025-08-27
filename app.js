// console.log("Hello")

// const name ="Han Wai";
// let age =22;
// let township= "Osaka";


// console.log(name)
// console.log(age)

// let results=[];
// let resultIndex=0;

// let area= function(width,breadth){
//     let result = width*breadth;
//     results[resultIndex++]={
//         width,
//         breadth,
//         area:result,
//     };
//     return `${result} sqft`
// };

// console.log(area(15,20))
// console.log(results)

// exchange function

const rates={
    usd:2100,
    eur:2400,
    jp:30,
}

const exchange = (amount,currency)=> {
    const currencyRates= rates[currency]
    console.log(currencyRates)
 let resut = amount * currencyRates;

 return `${resut} mmk`
}

console.log(exchange(200,"usd"))
console.log(exchange(150,"eur"))
console.log(exchange(3000,"jp"))

const exchangeMMK=(amount,currency)=>{
    const currencyRates = rates[currency]
    // console.log(currencyRates)
    const result= amount /currencyRates;
    return `${result} ${currency}`
}

console.log(exchangeMMK(50000,"usd"))
console.log(exchangeMMK(50000,"eur"))
console.log(exchangeMMK(50000,"jp"))



