// anonymous

let teacher : {name: string, exp: number} = {
    name: "Zeeshan",
    exp: 10
}

// Aliased Object Type
type Student = {
    name: string,
    age?: number
}

let student: Student = {
    name: "Hira",
    age: 30
}

console.log(student["name"]);
console.log(student.age);

// Interfaces

interface Manager {  //defined schema/structure of objects properties.
    name: string,
    subordiates?: number   //optional
}

let storeManager: Manager = { //storeManager annotate with manager interface. -> another way to defining object type.
    name: "Bilal"
}

        
