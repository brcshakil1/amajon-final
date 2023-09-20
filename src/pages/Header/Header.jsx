import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="shadow-lg">
            <nav className="flex justify-between container mx-auto py-5">
                <h3 className="text-2xl font-bold">AmaJohn</h3>
                <ul className="flex gap-4">
                    <NavLink className='px-2' to='/'>Home</NavLink>
                    <NavLink className='px-2' to='/products'>Products</NavLink>
                    <NavLink className='px-2' to='/dashboard'>Dashboard</NavLink>
                </ul>
            </nav>

        </header>
    );
};

export default Header;