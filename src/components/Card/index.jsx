import { getImages } from "../../utils/getImages"
import { Container } from "./styles"

function Card({ item }) {
    return (
        <Container>
            {item.poster_path || item.profile_path ? (
                <>
                    <img src={getImages(item.poster_path || item.profile_path || '')} />
                    <h3>{item.title || item.name || ''}</h3>
                </>
            ): null}

        </Container>
    )
}

export default Card