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
import { 
    getAiringToday,
    getTopSeries,
    getPopularSeries

} from "../../services/getData"

function Series() {
    const [serie, setSerie] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getAiringToday(),
                getTopSeries(),
                getPopularSeries()

            ])
            .then(([serie, topSeries, popularSeries]) => {
                setSerie(serie),
                setTopSeries(topSeries)
                setPopularSeries(popularSeries)
            })
            .catch(error => console.error(error))
        }

        getAllData()

    }, [])

    return (
        <>
            {serie && (
                <Background $img={getImages(serie.backdrop_path)}>
                    <Container>
                        <Info>
                            <h1>{serie.name}</h1>
                            <p>{serie.overview}</p>
                        </Info>
                        <Poster>
                            <img src={getImages(serie.poster_path)} alt="capa-do-filme" />
                        </Poster>
                    </Container>
                </Background>
            )}
            {topSeries && <Slider info={topSeries} title={'Top Séries'}/>}
            {popularSeries && <Slider info={popularSeries} title={'Séries Populares'}/>}
        </>
    )
}

export default Series