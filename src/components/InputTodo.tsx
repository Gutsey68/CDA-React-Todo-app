import { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import CheckBox from './CheckBox';

function InputTodo() {
    const [isCompleted, setIsCompleted] = useState(false);
    const { addTodo } = useContext(TodoContext);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submit');
        const target = e.target as HTMLInputElement;
        addTodo(target.value);
    };

    const handleClick = () => {
        setIsCompleted(!isCompleted);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 py-4 rounded-lg flex items-center gap-4 px-4">
            <CheckBox isCompleted={isCompleted} onClick={handleClick} />
            <input className="bg-white dark:bg-gray-800 text-white text outline-none" type="text" />
        </form>
    );
}
export default InputTodo;
