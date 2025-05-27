import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import
{
    Target,
    Eye,
    Users,
    Award,
    Zap,
    Leaf,
    Star,
    ArrowRight,
    CheckCircle
} from 'lucide-react';

export default function AboutUsPage()
{
    const [isVisible, setIsVisible] = useState({});
    const [stats, setStats] = useState({ projects: 0, years: 0, customers: 0 });

    useEffect(() =>
    {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    useEffect(() =>
    {
        // Animate counters
        const animateCounter = (target, key, duration = 2000) =>
        {
            const start = 0;
            const increment = target / (duration / 16);
            let current = 0;

            const timer = setInterval(() =>
            {
                current += increment;
                if (current >= target)
                {
                    current = target;
                    clearInterval(timer);
                }
                setStats(prev => ({ ...prev, [key]: Math.floor(current) }));
            }, 16);
        };

        // Start animations with delays
        setTimeout(() => animateCounter(500, 'projects'), 500);
        setTimeout(() => animateCounter(10, 'years'), 700);
        setTimeout(() => animateCounter(1200, 'customers'), 900);

        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver(
            (entries) =>
            {
                entries.forEach((entry) =>
                {
                    if (entry.isIntersecting)
                    {
                        setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('[data-animate]').forEach((el) =>
        {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const teamMembers = [
        {
            name: "John Smith",
            role: "CEO & Founder",
            description: "15+ years in renewable energy with a passion for sustainable solutions",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
            expertise: ["Leadership", "Strategy", "Renewable Energy"]
        },
        {
            name: "Sarah Johnson",
            role: "Chief Technology Officer",
            description: "Expert in solar technology and system design with 12+ years experience",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
            expertise: ["Solar Tech", "System Design", "Innovation"]
        },
        {
            name: "Mike Davis",
            role: "Lead Installation Engineer",
            description: "Certified solar installer with over 300 successful project completions",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
            expertise: ["Installation", "Engineering", "Quality Control"]
        }
    ];

    const achievements = [
        { icon: Award, label: "Industry Awards", value: "12+" },
        { icon: CheckCircle, label: "Projects Completed", value: stats.projects + "+" },
        { icon: Users, label: "Happy Customers", value: stats.customers + "+" },
        { icon: Leaf, label: "Years Experience", value: stats.years + "+" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="animate-fade-in-up">
                        <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all duration-300">
                            <Zap className="w-4 h-4 mr-2" />
                            Pioneering Solar Innovation
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text animate-fade-in-up [animation-delay:200ms]">
                            SolarTech Solutions
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 animate-fade-in-up [animation-delay:400ms]">
                            Transforming the future of renewable energy with cutting-edge solar solutions
                        </p>
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 animate-fade-in-up [animation-delay:600ms] group">
                            Discover Our Story
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
                <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float [animation-delay:1s]"></div>
                <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float [animation-delay:2s]"></div>
            </section>

            {/* Stats Section */}
            <section className="relative -mt-16 mb-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {achievements.map((achievement, index) => (
                            <Card key={index} className="text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                <CardContent className="pt-6">
                                    <achievement.icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                                    <div className="text-2xl font-bold text-gray-800 mb-1">{achievement.value}</div>
                                    <div className="text-sm text-gray-600">{achievement.label}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section
                id="story"
                data-animate
                className={`py-20 transition-all duration-1000 ${isVisible.story ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <Badge variant="outline" className="text-blue-600 border-blue-200">
                                <Star className="w-4 h-4 mr-2" />
                                Our Journey
                            </Badge>
                            <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                                A Decade of Solar Excellence
                            </h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    Founded in 2014, SolarTech Solutions began with a revolutionary vision: to democratize
                                    clean energy access. From our humble beginnings as a passionate team of engineers,
                                    we've evolved into the region's most trusted solar installation company.
                                </p>
                                <p>
                                    Our journey spans over 500 successful projects, each one bringing us closer to our
                                    goal of sustainable energy adoption. We've helped countless families and businesses
                                    slash their carbon footprint while achieving significant cost savings.
                                </p>
                                <p>
                                    Today, we continue pushing technological boundaries, delivering state-of-the-art
                                    solutions that maximize efficiency and provide exceptional long-term value.
                                </p>
                            </div>
                            <Button variant="outline" className="group">
                                Learn More About Our Impact
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
                            <img
                                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&h=400&fit=crop"
                                alt="Solar installation team"
                                className="relative w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section
                id="mission"
                data-animate
                className={`py-20 bg-gradient-to-r from-gray-50 to-blue-50 transition-all duration-1000 ${isVisible.mission ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="text-blue-600 border-blue-200 mb-4">
                            <Target className="w-4 h-4 mr-2" />
                            Our Purpose
                        </Badge>
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Mission & Vision</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Driving the renewable energy revolution with purpose and innovation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-blue-50 border-0">
                            <CardHeader className="text-center pb-4">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Target className="w-8 h-8 text-white" />
                                </div>
                                <CardTitle className="text-2xl text-gray-800">Our Mission</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-center leading-relaxed">
                                    To accelerate the world's transition to sustainable energy by providing
                                    high-quality, affordable solar solutions that empower individuals and
                                    businesses to take control of their energy future.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-indigo-50 border-0">
                            <CardHeader className="text-center pb-4">
                                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <Eye className="w-8 h-8 text-white" />
                                </div>
                                <CardTitle className="text-2xl text-gray-800">Our Vision</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-center leading-relaxed">
                                    A world powered entirely by clean, renewable energy where every home and
                                    business has access to affordable solar power, contributing to a sustainable
                                    and prosperous future for all.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section
                id="team"
                data-animate
                className={`py-20 transition-all duration-1000 ${isVisible.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <Badge variant="outline" className="text-blue-600 border-blue-200 mb-4">
                            <Users className="w-4 h-4 mr-2" />
                            Leadership Team
                        </Badge>
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Experts</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Passionate professionals dedicated to delivering exceptional solar solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white border-0 overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="p-6 text-center">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                                        <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.description}</p>
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {member.expertise.map((skill, skillIndex) => (
                                                <Badge key={skillIndex} variant="secondary" className="text-xs">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                    opacity: 0;
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}