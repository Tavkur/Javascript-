function returnday(num){
    switch(num){
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return null;
    }
}
console.log(returnday(1));
console.log(returnday(7));
console.log(returnday(4));
console.log(returnday(0));
