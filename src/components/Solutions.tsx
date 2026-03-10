import { Building2, Wheat, Zap, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { Card } from "./ui/card";

export function Solutions() {
  const solutions = [
    {
      icon: Building2,
      title: "Infrastructure Development",
      description: "Building critical infrastructure that connects communities, enables commerce, and drives sustainable economic growth.",
      image: "https://images.unsplash.com/photo-1730367796113-e8984fbb31a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGluZnJhc3RydWN0dXJlJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2MDk4NzAxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: "500+ projects delivered"
    },
    {
      icon: Wheat,
      title: "Food Systems",
      description: "Strengthening agricultural value chains and food security through innovative supply chain solutions and infrastructure.",
      image: "https://images.unsplash.com/photo-1523349122880-44486ffa7b14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBmb29kJTIwc3lzdGVtc3xlbnwxfHx8fDE3NjA5ODcwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: "2M+ farmers impacted"
    },
    {
      icon: Zap,
      title: "Energy Solutions",
      description: "Deploying renewable energy infrastructure to power communities and businesses across emerging markets.",
      image: "https://images.unsplash.com/photo-1751823570442-3a992e3ef80b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGVuZXJneSUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc2MDk4NzAxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: "350MW capacity"
    },
    {
      icon: TrendingUp,
      title: "Economic Development",
      description: "Strategic investments and partnerships that catalyze economic transformation and job creation.",
      image: "https://images.unsplash.com/photo-1710232239063-ee788b5752ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXZlbG9wbWVudCUyMGFmcmljYXxlbnwxfHx8fDE3NjA5ODcwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      stats: "50K+ jobs created"
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full mb-4">
            Our Solutions
          </div>
          <h2 className="text-slate-900 mb-4">
            Comprehensive Development Across Critical Sectors
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We deliver integrated solutions that address the most pressing challenges facing emerging economies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full group hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3 text-white mb-2">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <solution.icon size={24} />
                      </div>
                      <h3 className="text-white">{solution.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-4">{solution.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <span className="text-emerald-600">{solution.stats}</span>
                    <span className="text-slate-400 text-sm group-hover:text-slate-600 transition-colors">
                      Learn more →
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
