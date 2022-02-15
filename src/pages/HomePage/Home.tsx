import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Home.css';

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Formularz kandydata</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Formularz kandydata</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer /> */}
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
