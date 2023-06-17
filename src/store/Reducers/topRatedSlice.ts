import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppDispatch} from "../store";
import axios from "axios";
import {IPopular} from "../../Types/IPopular";

interface topRatedState {
    topRated: IPopular[]
}

const initialState: topRatedState = {
    topRated: []
}
export const topRatedSlice = createSlice({
    name: "topRated",
    initialState,
    reducers: {
        getTopRated(state, action: PayloadAction<IPopular[]>){
            state.topRated = action.payload
        }
    }
})
export default topRatedSlice.reducer
export const {getTopRated} = topRatedSlice.actions
export const fetchingTop = (language: string,page: number,key: string) => async (dispatch: AppDispatch) => {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=${page}`)
        dispatch(getTopRated(res.data.results))
    }catch (err: any){
        dispatch(err.message)
    }
}