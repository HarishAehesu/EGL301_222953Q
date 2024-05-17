let movies = [
    { name: "Kung Fu Panda", genre: 'Comedy', likes: 15 },
    { name: "Demon Slayer", genre: 'Anime', likes: 15 },
    { name: "Mr Bean Holiday", genre: 'Comedy', likes: 10 },
    { name: "Godzilla", genre: 'Action', likes: 10 }
];

let accountdetails = {
    Name: 'John',
    Email: 'John@gmail.com',
    Username: 'Johnnydoe'
};

let mylist = [
    { name: "Kung Fu Panda", genre: 'Comedy', price: 15 }
];

module.exports = {

    // Search movie by name or genre
    search(query) {
        let results = movies.filter(movie => 
            movie.name.toLowerCase().includes(query.toLowerCase()) ||
            movie.genre.toLowerCase().includes(query.toLowerCase())
        );
        if (results.length > 0) {
            return `Search results for '${query}':\n` + results.map(movie => `- ${movie.name} (${movie.genre}, ${movie.likes} likes)`).join('\n');
        } else {
            return `No results found for '${query}'`;
        }
    },

    // View movies in my list
    viewmylist() {
        return mylist;
    },



    // Like a movie by name function
    likemovie(movieName) {
        let movie = movies.find(movie => movie.name === movieName);
        if (movie) {
            movie.likes += 1;
            return `${movieName} now has ${movie.likes} likes.`;
        } else {
            return `Movie ${movieName} not found.`;
        }
    },

    // View user account details function
    viewaccdetails() {
        return accountdetails;
    },

    // Edit username on account
    editusername(newUsername) {
        accountdetails.Username = newUsername;
        return `Username changed to ${newUsername}`;
    },

    // Edit name on account
    editname(newName) {
        accountdetails.Name = newName;
        return `Name changed to ${newName}`;
    },

    // Show most popular movie function
    showmostpopularmovie() {
        let sortedMovies = [...movies].sort((a, b) => b.likes - a.likes);
        let top3Movies = sortedMovies.slice(0, 3);
        return top3Movies.map((movie, index) => `${index + 1}. ${movie.name} (${movie.likes} likes)`);
    },

    // Add movie function
    addmovie(newMovie) {
        
        movies.push(newMovie);
        return `${newMovie.name} added to the movies list.`;
    }


};
