import { IonSelect, 
    IonToggle,
    IonCard, 
    IonCardTitle,
    IonCardContent,
    IonInput,
    IonCheckbox,
    IonLabel,
    IonButton,
    IonItem,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    useIonRouter, 
    IonPage} from '@ionic/react';
    
import './Form.css';


import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { RouteComponentProps, useHistory } from 'react-router';

export type FormInputs = {
  age: number,
  gender: 'female' | 'male',
  isSmoking: boolean,
  pressure: number,
  cholesterolType: 'mmol' | 'mg',
  cholesterolValue: number
}

export const Form: React.FC<RouteComponentProps> = ({ history })  => {
    
    const { control, handleSubmit, register, setValue, getValues } = useForm<FormInputs>({
      defaultValues: {
        gender: 'male',
        cholesterolType: 'mmol',
        isSmoking: false
      }
    });

    const onSubmit: SubmitHandler<FormInputs> = data => {
      console.log(data);
      history.push(`/result/age/${data.age}/gender/${data.gender}/pressure/${data.pressure}`
        + `/isSmoking/${data.isSmoking}/cholesterolType/${data.cholesterolType}`
        + `/value/${data.cholesterolValue}`)
    }

    return (
      <IonPage>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Formularz kandydata</IonTitle>
            </IonToolbar>
          </IonHeader>
          {/* <ExploreContainer /> */}
          <IonCard>
            <form onSubmit={handleSubmit(onSubmit)}>
            <IonItem>
              <IonLabel>Wiek</IonLabel>
              <IonInput
                {...register('age', {
                  min: '18',
                  max: '130'
                })}
              />
            </IonItem>
            <IonItem>
              <IonLabel>Mężczyzna</IonLabel>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => {
                  return (
                    <IonToggle
                      checked={field.value === 'female' ? true : false}
                      onIonChange={e => {
                        setValue('gender', e.detail.checked ? 'female' : 'male');
                      }}
                    />
                  );
                }}
              />
              <IonLabel>Kobieta</IonLabel>
            </IonItem>
            
            <IonItem>
              <IonLabel>Palący</IonLabel>
              <Controller
                name="isSmoking"
                control={control}
                render={({ field }) => {
                  return (
                    <IonCheckbox
                      checked={field.value}
                      onIonChange={e => {
                        setValue('isSmoking', e.detail.checked);
                      }}
                    />
                  );
                }}
              />
            </IonItem>
            <IonItem>
              <IonLabel>Ciśnienie tętnicze mmHg</IonLabel>
              <IonInput
                {...register('pressure', {
                  min: 60,
                  max: 300
                })}
              />
            </IonItem>
            <IonItem>
              <IonLabel>Cholesterol</IonLabel>
                <IonInput
                  {...register('cholesterolValue', {
                    min: 3,
                    max: 200
                  })}
                />
              <IonLabel>mmol</IonLabel>
              <Controller
                name="cholesterolType"
                control={control}
                render={({ field }) => {
                  return (
                    <IonToggle
                      checked={field.value === 'mg' ? true : false}
                      onIonChange={e => {
                        setValue('cholesterolType', e.detail.checked ? 'mg' : 'mmol');
                      }}
                    />
                  );
                }}
              />
              <IonLabel>mg</IonLabel>
            </IonItem>
            <IonButton type="submit">
              Oblicz
            </IonButton>
          </form>
            <IonButton>Oblicz</IonButton>
          </IonCard>
        </IonContent>
      </IonPage>
    );
  };
  
export default Form;