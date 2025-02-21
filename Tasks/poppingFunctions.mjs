import test from "../test.mjs";

//#region Tasks
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
    DEFAULT_PRECISION: 1e-7, //Set to 1e-7 following Newton-Raphson method to limit iterations
    ERROR_NEGATIVE_ROOT: "Can't root negative numbers",
    GREETING_TEMP: "Greetings, "
}

function absolute(value) { // Helper function to ensure input value isn't negative used in later function
    return value < 0 ? -value : value; 
}

function inchToMM(int) {
    return int * consts.INCH_CONVERSION;
}

function areaOfCircle(radius) {
    return consts.PI * radius * radius;
}

function greet(name) {
    return `${consts.GREETING_TEMP}${name}!`;
}

function mathOperations(operation) {
    return function (num) {
        switch (operation) {

            case "square":
                if (typeof num != "number" || isNaN(num)) {
                    return NaN;
                }
                return num * num;

            case "cube":
                return num * num * num;

            case "root":
                if (num < 0) {
                    return null;
                }

                let x = num, prev;

                do {
                    prev = x;
                    x = (x + num / x) / 2;
                } while (absolute(x - prev) > consts.DEFAULT_PRECISION);

                return x;

            default:
                return null;
        }
    }
}

const square = mathOperations("square");
const cube = mathOperations("cube");
const root = mathOperations("root");

addSpacing(1);


// Use-case Functionality Tests -------------------------------------------------------------------------------------

print(square(10));
print(inchToMM(20));
print(root(16));
print(cube(4));
print(areaOfCircle(5));
print(greet("Aleks"));

addSpacing(1);

// Test Framework Tests ---------------------------------------------------------------------------------------------

const tester = test("Function Tests");

// Square Function --------------------------------------------------------------------------------------------------
tester.isEqual(square(5), 25, "Square of 5 should be 25| Testing positive Numbers");
tester.isEqual(square(-3), 9, "Square of -3 should be 9 | Testing negative numbers");
tester.isEqual(square(0), 0, "Square of 0 should be 0 | Testing squaring 0");
tester.isEqual(square(2.5), 6.25, "Square of 2.5 should be 6.25 | Testing decimal numbers");

// Edge cases
tester.isEqual(square(1e10), 1e20, "Squaring 1e10 should be 1e20 | Testing large numbers");
tester.isNotANumber(square(NaN), "Square of NaN should be NaN | Testing non-numbers");
tester.isNotANumber(square(null), "Square of Null should be NaN | Testing null");
tester.isNotANumber(square(undefined), "Square of undefined should be NaN | Testing undefined");
tester.isNotANumber(square("Wizard"), "Squaring 'Wizard' should return NaN | Testing string");

// inchToMM Function ------------------------------------------------------------------------------------------------
tester.isEqual(inchToMM(20), 508, "Returning 20 inches to mm")

//#region Util Functions

function print(text) {
    console.log(text);
}

function addSpacing(lines = 1) {
    for (let i = 0; i < lines; i++) {
        console.log("");
    }
}

//#endregion