import React, {useEffect} from 'react';
import {useAppDispatch} from "../../Hooks/UseAppDispatch";
import {useAppSelector} from "../../Hooks/UseAppSelector";
import {bioSlice, fetchingActorDetails} from "../../store/Reducers/actorDetailSlice";
import {API_KEY} from "../../API/api";
import {useParams} from "react-router-dom";
import ActorMovie from "../ActorMovie";

const ActorsDetail = () => {
    const dispatch = useAppDispatch()
    const {personId} = useParams()
    const {actorDetails, bio} = useAppSelector(state => state.actorDetailSlice)
    const {dark, language} = useAppSelector(state => state.searchSlice)
    useEffect(() => {
        dispatch(fetchingActorDetails(language,personId, API_KEY))
    }, [personId, language])
    const {profile_path,place_of_birth,birthday,also_known_as,biography,name} = actorDetails
    const more = (text: any) => {
        if (bio === 300) {
            dispatch(bioSlice(text.length))
        }else{
            dispatch(bioSlice(300))
        }
    }
    return (
        <div style={{
            background: dark ? "white" : "#001e30",
            transition: "800ms",
            color: dark ? "black" : "white"
        }}>
            <div className="flex items-start container py-20">
                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`} alt="img"/>
                <div className="ml-24">
                    <h1 className="text-xl pb-5">{name}</h1>
                    <p className="font-medium">Место рождения: {place_of_birth}</p>
                    <h2 className="font-bold py-5">Дата рождения: {birthday}</h2>
                    <h3 className="py-4">{also_known_as}</h3>
                    <h4 className="font-extrabold">Биография</h4>
                    <p className="">{biography?.slice(0,bio)}</p>
                    <h6 className="text-green-600 cursor-pointer"  onClick={() => more(biography)}>{bio === 300 ? "Читать ещё" : "Закрыть"}</h6>
                </div>
            </div>
            <ActorMovie personId={personId}/>
        </div>
    );
};

export default ActorsDetail;