import { useState } from "react";
import { motion } from "motion/react";
import { Play, Quote } from "lucide-react";
import { Card } from "./ui/card";

interface Testimonial {
  id: string;
  name: string;
  title: string;
  organization: string;
  type: "government" | "community" | "partner";
  quote: string;
  videoThumbnail: string;
  duration: string;
}

export function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Hon. Amina Osman",
      title: "Minister of Infrastructure",
      organization: "Republic of Kenya",
      type: "government",
      quote:
        "ATC's approach to infrastructure development has transformed our transport corridors and created thousands of jobs.",
      videoThumbnail:
        "https://images.unsplash.com/photo-1758599543157-bc1a94fec33c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwaGFuZHNoYWtlfGVufDF8fHx8MTc2MDg5OTQ5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "3:45"
    },
    {
      id: "2",
      name: "John Mwangi",
      title: "Community Leader & Farmer",
      organization: "Nakuru Agricultural Cooperative",
      type: "community",
      quote:
        "The new irrigation system has tripled our yields. Our families can now afford education and healthcare.",
      videoThumbnail:
        "https://images.unsplash.com/photo-1523349122880-44486ffa7b14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBmb29kJTIwc3lzdGVtc3xlbnwxfHx8fDE3NjA5ODcwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "2:30"
    },
    {
      id: "3",
      name: "Dr. Mohammed Hassan",
      title: "Director of Development",
      organization: "African Development Bank",
      type: "partner",
      quote:
        "ATC consistently delivers projects on time and creates measurable impact. They're a model for sustainable development.",
      videoThumbnail:
        "https://images.unsplash.com/photo-1730367796113-e8984fbb31a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGluZnJhc3RydWN0dXJlJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2MDk4NzAxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "4:15"
    },
    {
      id: "4",
      name: "Fatima Yusuf",
      title: "Small Business Owner",
      organization: "Khartoum Market Traders Association",
      type: "community",
      quote:
        "With reliable electricity from the solar project, my business can operate longer hours and serve more customers.",
      videoThumbnail:
        "https://images.unsplash.com/photo-1751823570442-3a992e3ef80b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGVuZXJneSUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc2MDk4NzAxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "3:10"
    },
    {
      id: "5",
      name: "David Okonkwo",
      title: "Regional Governor",
      organization: "Enugu State, Nigeria",
      type: "government",
      quote:
        "The economic zone has attracted major investments and transformed our region into a hub for manufacturing and trade.",
      videoThumbnail:
        "https://images.unsplash.com/photo-1710232239063-ee788b5752ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXZlbG9wbWVudCUyMGFmcmljYXxlbnwxfHx8fDE3NjA5ODcwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "5:00"
    },
    {
      id: "6",
      name: "Sarah Achieng",
      title: "Education Coordinator",
      organization: "Kampala District Schools",
      type: "community",
      quote:
        "Better roads mean children can now safely reach school. Attendance has increased by 60% since the project completed.",
      videoThumbnail:
        "https://images.unsplash.com/photo-1726733725435-29fde25a5892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYwOTU5MDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      duration: "2:55"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "government":
        return "bg-blue-100 text-blue-700";
      case "community":
        return "bg-emerald-100 text-emerald-700";
      case "partner":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "government":
        return "Government Official";
      case "community":
        return "Community Voice";
      case "partner":
        return "Development Partner";
      default:
        return type;
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-slate-100 text-slate-800 px-4 py-1.5 rounded-full mb-4">
            Testimonials
          </div>
          <h2 className="text-slate-900 mb-4">Voices of Impact</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hear directly from government leaders, partners, and community members about the
            transformation we're creating together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-slate-900 overflow-hidden group cursor-pointer">
                  <img
                    src={testimonial.videoThumbnail}
                    alt={testimonial.name}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:bg-emerald-500 transition-colors"
                      onClick={() => setActiveVideo(testimonial.id)}
                    >
                      <Play className="text-slate-900 group-hover:text-white ml-1" size={24} />
                    </motion.button>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-white text-sm">
                    {testimonial.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs w-fit mb-4 ${getTypeColor(
                      testimonial.type
                    )}`}
                  >
                    {getTypeLabel(testimonial.type)}
                  </div>

                  <div className="mb-4">
                    <Quote className="text-emerald-200 mb-2" size={32} />
                    <p className="text-slate-700 leading-relaxed">{testimonial.quote}</p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-200">
                    <div className="text-slate-900 mb-1">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.title}</div>
                    <div className="text-sm text-slate-500">{testimonial.organization}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Video Modal Placeholder */}
        {activeVideo && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 rounded-2xl max-w-4xl w-full aspect-video relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="text-center">
                  <Play className="mx-auto mb-4" size={48} />
                  <p className="text-xl">Video Player</p>
                  <p className="text-sm text-slate-400 mt-2">
                    Video testimonial would play here
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-slate-300"
              >
                Close ✕
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
