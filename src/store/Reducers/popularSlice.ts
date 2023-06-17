import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppDispatch} from "../store";
import axios from "axios";
import {IPopular} from "../../Types/IPopular";
interface PopularState {
    popular: IPopular[]
}

const initialState: PopularState = {
    popular: []
}

export const popularSlice = createSlice({
    name: "popular",
    initialState,
    reducers: {
       getPopular(state, action: PayloadAction<IPopular[]>){
         state.popular = action.payload
       }
    }
})
export default popularSlice.reducer
export const {getPopular} = popularSlice.actions

export const fetchingPop = (page: number,language: string,key: string) => async (dispatch: AppDispatch) => {
    try {
        const res = await axios.get(` https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${page}`)
        dispatch(getPopular(res.data.results))
    }catch (err: any){
        dispatch(err.message)
    }
}