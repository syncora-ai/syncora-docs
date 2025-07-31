'use client';

interface CardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  items: string[];
}

export default function CardGrid({ href, icon, title, items }: CardProps) {
  return (
    <div className="relative rounded-2xl group card-border-animated">
      <div className="dark:bg-[#191919] border border-gray-200 dark:border-[#33344a] rounded-2xl p-4 h-full flex flex-col relative z-10">
        <div className="mb-2">
          <a
            href={href}
            className="font-semibold text-lg no-underline text-gray-900 dark:text-gray-400 flex items-center relative group/title"
          >
            {icon}
            <span className="relative text-indigo-500 dark:text-[#FAFAFA] ml-2">
              {title}
              <span className="absolute left-0 -bottom-1 h-1 w-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-300 group-hover/title:w-full"></span>
            </span>
          </a>
        </div>
        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-400 flex-1 space-y-2 pl-2">
          {items.map((item, i) => (
            <li key={i} className="relative cursor-pointer group/item">
              <span className="relative">
                {item}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-800 group-hover/item:w-full"></span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
