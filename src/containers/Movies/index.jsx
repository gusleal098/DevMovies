import { useState, useEffect } from "react"

import { useNavigate } from "react-router-dom"

import {
    Background,
    Container,
    ContainerButtons,
    Info,
    Poster
} from "./styles"

import Button from "../../components/Button"
import Slider from "../../components/Slider"
import { getImages } from "../../utils/getImages"
import Modal from '../../components/Modal'
import { 
    getMovieNowPlaying, 
    getTopMovies,
    getMoviesGenres,
    getAllMovies

} from "../../services/getData"
import SliderGenresMovies from "../../components/SliderGenresMovies"

function Movies() {
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [moviesGenres, setMoviesGenres] = useState()
    const [allMovies, setAllMovies] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getMovieNowPlaying(),
                getMoviesGenres(),
                getAllMovies()
            ])
            .then(([movie, moviesGenres, allMovies]) => {
                setMovie(movie),
                setMoviesGenres(moviesGenres)
                setAllMovies(allMovies)
            })
            .catch(error => console.error(error))
        }

        getAllData()

    }, [])

    return (
        <>
            {movie && (
                <Background $img={getImages(movie.backdrop_path)}>
                    {showModal && <Modal movieId={movie.id} setShowModal={setShowModal} />}
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>
                                    Assista Agora
                                </Button>
                                <Button onClick={() => setShowModal(true)}>
                                    Assista o Trailer
                                </Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img src={getImages(movie.poster_path)} alt="capa-do-filme" />
                        </Poster>
                    </Container>
                </Background>
            )}
            {allMovies && moviesGenres && <SliderGenresMovies movies={allMovies} genres={moviesGenres} />}
        </>
    )
}

export default Movies