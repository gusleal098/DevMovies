import { getImages } from "../../utils/getImages"
import { Container } from "./styles"

function CardGenresMovies({ item, genresId }) {
    return (
        <>
            {item && genresId && Array.isArray(item) && (
                item
                    .filter(movie => Array.isArray(movie.genre_ids) && movie.genre_ids.includes(genresId))
                    .map((movie) => (
                        <Container key={movie.id}>
                            <img src={getImages(movie.poster_path || movie.profile_path || '')} alt={movie.title || movie.name || ''} />
                            <h3>{movie.title || movie.name || ''}</h3>
                        </Container>
                ))
            )}
        </>
    )
}

export default CardGenresMovies