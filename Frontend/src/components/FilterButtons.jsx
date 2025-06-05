function FilterButtons({ currentFilter, onFilterChange }) {
  return (
    <div className="flex gap-2 mb-4">
      <button
        onClick={() => onFilterChange('all')}
        className={`px-3 py-1 rounded-lg text-sm cursor-pointer ${
          currentFilter === 'all' 
            ? 'bg-blue-950 text-white' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange('pending')}
        className={`px-3 py-1 rounded-lg text-sm cursor-pointer ${
          currentFilter === 'pending' 
            ? 'bg-blue-950 text-white' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        Pending
      </button>
      <button
        onClick={() => onFilterChange('completed')}
        className={`px-3 py-1 rounded-lg text-sm cursor-pointer ${
          currentFilter === 'completed' 
            ? 'bg-blue-950 text-white' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        Completed
      </button>
    </div>
  )
}

export default FilterButtons 