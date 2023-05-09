import { useAtom } from "jotai";
import React, { memo, useEffect, useState } from "react";
import { numberAtom, ObjectiveType } from "../../constants";

interface ScreenProps {
  objectivesStatus: { id: number; progress: number; type: ObjectiveType }[];
}

export const ObjectivesStatus = ({ objectivesStatus }: ScreenProps) => {
  const [objectivesProgress, setObjectivesProgress] = useState<number[]>([]);
  const [numbers, setNumbers] = useAtom(numberAtom);

  useEffect(() => {
    objectivesStatus.forEach((objective) => {
      saveProgress(objective.type, objective.progress);
    });
  }, [objectivesStatus]);

  useEffect(() => {
    console.log("numbers from useEffect", numbers);
  }, [numbers]);

  useEffect(() => {
    console.log("objectivesProgress from useEffect", objectivesProgress);
  }, [objectivesProgress]);

  const saveProgress = (type: ObjectiveType, progress: number) => {
    if (type === "RC") {
      setNumbers((prevValue) => [...prevValue, progress]);
      setObjectivesProgress((prevValue) => [...prevValue, progress]);
    }
  };

  return (
    <>
      {objectivesStatus.map((objective) => {
        return (
          <p>
            {objective.type} → {objective.progress}
          </p>
        );
      })}
    </>
  );
};
