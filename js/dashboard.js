function updateDashboard(movies) {

    document.getElementById("totalMovies").textContent = movies.length;

    const totalRating = movies.reduce(
        (sum, movie) => sum + movie.rating,
        0
    );

    document.getElementById("averageRating").textContent =
        (totalRating / movies.length).toFixed(1);

    const bestMovie = movies.reduce((best, movie) =>
        movie.rating > best.rating ? movie : best
    );

    document.getElementById("bestMovie").textContent =
        bestMovie.title;

    const currentYear = new Date().getFullYear();

    const yearCount = movies.filter(movie =>
        new Date(movie.watched_date).getFullYear() === currentYear
    ).length;

    document.getElementById("yearMovies").textContent =
        yearCount;
}