import { IonCol, IonGrid, IonRow } from '@ionic/react';
import { ReactElement } from 'react';
import ProbabilityCell from '../ProbabilityCell/ProbabilityCell';
import './ProbabilityTable.css';

type TableProps = {
    rawValues: number[][],
    sizeX: number,
    sizeY: number,
    legendX: string[],
    legendY: string[],
    titleX: string,
    titleY: string,
    title: string,
    computedX: number,
    computedY: number
}

const ProbabilityTable: React.FC<TableProps> = (props) => {
    return (
        <IonGrid>
            {Array.from({ length: props.sizeY }, (_, i) => (
               <IonRow key={i}>
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
        </IonGrid>
    );
  };

export default ProbabilityTable;  