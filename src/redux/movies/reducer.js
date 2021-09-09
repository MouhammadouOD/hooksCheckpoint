import { ADD_MOVIE } from "./type";

const initialState = {
    movies : [{
        title: "Casa De Papel",
        description: "film d'action",
        posterUrl:
          "https://resize-parismatch.lanmedia.fr/img/var/news/storage/images/paris-match/culture/medias/la-casa-de-papel-les-premieres-images-de-la-saison-5-1741189/28687766-1-fre-FR/La-Casa-de-Papel-les-premieres-images-de-la-saison-5.jpg",
        rating: "4",
      },
      {
        title: "The Revenant",
        description: "film horreur",
        posterUrl:
          "https://resize-elle.ladmedia.fr/rcrop/796,1024/img/var/plain_site/storage/images/loisirs/cinema/news/j-y-vais-j-y-vais-pas/the-revenant-la-vengeance-animale-de-leonardo-dicaprio-3047311/61177183-1-fre-FR/The-Revenant-la-vengeance-animale-de-Leonardo-DiCaprio.jpg",
        rating: "5",
      },
      {
        title: "Lupin",
        description : "film fantastic",
        posterUrl:
          "https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/loisirs/series/netflix-voici-les-nouveautes-films-et-series-qui-debarquent-en-janvier-2021-3896450/94229980-1-fre-FR/Netflix-voici-les-nouveautes-films-et-series-qui-debarquent-en-janvier-2021.jpg",
        rating: "6",
      }]


};

const moviesReducer = (state = initialState , action) => {
    switch (action.type) {
        case ADD_MOVIE:
            
            return{
                ...state ,
                movies : [...state.movies , action.payload]
            }
    
        default:
            return state;
    }

}

export default moviesReducer;