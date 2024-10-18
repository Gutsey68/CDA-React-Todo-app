import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import Todo from './Todo';
import TodoFooter from './TodoFooter';

function TodoList() {
    const { getTodos } = useContext(TodoContext);
    const todos = getTodos();

    return (
        <div className="rounded-t-lg flex flex-col gap-2 pt-2 bg-white dark:bg-gray-800">
            {todos.map(todo => (
                <>
                    <Todo key={todo.id} title={todo.title} IsCompleted={todo.IsCompleted} />
                    <hr className="border-gray-300 dark:border-gray-700" />
                </>
            ))}
            <TodoFooter />
        </div>
    );
}
export default TodoList;
