'use client'
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Equilibradores.es</h1>

            {/*<div className="sm:hidden">*/}
            <div>
                <button 
                    type="button" 
                    className="p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" 
                    aria-expanded="false" 
                    onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <AiOutlineClose className="h-6 w-6"/> : <AiOutlineMenu className="h-6 w-6"/>}
                </button>
            </div>

            <nav className={`flex flex-col sm:flex-row ${isOpen ? 'block' : 'hidden'}`}>
                <a href="#" className="mt-2 sm:mt-0 text-gray-900 hover:underline sm:mx-3">Inicio</a>
                <a href="#" className="mt-2 sm:mt-0 text-gray-900 hover:underline sm:mx-3">Servicios</a>
                <a href="#" className="mt-2 sm:mt-0 text-gray-900 hover:underline sm:mx-3">Contacto</a>
            </nav>
        </div>
    </header>
    );
}

export { Header }