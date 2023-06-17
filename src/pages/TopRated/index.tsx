import React, {useEffect} from 'react';
import {useAppDispatch} from "../../Hooks/UseAppDispatch";
import {useAppSelector} from "../../Hooks/UseAppSelector";
import {fetchingTop} from "../../store/Reducers/topRatedSlice";
import {API_KEY} from "../../API/api";
import {Link} from "react-router-dom";
import {addPage} from "../../store/Reducers/searchSlice";
import {GrLinkNext, GrLinkPrevious} from "react-icons/gr";

const TopRated = () => {
    const dispatch = useAppDispatch()
    const {topRated} = useAppSelector(state => state.topRatedSlice)
    const {dark, language, page} = useAppSelector(state => state.searchSlice)
    const btn =  [1,2,3,4,5,6,7,8,9,10]
    useEffect(() => {
        dispatch(fetchingTop(language,page,API_KEY))
    }, [language, page])
    console.log(topRated)
    return (
        <div className="bg-black" style={{
            background: dark ? "white" : "#001e3c"
        }}>
            <h1 style={{
                color: dark ? "black" : "white"
            }} className="text-white text-center text-2xl font-bold pt-5">TopRated</h1>
            <div className="container flex flex-wrap gap-7 py-20">
                {
                    topRated.map(el => (
                        <div style={{
                            background: dark ? "white" : "#132f4c"
                        }} className="hover:scale-[1.05] transition-[2s] hover:shadow-blue-600 shadow-xl w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                            <Link to={`/movieDetails/${el.id}`}>
                                <img className="p-8 rounded-t-lg" src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt="movie image"/>
                            </Link>
                            <h5 style={{
                                color: dark ? "black" : "white"
                            }} className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white pb-5 text-center">{el.original_title}</h5>
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-center">
                <button onClick={() => dispatch(addPage(page - 1 === -0 ? 1 : page))} className="px-6 py-3 bg-sky-400 rounded-[15px] hover:scale-[1.1]"><GrLinkPrevious/></button>
                {
                    btn.map(el => (
                        <button onClick={() => dispatch(addPage(el))} className="px-4 py-2 rounded-[5px] bg-blue-600 mx-4 text-white hover:scale-[1.1]">{el}</button>
                    ))
                }
                <button onClick={() => dispatch(addPage(page + 1))} className="px-6 py-3 bg-sky-400 rounded-[15px] hover:scale-[1.1]"><GrLinkNext/></button>
            </div>
            <h1 className="text-white text-2xl text-center py-10">Page: {page}</h1>
        </div>
    );
};

export default TopRated;