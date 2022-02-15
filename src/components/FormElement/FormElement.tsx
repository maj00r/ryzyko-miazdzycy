import { IonSelect, 
        IonToggle,
        IonCard, 
        IonCardTitle,
        IonCardContent,
        IonInput,
        IonCheckbox} from '@ionic/react';
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
    children: 
        ReactElement<typeof IonInput> | 
        ReactElement<typeof IonSelect> | 
        ReactElement<typeof IonCheckbox> | 
        ReactElement<typeof IonToggle>,
}
  