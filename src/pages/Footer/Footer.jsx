
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className='container flex justify-between mx-auto py-6'>
            <p className='text-sm'>© 2023 Flowbite™. All Rights Reserved.</p>
            <nav className='flex gap-4'>
                <Link to='/about'>About</Link>
                <Link to='/policy'>Privacy Policy</Link>
                <Link to='/licensing'>Licensing</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </footer>
    );
};

export default Footer;