import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_MOVIE_URL_API;

export const MovieService = {
    async getMovie({idMovie, ordinal, idEpisode}: { idMovie: string; ordinal: string; idEpisode: string }) {
        const {data} = await axios.get(`ts/${idMovie}/${ordinal}/720/${idEpisode}?countryIso=RU&isAuthorized=0&isWithVideoAds=0&isWithVideoAdsAlways=0`);
        return data;
    },
}
