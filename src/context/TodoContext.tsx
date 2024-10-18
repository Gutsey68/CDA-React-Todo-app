import { createContext, ReactNode } from 'react';

export const TodoContext = createContext({
    todos: [],
    addTodo: (title: string) => {},
    deleteTodo: (id: number) => {},
    getTodos: () => {}
});

export const TodoProvider = ({ children }: { children: ReactNode }) => {
    const todos = [
        { id: 1, title: 'Learn React', IsCompleted: false },
        { id: 2, title: 'Learn TypeScript', IsCompleted: false },
        { id: 3, title: 'Learn Tailwind CSS', IsCompleted: false }
    ];

    const addTodo = (title: string) => {
        const newTodo = {
            id: todos.length + 1,
            title,
            IsCompleted: false
        };
        todos.push(newTodo);
    };

    const deleteTodo = (id: number) => {
        const index = todos.findIndex(todo => todo.id === id);
        todos.splice(index, 1);
    };

    const getTodos = () => {
        return todos;
    };

    return (
        <TodoContext.Provider
            value={{
                addTodo,
                deleteTodo,
                getTodos
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};
