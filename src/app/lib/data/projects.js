import project1 from '../../../assets/Cover.png'
import project2 from '../../../assets/Mobile UI Kit_ Ecommerce (Community) (Copy).png'
import project3 from '../../../assets/Blue Gradient Linktree Background.png'
import project4 from '../../../assets/Figue.io - Typing Animation in Chat.png'
import project5 from '../../../assets/second shot v2.png';
import project6 from '../../../assets/sqlite_project.png';
import project7 from '../../../assets/Dark Blossom.png';
import project8 from '../../../assets/photopia_cover.png';
import project9 from '../../../assets/Frame 34.png';
import project10 from '../../../assets/Desktop - 2.png';
import project11 from '../../../assets/Screenshot 2026-04-21 021157.png';
import project12 from '../../../assets/coffe_app_cover.png';
import project13 from '../../../assets/djrana_cover.png';

export const projects = [
    {
        slug: "beancraft-coffee",
        title: "BeanCraft Coffee App",
        category: "Mobile App",
        desc: "A premium coffee ordering and delivery application featuring custom brew settings, scheduled pickup, and integrated loyalty rewards.",
        longDesc: "BeanCraft is a highly polished mobile application designed for coffee enthusiasts. It allows users to search for premium coffee blends, customize drinks (milk preferences, sweetness, extra espresso shots), schedule pick-up times to avoid queues, and track delivery routes in real time.",
        img: project12,
        tech: ["Flutter", "Provider", "Node.js", "AWS", "Stripe"],
        features: [
            "Interactive beverage customization engine",
            "Scheduled pick-up queue management system",
            "Loyalty rewards stamp card and point dashboard",
            "Secured quick checkout integration via Stripe"
        ],
        github: "https://github.com/nazmul8451/Coffee-Shop-App.git",
        live: "#",
    },
    {
        slug: "pokemon-scanner",
        title: "Pokémon Card Scanner",
        category: "AI & Collector Tool",
        desc: "Advanced AI-powered scanner that identifies Pokémon cards instantly and tracks real-time market values, collection trends, and price history.",
        longDesc: "An AI-powered scanner designed for Pokémon card collectors. The application uses advanced computer vision to instantly identify cards, check real-time market valuations across multiple platforms, and catalog collections with interactive historical charts.",
        img: project9,
        tech: ["Flutter", "AI / ML", "Rest API", "Socket", "Push Notification"],
        features: [
            "Real-time AI camera detection for instant card scanning",
            "Integration with TCGPlayer API for up-to-date pricing",
            "Historical valuation charts to track collection worth over time",
            "Wishlist and deck-building management tools"
        ],
        github: "https://github.com/nazmul8451/PokemonCardScanner.git",
        live: "#",
    },
    {
        slug: "djarna-marketplace",
        title: "Djarna - Marketplace",
        category: "E-Commerce",
        desc: "A comprehensive buy-and-sell marketplace platform inspired by Bikroy.com, allowing users to list products for sale and make secure purchases seamlessly.",
        longDesc: "A premium buy-and-sell marketplace app inspired by Bikroy.com. Djarna allows local communities to safely trade goods with localized search capabilities, instant chat messaging, and category filter systems optimized for performance.",
        img: project13,
        tech: ["Flutter", "Rest API", "GetX", "Socket", "Push Notification"],
        features: [
            "Geo-location search to find deals close to home",
            "Real-time in-app chat between buyers and sellers with push notifications",
            "Secure post listing with image uploads and category classification",
            "User ratings and verified profiles for trust"
        ],
        github: "https://github.com/nazmul8451/Djarna.git",
        live: "#",
    },
    {
        slug: "event-discovery",
        title: "Event Discovery App",
        category: "Mobile App",
        desc: "A feature-rich event discovery app with real-time maps, category filtering, and social engagement tools.",
        longDesc: "A feature-rich event planning and discovery application. It helps users find near-by concerts, meetups, and workshops using an interactive map, and features tools for seamless ticket reservation and event hosting.",
        img: project7,
        tech: ["Flutter", "Dart", "Google Maps", "Firebase"],
        features: [
            "Interactive Google Maps implementation with custom event markers",
            "Real-time ticket registration and digital check-ins via QR codes",
            "Personalized recommendations based on user interests",
            "Social engagement features including event comments and sharing"
        ],
        github: "https://github.com/nazmul8451/Event-Discovery-App.git",
        live: "#",
    },
    {
        slug: "photopia-marketplace",
        title: "Photopia - Moment Marketplace",
        category: "Platform",
        desc: "A dedicated marketplace for photographers to showcase and sell their captured moments.",
        longDesc: "A robust marketplace app dedicated to professional and amateur photographers. Creators can host portfolios, set pricing tiers, and sell digital downloads securely with automated payment handling.",
        img: project8,
        tech: ["Flutter", "Firebase", "Stripe"],
        features: [
            "Instant digital delivery with automated watermarking",
            "Secure online payments powered by Stripe",
            "Flexible licensing options for commercial and personal usage",
            "Curated explorer feed featuring top-rated photographers"
        ],
        github: "https://github.com/nazmul8451/Photopia-MomentMarketplace.git",
        live: "#",
    },
    {
        slug: "clipframe-scheduler",
        title: "ClipFrame - Social Scheduler",
        category: "Social Media / Utility",
        desc: "Advanced social media management app for scheduling posts, reels, and stories. Features built-in photo/video editing powered by FFmpeg.",
        longDesc: "A social media tool that lets creators draft, edit, and schedule video content. Leveraging FFmpeg directly on the client, users can apply filters and render short clips before automated publishing.",
        img: project11,
        tech: ["Flutter", "FFmpeg", "GetX", "Rest API", "Socket"],
        features: [
            "Visual timeline scheduler with calendar views",
            "Client-side video editing and transcoding powered by FFmpeg",
            "Multi-platform auto-posting (Instagram, TikTok, YouTube Shorts)",
            "Engagement metrics and analytics dashboard"
        ],
        github: "https://github.com/Mosaidur/clip_frame.git",
        live: "#",
    },
    {
        slug: "online-grocery",
        title: "Online Grocery App",
        category: "E-Commerce",
        desc: "A modern grocery delivery app featuring a smooth browsing experience, cart management, and order tracking.",
        longDesc: "A fast, modern grocery app designed for seamless e-commerce transactions. Users can browse thousands of products across categories, manage dynamic shopping carts, and track delivery drivers in real time.",
        img: project2,
        tech: ["Flutter", "Provider", "Rest API"],
        features: [
            "Lightning-fast product search with predictive autocomplete",
            "Dynamic cart updates and secure multi-method checkout",
            "Real-time order status tracking with driver navigation",
            "Personalized grocery lists and recurring orders"
        ],
        github: "https://github.com/nazmul8451/Online-Grocary-App",
        live: "#",
    },
    {
        slug: "task-manager",
        title: "Task Manager Pro",
        category: "Productivity",
        desc: "Efficient task management solution with GetX state management for real-time updates and seamless UX.",
        longDesc: "An advanced productivity workspace that goes beyond standard checklists. Featuring GetX state management, it offers interactive Kanban boards, time-tracking logs, and team workspace collaboration.",
        img: project3,
        tech: ["Flutter", "GetX", "Rest API"],
        features: [
            "Drag-and-drop Kanban board for task status tracking",
            "Integrated pomodoro timer with daily productivity statistics",
            "Workspace sharing with live synchronized comments",
            "Custom color-coded labels and priority filtering"
        ],
        github: "https://github.com/nazmul8451/Task-Manager",
        live: "#",
    },
    {
        slug: "ai-chatbot",
        title: "AI Chat Bot",
        category: "Artificial Intelligence",
        desc: "Smart conversational AI interface with typing animations and real-time response handling.",
        longDesc: "An intelligent conversational agent featuring real-time speech-to-text, context retention, and multi-turn chat loops powered by the latest OpenAI language models. Includes fluid bubble animations and typing feedback.",
        img: project4,
        tech: ["Flutter", "OpenAI API", "Animation"],
        features: [
            "Streaming API integrations for real-time typing response",
            "Interactive custom animations for speech visualizer and typing bubbles",
            "Markdown parser for clean rendering of code snippets and tables",
            "Offline chat history backup and exports"
        ],
        github: "https://github.com/nazmul8451/Task-Manager",
        live: "#",
    },
    {
        slug: "meditation-app",
        title: "Meditation App",
        category: "Health & Wellness",
        desc: "Calming meditation app with audio playback, minimalist UI, and progress tracking features.",
        longDesc: "A beautiful wellness application designed to support mental clarity. It includes an extensive library of ambient soundscapes, guided breathing timers, and detailed meditation streaks tracked with Riverpod.",
        img: project5,
        tech: ["Flutter", "Audio Player", "Riverpod"],
        features: [
            "High-fidelity background audio player with volume blending",
            "Animated circular breathing visualizer with customizable intervals",
            "Streak trackers and milestone calendars for user retention",
            "Offline mode for downloaded soundscapes"
        ],
        github: "https://github.com/nazmul8451/Meditation-app.git",
        live: "#",
    },
    {
        slug: "sqlite-crud",
        title: "SQLite CRUD App",
        category: "Database Tool",
        desc: "Robust local database management app demonstrating CRUD operations with offline retention.",
        longDesc: "A robust offline utility app illustrating data retention best practices in mobile environments. Users can structure, filter, and search persistent data schemas without an active internet connection.",
        img: project6,
        tech: ["Flutter", "SQLite", "Local Storage"],
        features: [
            "Raw SQL query editor with safe parametrization",
            "Fast bulk imports/exports via CSV and JSON formats",
            "Custom data tables with dynamic search filtering",
            "Automatic database migration handles"
        ],
        github: "https://github.com/nazmul8451/SQLite-CRUD-APP.git",
        live: "#",
    },
];
