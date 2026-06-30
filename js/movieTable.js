/**
 * movieTable.js
 *
 * 映画一覧を表示する
 */

/**
 * 映画一覧テーブルを更新する
 *
 * @param {Array} movies 映画データ
 */
function showMovieList(movies) {

    const movieTableBodyElement =
        document.getElementById("movieTableBody");

    const rows = movies.map(movie => `
        <tr>
            <td>${movie.rating}</td>
            <td>${movie.title}</td>
            <td>${movie.production_year}</td>
            <td>${movie.watched_date}</td>
        </tr>
    `).join("");

    movieTableBodyElement.innerHTML = rows;

}