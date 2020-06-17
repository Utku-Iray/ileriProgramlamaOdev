var a;
var c;

for (var b = 1; b < 1000; b += 1) {
    a = (500000 - 1000 * b) / (1000 - b);

    if (Math.floor(a) === a) {
        c = 1000 - a - b;

        break;
    }
}

console.log(a, b, c);