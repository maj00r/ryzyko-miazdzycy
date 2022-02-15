import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
    IonCard, 
    IonCardTitle,
    IonCardContent,
    IonInput} from '@ionic/react';
import FormElement from '../../components/FormElement/FormElement';

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
          <FormElement label='Wiek'>
            <IonInput type='number' min={18} max={120}></IonInput>
          </FormElement>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
