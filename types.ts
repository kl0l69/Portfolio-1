import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Skill {
  name: string;
  level: string;
  icon?: string;
}

export interface SocialLink {
  name: string;
  icon: LucideIcon;
  url: string;
  label?: string;
}
