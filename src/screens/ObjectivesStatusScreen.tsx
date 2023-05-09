import { useState } from "react";
import { ObjectivesStatus } from "../components/ObjectivesStatus";
import { ObjectiveType } from "../constants";

const ObjectivesStatusScreen = () => {
  const [sendNewData, setSendNewData] = useState(false);
  const initialObjectiveStatus: {
    id: number;
    progress: number;
    type: ObjectiveType;
  }[] = [
    { id: 1, type: "OBJ", progress: 20 },
    { id: 2, type: "LS", progress: 40 },
    { id: 3, type: "RC", progress: 25 },
    { id: 4, type: "RC", progress: 75 },
  ];

  const secondObjectiveStatus: {
    id: number;
    progress: number;
    type: ObjectiveType;
  }[] = [
    { id: 5, type: "OBJ", progress: 20 },
    { id: 6, type: "LS", progress: 40 },
    { id: 7, type: "RC", progress: 25 },
    { id: 8, type: "RC", progress: 75 },
    { id: 9, type: "RC", progress: 100 },
  ];

  const handleClick = () => {
    setSendNewData((prevValue) => !prevValue);
  };
  return (
    <div
      style={{
        flex: 1,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p>PropsChangesScreen</p>
      <ObjectivesStatus
        objectivesStatus={
          sendNewData ? secondObjectiveStatus : initialObjectiveStatus
        }
      />
      <button onClick={handleClick}>Send new data</button>
    </div>
  );
};
export default ObjectivesStatusScreen;
