import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppDispatch} from "../store";
import axios from "axios";
import {IDetails} from "../../Types/IPopular";

export interface MovieDetailsState {
    details: Partial<IDetails>
}
const initialState: MovieDetailsState = {
    details: {}
}
const movieDetailsSlice = createSlice({
    name: "details",
    initialState,
    reducers: {
        getDetails(state, action: PayloadAction<IDetails>){
            state.details = action.payload
        }
    }
})
export default movieDetailsSlice.reducer
export const {getDetails} = movieDetailsSlice.actions

export const fetchingDetails = (language: string,key: string, MovieId: any) => async (dispatch: AppDispatch) => {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${MovieId}?api_key=${key}&language=${language}`)
        dispatch(getDetails(res.data))
    }catch (err: any){
        dispatch(err.message)
    }
}