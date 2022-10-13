// let bike : {type : string, model : string , year : number};
// bike = {
// type : "Honda",
// model : "YBR",
// year : 2002,
// };

// console.log(bike.type);


// // exmaple 2 


// type poet = {BirthY : number , name : string};

// let anotherpoet : poet;

// anotherpoet = {BirthY:1950,name:"ahmed"};




// // example 03 
// const car = {type :  "toyota"};
// car.type = "honda";
// car.type = 1


// // example 04
// type poet = {BirthY : number , name : string};
// poet = {BirthY:1950,name:"ahmed"};

// poet = "iqbal";


// // struct type


// type person = {   //defining object type
//     name : string,
//     DOB: number
// }
// type employee = {  // inheriting person properties
//     name: string,
//     DOB: number,
//      new_employee:boolean
// }
// let value : employee = { // initializing values in the properties of employees
//     name : "", 
//     DOB :22222,
//     new_employee: true
// }
// let var2 = value; //struct
// console.log("Employee 1 : "+value.new_employee);
// var2 = {
// name : "ahmed",
// DOB: 43,
// new_employee:false,
// }
// console.log("Employee 2 : "+value.new_employee);



// // usage checking
// type FirstAndLastNames = {
//     first: string;
//     last: string;
//     };
//     // Ok
//     const hasBoth: FirstAndLastNames = {
//     first: "Sarojini",
//     last: "Naidu",
//     };
//     const hasOnlyOne: FirstAndLastNames = {
//     first: "Sappho"
//     };
//     // Property 'last' is missing in type '{ first: string; }'
//     // but required in type 'FirstAndLastNames'.


//     //excess property checking

//     type Poet = {
//         born: number;
//         name: string;
//         }
//         // Ok: all fields match what's expected in Poet
//         const poetMatch: Poet = {
//         born: 1928,
//         name: "Maya Angelou"
//         };
//         const extraProperty: Poet = {
//         activity: "walking",
//         born: 1935,
//         name: "Mary Oliver",
//         };

    //     //unions of object type

    // // inferred object type union
    // const poem = Math.random() > 0.5
    // ? {name: "name one",page : 234}
    // :{name: "name two",rhymes:true}
    // // type :
    // // {
    // //     name: string;
    // //     pages: number;
    // //     rhymes?: undefined;
    // // }
    // // |
    // // {
    // //     name: string;
    // //     pages?: undefined;
    // //     rhymes: boolean;   
    // // }
    // console.log(poem.name); // string
    // console.log(poem.page); // number | undefined
    // console.log(poem.rhymes); // boolean | undefined


// // nested object types
// type Poem = {
//     author: {
//     firstName: string;
//     lastName: string;
//     };
//     name: string;
//     };
//     // Ok
//     const poemMatch: Poem = {
//     author: {
//     firstName: "Sylvia",
//     lastName: "Plath",
//     },
//     name: "Lady Lazarus",
//     };
//     const poemMismatch: Poem = {
//     author: {
//     name: "Sylvia Plath",
//     },
//     // Error: Type '{ name: string; }' is not assignable
//     // to type '{ firstName: string; lastName: string; }'.
//     // Object literal may only specify known properties, and 'name'
//     // does not exist in type '{ firstName: string; lastName: string; }'.
//     name: "Tulips",
//     };

    // //explicit union type

    // type PoemWithPages = {
    //     name: string;
    //     pages: number;
    //     };
    //     type PoemWithRhymes = {
    //     name: string;
    //     rhymes: boolean;
    //     };
    //     type One1 = PoemWithPages | PoemWithRhymes; // pipe is union (common property show)
    //     let poem1: One1 = Math.random() > 0.5
    //     ? { name: "The Double Image", pages: 7 }
    //     : { name: "Her Kind", rhymes: true };
    //     poem1.; // Ok // cant access more proerp
    //     poem.pages;
    //     // ~~~~~
    //     // Property 'pages' does not exist on type 'Poem'.
    //     // Property 'pages' does not exist on type 'PoemWithRhymes'.
    //     poem.rhymes;
    //     // ~~~~~~
    //     // Property 'rhymes' does not exist on type 'Poem'.
    //     // Property 'rhymes' does not exist on type 'PoemWithPages'.

