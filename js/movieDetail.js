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
        <div class="detailRating">
            ⭐ ${movie.rating}
        </div>

        <h2 class="detailTitle">
            ${movie.title}
        </h2>

        <div class="detailItem">
            <span class="detailLabel">公開年</span>
            <span>${movie.production_year}</span>
        </div>

        <div class="detailItem">
            <span class="detailLabel">鑑賞日</span>
            <span>${movie.watched_date}</span>
        </div>

        <div class="detailItem">
            <span class="detailLabel">監督</span>
            <span>${movie.director.join(" / ")}</span>
        </div>

        <div class="detailItem">
            <span class="detailLabel">ジャンル</span>
            <span>${movie.genres.join(" / ")}</span>
        </div>

        <div class="detailReview">
            <div class="detailLabel">
                レビュー
            </div>

            <p>
                ${movie.review || "レビューはありません"}
            </p>
        </div>
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