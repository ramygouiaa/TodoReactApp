import React, { Component } from 'react';

class AddTodo extends Component {

    state = {
        content:''
    }

handleChange = (e) => {
    this.setState({
        content:e.target.value
    })
}

handleSubmit = (e) => {
    e.preventDefault()
    //console.log(this.state);
    this.props.addTodo(this.state)
    //here we empty the input after submit method 1
    //let input = document.getElementById('todo')
    //input.value = ''
    //here we empty the input after submit method 2
    this.setState({
        content:''
    })
}

render(){
    return (
        <div>
            <form onSubmit = {this.handleSubmit}>
                <label>Add new Todo</label>
                <input type="text" onChange = {this.handleChange} value={this.state.content}/>
            </form>
        </div>
    )
}

}

export default AddTodo