'use client'
import { useState, useEffect } from "react";
import { getMovieDetails } from "@/app/utilities/getMovieDetails";


const MovieDetail = ({ params: { movieId } }: { params: { movieId: number } }) => {
    const [movieDetail, setMovieDetail] = useState<any>(null);

    useEffect(() => {
        (async () => {
            try {
                const movieDetailData = await getMovieDetails(movieId);
                setMovieDetail(movieDetailData);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        })();
    }, []);

    return (
        <div>
            {movieDetail && (
                <div style={{display: "flex", gap: "30px", textAlign: "left", paddingTop: "40px",}}>
                    <div>
                       <img style={{marginLeft: "100%"}} src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} alt={movieDetail.title} />
                    </div>
                    <div style={{ marginLeft: "30%" , width: "20%", marginTop: "12%"}}>
                        <h2 style={{ fontSize: "27px", fontWeight: "bolder" }}>{movieDetail.title}</h2>
                        <p style={{ fontSize: "25px", paddingTop: "20px", paddingBottom: "20px" }}> {movieDetail.overview}</p>
                        <p style={{ fontSize: "20px" }}>Release Date: {movieDetail.release_date}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MovieDetail;
