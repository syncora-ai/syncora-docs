'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

// Using a simple arrow icon as fallback
const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

interface QuickStartSection {
  title: string;
  href: string;
  description: string;
}

const sections: QuickStartSection[] = [
  {
    title: 'Get Started',
    href: '/docs/quick-start',
    description: 'Learn the basics and set up your account',
  },
  {
    title: 'First Steps',
    href: '/docs/quick-start/first-steps',
    description: 'Create your first project and explore features',
  },
  {
    title: 'Next Steps',
    href: '/docs/quick-start/next-steps',
    description: 'Advanced configurations and best practices',
  },
];

export function QuickStartSidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const segment = useSelectedLayoutSegment();
  const isActive = segment === 'quick-start';

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between py-2 text-sm font-medium text-foreground hover:text-foreground/80"
      >
        <span className="flex items-center gap-2">
          {isExpanded ? (
            <ChevronDown />
          ) : (
            <ChevronRight />
          )}
          Quick Start
        </span>
      </button>
      {isExpanded && (
        <div className="ml-4 mt-1 space-y-1 border-l border-border pl-4">
          {sections.map((section) => {
            const isSectionActive = segment === section.href.split('/').pop() || 
              (section.href === '/docs/quick-start' && !segment);
            return (
              <Link
                key={section.href}
                href={section.href}
                className={`block py-1.5 text-sm ${isSectionActive ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}
              >
                <div className="flex flex-col">
                  <span>{section.title}</span>
                  <span className="text-xs text-muted-foreground">
                    {section.description}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function QuickStart() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Quick Start</h1>
        <p className="text-muted-foreground">
          Get up and running with our platform in minutes.
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group rounded-lg border p-6 transition-colors hover:bg-accent/50"
          >
            <h2 className="mb-2 text-lg font-semibold group-hover:text-primary">
              {section.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              {section.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default QuickStart;
