import { useState } from "react";


export const Todo = () => {
    const [inputValue,setInputValue] = useState("");
    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
            </header>
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" className="todo-input"/>
                    </div>
                </form>
            </section>
        </section>
    )
}