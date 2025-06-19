import { Project, Service, Statistic, Feature } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern, scalable e-commerce solution with advanced analytics and user management.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
  },
  {
    id: 2,
    title: "Healthcare Dashboard",
    description:
      "Comprehensive healthcare management system with real-time monitoring and reporting.",
    image:
      "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Vue.js", "Python", "PostgreSQL", "Docker"],
    link: "#",
  },
  {
    id: 3,
    title: "Financial Analytics",
    description:
      "Advanced financial analytics platform with predictive modeling and visualization.",
    image:
      "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Angular", "Django", "Redis", "Chart.js"],
    link: "#",
  },
  {
    id: 4,
    title: "Social Media App",
    description:
      "Next-generation social media platform with real-time messaging and content sharing.",
    image:
      "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["React Native", "GraphQL", "AWS", "Socket.io"],
    link: "#",
  },
  {
    id: 5,
    title: "AI-Powered CRM",
    description:
      "Intelligent customer relationship management system with machine learning capabilities.",
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Next.js", "TensorFlow", "Firebase", "Stripe"],
    link: "#",
  },
  {
    id: 6,
    title: "Education Platform",
    description:
      "Comprehensive online learning management system with interactive courses and assessments.",
    image:
      "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Svelte", "Laravel", "MySQL", "WebRTC"],
    link: "#",
  },
];

export const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies and best practices.",
    icon: "Code",
    features: [
      "React/Vue/Angular",
      "Node.js/Python/PHP",
      "Database Design",
      "API Development",
    ],
  },
  {
    id: 2,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    icon: "Smartphone",
    features: [
      "React Native",
      "Flutter",
      "Native iOS/Android",
      "Cross-platform",
    ],
  },
  {
    id: 3,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment solutions.",
    icon: "Cloud",
    features: ["AWS/Azure/GCP", "DevOps", "Microservices", "Containerization"],
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive user interfaces and exceptional user experiences.",
    icon: "Palette",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
];

export const statistics: Statistic[] = [
  {
    id: 1,
    value: 150,
    label: "Projects Completed",
    suffix: "+",
  },
  {
    id: 2,
    value: 98,
    label: "Client Satisfaction",
    suffix: "%",
  },
  {
    id: 3,
    value: 50,
    label: "Team Members",
    suffix: "+",
  },
  {
    id: 4,
    value: 5,
    label: "Years Experience",
    suffix: "+",
  },
];

export const features: Feature[] = [
  {
    id: 1,
    title: "Lightning Fast",
    description:
      "Optimized performance with cutting-edge technologies for blazing-fast user experiences.",
    icon: "Zap",
  },
  {
    id: 2,
    title: "Fully Responsive",
    description:
      "Seamless experience across all devices with mobile-first responsive design.",
    icon: "Monitor",
  },
  {
    id: 3,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security with 99.9% uptime guarantee and data protection.",
    icon: "Shield",
  },
  {
    id: 4,
    title: "24/7 Support",
    description:
      "Round-the-clock technical support and maintenance to keep your systems running.",
    icon: "Clock",
  },
  {
    id: 5,
    title: "Scalable Architecture",
    description:
      "Built to grow with your business using modern, scalable infrastructure.",
    icon: "TrendingUp",
  },
  {
    id: 6,
    title: "Analytics & Insights",
    description:
      "Comprehensive analytics and reporting to drive data-driven decisions.",
    icon: "BarChart3",
  },
];