// narrowing object types 

// type PoemWithPages = {
//     name: string;
//     pages: number;
//     };
// type PoemWithRhymes = {
//     name: string;
//     rhymes: boolean;
//     };
//     type One = PoemWithPages | PoemWithRhymes; // pipe is union (common property show)
//     let poem1: One = Math.random() > 0.5
//     ? { name: "The Double Image", pages: 7 }
//     : { name: "Her Kind", rhymes: true };

//    if("pages" in poem1){ // narrow
//       console.log(poem1.pages);
//    }
//    else{
//     console.log(poem1.rhymes);
//    }
//    poem1.

// //descrimination union
// type PoemWithPages = {
//     name: string;
//     pages: number;
//     type: 'pages';
//     };
//     type PoemWithRhymes = {
//     name: string;
//     rhymes: boolean;
//     type: 'rhymes';
//     };
//     type poyonoil = PoemWithPages | PoemWithRhymes;
//     const poyonoil1: poyonoil = Math.random() > 0.5
//     ? { name: "The Double Image", pages: 7, type: "pages" }
//     : { name: "Her Kind", rhymes: true, type: "rhymes" };
//     if (poyonoil1.type === "pages") {
//     console.log(`It's got pages: ${poem.pages}`); // Ok
//     } else {
//     console.log(`It rhymes: ${poem.rhymes}`);
//     }
//     poyonoil1.type; // Type: 'pages' | 'rhymes'
//     poyonoil1.pages;
//     // ~~~~~
//     // Error: Property 'pages' does not exist on type 'Poem'.
//     // Property 'pages' does not exist on type 'PoemWithRhymes'.


    //ok code written below
//descrimination union
type PoemWithPages = {
    name: string;
    pages: number;
    type: 'pages';
    };
    type PoemWithRhymes = {
    name: string;
    rhymes: boolean;
    type: 'rhymes';
    };
    type poyonoil = PoemWithPages | PoemWithRhymes;
    const poyonoil1: poyonoil = Math.random() > 0.5
    ? { name: "The Double Image", pages: 7, type: "pages" }
    : { name: "Her Kind", rhymes: true, type: "rhymes" };
    if (poyonoil1.type === "pages") {
    console.log(`It's got pages: ${poyonoil1.pages}`); // Ok
    } else {
    console.log(`It rhymes: ${poyonoil1.rhymes}`); //picking poemwithrhymes
    }
    poyonoil1.type; // Type: 'pages' | 'rhymes'
    //poyonoil1.pages;
    // ~~~~~
    // Error: Property 'pages' does not exist on type 'Poem'.
    // Property 'pages' does not exist on type 'PoemWithRhymes'.


// //nested object type

// type poetry = {
//        author : {firstname : string , lastname : string};
//        poetry_name : string
// }
// const poetryOne: poetry = { // properties inherited.
//     author: {
//         firstname: "Ahmed",
//         lastname: "Faraz"
//     },
//     poetry_name: "Ranjish hi sahi"
// }
// const peortyTwo: poetry{
//     author: {
//         firstname: "Ahmed",  // lastname type is missing
//     },
// }


//optional properties
type authorize ={
    author : string,
    pages? : number
}
const usingproperty1: authorize = {
    author: "Shakspear",
    pages:231
}
const usingproperty2: authorize = {
    author:"William"
    //dont need to use second optional property
}


//Intersection Types:
type artwork = {
    pro1:string,
    pro2:string
};
type writting = {
    pro3:string,
    pro2:string
}

type new_type = artwork & writting ; // combines multiple properties together for use

const checked: new_type={pro1:"1",pro2:"2",pro3:"3"}

checked.pro1;
checked.pro2;
checked.pro3;
