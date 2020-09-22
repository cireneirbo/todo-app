import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    formSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    addTitleText = (event) => {
        this.setState(
            { [event.target.name]: event.target.value }
        );
    }

    render() {
        return (
            <form onSubmit={this.formSubmit} style={{ display: 'flex' }}>
                <input 
                    type="text" 
                    name="title" 
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Add a new TODO..." 
                    value={this.state.title}
                    onChange={this.addTitleText}
                />
                <input
                    type="submit"
                    value="Submit"
                    className="button"
                    style={{ flex: '1' }}
                />
            </form>
        )
    }
}

//PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
