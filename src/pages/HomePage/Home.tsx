import {
  IonRouterOutlet,
} from "@ionic/react";

import Form from "../../components/Form/Form";
import { Route, RouteComponentProps } from "react-router-dom";

import "./Home.css";
import ResultsPage from "../ResultsPage/Results";

const HomePage: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonRouterOutlet>
      <Route
        path={
          "/result/age/:age/gender/:gender/pressure/:pressure/isSmoking/:isSmoking/" +
          "cholesterolType/:cholesterolType/value/:cholesterolValue"
        }
        component={ResultsPage}
      />
      <Route exact path="/" component={Form} />
    </IonRouterOutlet>
  );
};

export default HomePage;
