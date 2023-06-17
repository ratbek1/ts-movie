import React, {useEffect} from 'react';
import {useAppDispatch} from "../../Hooks/UseAppDispatch";
import {useAppSelector} from "../../Hooks/UseAppSelector";
import {fetchingTrailer} from "../../store/Reducers/trailerSlice";
import {API_KEY} from "../../API/api";

const Trailer = ({MovieId}: any) => {
    const dispatch = useAppDispatch()
    const {trailer} = useAppSelector(s => s.trailerSlice)
    const {dark, language} = useAppSelector(s => s.searchSlice)
    useEffect(() => {
        dispatch(fetchingTrailer(language,API_KEY,MovieId))
    }, [language])
    console.log(trailer)
      return (
        <div className="container flex overflow-x-scroll" style={{
            background: dark ? "white" : "#001e30",
            transition: "800ms"
        }}>
              {
                  trailer.map(el => (
                         <div className="mx-4">
                             <iframe width="350" height="230" src={`https://www.youtube.com/embed/${el.key}`}
                                     title="FR-33 || movie actors" frameBorder="0"
                                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                     allowFullScreen></iframe>
                         </div>
                  ))
              }
        </div>
    );
};

export default Trailer;