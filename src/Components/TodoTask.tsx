import React from 'react';
import {ITask} from './../Interfaces';

interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void;
}
// task?: ITask = the "?" makes it optional

const TodoTask = ({ task, completeTask }: Props) => {
    return (
        <div className="task">
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button onClick={() => completeTask(task.taskName)}>X</button>
        </div>
    )
}

export default TodoTask
