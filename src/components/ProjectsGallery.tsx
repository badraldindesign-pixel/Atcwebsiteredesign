import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Calendar, DollarSign, TrendingUp } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

interface Project {
  id: string;
  name: string;
  country: string;
  sector: "Infrastructure" | "Food Systems" | "Energy" | "Economic Development";
  status: "active" | "completed" | "planned";
  investment: string;
  timeline: string;
  impact: string;
  image: string;
  description: string;
}

export function ProjectsGallery() {
  const [selectedSector, setSelectedSector] = useState<string>("all");
  const [selectedCountry, setSelectedCountry] = useState<string>("all");

  const projects: Project[] = [
    {
      id: "1",
      name: "East African Transport Corridor",
      country: "Kenya",
      sector: "Infrastructure",
      status: "active",
      investment: "$450M",
      timeline: "2022-2026",
      impact: "2M+ beneficiaries",
      image: "https://images.unsplash.com/photo-1726733725435-29fde25a5892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYwOTU5MDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "850km road network connecting three countries, enabling trade and mobility"
    },
    {
      id: "2",
      name: "Sudan Agricultural Hub",
      country: "Sudan",
      sector: "Food Systems",
      status: "active",
      investment: "$180M",
      timeline: "2023-2025",
      impact: "500K+ farmers",
      image: "https://images.unsplash.com/photo-1675851778840-753170c0dbf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwaXJyaWdhdGlvbiUyMHN5c3RlbXxlbnwxfHx8fDE3NjA5NDUzMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Modern irrigation infrastructure and storage facilities for agricultural development"
    },
    {
      id: "3",
      name: "Ethiopia Solar Initiative",
      country: "Ethiopia",
      sector: "Energy",
      status: "completed",
      investment: "$220M",
      timeline: "2020-2024",
      impact: "150MW capacity",
      image: "https://images.unsplash.com/photo-1713544123590-d5b03390bbd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGZhcm0lMjBwYW5lbHN8ZW58MXx8fHwxNzYwOTcxMTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Large-scale solar power generation facility powering 300,000+ homes"
    },
    {
      id: "4",
      name: "Tanzania Port Expansion",
      country: "Tanzania",
      sector: "Infrastructure",
      status: "active",
      investment: "$380M",
      timeline: "2023-2027",
      impact: "$500M+ trade/year",
      image: "https://images.unsplash.com/photo-1723367194881-fe2e53534170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYWVyaWFsfGVufDF8fHx8MTc2MDk0MTUyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Deep water port and logistics hub serving the East African region"
    },
    {
      id: "5",
      name: "Uganda Renewable Energy",
      country: "Uganda",
      sector: "Energy",
      status: "planned",
      investment: "$150M",
      timeline: "2025-2028",
      impact: "80MW hydropower",
      image: "https://images.unsplash.com/photo-1751823570442-3a992e3ef80b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGVuZXJneSUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc2MDk4NzAxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Hydroelectric power development for sustainable energy access"
    },
    {
      id: "6",
      name: "Senegal Food Processing",
      country: "Senegal",
      sector: "Food Systems",
      status: "active",
      investment: "$95M",
      timeline: "2023-2026",
      impact: "200K+ farmers",
      image: "https://images.unsplash.com/photo-1523349122880-44486ffa7b14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBmb29kJTIwc3lzdGVtc3xlbnwxfHx8fDE3NjA5ODcwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Agricultural processing facilities and distribution network"
    },
    {
      id: "7",
      name: "Ghana Economic Zone",
      country: "Ghana",
      sector: "Economic Development",
      status: "completed",
      investment: "$280M",
      timeline: "2019-2023",
      impact: "15K+ jobs created",
      image: "https://images.unsplash.com/photo-1710232239063-ee788b5752ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXZlbG9wbWVudCUyMGFmcmljYXxlbnwxfHx8fDE3NjA5ODcwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Special economic zone with infrastructure and business facilities"
    },
    {
      id: "8",
      name: "Rwanda Tech Corridor",
      country: "Rwanda",
      sector: "Infrastructure",
      status: "active",
      investment: "$125M",
      timeline: "2024-2026",
      impact: "1M+ connected",
      image: "https://images.unsplash.com/photo-1730367796113-e8984fbb31a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGluZnJhc3RydWN0dXJlJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2MDk4NzAxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Digital infrastructure and fiber optic network expansion"
    },
    {
      id: "9",
      name: "Nigeria Solar Grid",
      country: "Nigeria",
      sector: "Energy",
      status: "active",
      investment: "$340M",
      timeline: "2022-2025",
      impact: "200MW distributed",
      image: "https://images.unsplash.com/photo-1629707921873-e926840b5417?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kJTIwdHVyYmluZXMlMjBlbmVyZ3l8ZW58MXx8fHwxNzYwODc1ODg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Distributed renewable energy network across multiple states"
    },
    {
      id: "10",
      name: "Zambia Mining Infrastructure",
      country: "Zambia",
      sector: "Economic Development",
      status: "planned",
      investment: "$195M",
      timeline: "2025-2028",
      impact: "8K+ jobs",
      image: "https://images.unsplash.com/photo-1633363961301-4f100a78e92d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZ2UlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYwOTIzOTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Transport and energy infrastructure supporting mining operations"
    },
    {
      id: "11",
      name: "Mali Agricultural Value Chain",
      country: "Mali",
      sector: "Food Systems",
      status: "active",
      investment: "$110M",
      timeline: "2023-2027",
      impact: "300K+ farmers",
      image: "https://images.unsplash.com/photo-1523349122880-44486ffa7b14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBmb29kJTIwc3lzdGVtc3xlbnwxfHx8fDE3NjA5ODcwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "End-to-end agricultural value chain development and market access"
    },
    {
      id: "12",
      name: "Mozambique Energy Access",
      country: "Mozambique",
      sector: "Energy",
      status: "active",
      investment: "$165M",
      timeline: "2024-2027",
      impact: "500K+ connected",
      image: "https://images.unsplash.com/photo-1713544123590-d5b03390bbd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGZhcm0lMjBwYW5lbHN8ZW58MXx8fHwxNzYwOTcxMTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Solar mini-grids and off-grid solutions for rural electrification"
    }
  ];

  const sectors = ["all", "Infrastructure", "Food Systems", "Energy", "Economic Development"];
  const countries = ["all", ...Array.from(new Set(projects.map((p) => p.country))).sort()];

  const filteredProjects = projects.filter((project) => {
    const matchesSector = selectedSector === "all" || project.sector === selectedSector;
    const matchesCountry = selectedCountry === "all" || project.country === selectedCountry;
    return matchesSector && matchesCountry;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "completed":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "planned":
        return "bg-amber-100 text-amber-700 border-amber-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full mb-4">
            Project Portfolio
          </div>
          <h2 className="text-slate-900 mb-4">Explore Our Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Filter by sector and country to discover our comprehensive portfolio of sustainable
            development projects
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-12">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Sector Filter */}
              <div>
                <label className="block text-sm text-slate-700 mb-3">Filter by Sector</label>
                <Tabs value={selectedSector} onValueChange={setSelectedSector}>
                  <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5">
                    {sectors.map((sector) => (
                      <TabsTrigger key={sector} value={sector} className="text-xs lg:text-sm">
                        {sector === "all" ? "All Sectors" : sector}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>

              {/* Country Filter */}
              <div>
                <label className="block text-sm text-slate-700 mb-3">Filter by Country</label>
                <div className="flex flex-wrap gap-2">
                  {countries.map((country) => (
                    <button
                      key={country}
                      onClick={() => setSelectedCountry(country)}
                      className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                        selectedCountry === country
                          ? "bg-emerald-600 text-white"
                          : "bg-white border border-slate-300 text-slate-700 hover:border-emerald-600"
                      }`}
                    >
                      {country === "all" ? "All Countries" : country}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 pt-4 border-t border-slate-200 text-sm text-slate-600">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedSector}-${selectedCountry}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="overflow-hidden h-full flex flex-col group hover:shadow-xl transition-shadow">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <div className="absolute top-3 right-3">
                      <Badge className={`${getStatusColor(project.status)} border capitalize`}>
                        {project.status}
                      </Badge>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <Badge className="bg-white/90 text-slate-900 border-0">
                        {project.sector}
                      </Badge>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-auto">
                      <div className="flex items-start gap-2">
                        <MapPin className="text-slate-400 flex-shrink-0 mt-0.5" size={16} />
                        <div className="text-sm">
                          <div className="text-slate-500">Location</div>
                          <div className="text-slate-900">{project.country}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Calendar className="text-slate-400 flex-shrink-0 mt-0.5" size={16} />
                        <div className="text-sm">
                          <div className="text-slate-500">Timeline</div>
                          <div className="text-slate-900">{project.timeline}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <DollarSign className="text-slate-400 flex-shrink-0 mt-0.5" size={16} />
                        <div className="text-sm">
                          <div className="text-slate-500">Investment</div>
                          <div className="text-slate-900">{project.investment}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <TrendingUp className="text-slate-400 flex-shrink-0 mt-0.5" size={16} />
                        <div className="text-sm">
                          <div className="text-slate-500">Impact</div>
                          <div className="text-slate-900">{project.impact}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-slate-400 mb-4">No projects found</div>
            <button
              onClick={() => {
                setSelectedSector("all");
                setSelectedCountry("all");
              }}
              className="text-emerald-600 hover:text-emerald-700"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
