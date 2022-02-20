import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams, RouteComponentProps } from 'react-router';
import { FormInputs } from '../../components/Form/Form';
import ProbabilityTable from '../../components/ProbabilityTable/ProbabilityTable';
import { propabilityTable } from '../../data/coreData';
import './Results.css';

interface UserDetailPageProps extends RouteComponentProps<{
  age: string,
  gender: string,
  isSmoking: string,
  pressure: string,
  cholesterolType: string,
  cholesterolValue: string
}> {}

const ResultsPage: React.FC<UserDetailPageProps> = ({match, history})  => {

  var x=`/result/age/:age/gender/:gender/pressure/:pressure/isSmoking/:isSmoking/
            cholesterol-type/:cholesterolType/value/:value`
  

  
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
