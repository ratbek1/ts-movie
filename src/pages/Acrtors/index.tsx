import React, {useEffect} from 'react';
import {useAppDispatch} from "../../Hooks/UseAppDispatch";
import {useAppSelector} from "../../Hooks/UseAppSelector";
import {fetchingActor} from "../../store/Reducers/actorsSlice";
import {API_KEY} from "../../API/api";
import user from "../../images/user.png"
import {Link} from "react-router-dom";

const Actors = ({MovieId}: any) => {
    const dispatch = useAppDispatch()
    const {actor} = useAppSelector(state => state.actorsSlice)
    const {dark, language} = useAppSelector(state => state.searchSlice)
    useEffect(() => {
        dispatch(fetchingActor(language,MovieId,  API_KEY ))
    }, [MovieId,language])
    console.log(actor)
    return (
        <div className="container flex justify-end">
            <div className="best flex overflow-x-scroll w-3/4">
                {
                    actor.map(el => (
                        <div className="p-2" style={{
                            background: dark ? "white" : "#001e30",
                            transition: "800ms"
                        }}>
                            <div className="mx-4 w-[200px] h-[350px]">
                              <Link to={`/person/person_movie/${el.id}`}>
                                  {
                                      el.profile_path ? <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.profile_path}`} alt="img-actor"/>
                                          : <img className="w-[200px] h-[300px] object-fill" style={{objectFit: "cover"}} src={user} alt="user-png"/>
                                  }
                              </Link>
                                <h1 style={{
                                    color: dark ? "black" : "white"
                                }} className="text-center text-xl font-bold text-white">{el.name}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Actors;
