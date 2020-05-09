import React from 'react';
import TodoListTask from "./TodoListTask/TodoListTask";
import c from './Tasks.module.css';


class TodoListTasks extends React.Component {

    render = () => {
           let myFn = (t) =>{
            return  <TodoListTask
                    // key={this.props.task.id}
                    id={t.id}
                    task={t}
                    del={this.props.del}
                    changeStatus={this.props.changeStatus}
                    changeTitle={this.props.changeTitle}
                    deleteTask={this.props.deleteTask}/>
           }
                let tasksElements = this.props.tasks.map(myFn);


        return (
            <div className={c.tasksElements}>
                {tasksElements}
            </div>
        );
    }
}

export default TodoListTasks;
