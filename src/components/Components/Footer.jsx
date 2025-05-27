import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Sun, Twitter } from "lucide-react";

export default function Footer()
{
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center mb-4">
                            <Sun className="h-8 w-8 text-yellow-500 mr-2" />
                            <span className="text-xl font-bold">SolarTech Solutions</span>
                        </div>
                        <p className="text-gray-300 mb-4">
                            Leading provider of solar energy solutions, helping families and businesses
                            transition to clean, renewable energy for a sustainable future.
                        </p>
                        <div className="flex space-x-4">
                            <Facebook className="h-6 w-6 text-gray-300 hover:text-yellow-500 cursor-pointer" />
                            <Twitter className="h-6 w-6 text-gray-300 hover:text-yellow-500 cursor-pointer" />
                            <Instagram className="h-6 w-6 text-gray-300 hover:text-yellow-500 cursor-pointer" />
                            <Linkedin className="h-6 w-6 text-gray-300 hover:text-yellow-500 cursor-pointer" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-yellow-500">Home</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-yellow-500">Projects</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-yellow-500">About Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-yellow-500">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <Phone className="h-4 w-4 mr-2 text-yellow-500" />
                                <span className="text-gray-300">(555) 123-4567</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="h-4 w-4 mr-2 text-yellow-500" />
                                <span className="text-gray-300">info@solartech.com</span>
                            </div>
                            <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2 text-yellow-500" />
                                <span className="text-gray-300">123 Solar St, Green City</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-300">
                        © 2024 SolarTech Solutions. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};