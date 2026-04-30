import { motion } from 'motion/react';
import { 
  FileText, 
  Landmark, 
  CheckCircle2, 
  Check, 
  ArrowRight, 
  Menu,
  ChevronRight
} from 'lucide-react';

const Header = () => (
  <header id="header" className="w-full bg-[#F5F5F4] border-b border-border-subtle sticky top-0 z-50">
    <div className="section-container h-24 flex justify-between items-center">
      <div id="logo" className="text-2xl font-serif font-bold text-text-primary">
        DocJournal
      </div>
      <div id="actions" className="hidden md:flex gap-8 items-center">
        {['Home', 'Contact'].map((item) => (
          <a
            key={item}
            href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
            className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium"
          >
            {item}
          </a>
        ))}
      </div>
      <button id="mobile-menu" className="md:hidden text-text-secondary p-2">
        <Menu size={24} />
      </button>
    </div>
  </header>
);

const Hero = () => (
  <section id="hero" className="section-container py-section-desktop flex flex-col items-center text-center">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-[800px]"
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-text-primary leading-[1.1] mb-8">
        Professional Project Documentation for Final Year Excellence.
      </h1>
      <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-12 max-w-[700px] mx-auto">
        A contemplative approach to academic writing. We distill your raw research into structured, pristine documentation that commands academic respect, ensuring a stress-free submission process.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <a href="#pricing" className="btn-secondary w-full sm:w-auto px-10 py-5 text-center">
          View Pricing
        </a>
      </div>
    </motion.div>
  </section>
);

