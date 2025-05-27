import React, { useState, useEffect } from 'react';
import { ChevronUp, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const FloatingButtons = () =>
{
    const [isVisible, setIsVisible] = useState(false);

    // Show/hide buttons based on scroll position
    useEffect(() =>
    {
        const toggleVisibility = () =>
        {
            if (window.pageYOffset > 300)
            {
                setIsVisible(true);
            } else
            {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Scroll to top function
    const scrollToTop = () =>
    {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Placeholder function for WhatsApp integration
    const handleMessageClick = () =>
    {
        // You can integrate your WhatsApp functionality here
        console.log('Message button clicked - integrate WhatsApp here');
    };

    return (
        <>
            <TooltipProvider>
                <div className={`fixed bottom-8 right-8 flex flex-col gap-4 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                    }`}>

                    {/* Go to Top Button */}
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                onClick={scrollToTop}
                                size="icon"
                                className="group relative w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:ring-4 focus:ring-blue-300"
                                aria-label="Go to top"
                            >
                                <ChevronUp
                                    size={24}
                                    className="transition-transform duration-300 group-hover:-translate-y-1"
                                />

                                {/* Pulse animation */}
                                <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20"></div>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="left" className="bg-gray-900 text-white">
                            <p>Go to Top</p>
                        </TooltipContent>
                    </Tooltip>

                    {/* Message/WhatsApp Button */}
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <a
                                href="https://wa.me/94715644565"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center justify-center w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50"
                                aria-label="Chat on WhatsApp"
                            >
                                <MessageCircle
                                    size={24}
                                    className="transition-transform duration-300 group-hover:rotate-12 z-10"
                                />

                                {/* Pulse animation on hover */}
                                <div className="absolute inset-0 rounded-full bg-green-500 opacity-0 group-hover:opacity-30 group-hover:animate-ping transition-opacity duration-300"></div>

                                {/* Subtle bounce effect */}
                                <div className="absolute inset-0 rounded-full bg-green-600 animate-pulse opacity-20"></div>
                            </a>
                        </TooltipTrigger>
                        <TooltipContent side="left" className="bg-gray-900 text-white border border-gray-700">
                            <p className="font-medium">Chat on WhatsApp</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
            </TooltipProvider>
        </>
    );
};

export default FloatingButtons;