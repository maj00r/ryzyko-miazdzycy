import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
    IonCard, 
    IonCardTitle,
    IonCardContent,
    IonInput,
    IonToggle,
    IonLabel,
    IonCheckbox,
    IonButton} from '@ionic/react';
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
          <FormElement label='Płeć'>
            <IonLabel>Mężczyzna</IonLabel>
            <IonToggle></IonToggle>
            <IonLabel>Kobieta</IonLabel>
          </FormElement>
          <FormElement label='Palący'>
            <IonCheckbox></IonCheckbox>
          </FormElement>
          <FormElement label='Ciśnienie tętnicze mmHg'>
          <IonInput type='number' min={80} max={300}></IonInput>
          </FormElement>
          <FormElement label='Cholesterol'>
            <FormElement label='Wartość'>
              <IonInput type='number' min={3} max={330}></IonInput>
            </FormElement>
            <FormElement label='Jednostka'>
              <IonLabel>mmol</IonLabel>
              <IonToggle></IonToggle>
              <IonLabel>mg</IonLabel>
            </FormElement>
          </FormElement>
          <IonButton>Oblicz</IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
