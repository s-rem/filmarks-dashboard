/**
 * dashboard.js
 *
 * ダッシュボードを更新する
 */
 
/**
 * ダッシュボードで利用するDOM 要素
 */

const totalMoviesElement =
    document.getElementById("totalMovies");

const averageRatingElement =
    document.getElementById("averageRating");

const bestMovieElement =
    document.getElementById("bestMovie");

const yearMoviesElement =
    document.getElementById("yearMovies");

/**
 * ダッシュボードの統計情報を更新する
 *
 * @param {Array} movies 映画データ
 */
function updateDashboard(movies) {

    totalMoviesElement.textContent = movies.length;

    const totalRating = movies.reduce(
        (sum, movie) => sum + movie.rating,
        0
    );

    averageRatingElement.textContent =
        (totalRating / movies.length).toFixed(1);

    const bestMovie = movies.reduce((best, movie) =>
        movie.rating > best.rating ? movie : best
    );

    bestMovieElement.textContent =
        bestMovie.title;

    const currentYear = new Date().getFullYear();

    const yearCount = movies.filter(movie =>
        new Date(movie.watched_date).getFullYear() === currentYear
    ).length;

    yearMoviesElement.textContent =
        yearCount;
}