import React, {useEffect} from 'react';
import {useAppSelector} from "../../Hooks/UseAppSelector";
import {useAppDispatch} from "../../Hooks/UseAppDispatch";
import {fetchingPop} from "../../store/Reducers/popularSlice";
import {API_KEY} from "../../API/api";
import {Link} from "react-router-dom";
import {addPage} from "../../store/Reducers/searchSlice";
import {GrLinkNext, GrLinkPrevious} from "react-icons/gr";

const Popular = () => {
    const dispatch = useAppDispatch()
    const {popular} = useAppSelector(state => state.popularSlice)
    const {dark, language, page} = useAppSelector(state => state.searchSlice)
    const btn =  [1,2,3,4,5,6,7,8,9,10]
    useEffect(() => {
        dispatch(fetchingPop(page,language,API_KEY))
    }, [language, page])
    console.log(popular)
    return (
        <div style={{
            background: dark ? "white" : "#001e3c",
            transition: "800ms",
        }}>
            <h1 style={{
                color: dark ? "black" : "white"
            }} className="text-white text-center text-2xl font-bold pt-5">Popular</h1>
            <div className="container flex flex-wrap gap-7 py-20">
                {
                    popular.map(el => (
                        <div style={{
                            background: dark ? "white" : "#132f4c"
                        }} className="hover:scale-[1.05] transition-[2s] hover:shadow-lime-400 shadow-xl w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
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

export default Popular;