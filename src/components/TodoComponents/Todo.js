import React from "react";

export default class Todo extends React.Component {
    constructor(props) {
        super();
        this.state = {task: props.task, id: props.id, completed: props.completed}
    }

    handleClick = () => {
        this.setState({...this.state, completed: !this.state.completed});
    }

    render() {
        return (
            // this.state.completed 
            //     ? <p onClick={this.handleClick} style={{textDecoration: "line-through"}}> task: {this.state.task}</p>
            //     : <p onClick={this.handleClick}>{this.state.task}</p>
            <p onClick={this.handleClick} style={{textDecoration: this.state.completed ? "line-through" : "none"}}> task: {this.state.task}</p>
        );
    }
}