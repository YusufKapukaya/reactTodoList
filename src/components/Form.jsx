import React, { useState } from "react";



function Form({ inputText, setinputText, todos, settodos, setStatus }) {
    const [alertWarning, setAlertWarning] = useState(false);
    const [alertSuccess, setAlertSuccess] = useState(false);

    const inputTextHandler = (e) => {
        setinputText(e.target.value);
    }

    const submitToDoHandler = (e) => {
        e.preventDefault();

        const isEmpty = str => !str.trim().length;
        if (isEmpty(inputText)) {
            setAlertWarning(true);
            setTimeout(() => {
                setAlertWarning(false);
            }, 1000);
        } else {
            setAlertSuccess(true);
            setTimeout(() => {
                setAlertSuccess(false);
            }, 1000);
            settodos([
                ...todos,
                { text: inputText, completed: false, id: Math.random() }
            ]);
        }


        setinputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return (
        <form >
            <div className="search">
                <input value={inputText} type="text" className="todo-input" placeholder="Add..." onChange={inputTextHandler} />
                <button className="todo-button" type="submit" onClick={submitToDoHandler}>
                    <i className="fa fa-plus-circle"></i>
                </button>
            </div>

            <div className="select">
                <select name="todos" className="filter-todo" onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>

            <div className="alert-wrapper">
                {alertSuccess ? <div className="alert-success">
                    <div>added sucsesfully</div>
                </div> : ""}
                {alertWarning ? <div className="alert-warning">
                    <div>Input must have added!!</div>
                </div> : ""}
            </div>
        </form>
    )
}


export default Form;