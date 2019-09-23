import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class Todo extends React.Component{
    constructor(){
        super();
        this.state = {todos: []};
    }

    render(){
        return(
            <div className="container">
                <div className="form-group">
                <label for="exTodo">Email address</label>
                <input type="text" class="form-control" id="exTodo" />
                </div>
                <button type="button" className="btn btn-primary">Add</button>
            </div>
        )
    }
}

export default Todo;