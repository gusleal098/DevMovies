import { useEffect, useState } from "react"
import { Background, Container } from "./styles"
import { getMovieVideos } from "../../services/getData"

function Modal({ movieId, setShowModal }) {
    const [movie, setMovie] = useState()

    useEffect(() => {
        async function getMovies() {
            setMovie (await getMovieVideos(movieId))
        }

        getMovies()
    }, [])

    return (
        <Background>
            <button onClick={() => setShowModal(false)}>X</button>
            {movie && (
                <Container>
                    <iframe
                        src={`https://www.youtube.com/embed/${movie[0].key}`}
                        title="Youtube Vídeo Player"
                        height='500px'
                        width='100%'
                    ></iframe>
                </Container>
            )}
        </Background>
    )
}

export default Modal