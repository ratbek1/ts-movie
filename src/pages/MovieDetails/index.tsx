import React, {useEffect} from 'react';
import {useAppSelector} from "../../Hooks/UseAppSelector";
import {useAppDispatch} from "../../Hooks/UseAppDispatch";
import {fetchingDetails} from "../../store/Reducers/movieDetailsSlice";
import {API_KEY} from "../../API/api";
import {useParams} from "react-router-dom";
import Actors from "../Acrtors";
import Trailer from "../Trailer";

const MovieDetails = () => {
    const dispatch = useAppDispatch()
    const {details} = useAppSelector(state => state.movieDetailsSlice)
    const {dark, language} = useAppSelector(state => state.searchSlice)
    const {MovieId} = useParams()
    useEffect(() => {
        dispatch(fetchingDetails(language,API_KEY, MovieId))
    }, [MovieId,language])
    console.log(details)
    return (
        <>
            <div style={{
                background: dark ? "white" : "#001e30",
                transition: "800ms"
            }}>
                <div style={{
                    background: details.backdrop_path ? `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${details.backdrop_path}") no-repeat center/cover`
                        : `url("https://cdn.arstechnica.net/wp-content/uploads/2022/07/netflix.jpg") no-repeat center/cover`
                }}>
                    <div className="container" style={{color: "white"}}>
                        <div className="flex items-start justify-between py-20">
                            <img
                                className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                                src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${details.poster_path}`}
                                alt="image description"/>
                            <div className="ml-56">
                                <h1>{details.title}</h1>
                                <div className="flex">
                                    <h3>{details.release_date}</h3>
                                    <div className="flex">
                                        {
                                            details.genres?.map(el => (
                                                <h1 className="mx-2">{el.name}</h1>
                                            ))
                                        }
                                        <h1>{Math.floor(details.runtime / 60)} ч {Math.floor(details.runtime % 60)}мин</h1>
                                    </div>
                                </div>
                                <div className="flex items-center py-12">
                                    <div className="runs" style={{
                                        background: `conic-gradient(green ${Math.round(details.vote_average * 10) * 3.59}deg, black  0deg)`
                                    }}>
                                        <h5>{Math.round(details.vote_average * 10)}<sup>%</sup></h5>
                                    </div>
                                    <h1 className="text-xl ml-4">Рейтинг</h1>
                                </div>
                                <h1 className="font-bold text-xl">Обзор</h1>
                                <p>{details.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Actors MovieId={MovieId}/>
                <Trailer MovieId={MovieId}/>
            </div>
        </>
    );
};

export default MovieDetails;