//compare the areas of the triangle and the rectangle

const height_tri = 35;
const base = 18;
const height_rec = 67;
const width = 14;
 
const area_tri = (height_tri * base)/2
const area_rec = height_rec * width

if (area_tri === area_rec) {
    console.log("The areas are equal." )
} else if (area_tri > area_rec) {
    console.log("The triangle has a bigger area.");
} else {
    console.log("The rectangle has a bigger area.");
}
