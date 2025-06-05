import { useState } from 'react'
import TaskItem from './TaskItem'
import FilterButtons from './FilterButtons'
import AddTaskForm from './AddTaskForm'

function TodoList() {
  const initialTasks = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: true },
    { id: 3, text: "Learning Tailwind CSS", completed: false },
    { id: 4, text: "Practice React js", completed: false },
    { id: 5, text: "Read Documentation", completed: true },
    { id: 6, text: "View React video cources", completed: true },
  ]

  const [tasks, setTasks] = useState(initialTasks)
  const [filter, setFilter] = useState('all')

  const addTask = (newTaskText) => {
    setTasks([...tasks, { id: Date.now(), text: newTaskText, completed: false }])
  }

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed
    if (filter === 'pending') return !task.completed
    return true
  })

  const getEmptyMessage = () => {
    if (filter === 'completed') {
      return "No completed tasks yet. Complete some tasks to see them here!"
    }
    if (filter === 'pending') {
      return "No pending tasks. Add some tasks to get started!"
    }
    return "No tasks yet. Add your first task above!"
  }

  return (
    <div className="min-h-screen bg-[#d4eac3] py-8 px-4 rounded-2xl">
      <FilterButtons currentFilter={filter} onFilterChange={setFilter} />
      <div className="max-w-md mx-auto bg-[#ab8030] shadow-amber-900 rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Task Manager </h1>
        
        <AddTaskForm onAddTask={addTask} />

        {filteredTasks.length === 0 ? (
          <div className="text-center py-8 text-gray-600 italic">
            {getEmptyMessage()}
          </div>
        ) : (
          <ul className="space-y-3">
            {filteredTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={() => toggleTask(task.id)}
                onDelete={() => deleteTask(task.id)}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default TodoList 