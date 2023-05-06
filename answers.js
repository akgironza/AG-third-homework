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
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Pottter', 'Imagination of Life', 'Snatch', 'Fast and the Furious'];

console.log(favMovies.indexOf('Titanic'));

// 1. sort method actually keeps the sorted version of the array which is not what I was expecting, it seems permanently altered
console.log(favMovies.sort());
console.log(favMovies);

// 2. pop
console.log(favMovies.pop());

// 3. push
favMovies.push("Guardians of the Galaxy");
console.log(favMovies);

// 4. reverse
console.log(favMovies.reverse());

// 5. shift
favMovies.shift();
console.log(favMovies);

// 6. unshift returns the new length of the array
favMovies.unshift("Batman and Robin");
console.log(favMovies);

// 7. splice did permanently alter our array
console.log(favMovies.indexOf('Django Unchained'));
favMovies.splice(15, 1, "Avatar");
console.log(favMovies);

// 8. slice does not permanently change the original array
secondFavMovies = favMovies.slice(9);
console.log(favMovies);
console.log(secondFavMovies);

// slice does not permanently alter the original array, it only returns the new portion of the array that was sliced from the original









////////////////////////////////
// Where is Waldo
////////////////////////////////
////////////////////////////////
// Excited Kitten
////////////////////////////////
////////////////////////////////
// Find the Median
////////////////////////////////