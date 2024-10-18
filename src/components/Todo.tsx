import { useState } from 'react';
import CheckBox from './CheckBox';

type TodoProps = {
    title: string;
    IsCompleted: boolean;
};

function Todo({ title, IsCompleted = false }: TodoProps) {
    const [isCompleted, setIsCompleted] = useState(IsCompleted);

    const handleClick = () => {
        setIsCompleted(!isCompleted);
    };

    return (
        <div onClick={handleClick} className="bg-white dark:bg-gray-800 py-4 dark:text-gray-200 flex items-center gap-4 px-4 cursor-pointer">
            <CheckBox isCompleted={isCompleted} />
            <p className={isCompleted ? 'line-through' : ''}>{title}</p>
        </div>
    );
}
export default Todo;
