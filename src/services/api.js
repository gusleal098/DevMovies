import axios from "axios"

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '60504758a277fa85dacbef54d93cb45e',
        language: 'pt-BR',
        page: 1
    }
})

export default api