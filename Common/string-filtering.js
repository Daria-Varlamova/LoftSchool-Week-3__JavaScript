let result = "";
const string = "Привет! Как дела?";
const vowels = ["а", " о", "э", "е", "и", "ы", " у", "ё", "ю", "я"];

for (let i = 0; i < string.length; i++) {
    let idx = vowels.indexOf(string[i]);
    if (idx != -1) {
        result = result + string[i];
    }
}

console.log(result);