import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { RouteComponentProps } from "react-router";
import ProbabilityTable from "../../components/ProbabilityTable/ProbabilityTable";
import {
  cholesterolTypeConverter,
  propabilityTable,
  cholesterol_MMOL as uniqueMmol,
  ages as uniqueAges,
  pressures as uniquePressures,
  cholesterol_MMOL,
  cholesterol_MG,
} from "../../data/coreData";
import "./Results.css";

interface UserDetailPageProps
  extends RouteComponentProps<{
    age: string;
    gender: string;
    isSmoking: string;
    pressure: string;
    cholesterolType: string;
    cholesterolValue: string;
  }> {}

const closestValue = (array: number[], sample: number) => {
  return array.reduce(function (prev, curr) {
    return Math.abs(curr - sample) < Math.abs(prev - sample) ? curr : prev;
  });
};

const findGrid = (age: number, gender: string, isSmoking: boolean) => {
  const closestAge = closestValue(uniqueAges, age);

  const matchedProbabilityGrid = ensure(
    propabilityTable.tables.find(
      (x) =>
        x.age === closestAge && x.gender === gender && x.isSmoking === isSmoking
    )
  );
  return matchedProbabilityGrid.table;
};

// https://stackoverflow.com/a/54738437
function ensure<T>(argument: T | undefined | null): T {
  if (argument === undefined || argument === null) {
    console.log(argument);
    throw new TypeError("This value was promised to be there.");
  }
  return argument;
}

const pressureAndCholesterolMapper = (
  pressureValue: number,
  cholesterolType: string,
  cholesterolValue: number
) => {
  var mmolValue = cholesterolValue;
  if (cholesterolType === "mg") {
    mmolValue = cholesterolTypeConverter(cholesterolType, cholesterolValue);
  }

  var computedX = -1;
  var computedY = -1;

  const closestMmolValue = closestValue(uniqueMmol, mmolValue);
  switch (closestMmolValue) {
    case 4:
      computedX = 0;
      break;
    case 5:
      computedX = 1;
      break;
    case 6:
      computedX = 2;
      break;
    case 7:
      computedX = 3;
      break;
    case 8:
      computedX = 4;
      break;
  }

  const closestPressureValue = closestValue(uniquePressures, pressureValue);
  switch (closestPressureValue) {
    case 180:
      computedY = 0;
      break;
    case 160:
      computedY = 1;
      break;
    case 140:
      computedY = 2;
      break;
    case 120:
      computedY = 3;
      break;
  }
  return { computedX, computedY };
};

const ResultsPage: React.FC<UserDetailPageProps> = ({ match }) => {
  const matchedProbabilityGrid = findGrid(
    parseInt(match.params.age),
    match.params.gender,
    match.params.isSmoking === "true"
  );
  const { computedX, computedY } = pressureAndCholesterolMapper(
    parseInt(match.params.pressure),
    match.params.cholesterolType,
    parseInt(match.params.cholesterolValue)
  );

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
          rawValues={matchedProbabilityGrid}
          sizeX={matchedProbabilityGrid[0].length}
          sizeY={matchedProbabilityGrid.length}
          title="Prrawdopodobieństwo w %"
          titleX={match.params.cholesterolType === "mmol" ? "mmol/l" : "mg/dl"}
          titleY="mm Hg"
          legendX={
            match.params.cholesterolType === "mmol"
              ? cholesterol_MMOL
              : cholesterol_MG
          }
          legendY={uniquePressures}
          computedX={computedX}
          computedY={computedY}
        />
      </IonContent>
    </IonPage>
  );
};

export default ResultsPage;
