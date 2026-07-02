import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Dynamic icon rendering name
  color: string;
  bgColor: string;
  borderColor: string;
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  iconName: string;
  color: string;
}

export interface CaseStudyItem {
  id: string;
  tag: string;
  title: string;
  result: string;
  subtitle: string;
  image: string;
  gradient: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}
