import Header from './Header';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

function MainPage() {
    return (
        <main className="w-[94%] h-[94%] md:w-[540px] md:h-[800px] m-auto flex flex-col gap-4">
            <Header />
            <InputTodo />
            <TodoList />
            <p className="font-medium text-gray-800 dark:text-gray-400 text-center mt-10">Drag and drop to reorder list</p>
        </main>
    );
}
export default MainPage;
