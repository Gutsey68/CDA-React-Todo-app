import { createContext, ReactNode, useEffect, useState } from 'react';

interface Todo {
    id: number;
    title: string;
    IsCompleted: boolean;
}

interface TodoContextType {
    todos: Todo[];
    addTodo: (title: string, isCompleted: boolean) => void;
    deleteTodo: (id: number) => void;
    getTodos: () => Todo[];
    updateTodosCompleted: () => void;
    toggleTodoCompletion: (id: number) => void;
    todosCompleted: number;
    deleteAllCompleted: () => void;
}

export const TodoContext = createContext<TodoContextType>({
    todos: [],
    addTodo: () => {},
    deleteTodo: () => {},
    getTodos: () => [],
    updateTodosCompleted: () => {},
    toggleTodoCompletion: () => {},
    todosCompleted: 0,
    deleteAllCompleted: () => {}
});

export const TodoProvider = ({ children }: { children: ReactNode }) => {
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, title: 'Learn React', IsCompleted: false },
        { id: 2, title: 'Learn TypeScript', IsCompleted: false },
        { id: 3, title: 'Learn Tailwind CSS', IsCompleted: false }
    ]);
    const [todosCompleted, setTodosCompeted] = useState(0);

    useEffect(() => {
        updateTodosCompleted();
    }, [todos]);

    const updateTodosCompleted = () => {
        const numberCompleted = todos.filter(todo => todo.IsCompleted === false).length;
        setTodosCompeted(numberCompleted);
    };

    const addTodo = (title: string, IsCompleted: boolean) => {
        const newTodo = {
            id: todos.length + 1,
            title,
            IsCompleted
        };
        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleTodoCompletion = (id: number) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, IsCompleted: !todo.IsCompleted } : todo)));
    };

    const getTodos = () => {
        return todos;
    };

    const deleteAllCompleted = () => {
        setTodos(todos.filter(todo => todo.IsCompleted === false));
    };

    return (
        <TodoContext.Provider
            value={{
                todos,
                addTodo,
                deleteTodo,
                getTodos,
                updateTodosCompleted,
                toggleTodoCompletion,
                todosCompleted,
                deleteAllCompleted
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};
