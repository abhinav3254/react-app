import React from "react";
import { useEffect } from "react";

const API_URL = 'http://www.omdbapi.com/?apikey=a65ccf09';



const App = () => {
    // function which calls the API
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        console.log(data);
    }

    // Here in this method we called the search movie which will load the data when page is refreshed
    useEffect(() => {
        searchMovies(`batman`);
    }, []);

    return (
        <h1>App Js</h1>
    );
}

export default App;