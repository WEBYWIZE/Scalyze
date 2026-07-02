import { ServiceItem, MetricItem, CaseStudyItem, FAQItem, TestimonialItem } from "./types";
import testimonialAvatar from "./assets/images/regenerated_image_1782929981276.jpg";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "service-1",
    title: "Paid Ads Management",
    description: "Maximize ROI with data-driven ads across Meta, Google, and other platforms.",
    iconName: "Target",
    color: "#7C3AED", // violet-600
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100",
  },
  {
    id: "service-2",
    title: "WhatsApp Automation & API",
    description: "Automate chats, broadcast updates, and capture leads instantly on WhatsApp.",
    iconName: "MessageSquare",
    color: "#2563EB", // blue-600
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
  },
  {
    id: "service-3",
    title: "Meta Verified Agency Account",
    description: "Rent premium agency accounts with unlimited spend, direct line support, and high trust score.",
    iconName: "ShieldCheck",
    color: "#10B981", // emerald-500
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-100",
  },
  {
    id: "service-4",
    title: "Landing Page Optimization",
    description: "High-converting landing pages designed to drive action.",
    iconName: "Layout",
    color: "#EA580C", // orange-600
    bgColor: "bg-orange-50",
    borderColor: "border-orange-100",
  },
  {
    id: "service-5",
    title: "E-commerce Management",
    description: "End-to-end Shopify setup, inventory integration, conversion rate optimization, and complete store management.",
    iconName: "ShoppingCart",
    color: "#3B82F6", // blue-500
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-100",
  },
  {
    id: "service-6",
    title: "Creative Strategy",
    description: "Scroll-stopping creatives that attract, engage, and convert.",
    iconName: "Lightbulb",
    color: "#D97706", // amber-600
    bgColor: "bg-amber-50",
    borderColor: "border-amber-100",
  },
];

export const METRICS_DATA: MetricItem[] = [
  {
    id: "metric-1",
    value: "100+",
    label: "Brands Scaled",
    iconName: "Award",
    color: "text-purple-600",
  },
  {
    id: "metric-2",
    value: "₹50Cr+",
    label: "Ad Spend Managed",
    iconName: "IndianRupee",
    color: "text-blue-600",
  },
  {
    id: "metric-3",
    value: "300%",
    label: "Average ROI Delivered",
    iconName: "TrendingUp",
    color: "text-emerald-600",
  },
  {
    id: "metric-4",
    value: "98%",
    label: "Client Satisfaction",
    iconName: "Smile",
    color: "text-amber-600",
  },
];

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: "case-1",
    tag: "D2C Skincare Brand",
    result: "320%",
    title: "Increase in ROAS",
    subtitle: "With Meta Ads & Creative Strategy",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=600&auto=format&fit=crop",
    gradient: "from-purple-500/10 to-indigo-500/10",
  },
  {
    id: "case-2",
    tag: "Fitness Brand",
    result: "250%",
    title: "Growth in Leads",
    subtitle: "Through Google & Meta Ads",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop",
    gradient: "from-blue-500/10 to-indigo-500/10",
  },
  {
    id: "case-3",
    tag: "SaaS Platform",
    result: "180%",
    title: "Increase in Signups",
    subtitle: "With Performance Campaigns",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    gradient: "from-emerald-500/10 to-teal-500/10",
  },
];

export const TESTIMONIAL_DATA: TestimonialItem = {
  quote: "Scalyze truly understands performance marketing. They scaled our brand profitably with a clear strategy and constant optimization.",
  author: "Rohit Sharma",
  role: "Founder",
  company: "FitLife India",
  avatar: testimonialAvatar,
};

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is Scalyze's typical engagement process?",
    answer: "We start with a comprehensive audit of your current ad accounts, website funnel, and tracking infrastructure. Based on this, we prepare a tailored growth roadmap. Once aligned, we handle setup, creative production, campaign execution, and continuous daily optimization.",
  },
  {
    id: "faq-2",
    question: "How do you collaborate on creatives and design?",
    answer: "Our creative team designs scroll-stopping ad creatives, hooks, and video angles tailored to your brand identity. We submit all creatives for your approval via a shared portal before any campaign goes live, ensuring your brand standards are perfectly met.",
  },
  {
    id: "faq-3",
    question: "Do you offer real-time performance reporting?",
    answer: "Absolutely. We set up an interactive, live Looker Studio or custom dashboard that pulls real-time data directly from your advertising networks, so you can monitor spend, leads, sales, and ROAS 24/7.",
  },
  {
    id: "faq-4",
    question: "What makes Scalyze different from traditional agencies?",
    answer: "Unlike traditional agencies that focus purely on vanity metrics like clicks and impressions, Scalyze is entirely revenue-driven. We integrate advanced data analytics, proprietary AI audience optimization tools, and conversion rate engineering to maximize your actual bottom-line profitability.",
  },
];
