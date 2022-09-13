import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levelsEnums';
import { Task } from '../../../models/taskClass';

const TaskForm = ( {add} ) => {

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

  return (
    <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
      <div className='form-outline flex-fil'>
        <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' placeholder='Task name' required autoFocus/>
        <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' placeholder='Task description' required/>
        <label htmlFor='selectLevel' className='sr-only'>Priority</label>
        <select ref={levelRef} id='selectLevel' defaultValue={LEVELS.NORMAL}>
          <option value={LEVELS.NORMAL}>Normal</option>
          <option value={LEVELS.URGENT}>Urgent</option>
          <option value={LEVELS.BLOCKING}>Blocking</option>
        </select>
        <button type='submit' className='btn btn-success btn-lg ms-3'>Add</button>
      </div>
      
    </form>
  )
};

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
}

export default TaskForm;
