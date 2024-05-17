
const movieModule = require('./AehesuHarish_Moviestream.js'); 


// Test search function
console.log("===============");
console.log("Function 1 - Search movie by genre/name");
console.log("===============");
console.log(movieModule.search('Comedy')); //should display the comedy movies

console.log(movieModule.search('Demon')); //should show demon slayer

console.log(movieModule.search('Sci-Fi')); //should see no resulys found

// Test viewmylist function
console.log("===============");
console.log("Function 2 - view movies in list");
console.log("===============");
console.log("\nView my list:");
console.log(movieModule.viewmylist());

// Test likemovie function
console.log("===============");
console.log("Function 3 - view like a movie by name");
console.log("===============");
console.log("\nLike 'Kung Fu Panda':");
console.log(movieModule.likemovie('Kung Fu Panda'));
console.log("Like 'Godzilla':");
console.log(movieModule.likemovie('Godzilla'));
console.log("Like 'Unknown Movie':");
console.log(movieModule.likemovie('Unknown Movie'));

// Test viewaccdetails function
console.log("===============");
console.log("Function 4 - account details");
console.log("===============");
console.log("\nView account details:");
console.log(movieModule.viewaccdetails());

// Test editusername function
console.log("===============");
console.log("Function 5 - change username");
console.log("===============");
console.log("\nEdit username to 'NewUsername':");
console.log(movieModule.editusername('NewUsername'));
console.log("View account details:");
console.log(movieModule.viewaccdetails());

// Test editname function
console.log("===============");
console.log("Function 6- change name");
console.log("===============");
console.log(movieModule.editname('NewName'));
console.log("View account details:");
console.log(movieModule.viewaccdetails());

// Test showmostpopularmovie function
console.log("===============");
console.log("Function 7 - view most popular movie");
console.log("===============");
console.log("\nShow most popular movies:");
console.log(movieModule.showmostpopularmovie());

// Test addmovie function
console.log("===============");
console.log("Function 8 - add a movie");
console.log("===============");
const newMovie = { name: "New Movie", genre: 'Sci-Fi', likes: 0 };
console.log("\nAdd new movie:");
console.log(movieModule.addmovie(newMovie));
console.log("Search for 'New Movie':");
console.log(movieModule.search('New Movie'));