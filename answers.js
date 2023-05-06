/*
4 - HTML Intro (tags, content, attributes, semantic HTML)
4 - HTML Elements (headers, navigation, lists, sections, etc.) and Media (images, audio, videos)
3 - CSS Intro (including css files in HTML, elements)
3 - CSS Basics (colors, background, font properties)
*/

////////////////////////////////
// Easy Going
////////////////////////////////
for(i = 1; i < 21; i++){
    console.log(i);
};


////////////////////////////////
// Get Even
////////////////////////////////
for(i = 0; i < 201; i++){
    if (i % 2 === 0){
        console.log(i);
    };
};


////////////////////////////////
// Fizz Buzz
////////////////////////////////
for(i = 1; i < 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else if (i % 3 === 0){
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    };
};


////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgeee", "porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

// plantee is a year older
plantee[2] = 50001;
console.log(plantee);

// wolfy's hometown
wolfy[3] = "Gotham City";
console.log(wolfy);

// d'art second hometown
dart.push("Hawkins");
console.log(dart);

//wolfy is gameboy
wolfy.splice(0, 1, "Gameboy");
console.log(wolfy);


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (let turtle of ninjaTurtles){
    console.log(turtle.toUpperCase());
};


////////////////////////////////
// Methods, Revisited
////////////////////////////////
////////////////////////////////
// Where is Waldo
////////////////////////////////
////////////////////////////////
// Excited Kitten
////////////////////////////////
////////////////////////////////
// Find the Median
////////////////////////////////