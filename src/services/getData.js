import api from "./api"

export async function getMovies() {
    const {
        data: { results }
    } = await api.get('/movie/popular')

    return results[0]
}

export async function getTopMovies() {
    const {
        data: { results }
    } = await api.get('/movie/top_rated')

    return results
}

export async function getTopSeries() {
    const {
        data: { results }
    } = await api.get('/tv/top_rated')

    return results
}

export async function getPopularSeries() {
    const {
        data: { results }
    } = await api.get('/tv/popular')

    return results
}

export async function getTopPeople() {
    const {
        data: { results }
    } = await api.get('/person/popular')

    return results
}

export async function getMovieVideos(movieId) {
    const {
        data: { results }
    } = await api.get(`/movie/${movieId}/videos`)

    return results
}

export async function getMovieCredits(movieId) {
    const { 
        data: { cast } 
    } = await api.get(`/movie/${movieId}/credits`)

    return cast
}

export async function getMovieSimilar(movieId) {
    const {
        data: { results }
    } = await api.get(`/movie/${movieId}/similar`)

    console.log(results)
    return results
}

export async function getMovieById(movieId) {
    const { data } = await api.get(`/movie/${movieId}`)

    return data
}

export async function getMovieNowPlaying() { // PÁGINA SÓ DE FILMES
    const { 
        data: {results}
    } = await api.get(`/movie/now_playing`)

    return results[1]
}

export async function getMoviesGenres() { // PÁGINA SÓ DE FILMES
    const {
        data: {genres}
    } = await api.get(`/genre/movie/list`)

    return genres
}

export async function getAllMovies() { // PÁGINA SÓ DE FILMES
    const {
        data: { results }
    } = await api.get('/movie/now_playing')

    return results
}

export async function getAiringToday() { // PÁGINA SÓ DE SÉRIES
    const {
        data: { results }
    } = await api.get('/tv/airing_today')

    return results[0]
}