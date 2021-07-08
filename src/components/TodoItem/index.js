import React, { Component } from 'react';

class TodoItem extends Component{
    render(){
        const {todoData,deleteTodo,handleChekboxChange} = this.props;
        console.log(this.props.todoData);
        // let storageData = JSON.parse(localStorage.getItem('data'));
        let display;
        if(todoData.length !== -1){
            let sortedData = todoData.length >= 2 ? todoData.sort((a,b) => a.completed - b.completed) : todoData;
            display = sortedData.length > -1 ? sortedData.map( (item,index) => {
                return <div className={`item ${item.completed ? "item-completed" : ''}`} id={item.id} key={item.id}>
                    <label htmlFor={`check-${item.id}`}>
                    <input checked={item.completed ? true : false} onChange={handleChekboxChange} id={`check-${item.id}`} type="checkbox" />
                    {item.title}
                    </label>
                    <button onClick={deleteTodo}>Delete</button>
                    </div>
                     
            }) : null;
        }
        else{
            display= <p>No items found</p>;
        }
        return <div className="wrapper">{display}</div>;
    }
}

export default TodoItem;