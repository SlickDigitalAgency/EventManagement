import {
  Camera,
  Calendar,
  Heart,
  Star,
  Briefcase,
  User,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Image,
  Music,
  Video,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface NavItem {
  name: string;
  path: string;
}

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Process {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
}

interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

interface PortfolioItem {
  image: string;
  title: string;
  category: string;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

interface SocialLink {
  icon: LucideIcon;
  href: string;
}

export const navbarData: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Services", path: "/services" },
  { name: "Events", path: "/events" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const featuresData: Feature[] = [
  {
    icon: Camera,
    title: "High-Quality Photography",
    description: "Capture every moment with stunning clarity and detail",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Choose from a range of dates and times to suit your needs",
  },
  {
    icon: Heart,
    title: "Personalized Experience",
    description: "Tailored services that reflect your style and preferences",
  },
  {
    icon: Star,
    title: "Award-Winning Team",
    description:
      "Work with industry experts who are passionate about what they do",
  },
  {
    icon: Briefcase,
    title: "Professional Event Management",
    description: "Seamless coordination for a stress-free experience",
  },
  {
    icon: User,
    title: "Client-Focused",
    description:
      "Dedicated to delivering exceptional service and exceeding expectations",
  },
];

export const processData: Process[] = [
  {
    icon: Camera,
    title: "Photography",
    description:
      "Capturing beautiful moments with professional photography services.",
  },
  {
    icon: Calendar,
    title: "Event Planning",
    description: "Seamlessly organizing and coordinating unforgettable events.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Working with you every step of the way to bring your vision to life.",
  },
  {
    icon: Image,
    title: "Post-Production",
    description:
      "Delivering high-quality edits and finalized photos for your event.",
  },
];

export const servicesData: Service[] = [
  {
    icon: Camera,
    title: "Wedding Photography",
    description: "Capturing your special moments with elegance and style",
    price: "From $1,999",
  },
  {
    icon: Users,
    title: "Corporate Events",
    description: "Professional coverage for your business events",
    price: "From $1,499",
  },
  {
    icon: Video,
    title: "Videography",
    description: "Cinematic video production services",
    price: "From $2,499",
  },
  {
    icon: Image,
    title: "Portrait Sessions",
    description: "Professional studio and location portraits",
    price: "From $299",
  },
  {
    icon: Calendar,
    title: "Event Planning",
    description: "Full-service event management and coordination",
    price: "Custom Quote",
  },
  {
    icon: Music,
    title: "Entertainment",
    description: "Live music and DJ services for your events",
    price: "From $799",
  },
];

export const testimonialData: Testimonial[] = [
  {
    name: "Rachel Adams",
    role: "Event Planner, DreamEvents",
    image:
      "https://images.unsplash.com/photo-1506803302689-04d07274c38c?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDQwfHxldmVudHxlbnwwfHx8fDE2Nzk5MzI4Nzg&ixlib=rb-1.2.1&q=80&w=400",
    content:
      "Their event coordination is top-notch. We partnered for a high-profile wedding, and every detail was perfect, creating lasting memories for our clients.",
    rating: 5,
  },
  {
    name: "David Lee",
    role: "Photographer, PixelMoment Studios",
    image:
      "https://images.unsplash.com/photo-1562630608-8fce5426f436?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0MXwwfDF8c2VhcmNofDJ8fGZvb2QlMkMlMjBhdmVudHxlbnwwfHx8fDE2NzkwNjcwNzE&ixlib=rb-1.2.1&q=80&w=400",
    content:
      "The photography team captured our event beautifully. The images exceeded our expectations, highlighting the essence and emotion of the moment.",
    rating: 5,
  },
  {
    name: "Sophia Williams",
    role: "Wedding Coordinator, Elegant Celebrations",
    image:
      "https://images.unsplash.com/photo-1507621060157-c2d381a9087d?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0MXwwfDF8c2VhcmNofDN8fGZvb2QlMkMlMjBldmVudHxlbnwwfHx8fDE2NzkwNjcwNzE&ixlib=rb-1.2.1&q=80&w=400",
    content:
      "Working with this team was a dream. From the initial consultation to the final shot, they brought our vision to life with their exceptional event planning and photography skills.",
    rating: 5,
  },
];

export const portfolioData: PortfolioItem[] = [
  {
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Wedding Photography",
    category: "Events",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Corporate Events",
    category: "Business",
  },
  {
    image:
      "https://images.unsplash.com/photo-1472653431158-6364773b2a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Fashion Photography",
    category: "Studio",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Portrait Sessions",
    category: "Personal",
  },
];

export const pricingData: PricingPlan[] = [
  {
    name: "Standard",
    price: "$999",
    description: "Perfect for intimate events and small gatherings",
    features: [
      "4 Hours Coverage",
      "1 Photographer",
      "100 High-Resolution Photos",
      "Online Gallery Access",
      "Basic Retouching",
    ],
  },
  {
    name: "Enhanced",
    price: "$1,999",
    description: "Designed for mid-sized events with more coverage",
    features: [
      "8 Hours Coverage",
      "2 Photographers",
      "300 High-Resolution Photos",
      "Online Gallery Access",
      "Advanced Retouching",
      "Custom Photo Album",
      "Pre-Event Consultation",
    ],
    popular: true,
  },
  {
    name: "Ultimate",
    price: "$3,999",
    description: "Complete coverage for large-scale events and special moments",
    features: [
      "12 Hours Coverage",
      "3 Photographers",
      "500+ High-Resolution Photos",
      "Online Gallery Access",
      "Premium Retouching",
      "Deluxe Custom Photo Album",
      "Engagement Session",
      "Drone Coverage",
      "Same-Day Edits",
    ],
  },
];

export const statsData: Stat[] = [
  {
    icon: Camera,
    value: "10K+",
    label: "Photos Delivered",
  },
  {
    icon: Users,
    value: "500+",
    label: "Happy Clients",
  },
  {
    icon: Star,
    value: "15+",
    label: "Awards Won",
  },
  {
    icon: Calendar,
    value: "1000+",
    label: "Events Managed",
  },
];

export const footerData = [
  {
    title: "About Us",
    links: ["Our Story", "Team", "Careers", "Press"],
  },
  {
    title: "Services",
    links: ["Event Planning", "Photography", "Custom Packages", "Consultation"],
  },
  {
    title: "Support",
    links: ["Contact Us", "FAQs", "Privacy Policy", "Terms of Service"],
  },
];

export const socialLinks: SocialLink[] = [
  { icon: Mail, href: "mailto:contact@lumiere.com" },
  { icon: Phone, href: "tel:+1234567890" },
  { icon: MapPin, href: "https://goo.gl/maps" },
  { icon: ArrowRight, href: "#" },
];

export const upcomingEvents = [
  {
    title: "Wedding Photography Workshop",
    date: "March 15, 2024",
    location: "Studio One, Downtown",
    time: "10:00 AM - 4:00 PM",
    capacity: "20 participants",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Corporate Event Photography",
    date: "March 20, 2024",
    location: "Business Center",
    time: "9:00 AM - 5:00 PM",
    capacity: "Unlimited",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Portrait Photography Masterclass",
    date: "March 25, 2024",
    location: "Art Gallery",
    time: "11:00 AM - 3:00 PM",
    capacity: "15 participants",
    image:
      "https://images.unsplash.com/photo-1472653431158-6364773b2a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];
