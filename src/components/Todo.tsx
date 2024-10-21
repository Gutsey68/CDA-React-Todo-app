import { GripVertical } from 'lucide-react';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import CheckBox from './CheckBox';

type TodoProps = {
    id: number;
    title: string;
    IsCompleted: boolean;
    index: number;
};

function Todo({ id, title, IsCompleted = false, index }: TodoProps) {
    const { toggleTodoCompletion, reorderTodos } = useContext(TodoContext);

    const handleClick = () => {
        toggleTodoCompletion(id);
    };

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('text/plain', index.toString());
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        const startIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
        reorderTodos(startIndex, index);
    };

    return (
        <div draggable onDragStart={handleDragStart} onDragOver={handleDragOver} className="flex items-center w-full pr-4">
            <div
                onDrop={handleDrop}
                onClick={handleClick}
                className="w-full bg-white dark:bg-gray-800 py-4 dark:text-gray-200 flex items-center gap-4 px-4 cursor-pointer group"
            >
                <CheckBox isCompleted={IsCompleted} />
                <p className={IsCompleted ? 'line-through' : ''}>{title}</p>
            </div>
            <GripVertical className="dark:text-gray-200 cursor-grab" />
        </div>
    );
}

export default Todo;
