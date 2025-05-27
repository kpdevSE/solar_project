import { Menu, MenuIcon, Sun, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({ currentPage, setCurrentPage }) 
{
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'Projects', id: 'projects' },
        { name: 'About Us', id: 'about' },
        { name: 'Contact', id: 'contact' },
        { name: "Items", id: "Items" }
    ];

    return (
        <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Sun className="h-8 w-8 text-yellow-500 mr-2" />
                        <span className="text-xl font-bold text-gray-800">SolarTech Solutions</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setCurrentPage(item.id)}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentPage === item.id
                                        ? 'bg-yellow-500 text-white'
                                        : 'text-gray-700 hover:text-yellow-500 hover:bg-gray-100'
                                        }`}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-yellow-500"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() =>
                                {
                                    setCurrentPage(item.id);
                                    setIsMenuOpen(false);
                                }}
                                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${currentPage === item.id
                                    ? 'bg-yellow-500 text-white'
                                    : 'text-gray-700 hover:text-yellow-500 hover:bg-gray-100'
                                    }`}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};