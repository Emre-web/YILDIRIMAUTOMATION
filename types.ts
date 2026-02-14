// Fix: Import React to resolve 'Cannot find namespace React' errors in type definitions
import React from 'react';

export interface ServiceCard {
  title: string;
  description: string;
  tools: string[];
  icon: React.ReactNode;
}

export interface TechItem {
  name: string;
  icon: React.ReactNode;
}

export interface SolutionItem {
  title: string;
  description: string;
}