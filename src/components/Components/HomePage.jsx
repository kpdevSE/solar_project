import React, { useState, useEffect } from 'react';
import { Sun, Zap, Leaf, Shield, ArrowRight, Star, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function HomePage()
{
    const [isVisible, setIsVisible] = useState(false);
    const [counters, setCounters] = useState({
        projects: 0,
        customers: 0,
        capacity: 0,
        experience: 0
    });

    useEffect(() =>
    {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    useEffect(() =>
    {
        setIsVisible(true);

        // Animate counters
        const animateCounter = (target, key, suffix = '') =>
        {
            let current = 0;
            const increment = target / 100;
            const timer = setInterval(() =>
            {
                current += increment;
                if (current >= target)
                {
                    current = target;
                    clearInterval(timer);
                }
                setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
            }, 20);
        };

        setTimeout(() =>
        {
            animateCounter(500, 'projects');
            animateCounter(1000, 'customers');
            animateCounter(15, 'capacity');
            animateCounter(10, 'experience');
        }, 500);
    }, []);

    const features = [
        {
            icon: TrendingUp,
            title: "Save Money",
            description: "Reduce your electricity bills by up to 90% with our efficient solar systems",
            color: "yellow",
            gradient: "from-yellow-400 to-orange-500"
        },
        {
            icon: Leaf,
            title: "Eco-Friendly",
            description: "Reduce your carbon footprint and contribute to a cleaner environment",
            color: "green",
            gradient: "from-green-400 to-emerald-500"
        },
        {
            icon: Shield,
            title: "Reliable",
            description: "25-year warranty on all installations with proven reliability",
            color: "blue",
            gradient: "from-blue-400 to-cyan-500"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 min-h-screen flex items-center">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-white/10 to-transparent rounded-full animate-pulse delay-1000"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                    <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 hover:bg-white/30 transition-all duration-300">
                            <Star className="h-5 w-5 text-yellow-200 mr-2" />
                            <span className="text-white font-medium">Trusted by 1000+ customers</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                            Power Your Future with{' '}
                            <span className="bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent animate-pulse">
                                Solar Energy
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
                            Join thousands of satisfied customers who have made the switch to clean,
                            renewable solar energy. Save money while saving the planet.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                size="lg"
                                className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 group"
                            >
                                Get Free Quote
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className=" text-orange-800  px-8 py-6 text-lg  rounded-xl bg-white "
                            >
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Floating sun animation */}
                <div className="absolute top-20 right-20 animate-bounce">
                    <Sun className="h-16 w-16 text-yellow-200 opacity-60" />
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`text-center mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                            Why Choose Solar Energy?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover the benefits of switching to solar power for your home or business
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-white/70 backdrop-blur-sm hover:bg-white transform hover:scale-105 hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                style={{ transitionDelay: `${400 + index * 100}ms` }}
                            >
                                <CardContent className="p-8 text-center">
                                    <div className={`relative mb-6 mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                                        <feature.icon className="h-10 w-10 text-white" />
                                        <div className="absolute inset-0 bg-white/20 rounded-2xl animate-ping opacity-0 group-hover:opacity-100"></div>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-10"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { value: counters.projects, suffix: '+', label: 'Projects Completed', icon: Zap },
                            { value: counters.customers, suffix: '+', label: 'Happy Customers', icon: Star },
                            { value: counters.capacity, suffix: 'MW', label: 'Total Capacity Installed', icon: Sun },
                            { value: counters.experience, suffix: '+', label: 'Years Experience', icon: Shield }
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className={`text-center group transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                style={{ transitionDelay: `${600 + index * 100}ms` }}
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <stat.icon className="h-8 w-8 text-white" />
                                </div>
                                <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text mb-2">
                                    {stat.value}{stat.suffix}
                                </div>
                                <div className="text-gray-300 text-lg">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Go Solar?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Get a personalized quote today and start saving on your energy bills
                    </p>
                    <Button
                        size="lg"
                        className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-6 text-xl font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
                    >
                        Start Your Solar Journey
                    </Button>
                </div>
            </section>
        </div>
    );
}