//Find the length of the line from (x1, y1) to (x2, y2) in the first quarter of x-y axis

const x1 = 1;
const y1 = 2;
const x2 = 3;
const y2 = 4;

const length = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);

if (x1 >= 0 && y1 >= 0 && x2 >= 0 && y2 >= 0) {
    console.log(length);
} else {
    console.log("The given coordinates are not in the first quarter of x-y axis.");
} 
