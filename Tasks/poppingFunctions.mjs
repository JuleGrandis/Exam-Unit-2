
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

export const consts = {
    INCH_CONVERSION: 25.4,
    PI: 3.14159,
    DEFAULT_PRECISION: 1e-7, //Set to 1e-7 following Newton-Raphson method to limit iterations
    ERROR_NEGATIVE_ROOT: "Can't root negative numbers",
    GREETING_TEMP: "Greetings, "
}

export function absolute(value) { // Helper function to ensure input value isn't negative, created to avoid using Math.abs
    return value < 0 ? -value : value; 
}

export function inchToMM(int) {
    if (typeof int != "number" || isNaN(int)) {
        return NaN;
    }
    return int * consts.INCH_CONVERSION;
}

export function areaOfCircle(radius) {
    return consts.PI * radius * radius;
}

export function greet(name) {
    return `${consts.GREETING_TEMP}${name}!`;
}

export function mathOperations(operation) {
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

export const square = mathOperations("square");
export const cube = mathOperations("cube");
export const root = mathOperations("root");
