import React, { useState, useEffect } from 'react';
import { MapPin, Zap, Calendar, ArrowRight, Building, Home, Users, Eye, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function ProjectsPage({ setCurrentPage, setSelectedProject })
{
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredProject, setHoveredProject] = useState(null);
    const [filterType, setFilterType] = useState('all');

    useEffect(() =>
    {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    useEffect(() =>
    {
        setIsVisible(true);
    }, []);

    const projectsData = [
        {
            id: 1,
            title: "Residential Solar Installation - Johnson Family",
            image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop",
            location: "Austin, TX",
            capacity: "8.5 kW",
            description: "Complete rooftop solar installation for a 3-bedroom home, reducing energy costs by 85%.",
            completedDate: "March 2024",
            type: "residential",
            icon: Home,
            gradient: "from-blue-500 to-cyan-500",
            savings: "$2,400/year",
            panels: 24,
            details: "This project involved installing 24 high-efficiency solar panels on a south-facing roof. The system includes a Tesla Powerwall for energy storage and smart monitoring capabilities. The installation was completed in just 2 days with minimal disruption to the family."
        },
        {
            id: 2,
            title: "Commercial Solar Farm - GreenTech Industries",
            image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop",
            location: "Phoenix, AZ",
            capacity: "250 kW",
            description: "Large-scale commercial solar installation for manufacturing facility.",
            completedDate: "January 2024",
            type: "commercial",
            icon: Building,
            gradient: "from-green-500 to-emerald-500",
            savings: "$45,000/year",
            panels: 750,
            details: "A comprehensive solar solution for GreenTech Industries' manufacturing facility. The installation features 750 premium solar panels with advanced tracking systems to maximize energy production throughout the day. This project reduces the company's carbon footprint by 300 tons of CO2 annually."
        },
        {
            id: 3,
            title: "Community Solar Project - Sunset Village",
            image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
            location: "Denver, CO",
            capacity: "150 kW",
            description: "Shared solar installation serving 45 households in a residential community.",
            completedDate: "November 2023",
            type: "community",
            icon: Users,
            gradient: "from-purple-500 to-pink-500",
            savings: "$54,000/year",
            panels: 450,
            details: "This innovative community solar project serves 45 homes in Sunset Village. The centralized solar array is connected to a smart grid system that distributes clean energy to participating households. Each family saves an average of $1,200 annually on their electricity bills."
        }
    ];

    const filteredProjects = filterType === 'all'
        ? projectsData
        : projectsData.filter(project => project.type === filterType);

    const filterOptions = [
        { value: 'all', label: 'All Projects', count: projectsData.length },
        { value: 'residential', label: 'Residential', count: projectsData.filter(p => p.type === 'residential').length },
        { value: 'commercial', label: 'Commercial', count: projectsData.filter(p => p.type === 'commercial').length },
        { value: 'community', label: 'Community', count: projectsData.filter(p => p.type === 'community').length }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Header Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-24 overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
                    <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                            <Eye className="h-5 w-5 text-blue-300 mr-2" />
                            <span className="text-white/90 font-medium">Portfolio Showcase</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                            Our Solar Projects
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                            Explore our portfolio of successful solar installations across residential,
                            commercial, and community projects that are powering the future.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-12 bg-white/70 backdrop-blur-sm border-b border-gray-200/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`flex flex-wrap justify-center gap-4 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        {filterOptions.map((option, index) => (
                            <Button
                                key={option.value}
                                variant={filterType === option.value ? "default" : "outline"}
                                onClick={() => setFilterType(option.value)}
                                className={`
                                    px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105
                                    ${filterType === option.value
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-blue-500/25'
                                        : 'bg-white/80 text-gray-700 hover:bg-white border-gray-300 hover:border-blue-400'
                                    }
                                `}
                            >
                                {option.label}
                                <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                                    {option.count}
                                </span>
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <Card
                                key={project.id}
                                className={`
                                    group relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl 
                                    transition-all duration-500 transform hover:scale-105 hover:-translate-y-2
                                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                                `}
                                style={{ transitionDelay: `${400 + index * 100}ms` }}
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                {/* Image Section */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Project Type Badge */}
                                    <div className={`absolute top-4 left-4 bg-gradient-to-r ${project.gradient} text-white px-3 py-1 rounded-full text-sm font-medium flex items-center`}>
                                        <project.icon className="h-4 w-4 mr-1" />
                                        {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                                    </div>

                                    {/* Hover overlay with quick stats */}
                                    <div className={`absolute inset-0 bg-black/70 flex items-center justify-center transition-all duration-300 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                        <div className="text-center text-white p-4">
                                            <div className="grid grid-cols-2 gap-4 mb-4">
                                                <div>
                                                    <div className="text-2xl font-bold">{project.panels}</div>
                                                    <div className="text-xs opacity-80">Panels</div>
                                                </div>
                                                <div>
                                                    <div className="text-2xl font-bold">{project.savings}</div>
                                                    <div className="text-xs opacity-80">Annual Savings</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Project Details */}
                                    <div className="space-y-2 mb-6">
                                        <div className="flex items-center text-sm text-gray-500">
                                            <MapPin className="h-4 w-4 mr-2 text-red-500" />
                                            <span>{project.location}</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <Zap className="h-4 w-4 mr-2 text-yellow-500" />
                                            <span>{project.capacity} System Capacity</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                                            <span>Completed {project.completedDate}</span>
                                        </div>
                                    </div>

                                    <Button
                                        onClick={() =>
                                        {
                                            setSelectedProject(project);
                                            setCurrentPage('project-detail');
                                        }}
                                        className={`w-full bg-gradient-to-r ${project.gradient} text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group/btn`}
                                    >
                                        View Project Details
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Start Your Solar Project?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Join our growing portfolio of satisfied customers and start your renewable energy journey today
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300"
                        >
                            Get Your Free Quote
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm rounded-xl"
                        >
                            <ExternalLink className="mr-2 h-5 w-5" />
                            View All Projects
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}