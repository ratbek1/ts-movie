import React, {useEffect} from 'react';
import {useAppDispatch} from "../../Hooks/UseAppDispatch";
import {useAppSelector} from "../../Hooks/UseAppSelector";
import {Link, useNavigate, useParams} from "react-router-dom";
import {fetchingSearch} from "../../store/Reducers/searchSlice";
import {API_KEY} from "../../API/api";

const SearchMovie = () => {
    const dispatch = useAppDispatch()
    const {search} = useAppSelector(state => state.searchSlice)
    const {MovieName} = useParams()
    useEffect(() => {
        dispatch(fetchingSearch(API_KEY, MovieName))
    }, [MovieName])
    return (
        <div className="bg-black">
            <div className="container flex flex-wrap gap-7 py-20">
                {
                    search.map(el => (
                        <div className="hover:scale-[1.05] transition-[2s] hover:shadow-fuchsia-500 shadow-xl w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                            <Link to={`/movieDetails/${el.id}`}>
                                <img className="p-8 rounded-t-lg" src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt="movie image"/>
                            </Link>
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white pb-5 text-center">{el.original_title}</h5>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default SearchMovie;