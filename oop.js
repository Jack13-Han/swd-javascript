// class Person{
//     constructor(name,age,skinColor){
//         this.name=name;
//         this.age=age;
//         this.skinColor=skinColor;
//     }
// }

// class Student extends Person {
//     constructor(name,age,MajorName) {
//         super(name,age); Parent ထဲက ဟာကိုပြန်ခေါ်သုံးချင်ရင် super နဲ့ပြန်ခေါ်သုံးတယ်

//         this.classRoom=MajorName;
//     }
// }

// const p1 = new Person("Mg Aye",25,"Black");

// console.log(p1)

// const s1=new Student("Mr.Jack",23,"White","Cu")

// console.log(s1)

const date = new Date();

const fullMonthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//To နဲ့က အတွဲလိုက် ယူတာ ဖြစ်ပါတယ်
// console.log(date)
// console.log(date.toString())
// console.log(date.toDateString())
// console.log(date.toTimeString())

console.log(fullMonthNames[date.getMonth()]);
console.log(date.getFullYear());
console.log(date.getYear());
