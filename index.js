
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
console.log("View my list:");
console.log(movieModule.viewmylist());//should be emty

// Test likemovie function
console.log("===============");
console.log("Function 3 - like a movie by name");
console.log("===============");
console.log("Like 'Kung Fu Panda':");
console.log(movieModule.likemovie('Kung Fu Panda'));
console.log("Like 'Godzilla':");
console.log(movieModule.likemovie('Godzilla'));
console.log("Like 'Unknown Movie':");
console.log(movieModule.likemovie('Unknown Movie'));

// Test viewaccdetails function
console.log("===============");
console.log("Function 4 - account details");
console.log("===============");
console.log("View current account details:");
console.log(movieModule.viewaccdetails());

// Test editusername function
console.log("===============");
console.log("Function 5 - change username");
console.log("===============");
console.log(movieModule.editusername('Tommy123'));
console.log("View account details:");
console.log(movieModule.viewaccdetails());

// Test editname function
console.log("===============");
console.log("Function 6- change name");
console.log("===============");
console.log(movieModule.editname('Thomas'));
console.log("View account details:");
console.log(movieModule.viewaccdetails());

// Test showmostpopularmovie function
console.log("===============");
console.log("Function 7 - view most popular movie");
console.log("===============");
console.log("Show most popular movies:");
console.log(movieModule.showmostpopularmovie());

// Test addmovie function
console.log("===============");
console.log("Function 8 - add a movie");
console.log("===============");
const newMovie = { name: "Awake", genre: 'Sci-Fi', likes: 0 };
console.log("Add new movie:");
console.log(movieModule.addmovie(newMovie));
//search for it
console.log(movieModule.search('Awake'));

// Test addexistingmovietolist function
// Test addmovie function
console.log("===============");
console.log("Function 9 - add a movie to list");
console.log("===============");
console.log("Add existing movie 'Godzilla' to my list:");//shall work as we are addimg a movie that exists and also a movie not in list
console.log(movieModule.addexistingmovietolist('Godzilla'));
console.log("===============");

console.log("Add existing movie 'Kung Fu Panda' to list:");//shall work
console.log(movieModule.addexistingmovietolist('Kung Fu Panda'));
console.log("===============");

console.log("Add existing movie 'Godzilla' that alr exixsts in list:");//displays that the movie is alr added
console.log(movieModule.addexistingmovietolist('Godzilla'));
console.log("===============");

console.log("Try to add non-existing movie 'Avatar' to my list:");
console.log(movieModule.addexistingmovietolist('Avatar')); //shall say movie not found as its not a movie that exists
console.log("===============");
console.log("View list to see last:"); //displays the list godzilla should be adddd also
console.log(movieModule.viewmylist());

// Test view all movies function
console.log("===============");
console.log("Function 10 - view all movies");
console.log("===============");
console.log("View all movies:");
console.log(movieModule.viewmovies());
