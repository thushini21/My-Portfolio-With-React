import {

    Github,

    ExternalLink,
    Palette, Code, Send, Phone, Mail,
    MapPin, ArrowUp, Menu, X
} from 'lucide-react';

import { FaGithub, FaLinkedinIn, FaYoutube, FaFacebook } from 'react-icons/fa';

// @ts-ignore
import profile from '../images/proPic/propic3.jpg';
// @ts-ignore
import java from '../images/language-logos/icons8-java-78.png'
// @ts-ignore
import react from '../images/language-logos/icons8-react-78.png'
// @ts-ignore
import mysql from '../images/language-logos/icons8-mysql-78.png'
// @ts-ignore
import mongodb from '../images/language-logos/icons8-mongo-db-78.png'
// @ts-ignore
import tailwindcss from '../images/language-logos/icons8-tailwindcss-78.png'
// @ts-ignore
import springboot from '../images/language-logos/icons8-spring-boot-78.png'
// @ts-ignore
import html from '../images/language-logos/icons8-html-78.png'
// @ts-ignore
import css from '../images/language-logos/icons8-css-78.png'
// @ts-ignore
import js from '../images/language-logos/icons8-javascript-78.png'
// @ts-ignore
import figma from '../images/language-logos/icons8-figma-78.png'
// @ts-ignore
import firebase from '../images/language-logos/icons8-firebase-78.png'

// @ts-ignore
import salonimage from '../images/projects images/Screenshot 2025-08-30 111727.png'
// @ts-ignore
import madushifashionimage from '../images/projects images/Screenshot 2025-07-10 172230.png'

import noteapp from '../images/projects images/note app.jpg'

// @ts-ignore
import jsp from '../images/projects images/Screenshot 2025-01-26 193531.png'
// @ts-ignore
import libary from '../images/projects images/Screenshot 2025-09-04 101835.png'
// @ts-ignore
import culdnarySystem from '../images/projects images/baking-and-pastry-school-2-scaled (1).jpg'

// @ts-ignore
import portfolio from '../images/projects images/Screenshot 2025-08-17 104048.png'

// @ts-ignore
import proPic from '../images/proPic/propic3.jpg'
// @ts-ignore
import proPic2 from '../images/proPic/about.jpg'

import emailjs from 'emailjs-com';


import React, {useEffect, useState} from "react";

