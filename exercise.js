//Exercise 1
function logType(value) {
    if (value === null) {
        console.log("null!");
    } else if (value === undefined) {
        console.log("undefined!");
    } else if (Number.isNaN(value)) {
        console.log("not a number!");
    } else if (value === "number") {
        console.log("number!");
    } else if (typeof value === "string") {
        console.log("string!");
    } else if (typeof value === "boolean") {
        console.log("boolean!");
    } else if (typeof value === "function") {
        console.log("function!");
    } else if (typeof value === "bigint") {
        console.log("bigint!");
    } else if (Array.isArray(value)) {
        console.log("array!");
    } else if (typeof value === "object") {
        console.log("object!");
    } else {
        console.log("I have no idea!");
    }
}
logType(() => {});

//Exercise 2

var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};
var b = {};

for (var key in a) {
    var countryName = a[key];
    b[countryName] = key;
}

console.log(b);

// Exercise 3
for (var i = 10; i > 0; i--) {
    console.log(i);
}

//Exercise 4
function sum(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

console.log(sum([5, 10]));
console.log(sum([5, 10, 15]));
console.log(sum([5, 10, 15, 100, 200]));

//Exercise 5

function waitThenRun(func) {
    setTimeout(func, 1500);
}

waitThenRun(function () {
    console.log("Hello!");
    waitThenRun(function () {
        console.log("Goodbye!");
    });
});

//Exercise 6
function multiply(num) {
    const MAX_VALUE = 10000000;

    if (num <= 0 || isNaN(num)) {
        return "Error";
    }

    if (num >= MAX_VALUE) {
        return num;
    }

    while (num < MAX_VALUE) {
        num *= 10;
    }
    return num;
}
console.log(multiply(2));

//Exercise 7
function getTotaler() {
    let sum = 0;

    return function (num) {
        sum += num;
        return sum;
    };
}
var totaler = getTotaler();
console.log(totaler(1));
console.log(totaler(2));
console.log(totaler(5));
