// //type alias object
// type poet = {
//     born : number;
//     name: string;
// };
{
    return "first use interface";
}
;
{
    return "Second use interface";
}
;
{
    return 23 + "first use interface";
}
;
function useGivesBoth(instance) {
    instance.giveEither(); // Type: number | string
    instance.giveNumber(); // Type: number
    instance.giveString(); // Type: string
}
