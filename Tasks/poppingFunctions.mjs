//#region 
/*## Task : Functions are a popping
Create the following functions: 
- A function that returns the square of a number
- A function that returns a length in mm assuming it has been given a length in inches.
- A function that returns the root of a number
- A function that returns the cube of a number 
- A function that returns the area of a circle given the radius. 
- A function that returns a greeting, given a name.*/
//#endregion
function square(num) {
    return num * num;
}

function inchToMM(int) {
    const inchInMm = 25.4;
    return int * inchInMm;
}

function root(){

}

function cube(num) {
    return num ** num;
}

function areaOfCircle(radius) {
    const PI = 3.14159;
    return PI * radius * radius;
}

function greet(name) {
    return `Greetings, ${name}!`
}

