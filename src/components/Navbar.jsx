import { useState } from 'react';
import { NAVIGATION_LINKS } from '../constants';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';

export default function Navbar() {
    // state for mobile
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // function to toggle mobile menu
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    // function handle scroll to section on click
    const handleClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.getElementById(href);
        if (targetElement) {
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <div>
            <nav className='fixed left-0 right-0 top-4 z-50'>
                {/* desktop */}
                <div
                    className='mx-auto hidden max-w-2xl items-center justify-center rounded-lg 
                border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex'
                >
                    <div className='flex items-center justify-between gap-6'>
                        <div>
                            <a href='#'>
                                <span className='font-bold font-playfair text-3xl italic tracking-widest'>
                                    d<span className='text-yellow-400'>H</span>uy
                                </span>
                            </a>
                        </div>
                        <div>
                            <ul className='flex items-center gap-4'>
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className='text-sm hover:text-yellow-400'
                                            onClick={(e) => handleClick(e, item.href)}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* mobile */}
                <div className='rounded-lg backdrop-blur-md lg:hidden'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <a href='#'>
                                <span className='font-medium pl-2 font-playfair text-3xl italic tracking-widest'>
                                    d<span className='text-yellow-500'>H</span>uy
                                </span>
                            </a>
                        </div>
                        <div className='flex items-center'>
                            <button
                                className='focus:outline-none lg:hidden'
                                onClick={toggleMobileMenu}
                            >
                                {isMobileMenuOpen ? (
                                    <FaTimes className='m-2 h-6 w-5' />
                                ) : (
                                    <FaBars className='m-2 h-6 w-5' />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* mobile menu */}
                {isMobileMenuOpen && (
                    <div className='py-2 rounded-lg backdrop-blur-md lg:hidden'>
                        <ul className='flex flex-col items-center gap-4'>
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className='font-medium'
                                        onClick={(e) => handleClick(e, item.href)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
}
