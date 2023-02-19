import { useEffect, useState } from "react";
import styled from "styled-components";
import Movie from "../components/Movie";

const Loading=styled.h1`
    font-size:50px;
`

const Body=styled.div`
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
`;

const MovieWrapper=styled.div`
    min-width: 500px;
    width:50%;
    height:90%;
    display:grid;
    flex-direction: column;
    grid-template-columns: repeat(2,1fr);
    overflow:auto;
    background:linear-gradient(to right,rgba(0,0,0,0.6),rgba(0,0,0,0.2));
    border-radius:5%;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none;
    &::-webkit-scrollbar{
        display:none;
    }
`

function Home(){
    const [loading,setLoading]=useState(true);
    const [movies,setMovies]=useState([]);
    const getMovies=async ()=>{
        const json=await (await 
            fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"))
            .json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(()=>{
        getMovies();
    },[]);
    return <Body>
        {loading ? <Loading>Loading...</Loading> : 
        <MovieWrapper>
            {movies.map(movie=><Movie
                key={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres} 
                id={movie.id}
            />)}
        </MovieWrapper>}
    </Body>
}

export default Home;