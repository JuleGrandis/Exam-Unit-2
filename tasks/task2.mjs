function flattenArray (arr) {
    let result = [];

    function flattenHelp (element) {
        if (Array.isArray(element)) {
            for (let item of element) {
                flattenHelp(item);
            }
        } else {
            result.push(element);
        }
    }

    flattenHelp(arr);
    return result;
}

export default flattenArray;