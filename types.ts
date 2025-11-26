import { LucideIcon } from "lucide-react";

export interface ResultItem {
  value: string;
  description: string;
  icon: LucideIcon;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TargetAudienceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  image: string;
  insight: string;
}