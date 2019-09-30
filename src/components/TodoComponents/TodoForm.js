import React from "react";
import App from "../../App";

class TodoForm extends React.Component {
    constructor(props) {
         super();
        this.props = props;
        this.state = {};
    }

    handleChange(e) {
        this.setState({...this.state, [e.target.name]: e.target.value});
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.addTodo({task: this.state.task, id: Date.now(), completed: false})
    }

    render() {
         return (
             <form onSubmit={e => this.handleSubmit(e)}>
                <input name={"task"} val={this.state.task} onChange={e => this.handleChange(e)} type="text"/>
                <button type="submit">Submit</button>
             </form>
         );
    }
}
export default TodoForm;