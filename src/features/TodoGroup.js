import React, { useState } from 'react';
import './TodoGroup.css';

const ToDoForm = ({ addTask }) => {
    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} />
            <button  >add</button>
        </form>
    );

};

export default ToDoForm;
