import React from "react";
import TodoListItem from "../todo-list-item";
import './todo-list.css';

const TodoList = ({todos,onDeleted,onToggleDone,onToggleImportant}) => {

    const elements = todos.map((item) => {
        const {id,...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                <TodoListItem
                    // label={item.label}
                    // important={item.important}
                    // test={item.test}
                    {...itemProps}
                    onDeleted={()=>onDeleted(id)}
                    onToggleImportant={()=>onToggleImportant(id)}
                    onToggleDone={()=>onToggleDone(id)}
                    />
                   {/*{...item} если имена ключей совподают */}
            </li>

        )
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    )
};
export default TodoList;