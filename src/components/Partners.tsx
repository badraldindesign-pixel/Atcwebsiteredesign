import { motion } from "motion/react";

export function Partners() {
  // Mock partner logos - in production these would be actual logo images
  const partners = [
    { name: "World Bank", category: "Development Finance" },
    { name: "IFC", category: "Investment" },
    { name: "AfDB", category: "Development Bank" },
    { name: "USAID", category: "Government Agency" },
    { name: "European Union", category: "International Organization" },
    { name: "UK Aid", category: "Development Agency" },
    { name: "Bill & Melinda Gates Foundation", category: "Foundation" },
    { name: "Rockefeller Foundation", category: "Foundation" }
  ];

  return (
    <section id="partners" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-slate-100 text-slate-800 px-4 py-1.5 rounded-full mb-4">
            Strategic Partnerships
          </div>
          <h2 className="text-slate-900 mb-4">
            Trusted by Global Leaders
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We collaborate with governments, multilateral institutions, and foundations to maximize impact
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors group"
            >
              <div className="text-center">
                <div className="text-slate-900 mb-2">{partner.name}</div>
                <div className="text-xs text-slate-500">{partner.category}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-slate-50 border border-slate-200 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto"
        >
          <div className="text-4xl text-emerald-600 mb-4">"</div>
          <p className="text-xl text-slate-700 mb-6 leading-relaxed">
            ATC's strategic approach to infrastructure development has been instrumental in transforming economic corridors across East Africa. Their commitment to sustainability and local impact sets a new standard for development finance.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-300 rounded-full" />
            <div>
              <div className="text-slate-900">Dr. Sarah Mitchell</div>
              <div className="text-sm text-slate-600">Director of Infrastructure Finance, World Bank</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
