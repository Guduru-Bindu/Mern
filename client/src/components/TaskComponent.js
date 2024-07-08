import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

function TaskComponent() {
  const { tasks, addTask } = useContext(UserContext);
  const [taskNote, setTaskNote] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskTime, setTaskTime] = useState('');

  const handleAddTask = () => {
    const newTask = { note: taskNote, date: taskDate, time: taskTime };
    addTask(newTask);
    setTaskNote('');
    setTaskDate('');
    setTaskTime('');
  };

  return (
    <div>
      <h2>Tasks</h2>
      <input type="text" placeholder="Note" value={taskNote} onChange={(e) => setTaskNote(e.target.value)} />
      <input type="date" value={taskDate} onChange={(e) => setTaskDate(e.target.value)} />
      <input type="time" value={taskTime} onChange={(e) => setTaskTime(e.target.value)} />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.note} - {task.date} at {task.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskComponent;
