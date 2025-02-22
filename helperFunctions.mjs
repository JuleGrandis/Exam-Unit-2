function print(text) {
    console.log(text);
}

function addSpacing(lines = 1) {
    for (let i = 0; i < lines; i++) {
        console.log("");
    }
}

export default { print, addSpacing };
