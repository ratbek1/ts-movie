import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppDispatch} from "../store";
import axios from "axios";
import {IActorDetails} from "../../Types/IPopular";

interface IActorDetailState {
    actorDetails: Partial<IActorDetails>,
    bio: number

}
const initialState: IActorDetailState = {
    actorDetails: {},
    bio: 300
}
export const actorDetailSlice = createSlice({
    name: "actorDetail",
    initialState,
    reducers: {
        getActorDetails(state, action: PayloadAction<IActorDetails>){
            state.actorDetails = action.payload
        },
        bioSlice(state, action: PayloadAction<number>){
            state.bio = action.payload
        }
    }
})
export default actorDetailSlice.reducer
export const {getActorDetails, bioSlice} = actorDetailSlice.actions

export const fetchingActorDetails = (language: string,personId: any,key: string) => async (dispatch: AppDispatch) => {
    try {
        const res = await axios(`https://api.themoviedb.org/3/person/${personId}?api_key=${key}&language=${language}`)
        dispatch(getActorDetails(res.data))
    }catch (err: any){
        dispatch(err.message)
    }
}