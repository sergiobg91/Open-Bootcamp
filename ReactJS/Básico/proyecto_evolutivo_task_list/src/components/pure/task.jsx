import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/taskClass';

const TaskComponent = ({task}) => {

    useEffect(() => {
        console.log("Task created");
        return () => {
            console.log(`Task: ${task.name} is going to unMount`);
        };
    }, [task]);

    return (
        <div>
            <h3>Name: { task.name }</h3>
            <h3>Description: { task.description }</h3>
            <h3>Level: { task.level }</h3>
            <h3>State: { task.completed ? "Done" : "TODO" }</h3>
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task),
};


export default TaskComponent;
