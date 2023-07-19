// type Author = {
//     firstName: string;
//     lastName: string;
// };

type Book = {
    author: {
        firstName: string,
        lastName: string
    };
    name: string;
};

const myBook : Book = {
    author: {
        firstName: "Zia",
        lastName: "Khan"
    },
    name: "My Best Book"
}