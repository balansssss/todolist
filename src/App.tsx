import React from 'react';
import './App.css';
import TodoList, { TaskType } from './TodoList';

function App() {

  let task1: Array<TaskType> = [
    { id: 1, title: "CSS&HTML", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false }
  ]

  let task2 = [
    { id: 1, title: "Terminator", isDone: true },
    { id: 2, title: "Founder", isDone: true },
    { id: 3, title: "Pacman", isDone: false }
  ]



  return (
    <div className="App">
      <TodoList title="What to learn?" tasks={task1} />
      <TodoList title="Films" tasks={task2} />
    </div>
  );
}

export default App;
