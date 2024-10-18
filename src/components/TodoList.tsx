import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import Todo from './Todo';
import TodoFooter from './TodoFooter';

function TodoList() {
    const { todos } = useContext(TodoContext);

    return (
        <div className="rounded-lg flex flex-col gap-2 pt-2 bg-white dark:bg-gray-800">
            {todos.map(todo => (
                <div key={todo.id}>
                    <Todo id={todo.id} title={todo.title} IsCompleted={todo.IsCompleted} />
                    <hr className="border-gray-300 dark:border-gray-700" />
                </div>
            ))}
            <TodoFooter />
        </div>
    );
}
export default TodoList;
