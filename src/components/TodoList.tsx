import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import Todo from './Todo';
import TodoFooter from './TodoFooter';

function TodoList() {
    const { displayedTodos } = useContext(TodoContext);

    return (
        <div className="rounded-lg flex flex-col gap-2 pt-2 bg-white dark:bg-gray-800">
            <div className="max-h-96 overflow-auto">
                {displayedTodos.map((todo, index) => (
                    <div key={todo.id}>
                        <Todo index={index} id={todo.id} title={todo.title} IsCompleted={todo.IsCompleted} />
                        <hr className="border-gray-300 dark:border-gray-700" />
                    </div>
                ))}
            </div>
            <TodoFooter />
        </div>
    );
}
export default TodoList;
