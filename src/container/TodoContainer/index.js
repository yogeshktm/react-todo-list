import React, { Component } from "react";
import TodoItem from "../../components/TodoItem";
import TodoInput from "../../components/TodoInput";

class TodoContainer extends Component {
  constructor() {
    super();
    this.getInput = this.getInput.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.getCheckBoxValue = this.getCheckBoxValue.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.state = {
      todoList: [],
      inputText: "",
    };
    console.log(this.state.todoList);
  }
  componentDidMount() {
    //localStorage.setItem('data', JSON.stringify(this.state.todoList));
    console.log(typeof this.state.todoList);
    console.log(typeof localStorage.getItem("data"));
    let localData = localStorage.getItem("data");
    if (localData !== null) {
      this.setState({
        //todoList:JSON.parse(localData)
      });
    }
  }
  getInput(e) {
    this.setState({
      inputText: e.target.value,
    });
  }
  getCheckBoxValue(e) {
    let targetId = e.target.id;
    let trimmedId = parseInt(targetId.replace(/\D/g, ""));
    console.log(e);
    console.log(trimmedId);
    let newArray = [...this.state.todoList];
    let newTest = newArray.filter((item) => {
      if (item.id === trimmedId) {
        console.log(item.completed);
        e.target.checked ? (item.completed = true) : (item.completed = false);
      }
      return item;
    });
    this.setState({
      todoList: newTest,
    });
    localStorage.setItem("data", JSON.stringify(this.state.todoList));
  }
  addTodo(e) {
    e.preventDefault();
    if (e.target.children[0].value !== "") {
      if (this.state.todoList.length > -1) {
        console.log(this.state.todoList);
        this.setState({
          todoList: [
            ...this.state.todoList,
            {
              id: this.state.todoList.length + 1,
              title: this.state.inputText,
              completed: false,
            },
          ],
        });
        localStorage.setItem("data", JSON.stringify(this.state.todoList));
      } else {
        this.setState({
          todoList: [
            {
              id: this.state.todoList.length + 1,
              title: this.state.inputText,
              completed: false,
            },
          ],
        });
        localStorage.setItem("data", JSON.stringify(this.state.todoList));
      }
    }
    e.target.children[0].value = "";
    this.setState({ inputText: "" });
    console.log(e.target.children[0].value);
  }
  deleteTodo(e) {
    console.log("inside delete");
    let deleteNode = e.target.id;
    let trimmedNode = parseInt(deleteNode.replace(/\D/g, ""));
    let removeIndex = this.state.todoList
      .map(function (item) {
        return item.id;
      })
      .indexOf(trimmedNode);
    let deleteArray = this.state.todoList;
    deleteArray.splice(removeIndex, 1);
    console.log(deleteNode);
    console.log(removeIndex);
    console.log("e id", e.target.id);
    this.setState({
      todoList: deleteArray,
    });
    // localStorage.setItem('data',JSON.stringify(this.state.todoList));
  }
  render() {
    return (
      <>
        <TodoInput
          handleSubmit={this.addTodo}
          handleChange={this.getInput}
        ></TodoInput>
        {this.state.todoList.length <= 0 ? (
          <p className="welcome-text">
            Welcome user. You can add,delete and mark as complete the todo items
          </p>
        ) : (
          <TodoItem
            deleteTodo={this.deleteTodo}
            handleChekboxChange={this.getCheckBoxValue}
            todoData={this.state.todoList}
          ></TodoItem>
        )}
      </>
    );
  }
}

export default TodoContainer;
