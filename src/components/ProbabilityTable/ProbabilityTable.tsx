import { IonCol, IonGrid, IonLabel, IonRow } from '@ionic/react';
import { ReactElement } from 'react';
import ProbabilityCell from '../ProbabilityCell/ProbabilityCell';
import './ProbabilityTable.css';

type TableProps = {
    rawValues: number[][],
    sizeX: number,
    sizeY: number,
    legendX: string[] | number[],
    legendY: string[] | number[],
    titleX: string,
    titleY: string,
    title: string,
    computedX: number,
    computedY: number
}

const ProbabilityTable: React.FC<TableProps> = (props) => {
    const reversedLegendY = [...props.legendY].reverse()
    return (
        <>
            <IonLabel>{props.title}</IonLabel>
            <IonGrid >
                {Array.from({ length: props.sizeY }, (_, i) => (
                <IonRow key={i} >
                    <IonCol key={"legend-vertical " + i}>
                        <IonLabel>
                            {reversedLegendY[i]} {i == props.sizeY - 1 ? props.titleY : null}
                        </IonLabel>
                    </IonCol>
                    {Array.from({ length: props.sizeX }, (_, k) => (
                        <IonCol key={k}>
                            <ProbabilityCell 
                                value={props.rawValues[i][k]} 
                                isCurrentValue = {k == props.computedX && i == props.computedY}>
                            </ProbabilityCell>
                        </IonCol>
                    ))}
                    
                </IonRow>
                ))}

                <IonRow key={"legend-horizontal"}>
                    <IonCol></IonCol>
                    {Array.from({ length: props.sizeX }, (_, k) => (
                        <IonCol key={k}>
                            <IonLabel>
                                {props.legendX[k]} {k == 0 ? props.titleX : null}
                            </IonLabel>
                        </IonCol>
                    ))}
                </IonRow>
            </IonGrid>
        </>
    );
  };

export default ProbabilityTable;  