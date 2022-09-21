import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levelsEnums";
import { Task } from "../../models/taskClass";
import TaskComponent from "../pure/task";
import TaskForm from "../pure/forms/taskForm";
import "../../styles/task.scss";

const TaskListComponent = () => {
  const defaultTask1 = new Task("JavaScript", "Learn JS", true, LEVELS.NORMAL);
  const defaultTask2 = new Task("React", "Learn React", false, LEVELS.URGENT);
  const defaultTask3 = new Task("Node", "Learn NodeJS", false, LEVELS.BLOCKING);

  const [tasks, setTasks] = useState([
    defaultTask1,
    defaultTask2,
    defaultTask3,
  ]);
  const [loading, setLoading] = useState(true);

  //Control ciclo de vida
  useEffect(() => {
    console.log("Task state has been modified");
    setLoading(false);
    return () => {
      console.log("TaskListComponent is going to unMount");
    };
  }, [tasks]);

  const completeTask = (task) => {
    console.log("updating this task: ", task);
    const index = tasks.indexOf(task);
    const temporalTask = [...tasks];
    temporalTask[index].completed = !temporalTask[index].completed;
    setTasks(temporalTask); //Actualiza estado de tarea al marcar el icono de check
  };

  const deleteTask = (task) => {
    console.log("delete this task: ", task);
    const index = tasks.indexOf(task);
    const temporalTask = [...tasks];
    temporalTask.splice(index, 1);
    setTasks(temporalTask);
  };

  const addTask = (task) => {
    console.log("Add this task: ", task);
    const temporalTask = [...tasks];
    temporalTask.push(task);
    setTasks(temporalTask);
  };

  const Table = () => {
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Level</th>
            <th scope="col">State</th>
          </tr>
        </thead>

        <tbody>
          {/* El key es necesario para que react sepa el id de la task */}
          {tasks.map((task, index) => {
            return (
              <TaskComponent
                key={index}
                task={task}
                complete={completeTask}
                remove={deleteTask}
              ></TaskComponent>
            );
          })}
        </tbody>
      </table>
    );
  };

  let tastkTable;
  if (tasks.length > 0)
    tastkTable = <Table></Table>
  else
    tastkTable = <h3>There are not task</h3>

  return (
    <div>
      <div className="col-12">
        <div className="card">
          {/* card header title */}
          <div className="card-header p-3">
            <h1>Your task:</h1>
          </div>

          {/* card Body */}
          <div className="card-body" data-mdb-perfect-scrollbar="true" style={{ position: "relative", hight: "400px" }}>
            {tastkTable}
          </div>
        </div>
      </div>
      <TaskForm add={addTask} length={tasks.length}></TaskForm>
    </div>
  );
};

export default TaskListComponent;
