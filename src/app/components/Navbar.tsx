
"use client";
import Image from "next/image";
import DarkModeToggle from "../utilities/DarkMode";
import MyLogo from '../styles/logos/J.MLogo.png';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";



const Navbar: React.FC = () => {

    // expandable breadcrumbs
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    const navbarItems: Array<String> = [
        'Skills',
        'Experience',
        'Projects',
        'Contact Me'
    ];

    return (
        <div className="flex justify-between items-center mt-10">
            <Image
                className="ml-10 object-contain"
                src={MyLogo}
                alt="J.M"
                width={100}
                height={100}
            />
            {/* Desktop Navbar */}
            <div className="hidden md:flex flex-row">
                {navbarItems.map((item, index) => (
                    <a 
                    className="m-6 mr-6 p-4 hover:bg-gray-200 hover:bg-opacity-50 dark:hover:bg-white dark:hover:bg-opacity-30 hover:rounded-lg" 
                    href="#" 
                    key={index}>
                        {item}
                    </a>
                    
                    ))}
                    <div className="mt-9 ml-10">
                        <DarkModeToggle />
                    </div>
            </div>
            {/* Mobile Menu */}
            <div className="md:hidden flex">
                <button
                    onClick={toggleMenu}
                    className="mr-10"
                >
                    {isOpen ? (
                        // X Mark when the menu is open
                        <FontAwesomeIcon icon={faClose} size="2x" />
                    ) : (
                        // Hamburger Icon
                        <>
                            <span className="block w-6 h-1 bg-black dark:bg-white mb-1"></span>
                            <span className="block w-6 h-1 bg-black dark:bg-white mb-1"></span>
                            <span className="block w-6 h-1 bg-black dark:bg-white"></span>
                        </>
                    )}
                </button>
                {isOpen && (
                    <div className={`absolute mt-10 border bg-white dark:bg-gray-800 rounded-md transition-transform transform ${isOpen ? "scale-y-100" : "scale-y-0"}`}>
                        {navbarItems.map((item, index) => (
                            <a className="block p-2 pr-10" href="#" key={index}>
                                {item}
                            </a>
                        ))}
                    </div>
                )}
                <DarkModeToggle />

            </div>
        </div>
    )
};


export default Navbar;