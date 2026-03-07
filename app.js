console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    
    for (let counter = 0; counter <= count; counter++) {
        if (counter % 2 != 0) {
            console.log(counter);
        } 
        else {

        }
    }

}

//printOdds function test
printOdds(11);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {

    

    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if (age >= 16) {
        console.log(aboveSixteen);
    }
    else {
        console.log(belowSixteen);
    }


}

//checkAge function test
    checkAge("Abraham Lincoln", 16);

// Exercise 3 Section

function axisAndQuadrant(x, y) {

if (x == 0 && y == 0) {
    console.log("This point lies in both of the axes");
}
else if (y == 0) {
    console.log("This point lies on the X-axis");
}
else if (x == 0) {
    console.log("This point lies on the Y-axis");
}
else {
    console.log("This point doesn't lie on either axis");
}

if (x > 0 && y > 0) {
    console.log("This point is in Quadrant 1");
}
else if (x < 0 && y > 0) {
    console.log("This point is in Quadrant 2");
}
else if (x < 0 && y < 0) {
    console.log("This point is in Quadrant 3");
}
else if (x > 0 && y < 0) {
    console.log("This point is in Quadrant 4");
}
else {
    console.log("This point is not in any Quadrant");
}


}

// Test for axisAndQuadrant
axisAndQuadrant(10, -10);

// Exercise 4 Section

function triangles(a, b, c) {

let sumAB = a + b;

if (sumAB <= c) {
    console.log("These sides do not form a valid triangle");
}
else if (a == b && b == c) {
    console.log("These sides form an equilateral triangle");
}
else if (a != b && b != c && c != a) {
    console.log("These sides form a scalene triangle");
}
else {
    console.log("These sides form an isosceles triangle");
}

}

// Test for triangles
triangles(6, 4, 6);
