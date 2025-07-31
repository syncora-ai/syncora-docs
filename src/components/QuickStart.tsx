'use client';

import Link from 'next/link';

interface QuickStartSection {
    title: string;
    href: string;
    description: string;
}

const sections: QuickStartSection[] = [
    {
        title: 'Model Creators',
        href: 'quick-start/model-creators',
        description: 'Create your first project and explore features',
    },  
    {
        title: 'Data Consumers',
        href: 'quick-start/data-consumers',
        description: 'Create your first project and explore features',
    },
    {
        title: 'Fine Tuning',
        href: 'quick-start/fine-tuning',
        description: 'Advanced configurations and best practices',
    },
];

export function QuickStart() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {sections.map((section) => (
                    <Link
                        key={section.href}
                        href={section.href}
                        className="group relative overflow-hidden
             bg-white dark:bg-[#191919]
             p-6 rounded-2xl shadow-lg
             hover:shadow-xl transition-all duration-300 hover:-translate-y-1 no-underline"
                    >
                        {/* Glowing border background */}
                        <div className="absolute inset-0.5 rounded-[1rem] pointer-events-none z-0 card-border-glow" />

                        {/* Card content */}
                        <div className="relative z-10">
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                                {section.title}
                            </h2>
                            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 leading-snug">
                                {section.description}
                            </p>
                            <div className="mt-6 flex items-center text-sm font-medium text-indigo-500 dark:text-indigo-400">
                                Get started
                                <svg
                                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </div>
                        </div>
                    </Link>

                ))}
            </div>
        </div>
    );
}

export default QuickStart;
