import { Building2, TrendingUp, Users, LucideIcon } from "lucide-react";

export interface CaseStudy {
  id: string;
  icon: LucideIcon;
  company: string;
  location: string;
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  tags: string[];
  image?: string;
  detailedChallenge?: string;
  detailedSolution?: string;
  additionalResults?: string[];
  metric: string;
  metricLabel: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "enterprise-pmo-transformation",
    icon: Building2,
    company: "Global Financial Services",
    location: "Frankfurt, Germany",
    title: "Enterprise PMO Transformation",
    metric: "50+",
    metricLabel: "Projects Consolidated",
    challenge: "Needed to establish a centralized PMO to manage 50+ concurrent projects across 5 countries.",
    solution: "Implemented comprehensive PMO framework with standardized processes, governance structures, and reporting dashboards.",
    results: [
      "40% improvement in project delivery times",
      "€2M+ cost savings in first year",
      "95% stakeholder satisfaction rate"
    ],
    tags: ["IT-PMO", "Change Management", "Process Optimization"]
  },
  {
    id: "agile-transformation-scale",
    icon: Users,
    company: "Dutch Tech Scale-up",
    location: "Amsterdam, Netherlands",
    title: "Agile Transformation at Scale",
    metric: "200+",
    metricLabel: "Team Members Scaled",
    challenge: "Engineering teams struggling with coordination and delivery velocity as company grew from 50 to 200+ employees.",
    solution: "Led comprehensive Agile transformation with SAFe framework implementation, trained 12 Scrum teams, established CoE.",
    results: [
      "65% increase in deployment frequency",
      "50% reduction in time-to-market",
      "Enhanced cross-team collaboration"
    ],
    tags: ["Scrum Master", "Agile", "Team Coaching"]
  },
  {
    id: "data-driven-process-optimization",
    icon: TrendingUp,
    company: "US Manufacturing Corp",
    location: "Chicago, USA",
    title: "Data-Driven Process Optimization",
    metric: "40%",
    metricLabel: "Faster Delivery",
    challenge: "Legacy manufacturing processes with limited visibility and inefficient workflows causing delivery delays.",
    solution: "Conducted comprehensive business analysis, designed new data analytics framework, implemented automated reporting.",
    results: [
      "30% operational efficiency gain",
      "Real-time visibility into production metrics",
      "$1.5M annual cost reduction"
    ],
    tags: ["Business Analysis", "Data Analytics", "Process Management"]
  }
];