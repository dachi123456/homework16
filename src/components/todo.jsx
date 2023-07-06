import React, { useCallback, useState } from "react";
import TodoList from "./todoList";
import ProgressComponent from "./progress";
import Finished from "./finished";
import './main.css'

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [plan, setPlan] = useState([]);
  const [progress, setProgress] = useState([]);
  const [completed, setCompleted] = useState([]);

  const onChange = useCallback((event) => {
    const value = event.target.value;
    setInputValue(value);
  }, []);

  const addTask = useCallback((event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      const newTask = {
        id: new Date().getTime(),
        name: inputValue,
      };
      setPlan((prevState) => [...prevState, newTask]);
      setInputValue("");
    }
  }, [inputValue]);

  const moveTaskToProgress = useCallback(
    (id) => {
      const task = plan.find((task) => task.id === id);
      setPlan((prevState) => prevState.filter((task) => task.id !== id));
      setProgress((prevState) => [...prevState, task]);
    },
    [plan]
  );

  const moveTaskToPlan = useCallback(
    (id) => {
      const task = progress.find((task) => task.id === id);
      setProgress((prevState) => prevState.filter((task) => task.id !== id));
      setPlan((prevState) => [...prevState, task]);
    },
    [progress]
  );

  const moveTaskToCompleted = useCallback(
    (id) => {
      const task = progress.find((task) => task.id === id);
      setProgress((prevState) => prevState.filter((task) => task.id !== id));
      setCompleted((prevState) => [...prevState, task]);
    },
    [progress]
  );

  const removeTaskFromCompleted = useCallback(
    (id) => {
      setCompleted((prevState) => prevState.filter((task) => task.id !== id));
    },
    []
  );

  return (
    <div className="main">
      <section className="plan-section">
        <form className="todo-add" onSubmit={addTask}>
          <input
            type="text"
            className="add-input"
            value={inputValue}
            onChange={onChange}
            placeholder="Enter task"
          />
          <button className="add-btn" type="submit">
            Add
          </button>
        </form>
        <div style={{ width: '100%', color: 'green', height: '2px' ,marginTop: '1rem'}}></div>
        {plan.map((task) => (
          <TodoList
            key={task.id}
            task={task}
            moveToProgress={moveTaskToProgress}
          />
        ))}
      </section>
      <section className="progress-section">
        <h2>In Progress</h2>
        <div style={{ width: '100%', color: 'grey', height: '2px' ,marginTop: '1rem'}}></div>
        {progress.map((task) => (
          <ProgressComponent
            key={task.id}
            task={task}
            moveToCompleted={moveTaskToCompleted}
            moveTaskToPlan={moveTaskToPlan}
          />
        ))}
      </section>
      
      <section className="completed-section">
        <h2>Completed Tasks</h2>
        <div style={{ width: '100%', color: 'yellow', height: '2px' ,marginTop: '1rem'}}></div>
        {completed.map((task) => (
          <Finished
            key={task.id}
            task={task}
            removeTask={removeTaskFromCompleted}
          />
        ))}
      </section>
    </div>
  );
};

export default Todo;