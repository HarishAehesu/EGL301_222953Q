# Assignment 1 : MovieStreamingService

<!-- You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax -->

## Overview
This Node.js module provides functionalities for managing and interacting with a movie streaming service. You can search for movies by name or genre, view a list of your favorite movies, like movies, view and edit user account details, and add new movies to the list. This README will guide you through setting up and using the module.


## Setting up

## Usage
### This is the code to test out
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



## Functions

### 1. Search for Movies:
Function: search(query)
Description: Searches for movies by name or genre.
Parameters: query (string) - The search term.
Example: movieModule.search('Comedy')

### 2. View My List:
Function: viewmylist()
Description: Returns the list of movies in the user's list.
Example: movieModule.viewmylist()

### 3. Like a Movie:
Function: likemovie(movieName)
Description: Increments the like count for the specified movie.
Parameters: movieName (string) - The name of the movie to like.
Example: movieModule.likemovie('Kung Fu Panda')

### 4. View Account Details:
Function: viewaccdetails()
Description: Returns the user's account details.
Example: movieModule.viewaccdetails()


### 5. Edit username
Function: editusername(newUsername)
Description: Updates the username in the user's account details.
Parameters: newUsername (string) - The new username.
Example: movieModule.editusername('NewUsername')

### 6. Edit Name:
Function: editname(newName)
Description: Updates the name in the user's account details.
Parameters: newName (string) - The new name.
Example: movieModule.editname('NewName')

### 7. Show Most Popular Movies:
Function: showmostpopularmovie()
Description: Returns the top 3 movies sorted by the number of likes.
Example: movieModule.showmostpopularmovie()

### 8. Add Movie:
Function: addmovie(newMovie)
Description: Adds a new movie to the list of movies.
Parameters: newMovie (object) - The new movie object with name, genre, and likes properties.
Example: movieModule.addmovie({ name: "New Movie", genre: 'Sci-Fi', likes: 0 })
