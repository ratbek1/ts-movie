import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import popularSlice from "./Reducers/popularSlice";
import topRatedSlice from "./Reducers/topRatedSlice";
import movieDetailsSlice from "./Reducers/movieDetailsSlice";
import actorsSlice from "./Reducers/actorsSlice";
import trailerSlice from "./Reducers/trailerSlice";
import searchSlice from "./Reducers/searchSlice";
import actorDetailSlice from "./Reducers/actorDetailSlice";
import ActorMovieSlice from "./Reducers/ActorMovieSlice";

const rootReducer = combineReducers({
    popularSlice,
    topRatedSlice,
    movieDetailsSlice,
    actorsSlice,
    trailerSlice,
    searchSlice,
    actorDetailSlice,
    ActorMovieSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type rootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]