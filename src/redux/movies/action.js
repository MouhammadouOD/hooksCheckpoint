import { ADD_MOVIE } from "./type"

function addmovie({title: vtitle,
    description: vdescription ,
    posterUrl:vposterUrl,
    rating: vrating}){
    return{
        type : ADD_MOVIE , 
        payload : {
            title: vtitle,
            description: vdescription ,
            posterUrl:vposterUrl,
            rating: vrating
        }
    }
    
}
export default addmovie