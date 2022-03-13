import { IonRow, IonCol, IonCard, IonCardTitle, IonImg } from "@ionic/react";
import "./MovieList.css";
import { Swiper, SwiperSlide } from "swiper/react";
import StarRatings from "react-star-ratings";

import "swiper/swiper.min.css";
import "@ionic/react/css/ionic-swiper.css";

interface MovieListProps {
  movieData: any;
  title: string;
  sliderPerView?: number;
  spaceBetween: number;
}

const MovieList: React.FC<MovieListProps> = (props) => {
  return (
    <div className="mt-3">
      <h1 className="text-2xl font-extrabold px-2">{props.title}</h1>
      <Swiper
        slidesPerView={props.sliderPerView}
        spaceBetween={props.spaceBetween}
      >
        {props.movieData.map((movie: any) => {
          return (
            <SwiperSlide>
              <IonCard
                routerLink={`/detail/${movie.id}`}
                class="bg-transparent border-none shadow-none"
              >
                <IonImg
                  className="movie-img"
                  src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                ></IonImg>

                <IonCardTitle class="text-base font-extrabold text-slate-300 mt-1">
                  {movie.title.length > 15
                    ? movie.title.slice(0, 15) + "..."
                    : movie.title}
                </IonCardTitle>

                <StarRatings
                  rating={movie.vote_average / 2}
                  numberOfStars={5}
                  name="rating"
                  starRatedColor="#F70113"
                  starSpacing="0px"
                  starDimension="20px"
                />
              </IonCard>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MovieList;
