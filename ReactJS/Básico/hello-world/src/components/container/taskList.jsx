import React from 'react';
import { LEVELS } from '../../models/levelsEnums';
import { Task } from '../../models/taskClass';
import TaskComponent from '../pure/task';

//Componentes contenedores contienen los datos que pasan a hijos y logica agregada
const TaskListComponent = () => {

    const defaultTask = new Task("React", "Learning React", false, LEVELS.URGENT);

    const changeState = (idTask) => {
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
