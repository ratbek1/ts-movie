import React, {FormEvent, useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import logo from "../../images/logo.svg"
import {useAppDispatch} from "../../Hooks/UseAppDispatch";
import {useAppSelector} from "../../Hooks/UseAppSelector";
import {addDark, addLanguage, settingSearch} from "../../store/Reducers/searchSlice";
import {MdDarkMode} from "react-icons/md";
import {BsFillSunFill} from "react-icons/bs";

const Header = () => {
    const dispatch = useAppDispatch()
    const {searching, dark} = useAppSelector(state => state.searchSlice)
    const nav = useNavigate()
    return (
        <nav className=" border-gray-200 dark:bg-black sticky top-0 z-30 border-b-2 relative" style={{
            background: dark ? "white": "#001e3c",
            transition: "800ms",
            borderBottom: dark ? "2px solid black" : ""
        }}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <img src={logo} width={150} className="h-8 mr-3" alt="#"/>
                <div className="flex md:order-2">
                    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search"
                            aria-expanded="false"
                            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                  clipRule="evenodd"></path>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                    <div className="relative hidden md:block">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor"
                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                      clipRule="evenodd"></path>
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <form className="flex items-center">
                            <label htmlFor="voice-search" className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <input style={{
                                    background: dark ? "black" : "white",
                                    color: dark ? "white" : "black"
                                }} type="text" onInput={() => nav(`/search/search_movie/${searching}`)}
                                       onChange={(e: any) => {
                                           dispatch(settingSearch(e.target.value))
                                       }} onKeyDown={(e: any) => {
                                    if (e.key === "Enter") {
                                        nav(`/search/search_movie/${searching}`)
                                    }
                                }}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="Search" required/>
                                <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <svg aria-hidden="true"
                                         className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                                         fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    </svg>
                                </button>
                            </div>
                            <button onClick={() => nav(`/search/search_movie/${searching}`)}
                                    className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Search
                            </button>
                        </form>
                    </div>
                    <div className="relative" style={{
                        transition: "800ms"
                    }}>
                        {dark ?
                            <button className="absolute right-[-80px]"   onClick={() => dispatch(addDark(false))}>
                                <MdDarkMode className="text-4xl text-black"/>
                            </button> :
                            <button className="absolute right-[-80px]" onClick={() => dispatch(addDark(true))}>
                                <BsFillSunFill className="text-4xl text-white"/>
                            </button>

                        }
                    </div>
                    <button data-collapse-toggle="navbar-search" type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-search" aria-expanded="false">
                        <span className="sr-only">Open menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                     id="navbar-search">
                    <div className="relative mt-3 md:hidden">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor"
                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <input type="text" id="search-navbar"
                               className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Search..."/>
                    </div>
                    <ul style={{
                        background: dark ? "white" : "#001e3c",
                        transition: "800ms"
                    }} className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:border-gray-700">
                        <li>
                            <Link to={"/"} style={{
                                color: dark ? "black" : "white"
                            }}
                                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-cyan-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Home</Link>
                        </li>
                        <li>
                            <Link to={"/popular"} style={{
                                color: dark ? "black" : "white"
                            }}
                                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-cyan-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Popular</Link>
                        </li>
                        <li>
                            <Link to={"/topRated"} style={{
                                color: dark ? "black" : "white"
                            }}
                                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-cyan-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Top-Rated</Link>
                        </li>
                    </ul>
                    <select className="bg-blue-600 px-1 rounded-[10px] ml-80 border-[none] outline-emerald-300 text-white" onChange={(e: React.ChangeEvent<HTMLInputElement> | any) => dispatch(addLanguage(e.target.value))}>
                        <option value="en-US">En</option>
                        <option value="fr-FR">Fr</option>
                        <option value="ru-RU">Ru</option>
                    </select>
                </div>
            </div>
        </nav>

    );
};

export default Header;