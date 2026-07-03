/**
 * movieDetail.js
 *
 * 映画詳細を表示する
 */

/**
 * DOM 要素
 */

const movieDetailElement =
    document.getElementById(
        "movieDetail"
    );

/**
 * 映画詳細を表示する
 *
 * @param {Object} movie 映画データ
 */
function showMovieDetail(
    movie
) {

    movieDetailElement.innerHTML = `
        <h2>映画詳細</h2>

        <p><strong>タイトル</strong><br>
        ${movie.title}</p>

        <p><strong>評価</strong><br>
        ${movie.rating}</p>

        <p><strong>公開年</strong><br>
        ${movie.production_year}</p>

        <p><strong>鑑賞日</strong><br>
        ${movie.watched_date}</p>

        <p><strong>監督</strong><br>
        ${movie.director.join("<br>")}</p>

        <p><strong>ジャンル</strong><br>
        ${movie.genres.join(" / ")}</p>

        <p><strong>レビュー</strong><br>
        ${movie.review || "レビューはありません"}</p>
    `;

}

/**
 * IDから映画詳細を表示する
 *
 * @param {string} movieId 映画ID
 */
function showMovieDetailById(
    movieId
) {

    const movie =
        movies.find(movie =>
            movie.id === movieId
        );

    if (!movie) {

        return;

    }

    showMovieDetail(movie);

}