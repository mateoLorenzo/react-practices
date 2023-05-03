import React, { useCallback, useState } from "react";
import "survey-core/defaultV2.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { CustomSurvey } from "../components/CustomSurvey";

// const surveyJson = {
//   elements: [
//     {
//       name: "FirstName  ",
//       title: "Enter your first name:",
//       type: "text",
//     },
//     {
//       name: "LastName",
//       title: "Enter your last name:",
//       type: "text",
//     },
//   ],
// };

// const survey = new Model(surveyJson);
// const alertResults = useCallback((sender: any) => {
//   const results = JSON.stringify(sender.data);
//   alert(results);
// }, []);
// survey.onComplete.add(alertResults);

// return <Survey model={survey} />

interface SurveyQuestions {
  [key: number]: string;
}

const SurveyJsScreen = () => {
  const [surveyQuestionNumber, setSurveyQuestionNumber] = useState(1);
  const [surveyIsVisible, setSurveyIsVisible] = useState(false);

  const onClickCancel = () => {
    // alert("cancel survey");
    setSurveyIsVisible(false);
    setSurveyQuestionNumber(1);
  };

  const onClickNext = () => {
    setSurveyQuestionNumber(surveyQuestionNumber + 1);
    if (surveyQuestionNumber === 4) {
      alert("survey completed");
      setSurveyIsVisible(false);
      setSurveyQuestionNumber(1);
    }
  };

  // prettier-ignore
  const surveyQuestions: SurveyQuestions = {
    1: "¿Qué tan satisfecho está con la facilidad de uso en la creación de objetivos?",
    2: "¿Qué utilizarías si la plataforma de objetivos ya no estuviera disponible?",
    3: "¿Cuál es el principal beneficio de utilizar la plataforma de objetivos?",
    4: "¿cómo podemos mejorar la plataforma?",
  };

  const showSurvey = () => {
    setSurveyIsVisible(true);
  };

  const styles = {
    screenContainer: {
      flex: 1,
      height: "100vh",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
  };

  const [position, setPosition] = useState(0);

  const handleClick = () => {
    setPosition(position - 200);
  };
  return (
    <>
      <button
        onClick={showSurvey}
        style={{ marginLeft: "50%", marginTop: "50vh", position: "absolute" }}
      >
        show survey
      </button>

      <div style={styles.screenContainer}>
        {surveyIsVisible && (
          <CustomSurvey
            surveyQuestion={surveyQuestions[surveyQuestionNumber]}
            surveyQuestionNumber={surveyQuestionNumber}
            onClickCancel={onClickCancel}
            onClickNext={onClickNext}
          />
        )}
      </div>
    </>
  );
};
export default SurveyJsScreen;
