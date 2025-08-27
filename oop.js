class Person{
    constructor(name,age,skinColor){
        this.name=name;
        this.age=age;
        this.skinColor=skinColor;
    }
}


class Student extends Person {
    constructor(name,age,MajorName) {
        super(name,age);
        this.classRoom=MajorName;
    }
}


const p1 = new Person("Mg Aye",25,"Black");

console.log(p1)

const s1=new Student("Mr.Jack",23,"White","Cu")

console.log(s1)