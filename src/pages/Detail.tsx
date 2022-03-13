import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonImg,
} from "@ionic/react";
import NavbarDetail from "../components/NavbarDetail";
import CardDetail from "../components/CardDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const fetchDetailMovie = async (id: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=b0a4a6eba278fb3dc72204ee76ad699f&language=id_ID`
  );
  const data = await response.json();
  return data;
};

interface DetailProps {
  backdrop_path: string;
}

const About: React.FC = () => {
  const [detailMovie, setDetailMovie] = useState<DetailProps>({
    backdrop_path: "",
  });
  const params = useParams() as { id: any };

  useEffect(() => {
    fetchDetailMovie(params.id).then((res) => {
      setDetailMovie(res);
    });
  }, [params.id]);

  console.log(detailMovie);
  return (
    <IonPage>
      <IonContent class="relative" fullscreen>
        <NavbarDetail></NavbarDetail>
        {detailMovie && (
          <div style={{ marginTop: "3rem" }}>
            <IonImg
              className="object-cover"
              src={`https://image.tmdb.org/t/p/original/${detailMovie.backdrop_path}`}
            ></IonImg>

            <CardDetail data={detailMovie}></CardDetail>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default About;
