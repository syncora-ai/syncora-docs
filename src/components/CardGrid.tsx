import {
  FaRocket,
  FaCogs,
  FaRobot,
  FaTable,
  FaMagic,
  FaDatabase,
  FaTerminal,
  FaShieldAlt,
  FaChartBar,
  FaBook,
  FaUserFriends,
} from "react-icons/fa";

const cards = [
  {
    href: "/quick-start",
    icon: <FaRocket className="inline-block w-5 h-5 mr-2" />,
    title: "Quick Start",
    items: [
      "Model creators",
      "Data consumers",
      "Fine-tuning LLMs",
    ],
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
      "Deliver synthetic data to databases or cloud",
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
    <div className="grid grid-cols-3 gap-4 w-full">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="border rounded-xl p-4 hover:shadow-md transition flex flex-col h-full group"
        >
          <div className="mb-2">
            <a
              href={card.href}
              className="font-semibold text-lg no-underline text-purple-700 flex items-center relative group/title"
            >
              {card.icon}
              <span className="relative">
                {card.title}
                <span className="absolute left-0 -bottom-1 h-1 w-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-300 group-hover/title:w-full"></span>
              </span>
            </a>
          </div>
          <ul className="list-disc list-inside text-sm text-gray-600 flex-1 space-y-2 pl-2">
            {card.items.map((item, i) => (
              <li key={i} className="relative cursor-pointer group/item">
                <span className="relative">
                  {item}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-600 group-hover/item:w-full"></span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
