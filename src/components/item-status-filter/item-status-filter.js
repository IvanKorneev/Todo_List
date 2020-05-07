import React from "react";
import './item-status-filter.css';


export default class ItemStatusFilter extends React.Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Acrive'},
        {name: 'done', label: 'Done'}
    ]

    render() {
        const {filter,onfilterChange} = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            const isActeve = filter === name;
            const clazz = isActeve? 'btn-info':'btn-info-secondary'
            return (
                <button type='button' className={`btn ${clazz}`} key={name}
                onClick={()=>{
                    onfilterChange(name)
                }}>{label}</button>
            )
        })
        return (
            <div className='btn-group'>
                {buttons}
            </div>
        )
    }
}

