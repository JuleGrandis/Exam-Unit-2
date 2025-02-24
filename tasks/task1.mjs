const consts = {
    INCH_CONVERSION_RATE: 25.4,
    PI: 3.14159,
    DEFAULT_PRECISION: 1e-7, //Set to 1e-7 following Newton-Raphson method to limit iterations
    GREETING_TEMP: "Greetings, "
}

function absolute(value) { // Helper function to ensure input value isn't negative, created to avoid using Math.abs
    return value < 0 ? -value : value; 
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

            case "areaOfCircle":
                return consts.PI * num * num;

            case "inchToMM":
                if (typeof num != "number" || isNaN(num)) {
                    return NaN;
                }
                return num * consts.INCH_CONVERSION_RATE;

            case "greet":
                return `${consts.GREETING_TEMP}${num}!`;

            default:
                return null;
        }
    }
}

export const square = mathOperations("square");
export const cube = mathOperations("cube");
export const root = mathOperations("root");
export const areaOfCircle = mathOperations("areaOfCircle");
export const inchToMM = mathOperations("inchToMM");
export const greet = mathOperations("greet");