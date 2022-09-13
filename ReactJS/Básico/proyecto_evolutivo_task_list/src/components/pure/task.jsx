import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/taskClass';
import '../../styles/task.scss';

const TaskComponent = ({ task, complete, remove }) => {

    const badgeLevels = () => {
        if (task.level === "Urgent")
            return "warning"
        else if (task.level === "Blocking")
            return "danger"
        return "primary"
    };

    // onClick={complete(task)}
    const taskCompletedIcon = () => {
        if (task.completed)
            return (<i onClick={ ()=> complete(task)} className='bi-toggle-on task-action' style={ {color: 'green'} }></i>);
        return (<i onClick={ ()=> complete(task)} className='bi-toggle-off task-action' style={ {color: 'grey'} }></i>);
    };

    return (
        // ?className como nombre de clase para hojas de estilos
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{ task.name }</span>
            </th>
            <td className='align-middle'>
                <span>{ task.description }</span>
            </td>
            <td className='align-middle'>
                {<h6 className='mb-0'> <span className={`badge bg-${badgeLevels()}`}>{task.level}</span></h6>}
            </td>
            <td className='align-middle'>
                {taskCompletedIcon()}
                <i onClick={ ()=> remove(task)} className='bi-trash task-action' style={ {color: 'tomato', fontSize: 'medium'} }></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};


export default TaskComponent;
