import {
  FaChartLine,
  FaCode,
  FaDatabase,
  FaGithub,
  FaGraduationCap,
  FaPython,
  FaTools
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import type { NavItem, Project, SkillCategory } from "@/types";
 
export const profile = {
  name: "Vatsal Lukka",
  title: "Python Developer | Aspiring Data Scientist",
  tagline: "Transforming Data into Insights and Ideas into Intelligent Solutions",
  location: "India",
  email: "vatsallukka55@gmail.com",
  
  github: "https://github.com/vatsal-lukka",
  linkedin: "https://linkedin.com/in/vatsallukka",
  bio: "I am a Python Developer and Data Science Enthusiast passionate about solving real-world problems using data, machine learning, and analytics. I enjoy building data-driven applications, extracting insights from complex datasets, and continuously learning modern technologies.",
  typingRoles: [
    "Python Developer",
    "Data Analyst",
    "Machine Learning Enthusiast",
    "Data Science Learner"
  ]
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" }
];

export const skillCategories: SkillCategory[] = [
  { title: "Programming", skills: ["Python", "SQL"], icon: FaPython },
  { title: "Data Analysis", skills: ["Pandas", "NumPy"], icon: FaChartLine },
  {
    title: "Visualization",
    skills: ["Matplotlib", "Seaborn", "Plotly"],
    icon: HiSparkles
  },
  {
    title: "Machine Learning",
    skills: ["Scikit-Learn", "Regression", "Classification", "Clustering"],
    icon: FaCode
  },
  { title: "Database", skills: ["MySQL"], icon: FaDatabase },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Jupyter Notebook", "VS Code"],
    icon: FaTools
  }
];

export const projects: Project[] = [
  {
    title: "Netflix Data Analysis",
    description:
      "Performed exploratory data analysis on Netflix content to uncover trends in genres, release years, ratings, and countries.",
    image: "/projects/netflix.svg",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    features: ["Data Cleaning", "Trend Analysis", "Visual Reports"],
    githubUrl: "https://github.com/vatsal-lukka/Netflix-Data-Analysis",
    demoUrl: "https://netflix-data-analysis-dusky.vercel.app/"
  },
  {
    title: "IPL Data Analysis Dashboard",
    description:
      "Analyzed IPL datasets to generate insights into player performance, team statistics, and match outcomes.",
    image: "/projects/ipl.svg",
    tech: ["Python", "Pandas", "Plotly"],
    features: ["Interactive Dashboard", "Team Analysis", "Performance Metrics"],
    githubUrl: "https://github.com/vatsal-lukka/Ipl-data-analysis",
    demoUrl: "https://ipl-data-analysis-iud7.vercel.app/"
  },
  {
    title: "House Price Prediction",
    description:
      "Developed a machine learning model that predicts housing prices using regression techniques.",
    image: "/projects/house-price.svg",
    tech: ["Python", "Scikit-Learn", "Pandas"],
    features: ["Feature Engineering", "Model Training", "Prediction System"],
    githubUrl: "https://github.com/vatsal-lukka/house-price-prediction",
    demoUrl: "https://house-price-prediction-weld.vercel.app/"
  },
  {
    title: "Customer Churn Prediction",
    description:
      "Built a classification model to identify customers likely to leave a service.",
    image: "/projects/churn.svg",
    tech: ["Python", "Machine Learning", "Scikit-Learn"],
    features: ["Data Preprocessing", "Classification", "Model Evaluation"],
    githubUrl: "https://github.com/vatsallukka/customer-churn",
    demoUrl: "https://github.com/vatsallukka/customer-churn"
  },
  {
    title: "Sentiment Analysis",
    description:
      "Performed sentiment analysis on customer reviews using Natural Language Processing techniques.",
    image: "/projects/sentiment.svg",
    tech: ["Python", "NLP", "Scikit-Learn"],
    features: ["Text Cleaning", "Sentiment Classification", "Insight Generation"],
    githubUrl: "https://github.com/vatsallukka/sentiment-analysis",
    demoUrl: "https://github.com/vatsallukka/sentiment-analysis"
  }
];

export const certifications = [
  "Python Programming",
  "Data Science Fundamentals",
  "Machine Learning Fundamentals",
  "SQL for Data Analysis",
  "Data Visualization with Python"
];

export const achievements = [
  { label: "Open Source Contributions", value: "15+", icon: FaGithub },
  { label: "GitHub Projects", value: "10+", icon: FaCode },
  { label: "Learning Milestones", value: "25+", icon: FaGraduationCap },
  { label: "Problems Solved", value: "100+", icon: FaChartLine }
];
