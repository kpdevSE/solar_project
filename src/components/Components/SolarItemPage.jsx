import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Zap, Shield, Truck, Filter, Search, Heart, Eye, ArrowRight, Sparkles, Battery, Cpu, Sun, ShoppingBag, Info, CheckCircle, Wrench, FileText, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ModernItemsStore()
{
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    useEffect(() =>
    {
        setIsVisible(true);
    }, []);

    const solarItems = [
        {
            id: 1,
            name: "SolarMax Pro 400W Panel",
            category: "Solar Panels",
            price: 299.99,
            originalPrice: 349.99,
            rating: 4.8,
            reviews: 156,
            image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop"
            ],
            features: ["400W High Efficiency", "25 Year Warranty", "Monocrystalline"],
            inStock: true,
            badge: "Best Seller",
            description: "Premium monocrystalline solar panel with industry-leading efficiency and durability.",
            icon: Sun,
            detailedSpecs: {
                "Power Output": "400W",
                "Efficiency": "22.8%",
                "Cell Type": "Monocrystalline PERC",
                "Dimensions": "2094 × 1038 × 35 mm",
                "Weight": "22.5 kg",
                "Frame Material": "Anodized Aluminum",
                "Glass Type": "3.2mm Tempered Glass",
                "Junction Box": "IP68 Rated",
                "Cable Length": "1200mm",
                "Connector Type": "MC4 Compatible"
            },
            warranty: "25-year product warranty, 25-year linear power warranty",
            installation: "Suitable for roof-mount and ground-mount installations. Professional installation recommended.",
            maintenance: "Minimal maintenance required. Regular cleaning recommended for optimal performance."
        },
        {
            id: 2,
            name: "PowerInverter 5000W",
            category: "Inverters",
            price: 899.99,
            originalPrice: 999.99,
            rating: 4.6,
            reviews: 89,
            image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
            ],
            features: ["Pure Sine Wave", "MPPT Technology", "LCD Display"],
            inStock: true,
            badge: "10% Off",
            description: "Advanced pure sine wave inverter with MPPT charge controller for maximum efficiency.",
            icon: Zap,
            detailedSpecs: {
                "Continuous Power": "5000W",
                "Peak Power": "10000W",
                "Input Voltage": "48V DC",
                "Output Voltage": "120V/240V AC",
                "Efficiency": "95%",
                "Wave Form": "Pure Sine Wave",
                "Display": "LCD with Backlight",
                "Cooling": "Temperature Controlled Fan",
                "Protection": "Over/Under Voltage, Over Current, Short Circuit",
                "Dimensions": "520 × 270 × 145 mm"
            },
            warranty: "5-year manufacturer warranty with optional extended coverage",
            installation: "Wall-mount installation with adequate ventilation required. Certified electrician recommended.",
            maintenance: "Check connections quarterly, clean air vents monthly, monitor performance via LCD display."
        },
        {
            id: 3,
            name: "EcoCharge Battery 100Ah",
            category: "Batteries",
            price: 459.99,
            originalPrice: null,
            rating: 4.9,
            reviews: 203,
            image: "https://images.unsplash.com/photo-1609191352607-dd12845cc60c?w=600&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1609191352607-dd12845cc60c?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=800&h=600&fit=crop"
            ],
            features: ["Lithium Ion", "10 Year Lifespan", "Fast Charging"],
            inStock: true,
            badge: "New",
            description: "High-capacity lithium-ion battery with advanced BMS protection and exceptional cycle life.",
            icon: Battery,
            detailedSpecs: {
                "Capacity": "100Ah (1280Wh)",
                "Chemistry": "LiFePO4 (Lithium Iron Phosphate)",
                "Voltage": "12.8V",
                "Cycle Life": "6000+ cycles at 80% DOD",
                "Max Charge Current": "100A",
                "Max Discharge Current": "100A",
                "Operating Temperature": "-20°C to 60°C",
                "Dimensions": "330 × 172 × 220 mm",
                "Weight": "13.5 kg",
                "BMS Protection": "Built-in"
            },
            warranty: "10-year warranty with 6000+ cycle guarantee",
            installation: "Drop-in replacement for lead-acid batteries. No ventilation required.",
            maintenance: "Maintenance-free operation. Built-in BMS handles cell balancing automatically."
        },
        {
            id: 4,
            name: "SmartCharge Controller MPPT 60A",
            category: "Controllers",
            price: 189.99,
            originalPrice: 219.99,
            rating: 4.7,
            reviews: 124,
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
            ],
            features: ["MPPT Technology", "Bluetooth Monitoring", "IP67 Rated"],
            inStock: true,
            badge: null,
            description: "Intelligent MPPT charge controller with Bluetooth connectivity for optimal energy harvesting.",
            icon: Cpu,
            detailedSpecs: {
                "Max Current": "60A",
                "System Voltage": "12V/24V Auto",
                "Max PV Voltage": "150V",
                "Max PV Power": "800W (12V), 1600W (24V)",
                "Efficiency": "98%",
                "Tracking Efficiency": "99.5%",
                "Connectivity": "Bluetooth 5.0",
                "Display": "LCD with Backlight",
                "Protection Rating": "IP67",
                "Operating Temperature": "-35°C to 60°C"
            },
            warranty: "5-year manufacturer warranty",
            installation: "Wall-mount with proper ventilation. Mobile app setup required for Bluetooth.",
            maintenance: "Check connections semi-annually. Firmware updates available via mobile app."
        },
        {
            id: 5,
            name: "SolarGrid Micro Inverter 300W",
            category: "Micro Inverters",
            price: 149.99,
            originalPrice: null,
            rating: 4.5,
            reviews: 67,
            image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop"
            ],
            features: ["Plug & Play", "25 Year Warranty", "Weather Resistant"],
            inStock: false,
            badge: null,
            description: "Compact micro inverter for individual panel optimization with plug-and-play installation.",
            icon: Zap,
            detailedSpecs: {
                "Max AC Power": "300W",
                "Max DC Input": "400W",
                "Efficiency": "96.5%",
                "Output Voltage": "240V AC",
                "Grid Frequency": "50/60Hz",
                "Operating Temperature": "-40°C to 65°C",
                "Protection Rating": "IP67",
                "Dimensions": "175 × 110 × 30 mm",
                "Weight": "0.7 kg",
                "Monitoring": "Power Line Communication"
            },
            warranty: "25-year product warranty with monitoring included",
            installation: "Plug-and-play installation under each solar panel. Requires compatible monitoring system.",
            maintenance: "Maintenance-free operation with remote monitoring capabilities."
        },
        {
            id: 6,
            name: "FlexPanel Portable 200W",
            category: "Portable Panels",
            price: 329.99,
            originalPrice: 379.99,
            rating: 4.4,
            reviews: 91,
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop"
            ],
            features: ["Foldable Design", "Waterproof", "USB Outputs"],
            inStock: true,
            badge: "Portable",
            description: "Ultra-portable foldable solar panel perfect for camping, RV travel, and emergency backup.",
            icon: Sun,
            detailedSpecs: {
                "Power Output": "200W",
                "Efficiency": "23%",
                "Folded Size": "540 × 540 × 50 mm",
                "Unfolded Size": "2160 × 540 × 25 mm",
                "Weight": "5.2 kg",
                "Material": "ETFE Laminated",
                "Waterproof Rating": "IP65",
                "USB Outputs": "2× USB-A, 1× USB-C PD",
                "DC Output": "18V/11.1A",
                "Kickstands": "Adjustable Angle"
            },
            warranty: "2-year warranty with travel case included",
            installation: "No installation required. Unfold, position, and connect devices.",
            maintenance: "Clean surface with damp cloth when needed. Store in included carrying case."
        },
        {
            id: 7,
            name: "PowerBank Solar 20000mAh",
            category: "Accessories",
            price: 79.99,
            originalPrice: 99.99,
            rating: 4.3,
            reviews: 245,
            image: "https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=600&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=800&h=600&fit=crop"
            ],
            features: ["Wireless Charging", "Solar Panel", "LED Flashlight"],
            inStock: true,
            badge: "Popular",
            description: "High-capacity solar power bank with wireless charging and emergency features.",
            icon: Battery,
            detailedSpecs: {
                "Capacity": "20000mAh (74Wh)",
                "Solar Panel": "5W Monocrystalline",
                "Input": "USB-C PD 18W, Micro-USB 12W",
                "Output": "USB-A 22.5W, USB-C PD 20W",
                "Wireless Charging": "15W Qi Compatible",
                "LED Flashlight": "3 Modes + SOS",
                "Water Resistance": "IPX6",
                "Dimensions": "168 × 85 × 25 mm",
                "Weight": "450g",
                "Display": "LED Power Indicator"
            },
            warranty: "18-month warranty with 24/7 customer support",
            installation: "Ready to use out of box. Charge via solar or USB before first use.",
            maintenance: "Keep solar panel clean for optimal charging. Recharge monthly if not in use."
        },
        {
            id: 8,
            name: "SolarTracker Mount System",
            category: "Mounting",
            price: 1299.99,
            originalPrice: null,
            rating: 4.6,
            reviews: 78,
            image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop"
            ],
            features: ["Dual Axis Tracking", "Weather Resistant", "Remote Control"],
            inStock: true,
            badge: "Professional",
            description: "Advanced dual-axis solar tracking system for maximum energy capture throughout the day.",
            icon: Sun,
            detailedSpecs: {
                "Tracking Type": "Dual-axis (Azimuth + Elevation)",
                "Panel Capacity": "Up to 8 panels (3200W)",
                "Tracking Range": "±120° Azimuth, ±60° Elevation",
                "Motor Type": "Linear Actuator with Encoder",
                "Control System": "GPS + Astronomical Algorithm",
                "Wind Rating": "150 km/h Survival",
                "Foundation": "Concrete Pier (included)",
                "Remote Control": "WiFi + Mobile App",
                "Power Consumption": "<50W",
                "Materials": "Galvanized Steel + Aluminum"
            },
            warranty: "10-year structural warranty, 5-year electronics warranty",
            installation: "Professional installation required. Concrete foundation and electrical connection needed.",
            maintenance: "Annual inspection recommended. Lubricate moving parts every 2 years."
        }
    ];

    const categories = [
        { name: "All", icon: Sparkles, count: solarItems.length },
        { name: "Solar Panels", icon: Sun, count: solarItems.filter(item => item.category === "Solar Panels").length },
        { name: "Inverters", icon: Zap, count: solarItems.filter(item => item.category === "Inverters").length },
        { name: "Batteries", icon: Battery, count: solarItems.filter(item => item.category === "Batteries").length },
        { name: "Controllers", icon: Cpu, count: solarItems.filter(item => item.category === "Controllers").length },
        { name: "Micro Inverters", icon: Zap, count: solarItems.filter(item => item.category === "Micro Inverters").length },
        { name: "Portable Panels", icon: Sun, count: solarItems.filter(item => item.category === "Portable Panels").length },
        { name: "Accessories", icon: Battery, count: solarItems.filter(item => item.category === "Accessories").length },
        { name: "Mounting", icon: Sun, count: solarItems.filter(item => item.category === "Mounting").length }
    ];

    const filteredItems = solarItems.filter(item =>
    {
        const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.category.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const openProductDetails = (product) =>
    {
        setSelectedProduct(product);
        setIsDetailsOpen(true);
    };

    const ProductDetailsDialog = ({ product, isOpen, onClose }) =>
    {
        const [selectedImageIndex, setSelectedImageIndex] = useState(0);
        const [isClosing, setIsClosing] = useState(false);
        const [activeTab, setActiveTab] = useState('specifications');

        useEffect(() =>
        {
            if (isOpen)
            {
                document.body.style.overflow = 'hidden';
            } else
            {
                document.body.style.overflow = 'unset';
            }
            return () =>
            {
                document.body.style.overflow = 'unset';
            };
        }, [isOpen]);

        const handleClose = () =>
        {
            setIsClosing(true);
            setTimeout(() =>
            {
                setIsClosing(false);
                onClose();
            }, 300); // Match this with the animation duration
        };

        // Handle escape key
        useEffect(() =>
        {
            const handleEscape = (e) =>
            {
                if (e.key === 'Escape' && isOpen)
                {
                    handleClose();
                }
            };
            window.addEventListener('keydown', handleEscape);
            return () => window.removeEventListener('keydown', handleEscape);
        }, [isOpen]);

        if (!product || !isOpen) return null;

        return (
            <>
                {/* Backdrop with blur effect */}
                <div
                    className={`fixed inset-0 bg-black/60 backdrop-blur-md z-50 transition-all duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'
                        }`}
                    onClick={handleClose}
                />

                {/* Modal */}
                <div
                    className={`fixed inset-0 z-50 transition-all duration-300 ${isClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                        }`}
                >
                    {/* Responsive container */}
                    <div className="h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-8 xl:p-0">
                        <div className="w-full h-[95vh] sm:h-[90vh] md:h-[85vh] xl:h-screen max-w-[90rem] xl:max-w-none rounded-2xl sm:rounded-3xl xl:rounded-none my-0 xl:my-0">
                            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl xl:rounded-none border border-gray-200/50 shadow-xl sm:shadow-2xl xl:shadow-none overflow-hidden h-full flex flex-col xl:flex-row backdrop-blur-xl">
                                {/* Modern Close Button */}
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 backdrop-blur-md hover:bg-white shadow-lg border border-gray-200/50 transition-all hover:scale-110"
                                    onClick={handleClose}
                                >
                                    <X className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                                </Button>

                                {/* Left Section - Image Gallery */}
                                <div className="relative w-full xl:w-1/2 flex flex-col bg-gradient-to-br from-gray-50 to-gray-100/50 h-[40vh] sm:h-[45vh] md:h-[50vh] xl:h-full">
                                    {/* Main Image */}
                                    <div className="relative flex-1 min-h-[200px] sm:min-h-[250px] md:min-h-[300px] xl:min-h-0 bg-white/50 backdrop-blur-sm h-full">
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/5" />
                                        <img
                                            src={product.images?.[selectedImageIndex] || product.image}
                                            alt={product.name}
                                            className="w-full h-full object-contain p-4 sm:p-6 md:p-8 xl:p-12 transition-transform duration-500 hover:scale-105"
                                        />

                                        {/* Badge */}
                                        {product.badge && (
                                            <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-10">
                                                <Badge className={`
                                                    px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold shadow-lg backdrop-blur-md border-0 rounded-full
                                                    ${product.badge === "Best Seller"
                                                        ? "bg-gradient-to-r from-red-500 via-pink-500 to-rose-500"
                                                        : product.badge === "New"
                                                            ? "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"
                                                            : product.badge === "10% Off"
                                                                ? "bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500"
                                                                : "bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500"
                                                    } text-white
                                                `}>
                                                    {product.badge}
                                                </Badge>
                                            </div>
                                        )}

                                        {/* Mobile Navigation */}
                                        {product.images?.length > 1 && (
                                            <>
                                                <button
                                                    onClick={() => setSelectedImageIndex(prev => prev > 0 ? prev - 1 : product.images.length - 1)}
                                                    className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center xl:hidden hover:bg-white transition-all hover:scale-110 border border-gray-200/50"
                                                >
                                                    <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
                                                </button>
                                                <button
                                                    onClick={() => setSelectedImageIndex(prev => prev < product.images.length - 1 ? prev + 1 : 0)}
                                                    className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center xl:hidden hover:bg-white transition-all hover:scale-110 border border-gray-200/50"
                                                >
                                                    <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
                                                </button>
                                            </>
                                        )}

                                        {/* Mobile Dots */}
                                        {product.images?.length > 1 && (
                                            <div className="xl:hidden absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
                                                {product.images.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => setSelectedImageIndex(index)}
                                                        className={`
                                                            w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300
                                                            ${selectedImageIndex === index
                                                                ? 'bg-white shadow-lg scale-125'
                                                                : 'bg-white/50 hover:bg-white/80'
                                                            }
                                                        `}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Desktop Thumbnails */}
                                    {product.images?.length > 1 && (
                                        <div className="hidden xl:flex gap-4 p-6 bg-white/80 backdrop-blur-md border-t border-gray-200/50">
                                            {product.images.map((img, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setSelectedImageIndex(index)}
                                                    className={`
                                                        w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all duration-300
                                                        ${selectedImageIndex === index
                                                            ? 'border-blue-500 ring-4 ring-blue-100 shadow-lg scale-105'
                                                            : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                                                        }
                                                    `}
                                                >
                                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Right Section - Product Details */}
                                <div className="flex-1 overflow-y-auto bg-white/80 backdrop-blur-sm h-[55vh] sm:h-[45vh] md:h-[35vh] xl:h-screen">
                                    <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 h-full">
                                        {/* Header */}
                                        <div className="space-y-3 sm:space-y-4">
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
                                                    <product.icon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                                                </div>
                                                <div>
                                                    <span className="text-xs sm:text-sm font-medium text-gray-500">{product.category}</span>
                                                    <h1 className="text-xl sm:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                                        {product.name}
                                                    </h1>
                                                </div>
                                            </div>
                                            <p className="text-sm sm:text-base xl:text-lg text-gray-600 leading-relaxed">
                                                {product.description}
                                            </p>
                                        </div>

                                        {/* Stock Status */}
                                        <div className={`
                                            inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm
                                            ${product.inStock
                                                ? 'bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border border-green-200'
                                                : 'bg-gradient-to-r from-red-50 to-rose-50 text-red-700 border border-red-200'
                                            }
                                        `}>
                                            <CheckCircle className={`h-4 w-4 sm:h-5 sm:w-5 ${product.inStock ? 'text-green-500' : 'text-red-500'}`} />
                                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                                        </div>

                                        {/* Features */}
                                        <div className="space-y-3 sm:space-y-4">
                                            <h3 className="text-base sm:text-lg xl:text-xl font-semibold text-gray-900">Key Features</h3>
                                            <div className="grid grid-cols-1 gap-2 sm:gap-3">
                                                {product.features.map((feature, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100/50 hover:from-gray-100 hover:to-gray-200/50 transition-all duration-300"
                                                    >
                                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-1.5 sm:mt-2" />
                                                        <span className="text-xs sm:text-sm xl:text-base text-gray-700">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4">
                                            <Button
                                                className="flex-1 h-10 sm:h-12 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:via-indigo-700 hover:to-violet-700 text-white text-sm sm:text-base font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-blue-500/25 hover:scale-[1.02]"
                                                disabled={!product.inStock}
                                            >
                                                Contact for Quote
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="w-full sm:w-12 h-10 sm:h-12 rounded-xl border-2 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                                            >
                                                <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                                                <span className="sm:hidden ml-2 text-sm">Wishlist</span>
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Tabs */}
                                    <div className="border-t border-gray-200/50 bg-gradient-to-b from-white to-gray-50/50">
                                        <div className="flex overflow-x-auto scrollbar-hide">
                                            {[
                                                ['specifications', FileText, 'Specifications', 'Specs'],
                                                ['warranty', Shield, 'Warranty', 'Warranty'],
                                                ['installation', Wrench, 'Installation', 'Install'],
                                                ['maintenance', Info, 'Maintenance', 'Care'],
                                            ].map(([val, Icon, label, shortLabel]) => (
                                                <button
                                                    key={val}
                                                    onClick={() => setActiveTab(val)}
                                                    className={`
                                                        flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium whitespace-nowrap
                                                        transition-all duration-300 border-b-2
                                                        ${activeTab === val
                                                            ? 'border-blue-500 text-blue-600 bg-blue-50/50'
                                                            : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50/50'
                                                        }
                                                    `}
                                                >
                                                    <Icon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${activeTab === val ? 'text-blue-500' : 'text-gray-500'}`} />
                                                    <span className="hidden sm:inline">{label}</span>
                                                    <span className="sm:hidden">{shortLabel}</span>
                                                </button>
                                            ))}
                                        </div>

                                        {/* Tab Content */}
                                        <div className="p-4 sm:p-6 xl:p-8">
                                            {activeTab === 'specifications' && (
                                                <div className="grid gap-4">
                                                    {Object.entries(product.detailedSpecs || {}).map(([key, value]) => (
                                                        <div key={key} className="flex justify-between py-3 border-b border-gray-100 last:border-none">
                                                            <span className="font-medium text-gray-800 text-sm xl:text-base">{key}</span>
                                                            <span className="text-gray-600 text-right text-sm xl:text-base">{value}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {['warranty', 'installation', 'maintenance'].map((tab) =>
                                            {
                                                if (activeTab !== tab) return null;
                                                const [Icon, title, color] = {
                                                    warranty: [Shield, 'Warranty Coverage', 'emerald'],
                                                    installation: [Wrench, 'Installation Requirements', 'blue'],
                                                    maintenance: [Info, 'Maintenance Guidelines', 'amber']
                                                }[tab];

                                                return (
                                                    <div key={tab} className={`bg-gradient-to-r from-${color}-50 to-${color}-100/50 border border-${color}-200/50 rounded-2xl p-6`}>
                                                        <div className="flex items-start gap-4">
                                                            <div className={`w-12 h-12 bg-${color}-100 rounded-xl flex items-center justify-center`}>
                                                                <Icon className={`h-6 w-6 text-${color}-600`} />
                                                            </div>
                                                            <div>
                                                                <h4 className={`font-semibold text-${color}-900 mb-3 text-lg`}>{title}</h4>
                                                                <p className={`text-${color}-800 text-base leading-relaxed`}>
                                                                    {product[tab]}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
                            <ShoppingBag className="h-5 w-5 text-blue-300 mr-2" />
                            <span className="text-white/90 font-medium">Premium Solar Equipment Store</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                            Solar Solutions
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
                            Discover premium solar panels, inverters, batteries, and accessories to power your sustainable energy journey with cutting-edge technology
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto relative mb-8">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                type="text"
                                placeholder="Search solar equipment, brands, or categories..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                            />
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-2">{solarItems.length}+</div>
                                <div className="text-white/70">Products</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-2">25+</div>
                                <div className="text-white/70">Years Warranty</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-2">98%</div>
                                <div className="text-white/70">Efficiency</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                                <div className="text-white/70">Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 bg-white/70 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`flex flex-wrap justify-center gap-3 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        {categories.map((category, index) =>
                        {
                            const IconComponent = category.icon;
                            return (
                                <Button
                                    key={category.name}
                                    variant={selectedCategory === category.name ? "default" : "outline"}
                                    onClick={() => setSelectedCategory(category.name)}
                                    className={`
                                        px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-sm
                                        ${selectedCategory === category.name
                                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-blue-500/25 border-0'
                                            : 'bg-white/80 text-gray-700 hover:bg-white border-gray-300 hover:border-blue-400 hover:shadow-md'
                                        }
                                    `}
                                >
                                    <IconComponent className="h-4 w-4" />
                                    {category.name}
                                    <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${selectedCategory === category.name ? 'bg-white/20' : 'bg-gray-100'
                                        }`}>
                                        {category.count}
                                    </span>
                                </Button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Results Header */}
                    <div className={`flex justify-between items-center mb-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">
                                {selectedCategory === 'All' ? 'All Products' : selectedCategory}
                            </h2>
                            <p className="text-gray-600 mt-1">
                                {filteredItems.length} {filteredItems.length === 1 ? 'product' : 'products'} found
                                {searchTerm && ` for "${searchTerm}"`}
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Button variant="outline" size="sm" className="flex items-center gap-2">
                                <Filter className="h-4 w-4" />
                                Filter
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredItems.map((item, index) => (
                            <Card
                                key={item.id}
                                className={`
                                    group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl 
                                    transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer
                                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                                `}
                                style={{ transitionDelay: `${600 + index * 100}ms` }}
                                onMouseEnter={() => setHoveredItem(item.id)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Badges */}
                                    <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
                                        {item.badge && (
                                            <Badge className={`${item.badge === "Best Seller" ? "bg-gradient-to-r from-red-500 to-red-600" :
                                                item.badge === "New" ? "bg-gradient-to-r from-green-500 to-green-600" :
                                                    item.badge === "10% Off" ? "bg-gradient-to-r from-orange-500 to-orange-600" :
                                                        "bg-gradient-to-r from-blue-500 to-blue-600"
                                                } text-white font-medium shadow-lg`}>
                                                {item.badge}
                                            </Badge>
                                        )}
                                        {!item.inStock && (
                                            <Badge className="bg-gray-500 text-white font-medium">
                                                Out of Stock
                                            </Badge>
                                        )}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ${hoveredItem === item.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                                        }`}>
                                        <Button size="sm" variant="secondary" className="w-9 h-9 p-0 rounded-full bg-white/90 hover:bg-white shadow-lg">
                                            <Heart className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="secondary"
                                            className="w-9 h-9 p-0 rounded-full bg-white/90 hover:bg-white shadow-lg"
                                            onClick={() => openProductDetails(item)}
                                        >
                                            <Eye className="h-4 w-4" />
                                        </Button>
                                    </div>

                                    {/* Quick Stats Overlay */}
                                    <div className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${hoveredItem === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                        }`}>
                                        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="font-semibold text-gray-700">Stock Status</span>
                                                <div className="flex items-center gap-1">
                                                    <CheckCircle className={`h-3 w-3 ${item.inStock ? 'text-green-500' : 'text-red-500'}`} />
                                                    <span className={`font-bold text-xs ${item.inStock ? 'text-green-700' : 'text-red-700'}`}>
                                                        {item.inStock ? 'Available' : 'Out of Stock'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <CardHeader className="pb-3">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                                                {item.name}
                                            </CardTitle>
                                            <CardDescription className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                                                <item.icon className="h-4 w-4" />
                                                {item.category}
                                            </CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent className="pt-0">
                                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                        {item.description}
                                    </p>

                                    <div className="space-y-2 mb-4">
                                        {item.features.slice(0, 2).map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                        {item.features.length > 2 && (
                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                                                <span>+{item.features.length - 2} more features</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                                        <div className="flex items-center gap-1">
                                            <Shield className="w-4 h-4 text-blue-500" />
                                            <span>Warranty</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Truck className="w-4 h-4 text-green-500" />
                                            <span>Free Ship</span>
                                        </div>
                                    </div>
                                </CardContent>

                                <CardFooter className="pt-0">
                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                                {item.category}
                                            </span>
                                        </div>
                                        <Button
                                            size="sm"
                                            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 group/btn shadow-lg"
                                            onClick={() => openProductDetails(item)}
                                            disabled={!item.inStock}
                                        >
                                            {item.inStock ? "View Details" : "Out of Stock"}
                                            <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    {filteredItems.length === 0 && (
                        <div className="text-center py-16">
                            <div className="text-gray-400 mb-4">
                                <Search className="h-16 w-16 mx-auto mb-4" />
                                <h3 className="text-2xl font-semibold text-gray-600 mb-4">No items found</h3>
                                <p className="text-gray-500 max-w-md mx-auto text-lg">
                                    {searchTerm
                                        ? `No items match your search "${searchTerm}". Try different keywords or browse all categories.`
                                        : "No items available in this category. Please try another category."}
                                </p>
                            </div>
                            <Button
                                variant="outline"
                                onClick={() =>
                                {
                                    setSearchTerm('');
                                    setSelectedCategory('All');
                                }}
                                className="mt-6 px-6 py-3"
                            >
                                <Filter className="h-4 w-4 mr-2" />
                                Clear All Filters
                            </Button>
                        </div>
                    )}
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Solar Equipment?</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Premium quality, cutting-edge technology, and unmatched support for your solar journey
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Shield, title: "Quality Guaranteed", description: "Industry-leading warranties and certified products" },
                            { icon: Truck, title: "Free Shipping", description: "Fast and secure delivery on all orders over $500" },
                            { icon: Sparkles, title: "Latest Technology", description: "Cutting-edge solar solutions with maximum efficiency" },
                            { icon: Sun, title: "Expert Support", description: "24/7 technical support from solar specialists" }
                        ].map((feature, index) => (
                            <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm text-center group hover:shadow-xl transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Details Dialog */}
            <ProductDetailsDialog
                product={selectedProduct}
                isOpen={isDetailsOpen}
                onClose={() => setIsDetailsOpen(false)}
            />
        </div>
    );
} 