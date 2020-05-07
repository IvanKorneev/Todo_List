import React, {Component} from "react";
import './serch-panel.css';


export default class SearchPanel extends Component {


    state = {
        term:''
    }
    onSerChange = (event) => {
    const term = event.target.value
        this.setState({term})
        this.props.onSerChange(term)
    }

    render() {
        return (
            <form className='search-input d-flax'>
                <input placeholder='search' type='text' className='form-control'
                       onChange={this.onSerChange}
                value={this.state.term}/>
            </form>
        )
    }
}
