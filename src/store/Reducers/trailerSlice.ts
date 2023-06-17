import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import App from "../../App";
import {AppDispatch} from "../store";
import axios from "axios";
import {ITrailer} from "../../Types/IPopular";

interface TrailerState {
    trailer: ITrailer[]
}
const initialState: TrailerState = {
    trailer: []
}
export const trailerSlice = createSlice({
    name: "trailer",
    initialState,
    reducers: {
        getTrailer(state, action: PayloadAction<ITrailer[]>){
            state.trailer = action.payload
        }
    }
})
export default trailerSlice.reducer
export const {getTrailer} = trailerSlice.actions

export const fetchingTrailer = (language: string,key: string,MovieId: any) => async (dispatch: AppDispatch) => {
    try {
        const res = await axios(`https://api.themoviedb.org/3/movie/${MovieId}/videos?api_key=${key}&language=${language}`)
        dispatch(getTrailer(res.data.results))
    }catch (err: any){
        dispatch(err.message)
    }
}