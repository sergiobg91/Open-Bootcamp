import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levelsEnums';
import { Task } from '../../models/taskClass';
import TaskComponent from '../pure/task';
import TaskForm from '../pure/forms/taskForm';
import '../../styles/task.scss'

const TaskListComponent = () => {

    const defaultTask1 = new Task("JavaScript", "Learn JS", true, LEVELS.NORMAL);
    const defaultTask2 = new Task("React", "Learn React", false, LEVELS.URGENT);
    const defaultTask3 = new Task("Node", "Learn NodeJS", false, LEVELS.BLOCKING);

    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
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
            <div  className='col-12'>
                <div className='card'>

                    {/* card header title */}
                    <div className='card-header p-3'>
                        <h1>Your task:</h1>
                    </div>

                    {/* card Body */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', hight: '400px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Level</th>
                                    <th scope='col'>State</th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* El key es necesario para que react sepa el id de la task */}
                                {tasks.map( (task, index)=> {
                                    return (
                                        <TaskComponent key={index} task= {task}></TaskComponent>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <TaskForm></TaskForm>
                </div>
            </div>
        </div>
    );
};

export default TaskListComponent;