const Features = () => (
  <section id="process" className="w-full bg-surface-raised border-y border-border-subtle py-section-desktop">
    <div className="section-container">
      <div className="mb-16 max-w-[680px]">
        <h2 className="text-3xl text-text-primary mb-6">The Standard of Clarity</h2>
        <p className="text-lg text-text-secondary">
          We reject superficial formatting in favor of deep structural integrity. Every document is crafted to meet rigorous academic standards while maintaining an elegant, distraction-free aesthetic.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 bg-border-subtle gap-[1px]">
        {[
          {
            icon: <FileText className="text-text-tertiary" size={32} />,
            title: "Contemplative Quality",
            description: "Content takes precedence over decoration. We ensure your methodology and findings are presented with absolute clarity, allowing your hard work to speak for itself without structural noise."
          },
          {
            icon: <Landmark className="text-text-tertiary" size={32} />,
            title: "Academic Standards",
            description: "Strict adherence to university guidelines, including precise citations, formalized abstract construction, and logical chapter flow. We format so you don't have to."
          },
          {
            icon: <CheckCircle2 className="text-text-tertiary" size={32} />,
            title: "Stress-Free Submission",
            description: "Hand over your chaotic notes, drafts, and data. Receive a meticulously typeset, ready-to-print final PDF and Word document well before your deadline."
          }
        ].map((feature, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ backgroundColor: "var(--color-surface-muted)" }}
            className="bg-surface p-12 flex flex-col gap-6"
          >
            {feature.icon}
            <h3 className="text-xl text-text-primary">{feature.title}</h3>
            <p className="text-text-secondary leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="section-container py-section-desktop text-center">
    <span className="text-[11px] font-semibold text-text-tertiary uppercase tracking-[0.2em] mb-4 block">
      Transparent Investment
    </span>
    <h2 className="text-3xl text-text-primary mb-12">The Complete Document</h2>
    
    <div className="max-w-2xl mx-auto bg-surface-muted border border-border-subtle p-12 md:p-16">
      <div className="flex flex-col items-center mb-10">
        <div className="flex items-baseline gap-2">
          <span className="text-xl text-text-secondary font-serif">Rs.</span>
          <span className="text-7xl font-sans font-bold text-text-primary">400</span>
        </div>
        <p className="text-sm text-text-tertiary mt-2">Per complete final year project documentation</p>
      </div>
      
      <ul className="text-left space-y-4 mb-12 border-t border-border-subtle pt-8 max-w-md mx-auto">
        {[
          "Formatting to university guidelines",
          "Diagram and chart aesthetic alignment",
          "Plagiarism check report inclusion",
          "Print-ready PDF & editable source"
        ].map((item, idx) => (
          <li key={idx} className="flex items-start gap-4 pb-4 border-b border-border-subtle last:border-0 last:pb-0">
            <Check size={18} className="text-text-primary mt-1 shrink-0" />
            <span className="text-text-secondary text-[15px]">{item}</span>
          </li>
        ))}
      </ul>
      
      <a href="#contact" className="btn-primary w-full max-w-md py-5 text-sm text-center">
        Begin Process
      </a>
    </div>
  </section>
);

const StructuralElegance = () => (
  <section id="resources" className="w-full bg-surface-raised border-t border-border-subtle py-section-desktop">
    <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div id="image-frame" className="relative group">
        <div className="aspect-[3/4] bg-surface p-4 border border-border-subtle shadow-sm overflow-hidden flex items-center justify-center">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6CorsGnNoM64kARmgx2RMEt5opb6phhM3dFwFilLdo6jU2V9l5-EkDiRyKXGKt7qsMPLOeNhQwQN1Ztymnl1iLkO4kBUZay5wFJYeemm5LbsybWQa_xuLoasv8Fpvxwu4OCjWZopu7u0nk4utHmrpDayqur3QiYMdAyAGkYtoHtFlHN_yVLpLVi7JtHuz26ep_XmjS4yRvbVaa1k1EthDkCziaNnGv7cJxHd3Uzqo6ZbSCde6grrXwPBWuO3Pvim2a4dWh3TBRWo" 
            alt="Minimalist Document Setup" 
            className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 border-[16px] border-surface pointer-events-none"></div>
        </div>
      </div>
      
      <div id="content" className="max-w-[580px]">
        <h2 className="text-3xl text-text-primary mb-6">Structural Elegance</h2>
        <p className="text-lg text-text-secondary leading-relaxed mb-12">
          A well-documented project does not scream for attention; it guides the reader's eye naturally through the narrative of your research. We employ classic typographic principles to ensure legibility and professional weight.
        </p>
        
        <div className="border-t border-border-subtle">
          {['Typography', 'Information Architecture', 'Data Visualization'].map((item) => (
            <div key={item} className="flex justify-between items-center py-6 border-b border-border-subtle group cursor-pointer hover:bg-surface-muted transition-colors px-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">{item}</span>
              <ArrowRight size={20} className="text-text-tertiary group-hover:text-text-primary transition-transform group-hover:translate-x-1" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="section-container py-section-desktop border-t border-border-subtle">
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
        <h2 className="text-3xl text-text-primary mb-6">Begin Your Project</h2>
        <p className="text-lg text-text-secondary mb-8">
          Ready to elevate your research? Contact us to discuss your documentation requirements or start the commission process.
        </p>
        <div className="space-y-4">
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-text-tertiary mb-1">Email</span>
            <span className="text-text-primary">kinetlabs24.7@gmail.com</span>
          </div>
        </div>
      </div>
      
      <form
        action="mailto:kinetlabs24.7@gmail.com"
        method="post"
        encType="text/plain"
        className="space-y-6"
      >
        <div className="space-y-2">
          <label className="text-[11px] font-semibold uppercase tracking-widest text-text-secondary">Full Name</label>
          <input 
            type="text" 
            name="name"
            placeholder="Academic Name"
            className="w-full bg-surface border border-border-medium px-4 py-3 outline-none focus:border-text-primary transition-colors text-sm"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[11px] font-semibold uppercase tracking-widest text-text-secondary">Email</label>
          <input 
            type="email" 
            name="email"
            placeholder="your@email.com"
            className="w-full bg-surface border border-border-medium px-4 py-3 outline-none focus:border-text-primary transition-colors text-sm"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[11px] font-semibold uppercase tracking-widest text-text-secondary">Initial Notes</label>
          <textarea 
            placeholder="Tell us about your research domain..."
            name="notes"
            rows={4}
            className="w-full bg-surface border border-border-medium px-4 py-3 outline-none focus:border-text-primary transition-colors text-sm resize-none"
          />
        </div>
        <button type="submit" className="btn-primary w-full py-4 text-sm">
          Send Inquiry
        </button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer id="footer" className="w-full bg-surface-raised border-t border-border-medium py-20">
    <div className="section-container flex flex-col md:flex-row justify-between gap-12">
      <div className="space-y-6">
        <div className="text-xl font-serif font-bold text-text-primary">DocJournal</div>
        <p className="text-sm italic text-text-secondary font-serif">
          © 2024 The Scholar's Journal. Crafted for clarity.
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div id="app-root" className="min-h-screen flex flex-col selection:bg-text-primary selection:text-surface">
      <Header />
      <main id="main-content" className="flex-grow">
        <Hero />
        <Features />
        <Pricing />
        <StructuralElegance />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
