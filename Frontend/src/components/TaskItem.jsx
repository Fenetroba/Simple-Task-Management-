function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li
      className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 hover:scale-105 cursor-pointer ${
        task.completed 
          ? 'bg-green-50 border border-green-200' 
          : 'bg-gray-50 hover:bg-gray-100'
      }`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggle}
          className={`w-5 h-5 rounded focus:ring-2 cursor-pointer ${
            task.completed 
              ? 'text-green-500' 
              : 'text-blue-950 focus:ring-blue-950'
          }`}
        />
        <span className={`${
          task.completed 
            ? 'line-through text-gray-500 italic' 
            : 'text-gray-800'
        }`}>
          {task.text}
        </span>
      </div>
      <button
        onClick={onDelete}
        className="text-red-500 hover:text-red-700 focus:outline-none"
      >
        Delete
      </button>
    </li>
  )
}

export default TaskItem 