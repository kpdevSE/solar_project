import React, { useState, useEffect } from 'react';
import { MapPin, ArrowLeft, Calendar, Zap, Users, Home, Building, Leaf, Award, TrendingUp, Sun, Battery, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function ProjectDetailsPage({ project, setCurrentPage })
{
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');
    const [imageLoaded, setImageLoaded] = useState(false);


    useEffect(() =>
    {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);


    useEffect(() =>
    {
        setIsVisible(true);
    }, []);

    if (!project) return null;

    // Enhanced project data with additional details
    const projectStats = [
        {
            icon: Zap,
            label: 'System Capacity',
            value: project.capacity,
            gradient: 'from-yellow-500 to-orange-500'
        },
        {
            icon: project.type === 'residential' ? Home : project.type === 'commercial' ? Building : Users,
            label: 'Project Type',
            value: project.type?.charAt(0).toUpperCase() + project.type?.slice(1) || 'Solar Installation',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            icon: TrendingUp,
            label: 'Annual Savings',
            value: project.savings || '$15,000+',
            gradient: 'from-green-500 to-emerald-500'
        },
        {
            icon: Sun,
            label: 'Solar Panels',
            value: `${project.panels || '50'} Panels`,
            gradient: 'from-purple-500 to-pink-500'
        }
    ];

    const projectFeatures = [
        {
            icon: Battery,
            title: 'Energy Storage',
            description: 'Advanced battery backup system for 24/7 power availability'
        },
        {
            icon: Shield,
            title: '25-Year Warranty',
            description: 'Comprehensive warranty coverage on all components and installation'
        },
        {
            icon: Leaf,
            title: 'Eco-Friendly',
            description: 'Reduces carbon footprint by 15+ tons of CO2 annually'
        },
        {
            icon: Award,
            title: 'Premium Quality',
            description: 'Tier-1 solar panels with maximum efficiency ratings'
        }
    ];

    const tabs = [
        { id: 'overview', label: 'Overview', icon: Sun },
        { id: 'specs', label: 'Specifications', icon: Zap },
        { id: 'features', label: 'Features', icon: Award }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Hero Section with Project Image */}
            <section className="relative h-screen overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full h-full object-cover transition-all duration-1000 ${imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
                        onLoad={() => setImageLoaded(true)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>

                {/* Back Button */}
                <div className="absolute top-24 left-4 sm:left-8 z-20">
                    <Button
                        onClick={() => setCurrentPage('projects')}
                        variant="outline"
                        className={`bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all duration-500 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Projects
                    </Button>
                </div>

                {/* Project Title and Basic Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
                    <div className="max-w-7xl mx-auto">
                        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            {/* Project Type Badge */}
                            <div className={`inline-flex items-center bg-gradient-to-r ${project.gradient || 'from-blue-500 to-cyan-500'} text-white px-4 py-2 rounded-full text-sm font-medium mb-4`}>
                                {project.type === 'residential' && <Home className="h-4 w-4 mr-2" />}
                                {project.type === 'commercial' && <Building className="h-4 w-4 mr-2" />}
                                {project.type === 'community' && <Users className="h-4 w-4 mr-2" />}
                                {project.type?.charAt(0).toUpperCase() + project.type?.slice(1) || 'Solar Project'}
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                {project.title}
                            </h1>

                            <div className="flex flex-wrap gap-6 text-white/90 text-lg">
                                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                                    <MapPin className="h-5 w-5 mr-2 text-red-400" />
                                    {project.location}
                                </div>
                                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                                    <Zap className="h-5 w-5 mr-2 text-yellow-400" />
                                    {project.capacity}
                                </div>
                                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                                    <Calendar className="h-5 w-5 mr-2 text-blue-400" />
                                    {project.completedDate}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white/70 backdrop-blur-sm relative -mt-20 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {projectStats.map((stat, index) => (
                            <Card
                                key={index}
                                className={`group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                style={{ transitionDelay: `${600 + index * 100}ms` }}
                            >
                                <CardContent className="p-6 text-center">
                                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                                        <stat.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <div className="text-2xl font-bold text-gray-800 mb-2">{stat.value}</div>
                                    <div className="text-gray-600">{stat.label}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tab Navigation */}
            <section className="py-4 sm:py-6 lg:py-8 bg-white/50 backdrop-blur-sm border-y border-gray-200/50">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
                    <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        {tabs.map((tab) => (
                            <Button
                                key={tab.id}
                                variant={activeTab === tab.id ? "default" : "outline"}
                                onClick={() => setActiveTab(tab.id)}
                                className={`
                        px-3 py-2 sm:px-4 sm:py-2.5 lg:px-6 lg:py-3 
                        rounded-full font-medium text-sm sm:text-base
                        transition-all duration-300 transform hover:scale-105
                        flex items-center justify-center
                        min-w-0 flex-shrink-0
                        ${activeTab === tab.id
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-blue-500/25'
                                        : 'bg-white/80 text-gray-700 hover:bg-white border-gray-300 hover:border-blue-400'
                                    }
                    `}
                            >
                                <tab.icon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
                                <span className="truncate">{tab.label}</span>
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tab Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Overview Tab */}
                    {activeTab === 'overview' && (
                        <div className={`transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                                    <CardHeader>
                                        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                            Project Overview
                                        </h2>
                                    </CardHeader>
                                    <CardContent className="p-8">
                                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                            {project.details}
                                        </p>

                                        <div className="space-y-4">
                                            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
                                                <h3 className="font-bold text-gray-800 mb-2 flex items-center">
                                                    <Zap className="h-5 w-5 mr-2 text-blue-600" />
                                                    System Capacity
                                                </h3>
                                                <p className="text-gray-700">{project.capacity}</p>
                                            </div>

                                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                                                <h3 className="font-bold text-gray-800 mb-2 flex items-center">
                                                    <MapPin className="h-5 w-5 mr-2 text-green-600" />
                                                    Location
                                                </h3>
                                                <p className="text-gray-700">{project.location}</p>
                                            </div>

                                            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                                                <h3 className="font-bold text-gray-800 mb-2 flex items-center">
                                                    <Calendar className="h-5 w-5 mr-2 text-purple-600" />
                                                    Completion Date
                                                </h3>
                                                <p className="text-gray-700">{project.completedDate}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-8">
                                        Project Gallery
                                    </h2>

                                    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl overflow-hidden group">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </Card>

                                    {/* Additional project images placeholder */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden group">
                                            <img
                                                src={project.image}
                                                alt="Installation process"
                                                className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </Card>
                                        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden group">
                                            <img
                                                src={project.image}
                                                alt="Completed system"
                                                className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Features Tab */}
                    {activeTab === 'features' && (
                        <div className={`transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
                                    Project Features
                                </h2>
                                <p className="text-xl text-gray-600">Advanced solar technology and premium components</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {projectFeatures.map((feature, index) => (
                                    <Card
                                        key={index}
                                        className="group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105"
                                    >
                                        <CardContent className="p-8">
                                            <div className="flex items-start space-x-4">
                                                <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                                                    <feature.icon className="h-6 w-6 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                                                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Specifications Tab */}
                    {activeTab === 'specs' && (
                        <div className={`transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                                <CardHeader>
                                    <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                        Technical Specifications
                                    </h2>
                                </CardHeader>
                                <CardContent className="p-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-6">
                                            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
                                                <h4 className="font-bold text-gray-800 mb-4">System Details</h4>
                                                <div className="space-y-3">
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Total Capacity:</span>
                                                        <span className="font-semibold">{project.capacity}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Panel Count:</span>
                                                        <span className="font-semibold">{project.panels || '50'} Panels</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Panel Type:</span>
                                                        <span className="font-semibold">Monocrystalline</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl">
                                                <h4 className="font-bold text-gray-800 mb-4">Performance</h4>
                                                <div className="space-y-3">
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Annual Production:</span>
                                                        <span className="font-semibold">12,000+ kWh</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Efficiency:</span>
                                                        <span className="font-semibold">22.1%</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Warranty:</span>
                                                        <span className="font-semibold">25 Years</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                                                <h4 className="font-bold text-gray-800 mb-4">Installation Details</h4>
                                                <div className="space-y-3">
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Installation Type:</span>
                                                        <span className="font-semibold">Rooftop Mounted</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Inverter:</span>
                                                        <span className="font-semibold">String Inverter</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Monitoring:</span>
                                                        <span className="font-semibold">Smart Monitoring</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl">
                                                <h4 className="font-bold text-gray-800 mb-4">Financial Benefits</h4>
                                                <div className="space-y-3">
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Annual Savings:</span>
                                                        <span className="font-semibold">{project.savings || '$15,000+'}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">Payback Period:</span>
                                                        <span className="font-semibold">6-8 Years</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-600">ROI:</span>
                                                        <span className="font-semibold">15-20%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Inspired by This Project?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Let us create a custom solar solution for your property
                    </p>
                    <Button
                        size="lg"
                        className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-6 text-xl font-semibold rounded-xl shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300"
                    >
                        Get Your Custom Quote
                    </Button>
                </div>
            </section>
        </div>
    );
}