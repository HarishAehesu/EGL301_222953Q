# Assignment 1 : MovieStreamingService

## Overview
This Node.js module provides functionalities for managing and interacting with a movie streaming service. You can search for movies by name or genre, view a list of your favorite movies, like movies, view and edit user account details,  add new movies to the list and view all movies. This README will guide you through setting up and using the module.


## Setting up
1. If you don't already have Node.js, you can install it from https://nodejs.org/
2. Save AehesuHarish_MovieStream.js to your project directory 
3. Create a new file named app.js
4. In app.js, import the module using <code>const movieModule = require('./AehesuHarish_Moviestream.js'); </code>
5. To run the module, run <code>node app.js</code> in the terminal

## Usage
### This is the code used to test out the MovieStreamingService

```

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

```


## Functions

###  1.search(query)
Searches movies by name or genre.

###  2. viewmylist()
Displays movies in the user's list.

###  3.likemovie(movieName)
Likes a movie by its name.


###  4.viewaccdetails()
Shows user account details.

###  5.editusername(newUsername)
Updates the user's username.

###  6.editname(newName)
Updates the user's name.

###  7.showmostpopularmovie()
Displays the top 3 most liked movies.


###  8.addmovie(newMovie)
Adds a new movie to the movies list.

###  9.addexistingmovietolist(movieName)
Adds an existing movie to the user's list by name.

###  10. viewmovies()
Displays all movies the site has.
