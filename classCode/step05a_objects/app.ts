let teacher = { //implicite type inference.
    name: "Zeeshan",
    experience: "10"
}

console.log(teacher.name);
console.log(teacher["experience"]);


// Type Declaration
//explicitly annotate type
let student : {
    name: string,
    age: number
}

student = {
    name: "Hira",
    age: 30
}

console.log(student["name"]);
console.log(student.age);

        
