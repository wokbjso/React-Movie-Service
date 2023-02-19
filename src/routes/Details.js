import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import EachMovie from "../components/EachMovie";

const EachMovieWholeWrapper=styled.div`
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Loading=styled.h2`
    font-size:50px;
`;

function Details(){
    const {id}=useParams();
    const [loading,setLoading]=useState(true);
    const [movie,setMovie]=useState({});
    const getMovie=async()=>{
        const json=await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))
            .json();
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(()=>{
        getMovie();
    },[]);
    return <EachMovieWholeWrapper>
        {loading ? <Loading>Loading...</Loading> : 
        <EachMovie
            img={movie.medium_cover_image}
            title={movie.title_long} 
            year={movie.year} 
            rating={movie.rating} 
            likes={movie.like_count}
        />
    }
    </EachMovieWholeWrapper>
}

export default Details;