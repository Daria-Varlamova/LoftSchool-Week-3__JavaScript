const path = "/users/download/index.html"

const isHtml = function (path) {
    const test = ".html";
    const testslice = path.slice(-5);

    if (testslice === test) {
        return true
    } else {
        return false
    }
}

console.log(isHtml(path));