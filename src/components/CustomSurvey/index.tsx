import { useState } from "react";
import "./styles.css";

interface IScreenProps {
  surveyQuestion: string;
  surveyQuestionNumber: number;
  onClickNext: () => void;
  onClickCancel: () => void;
}

const deceptionOptions = [
  "Muy decepcionado",
  "Algo decepcionado",
  "Nada decepcionado",
];

const SurveyFirstSlide = ({
  cardPosition,
  deceptionOptionSelected,
  onClickDeceptionOption,
}: {
  cardPosition: number;
  deceptionOptionSelected: number;
  onClickDeceptionOption: (option: number) => void;
}) => (
  <div
    className="survey-card-container"
    style={{
      transform: `translateX(${cardPosition}px)`,
    }}
  >
    <h3 className="survey-title">
      ¿Qué tan satisfecho está con la facilidad de uso en la creación de
      objetivos?
    </h3>
    <div className="rating-buttons-container">
      {deceptionOptions.map((option, index) => {
        return (
          <div className={"rating-button-container"}>
            <div
              className={
                deceptionOptionSelected === index + 1
                  ? "rating-button-selected"
                  : "rating-button"
              }
              onClick={() => onClickDeceptionOption(index + 1)}
            >
              <p className="rating-button-text">{index + 1}</p>
            </div>
            <p className="rating-text">{option}</p>
          </div>
        );
      })}
    </div>
  </div>
);

const SurveySecondSlide = ({ cardPosition }: { cardPosition: number }) => (
  <div
    className="survey-card-container"
    style={{
      transform: `translateX(${cardPosition}px)`,
    }}
  >
    <h3 className="survey-title">
      ¿Qué utilizarías si la plataforma de objetivos ya no estuviera disponible?
    </h3>
    <textarea className="second-question-textarea"></textarea>
  </div>
);

const SurveyThirdSlide = ({ cardPosition }: { cardPosition: number }) => (
  <div
    className="survey-card-container"
    style={{
      transform: `translateX(${cardPosition}px)`,
    }}
  >
    <h3 className="survey-title">
      ¿Qué utilizarías si la plataforma de objetivos ya no estuviera disponible?
    </h3>
    <textarea className="second-question-textarea"></textarea>
  </div>
);

const SurveyFourthSlide = ({ cardPosition }: { cardPosition: number }) => (
  <div
    className="survey-card-container"
    style={{
      transform: `translateX(${cardPosition}px)`,
    }}
  >
    <h3 className="survey-title">
      ¿Cuál es el principal beneficio de utilizar la plataforma de objetivos?
    </h3>
    <div className="fourth-textarea-container">
      <label className="fourth-question-label" htmlFor="comments">
        Deja un comentario
      </label>
      <textarea id="comments" className="fourth-question-textarea"></textarea>
    </div>
  </div>
);

export const CustomSurvey = ({
  surveyQuestionNumber,
  onClickNext,
  onClickCancel,
}: IScreenProps) => {
  // prettier-ignore
  const [deceptionOptionSelected, setDeceptionOptionSelected] = useState<number>(0);
  // prettier-ignore
  const [cardsPosition, setCardsPosition] = useState<number[]>([0, 550, 1100, 1650]); // Used for sliding animation

  const onClickDeceptionOption = (option: number) => {
    setDeceptionOptionSelected(option);
  };

  const updateCardsPositions = () => {
    setCardsPosition((prev) => {
      return prev.map((position) => position - 550);
    });
  };

  const handleNextClick = () => {
    updateCardsPositions();
    onClickNext();
  };

  return (
    <div className="survey-container">
      <div className="survey-cards-container">
        <SurveyFirstSlide
          cardPosition={cardsPosition[0]}
          deceptionOptionSelected={deceptionOptionSelected}
          onClickDeceptionOption={onClickDeceptionOption}
        />
        <SurveySecondSlide cardPosition={cardsPosition[1]} />
        <SurveyThirdSlide cardPosition={cardsPosition[2]} />
        <SurveyFourthSlide cardPosition={cardsPosition[3]} />
      </div>
      <div className="spacer" />
      <div className="bottom-container">
        <p className="questions-counter">{surveyQuestionNumber}/4 preguntas</p>
        <div>
          <button onClick={onClickCancel} className="cancel-button">
            Cancelar
          </button>
          <button onClick={handleNextClick} className="continue-button">
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};
