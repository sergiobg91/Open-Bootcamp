import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levelsEnums';
import { Task } from '../../../models/taskClass';

const TaskForm = ( {add, length} ) => {

  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef(LEVELS.NORMAL);

  const addTask = (e) => {

    e.preventDefault();

    const newTask = new Task(
      nameRef.current.value, 
      descriptionRef.current.value, 
      false,
      levelRef.current.value
    );
  add(newTask);
  };

  const typeOfStyles= {
    normalStyle: {
      color: 'blue',
      fontWeight: 'bold',
    },
    urgentStyle: {
      color: '#F68E1E',
      fontWeight: 'bold'
    },
    blockingStyle: {
      color: 'red',
      fontWeight: 'bold'
    }
  };


  return (
    <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
      <div className='form-outline flex-fil'>
        <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg mt-2' placeholder='Task name' required autoFocus/>
        <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg mt-2' placeholder='Task description' required/>
        <label htmlFor='selectLevel' className='sr-only mt-2'>Priority</label>
        <select className='form-control form-control-sm mt-2' ref={levelRef} id='selectLevel' defaultValue={LEVELS.NORMAL}>
          <option  style={typeOfStyles.normalStyle} value={LEVELS.NORMAL}>Normal</option>
          <option style={typeOfStyles.urgentStyle} value={LEVELS.URGENT}>Urgent</option>
          <option style={typeOfStyles.blockingStyle} value={LEVELS.BLOCKING}>Blocking</option>
        </select>
        <button type='submit' className='btn btn-success btn-lg ms-3 mt-2'>{length > 0 ? 'Add New Task' : 'Create your first Task'}</button>
      </div>
      
    </form>
  )
};

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
}

export default TaskForm;
