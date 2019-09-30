// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        return this.props.todos.map((val, idx) => {
            return <Todo key={idx} task={val.task} completed={val.completed} id={val.id}/>
        })
    }
}