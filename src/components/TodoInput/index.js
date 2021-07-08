import React,{Component} from 'react';

class TodoInput extends Component{
    render(){
        return(
            <form className="add-todo-form" onSubmit={this.props.handleSubmit}>
                <input className="todo-input" type="text" onChange={this.props.handleChange}/>
                <button className="btn">ADD</button>
            </form>
        )
    }
}

export default TodoInput;