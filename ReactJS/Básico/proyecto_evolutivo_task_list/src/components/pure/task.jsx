import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../models/levelsEnums';
import { Task } from '../../models/taskClass';
import '../../styles/task.scss';

const TaskComponent = ({task}) => {

    useEffect(() => {
        console.log("Task created");
        return () => {
            console.log(`Task: ${task.name} is going to unMount`);
        };
    }, [task]);

    const badgeLevels = () => {
        if (task.level === "Urgent")
            return "warning"
        else if (task.level === "Blocking")
            return "danger"
        return "primary"
    };

    const taskCompletedIcon = () => {
        if (task.completed)
            return (<i className='bi-toggle-on' style={ {color: 'green'} }></i>)
        return (<i className='bi-toggle-off' style={ {color: 'grey'} }></i>)
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
                <i className='bi-trash' style={ {color: 'tomato', fontSize: 'medium'} }></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task),
};


export default TaskComponent;
