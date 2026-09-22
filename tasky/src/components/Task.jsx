import React from 'react';

const Task = (props) => {
    let priorityColour = "";

    if (props.priority === "Low") {
      priorityColour = "green";
    }
    else if (props.priority === "Medium") {
      priorityColour = "orange";
    }
    else if (props.priority === "High") {
      priorityColour = "red";
    }

    return (
      <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
      <p className="title">{props.title}</p>
      <p>Due: {props.deadline}</p>
      <p className="description">{props.description}</p>
      <p className="priority" style={{color: priorityColour}}>
        {props.priority}
      </p>

      <button className="doneButton" onClick={props.markDone}>Done</button>
      <button className='deleteButton' onClick={props.deleteTask}>Delete</button>

    </div>
    
  );
};

export default Task;