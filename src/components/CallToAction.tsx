import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function CallToAction() {
  return (
    <section className="py-24 bg-emerald-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-white mb-6">
            Partner With Us to Drive Sustainable Growth
          </h2>
          <p className="text-xl text-emerald-50 mb-10 leading-relaxed">
            Whether you're a government, investor, or development partner, we're ready to collaborate on transformative projects that create lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-emerald-50 group"
            >
              Start a Conversation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              View Our Portfolio
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20 text-white">
            <div>
              <div className="text-sm text-emerald-100 mb-1">Email</div>
              <div>partnerships@atc.sd</div>
            </div>
            <div>
              <div className="text-sm text-emerald-100 mb-1">Phone</div>
              <div>+249 (0) 123 456 789</div>
            </div>
            <div>
              <div className="text-sm text-emerald-100 mb-1">Location</div>
              <div>Khartoum, Sudan</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
