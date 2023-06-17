import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppDispatch} from "../store";
import axios from "axios";
import {IPopular} from "../../Types/IPopular";

interface ISearchState {
    search: IPopular[],
    searching: string,
    dark: boolean,
    language: string,
    page: number,
}
const initialState: ISearchState = {
    search: [],
    searching: "",
    dark: false,
    language: "en-US",
    page: 1,

}
export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        getSearch(state, action: PayloadAction<IPopular[]>){
            state.search = action.payload
        },
        settingSearch(state, action:PayloadAction<string>){
            state.searching = action.payload
        },
        addDark(state, action:PayloadAction<boolean>){
            state.dark = action.payload
        },
       addLanguage(state, action: PayloadAction<string>){
            state.language = action.payload
       },
        addPage(state, action: PayloadAction<number>){
            state.page = action.payload
        }
    }
})
export default searchSlice.reducer
export const {getSearch, settingSearch, addDark, addLanguage, addPage} = searchSlice.actions

export const fetchingSearch = (key: string, MovieName: any) => async (dispatch: AppDispatch) => {
    try {
        const res = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${MovieName}`)
        dispatch(getSearch(res.data.results))
    }catch (err: any){
        dispatch(err.message)
    }
}