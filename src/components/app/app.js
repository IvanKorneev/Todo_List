import React, {Component} from "react";

import AppHeader from "../app-header";
import SearchPanel from "../serchPanel";
import TodoList from "../todo-list";
import './app.css'
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";


export default class App extends Component {
    maxId = 100;
    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a Lunch')
            // {label: 'Drink Coffee', important: false, id: 1},
            // {label: 'Make Awesome App', important: true, id: 2},
            // {label: 'Have a Lunch', important: false, id: 3},
            // {test: 'Saruman', important: false, id: 4}
        ]
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    // удаление елемента из масива
    deleteItem = (id) => {
        this.setState(({todoData}) => {
            // const idx = todoData.findIndex(function (el) {
            //     return el.id === id;
            // });
            const idx = todoData.findIndex((el) => el.id === id);
            // const before = todoData.slice(0, idx);
            // const after = todoData.slice(idx + 1);
            // const newArray=[...before,...after]
            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
            return {
                todoData: newArray
            }
        })
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({todoData}) => {
            const newArr = [...todoData, newItem];
            return {
                todoData: newArr
            }
        });

    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0, idx), newItem
            , ...arr.slice(idx + 1)
        ]

    }

    onToggleImportant = (id) => {
        this.setState(({todoData})=>{
            //     const idx = important.findIndex((el) => el.id === id);
            //     const important = todoData[idx];
            //     const newItem = {...oldItem, done: !oldItem.done};
            //     const newArray = [...important.slice(0, idx), newItem, ...important.slice(idx + 1)];
            //     return {
            //         todoData: newArray
            //     }
            // })
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    };
    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            //     const idx = todoData.findIndex((el) => el.id === id);
            //     const oldItem = todoData[idx];
            //     const newItem = {...oldItem, done: !oldItem.done};
            //     const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
            //     return {
            //         todoData: newArray
            //     }
            // })
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });
    };


    render() {
        const {todoData} = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        return (
            <div className='todo-app'>
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className='top-panel d-flex'>
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList todos={todoData}
                          onDeleted={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        )
    }
};

