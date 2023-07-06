import React from "react";
import { FinishedDiv,NewButton } from "../styledComp/styles";

const Finished = ({ task, removeTask }) => {
  const { id, name } = task;

  return (
    <FinishedDiv>
      <h3>Task: {name}</h3>
      <NewButton onClick={() => removeTask(id)}>Remove Task</NewButton>
    </FinishedDiv>
  );
};

export default React.memo(Finished);