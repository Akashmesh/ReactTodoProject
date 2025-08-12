import { useState } from "react";
export const TodoForm = ({onAddTodo}) => {
        const [inputValue,setInputValue] = useState("");
        const handleInputChange = (value)=> {
            setInputValue(value);
        };
        const handleFormSubmit= (event) => {
            event.preventDefault();
            onAddTodo(inputValue);
            setInputValue("");
        };
    return(
                 <section className="form">
                        <form onSubmit={handleFormSubmit}>
                            <div>
                                <input type="text" className="todo-input" value={inputValue} onChange={(event)=> handleInputChange(event.target.value)} autoComplete="off"/></div>
                                <div>
                                <button type="submit" className="todo-btn">Add Task</button>
                            </div>
                        </form>
                    </section>
    )
}