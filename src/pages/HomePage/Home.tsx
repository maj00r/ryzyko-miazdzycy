import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
    IonCard, 
    IonCardTitle,
    IonCardContent,
    IonInput,
    IonToggle,
    IonLabel,
    IonCheckbox,
    IonButton} from '@ionic/react';

import Form from '../../components/Form/Form';

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
        <IonCard>
          <Form/>
          <IonButton>Oblicz</IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
