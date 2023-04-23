import axios from "axios";

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer ' + process.env.API_KEY_TMDB,
        'Accept-Language': 'pt-BR'
    }
})

export default apiFilmes
