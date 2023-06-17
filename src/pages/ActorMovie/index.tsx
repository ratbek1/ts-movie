import React, {useEffect} from 'react';
import {useAppDispatch} from "../../Hooks/UseAppDispatch";
import {useAppSelector} from "../../Hooks/UseAppSelector";
import {Link, useParams} from "react-router-dom";
import {fetchingActorMovie} from "../../store/Reducers/ActorMovieSlice";
import {API_KEY} from "../../API/api";
import user from "../../images/user.png";

const ActorMovie = ({personId}: any) => {
    const dispatch = useAppDispatch()
    const {actorMovie} = useAppSelector(state => state.ActorMovieSlice)
    const {dark, language} = useAppSelector(state => state.searchSlice)
    useEffect(() => {
        dispatch(fetchingActorMovie(language,personId, API_KEY))
    }, [personId, language])
    console.log(actorMovie)
    return (
        <div className="container flex justify-end">
            <div className="best flex overflow-x-scroll">
                {
                    actorMovie.map(el => (
                        <div className="p-2" style={{
                            background: dark ? "white" : "#001e30",
                            transition: "800ms"
                        }}>
                            <div className="mx-4 w-[200px] h-[450px]">
                                <Link to={`/movieDetails/${el.id}`}>
                                    {
                                        el.poster_path ? <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt="img-actor"/>
                                            : <img className="w-[200px] h-[300px]" style={{objectFit: "cover"}} src={user} alt="user-png"/>
                                    }
                                </Link>
                                <h1 style={{
                                    color: dark ? "black" : "white"
                                }} className="text-center text-xl font-bold text-white">{el.title}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ActorMovie;