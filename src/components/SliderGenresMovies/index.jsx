import { Container } from "./styles"
import { Swiper, SwiperSlide } from 'swiper/react'
import CardGenresMovies from "../CardGenresMovies"

function SliderGenresMovies({ movies, genres }) {
    return (
        <>
            {genres && (
                <Container>
                    {genres.map((genre, genreIndex) => {

                        const filteredMovies = movies.filter(
                            movie => movie.genre_ids.includes(genre.id)
                        )

                        if (filteredMovies.length === 0) return null

                        return (

                            <div key={genreIndex}>
                                <h2>{genre.name}</h2>

                                <Swiper
                                    grabCursor
                                    spaceBetween={10}
                                    slidesPerView={'auto'}
                                    className="swiper"
                                >
                                    {movies
                                        .filter(movie => movie.genre_ids.includes(genre.id))
                                        .map((filteredMovie, index) => (
                                            <SwiperSlide key={index}>
                                                <CardGenresMovies item={[filteredMovie]} genresId={genre.id} />
                                            </SwiperSlide>
                                        ))}
                                </Swiper>
                            </div>
                        )
                    })}
                </Container>
            )}
        </>
    )
}

export default SliderGenresMovies