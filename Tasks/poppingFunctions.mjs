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

const consts = {
    INCH_CONVERSION: 25.4,
    PI: 3.14159,
    DEFAULT_PRECISION: 1e-7,
    ERROR_NEGATIVE_ROOT: "Can't root negative numbers",
    GREETING_TEMP: "Greetings, "
}

function square(num) {
    return num * num;
}

function inchToMM(int) {
    return int * consts.INCH_CONVERSION;
}

function root(num){

    if (num < 0) {
        throw new Error(consts.ERROR_NEGATIVE_ROOT); 
    }

    let x = num, prev;
    do {
        prev = x;
        x = (x + n / x)
    }
}

function cube(num) {
    return num * num * num;
}

function areaOfCircle(radius) {
    return consts.PI * radius * radius;
}

function greet(name) {
    return consts.GREETING_TEMP `${name}!`;
}

console.log(cube(3));
console.log(greet("Aleks"));