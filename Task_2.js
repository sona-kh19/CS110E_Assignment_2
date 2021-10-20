
const a = 3;
const b = 5;
const c = 2;
const d = b**2 - 4*a*c;

if (a === 0){
    console.log("x = " + ((-c)/b));
} else if (d < 0) {
    console.log("Unsolvable");
} else if (d === 0) {
    console.log("x = " + ((-b)/(2*a)));
} else {
    console.log("x1 = " + ((-b + Math.sqrt(d))/(2*a)) + " x2 = " + ((-b - Math.sqrt(d))/(2*a)));
}