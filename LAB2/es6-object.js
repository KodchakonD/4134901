let person = {
    firstName: "Fern",
    lastName: "Dam",
    age: 22,
    sex: "female",

    fullName : function () {
        return this.fullName + " " + this.lastName;
    },
};

console.log(person);

const p = person;
p.age = 10;
console.log(p);

person.age = 22;
console.log(person.age);
console.log(person.fullName);
console.log(person.fullName());

const {firstName, lastName, age, sex: s} = person;
console.log(firstName);
console.log(s);

const S1 = "Hello World ";
const S2 = "My Name is ";
const Rname = "Fern";
const conCat = S1 + S2 + Rname;
console.log(conCat);

 conCat =   `   I
                love
                it. ${S2} ${Rname}
            `;
console.log(conCat);

const A1 = [2,3,4];
const A2 = [5,6,7];
const comArr = [A1, A2];
console.log(comArr);

comArr = [...A1, ...A2];
console.log(comArr);

sum = (...numbers) => {
    let total = "";
    for (value of numbers) total += value;
    return total;
};

console.log(sum(comArr));


