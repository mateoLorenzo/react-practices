import React, { useEffect, useLayoutEffect } from "react";
import { Forms } from "./useFormPractice/components/Forms";
import { ArrayState } from "./components/ArrayState";
import ChangeStatusScreen from "./screens/changeStatusScreen";
import SurveyJsScreen from "./screens/SurveyJsScreen";
import ObjectivesStatusScreen from "./screens/ObjectivesStatusScreen";

const App = () => {
  // return <ChangeStatusScreen />;
  // return <ArrayState />;
  // return <Forms />;
  // return <SurveyJsScreen />;
  return <ObjectivesStatusScreen />;
};
export default App;
