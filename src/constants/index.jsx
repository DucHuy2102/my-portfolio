import {
    FaXTwitter,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaDiscord,
    FaInstagram,
} from 'react-icons/fa6';

import projectImage1 from '../assets/project1.jpeg';
import projectImage2 from '../assets/project2.jpeg';
import projectImage3 from '../assets/project3.jpeg';
import projectImage4 from '../assets/project4.jpeg';
import projectImage5 from '../assets/project5.jpeg';
import projectImage6 from '../assets/project6.jpeg';

import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { FaJava, FaNodeJs } from 'react-icons/fa';

export const NAVIGATION_LINKS = [
    { label: 'Projects', href: 'projects' },
    { label: 'Bio', href: 'bio' },
    { label: 'Skills', href: 'skills' },
    // { label: 'Work Experience', href: 'work' },
    { label: 'Education', href: 'education' },
    { label: 'Contact', href: 'contact' },
];

export const HERO = {
    name: 'DUC HUY',
    greet: 'Hello there! 👋🏻',
    description:
        'I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade.',
};

export const PROJECTS = [
    {
        id: 1,
        name: 'Personal Portfolio',
        description:
            'A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.',
        image: projectImage1,
        githubLink: 'https://github.com/DucHuy2102/my-portfolio.git',
    },
    {
        id: 2,
        name: 'Watch Store',
        description:
            'A website using ReactJS for the frontend and Java Spring for backend, includes all the features: login, registration, account management, search, viewing and purchasing products, as well as the checkout function.',
        image: projectImage2,
        githubLink: 'https://github.com/DucHuy2102/Watches_Store.git',
    },
    {
        id: 3,
        name: 'Blog Application',
        description:
            'This project is a blog application built with the MERN stack, designed for a smooth experience on all devices. It includes secure login with JSON Web Tokens and Google OAuth.',
        image: projectImage3,
        githubLink: 'https://github.com/DucHuy2102/mern-blog-app.git',
    },
    {
        id: 4,
        name: 'Authentication Advance',
        description:
            'An authentication project using the MERN Stack, where users can log in with email and password or via Google. It also includes features for password recovery and reset.',
        image: projectImage4,
        githubLink: 'https://github.com/DucHuy2102/mern-auth.git',
    },
    {
        id: 5,
        name: 'Chat Application',
        description:
            'Chat application including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.',
        image: projectImage5,
        githubLink: 'https://github.com/DucHuy2102/chat-app-firebase.git',
    },
    {
        id: 6,
        name: 'To Do List',
        description:
            'A simple to-do list application built with the MERN stack. Users can create, update, and delete tasks, as well as mark them as completed.',
        image: projectImage6,
        githubLink: 'https://github.com/DucHuy2102/todoList_MERN.git',
    },
];

export const BIO = [
    'Nguyen Duc Huy earned his degree in Information Technology from Ho Chi Minh City University of Technology and Education in 2024. During his studies, he honed his skills in user interface design and mastered key frontend technologies such as HTML, CSS, and JavaScript. His commitment to creating seamless, user-friendly interfaces earned him recognition from peers and professors, establishing a solid foundation for his career in frontend development.',
    'Driven by a passion for innovative web solutions and exceptional user experiences, Nguyen Duc Huy actively engaged in personal projects, internships, and collaborations during his time at university. These experiences allowed him to apply his frontend development skills in real-world scenarios, blending creativity with cutting-edge technologies. Outside of his professional pursuits, Huy enjoys playing soccer and listening to music, which further fuels his creativity and drive.',
    'As a frontend developer, Nguyen Duc Huy brings extensive experience and expertise to every project. With a deep understanding of HTML, CSS, JavaScript, and modern frameworks like React, he crafts visually stunning and engaging web experiences. His dedication to pushing the boundaries of design and technology ensures that his clients and audiences are consistently impressed by the digital products he creates.',
];

export const SKILLS = [
    {
        icon: <RiReactjsLine className='text-4xl text-cyan-400 lg:text-5xl' />,
        name: 'React',
        experience: '2+ years',
    },
    {
        icon: <FaJava className='text-4xl text-white lg:text-5xl' />,
        name: 'Java',
        experience: '1+ year',
    },
    {
        icon: <SiMongodb className='text-4xl text-green-600 lg:text-5xl' />,
        name: 'MongoDB',
        experience: '1.5+ years',
    },
    {
        icon: <RiTailwindCssFill className='text-4xl text-red-600 lg:text-5xl' />,
        name: 'Tailwind CSS',
        experience: '2+ year',
    },
    {
        icon: <FaNodeJs className='text-4xl text-green-600 lg:text-5xl' />,
        name: 'Node.js',
        experience: '1+ years',
    },
    {
        icon: <FaGithub className='text-4xl text-sky-700 lg:text-5xl' />,
        name: 'Github',
        experience: '2+ year',
    },
];

export const EXPERIENCES = [
    {
        title: 'Lead Frontend Developer',
        company: 'Innovative Tech Solutions',
        duration: 'July 2020 - Present',
        description:
            'As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.',
    },
    {
        title: 'Frontend Engineer',
        company: 'Digital Creations',
        duration: 'February 2016 - June 2020',
        description:
            'At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ',
    },
    {
        title: 'Junior Web Developer',
        company: 'Bright Future Technologies',
        duration: 'August 2014 - January 2016',
        description:
            'In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.',
    },
];

export const EDUCATION = [
    {
        degree: 'Bachelor of Engineering in Information Technology',
        institution: 'Ho Chi Minh City University of Technology and Education',
        duration: 'September 2020 - September 2024',
        description:
            'Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.',
    },
];

export const SOCIAL_MEDIA_LINKS = [
    {
        href: 'https://www.facebook.com/Duc.Huy2102/',
        icon: <FaFacebook fontSize={25} className='hover:opacity-80' />,
    },
    {
        href: 'https://x.com/',
        icon: <FaDiscord fontSize={25} className='hover:opacity-80' />,
    },
    {
        href: 'https://x.com/',
        icon: <FaInstagram fontSize={25} className='hover:opacity-80' />,
    },
    {
        href: 'https://x.com/',
        icon: <FaXTwitter fontSize={25} className='hover:opacity-80' />,
    },
    {
        href: 'https://github.com/DucHuy2102',
        icon: <FaGithub fontSize={25} className='hover:opacity-80' />,
    },
    {
        href: 'https://www.linkedin.com/in/duchuy2102/',
        icon: <FaLinkedin fontSize={25} className='hover:opacity-80' />,
    },
];
