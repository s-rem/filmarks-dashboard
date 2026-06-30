/**
 * movieService.js
 *
 * movies.jsonを読み込む
 *
 * @returns {Promise<Array>} 映画データ
 */

async function loadMovies() {
    const response = await fetch("data/movies.json");

    if (!response.ok) {
        throw new Error(
            `movies.json を読み込めませんでした (${response.status})`
        );
    }

    return await response.json();
}