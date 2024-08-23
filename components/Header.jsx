import React from 'react';
import Link from 'next/link';
import {Button} from './ui/Button';


//components
import Nav from './Nav.jsx'; 




const Header = () => {
        return <header className= "py-8 xl:py-12 text-white "   >
                <div className= "container mx-auto flex justify-between items-center"> 
                    {/* LOGO */}
                    <Link href="/">
                    <h1 className= "text-4xl font-semibold">
                        Pol <span className="text-accent">.</span>
                    </h1>
                    </Link>




                    {/* desktop vav & hire me button */}
                    <div className="hidden xl:flex items-center gap-8">
                        <Nav/> 
                        <Link href="/contact">
                            <Button>Hire Me</Button>
                        </Link>
                    </div>

                    {/* mobile nav */}
                    <div className="flex xl:hidden justify-between items-center"> mobile nav </div>

                </div>
            </header>;
};

export default Header;