import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ProbabilityTable from '../../components/ProbabilityTable/ProbabilityTable';
import { propabilityTable } from '../../data/coreData';
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

        <ProbabilityTable 
          rawValues={propabilityTable.tables[0].table}
          sizeX={5}
          sizeY={4}
          title='tytuł'
          titleX='oś X'
          titleY='oś Y'
          legendX={['legenda']}
          legendY={['legenda']}>
        </ProbabilityTable>
        
      </IonContent>
    </IonPage>
  );
};

export default ResultsPage;
