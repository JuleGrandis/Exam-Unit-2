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

function absolute(value) { // Helper function to ensure input value isn't negative, created to avoid using Math.abs
    return value < 0 ? -value : value; 
}

function inchToMM(int) {
    if (typeof int != "number" || isNaN(int)) {
        return NaN;
    }
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
                if (typeof num != "number" || isNaN(num)) {
                    return NaN;
                }
                return num * num * num;

            case "root":
                if (num < 0) {
                    return null;
                }

                if (num === 0) {
                    return 0;
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

addSpacing(1);
// inchToMM Function ------------------------------------------------------------------------------------------------
tester.isEqual(inchToMM(20), 508, "Converting 20 inches to mm, should return 508 | Testing positive numbers");
tester.isEqual(inchToMM(0), 0, "Converting 0 inches to mm, should return 0 | Testing with 0");
tester.isEqual(inchToMM(2.5), 63.5, "Converting 2.5 inches to mm, should return 63.5 | Testing with decimals");
tester.dosNotThrowError(() => inchToMM(-5), "Negative inches should throw an error | Testing with negative numbers");

// Edge cases
tester.isNotANumber(inchToMM(null), "Testing with 'null' input, should return NaN")
tester.isNotANumber(inchToMM(undefined), "Testing with 'undefined' input, should return NaN")
tester.isNotANumber(inchToMM("Staff"), "Testing with string, should return NaN");

addSpacing(1);
// root Function ----------------------------------------------------------------------------------------------------
tester.isEqual(root(16), 4, "Root of 16, should return 4. | Testing with positive numbers.");
tester.isEqual(root(0), 0, "Root of 0, should rerun 0. | Testing with 0.");
tester.isInRange(root(2), 1.4142, 1.4143, "Root of 2, should return approximately 1.4142. | Testing with decimal conversion.");
tester.dosNotThrowError(() => root(-16), "Testing negative numbers, should throw an error. | Error handling functionality.");

// Edge cases
tester.isEqual(root(0.0001), 0.01, "Root of 0.0001, should return 0.01. | Testing with small numbers.");
tester.isEqual(root(1e10), 1e5, "Root of 1e10, should return 1e5. | Testing large number.");
tester.dosNotThrowError(() => root(null), "Root of null, should throw and error. | null error handling.");
tester.dosNotThrowError(() => root(undefined), "Root of undefined, should throw error. | undefined error handling.");
tester.dosNotThrowError(() => root("Wonderful"), "Root of string, should throw error. | string error handling.");

addSpacing(1);
// cube Function ------------------------------------------------------------------------------------------------------
tester.isEqual(cube(4), 64, "Cube of 4, should return 64 | Testing positive numbers.");
tester.isEqual(cube(0), 0, "Cube of 0, should return 0 | Testing with 0");
tester.isEqual(cube(-4), -64, "Cube of -4, should return -64 | Testing negative numbers.");
tester.isEqual(cube(2.5), 15.625, "Cube of 2.5, should return 15.625 | Testing with decimals");

// Edge cases
tester.isEqual(cube(1e4), 1e12, "Cube of 1e4, should return 1e12 | Testing with large numbers");
tester.isNotANumber(cube(null), "Cube of null, should return NaN | NaN handling");
tester.isNotANumber(cube(undefined), "Cube of undefined, should return NaN | NaN handling");
tester.is
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