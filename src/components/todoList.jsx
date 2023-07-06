import React from "react";
import { TodoListDiv, NewButton } from '../styledComp/styles';

const TodoList = ({ task, moveToProgress }) => {
  const { id, name } = task;

  return (
    <TodoListDiv> 
      <h3>{name}</h3>
      <NewButton onClick={() => moveToProgress(id)}>move to progress</NewButton>
    </TodoListDiv>
  );
};

export default React.memo(TodoList);