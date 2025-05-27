import { Sun, Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Clock, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ContactUsPage()
{
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);

    useEffect(() =>
    {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    const serviceAreas = [
        { city: "Austin", state: "Texas", popular: true },
        { city: "Phoenix", state: "Arizona", popular: true },
        { city: "Denver", state: "Colorado", popular: false },
        { city: "San Antonio", state: "Texas", popular: false },
        { city: "Dallas", state: "Texas", popular: true },
        { city: "Houston", state: "Texas", popular: true },
        { city: "Tucson", state: "Arizona", popular: false },
        { city: "Colorado Springs", state: "Colorado", popular: false }
    ];

    return (
        <div className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Animated Header */}
            <section className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white py-24">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-transparent animate-pulse"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                            <Sun className="h-5 w-5 animate-spin" />
                            <span className="text-sm font-medium">Solar Solutions</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                            Let's Connect
                        </h1>
                        <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                            Ready to harness the power of the sun? Our expert team is here to guide you through every step of your solar journey
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                <Phone className="h-5 w-5 mr-2" />
                                Call Now
                            </Button>
                            <Button size="lg" variant="outline" className=" text-green-600  bg-white hover:bg-white">
                                <Mail className="h-5 w-5 mr-2" />
                                Send Email
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Details */}
                        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                            <div className="mb-12">
                                <Badge variant="outline" className="mb-4 text-emerald-600 border-emerald-200">
                                    Get In Touch
                                </Badge>
                                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                    We're Here to Help
                                </h2>
                                <p className="text-lg text-gray-600">
                                    Reach out to our friendly team for personalized solar solutions
                                </p>
                            </div>

                            <div className="space-y-8">
                                {[
                                    {
                                        icon: Phone,
                                        title: "Phone",
                                        lines: ["Main: (555) 123-4567", "Emergency: (555) 123-4568"],
                                        color: "emerald"
                                    },
                                    {
                                        icon: Mail,
                                        title: "Email",
                                        lines: ["info@solartech-solutions.com", "support@solartech-solutions.com"],
                                        color: "blue"
                                    },
                                    {
                                        icon: MapPin,
                                        title: "Address",
                                        lines: ["123 Solar Street", "Green City, GC 12345", "United States"],
                                        color: "purple"
                                    }
                                ].map((item, index) => (
                                    <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg bg-white/70 backdrop-blur-sm">
                                        <CardContent className="p-6">
                                            <div className="flex items-start">
                                                <div className={`bg-gradient-to-br from-${item.color}-100 to-${item.color}-200 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300`}>
                                                    <item.icon className={`h-6 w-6 text-${item.color}-600`} />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                                                    {item.lines.map((line, i) => (
                                                        <p key={i} className="text-gray-600 hover:text-emerald-600 transition-colors cursor-pointer">
                                                            {line}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* Office Hours */}
                            <Card className="mt-12 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-emerald-800">
                                        <Clock className="h-5 w-5" />
                                        Office Hours
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {[
                                            { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM", highlight: true },
                                            { day: "Saturday", hours: "9:00 AM - 4:00 PM", highlight: false },
                                            { day: "Sunday", hours: "Closed", highlight: false }
                                        ].map((schedule, i) => (
                                            <div key={i} className={`flex justify-between items-center p-3 rounded-lg transition-colors ${schedule.highlight ? 'bg-emerald-100' : 'hover:bg-white/50'}`}>
                                                <span className={`font-medium ${schedule.highlight ? 'text-emerald-800' : 'text-gray-700'}`}>
                                                    {schedule.day}
                                                </span>
                                                <span className={`${schedule.highlight ? 'text-emerald-700 font-semibold' : 'text-gray-600'}`}>
                                                    {schedule.hours}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Interactive Map */}
                        <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                            <div className="mb-8">
                                <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
                                    Location
                                </Badge>
                                <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
                            </div>

                            <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-blue-50 to-indigo-100">
                                <CardContent className="p-0">
                                    <div className="relative h-96 bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 flex items-center justify-center group cursor-pointer overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse"></div>
                                        <div className="text-center z-10 transform group-hover:scale-110 transition-transform duration-500">
                                            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30">
                                                <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4 animate-bounce" />
                                                <p className="text-lg font-semibold text-gray-800 mb-2">Interactive Map</p>
                                                <p className="text-gray-600">123 Solar Street</p>
                                                <p className="text-gray-600">Green City, GC 12345</p>
                                                <Button className="mt-4 bg-blue-600 hover:bg-blue-700" size="sm">
                                                    Get Directions
                                                    <ArrowRight className="h-4 w-4 ml-2" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`text-center mb-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <Badge variant="outline" className="mb-4 text-indigo-600 border-indigo-200">
                            Coverage Area
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            We Serve Your Area
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Proudly providing solar solutions across multiple states and growing every day
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {serviceAreas.map((area, index) => (
                            <Card
                                key={index}
                                className={`group cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-0 shadow-lg bg-white/80 backdrop-blur-sm ${hoveredCard === index ? 'ring-2 ring-emerald-500' : ''}`}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                    animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                                }}
                            >
                                <CardContent className="p-6 text-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {area.popular && (
                                        <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg">
                                            Popular
                                        </Badge>
                                    )}

                                    <div className="relative z-10">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                                            {area.city}
                                        </h3>
                                        <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                                            {area.state}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                            View All Service Areas
                            <ArrowRight className="h-5 w-5 ml-2" />
                        </Button>
                    </div>
                </div>
            </section>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}