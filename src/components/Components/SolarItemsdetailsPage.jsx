import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Shield, Truck, ArrowLeft, Sparkles, Battery, Cpu, Sun, Zap, CheckCircle, Award, Clock, Gauge } from 'lucide-react';

export default function ModernItemDetails()
{
    const [isVisible, setIsVisible] = useState(false);
    const [activeImage, setActiveImage] = useState(0);

    useEffect(() =>
    {
        setIsVisible(true);
    }, []);

    // Sample item data - you can replace this with props or state management
    const item = {
        id: 1,
        name: "SolarMax Pro 400W Panel",
        category: "Solar Panels",
        price: 299.99,
        originalPrice: 349.99,
        rating: 4.8,
        reviews: 156,
        images: [
            "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
        ],
        features: ["400W High Efficiency", "25 Year Warranty", "Monocrystalline", "Weather Resistant", "Easy Installation"],
        inStock: true,
        badge: "Best Seller",
        description: "Premium monocrystalline solar panel with industry-leading efficiency and durability. Perfect for residential and commercial installations. This advanced solar panel features cutting-edge technology that maximizes energy conversion while maintaining exceptional longevity.",
        specifications: {
            "Power Output": "400W",
            "Efficiency": "22.1%",
            "Dimensions": "2008 × 1002 × 35mm",
            "Weight": "22.5 kg",
            "Cell Type": "Mono PERC",
            "Frame": "Anodized Aluminum",
            "Operating Temperature": "-40°C to +85°C",
            "Maximum System Voltage": "1500V DC"
        },
        warranty: "25 Years Performance, 12 Years Product",
        certifications: ["IEC 61215", "IEC 61730", "UL 1703", "CE", "RoHS"],
        highlights: [
            { icon: Gauge, title: "High Performance", description: "22.1% efficiency rating for maximum power generation" },
            { icon: Shield, title: "Long Warranty", description: "25-year performance warranty with 12-year product coverage" },
            { icon: CheckCircle, title: "Certified Quality", description: "Multiple international certifications and standards" },
            { icon: Award, title: "Premium Build", description: "Monocrystalline cells with anodized aluminum frame" }
        ],
        icon: Sun
    };

    const renderStars = (rating) =>
    {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
        ));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <Button
                        variant="ghost"
                        className="text-white hover:bg-white/10 mb-6 transition-all duration-300"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Store
                    </Button>

                    <div className={`flex items-center gap-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl">
                            <item.icon className="h-8 w-8 text-blue-300" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                                {item.name}
                            </h1>
                            <p className="text-blue-200 text-xl">{item.category}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image Section */}
                    <div className={`space-y-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                            <img
                                src={item.images[activeImage]}
                                alt={item.name}
                                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                            {item.badge && (
                                <Badge className={`absolute top-6 left-6 text-white font-semibold px-4 py-2 ${item.badge === "Best Seller" ? "bg-gradient-to-r from-red-500 to-red-600" :
                                    item.badge === "New" ? "bg-gradient-to-r from-green-500 to-green-600" :
                                        item.badge === "10% Off" ? "bg-gradient-to-r from-orange-500 to-orange-600" :
                                            "bg-gradient-to-r from-blue-500 to-blue-600"
                                    }`}>
                                    {item.badge}
                                </Badge>
                            )}

                            {/* Stock Status */}
                            <div className="absolute top-6 right-6">
                                <Badge className={`${item.inStock ? 'bg-green-500' : 'bg-red-500'} text-white font-semibold px-4 py-2`}>
                                    {item.inStock ? 'In Stock' : 'Out of Stock'}
                                </Badge>
                            </div>
                        </div>

                        {/* Thumbnail Gallery */}
                        <div className="grid grid-cols-4 gap-4">
                            {item.images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`aspect-square rounded-xl overflow-hidden border-2 cursor-pointer transition-all duration-300 ${activeImage === index
                                        ? 'border-blue-500 ring-2 ring-blue-200 shadow-lg'
                                        : 'border-gray-200 hover:border-blue-300'
                                        }`}
                                    onClick={() => setActiveImage(index)}
                                >
                                    <img
                                        src={image}
                                        alt={`${item.name} view ${index + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className={`space-y-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        {/* Rating and Reviews */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                {renderStars(item.rating)}
                                <span className="text-lg font-semibold text-gray-700">{item.rating}</span>
                            </div>
                            <div className="text-gray-500">
                                ({item.reviews} reviews)
                            </div>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-4">
                            <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                ${item.price}
                            </span>
                            {item.originalPrice && (
                                <>
                                    <span className="text-2xl text-gray-500 line-through">
                                        ${item.originalPrice}
                                    </span>
                                    <Badge className="bg-green-100 text-green-800 font-semibold">
                                        Save ${(item.originalPrice - item.price).toFixed(2)}
                                    </Badge>
                                </>
                            )}
                        </div>

                        {/* Description */}
                        <div className="prose max-w-none">
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>

                        {/* Key Benefits */}
                        <div className="flex items-center gap-8 text-sm">
                            <div className="flex items-center gap-2 text-green-600">
                                <Shield className="w-5 h-5" />
                                <span className="font-medium">{item.warranty}</span>
                            </div>
                            <div className="flex items-center gap-2 text-blue-600">
                                <Truck className="w-5 h-5" />
                                <span className="font-medium">Free Shipping</span>
                            </div>
                            <div className="flex items-center gap-2 text-purple-600">
                                <Clock className="w-5 h-5" />
                                <span className="font-medium">Fast Delivery</span>
                            </div>
                        </div>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {item.highlights.map((highlight, index) => (
                                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white/70 backdrop-blur-sm">
                                    <CardContent className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg">
                                                <highlight.icon className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">{highlight.title}</h4>
                                                <p className="text-sm text-gray-600">{highlight.description}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Detailed Information Tabs */}
                <div className={`mt-16 space-y-8 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    {/* Key Features */}
                    <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <div className="p-2 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg">
                                    <Sparkles className="w-6 h-6 text-blue-600" />
                                </div>
                                Key Features
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {item.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3 group">
                                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Technical Specifications */}
                    <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <div className="p-2 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg">
                                    <Cpu className="w-6 h-6 text-green-600" />
                                </div>
                                Technical Specifications
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {Object.entries(item.specifications).map(([key, value], index) => (
                                    <div key={key} className="flex justify-between items-center py-3 px-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg hover:from-blue-50 hover:to-indigo-50 transition-colors duration-300">
                                        <span className="font-semibold text-gray-700">{key}</span>
                                        <span className="text-gray-900 font-medium">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Certifications */}
                    <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl">
                                <div className="p-2 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg">
                                    <Award className="w-6 h-6 text-purple-600" />
                                </div>
                                Certifications & Standards
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-3">
                                {item.certifications.map((cert, index) => (
                                    <Badge
                                        key={index}
                                        variant="outline"
                                        className="px-4 py-2 text-sm font-medium border-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white hover:border-transparent transition-all duration-300 cursor-default"
                                    >
                                        {cert}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}