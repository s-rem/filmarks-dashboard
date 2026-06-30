async function loadMovies() {
    const response = await fetch("data/movies.json");

    if (!response.ok) {
        throw new Error("movies.json を読み込めません");
    }

    return await response.json();
}