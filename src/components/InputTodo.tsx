import { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import CheckBox from './CheckBox';

function InputTodo() {
    const [isCompleted, setIsCompleted] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const { addTodo, updateTodosCompleted } = useContext(TodoContext);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo(inputValue, isCompleted);
        setInputValue('');
    };

    const handleClick = () => {
        setIsCompleted(!isCompleted);
        updateTodosCompleted();
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 py-4 rounded-lg flex items-center gap-4 px-4">
            <CheckBox onClick={handleClick} isCompleted={isCompleted} />
            <input
                className="bg-white dark:bg-gray-800 dark:text-white text-gray-900 text outline-none w-full"
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
        </form>
    );
}
export default InputTodo;
