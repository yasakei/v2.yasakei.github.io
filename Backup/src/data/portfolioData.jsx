import { Code, Palette, Globe, Package, Brain, Clock } from 'lucide-react';

export const navItems = [
    { name: "Home", link: "#home" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" }
];

export const repositories = [
    {
        name: "theFont",
        url: "https://github.com/yasakei/theFont",
        description: "theFont is a clean and minimalistic CLI tool to easily download and install fonts from different font websites like dafont.com",
        image: "https://yas.ct.ws/cdn/uploads/6878eb5fd180d.png",
        forks: 0,
        stars: 1
    },
    {
        name: "Snippy",
        url: "https://github.com/yasakei/Snippy",
        description: "Snippy is a simple yet powerful command-line tool for saving, managing, and running your favorite shell command snippets.",
        image: "https://yas.ct.ws/cdn/uploads/6878eacef1088.png",
        forks: 0,
        stars: 0
    },
    {
        name: "Writify",
        url: "https://github.com/yasakei/Writify",
        description: "Your AI-powered grammar fixer for Firefox",
        image: "https://yas.ct.ws/cdn/uploads/6878ec2031bbc.png",
        forks: 0,
        stars: 0
    },
    {
        name: "BlockAccess",
        url: "https://github.com/yasakei/blockAccess",
        description: "This PHP project detects the client's geolocation and VPN usage using the ip-api service and applies access control logic based on the detected data.",
        image: "https://yas.ct.ws/cdn/uploads/6878ec6702c50.png",
        forks: 0,
        stars: 0
    },
    {
        name: "Weby",
        url: "https://github.com/yasakei/Weby",
        description: "Weby is a lightweight, in-browser Markdown editor that provides a real-time preview of your rendered document.",
        image: "https://yas.ct.ws/cdn/uploads/687a4c74828c6.png",
        forks: 0,
        stars: 0
    },
    {
        name: "Livey",
        url: "https://github.com/yasakei/livey",
        description: "Livey is a stylish digital clock web app with real-time Spotify Now Playing support",
        image: "https://yas.ct.ws/cdn/uploads/68836493b6306.png",
        forks: 0,
        stars: 0
    }
];

export const skillsData = [
    {
        title: "Python",
        description: "The only snake that speaks in code.",
        header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-yellow-400 via-yellow-600 to-orange-600"></div>,
        icon: <Code className="h-4 w-4 text-neutral-300" />
    },
    {
        title: "JavaScript",
        description: "The magic that makes websites do things.",
        header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700"></div>,
        icon: <Clock className="h-4 w-4 text-neutral-300" />
    },
    {
        title: "Web Development",
        description: "Building digital sandcastles.",
        header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-400 via-blue-600 to-purple-600"></div>,
        icon: <Globe className="h-4 w-4 text-neutral-300" />
    },
    {
        title: "CSS",
        description: "The art of making websites look pretty.",
        header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-pink-400 via-pink-600 to-red-600"></div>,
        icon: <Palette className="h-4 w-4 text-neutral-300" />
    },
    {
        title: "Git",
        description: "A time machine for code.",
        header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-orange-400 via-red-500 to-pink-600"></div>,
        icon: <Package className="h-4 w-4 text-neutral-300" />
    },
    {
        title: "Problem Solving",
        description: "Staring at errors until the solution appears.",
        header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-green-400 via-teal-500 to-blue-600"></div>,
        icon: <Brain className="h-4 w-4 text-neutral-300" />
    }
];