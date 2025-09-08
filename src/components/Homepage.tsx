import {

    Github,
    Download,

    ExternalLink,
    Palette, Code, Send, Phone, Mail,
    MapPin, Heart, ArrowUp, Menu, X
} from 'lucide-react';

import { FaFacebookF, FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

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
// @ts-ignore
import jsp from '../images/projects images/Screenshot 2025-01-26 193531.png'
// @ts-ignore
import libary from '../images/projects images/Screenshot 2025-09-04 101835.png'
// @ts-ignore
import culdnarySystem from '../images/projects images/baking-and-pastry-school-2-scaled (1).jpg'

// @ts-ignore
import portfolio from '../images/projects images/Screenshot 2025-08-17 104048.png'

// @ts-ignore
import proPic from '../images/proPic/WhatsApp Image 2025-04-23 at 22.28.50_f03646c4.jpg'
// @ts-ignore
import proPic2 from '../images/proPic/WhatsApp Image 2025-04-23 at 22.28.50_f03646c4.jpg'

import emailjs from 'emailjs-com';


import React, {useEffect, useState} from "react";

export default function PortfolioHomepage():any {

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
            title: "Madushi Fashion POS System",
            description: "A Point-of-Sale (POS) system developed for Madushi Fashion to streamline sales, customer management, and inventory tracking. Built using HTML, CSS, Bootstrap, and JavaScript, with a user-friendly dashboard for day-to-day retail operations.",
            image: madushifashionimage,
            technologies: ["JSP", "CSS", "Bootstrap", "JavaScript"],
            status: "Completed",
            githubUrl: "https://github.com/thushini21/Madushi-Fashion-Pos.git", // replace with actual repo
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
            id: 3,
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
            id: 4,
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
            id: 5,
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
            .then((result) => {
                console.log('Email sent:', result.text);
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
            })
            .catch((error) => {
                console.log('Email failed:', error.text);
                alert('Failed to send message.');
            });
    };

    const [visibleCount, setVisibleCount] = useState(3);

    const loadMore = () => {
        setVisibleCount((prev) => Math.min(prev + 3, projects.length));
    };



    const [isOpen, setIsOpen] = useState(false);

    // @ts-ignore
    // @ts-ignore
    return (
        <div
            className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-gradient-to-br from-slate-900 via-slate-800 to-slate-800 text-white">

            {/* Navigation */}
            <nav className="flex items-center justify-between px-8 py-6 fixed w-full bg-transparent z-10">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-white hover:text-blue-400 transition-colors border-b-2 border-blue-400 pb-1">HOME</a>
                    <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">ABOUT ME</a>
                    <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors">SKILLS</a>
                    <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">PROJECTS</a>
                    <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">SERVICES</a>
                    <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">CONTACT</a>
                </div>



                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white p-2"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)}></div>
                    <div className="fixed top-0 right-0 w-64 h-full bg-slate-900/95 backdrop-blur-lg shadow-xl">
                        <div className="flex flex-col p-6 space-y-6 mt-20">
                            <a
                                href="#home"
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:text-blue-400 transition-colors border-b border-blue-400/30 pb-3 text-lg font-medium"
                            >
                                HOME
                            </a>
                            <a
                                href="#about"
                                onClick={() => setIsOpen(false)}
                                className="text-gray-300 hover:text-blue-400 transition-colors text-lg"
                            >
                                ABOUT ME
                            </a>
                            <a
                                href="#skills"
                                onClick={() => setIsOpen(false)}
                                className="text-gray-300 hover:text-blue-400 transition-colors text-lg"
                            >
                                SKILLS
                            </a>
                            <a
                                href="#projects"
                                onClick={() => setIsOpen(false)}
                                className="text-gray-300 hover:text-blue-400 transition-colors text-lg"
                            >
                                PROJECTS
                            </a>
                            <a
                                href="#services"
                                onClick={() => setIsOpen(false)}
                                className="text-gray-300 hover:text-blue-400 transition-colors text-lg"
                            >
                                SERVICES
                            </a>
                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="text-gray-300 hover:text-blue-400 transition-colors text-lg"
                            >
                                CONTACT
                            </a>


                        </div>
                    </div>
                </div>
            )}

            <br/><br/> <br/><br/>
            {/* Hero Section */}
            <section
                id="home"
                className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 py-12 max-w-7xl mx-auto relative snap-start">
                {/* Left Content */}
                <div className="flex-1 max-w-2xl mt-12 md:mt-0 text-center md:text-left">
                    <div className="mb-8">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Hi , I'm Thushini
                        </h1>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400  to-cyan-400">
                    UI UX Designer
                </span>
                        </h2>
                    </div>

                    <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
                        Passionate about creating innovative web solutions with modern technologies.
                        I build scalable applications that deliver exceptional user experiences and
                        robust backend functionality.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center justify-center md:justify-start space-x-3">
                        <a href="https://web.facebook.com/nethmi.kavindi.14289?_rdc=1&_rdr#" target="_blank" rel="noreferrer"
                           className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                            <FaFacebookF className="w-5 h-5 text-white" />
                        </a>
                        <a href="https://github.com/nethmidilekshakavi" target="_blank" rel="noreferrer"
                           className="w-12 h-12 bg-gray-800 hover:bg-gray-900 rounded-full flex items-center justify-center transition-colors">
                            <FaGithub className="w-5 h-5 text-white" />
                        </a>
                        <a href="https://www.linkedin.com/in/nethmi-dileksha-85b268319/" target="_blank" rel="noreferrer"
                           className="w-12 h-12 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors">
                            <FaLinkedinIn className="w-5 h-5 text-white" />
                        </a>
                        <a href="http://www.youtube.com/@nethmidileksha413" target="_blank" rel="noreferrer"
                           className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors">
                            <FaYoutube className="w-5 h-5 text-white" />
                        </a>
                    </div>
                </div>

                {/* Right Content */}
                <div className="flex-1 flex justify-center items-center mt-12 md:mt-0">
                    <div className="w-[300px] sm:w-[400px] md:w-[500px] aspect-square bg-gradient-to-br overflow-hidden rounded-2xl">
                        <img
                            src={profile}
                            alt="Profile"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section
                id="about"
                className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between gap-12 px-8 max-w-7xl mx-auto snap-start overflow-hidden py-12 pt-32"
            >
                {/* Left Image */}
                <div className="flex-1 flex justify-center relative">
                    <div className="relative w-72 sm:w-80 md:w-96 h-[400px] sm:h-[450px] md:h-[500px] group">
                        {/* Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl scale-110 group-hover:scale-125 transition-transform duration-700"></div>

                        {/* Image */}
                        <div className="relative w-full h-full bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-3xl border border-slate-600/50 shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
                            <img
                                src={proPic2}
                                alt="About Profile"
                                className="w-full h-full object-cover rounded-3xl"
                            />
                        </div>
                    </div>
                </div>


                {/* Right Content */}
                <div className="flex-1 max-w-2xl text-center lg:text-left relative z-10">
                    <p className="text-blue-300 text-sm tracking-[0.3em] mb-4 font-light">
                        A B O U T M E
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                        I AM AVAILABLE FOR{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
        FULL STACK DEVELOPMENT
      </span>{" "}
                        PROJECTS
                    </h2>

                    <div className="space-y-6 mb-8">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            My name is <span className="text-blue-400 font-semibold">Thushini Akashi</span>,
                            Undergraduate full-stack developer from Sri Lanka, studying Software Engineering at IJSE.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            At IJSE, I gained a strong foundation in software engineering and programming.
                            I developed web applications, including a site for a local business that improved their online presence and sales.
                        </p>
                    </div>

                    <a
                        href="../pdf/"
                        download="thushiniCV.pdf"
                        className="inline-block"
                    >
                        <button className="group relative bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full font-medium flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                            <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
                            <span>DOWNLOAD CV</span>
                        </button>
                    </a>
                </div>
            </section>


            {/*my skills*/}
            <section
                id="skills"
                className="relative min-h-screen py-20 px-8 max-w-7xl mx-auto snap-start overflow-hidden"
            >
                {/* Animated Background */}
                <div className="absolute inset-0 -z-10">
                    {/* Main Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900/20 to-purple-900/30"></div>

                    {/* Moving Geometric Shapes */}
                    <div className="absolute inset-0">
                        {[...Array(15)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute opacity-10"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 5}s`
                                }}
                            >
                                <div className={`w-8 h-8 bg-gradient-to-r ${skills[i % skills.length]?.color} rounded-lg animate-float-${i % 3}`}></div>
                            </div>
                        ))}
                    </div>

                    {/* Glowing Orbs */}
                    <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
                    <div className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-full blur-2xl animate-float"></div>
                </div>

                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <p className="text-blue-300 text-sm tracking-[0.3em] mb-4 font-light">
                        M Y  S K I L L S
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
          <span className="bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-text">
            TECHNICAL EXPERTISE
          </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Crafting digital solutions with modern technologies and creative problem-solving
                    </p>
                </div>

                <div className="relative mb-20">
                    {/* Center Skills Display */}
                    <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
                        {skills.map((skill, index) => (
                            <div
                                key={skill.name}
                                className="group relative"
                                data-aos="zoom-in"
                                data-aos-delay={index * 80}
                            >
                                {/* Hexagon Container */}
                                <div className="relative w-32 h-32 lg:w-40 lg:lg:h-40">
                                    {/* Background Glow */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-all duration-700 scale-150`}></div>

                                    {/* Main Hexagon */}
                                    <div className="relative w-full h-full">
                                        {/* Outer Ring */}
                                        <div className="absolute inset-0 rounded-full border-2 border-slate-700/50 bg-slate-800/30 backdrop-blur-sm group-hover:border-blue-400/50 transition-all duration-500"></div>

                                        {/* Progress Ring */}
                                        <div className="absolute inset-2">
                                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                                <circle
                                                    cx="50"
                                                    cy="50"
                                                    r="40"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    fill="none"
                                                    className="text-slate-700/30"
                                                />
                                                <circle
                                                    cx="50"
                                                    cy="50"
                                                    r="40"
                                                    stroke="url(#gradient)"
                                                    strokeWidth="3"
                                                    fill="none"
                                                    strokeDasharray={`${2 * Math.PI * 40}`}
                                                    className="transition-all duration-1000 ease-out"
                                                    style={{ animationDelay: `${index * 200}ms` }}
                                                />
                                                <defs>
                                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                        <stop offset="0%" stopColor="#3B82F6" />
                                                        <stop offset="100%" stopColor="#8B5CF6" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>

                                        {/* Inner Content */}
                                        <div className="absolute inset-6 flex flex-col items-center justify-center">
                                            <div className={`mb-2 group-hover:scale-110 transition-transform duration-300`}>
                                                {/* Image icon */}
                                                <img src={skill.icon} alt={skill.name} className="w-12 h-12 lg:w-16 lg:h-16" />
                                            </div>
                                            <div className="text-xs lg:text-sm font-semibold text-white/80 text-center leading-tight">
                                                {skill.name}
                                            </div>
                                        </div>


                                        {/* Floating Indicators */}
                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                                    </div>
                                </div>

                                {/* Skill Name Label */}
                                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${skill.color} text-white shadow-lg`}>
                                        {skill.category}
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            <section
                id="projects"
                className="relative py-20 px-8 max-w-7xl mx-auto mt-[-90px]"
            >
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-text">
                        M Y  P R O J E C T S
  </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        A showcase of innovative projects built with modern web technologies,
                        blending functionality, performance, and design to deliver real-world impact.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 snap-start">
                    {projects.slice(0, visibleCount).map((project) => (
                        <div
                            key={project.id}
                            className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-600/50 rounded-3xl overflow-hidden group hover:border-blue-400/50 transition-all duration-500"
                        >
                            {/* Project Image */}
                            <div className="relative h-60 overflow-hidden rounded-t-3xl">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                {/*<div className="flex items-center space-x-2 mb-2">*/}
                                {/*    <Tag className="w-4 h-4 text-purple-400" />*/}
                                {/*</div>*/}
                                <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg text-sm text-blue-300 font-medium"
                                        >
                    {tech}
                  </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex space-x-2 mt-2">
                                    {project.githubFrontendUrl && (
                                        <a
                                            href={project.githubFrontendUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-3 py-2 bg-slate-700/50 rounded-lg text-gray-300 hover:bg-slate-600/50 transition-colors"
                                        >
                                            <Github className="w-4 h-4" /> Frontend
                                        </a>
                                    )}
                                    {project.githubBackendUrl && (
                                        <a
                                            href={project.githubBackendUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-3 py-2 bg-slate-700/50 rounded-lg text-gray-300 hover:bg-slate-600/50 transition-colors"
                                        >
                                            <Github className="w-4 h-4" /> Backend
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center px-3 py-2 bg-slate-700/50 rounded-lg text-gray-300 hover:bg-slate-600/50 transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {visibleCount < projects.length && (
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={loadMore}
                            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:scale-105 transition-transform"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </section>


            {/*services section*/}
            <section
                id="services"
                className="relative min-h-screen flex flex-col items-center justify-center gap-16 px-8 py-20 max-w-7xl mx-auto snap-start overflow-hidden mt-[-90px]"
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
                <div className="text-center relative z-10 mb-8">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-text">
                        M Y     S E R V I C E S
  </span>
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full relative z-10">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-600/50 hover:border-blue-400/50 p-6 transition-all duration-500 hover:scale-105 hover:bg-slate-700/70"
                            style={{
                                animationDelay: `${index * 0.2}s`
                            }}
                        >
                            {/* Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-all duration-500`}></div>

                            {/* Animated Border */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} p-[1px] opacity-0 group-hover:opacity-100 transition-all duration-500`}>
                                <div className="w-full h-full bg-slate-800 rounded-2xl"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon */}
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <div className="text-white">
                                        {service.icon}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                                    {service.description}
                                </p>

                                {/* Rating */}
                                <div className="flex items-center gap-1">
                                    {renderStars(service.rating)}
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                            <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100"></div>
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
                className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between gap-16 px-8 py-20 max-w-7xl mx-auto snap-start overflow-hidden"
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
                    <div className="absolute top-20 left-10 w-32 h-32 border border-blue-500/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
                    <div className="absolute bottom-20 right-10 w-24 h-24 border border-purple-500/20 rotate-45 animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-cyan-500/20 rounded-lg animate-bounce" style={{animationDuration: '3s'}}></div>

                    {/* Glowing Orbs */}
                    <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>

                {/* Left Side - Profile and Contact Info */}
                <div className="flex-1 flex flex-col items-center lg:items-start space-y-8 relative z-10">
                    {/* Profile Image */}
                    <div className="relative w-80 h-96 group">
                        {/* Glow Effect Behind Image */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl transform scale-110 group-hover:scale-125 transition-transform duration-700"></div>

                        {/* Main Image Container */}
                        <div className="relative w-full h-full bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-3xl border border-slate-600/50 shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-blue-500/20">
                            {/* Animated Border */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-cyan-500/50 p-[2px] animate-pulse">
                                <div className="w-full h-full bg-slate-800 rounded-3xl"></div>
                            </div>

                            <div className="relative z-10 w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl overflow-hidden">
                                <img
                                    src={proPic2} // proPic should be a URL or imported image
                                    alt="Profile"
                                    className="w-full h-full object-cover opacity-60"
                                />
                            </div>

                            {/* Overlay Effects */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Floating Elements */}
                            <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                            <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6 w-full max-w-sm">
                        {/* Email */}
                        <div className="group">
                            <p className="text-blue-300 text-sm tracking-[0.2em] mb-2 font-light">
                               PUT E-MAIL
                            </p>
                            <div className="flex items-center space-x-3 text-white text-lg font-medium group-hover:text-blue-300 transition-colors duration-300">
                                <Mail className="w-5 h-5 text-blue-400" />
                                <span>thushiniakashi58@gmail.com</span>
                            </div>
                        </div>


                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="flex-1 max-w-2xl w-full relative z-10">
                    <div className="mb-12">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-text">
                      CONTACT ME
  </span>
                        </h2>

                    </div>

                    {/* Contact Form */}
                    <div className="space-y-6">
                        {/* Name and Email Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-blue-300 text-sm tracking-[0.1em] mb-2 block font-light">
                                    YOUR NAME
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    onChange={handleInputChange}
                                    value={formData.name}
                                    placeholder="Name *"
                                    className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 focus:bg-slate-700/70 transition-all duration-300"
                                />
                            </div>
                            <div>
                                <label className="text-blue-300 text-sm tracking-[0.1em] mb-2 block font-light">
                                    YOUR EMAIL
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Email *"
                                    className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 focus:bg-slate-700/70 transition-all duration-300"
                                />
                            </div>
                        </div>

                        {/* Subject */}
                        <div>
                            <label className="text-blue-300 text-sm tracking-[0.1em] mb-2 block font-light">
                                SUBJECT
                            </label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                placeholder="Subject *"
                                className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 focus:bg-slate-700/70 transition-all duration-300"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="text-blue-300 text-sm tracking-[0.1em] mb-2 block font-light">
                                YOUR MESSAGE
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Your message *"
                                rows={6}
                                className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 focus:bg-slate-700/70 transition-all duration-300 resize-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            onClick={handleFormSubmitted}
                            className="group relative w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full font-medium flex items-center justify-center space-x-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transform-gpu"
                        >
                            <span className="relative z-10">SEND MESSAGE</span>
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                        </button>
                    </div>
                </div>

                {/* Bottom Decorative Dot */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                </div>
            </section>

            {/*footer section*/}
            <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden snap-start">
                {/* Animated Background */}
                <div className="absolute inset-0 -z-10">
                    {/* Floating Particles */}
                    <div className="absolute inset-0">
                        {[...Array(15)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 3}s`,
                                    animationDuration: `${3 + Math.random() * 2}s`,
                                }}
                            ></div>
                        ))}
                    </div>

                    {/* Geometric Shapes */}
                    <div
                        className="absolute top-10 left-10 w-20 h-20 border border-blue-500/10 rounded-full animate-spin"
                        style={{ animationDuration: "30s" }}
                    ></div>
                    <div className="absolute bottom-20 right-20 w-16 h-16 border border-purple-500/10 rotate-45 animate-pulse"></div>

                    {/* Glowing Orbs */}
                    <div className="absolute top-0 left-1/3 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/3 w-24 h-24 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-2xl"></div>
                </div>

                {/* Main Footer Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
                    {/* Top Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
                        {/* About Column */}
                        <div className="space-y-6 text-center sm:text-left">
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                Thushini Akashi
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                                UI/UX Designer passionate about crafting intuitive and visually engaging user experiences.
                                Transforming ideas into elegant, user-centered digital products with modern design practices.
                            </p>
                            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
                                <a
                                    href="https://web.facebook.com/nethmi.kavindi.14289?_rdc=1&_rdr#"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                                >
                                    <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                </a>
                                <a
                                    href="https://github.com/thushini21"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 hover:bg-gray-900 rounded-full flex items-center justify-center transition-colors"
                                >
                                    <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/nethmi-dileksha-85b268319/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors"
                                >
                                    <FaLinkedinIn className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                </a>
                                <a
                                    href="http://www.youtube.com/@nethmidileksha413"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors"
                                >
                                    <FaYoutube className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-6 text-center sm:text-left">
                            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                            <ul className="space-y-3 text-sm sm:text-base">
                                {["About", "Services", "Projects", "Contact", "Blog"].map(
                                    (link, index) => (
                                        <li key={index}>
                                            <a
                                                href={`#${link.toLowerCase()}`}
                                                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="space-y-6 text-center sm:text-left">
                            <h4 className="text-lg font-semibold text-white">Services</h4>
                            <ul className="space-y-3 text-sm sm:text-base">
                                {[
                                    "Web Design",
                                    "Mobile Apps",
                                    "Graphic Design",
                                ].map((service, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                                        >
                                            {service}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6 text-center sm:text-left">
                            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
                            <div className="space-y-4 text-sm sm:text-base">
                                <div className="flex justify-center sm:justify-start items-start space-x-3 group">
                                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-1 group-hover:text-blue-300" />
                                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                        thushiniakashi58@gmail.com
                                    </p>
                                </div>
                                <div className="flex justify-center sm:justify-start items-start space-x-3 group">
                                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mt-1 group-hover:text-purple-300" />
                                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                        +94 740113685
                                    </p>
                                </div>
                                <div className="flex justify-center sm:justify-start items-start space-x-3 group">
                                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mt-1 group-hover:text-cyan-300" />
                                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                        Colombo, Sri Lanka
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="relative mb-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-600/50"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                        <div className="flex flex-wrap items-center justify-center md:justify-start space-x-2 text-gray-400 text-sm sm:text-base">
                            <span>Create By</span>
                            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                            <span>by Thushini Akashi © 2025. All rights reserved.</span>
                        </div>

                        {/* Back to Top Button */}
                        <button
                            onClick={scrollToHome}
                            className="group relative bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 hover:bg-slate-600/70 hover:border-blue-400/50 p-3 rounded-full transition-all duration-300 hover:scale-110"
                        >
                            <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-blue-400 group-hover:-translate-y-1 transition-all duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </div>
                </div>

                {/* Animated Bottom Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-50"></div>
            </footer>

        </div>
    );
}
