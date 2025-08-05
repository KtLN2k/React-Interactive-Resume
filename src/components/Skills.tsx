import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiTailwindcss } from "react-icons/si";

function Skills() {
  const skills = [
    { 
      name: "React", 
      icon: <FaReact size={28} />, 
      color: "bg-cyan-50 text-cyan-600", 
      description: "Developing modular components, Hooks, state management with Redux." 
    },
    { 
      name: "HTML5", 
      icon: <FaHtml5 size={28} />, 
      color: "bg-orange-50 text-orange-600", 
      description: "Semantic markup, SEO-friendly, accessible page structures." 
    },
    { 
      name: "CSS3", 
      icon: <FaCss3Alt size={28} />, 
      color: "bg-blue-50 text-blue-600", 
      description: "Responsive design, animations, Flexbox, CSS Grid." 
    },
    { 
      name: "JavaScript", 
      icon: <FaJs size={28} />, 
      color: "bg-yellow-50 text-yellow-600", 
      description: "ES6+, asynchronous programming, working with APIs." 
    },
    { 
      name: "TypeScript", 
      icon: <SiTypescript size={28} />, 
      color: "bg-sky-50 text-sky-600", 
      description: "Strong typing, building reliable and maintainable code." 
    },
    { 
      name: "Node.js", 
      icon: <FaNodeJs size={28} />, 
      color: "bg-green-50 text-green-600", 
      description: "Backend development, REST APIs, WebSockets." 
    },
    { 
      name: "MongoDB", 
      icon: <SiMongodb size={28} />, 
      color: "bg-emerald-50 text-emerald-600", 
      description: "NoSQL database, query optimization, schema design." 
    },
    { 
      name: "Tailwind CSS", 
      icon: <SiTailwindcss size={28} />, 
      color: "bg-teal-50 text-teal-600", 
      description: "Fast, responsive, and clean design using utility classes." 
    }
  ];

  return (
    <section className="mb-10">
      {/* Title */}
      <h2 className="text-xl font-bold text-gray-900 uppercase mb-1">
        Skills
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Hover over each technology to learn more
      </p>
      <div className="w-12 h-0.5 bg-gray-300 mb-6"></div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="relative flex flex-col items-center text-center group cursor-pointer"
          >
            {/* Icon Circle */}
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110 ${skill.color}`}
            >
              {skill.icon}
            </div>
            <span className="mt-2 text-sm font-medium text-gray-800">
              {skill.name}
            </span>

            {/* Tooltip */}
            <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-900 text-white text-xs rounded-md px-3 py-2 shadow-lg w-44 z-10">
              {skill.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
