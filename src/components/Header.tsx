import ThemeToggle from './ThemeToggle';

function Header() {
    return (
        <header className="flex justify-between items-center">
            <h1 className="text-white text-2xl tracking-widest font-semibold">TODO</h1>
            <ThemeToggle />
        </header>
    );
}
export default Header;
