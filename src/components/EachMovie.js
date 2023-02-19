import styled from "styled-components";

const DetailsBody=styled.div`
    background:linear-gradient(to right,rgba(0,0,0,0.6),rgba(0,0,0,0.2));
    min-width: 300px;
    min-height:600px;
    width:20%;
    height:60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const EachMovieWrapper=styled.div`
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const EachMovieImg=styled.img`
    margin-bottom: 20px;
`;

const EachMovieInfo=styled.ul`
    width:70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const EachMovieList=styled.li`
    margin-bottom: 10px;
    font-size:20px;
    text-align:start;
`;

function EachMovie({img,title,year,rating,likes}){
    return <DetailsBody>
        <EachMovieWrapper>
            <EachMovieImg src={img} alt={title} />
            <EachMovieInfo>
                <EachMovieList>Title: {title}</EachMovieList>
                <EachMovieList>Released: {year}</EachMovieList>
                <EachMovieList>Rating: {rating}</EachMovieList>
                <EachMovieList>Likes: {likes}</EachMovieList>
            </EachMovieInfo>
        </EachMovieWrapper>
    </DetailsBody>;
}

export default EachMovie;