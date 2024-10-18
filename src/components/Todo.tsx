import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import CheckBox from './CheckBox';

type TodoProps = {
    id: number;
    title: string;
    IsCompleted: boolean;
};

function Todo({ id, title, IsCompleted = false }: TodoProps) {
    const { toggleTodoCompletion } = useContext(TodoContext);

    const handleClick = () => {
        toggleTodoCompletion(id);
    };

    return (
        <div onClick={handleClick} className="bg-white dark:bg-gray-800 py-4 dark:text-gray-200 flex items-center gap-4 px-4 cursor-pointer group">
            <CheckBox isCompleted={IsCompleted} />
            <p className={IsCompleted ? 'line-through' : ''}>{title}</p>
        </div>
    );
}
export default Todo;
