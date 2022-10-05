//import React from "react";
 //import { v4 as uuid } from "uuid";
import Task from "./Task";


function TaskList({tasks, deleteTask}) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task) =>(
        <Task text={task.text} deleteTask={deleteTask} category={task.category} key={task.text}/>
      ))}
    </div>
  );
}

export default TaskList;