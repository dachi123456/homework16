import React from "react";
import {ProgressDiv,NewButton} from '../styledComp/styles'
const ProgressComponent = ({ task, moveToCompleted, moveTaskToPlan }) => {
  const { id, name } = task;

  return (
    <ProgressDiv>
      <h3>{name}</h3>
      <NewButton onClick={() => moveToCompleted(id)}>Move to Completed</NewButton>
      <NewButton onClick={() => moveTaskToPlan(id)}>Move to Plan</NewButton>
    </ProgressDiv>
  );
};

export default React.memo(ProgressComponent);
