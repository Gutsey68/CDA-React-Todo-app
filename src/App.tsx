import BackGround from './components/BackGround';
import MainPage from './components/MainPage';
import { DarkModeProvider } from './context/DarkModeContext';
import { TodoProvider } from './context/TodoContext';

function App() {
    return (
        <DarkModeProvider>
            <TodoProvider>
                <main className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 relative z-10 flex md:items-center justify-center">
                    <MainPage />
                    <BackGround />
                </main>
            </TodoProvider>
        </DarkModeProvider>
    );
}

export default App;
