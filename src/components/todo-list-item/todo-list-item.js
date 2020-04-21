import React from "react";
import './todo-list-item.css';

export default class TodoListItem extends React.Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         done: false
    //     }
    // }
    // constructor() {
    //     super();
    //     this.onLabelClick = () => {
    //         console.log(`Done:${this.props.label}`)
    //     }
    // }

    // state = {
    //     done: false,
    //     important: false
    // };
    // onLabelClick = () => {
    //     this.setState(({done})=>{
    //         return{
    //             done:!done
    //         }
    //     })
    // };
    // onMarkImportant = () => {
    //     this.setState(({important})=>{
    //         return{
    //             important: !important
    //         }
    //     })
    // };


    render() {
        const {label, test,onDeleted,onToggleDone,onToggleImportant,done,important} = this.props;

        // const {done, important} = this.state;

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
                    {label}{test}
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

