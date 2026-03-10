import { Linkedin, Twitter, Facebook, Mail } from "lucide-react";

export function Footer() {
  const footerLinks = {
    Company: ["About", "Team", "Careers", "News", "Contact"],
    Solutions: ["Infrastructure", "Food Systems", "Energy", "Economic Development"],
    Resources: ["Case Studies", "Reports", "Blog", "Events"],
    Legal: ["Privacy Policy", "Terms of Service", "Compliance"]
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-2xl mb-4">ATC</div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Building sustainable infrastructure and powering growth across emerging economies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © 2025 ATC. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm">
            Registered in Sudan | Building a sustainable future
          </p>
        </div>
      </div>
    </footer>
  );
}
