import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppDispatch} from "../store";
import axios from "axios";
import {IActors} from "../../Types/IPopular";

interface ActorsState {
    actor: IActors[]
}
const initialState: ActorsState = {
    actor: []
}
export const actorsSlice = createSlice({
    name: "actor",
    initialState,
    reducers: {
        getActors(state, action:PayloadAction<IActors[]>){
            state.actor = action.payload
        }
    }
})
export default actorsSlice.reducer
export const {getActors} = actorsSlice.actions

export const fetchingActor = (language: string,MovieId: any, key: string) => async (dispatch: AppDispatch) => {
   try {
       const res = await axios(`https://api.themoviedb.org/3/movie/${MovieId}/credits?api_key=${key}&language=${language}`)
       dispatch(getActors((res.data.cast)))
   }catch (err: any){
       dispatch(err.message)
   }
}