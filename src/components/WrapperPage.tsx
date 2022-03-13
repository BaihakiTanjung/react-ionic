import { IonPage, IonContent } from "@ionic/react";

interface WrapperPageProps {}

const WrapperPage: React.FC<WrapperPageProps> = (props) => {
  return (
    <IonPage className="px-1 m-2">
      <IonContent fullscreen>{props.children}</IonContent>
    </IonPage>
  );
};

export default WrapperPage;
