import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const EachMovieWrapper=styled.div`
    width:100%;
    height:100%;
    margin-top:20px;
    max-height: 700px;
`;

const MovieLinkWrapper=styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom:20px;
`

const MovieImg=styled.img`
    width:80%;
    height:80%;
    border-radius: 5%;
    margin-bottom:15px;
    &:hover{
        scale:1.05;
    }
    transition:scale 0.15s ease-in;
`;

const MovieTitle=styled.h2`
    color:black;
    font-size:20px;
`;

const MovieSummaryWrapper=styled.div`
    width:100%;
    height:12%;
    display: flex;
    justify-content: center;
`

const MovieSummary=styled.p`
    font-size:18px;
    margin-bottom: 10px;
    width:80%;
    overflow: auto;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none;
    &::-webkit-scrollbar{
        display:none;
    }
`;

const MovieGenresWrapper=styled.div`
    width:100%;
    height:5%;
    display: flex;
    justify-content: center;
`

const MovieGenres=styled.ul`
    display: grid;
    width:80%;
    grid-template-columns: repeat(2,1fr);
    
`;

const GenresList=styled.li`
    margin-bottom: 5px;
    font-size:16px;
`;

function Movie({coverImg,title,summary,genres,id}){
    return <EachMovieWrapper>
        <Link to={`movie/${id}`}>
            <MovieLinkWrapper>
                <MovieImg src={coverImg} alt={title} />
                <MovieTitle>{title}</MovieTitle>
            </MovieLinkWrapper>
        </Link>
        <MovieSummaryWrapper>
            <MovieSummary>{summary}</MovieSummary>
        </MovieSummaryWrapper>
        <MovieGenresWrapper>
            <MovieGenres>
                {genres.map(g=><GenresList key={g}>⚫{g}</GenresList>)}
            </MovieGenres>
        </MovieGenresWrapper>
    </EachMovieWrapper>;
}

Movie.propTypes={
    id:PropTypes.number.isRequired,
    coverImg:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string)
}

export default Movie;