import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levelsEnums';
import { Task } from '../../models/taskClass';
import TaskComponent from '../pure/task';
import '../../styles/task.scss'

const TaskListComponent = () => {

    const defaultTask = new Task("React", "Learning React", false, LEVELS.URGENT);

    const [tasks, setTasks] = useState([defaultTask]);
    const [loadingTasks, setLoadingTask] = useState(true);

    //Control ciclo de vida
    useEffect(() => {
        console.log("Task state has been modified");
        setLoadingTask(false);
        return () => {
            console.log("TaskListComponent is going to unMount");
        };
    }, [tasks]);

    const addNewTask = () => {
        // TODO
    }

    const changeCompleted = (idTask) => {
        console.log("TODO: Change state of task with id: " + idTask);
    }
    
    return (
        <div>
            <div>
                <h1>Your task:</h1>
            </div>
            {/* TODO: Iterar sobre lista de tareas para renderizar*/}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};

export default TaskListComponent;