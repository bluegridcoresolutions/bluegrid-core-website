import {
  Cloud,
  Wifi,
  Lock,
  Bot,
  Settings,
} from "lucide-react";

export const IMG = {
  hero: "/images/hero.jpg",
  heroBrain: "/images/hero-brain.jpg",
  aiRobot: "/images/ai-robot.jpg",
  aiCircles: "/images/ai-circles.jpg",
  aiGlow: "/images/ai-glow.jpg",
  aiDeep: "/images/ai-deep.jpg",
  cloud: "/images/cloud.jpg",
  cloud2: "/images/cloud-2.jpg",
  cyber: "/images/cyber.jpg",
  cyber2: "/images/cyber-2.jpg",
  network: "/images/network.jpg",
  wires: "/images/wires.jpg",
  helpdesk: "/images/helpdesk.jpg",
  support: "/images/support.jpg",
};

export const branches = [
  {
    id: "cloud",
    tag: "Cloud",
    color: "#1A6CF0",
    icon: Cloud,
  },
  {
    id: "comms",
    tag: "Comms",
    color: "#10B981",
    icon: Wifi,
  },
  {
    id: "security",
    tag: "Security",
    color: "#EF4444",
    icon: Lock,
  },
  {
    id: "ai",
    tag: "AI",
    color: "#8B5CF6",
    icon: Bot,
  },
  {
    id: "managed",
    tag: "Managed Services",
    color: "#F59E0B",
    icon: Settings,
  },
];

export const testimonials = [
  {
    quote: "BlueGrid's cloud migration cut our infrastructure costs by 30% while improving uptime.",
    name: "Jane Doe",
    org: "TechCorp",
    branch: "cloud",
    color: "#1A6CF0",
  },
  {
    quote: "Their AI-driven fraud detection saved us $2M in the first quarter alone.",
    name: "John Smith",
    org: "Finance Group",
    branch: "ai",
    color: "#8B5CF6",
  },
  {
    quote: "We sleep better knowing BlueGrid has our security posture covered 24/7.",
    name: "Sarah Lee",
    org: "HealthTech",
    branch: "security",
    color: "#EF4444",
  },
];

export const capabilities = [
  "Cloud Architecture & Migration",
  "Unified Communications",
  "Cybersecurity & Compliance",
  "AI & Machine Learning",
  "Managed IT Operations",
  "Data Analytics",
  "DevOps & CI/CD",
  "Zero-Trust Security",
  "Hybrid Cloud",
  "Predictive Analytics",
];