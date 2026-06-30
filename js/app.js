async function loadMovies() {
    try {
        const response = await fetch("data/movies.json");

        if (!response.ok) {
            throw new Error("movies.json を読み込めません");
        }

        const movies = await response.json();

        updateDashboard(movies);
        showMovieList(movies);

    } catch (error) {
        console.error(error);
    }
}

function updateDashboard(movies) {

    // 総鑑賞本数
    document.getElementById("totalMovies").textContent = movies.length;

    // 平均評価
    const totalRating = movies.reduce((sum, movie) => sum + movie.rating, 0);

    const average = totalRating / movies.length;

    document.getElementById("averageRating").textContent =
        average.toFixed(1);

    // ベスト作品
    const bestMovie = movies.reduce((best, movie) =>
        movie.rating > best.rating ? movie : best
    );

    document.getElementById("bestMovie").textContent =
        bestMovie.title;

    // 今年の鑑賞本数
    const currentYear = new Date().getFullYear();

    const yearCount = movies.filter(movie =>
        new Date(movie.watched_date).getFullYear() === currentYear
    ).length;

    document.getElementById("yearMovies").textContent =
        yearCount;
}

function showMovieList(movies){

    const tbody=document.getElementById("movieTableBody");

    tbody.innerHTML="";

    movies.forEach(movie=>{

        tbody.innerHTML+=`
            <tr>
                <td>${movie.rating}</td>
                <td>${movie.title}</td>
                <td>${movie.production_year}</td>
                <td>${movie.watched_date}</td>
            </tr>
        `;

    });

}

loadMovies();