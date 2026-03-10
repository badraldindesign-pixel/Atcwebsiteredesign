import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, X } from "lucide-react";

interface Project {
  id: string;
  name: string;
  country: string;
  sector: string;
  status: "active" | "completed" | "planned";
  investment: string;
  description: string;
  x: number; // percentage from left
  y: number; // percentage from top
}

export function InteractiveMap() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "1",
      name: "East African Transport Corridor",
      country: "Kenya",
      sector: "Infrastructure",
      status: "active",
      investment: "$450M",
      description: "850km road network connecting three countries",
      x: 68,
      y: 58
    },
    {
      id: "2",
      name: "Sudan Agricultural Hub",
      country: "Sudan",
      sector: "Food Systems",
      status: "active",
      investment: "$180M",
      description: "Modern irrigation and storage facilities",
      x: 65,
      y: 48
    },
    {
      id: "3",
      name: "Ethiopia Solar Initiative",
      country: "Ethiopia",
      sector: "Energy",
      status: "completed",
      investment: "$220M",
      description: "150MW solar power generation facility",
      x: 67,
      y: 52
    },
    {
      id: "4",
      name: "Tanzania Port Expansion",
      country: "Tanzania",
      sector: "Infrastructure",
      status: "active",
      investment: "$380M",
      description: "Deep water port and logistics hub",
      x: 67,
      y: 62
    },
    {
      id: "5",
      name: "Uganda Renewable Energy",
      country: "Uganda",
      sector: "Energy",
      status: "planned",
      investment: "$150M",
      description: "Hydroelectric power development",
      x: 66,
      y: 55
    },
    {
      id: "6",
      name: "Senegal Food Processing",
      country: "Senegal",
      sector: "Food Systems",
      status: "active",
      investment: "$95M",
      description: "Agricultural processing and distribution network",
      x: 48,
      y: 47
    },
    {
      id: "7",
      name: "Ghana Economic Zone",
      country: "Ghana",
      sector: "Economic Development",
      status: "completed",
      investment: "$280M",
      description: "Special economic zone with infrastructure",
      x: 50,
      y: 52
    },
    {
      id: "8",
      name: "Rwanda Tech Corridor",
      country: "Rwanda",
      sector: "Infrastructure",
      status: "active",
      investment: "$125M",
      description: "Digital infrastructure and fiber optic network",
      x: 66.5,
      y: 60
    },
    {
      id: "9",
      name: "Nigeria Solar Grid",
      country: "Nigeria",
      sector: "Energy",
      status: "active",
      investment: "$340M",
      description: "Distributed solar energy network",
      x: 54,
      y: 52
    },
    {
      id: "10",
      name: "Zambia Mining Infrastructure",
      country: "Zambia",
      sector: "Infrastructure",
      status: "planned",
      investment: "$195M",
      description: "Transport and energy for mining operations",
      x: 64,
      y: 68
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-emerald-500";
      case "completed":
        return "bg-blue-500";
      case "planned":
        return "bg-amber-500";
      default:
        return "bg-slate-500";
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full mb-4">
            Global Presence
          </div>
          <h2 className="text-white mb-4">Our Projects Across Emerging Markets</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Click on any location to explore our active and completed projects
          </p>
        </motion.div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-emerald-500 rounded-full" />
            <span className="text-white text-sm">Active Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full" />
            <span className="text-white text-sm">Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-amber-500 rounded-full" />
            <span className="text-white text-sm">Planned</span>
          </div>
        </div>

        {/* Map Container */}
        <div className="relative bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
          <div className="relative w-full" style={{ paddingBottom: "60%" }}>
            {/* Simplified World Map SVG focusing on Africa */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1000 600"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Africa continent outline (simplified) */}
              <path
                d="M480,150 L520,140 L560,145 L580,160 L600,180 L620,220 L630,260 L635,300 L630,340 L620,380 L600,420 L570,450 L540,470 L510,480 L480,485 L450,480 L420,470 L400,450 L390,420 L380,380 L375,340 L380,300 L390,260 L410,220 L430,190 L450,165 Z"
                fill="#334155"
                stroke="#475569"
                strokeWidth="1"
                opacity="0.6"
              />
              
              {/* Subtle grid lines */}
              {[...Array(10)].map((_, i) => (
                <line
                  key={`h-${i}`}
                  x1="0"
                  y1={i * 60}
                  x2="1000"
                  y2={i * 60}
                  stroke="#475569"
                  strokeWidth="0.5"
                  opacity="0.2"
                />
              ))}
              {[...Array(16)].map((_, i) => (
                <line
                  key={`v-${i}`}
                  x1={i * 62.5}
                  y1="0"
                  x2={i * 62.5}
                  y2="600"
                  stroke="#475569"
                  strokeWidth="0.5"
                  opacity="0.2"
                />
              ))}
            </svg>

            {/* Project Pins */}
            {projects.map((project) => (
              <motion.button
                key={project.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{
                  left: `${project.x}%`,
                  top: `${project.y}%`
                }}
                onClick={() => setSelectedProject(project)}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <div
                    className={`w-4 h-4 rounded-full ${getStatusColor(
                      project.status
                    )} shadow-lg ring-4 ring-white/20`}
                  />
                  <div
                    className={`absolute inset-0 w-4 h-4 rounded-full ${getStatusColor(
                      project.status
                    )} animate-ping opacity-75`}
                  />
                </div>
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  <div className="bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg border border-slate-700">
                    {project.name}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl text-emerald-400 mb-2">
              {projects.filter((p) => p.status === "active").length}
            </div>
            <div className="text-slate-400">Active Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-blue-400 mb-2">
              {projects.filter((p) => p.status === "completed").length}
            </div>
            <div className="text-slate-400">Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-amber-400 mb-2">
              {projects.filter((p) => p.status === "planned").length}
            </div>
            <div className="text-slate-400">In Planning</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-white mb-2">10</div>
            <div className="text-slate-400">Countries</div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl max-w-2xl w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`w-12 h-12 ${getStatusColor(
                    selectedProject.status
                  )} rounded-xl flex items-center justify-center`}
                >
                  <MapPin className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-slate-900 mb-2">{selectedProject.name}</h3>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-slate-600">{selectedProject.country}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-600">{selectedProject.sector}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 mb-6">{selectedProject.description}</p>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200">
                <div>
                  <div className="text-sm text-slate-500 mb-1">Investment</div>
                  <div className="text-2xl text-slate-900">{selectedProject.investment}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Status</div>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${getStatusColor(
                        selectedProject.status
                      )}`}
                    />
                    <span className="text-slate-900 capitalize">{selectedProject.status}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
