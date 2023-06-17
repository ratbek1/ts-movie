import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppDispatch} from "../store";
import axios from "axios";
import {IActorMovie} from "../../Types/IPopular";

interface IActorMovieState {
    actorMovie: IActorMovie[]
}
const initialState: IActorMovieState = {
    actorMovie: []
}
export const ActorMovieSlice = createSlice({
    name: "actorMovie",
    initialState,
    reducers: {
        getActorMovie(state, action: PayloadAction<IActorMovie[]>){
            state.actorMovie = action.payload
        }
    }
})
export default ActorMovieSlice.reducer
export const {getActorMovie} = ActorMovieSlice.actions

export const fetchingActorMovie = (language: string,personId: any,key: string) => async (dispatch:AppDispatch) => {
    try {
        const res = await axios(`https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${key}&language=${language}`)
        dispatch(getActorMovie(res.data.cast))
    }catch (err: any){
        dispatch(err.message)
    }
}