import React, { useState } from "react";
import TareaNueva from "./TareaNueva";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToDoList = () => {
    const [inputValue, setInputValue] = useState("");
    const [tarea, setTarea] = useState([
        "Make the bed",
        "Wash my hands",
        "Eat",
        "Walk the dog"
    ]);

    const addValue = (event) => {
        setInputValue(event.target.value);
    };

    const addList = (event) => {
        event.preventDefault();
        if (inputValue.trim() !== "") {
            setTarea([...tarea, inputValue]);
            setInputValue("");
        }
    };

    const deleteTask = (index) => {
        const newInputValue = tarea.filter((_, i) => i !== index);
        setTarea(newInputValue);
    };

    return (
        <>
            <div id="container" className="d-flex flex-column justify-content-center align-items-center">
                <h1 className="display-1">todos</h1>
                
                <ul className="list-group" id="lista">
                    <form className="list-group-item" onSubmit={addList}>
                        <input
                            value={inputValue}
                            onChange={addValue}
                            name="data"
                            className="border-0 text-secondary"
                            type="text"
                            id="añadirTarea"
                            placeholder="What needs to be done?"
                        />
                    </form>
                    {tarea.map((inputValue, index) => (
                        <li key={index} className="list-group-item text-secondary">
                            {inputValue}
                            <span onClick={() => deleteTask(index)}><FontAwesomeIcon icon={faXmark} /></span>
                        </li>
                    ))}
                    <li className="list-group-item text-secondary" id="itemsLeft">
                        {tarea.length} item(s) left
                    </li>
                </ul>
            </div>
            <div id="final1"></div>
            <div id="final2"></div>
        </>
    );
};

export default ToDoList;
