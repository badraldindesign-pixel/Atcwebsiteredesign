import { motion } from "motion/react";
import { Users, Globe, Sprout, Building } from "lucide-react";

export function Impact() {
  const metrics = [
    {
      icon: Users,
      value: "15M+",
      label: "Lives Impacted",
      description: "Direct beneficiaries across our portfolio"
    },
    {
      icon: Globe,
      value: "25",
      label: "Countries",
      description: "Active presence in emerging markets"
    },
    {
      icon: Sprout,
      value: "40%",
      label: "Carbon Reduction",
      description: "Average reduction in our energy projects"
    },
    {
      icon: Building,
      value: "$2.5B",
      label: "Deployed Capital",
      description: "Investment in sustainable infrastructure"
    }
  ];

  return (
    <section id="impact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
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
            Our Impact
          </div>
          <h2 className="text-white mb-4">
            Measurable Results, Lasting Change
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our commitment to sustainable development is reflected in the tangible impact we create
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
                <metric.icon className="text-emerald-400" size={32} />
              </div>
              <div className="text-5xl mb-2">{metric.value}</div>
              <div className="text-xl text-slate-300 mb-2">{metric.label}</div>
              <div className="text-sm text-slate-400">{metric.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Case Study Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-emerald-400 mb-4">Featured Case Study</div>
              <h3 className="text-white mb-4">
                East African Transport Corridor
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                A transformative 850km infrastructure project connecting three countries, enabling $500M+ in annual trade, and directly benefiting over 2 million people through improved access to markets, healthcare, and education.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-2xl text-white mb-1">850km</div>
                  <div className="text-sm text-slate-400">Roads Built</div>
                </div>
                <div>
                  <div className="text-2xl text-white mb-1">3</div>
                  <div className="text-sm text-slate-400">Countries</div>
                </div>
                <div>
                  <div className="text-2xl text-white mb-1">2M+</div>
                  <div className="text-sm text-slate-400">Beneficiaries</div>
                </div>
              </div>
              <button className="text-emerald-400 hover:text-emerald-300 transition-colors">
                Read Full Case Study →
              </button>
            </div>
            <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1710232239063-ee788b5752ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXZlbG9wbWVudCUyMGFmcmljYXxlbnwxfHx8fDE3NjA5ODcwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Infrastructure Project"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
