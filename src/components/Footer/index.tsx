import React from 'react';
import logo from "../../images/logo.svg"
import {useAppSelector} from "../../Hooks/UseAppSelector";

const Footer = () => {
    const {dark} = useAppSelector(state => state.searchSlice)
    return (
        <div>
            <footer className="bg-white rounded-lg shadow dark:bg-black m-4" style={{
                background: dark ? "white" : "#001e3c",
                transition: "800ms",
                border: "2px solid black"
            }}>
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="https://www.themoviedb.org/?language=ru" className="flex items-center mb-4 sm:mb-0">
                            <img src={logo} width={200} className="h-8 mr-3" alt="#"/>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400" style={{
                            color: dark ? "black" : "white"
                        }}>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">Home</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6">Popular</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">Top-Rated</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                    <span style={{
                        color: dark ? "black" : "white"
                    }} className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">TMDB</a>/ Chegebaev Raatbek /</span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;