export default function PortfolioHomepage(): any {

    const skills = [
        {
            name: "Java",
            color: "from-red-500 to-orange-500",
            icon: java,
            category: "Backend"
        },
        {
            name: "React",
            color: "from-cyan-400 to-blue-500",
            icon: react,
            category: "Frontend"
        },
        {
            name: "MongoDB",
            color: "from-green-600 to-green-400",
            icon: mongodb,
            category: "Database"
        },
        {
            name: "MySQL",
            color: "from-blue-600 to-blue-400",
            icon: mysql,
            category: "Database"
        },

        {
            name: "HTML",
            color: "from-orange-600 to-red-500",
            icon: html,
            category: "Frontend"
        },
        {
            name: "TAILWINDCSS",
            color: "from-blue-500 to-purple-500",
            icon: tailwindcss,
            category: "Frontend"
        },
        {
            name: "CSS",
            color: "from-blue-500 to-purple-500",
            icon: css,
            category: "Frontend"
        },
        {
            name: "FIREBASE",
            color: "from-blue-500 to-purple-500",
            icon: firebase,
            category: "Backend"
        },
        {
            name: "JavaScript",
            color: "from-yellow-400 to-yellow-600",
            icon: js,
            category: "Frontend"
        },
        {
            name: "Springboot",
            color: "from-green-500 to-green-700",
            icon: springboot,
            category: "Backend"
        },
        {
            name: "Figma",
            color: "from-purple-500 to-pink-500",
            icon: figma,
            category: "Design"
        }
    ];


    const projects = [
        {
            id: 1,
            title: "Salon Ivoery Veills Sysyem",
            description:
                "Full-stack salon management system with a Spring Boot REST API backend and a vanilla HTML/CSS/JavaScript frontend. Includes user authentication, appointment booking with payment gateway integration, and an admin dashboard for managing services, staff, and customers.",
            image:salonimage ,
            technologies: ["Spring Boot", "Java", "REST API", "HTML", "CSS", "JavaScript", "Payment Gateway"],
            status: "Completed",
            githubUrl: "https://github.com/thushini21/AAD_FinalC.git",
            highlights: ["API-driven frontend", "Secure payment processing", "Admin dashboard", "Responsive design"]
        },

            {
            id: 2,
            title: "Note Mobile App",
            description:
                "A comprehensive note-taking mobile application built with modern mobile development technologies. Features include creating, editing, organizing notes with categories, search functionality, and cloud synchronization. The app provides an intuitive user interface for seamless note management and productivity enhancement.",
            image: noteapp,
            technologies: ["React Native", "Firebase", "Redux", "AsyncStorage", "JavaScript", "Mobile UI"],
            status: "Completed",
            githubUrl: "https://github.com/thushini21/NoteApp-With-React-Native.git",
            highlights: ["Cross-platform mobile app", "Real-time cloud sync", "Category organization", "Search and filter", "Offline functionality", "Modern mobile UI/UX"]
        }, 

        {
            id: 3,
            title: "Madushi Fashion POS System",
            description: "A Point-of-Sale (POS) system developed for Madushi Fashion to streamline sales, customer management, and inventory tracking. Built using HTML, CSS, Bootstrap, and JavaScript, with a user-friendly dashboard for day-to-day retail operations.",
            image: madushifashionimage,
            technologies: ["JSP", "CSS", "Bootstrap", "JavaScript"],
            status: "Completed",
            githubUrl: "https://github.com/thushini21/Madushi-Fashion-Pos.git", 
            highlights: [
                "Secure login system for staff",
                "Interactive dashboard with sales overview",
                "Customer management module",
                "Item management with stock updates",
                "Order placement with cart functionality",
                "Discount and total bill calculation",
                "Order history with receipt generation",
                "Responsive and lightweight design"
            ]
        }
,
        {
            id: 4,
            title: "E-commerce Web Application",
            description:
                "Full-stack e-commerce web application developed using JavaEE, JSP, and JDBC connection pooling. Includes product management, user authentication, cart functionality, and order processing. Built with a layered architecture for scalability and maintainability.",
            image: jsp,
            technologies: ["JavaEE", "JSP", "Servlets", "JDBC", "Connection Pooling", "MySQL"],
            status: "Completed",
            githubUrl: "https://github.com/thushini21/E-commerce-Application.git", // replace with actual repo
            highlights: [
                "Layered architecture (DAO, Service, Controller)",
                "User authentication & session management",
                "Product catalog & cart system",
                "Order processing with database transactions",
                "Scalable JDBC connection pooling"
            ]
        },
        {
            id: 5,
            title: "Library Management System",
            description: "Full-stack Library Management System with React frontend and Node.js/Express backend.",
            image:libary,
            technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
            status: "Completed",
            githubBackendUrl: "https://github.com/thushini21/Book-Eclub-Project.git",
            githubFrontendUrl: "https://github.com/thushini21/Library_Front.git",
            highlights: [
                "Role-based auth (Admin, Librarian, Member)",
                "Book CRUD with cover uploads",
                "Borrowing/return workflow",
                "Reservation system",
                "Responsive UI"
            ]
        },
        {
            id: 6,
            title: "Culinary System – Cafe Management (Hibernate ORM)",
            description:
                "A cafe management system built with Java and Hibernate ORM, implementing the ORM concept for database interactions. The system provides RESTful APIs for handling orders, menu items, customers, and billing. The front-end is developed using HTML, CSS, Bootstrap, and JavaScript, delivering a responsive and user-friendly interface.",
            image: culdnarySystem,
            technologies: ["Java", "Hibernate ORM", "MySQL", "HTML", "CSS", "Bootstrap", "JavaScript"],
            status: "Completed",
            githubUrl: "https://github.com/thushini21/ORM-Cource-Work.git",
            highlights: [
                "Java-based backend with Hibernate ORM",
                "Entity-relationship mapping for menu, customers, orders, and billing",
                "CRUD operations implemented through Hibernate",
                "REST API endpoints for frontend integration",
                "Customer order placement with cart and billing",
                "Discounts, payments, and receipt generation",
                "Inventory/stock management with automatic updates",
                "Sales reporting and transaction history",
                "Responsive UI with Bootstrap and JavaScript"
            ]
        },
        {
            id: 7,
            title: "Personal Portfolio Website",
            description:
                "A personal portfolio website developed using HTML and CSS to showcase projects, skills, and contact information. Designed with a clean and modern layout to provide an easy-to-navigate experience for visitors.",
            image: portfolio,
            technologies: ["HTML", "CSS"],
            status: "Completed",
            githubUrl: "https://github.com/thushini21/My-Profile.git",
            highlights: [
                "Responsive design with pure HTML and CSS",
                "Clean layout showcasing projects and skills",
                "Contact section with social media links",
                "Mobile and desktop friendly",
                "Lightweight and fast loading"
            ]
        }


    ];

    const services = [
        {
            id: 1,
            icon: <Code className="w-8 h-8" />,
            title: "Frontend Development",
            description: "Build interactive, responsive, and modern front-end interfaces using React, HTML, CSS, and JavaScript for an engaging user experience.",
            rating: 5,
            color: "from-blue-500 to-cyan-500"
        },
        {
            id: 2,
            icon: <Code className="w-8 h-8" />,
            title: "Backend Development",
            description: "Develop robust server-side applications using Node.js, Spring Boot, JavaEE, and database integration for secure and scalable solutions.",
            rating: 5,
            color: "from-purple-500 to-blue-500"
        },
        {
            id: 3,
            icon: <Palette className="w-8 h-8" />,
            title: "UI/UX Design",
            description: "Design visually appealing and user-friendly interfaces with seamless user experiences, wireframes, and prototypes.",
            rating: 5,
            color: "from-pink-500 to-purple-500"
        },
        {
            id: 4,
            icon: <Code className="w-8 h-8" />,
            title: "Web Development",
            description: "End-to-end web development solutions, from website design to full-stack implementation, optimized for performance and scalability.",
            rating: 5,
            color: "from-green-500 to-cyan-500"
        },
    ];

    const renderStars = (rating:number) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <span key={i} className="text-yellow-400 text-lg">★</span>
            );
        }

        if (hasHalfStar) {
            stars.push(
                <span key="half" className="text-yellow-400 text-lg">☆</span>
            );
        }

        return stars;
    };

    const scrollToHome = () => {
        const homeSection = document.getElementById("home");
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const [, setIsVisible] = useState(false);
    const [, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setIsVisible(true);

        const handleMouseMove :any= (e: React.MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)  => {
        console.log('Input changed:', e.target.name, e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmitted = (e: React.MouseEvent<HTMLButtonElement>)  => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert('Please fill all required fields.');
            return;
        }

        emailjs.send(
            'service_7qb9vsf',        // Service ID
            'template_0cy7ra2',       // Template ID
            formData,                 // Form data
            'w8fwoqZKlq0TGX-T9'       // Public key / User ID
        )
            .then((result: any) => {
                console.log('Email sent:', result.text);
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
            })
            .catch((error: any) => {
                console.log('Email failed:', error.text);
                alert('Failed to send message.');
            });
    };

    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Simple scroll function like before
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        setActiveSection(sectionId);
        setIsOpen(false); // Close mobile menu after navigation
    };

    // Vertical scroll detection for active section
    useEffect(() => {
        const handleScroll = () => {
            const container = document.getElementById('main-container');
            if (!container) return;
            
            const sections = ['home', 'about', 'skills', 'projects', 'services', 'contact'];
            const scrollPosition = container.scrollTop + 120;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const containerRect = container.getBoundingClientRect();
                    const elementTop = rect.top - containerRect.top + container.scrollTop;
                    
                    if (scrollPosition >= elementTop && scrollPosition < elementTop + element.offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        const container = document.getElementById('main-container');
        if (container) {
            container.addEventListener('scroll', handleScroll);
            handleScroll(); // Set initial active section
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div
            id="main-container"
            className="min-h-screen w-full overflow-y-scroll overflow-x-hidden scroll-smooth bg-gradient-to-br from-slate-900 via-slate-800 to-slate-800 text-white relative"
        >
            {/* Modern Particle Background */}
            <div className="fixed inset-0 pointer-events-none">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 4}s`
                        }}
                    />
                ))}
            </div>

            {/* Navigation */}
            <nav className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6 fixed w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50 transition-all duration-300">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="relative">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">T</span>
                        </div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-30 animate-pulse"></div>
                    </div>
                    <span className="text-white font-semibold text-xl hidden sm:block">Thushini</span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-1">
                    <button onClick={() => scrollToSection('home')} className={`relative px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm ${activeSection === 'home' ? 'text-white bg-white/10 backdrop-blur-sm' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
                        HOME
                        {activeSection === 'home' && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>}
                    </button>
                    <button onClick={() => scrollToSection('about')} className={`relative px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm ${activeSection === 'about' ? 'text-white bg-white/10 backdrop-blur-sm' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
                        ABOUT
                        {activeSection === 'about' && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>}
                    </button>
                    <button onClick={() => scrollToSection('skills')} className={`relative px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm ${activeSection === 'skills' ? 'text-white bg-white/10 backdrop-blur-sm' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
                        SKILLS
                        {activeSection === 'skills' && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>}
                    </button>
                    <button onClick={() => scrollToSection('projects')} className={`relative px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm ${activeSection === 'projects' ? 'text-white bg-white/10 backdrop-blur-sm' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
                        WORK
                        {activeSection === 'projects' && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>}
                    </button>
                    <button onClick={() => scrollToSection('services')} className={`relative px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm ${activeSection === 'services' ? 'text-white bg-white/10 backdrop-blur-sm' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
                        SERVICES
                        {activeSection === 'services' && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>}
                    </button>
                    <button onClick={() => scrollToSection('contact')} className={`relative px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm ${activeSection === 'contact' ? 'text-white bg-white/10 backdrop-blur-sm' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
                        CONTACT
                        {activeSection === 'contact' && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>}
                    </button>
                </div>
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-white/20"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </nav>
            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
                    <div className="fixed top-0 right-0 w-72 h-full bg-black/40 backdrop-blur-xl border-l border-white/10 shadow-2xl">
                        <div className="flex flex-col p-6 space-y-4 mt-20">
                            <button
                                onClick={() => scrollToSection('home')}
                                className={`w-full px-4 py-3 rounded-xl transition-all duration-300 text-left font-medium ${activeSection === 'home' ? 'text-white bg-white/10 backdrop-blur-sm border border-blue-400/30' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
                            >
                                HOME
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className={`w-full px-4 py-3 rounded-xl transition-all duration-300 text-left font-medium ${activeSection === 'about' ? 'text-white bg-white/10 backdrop-blur-sm border border-blue-400/30' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
                            >
                                ABOUT
                            </button>
                            <button
                                onClick={() => scrollToSection('skills')}
                                className={`w-full px-4 py-3 rounded-xl transition-all duration-300 text-left font-medium ${activeSection === 'skills' ? 'text-white bg-white/10 backdrop-blur-sm border border-blue-400/30' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
                            >
                                SKILLS
                            </button>
                            <button
                                onClick={() => scrollToSection('projects')}
                                className={`w-full px-4 py-3 rounded-xl transition-all duration-300 text-left font-medium ${activeSection === 'projects' ? 'text-white bg-white/10 backdrop-blur-sm border border-blue-400/30' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
                            >
                                WORK
                            </button>
                            <button
                                onClick={() => scrollToSection('services')}
                                className={`w-full px-4 py-3 rounded-xl transition-all duration-300 text-left font-medium ${activeSection === 'services' ? 'text-white bg-white/10 backdrop-blur-sm border border-blue-400/30' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
                            >
                                SERVICES
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className={`w-full px-4 py-3 rounded-xl transition-all duration-300 text-left font-medium ${activeSection === 'contact' ? 'text-white bg-white/10 backdrop-blur-sm border border-blue-400/30' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
                            >
                                CONTACT
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Clean Hero Section */}
            <section
                id="home"
                className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 py-6 md:py-12 max-w-7xl mx-auto relative overflow-hidden scroll-snap-align-start">
                
                {/* Blue/Cyan Theme Background */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-cyan-950/20"></div>
                    <div className="absolute inset-0 bg-gradient-to-tl from-blue-900/10 via-transparent to-cyan-900/15"></div>
                    <div className="absolute top-1/4 right-1/6 w-64 h-64 bg-gradient-to-r from-blue-500/15 to-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
                    <div className="absolute bottom-1/4 left-1/6 w-48 h-48 bg-gradient-to-r from-cyan-500/15 to-blue-500/10 rounded-full blur-2xl animate-float"></div>
                </div>

                {/* Clean Left Content */}
                <div className="flex-1 max-w-2xl mt-12 lg:mt-0 text-center lg:text-left relative z-10">
                    <div className="mb-8">
                        {/* Simple greeting */}
                        <p className="text-blue-300 text-lg font-light mb-4">
                            👋 Hello there!
                        </p>
                        
                        {/* Clean main heading - Updated colors */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            <span className="text-white">
                                Hi, I'm{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">
                                    Thushini
                                </span>
                            </span>
                        </h1>
                        
                        {/* Simple subtitle - Updated colors */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400">
                            UI/UX Designer
                        </h2>
                    </div>

                    {/* Simple description */}
                    <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                        Passionate about creating beautiful and intuitive digital experiences. 
                        I love turning ideas into user-friendly designs that people enjoy using.
                    </p>

                    {/* Consistent styled buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button 
                            onClick={() => scrollToSection('projects')}
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 backdrop-blur-xl
                                     border border-cyan-400/50 rounded-2xl font-semibold text-white 
                                     transition-all duration-300 hover:scale-105 hover:border-cyan-300/70
                                     hover:shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2"
                        >
                            <ExternalLink className="w-4 h-4" />
                            View My Work
                        </button>
                        
                        <a href="/Thushini Akashi CV.pdf" target="_blank" rel="noopener noreferrer">
                            <button className="px-8 py-4 bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-xl
                                             border border-cyan-500/50 rounded-2xl font-semibold text-cyan-300 
                                             hover:border-cyan-400/70 hover:text-white transition-all duration-300 hover:scale-105 
                                             flex items-center gap-2">
                                <ExternalLink className="w-4 h-4" />
                                View CV
                            </button>
                        </a>
                    </div>
                </div>

                {/* Clean Right Content - Simple Profile */}
                <div className="flex-1 flex justify-center items-center mt-12 lg:mt-0 relative z-10">
                    <div className="relative group">
                        {/* Simple decorative elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-60"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-60"></div>
                        
                        {/* Main image container */}
                        <div className="relative w-[250px] sm:w-[300px] md:w-[400px] lg:w-[450px] aspect-square rounded-full overflow-hidden 
                                      border-4 border-blue-500/40 shadow-2xl shadow-blue-500/20 
                                      transition-all duration-500 hover:shadow-blue-500/40 hover:scale-105">
                            <img
                                src={profile}
                                alt="Thushini - UI/UX Designer"
                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                            />
                            
                            {/* Simple overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent 
                                          opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section
                id="about"
                className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden py-16 md:py-32 scroll-snap-align-start"
            >
                {/* Purple/Violet Theme Background */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/30 to-violet-950/20"></div>
                    <div className="absolute inset-0 bg-gradient-to-tl from-purple-900/10 via-transparent to-violet-900/15"></div>
                    <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-r from-purple-500/15 to-violet-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
                    <div className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-gradient-to-r from-violet-500/15 to-purple-500/10 rounded-full blur-2xl animate-float"></div>
                </div>
                {/* Left Image - Consistent Glass Style */}
                <div className="flex-1 flex justify-center relative">
                    <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] group">
                        {/* Glass morphism card design - Purple theme */}
                        <div className="relative w-full h-full bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-xl 
                                      rounded-3xl border border-purple-700/50 shadow-2xl overflow-hidden 
                                      transition-all duration-500 hover:scale-105 hover:border-purple-500/50
                                      hover:shadow-purple-500/25">
                            <img
                                src={proPic2}
                                alt="About Profile"
                                className="w-full h-full object-cover rounded-3xl transition-all duration-500 group-hover:brightness-110"
                            />
                            
                            {/* Subtle gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
                            
                            {/* Purple theme decorative elements */}
                            <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400/70 rounded-full"></div>
                            <div className="absolute bottom-4 left-4 w-2 h-2 bg-violet-400/70 rounded-full"></div>
                        </div>
                        
                        {/* Floating accent - purple theme */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full opacity-70 animate-float"></div>
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full opacity-60 animate-pulse"></div>
                    </div>
                </div>


                {/* Right Content - Enhanced */}
                <div className="flex-1 max-w-2xl text-center lg:text-left relative z-10">
                    {/* Animated section label */}
                    <div className="relative mb-4">
                        <p className="text-purple-400 text-sm tracking-[0.3em] font-light relative">
                            G E T   T O   K N O W   M E
                            <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-violet-400"></span>
                        </p>
                    </div>
                    
                    {/* Enhanced heading */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                        <span className="text-white">PASSIONATE</span>
                        <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400">
                            UI UX DESIGNER
                        </span>
                        <br/>
                        <span className="text-white">& DEVELOPER</span>
                    </h2>

                    {/* Enhanced content with better typography */}
                    <div className="space-y-6 mb-8">
                        <div className="relative">
                            <p className="text-gray-300 text-lg leading-relaxed relative pl-4">
                                <span className="absolute left-0 top-2 w-2 h-2 bg-purple-400 rounded-full"></span>
                                My name is <span className="text-purple-400 font-semibold">Thushini Akashi</span>, 
                                an aspiring UI/UX Designer from Sri Lanka, currently studying Software Engineering at IJSE with a focus on user-centered design.
                            </p>
                        </div>
                        <div className="relative">
                            <p className="text-gray-300 text-lg leading-relaxed relative pl-4">
                                <span className="absolute left-0 top-2 w-2 h-2 bg-violet-400 rounded-full"></span>
                                I'm passionate about understanding user needs and translating them into engaging digital experiences. 
                                My technical background helps me bridge the gap between design vision and development reality.
                            </p>
                        </div>
                        <div className="relative">
                            <p className="text-gray-300 text-lg leading-relaxed relative pl-4">
                                <span className="absolute left-0 top-2 w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                                I believe great design should be both beautiful and functional, creating meaningful connections between users and digital products.
                            </p>
                        </div>
                        
                        {/* Skills highlight - Purple theme */}
                        <div className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-purple-700/50 shadow-xl">
                            <h3 className="text-purple-300 font-semibold mb-4 tracking-wide">Design Focus Areas</h3>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm text-purple-300 rounded-full text-sm border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">UI/UX Design</span>
                                <span className="px-4 py-2 bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm text-violet-300 rounded-full text-sm border border-violet-500/30 hover:border-violet-400/50 transition-all duration-300">User Research</span>
                                <span className="px-4 py-2 bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm text-fuchsia-300 rounded-full text-sm border border-fuchsia-500/30 hover:border-fuchsia-400/50 transition-all duration-300">Prototyping</span>
                                <span className="px-4 py-2 bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm text-pink-300 rounded-full text-sm border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300">Design Systems</span>
                                <span className="px-4 py-2 bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm text-indigo-300 rounded-full text-sm border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300">Figma</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Skills & Technologies - Enhanced Premium Section */}
            <section
                id="skills"
                className="relative min-h-screen py-16 md:py-32 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden scroll-snap-align-start"
            >
                {/* Premium Animated Background */}
                <div className="absolute inset-0 -z-10">
                    {/* Multi-layer Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-purple-950/30"></div>
                    <div className="absolute inset-0 bg-gradient-to-tl from-indigo-950/30 via-transparent to-cyan-950/20"></div>
                    
                    {/* Animated Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.02]">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `
                                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                            `,
                            backgroundSize: '50px 50px',
                            animation: 'grid-move 20s linear infinite'
                        }}></div>
                    </div>

                    {/* Floating Tech Particles */}
                    <div className="absolute inset-0">
                        {[...Array(20)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute opacity-20"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 10}s`,
                                    animation: `float-particle 15s ease-in-out infinite ${Math.random() * 5}s`
                                }}
                            >
                                <div className={`w-2 h-2 bg-gradient-to-r ${skills[i % skills.length]?.color || 'from-blue-400 to-purple-400'} rounded-full animate-pulse`}></div>
                            </div>
                        ))}
                    </div>

                    {/* Enhanced Glowing Orbs */}
                    <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/5 to-indigo-500/5 rounded-full blur-2xl animate-float-slow"></div>
                    <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-pink-500/10 to-violet-500/10 rounded-full blur-xl animate-spin-slow"></div>
                </div>

                {/* Enhanced Header */}
                <div className="text-center mb-20" data-aos="fade-up">
                    <div className="relative inline-block mb-8">
                        <p className="text-blue-300/80 text-sm tracking-[0.4em] mb-6 font-light uppercase">
                            ⚡ E X P E R T I S E ⚡
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
                                Skills & Technologies
                            </span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mx-auto rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                        Crafting digital excellence with a powerful arsenal of modern technologies and creative expertise
                    </p>
                </div>

                {/* Enhanced Skills Grid with 3D Effects */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="group relative"
                            style={{
                                animationDelay: `${index * 0.1}s`
                            }}
                        >
                            {/* 3D Skill Card Container */}
                            <div className="relative perspective-1000">
                                <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/80 backdrop-blur-xl
                                              border border-slate-700/50 rounded-3xl p-8 h-64
                                              transition-all duration-700 ease-out
                                              hover:scale-[1.05] hover:rotate-y-12 hover:rotate-x-6
                                              transform-gpu preserve-3d cursor-pointer
                                              shadow-2xl hover:shadow-blue-500/25
                                              group-hover:border-blue-500/50"
                                     style={{
                                         transformStyle: 'preserve-3d',
                                     }}
                                >
                                    {/* Animated Background Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl 
                                                  opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                                    
                                    {/* Skill Content */}
                                    <div className="relative z-10 flex flex-col items-center justify-between h-full">
                                        {/* Icon Container with Enhanced Effects */}
                                        <div className="relative mb-4 transform-gpu">
                                            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-slate-700/50 to-slate-800/50
                                                          flex items-center justify-center backdrop-blur-sm border border-slate-600/30
                                                          transition-all duration-500 group-hover:scale-110 group-hover:rotate-12
                                                          shadow-lg group-hover:shadow-xl">
                                                <img 
                                                    src={skill.icon} 
                                                    alt={skill.name}
                                                    className="w-12 h-12 md:w-16 md:h-16 transition-all duration-500 
                                                             group-hover:scale-110 drop-shadow-lg filter group-hover:brightness-110"
                                                />
                                                
                                                {/* Glowing Ring Effect */}
                                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                                                              opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm animate-pulse"></div>
                                            </div>
                                            
                                            {/* Floating Particles */}
                                            <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-400 rounded-full opacity-0 
                                                          group-hover:opacity-100 transition-all duration-500 animate-bounce"></div>
                                            <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-purple-400 rounded-full opacity-0 
                                                          group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
                                        </div>
                                        
                                        {/* Skill Info */}
                                        <div className="text-center space-y-3 flex-1 flex flex-col justify-center">
                                            <h3 className="text-lg md:text-xl font-bold text-white/90 group-hover:text-white 
                                                         transition-colors duration-300 leading-tight">
                                                {skill.name}
                                            </h3>
                                            
                                            <p className="text-sm text-blue-300/80 font-medium tracking-wide uppercase">
                                                {skill.category}
                                            </p>
                                            
                                            {/* Proficiency Level Indicator */}
                                            <div className="w-full space-y-2">
                                                <div className="flex justify-between text-xs text-gray-400">
                                                </div>
                                                <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                                            
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Card Edge Glow */}
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 
                                                  opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl -z-10"></div>
                                </div>
                            </div>
                            
                            {/* Hover Shadow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl 
                                          opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl -z-20 
                                          transform translate-y-8 group-hover:translate-y-4"></div>
                        </div>
                    ))}
                </div>

                {/* Skills Categories Overview */}
                <div className="mt-20 text-center">
                    <div className="inline-flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
                        {['Frontend', 'Backend', 'Database', 'Design', 'Mobile', 'Tools'].map((category, index) => (
                            <div key={category} 
                                 className="px-6 py-3 bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-sm
                                          border border-slate-700/50 rounded-full text-sm font-medium text-white/80
                                          hover:border-blue-500/50 hover:text-white transition-all duration-300
                                          hover:scale-105 cursor-default"
                                 style={{animationDelay: `${index * 0.1}s`}}>
                                {category}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                id="projects"
                className="relative min-h-screen py-16 md:py-32 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden scroll-snap-align-start"
            >
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="relative inline-block mb-6">
                        <p className="text-blue-300 text-sm tracking-[0.3em] mb-4 font-light uppercase">
                            ✨ P O R T F O L I O ✨
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse">
                                My Creative Works
                            </span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
                    </div>
                    <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                        Explore my journey through innovative projects that blend creativity with technology
                    </p>
                </div>

                {/* Projects Showcase */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl 
                                     border border-slate-700/50 rounded-3xl overflow-hidden group 
                                     transition-all duration-500 hover:scale-[1.02] hover:rotate-1 
                                     hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/25
                                     transform-gpu will-change-transform"
                            style={{
                                animationDelay: `${index * 0.1}s`
                            }}
                        >
                            {/* Project Image */}
                            <div className="relative h-56 overflow-hidden group/image">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-pink-500/20 
                                             opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                {/* Floating Status Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1.5 bg-emerald-500/90 text-white text-xs font-semibold rounded-full 
                                                   shadow-lg backdrop-blur-sm border border-emerald-400/50 animate-pulse">
                                        {project.status}
                                    </span>
                                </div>
                                
                                {/* Project Number */}
                                <div className="absolute top-4 right-4">
                                    <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center 
                                                   border border-white/20 text-white font-bold text-sm">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6 lg:p-8 space-y-4">
                                <div className="space-y-3">
                                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-blue-300 
                                               transition-all duration-300 transform group-hover:translate-x-1">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed line-clamp-3">
                                        {project.description.length > 140 ? 
                                            project.description.substring(0, 140) + '...' : 
                                            project.description
                                        }
                                    </p>
                                </div>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 4).map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                                                     text-blue-300 text-xs font-medium rounded-full border border-blue-500/30
                                                     hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300
                                                     transform hover:scale-105"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 4 && (
                                        <span className="px-3 py-1.5 bg-gradient-to-r from-gray-600/30 to-gray-700/30 
                                                       text-gray-400 text-xs font-medium rounded-full border border-gray-600/30">
                                            +{project.technologies.length - 4}
                                        </span>
                                    )}
                                </div>
                                
                                {/* Action Buttons */}
                                <div className="flex gap-3 pt-4">
                                    {(project.githubUrl || project.githubFrontendUrl || project.githubBackendUrl) && (
                                        <a
                                            href={project.githubUrl || project.githubFrontendUrl || project.githubBackendUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-slate-700 to-slate-800 
                                                     text-white rounded-xl border border-slate-600/50 hover:from-blue-600 hover:to-blue-700 
                                                     hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/25 
                                                     transition-all duration-300 transform hover:scale-105 group/btn"
                                        >
                                            <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                                            <span className="text-sm font-medium">Code</span>
                                        </a>
                                    )}
                                    <a
                                        href="#contact"
                                        className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 
                                                 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 
                                                 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 
                                                 transform hover:scale-105 group/btn flex-1 justify-center"
                                    >
                                        <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                                        <span className="text-sm font-medium">Details</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/*services section*/}
            <section
                id="services"
                className="relative min-h-screen flex flex-col items-center justify-center gap-8 md:gap-16 px-4 md:px-8 py-10 md:py-20 max-w-7xl mx-auto overflow-hidden scroll-snap-align-start"
            >
                {/* Animated Background */}
                <div className="absolute inset-0 -z-10">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20"></div>

                    {/* Floating Particles */}
                    <div className="absolute inset-0">
                        {[...Array(25)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 3}s`,
                                    animationDuration: `${2 + Math.random() * 2}s`
                                }}
                            ></div>
                        ))}
                    </div>

                    {/* Geometric Shapes */}
                    <div className="absolute top-32 left-16 w-24 h-24 border border-blue-500/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
                    <div className="absolute bottom-32 right-16 w-32 h-32 border border-purple-500/20 rotate-45 animate-pulse"></div>
                    <div className="absolute top-1/2 right-1/4 w-20 h-20 border border-cyan-500/20 rounded-lg animate-bounce" style={{animationDuration: '3s'}}></div>

                    {/* Glowing Orbs */}
                    <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-36 h-36 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>

                {/* Header */}
                <div className="text-center relative z-10 mb-16">
                    <div className="relative inline-block">
                        <p className="text-cyan-300 text-sm tracking-[0.4em] mb-6 font-light uppercase">
                            ⚒️ S E R V I C E S ⚒️
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 animate-pulse">
                                What I Create
                            </span>
                        </h2>
                        <div className="flex justify-center items-center gap-4 mb-6">
                            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                        </div>
                    </div>
                    <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                        Transforming ideas into digital reality with cutting-edge solutions
                    </p>
                </div>

                {/* Services Showcase */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10 w-full relative z-10">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="group relative bg-gradient-to-br from-slate-800/40 via-slate-900/60 to-black/40 
                                     backdrop-blur-2xl rounded-3xl border border-slate-700/50 p-8 lg:p-10
                                     transition-all duration-700 hover:scale-110 hover:rotate-3 hover:border-cyan-400/50 
                                     cursor-pointer overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/25
                                     transform-gpu will-change-transform min-h-[320px] flex flex-col justify-between"
                            style={{
                                animationDelay: `${index * 0.15}s`,
                                transform: `perspective(1000px) rotateY(${index % 2 === 0 ? '5deg' : '-5deg'})`
                            }}
                        >
                            {/* Multi-layer Glow Effects */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 
                                           rounded-3xl blur-2xl transition-all duration-700 scale-110`}></div>
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 
                                           rounded-3xl blur-xl transition-all duration-500`}></div>

                            {/* Animated Gradient Border */}
                            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.color} p-[2px] 
                                           opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse`}>
                                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl"></div>
                            </div>
                            
                            {/* Corner Accent */}
                            <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <div className={`absolute inset-0 bg-gradient-to-bl ${service.color} rounded-bl-3xl rounded-tr-3xl opacity-20`}></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex flex-col h-full">
                                {/* Icon Container */}
                                <div className="relative mb-8 flex justify-center">
                                    <div className="relative">
                                        <div className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl 
                                                       bg-gradient-to-br ${service.color} group-hover:scale-125 group-hover:rotate-12 
                                                       transition-all duration-700 shadow-2xl border-2 border-white/10`}>
                                            <div className="text-white text-3xl transform group-hover:scale-110 transition-transform duration-500">
                                                {service.icon}
                                            </div>
                                        </div>
                                        <div className={`absolute inset-0 w-24 h-24 rounded-3xl bg-gradient-to-br ${service.color} 
                                                       opacity-30 blur-2xl group-hover:opacity-60 transition-all duration-700 scale-125`}></div>
                                        {/* Floating particles around icon */}
                                        <div className="absolute -top-2 -right-2 w-3 h-3 bg-cyan-400 rounded-full animate-bounce 
                                                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-purple-400 rounded-full animate-pulse 
                                                      opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
                                              style={{animationDelay: '0.3s'}}></div>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 
                                             transition-all duration-300 text-center transform group-hover:scale-105">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <div className="flex-1 flex flex-col justify-center">
                                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-6 text-center 
                                             group-hover:text-white transition-colors duration-300 px-2">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Rating & Stats */}
                                <div className="mt-auto">
                                    <div className="flex items-center justify-center gap-2 mb-4">
                                        <div className="flex items-center gap-1">
                                            {renderStars(service.rating)}
                                        </div>
                                        <span className="text-cyan-300 text-sm font-medium ml-2">{service.rating}/5</span>
                                    </div>
                                    
                                    {/* Service Badge */}
                                    <div className="flex justify-center">
                                        <span className={`px-4 py-2 bg-gradient-to-r ${service.color} bg-opacity-20 
                                                        text-cyan-300 text-xs font-semibold rounded-full border 
                                                        border-cyan-400/30 group-hover:border-cyan-400/60 
                                                        transition-all duration-300 backdrop-blur-sm`}>
                                            Professional Service
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Enhanced Floating Elements */}
                            <div className="absolute top-6 right-6 w-3 h-3 bg-cyan-400 rounded-full animate-ping 
                                          opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute top-8 right-12 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce 
                                          opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
                                  style={{animationDelay: '0.2s'}}></div>
                            <div className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400 rounded-full animate-pulse 
                                          opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
                            <div className="absolute bottom-8 left-12 w-1 h-1 bg-pink-400 rounded-full animate-ping 
                                          opacity-0 group-hover:opacity-100 transition-opacity duration-800" 
                                  style={{animationDelay: '0.4s'}}></div>
                            
                            {/* Service Number */}
                            <div className="absolute top-4 left-4 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full 
                                          flex items-center justify-center border border-cyan-400/30">
                                <span className="text-cyan-300 text-xs font-bold">{String(index + 1).padStart(2, '0')}</span>
                            </div>
                        </div>

                    ))}

                </div>

                {/* Bottom Decorative Elements */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 opacity-30">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
            </section>


            {/*contact section*/}
            <section
                id="contact"
                className="relative min-h-screen py-16 md:py-32 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden scroll-snap-align-start"
            >
                {/* Enhanced Animated Background */}
                <div className="absolute inset-0 -z-10">
                    {/* Multi-layer Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/30 to-purple-900/30"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/10 via-transparent to-cyan-900/10"></div>
                    
                    {/* Enhanced Floating Particles */}
                    <div className="absolute inset-0">
                        {[...Array(40)].map((_, i) => (
                            <div
                                key={i}
                                className={`absolute rounded-full animate-pulse ${
                                    i % 3 === 0 ? 'w-2 h-2 bg-emerald-400/40' : 
                                    i % 3 === 1 ? 'w-1.5 h-1.5 bg-cyan-400/30' : 
                                    'w-1 h-1 bg-blue-400/20'
                                }`}
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 4}s`,
                                    animationDuration: `${3 + Math.random() * 3}s`
                                }}
                            ></div>
                        ))}
                    </div>

                    {/* Advanced Geometric Shapes */}
                    <div className="absolute top-32 left-20 w-40 h-40 border border-emerald-500/20 rounded-full animate-spin" style={{animationDuration: '25s'}}></div>
                    <div className="absolute bottom-32 right-20 w-32 h-32 border border-cyan-500/20 rotate-45 animate-pulse"></div>
                    <div className="absolute top-1/3 right-1/5 w-24 h-24 border border-blue-500/20 rounded-lg animate-bounce" style={{animationDuration: '4s'}}></div>
                    <div className="absolute bottom-1/4 left-1/5 w-28 h-28 border border-purple-500/15 rounded-full animate-spin" style={{animationDuration: '30s'}}></div>

                    {/* Enhanced Glowing Orbs */}
                    <div className="absolute top-1/5 right-1/3 w-56 h-56 bg-gradient-to-r from-emerald-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/5 left-1/3 w-44 h-44 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
                    <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-cyan-500/8 to-emerald-500/8 rounded-full blur-xl animate-pulse" style={{animationDelay: '2.5s'}}></div>
                </div>

                {/* Section Header */}
                <div className="text-center mb-20 relative z-10">
                    <div className="relative inline-block">
                        <p className="text-emerald-300 text-sm tracking-[0.4em] mb-6 font-light uppercase">
                            📫 G E T  I N  T O U C H 📫
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 animate-pulse">
                                Let's Collaborate
                            </span>
                        </h2>
                        <div className="flex justify-center items-center gap-4 mb-6">
                            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
                            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
                            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
                        </div>
                    </div>
                    <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                        Ready to bring your vision to life? Let's create something extraordinary together
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 lg:gap-20 items-start">
                    
                {/* Left Side - Profile and Contact Info */}
                <div className="flex flex-col items-center space-y-10 relative z-10">
                    {/* Enhanced Profile Card */}
                    <div className="relative group">
                        {/* Profile Image Container */}
                        <div className="relative w-80 sm:w-96 h-96 sm:h-[420px]">
                            {/* Multi-layer Glow Effects */}
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 via-cyan-500/20 to-blue-500/30 rounded-3xl blur-2xl transform scale-110 group-hover:scale-125 transition-transform duration-700"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-xl transform scale-105 group-hover:scale-115 transition-transform duration-500"></div>

                            {/* Main Image Container */}
                            <div className="relative w-full h-full bg-gradient-to-br from-slate-800/50 via-slate-900/60 to-black/40 rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:rotate-2 hover:shadow-emerald-500/25 backdrop-blur-xl">
                                {/* Animated Gradient Border */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/60 via-cyan-500/40 to-blue-500/60 p-[3px] animate-pulse">
                                    <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl"></div>
                                </div>

                                <div className="relative z-10 w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl overflow-hidden">
                                    <img
                                        src={proPic2}
                                        alt="Profile"
                                        className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                                    />
                                </div>

                                {/* Enhanced Overlay Effects */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Enhanced Floating Elements */}
                                <div className="absolute top-6 right-6 w-4 h-4 bg-emerald-400 rounded-full animate-ping"></div>
                                <div className="absolute top-10 right-12 w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
                                <div className="absolute bottom-6 left-6 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                                <div className="absolute bottom-10 left-12 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '0.6s'}}></div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Contact Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 w-full max-w-2xl">
                        {/* Email Card */}
                        <div className="group relative bg-gradient-to-br from-slate-800/40 via-slate-900/60 to-black/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 transition-all duration-500 hover:scale-105 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/25">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <p className="text-emerald-300 text-xs tracking-[0.3em] mb-3 font-light uppercase">
                                    📧 E M A I L
                                </p>
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Mail className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <span className="text-white text-sm font-medium group-hover:text-emerald-300 transition-colors duration-300">
                                            thushiniakashi58@gmail.com
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="group relative bg-gradient-to-br from-slate-800/40 via-slate-900/60 to-black/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 transition-all duration-500 hover:scale-105 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/25">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <p className="text-cyan-300 text-xs tracking-[0.3em] mb-3 font-light uppercase">
                                    📞 A V A I L A B L E
                                </p>
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white text-lg">✨</span>
                                    </div>
                                    <div>
                                        <span className="text-white text-sm font-medium group-hover:text-cyan-300 transition-colors duration-300">
                                            Ready for new projects
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Enhanced Contact Form */}
                <div className="w-full max-w-2xl relative z-10">
                    {/* Form Container */}
                    <div className="relative bg-gradient-to-br from-slate-800/30 via-slate-900/40 to-black/30 backdrop-blur-2xl rounded-3xl border border-slate-700/50 p-8 lg:p-10 shadow-2xl">
                        {/* Form Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-blue-500/5 rounded-3xl blur-xl"></div>
                        
                        {/* Form Header */}
                        <div className="relative z-10 mb-8">
                            <div className="text-center mb-6">
                                <p className="text-emerald-300 text-sm tracking-[0.3em] mb-4 font-light uppercase">
                                    🚀 S E N D  M E S S A G E
                                </p>
                                <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
                                        Start Your Project
                                    </span>
                                </h3>
                                <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
                            </div>
                        </div>

                        {/* Enhanced Form Fields */}
                        <div className="relative z-10 space-y-6">
                            {/* Name and Email Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="group">
                                    <label className="text-emerald-300 text-xs tracking-[0.2em] mb-3 block font-light uppercase">
                                        📝 Y O U R  N A M E
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={handleInputChange}
                                        value={formData.name}
                                        placeholder="Enter your name"
                                        autoComplete="off"
                                        className="w-full rounded-2xl px-5 py-4 bg-slate-900/60 backdrop-blur-sm border border-slate-600/50 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400/70 focus:bg-slate-800/60 focus:shadow-lg focus:shadow-emerald-500/25 transition-all duration-300 group-hover:border-slate-500/70"
                                    />
                                </div>
                                <div className="group">
                                    <label className="text-cyan-300 text-xs tracking-[0.2em] mb-3 block font-light uppercase">
                                        📧 Y O U R  E M A I L
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email"
                                        autoComplete="off"
                                        className="w-full rounded-2xl px-5 py-4 bg-slate-900/60 backdrop-blur-sm border border-slate-600/50 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/70 focus:bg-slate-800/60 focus:shadow-lg focus:shadow-cyan-500/25 transition-all duration-300 group-hover:border-slate-500/70"
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div className="group">
                                <label className="text-blue-300 text-xs tracking-[0.2em] mb-3 block font-light uppercase">
                                    📜 S U B J E C T
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    placeholder="What's this about?"
                                    autoComplete="off"
                                    className="w-full rounded-2xl px-5 py-4 bg-slate-900/60 backdrop-blur-sm border border-slate-600/50 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/70 focus:bg-slate-800/60 focus:shadow-lg focus:shadow-blue-500/25 transition-all duration-300 group-hover:border-slate-500/70"
                                />
                            </div>

                            {/* Message */}
                            <div className="group">
                                <label className="text-purple-300 text-xs tracking-[0.2em] mb-3 block font-light uppercase">
                                    💬 Y O U R  M E S S A G E
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Tell me about your project..."
                                    rows={6}
                                    autoComplete="off"
                                    className="w-full rounded-2xl px-5 py-4 bg-slate-900/60 backdrop-blur-sm border border-slate-600/50 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/70 focus:bg-slate-800/60 focus:shadow-lg focus:shadow-purple-500/25 transition-all duration-300 resize-none group-hover:border-slate-500/70"
                                ></textarea>
                            </div>

                            {/* Enhanced Submit Button */}
                            <button
                                onClick={handleFormSubmitted}
                                className="group relative w-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-blue-600 px-8 py-5 rounded-2xl font-bold text-lg flex items-center justify-center space-x-4 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 transform-gpu"
                            >
                                {/* Button Background Effects */}
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/50 to-blue-500/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                {/* Button Content */}
                                <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">
                                    SEND MESSAGE
                                </span>
                                <Send className="relative z-10 w-6 h-6 text-white group-hover:translate-x-2 group-hover:rotate-12 transition-all duration-300" />
                                
                                {/* Floating particles */}
                                <div className="absolute top-1 right-4 w-1 h-1 bg-white rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                                <div className="absolute bottom-1 left-8 w-1 h-1 bg-white rounded-full animate-pulse opacity-0 group-hover:opacity-100" style={{animationDelay: '0.3s'}}></div>
                            </button>
                        </div>
                    </div>
                </div>
                
                </div> {/* End of main content grid */}

                {/* Enhanced Bottom Decorative Elements */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-6 opacity-60">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.6s'}}></div>
                </div>
            </section>

            {/*footer section*/}
            <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-black overflow-hidden scroll-snap-align-start">
                {/* Enhanced Animated Background */}
                <div className="absolute inset-0 -z-10">
                    {/* Multi-layer Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-purple-900/10"></div>
                    <div className="absolute inset-0 bg-gradient-to-bl from-cyan-900/5 via-transparent to-emerald-900/5"></div>
                    
                    {/* Enhanced Floating Particles */}
                    <div className="absolute inset-0">
                        {[...Array(30)].map((_, i) => (
                            <div
                                key={i}
                                className={`absolute rounded-full animate-pulse ${
                                    i % 4 === 0 ? 'w-2 h-2 bg-blue-400/30' : 
                                    i % 4 === 1 ? 'w-1.5 h-1.5 bg-purple-400/25' : 
                                    i % 4 === 2 ? 'w-1 h-1 bg-cyan-400/20' :
                                    'w-0.5 h-0.5 bg-emerald-400/15'
                                }`}
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 5}s`,
                                    animationDuration: `${4 + Math.random() * 3}s`,
                                }}
                            ></div>
                        ))}
                    </div>

                    {/* Advanced Geometric Shapes */}
                    <div className="absolute top-16 left-16 w-32 h-32 border border-blue-500/15 rounded-full animate-spin" style={{ animationDuration: "40s" }}></div>
                    <div className="absolute bottom-16 right-16 w-24 h-24 border border-purple-500/15 rotate-45 animate-pulse"></div>
                    <div className="absolute top-1/2 left-8 w-20 h-20 border border-cyan-500/10 rounded-lg animate-bounce" style={{animationDuration: '5s'}}></div>
                    <div className="absolute bottom-1/3 left-1/2 w-16 h-16 border border-emerald-500/10 rounded-full animate-spin" style={{animationDuration: '35s'}}></div>

                    {/* Enhanced Glowing Orbs */}
                    <div className="absolute top-0 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-500/8 to-purple-500/8 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-36 h-36 bg-gradient-to-r from-cyan-500/6 to-emerald-500/6 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
                    <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
                </div>

                {/* Enhanced Footer Header */}
                <div className="relative z-10 text-center py-16 border-b border-slate-700/50">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="relative inline-block mb-8">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-pulse">
                                    Let's Build Together
                                </span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mx-auto rounded-full"></div>
                        </div>
                        <p className="text-gray-300 text-xl leading-relaxed mb-8">
                            Ready to transform your ideas into reality? Let's create something extraordinary.
                        </p>
                        <a 
                            href="#contact" 
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 rounded-2xl font-bold text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transform-gpu group"
                        >
                            <span>Get In Touch</span>
                            <ArrowUp className="w-5 h-5 rotate-45 group-hover:rotate-90 group-hover:scale-110 transition-all duration-300" />
                        </a>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
                    {/* Top Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 mb-16">
                        {/* About Column */}
                        <div className="space-y-8 text-center sm:text-left group">
                            <div className="space-y-4">
                                <div className="relative inline-block">
                                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                                        Thushini Akashi
                                    </h3>
                                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400/50 to-purple-400/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                </div>
                                <p className="text-blue-300 text-sm font-medium tracking-wide">
                                    UI/UX Designer & Developer
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="flex justify-center sm:justify-start flex-wrap gap-4">
                                    <a
                                        href="https://github.com/thushini21"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group/social relative w-14 h-14 bg-gradient-to-br from-slate-800 to-slate-900 hover:from-gray-700 hover:to-gray-800 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-3 border border-slate-700/50 hover:border-gray-600/50 hover:shadow-lg hover:shadow-gray-500/25"
                                    >
                                        <FaGithub className="w-6 h-6 text-gray-300 group-hover/social:text-white transition-colors duration-300" />
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-600/20 to-gray-800/20 rounded-2xl opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/thushini-akashi-649411300"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group/social relative w-14 h-14 bg-gradient-to-br from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-3 border border-blue-600/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/25"
                                    >
                                        <FaLinkedinIn className="w-6 h-6 text-blue-100 group-hover/social:text-white transition-colors duration-300" />
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-2xl opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                                    </a>
                                    <a
                                        href="https://www.facebook.com/share/1HxonRDGyc/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group/social relative w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-3 border border-blue-500/50 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/25"
                                    >
                                        <FaFacebook className="w-6 h-6 text-blue-100 group-hover/social:text-white transition-colors duration-300" />
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-2xl opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                                    </a>
                                    <a
                                        href="https://youtube.com/@thushiniakashi?si=R0Z0nxajAM6TUoHx"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group/social relative w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-3 border border-red-600/50 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/25"
                                    >
                                        <FaYoutube className="w-6 h-6 text-red-100 group-hover/social:text-white transition-colors duration-300" />
                                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-700/20 rounded-2xl opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                                    </a>
                                </div>
                                <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl p-4 border border-slate-700/50">
                                    <p className="text-emerald-300 text-sm font-medium mb-2">📍 Available for Projects</p>
                                    <p className="text-gray-400 text-sm">Currently accepting new opportunities and collaborations.</p>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Navigation */}
                        <div className="space-y-8 text-center sm:text-left">
                            <h4 className="text-xl font-bold text-white relative inline-block">
                                🧭 Navigation
                                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                            </h4>
                            <ul className="space-y-4">
                                {[
                                    { name: "About", icon: "👤" },
                                    { name: "Skills", icon: "⚡" },
                                    { name: "Projects", icon: "💼" },
                                    { name: "Services", icon: "🛠️" },
                                    { name: "Contact", icon: "📧" }
                                ].map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={`#${link.name.toLowerCase()}`}
                                            className="group flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 transform p-2 rounded-xl hover:bg-slate-800/30"
                                        >
                                            <span className="text-lg group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                                            <span className="font-medium">{link.name}</span>
                                            <ArrowUp className="w-4 h-4 rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Enhanced Services */}
                        <div className="space-y-8 text-center sm:text-left">
                            <h4 className="text-xl font-bold text-white relative inline-block">
                                🚀 What I Offer
                                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
                            </h4>
                            <div className="space-y-4">
                                {[
                                    { name: "UI/UX Design", icon: "🎨", desc: "User-centered design solutions" },
                                    { name: "Web Development", icon: "💻", desc: "Modern responsive websites" },
                                    { name: "Mobile Apps", icon: "📱", desc: "Cross-platform applications" },
                                    { name: "Branding", icon: "✨", desc: "Complete brand identity" }
                                ].map((service, index) => (
                                    <div key={index} className="group relative">
                                        <div className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-800/40 transition-all duration-300 border border-transparent hover:border-slate-700/50">
                                            <span className="text-xl group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                                            <div className="flex-1">
                                                <h5 className="font-medium text-white group-hover:text-purple-300 transition-colors duration-300">{service.name}</h5>
                                                <p className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors duration-300">{service.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Enhanced Contact Info */}
                        <div className="space-y-8 text-center sm:text-left">
                            <h4 className="text-xl font-bold text-white relative inline-block">
                                📞 Let's Connect
                                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"></div>
                            </h4>
                            <div className="space-y-6">
                                <div className="group relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-2xl p-4 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <Mail className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-blue-300 text-xs font-medium uppercase tracking-wider">Email</p>
                                            <p className="text-white font-medium group-hover:text-blue-300 transition-colors duration-300">
                                                thushiniakashi58@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="group relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-2xl p-4 border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <Phone className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-purple-300 text-xs font-medium uppercase tracking-wider">Phone</p>
                                            <p className="text-white font-medium group-hover:text-purple-300 transition-colors duration-300">
                                                +94 740113685
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="group relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-2xl p-4 border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <MapPin className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-emerald-300 text-xs font-medium uppercase tracking-wider">Location</p>
                                            <p className="text-white font-medium group-hover:text-emerald-300 transition-colors duration-300">
                                                Colombo, Sri Lanka
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Divider */}
                    <div className="relative mb-12">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600/50 to-transparent"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-8">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Bottom Section */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="flex flex-col items-center lg:items-start space-y-4">
                            <div className="flex items-center space-x-3 text-gray-400">
                                <span className="text-white font-semibold">Thushini Akashi</span>
                            </div>
                            <div className="text-gray-500 text-sm">
                                © 2025 All rights reserved.
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            {/* Enhanced Back to Top Button */}
                            <button
                                onClick={scrollToHome}
                                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-600/50 hover:border-blue-400/50 p-4 rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 transform-gpu"
                            >
                                <ArrowUp className="w-6 h-6 text-gray-400 group-hover:text-blue-400 group-hover:-translate-y-2 group-hover:rotate-12 transition-all duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Enhanced Animated Bottom Border */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-60">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                </div>
                
                {/* Floating Action Indicators */}
                <div className="absolute bottom-8 right-8 flex flex-col space-y-3 opacity-60">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.6s'}}></div>
                </div>
            </footer>

        </div>
    );
}
