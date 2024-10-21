import { createContext, ReactNode, useEffect, useState } from 'react';

interface Todo {
    id: number;
    title: string;
    IsCompleted: boolean;
}

interface TodoContextType {
    todos: Todo[];
    displayedTodos: Todo[];
    addTodo: (title: string, isCompleted: boolean) => void;
    deleteTodo: (id: number) => void;
    getTodos: () => Todo[];
    updateTodosCompleted: () => void;
    toggleTodoCompletion: (id: number) => void;
    todosCompleted: number;
    deleteAllCompleted: () => void;
    showCompletedTodos: () => void;
    showAllTodos: () => void;
    reorderTodos: (startIndex: number, endIndex: number) => void;
    showActiveTodos: () => void;
}

export const TodoContext = createContext<TodoContextType>({
    todos: [],
    displayedTodos: [],
    addTodo: () => {},
    deleteTodo: () => {},
    getTodos: () => [],
    updateTodosCompleted: () => {},
    toggleTodoCompletion: () => {},
    todosCompleted: 0,
    deleteAllCompleted: () => {},
    showCompletedTodos: () => {},
    showAllTodos: () => {},
    reorderTodos: () => {},
    showActiveTodos: () => {}
});

export const TodoProvider = ({ children }: { children: ReactNode }) => {
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, title: 'Learn React', IsCompleted: false },
        { id: 2, title: 'Learn TypeScript', IsCompleted: false },
        { id: 3, title: 'Learn Tailwind CSS', IsCompleted: false }
    ]);
    const [displayedTodos, setDisplayedTodos] = useState<Todo[]>(todos);
    const [todosCompleted, setTodosCompeted] = useState(0);

    useEffect(() => {
        updateTodosCompleted();
    }, [todos]);

    const updateTodosCompleted = () => {
        const numberCompleted = todos.filter(todo => todo.IsCompleted).length;
        setTodosCompeted(numberCompleted);
    };

    const addTodo = (title: string, isCompleted: boolean) => {
        const newTodo = {
            id: Math.floor(Math.random() * 1000),
            title,
            IsCompleted: isCompleted
        };
        setTodos([...todos, newTodo]);
        setDisplayedTodos([...todos, newTodo]);
    };

    const deleteTodo = (id: number) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        setDisplayedTodos(updatedTodos);
    };

    const toggleTodoCompletion = (id: number) => {
        const updatedTodos = todos.map(todo => (todo.id === id ? { ...todo, IsCompleted: !todo.IsCompleted } : todo));
        setTodos(updatedTodos);
        setDisplayedTodos(updatedTodos);
    };

    const getTodos = () => {
        return todos;
    };

    const deleteAllCompleted = () => {
        const updatedTodos = todos.filter(todo => !todo.IsCompleted);
        setTodos(updatedTodos);
        setDisplayedTodos(updatedTodos);
    };

    const showCompletedTodos = () => {
        const completedTodos = todos.filter(todo => todo.IsCompleted);
        setDisplayedTodos(completedTodos);
    };

    const showActiveTodos = () => {
        const notCompletedTodos = todos.filter(todo => !todo.IsCompleted);
        setDisplayedTodos(notCompletedTodos);
    };

    const showAllTodos = () => {
        setDisplayedTodos(todos);
    };

    const reorderTodos = (startIndex: number, endIndex: number) => {
        const result = Array.from(todos);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        setTodos(result);
        setDisplayedTodos(result);
    };

    return (
        <TodoContext.Provider
            value={{
                todos,
                displayedTodos,
                addTodo,
                deleteTodo,
                getTodos,
                updateTodosCompleted,
                toggleTodoCompletion,
                todosCompleted,
                deleteAllCompleted,
                showCompletedTodos,
                showAllTodos,
                reorderTodos,
                showActiveTodos
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};
