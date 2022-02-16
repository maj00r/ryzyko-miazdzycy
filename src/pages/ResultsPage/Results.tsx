import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ProbabilityCell from '../../components/ProbabilityCell/ProbabilityCell';

import './Results.css';

const ResultsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Wynik</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Wynik</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        {Array.from({ length: 15 }, (_, i) => (
          <ProbabilityCell value={i}></ProbabilityCell>
        ))}
        
      </IonContent>
    </IonPage>
  );
};

export default ResultsPage;
