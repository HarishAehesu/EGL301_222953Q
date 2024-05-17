// Basically creating a fake database
//the movies we have in the streamsite
let movies = [
    { name: "Kung Fu Panda", genre: 'Comedy', likes: 16 },
    { name: "Demon Slayer", genre: 'Anime', likes: 15 },
    { name: "Mr Bean Holiday", genre: 'Comedy', likes: 10 },
    { name: "Godzilla", genre: 'Action', likes: 10 }
];

// User account details(current user)
let accountdetails = {
    Name: 'John',
    Email: 'John@gmail.com',
    Username: 'Johnnydoe'
};

// Array of movies in the user's list
let mylist = [
  //currently keeping it empty, can be added using functions
];

// Exporting the module with various functions
module.exports = {

    // Search movie by name or genre
    search(query) {
        // Filter the movies for any matches by name or genre
        let results = movies.filter(movie => 
            movie.name.toLowerCase().includes(query.toLowerCase()) ||
            movie.genre.toLowerCase().includes(query.toLowerCase())
        );
        // Return results if found, otherwise a message indicating no results
        if (results.length > 0) {
            return `Search results for '${query}':\n` + results.map(movie => `- ${movie.name} (${movie.genre}, ${movie.likes} likes)`).join('\n');
        } else {
            return `No results found for '${query}'`;
        }
    },

    // View movies in my list
    viewmylist() {
        // Check if the list is empty and return approp message
        if (mylist.length === 0) {
            return "your list is empty, try adding movies!";
        } else {
            return mylist;
        }
    },

    // Like a movie by name function
    likemovie(movieName) {
        // Find the movie by name
        let movie = movies.find(movie => movie.name === movieName);
        if (movie) {
            // Increment the like count
            movie.likes += 1;
            return `${movieName} now has ${movie.likes} likes.`;
        } else {
            // Return a message if the movie is not found
            return `Movie ${movieName} not found.`;
        }
    },

    // View user account details function
    viewaccdetails() {
        return accountdetails;
    },

    // Edit username on account
    editusername(newUsername) {
        // Update the username
        accountdetails.Username = newUsername;
        return `Username changed to ${newUsername}`;
    },

    // Edit name on account
    editname(newName) {
        // Update the name
        accountdetails.Name = newName;
        return `Name changed to ${newName}`;
    },

    // Show most popular movie function
    showmostpopularmovie() {
        // Sort movies by the number of likes in order(top movie first)
        let sortedMovies = [...movies].sort((a, b) => b.likes - a.likes);  // [...movies] uses the spread operator to create a new array with the same elements (Googled it)
        // Get the top 3 movies
        let top3Movies = sortedMovies.slice(0, 3);
        // Return the top 3 movies as a formatted string
        return top3Movies.map((movie, index) => `${index + 1}. ${movie.name} (${movie.likes} likes)`);
    },

    // Add movie function
    addmovie(newMovie) {
        // Add the new movie to the movies array
        movies.push(newMovie);
        return `${newMovie.name} added to the movies list.`;
    },

   
 // Add existing movie to my list by name
 addexistingmovietolist(movieName) {
    // Find the movie by name
    let movie = movies.find(movie => movie.name === movieName);
    if (movie) {
        // Check if the movie is already in the user's list
        let isAlreadyInList = mylist.some(item => item.name === movieName);
        if (!isAlreadyInList) {
            // Add the movie to the user's list
            mylist.push({ name: movie.name, genre: movie.genre, likes: movie.likes });
            return `${movieName} has been added to your list.`;
        } else {
            // Return a message if the movie is already in the list
            return `${movieName} is already in your list.`;
        }
    } else {
        // Return a message if the movie is not found
        return `Movie ${movieName} not found.`;
    }
},


    // View movies in my list
    viewmovies() {
        
            return movies;
      
    }


};
