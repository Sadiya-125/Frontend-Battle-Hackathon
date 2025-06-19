export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Statistic {
  id: number;
  value: number;
  label: string;
  suffix: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}
