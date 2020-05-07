import React from "react";
import './todo-list-item.css';

export default class TodoListItem extends React.Component {
    render() {
        const {label,onDeleted,onToggleDone,onToggleImportant,done,important} = this.props;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';
        }

        return (
            <span className={classNames}>

                <span
                    className='todo-list-item-label'
                    onClick={onToggleDone}
                >
                    {label}
                </span>
                    <span className='buttons-container'>
                        <button type='button' className='btn btn-outline-success btn-sm'>
                            <li className='fa fa-exclamation' onClick={onToggleImportant}/>
                        </button>
                        <button type='button' className='btn btn-outline-danger btn-sm'>
                            <li className='fa fa-trash-o' onClick={onDeleted}/>
                        </button>
                    </span>

            </span>

        )
    }
}

