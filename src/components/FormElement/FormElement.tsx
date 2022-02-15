import { IonSelect, 
        IonToggle,
        IonCard, 
        IonCardTitle,
        IonCardContent,
        IonInput,
        IonCheckbox,
        IonLabel} from '@ionic/react';
import { ReactElement } from 'react';
import './FormElement.css';

const FormElement = ({label, children}: Props) => {
    return (
        <IonCard>
            <IonCardTitle>{label}</IonCardTitle>
            <IonCardContent>
                {children}
            </IonCardContent>
        </IonCard>
    );
  };
  
export default FormElement;

type Props = {
    label: string,
    children: ReactElement<Inputs> | Array<ReactElement<Inputs>>,
}

type Inputs = {
    input: typeof IonInput |
           typeof IonSelect |
           typeof IonCheckbox |
           typeof IonToggle |
           typeof IonLabel
}
  