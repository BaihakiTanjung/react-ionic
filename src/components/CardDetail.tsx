import {
  IonIcon,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";

import { bookmarkOutline, chevronBack } from "ionicons/icons";
import StarRatings from "react-star-ratings";

interface CardDetailProps {
  data: any;
}

const CardDetail: React.FC<CardDetailProps> = (props) => {
  const data = props.data;
  const hours = Math.floor(data.runtime / 60);
  const minutes = data.runtime - hours * 60;

  return (
    data && (
      <IonCard className="p-3 pt-5 pb-8 z-0 -mt-5 mx-0 rounded-t-3xl">
        <div className="flex gap-1 px-4 text-red-800">
          {data.genres?.map((genre: any) => {
            return <p className="font-bold">{genre.name}</p>;
          })}
        </div>
        <IonCardHeader class="-mt-4">
          <IonCardTitle class="text-2xl font-extrabold">
            {data.original_title}
          </IonCardTitle>
        </IonCardHeader>

        <div className="flex justify-between px-5">
          <StarRatings
            rating={data.vote_average / 2 || 0}
            numberOfStars={5}
            name="rating"
            starRatedColor="#F70113"
            starSpacing="0px"
            starDimension="20px"
          />

          <p>{`${hours}h ${minutes}m`}</p>
        </div>

        <p className="px-5 mt-2">{data.overview}</p>
        <p className="px-5 mt-2">{data.overview}</p>
        <p className="px-5 mt-2">{data.overview}</p>
        <p className="px-5 mt-2">{data.overview}</p>
        <p className="px-5 mt-2">{data.overview}</p>
        <p className="px-5 mt-2">{data.overview}</p>
        <p className="px-5 mt-2">{data.overview}</p>
      </IonCard>
    )
  );
};

export default CardDetail;
