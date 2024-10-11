
"use client";
import Image from "next/image";
import DarkModeToggle from "../utilities/DarkMode";
import MyLogo from '../styles/logos/J.MLogo.png';



const Navbar: React.FC = () => {


    const navbarItems: Array<String> = [
        'Skills',
        'Experience',
        'Projects',
        'Contact Me'
    ];

    return (
        <div className="flex justify-between">
            <Image
                className="ml-10 object-contain"
                src={MyLogo}
                alt="J.M"
                width={100}
                height={100}
            />
            <div className="flex flex-row justify-end text-black dark:text-white">
                {navbarItems.map((item, index) => <a className="p-10 pr-10" href="#" key={index}>{item}</a>)}
                <DarkModeToggle></DarkModeToggle>
            </div>
        </div>
    )
};


export default Navbar;