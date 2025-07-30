import {
  FaRocket,
  FaRobot,
  FaTable,
  FaMagic,
  FaDatabase,
  FaTerminal,
} from "react-icons/fa";

const cards = [
  {
    href: "/quick-start",
    icon: <FaRocket className="inline-block w-5 h-5 mr-2" />,
    title: "Quick Start",
    items: ["Model creators", "Data consumers", "Fine-tuning LLMs"],
  },
  {
    href: "/assistant",
    icon: <FaRobot className="inline-block w-5 h-5 mr-2" />,
    title: "Assistant",
    items: [
      "Configuration",
      "Manage chats",
      "Manage artifacts",
      "Prompt examples",
      "Python sessions",
    ],
  },
  {
    href: "/features/tabular",
    icon: <FaTable className="inline-block w-5 h-5 mr-2" />,
    title: "Tabular Synthetic Data",
    items: [
      "Multi-table synthetic data",
      "Subject tables",
      "Linked tables",
      "Context foreign key",
      "Time-series and events data",
    ],
  },
  {
    href: "/generators",
    icon: <FaMagic className="inline-block w-5 h-5 mr-2" />,
    title: "Generators",
    items: [
      "Train a new generator",
      "Live-probe a generator",
      "Set table relationships",
      "Set encoding types",
      "Improve model accuracy",
      "Speed up training",
      "Fine-tune privacy mechanisms",
    ],
  },
  {
    href: "/synthetic-datasets",
    icon: <FaRocket className="inline-block w-5 h-5 mr-2" />,
    title: "Synthetic Datasets",
    items: [
      "Generate synthetic datasets",
      "Rebalance columns",
      "Data imputation",
      "Deliver to DB/cloud",
      "Seeded generation",
      "Fair synthetic data",
    ],
  },
  {
    href: "/sources-destinations",
    icon: <FaDatabase className="inline-block w-5 h-5 mr-2" />,
    title: "Sources and Destinations",
    items: [
      "Databases",
      "Cloud object storage",
      "Configure a data source",
      "Configure a data destination",
    ],
  },
  {
    href: "/more-tools",
    icon: <FaTerminal className="inline-block w-5 h-5 mr-2" />,
    title: "More Tools",
    items: [
      "REST API",
      "Synthetic Data SDK",
      "Synthetic Data Quality Assurance",
    ],
  },
];

export default function CardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-start">
      {/* Cards Section (2 columns) */}
      <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl group card-border-animated"
          >
            <div className="bg-white dark:bg-[#1e1e2f] border border-gray-200 dark:border-[#33344a] rounded-2xl p-4 h-full flex flex-col relative z-10">
              <div className="mb-2">
                <a
                  href={card.href}
                  className="font-semibold text-lg no-underline text-gray-900 dark:text-white flex items-center relative group/title"
                >
                  {card.icon}
                  <span className="relative text-indigo-500 dark:text-indigo-400 ml-2">
                    {card.title}
                    <span className="absolute left-0 -bottom-1 h-1 w-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-300 group-hover/title:w-full"></span>
                  </span>
                </a>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 flex-1 space-y-2 pl-2">
                {card.items.map((item, i) => (
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

        ))}
      </div>

      {/* Welcome Section */}
      <div className="relative rounded-2xl group card-border-animated">
        <div className="bg-white dark:bg-[#1e1e2f] border border-gray-200 dark:border-[#33344a] rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-sm self-stretch md:min-h-[570px] relative z-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to Syncora
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Discover how to create privacy-safe, production-ready synthetic data in minutes.
          </p>
          {/* Optional image */}
        </div>
      </div>

    </div>
  );
}






