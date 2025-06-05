import { useState } from 'react'

function AddTaskForm({ onAddTask }) {
  const [newTask, setNewTask] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newTask.trim() !== '') {
      onAddTask(newTask)
      setNewTask('')
      setError('')
    } else {
      setError('Task cannot be empty')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <div className="flex gap-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value)
            setError('')
          }}
          placeholder="Add a new task..."
          className={`flex-1 px-4 py-2 border rounded-lg focus:outline-none ${error ? 'border-red-500' : 'focus:ring-2 focus:ring-blue-500'}`}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-950 cursor-pointer text-white rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add
        </button>
      </div>
    </form>
  )
}

export default AddTaskForm 