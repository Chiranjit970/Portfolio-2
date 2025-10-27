/**
 * Default Portfolio Data
 * 
 * This file contains the complete default data structure for the portfolio application.
 * All sections are included with realistic placeholder data to match the expected schema
 * for DataContext and UI components.
 * 
 * Data Structure:
 * - personalInfo: Basic contact and identity information
 * - about: Bio and professional summary
 * - experience: Work history (array with ids for keying)
 * - skills: Technical skills grouped by category
 * - categories: Metadata for skill/project categories (colors, icons)
 * - projects: Portfolio projects with tech stacks and categories
 * - qualifications: Education and certifications
 * - socialLinks: Links to social media profiles
 * - resume: Link to downloadable resume
 */

const defaultData = {
  // Personal Information
  personalInfo: {
    firstName: 'Alex',
    lastName: 'Johnson',
    title: 'Full Stack Developer',
    email: 'alex.johnson@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    website: 'https://alexjohnson.dev',
    tagline: 'Building modern web experiences with cutting-edge technologies',
    avatar: '/assets/images/avatar.jpg', // Placeholder path
  },

  // About Section
  about: {
    summary: `Passionate full-stack developer with 5+ years of experience building scalable web applications. 
    Specialized in React, Node.js, and modern JavaScript frameworks. Strong advocate for clean code, 
    test-driven development, and continuous learning.`,
    bio: `I'm a creative problem-solver who loves turning complex challenges into elegant solutions. 
    My journey in software development started with a curiosity about how things work, and has evolved 
    into a career dedicated to crafting exceptional digital experiences. When I'm not coding, you can 
    find me contributing to open-source projects, writing technical blog posts, or exploring the latest 
    developments in web technologies.`,
    highlights: [
      'Led development of 3 major product launches',
      'Improved application performance by 60%',
      'Mentored 10+ junior developers',
      'Active open-source contributor',
    ],
  },

  // Work Experience (at least 3 entries)
  experience: [
    {
      id: 'exp-1',
      company: 'TechCorp Solutions',
      position: 'Senior Full Stack Developer',
      location: 'San Francisco, CA',
      type: 'Full-time',
      startDate: '2021-06',
      endDate: null, // null indicates current position
      current: true,
      description: `Leading the development of cloud-based enterprise solutions serving 10,000+ users. 
      Architecting scalable microservices and implementing modern React applications with advanced state management.`,
      responsibilities: [
        'Architected and implemented microservices architecture using Node.js and Docker',
        'Led a team of 5 developers in agile sprint cycles',
        'Improved application performance by 60% through code optimization and caching strategies',
        'Implemented CI/CD pipelines reducing deployment time by 75%',
        'Mentored junior developers and conducted code reviews',
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS', 'Redis'],
      achievements: [
        'Reduced API response time from 2s to 300ms',
        'Achieved 95% test coverage across the codebase',
        'Successfully migrated legacy system to modern tech stack',
      ],
    },
    {
      id: 'exp-2',
      company: 'StartupHub Inc',
      position: 'Full Stack Developer',
      location: 'Remote',
      type: 'Full-time',
      startDate: '2019-03',
      endDate: '2021-05',
      current: false,
      description: `Developed and maintained multiple client-facing applications for a fast-paced startup 
      environment. Collaborated directly with designers and product managers to deliver features rapidly.`,
      responsibilities: [
        'Built responsive web applications using React and Vue.js',
        'Designed and implemented RESTful APIs with Express.js',
        'Integrated third-party services including payment gateways and analytics',
        'Optimized database queries reducing load times by 40%',
        'Participated in sprint planning and daily standups',
      ],
      technologies: ['React', 'Vue.js', 'Express.js', 'MongoDB', 'GraphQL', 'Stripe API'],
      achievements: [
        'Launched 5 products from concept to production',
        'Increased user engagement by 45% through UI improvements',
        'Reduced bug reports by 60% through improved testing practices',
      ],
    },
    {
      id: 'exp-3',
      company: 'Digital Agency Pro',
      position: 'Frontend Developer',
      location: 'New York, NY',
      type: 'Full-time',
      startDate: '2018-01',
      endDate: '2019-02',
      current: false,
      description: `Created pixel-perfect, responsive websites for diverse clients across various industries. 
      Focused on delivering high-quality frontend experiences with attention to detail.`,
      responsibilities: [
        'Developed custom WordPress themes and plugins',
        'Implemented responsive designs using modern CSS techniques',
        'Collaborated with design team to ensure accurate implementation',
        'Optimized websites for SEO and performance',
        'Maintained client websites and provided technical support',
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'WordPress', 'Sass', 'Webpack'],
      achievements: [
        'Delivered 20+ client projects on time and within budget',
        'Improved average page load speed by 50%',
        'Received 5-star ratings from 95% of clients',
      ],
    },
    {
      id: 'exp-4',
      company: 'Freelance',
      position: 'Web Developer',
      location: 'Remote',
      type: 'Contract',
      startDate: '2017-06',
      endDate: '2017-12',
      current: false,
      description: `Provided web development services to small businesses and startups. Specialized in 
      building custom solutions tailored to specific business needs.`,
      responsibilities: [
        'Consulted with clients to understand requirements',
        'Built custom websites and web applications',
        'Provided ongoing maintenance and support',
        'Managed project timelines and client communications',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
      achievements: [
        'Successfully completed 15+ freelance projects',
        'Built long-term relationships with repeat clients',
        'Maintained 100% project completion rate',
      ],
    },
  ],

  // Categories Metadata (for skills and projects)
  categories: {
    frontend: {
      id: 'frontend',
      name: 'Frontend',
      color: '#3B82F6', // blue
      icon: 'Monitor', // lucide-react icon name
      description: 'User interface and client-side development',
    },
    backend: {
      id: 'backend',
      name: 'Backend',
      color: '#10B981', // green
      icon: 'Server',
      description: 'Server-side logic and APIs',
    },
    database: {
      id: 'database',
      name: 'Database',
      color: '#8B5CF6', // purple
      icon: 'Database',
      description: 'Data storage and management',
    },
    devops: {
      id: 'devops',
      name: 'DevOps',
      color: '#F59E0B', // amber
      icon: 'Cog',
      description: 'Deployment and infrastructure',
    },
    design: {
      id: 'design',
      name: 'Design',
      color: '#EC4899', // pink
      icon: 'Palette',
      description: 'UI/UX and visual design',
    },
    tools: {
      id: 'tools',
      name: 'Tools',
      color: '#6366F1', // indigo
      icon: 'Wrench',
      description: 'Development tools and utilities',
    },
    mobile: {
      id: 'mobile',
      name: 'Mobile',
      color: '#14B8A6', // teal
      icon: 'Smartphone',
      description: 'Mobile application development',
    },
  },

  // Skills grouped by category
  skills: [
    {
      categoryId: 'frontend',
      items: [
        { name: 'React', level: 95, years: 5 },
        { name: 'JavaScript (ES6+)', level: 95, years: 6 },
        { name: 'TypeScript', level: 90, years: 3 },
        { name: 'HTML5/CSS3', level: 95, years: 6 },
        { name: 'Tailwind CSS', level: 90, years: 2 },
        { name: 'Vue.js', level: 80, years: 2 },
        { name: 'Next.js', level: 85, years: 2 },
        { name: 'Redux/Context API', level: 90, years: 4 },
        { name: 'Framer Motion', level: 75, years: 1 },
        { name: 'Three.js/WebGL', level: 70, years: 1 },
      ],
    },
    {
      categoryId: 'backend',
      items: [
        { name: 'Node.js', level: 90, years: 5 },
        { name: 'Express.js', level: 90, years: 5 },
        { name: 'RESTful APIs', level: 95, years: 5 },
        { name: 'GraphQL', level: 80, years: 2 },
        { name: 'Python', level: 75, years: 2 },
        { name: 'Django', level: 70, years: 1 },
        { name: 'Microservices', level: 80, years: 3 },
      ],
    },
    {
      categoryId: 'database',
      items: [
        { name: 'PostgreSQL', level: 85, years: 4 },
        { name: 'MongoDB', level: 85, years: 4 },
        { name: 'Redis', level: 75, years: 2 },
        { name: 'MySQL', level: 80, years: 4 },
        { name: 'Prisma', level: 75, years: 2 },
      ],
    },
    {
      categoryId: 'devops',
      items: [
        { name: 'Docker', level: 85, years: 3 },
        { name: 'AWS (EC2, S3, Lambda)', level: 80, years: 3 },
        { name: 'CI/CD (GitHub Actions)', level: 85, years: 3 },
        { name: 'Nginx', level: 75, years: 2 },
        { name: 'Linux', level: 80, years: 4 },
        { name: 'Kubernetes', level: 65, years: 1 },
      ],
    },
    {
      categoryId: 'design',
      items: [
        { name: 'Figma', level: 75, years: 3 },
        { name: 'Responsive Design', level: 95, years: 6 },
        { name: 'UI/UX Principles', level: 80, years: 4 },
        { name: 'Adobe XD', level: 70, years: 2 },
      ],
    },
    {
      categoryId: 'tools',
      items: [
        { name: 'Git/GitHub', level: 95, years: 6 },
        { name: 'VS Code', level: 95, years: 6 },
        { name: 'Webpack/Vite', level: 85, years: 4 },
        { name: 'Jest/Testing Library', level: 85, years: 4 },
        { name: 'Postman', level: 90, years: 5 },
        { name: 'Jira', level: 80, years: 4 },
      ],
    },
  ],

  // Projects
  projects: [
    {
      id: 'proj-1',
      title: 'E-Commerce Platform',
      slug: 'ecommerce-platform',
      categoryId: 'frontend',
      featured: true,
      description: `A full-featured e-commerce platform with real-time inventory management, 
      payment processing, and advanced search capabilities. Built for scalability and performance.`,
      longDescription: `Developed a comprehensive e-commerce solution that handles thousands of products 
      and processes hundreds of orders daily. The platform features real-time inventory tracking, 
      multiple payment gateway integrations, advanced product filtering, and a responsive design 
      that works seamlessly across all devices. Implemented server-side rendering for optimal SEO 
      and performance.`,
      image: '/assets/images/projects/ecommerce.jpg',
      images: [
        '/assets/images/projects/ecommerce-1.jpg',
        '/assets/images/projects/ecommerce-2.jpg',
        '/assets/images/projects/ecommerce-3.jpg',
      ],
      techStack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Tailwind CSS'],
      liveUrl: 'https://ecommerce-demo.example.com',
      githubUrl: 'https://github.com/alexjohnson/ecommerce-platform',
      demoVideo: 'https://youtube.com/watch?v=demo',
      startDate: '2023-01',
      endDate: '2023-06',
      status: 'completed',
      role: 'Lead Developer',
      teamSize: 4,
      highlights: [
        'Handles 10,000+ daily visitors',
        'Processes $50K+ monthly transactions',
        '99.9% uptime achieved',
      ],
    },
    {
      id: 'proj-2',
      title: 'Project Management Dashboard',
      slug: 'project-management-dashboard',
      categoryId: 'frontend',
      featured: true,
      description: `An intuitive project management tool with real-time collaboration features, 
      task tracking, and analytics. Designed for remote teams.`,
      longDescription: `Created a comprehensive project management solution that enables teams to 
      collaborate effectively across different time zones. Features include kanban boards, gantt charts, 
      time tracking, file sharing, and real-time notifications. The application uses WebSocket 
      connections for instant updates and includes detailed analytics dashboards for project insights.`,
      image: '/assets/images/projects/dashboard.jpg',
      images: [
        '/assets/images/projects/dashboard-1.jpg',
        '/assets/images/projects/dashboard-2.jpg',
      ],
      techStack: ['React', 'TypeScript', 'Express.js', 'MongoDB', 'Socket.io', 'Chart.js', 'Material-UI'],
      liveUrl: 'https://projectmanager-demo.example.com',
      githubUrl: 'https://github.com/alexjohnson/project-dashboard',
      startDate: '2022-08',
      endDate: '2023-01',
      status: 'completed',
      role: 'Full Stack Developer',
      teamSize: 2,
      highlights: [
        'Supports 500+ active users',
        'Real-time collaboration features',
        'Mobile-responsive design',
      ],
    },
    {
      id: 'proj-3',
      title: 'Social Media Analytics Tool',
      slug: 'social-media-analytics',
      categoryId: 'backend',
      featured: true,
      description: `Analytics platform for tracking social media metrics across multiple platforms. 
      Features automated reporting and trend analysis.`,
      longDescription: `Built a powerful analytics tool that aggregates data from multiple social media 
      platforms and provides actionable insights. The backend processes millions of data points daily 
      using efficient queuing systems and caching strategies. Features include customizable dashboards, 
      automated report generation, sentiment analysis, and trend prediction using machine learning algorithms.`,
      image: '/assets/images/projects/analytics.jpg',
      images: [
        '/assets/images/projects/analytics-1.jpg',
        '/assets/images/projects/analytics-2.jpg',
      ],
      techStack: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'Bull Queue', 'D3.js', 'Docker'],
      liveUrl: 'https://socialanalytics-demo.example.com',
      githubUrl: 'https://github.com/alexjohnson/social-analytics',
      startDate: '2022-03',
      endDate: '2022-07',
      status: 'completed',
      role: 'Backend Developer',
      teamSize: 3,
      highlights: [
        'Processes 1M+ data points daily',
        'Integrates with 5+ social platforms',
        'Advanced data visualization',
      ],
    },
    {
      id: 'proj-4',
      title: 'Real Estate Marketplace',
      slug: 'real-estate-marketplace',
      categoryId: 'frontend',
      featured: false,
      description: `Marketplace platform for buying, selling, and renting properties. 
      Includes advanced search filters and virtual tours.`,
      longDescription: `Developed a modern real estate marketplace that connects buyers, sellers, and 
      agents. Features include property listings with high-quality images, virtual 3D tours, advanced 
      search with map integration, mortgage calculators, and a messaging system for direct communication.`,
      image: '/assets/images/projects/realestate.jpg',
      images: ['/assets/images/projects/realestate-1.jpg'],
      techStack: ['Vue.js', 'Nuxt.js', 'Node.js', 'MongoDB', 'Mapbox', 'Three.js'],
      liveUrl: 'https://realestate-demo.example.com',
      githubUrl: 'https://github.com/alexjohnson/real-estate-marketplace',
      startDate: '2021-10',
      endDate: '2022-02',
      status: 'completed',
      role: 'Frontend Developer',
      teamSize: 5,
      highlights: [
        '3D virtual tour integration',
        '1,000+ property listings',
        'Map-based search functionality',
      ],
    },
    {
      id: 'proj-5',
      title: 'Fitness Tracking App',
      slug: 'fitness-tracking-app',
      categoryId: 'mobile',
      featured: false,
      description: `Mobile-first fitness application for tracking workouts, nutrition, and progress. 
      Includes social features and challenges.`,
      longDescription: `Created a comprehensive fitness tracking application with workout logging, 
      nutrition tracking, progress photos, and social features. Users can join challenges, connect 
      with friends, and track their fitness journey over time. The app includes data visualization 
      for tracking progress and AI-powered workout recommendations.`,
      image: '/assets/images/projects/fitness.jpg',
      images: ['/assets/images/projects/fitness-1.jpg'],
      techStack: ['React Native', 'Node.js', 'PostgreSQL', 'Redis', 'Chart.js'],
      liveUrl: 'https://fitness-demo.example.com',
      githubUrl: 'https://github.com/alexjohnson/fitness-app',
      startDate: '2021-05',
      endDate: '2021-09',
      status: 'completed',
      role: 'Mobile Developer',
      teamSize: 2,
      highlights: [
        'Cross-platform mobile app',
        'Offline-first architecture',
        'Social challenges feature',
      ],
    },
    {
      id: 'proj-6',
      title: 'Weather Dashboard',
      slug: 'weather-dashboard',
      categoryId: 'frontend',
      featured: false,
      description: `Beautiful weather dashboard with forecasts, historical data, and interactive maps. 
      Features location-based alerts.`,
      longDescription: `Designed and developed an elegant weather dashboard that provides detailed 
      weather information, forecasts, and historical data. Features include interactive weather maps, 
      severe weather alerts, customizable widgets, and support for multiple locations.`,
      image: '/assets/images/projects/weather.jpg',
      images: ['/assets/images/projects/weather-1.jpg'],
      techStack: ['React', 'OpenWeather API', 'Mapbox', 'Chart.js', 'Tailwind CSS'],
      liveUrl: 'https://weather-demo.example.com',
      githubUrl: 'https://github.com/alexjohnson/weather-dashboard',
      startDate: '2021-02',
      endDate: '2021-04',
      status: 'completed',
      role: 'Frontend Developer',
      teamSize: 1,
      highlights: [
        'Real-time weather data',
        'Interactive weather maps',
        'Location-based alerts',
      ],
    },
    {
      id: 'proj-7',
      title: 'DevOps Monitoring System',
      slug: 'devops-monitoring',
      categoryId: 'devops',
      featured: true,
      description: `Comprehensive monitoring and alerting system for cloud infrastructure. 
      Real-time metrics and automated incident response.`,
      longDescription: `Built a robust monitoring solution for tracking server health, application 
      performance, and infrastructure metrics. The system collects data from multiple sources, 
      provides real-time dashboards, sends alerts based on custom thresholds, and includes 
      automated incident response workflows.`,
      image: '/assets/images/projects/monitoring.jpg',
      images: ['/assets/images/projects/monitoring-1.jpg'],
      techStack: ['Node.js', 'Prometheus', 'Grafana', 'Docker', 'AWS CloudWatch', 'Slack API'],
      liveUrl: 'https://monitoring-demo.example.com',
      githubUrl: 'https://github.com/alexjohnson/devops-monitoring',
      startDate: '2023-06',
      endDate: null,
      status: 'in-progress',
      role: 'DevOps Engineer',
      teamSize: 2,
      highlights: [
        'Monitors 50+ servers',
        'Custom alert rules',
        'Automated incident response',
      ],
    },
  ],

  // Qualifications
  qualifications: {
    education: [
      {
        id: 'edu-1',
        degree: 'Bachelor of Science in Computer Science',
        institution: 'University of California, Berkeley',
        location: 'Berkeley, CA',
        startDate: '2013-09',
        endDate: '2017-05',
        gpa: '3.8/4.0',
        description: `Focused on software engineering, algorithms, and data structures. 
        Participated in multiple hackathons and served as president of the Computer Science Club.`,
        honors: [
          'Dean\'s List (4 semesters)',
          'Outstanding Senior Project Award',
          'Computer Science Club President',
        ],
        relevantCourses: [
          'Data Structures and Algorithms',
          'Web Development',
          'Database Systems',
          'Software Engineering',
          'Computer Networks',
          'Artificial Intelligence',
        ],
      },
      {
        id: 'edu-2',
        degree: 'High School Diploma',
        institution: 'Lincoln High School',
        location: 'San Francisco, CA',
        startDate: '2009-09',
        endDate: '2013-06',
        gpa: '3.9/4.0',
        description: 'Graduated with honors. Focused on mathematics and computer science.',
        honors: [
          'Valedictorian',
          'National Honor Society',
          'Math Team Captain',
        ],
        relevantCourses: [
          'AP Computer Science',
          'AP Calculus BC',
          'AP Physics',
        ],
      },
    ],
    certifications: [
      {
        id: 'cert-1',
        name: 'AWS Certified Solutions Architect - Associate',
        issuer: 'Amazon Web Services',
        issueDate: '2022-03',
        expiryDate: '2025-03',
        credentialId: 'AWS-SA-12345',
        credentialUrl: 'https://aws.amazon.com/certification/verify',
        description: 'Demonstrated expertise in designing distributed systems on AWS.',
        logo: '/assets/images/certs/aws.png',
      },
      {
        id: 'cert-2',
        name: 'Meta Front-End Developer Professional Certificate',
        issuer: 'Meta (via Coursera)',
        issueDate: '2021-11',
        expiryDate: null,
        credentialId: 'META-FE-67890',
        credentialUrl: 'https://coursera.org/verify/professional-cert/meta',
        description: 'Completed comprehensive program covering React, HTML/CSS, and JavaScript.',
        logo: '/assets/images/certs/meta.png',
      },
      {
        id: 'cert-3',
        name: 'MongoDB Certified Developer',
        issuer: 'MongoDB University',
        issueDate: '2021-06',
        expiryDate: null,
        credentialId: 'MONGO-DEV-54321',
        credentialUrl: 'https://university.mongodb.com/certification',
        description: 'Certified in MongoDB database design and development.',
        logo: '/assets/images/certs/mongodb.png',
      },
      {
        id: 'cert-4',
        name: 'Google Analytics Individual Qualification',
        issuer: 'Google',
        issueDate: '2020-09',
        expiryDate: '2024-09',
        credentialId: 'GAIQ-98765',
        credentialUrl: 'https://skillshop.exceedlms.com/student/award/',
        description: 'Proficient in Google Analytics and web analytics fundamentals.',
        logo: '/assets/images/certs/google-analytics.png',
      },
      {
        id: 'cert-5',
        name: 'Professional Scrum Master I (PSM I)',
        issuer: 'Scrum.org',
        issueDate: '2020-03',
        expiryDate: null,
        credentialId: 'PSM-11111',
        credentialUrl: 'https://www.scrum.org/certificates/',
        description: 'Demonstrated understanding of Scrum framework and agile principles.',
        logo: '/assets/images/certs/scrum.png',
      },
    ],
  },

  // Social Links
  socialLinks: [
    {
      id: 'social-1',
      platform: 'GitHub',
      url: 'https://github.com/alexjohnson',
      icon: 'Github',
      username: 'alexjohnson',
      display: true,
    },
    {
      id: 'social-2',
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/alexjohnson',
      icon: 'Linkedin',
      username: 'alexjohnson',
      display: true,
    },
    {
      id: 'social-3',
      platform: 'Twitter',
      url: 'https://twitter.com/alexjohnsondev',
      icon: 'Twitter',
      username: '@alexjohnsondev',
      display: true,
    },
    {
      id: 'social-4',
      platform: 'Email',
      url: 'mailto:alex.johnson@example.com',
      icon: 'Mail',
      username: 'alex.johnson@example.com',
      display: true,
    },
    {
      id: 'social-5',
      platform: 'Medium',
      url: 'https://medium.com/@alexjohnson',
      icon: 'BookOpen',
      username: '@alexjohnson',
      display: true,
    },
    {
      id: 'social-6',
      platform: 'Dev.to',
      url: 'https://dev.to/alexjohnson',
      icon: 'Code',
      username: 'alexjohnson',
      display: false,
    },
    {
      id: 'social-7',
      platform: 'Stack Overflow',
      url: 'https://stackoverflow.com/users/12345/alexjohnson',
      icon: 'HelpCircle',
      username: 'alexjohnson',
      display: false,
    },
  ],

  // Resume
  resume: {
    downloadUrl: '/assets/resume/Alex-Johnson-Resume.pdf',
    lastUpdated: '2024-01-15',
    fileSize: '245 KB',
  },

  // Additional metadata
  metadata: {
    version: '1.0.0',
    lastUpdated: '2024-01-15',
    theme: {
      primaryColor: '#3B82F6',
      accentColor: '#8B5CF6',
    },
  },
}

export default defaultData
