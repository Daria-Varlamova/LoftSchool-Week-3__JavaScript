const workers = [{
        name: "John",
        salary: 500
    },
    {
        name: "Mike",
        salary: 1300
    },
    {
        name: "Linda",
        salary: 1500
    }
];


function bar(element) {
    return element.salary > 1000;
}

function getWorthyWorkers(arr) {
    debugger
    const cesh = arr.filter(function (element) {
    return element.salary > 1000;
});
    const newArray = cesh.map(function (ceshItem) {
        return ceshItem.name;
    })
    return newArray;
}

console.log(getWorthyWorkers(workers));