function TodoFooter() {
    return (
        <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-b-lg font-medium text-gray-800 dark:text-gray-400">
            <p className="hover:text-blue-500 hover:cursor-pointer">5 items left</p>
            <div className="flex gap-4">
                <p className="hover:text-blue-500 hover:cursor-pointer">All</p>
                <p className="hover:text-blue-500 hover:cursor-pointer">Active</p>
                <p className="hover:text-blue-500 hover:cursor-pointer">Completed</p>
            </div>
            <p className="hover:text-blue-500 hover:cursor-pointer">Clear Completed</p>
        </div>
    );
}
export default TodoFooter;
