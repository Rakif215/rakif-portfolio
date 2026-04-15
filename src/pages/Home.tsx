import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Download,
  BookOpen,
  Mail,
  Monitor,
  Layers,
  Palette
} from 'lucide-react';
import profilePic from '../assets/profile-pic.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 sm:pt-20 overflow-hidden">
        <div className="absolute inset-0 glow-bg pointer-events-none" />
        <div className="absolute inset-0 hero-gradient-overlay pointer-events-none" />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto px-4 sm:px-6 text-center"
        >
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10 mb-8 sm:mb-10">
            {/* Avatar */}
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center shrink-0">
              <div className="absolute inset-3 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.55),rgba(76,29,149,0.35)_45%,rgba(0,0,0,0)_72%)] blur-md" />
              <div className="relative w-full h-full rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={profilePic}
                  alt="Rakif Khan"
                  className="h-full w-full object-contain scale-[1.06] sm:scale-[1.08]"
                />
              </div>
            </div>

            <div className="text-center md:text-left max-w-[20rem] sm:max-w-none">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                Hey, I'm <span className="text-gradient-purple">Rakif✨</span>
                <br />
                An <span className="text-gradient-purple">AI Engineer</span>
              </h1>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-2xl mx-auto mb-8 sm:mb-10">
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed font-light max-w-[22rem] sm:max-w-2xl mx-auto">
              Building reliable AI systems from RAG pipelines to multilingual NLP.
              <br />
              Passionate about systems that know what they don't know.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
            <a href="/Rakif_Pathan_CV.pdf" download className="btn-nadhir w-full sm:w-auto justify-center">
              <Download size={16} /> Download CV
            </a>
            <a href="/projects" className="btn-nadhir w-full sm:w-auto justify-center">
              <BookOpen size={16} /> View Projects
            </a>
            <div className="w-px h-6 bg-zinc-800 mx-2 hidden md:block" />
            <div className="flex gap-5 w-full sm:w-auto justify-center">
              <a href="https://github.com/Rakif215" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:rakif.pathan@fau.de" className="text-zinc-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rakif-khan-pathan-889429130/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* What I can do */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-nadhir"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-purple-500/10 text-accent">
                <Monitor size={24} />
              </div>
              <h3 className="text-2xl font-bold">What I can do</h3>
            </div>
            <p className="text-zinc-400 mb-6 font-light">
              I can help develop AI solutions that will help you grow your business:
            </p>
            <ul className="space-y-3 text-zinc-300 font-medium">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" /> RAG System Design
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Fullstack AI Development
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" /> LLM Fine-Tuning
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" /> AI Benchmarking
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" /> API Integration
              </li>
            </ul>
          </motion.div>

          {/* Tools I Use */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-nadhir"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-purple-500/10 text-accent">
                <Layers size={24} />
              </div>
              <h3 className="text-2xl font-bold">Tools I Use</h3>
            </div>
            <p className="text-zinc-400 mb-6 font-light">
              I use the latest tools and technologies to build functional and scalable products:
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-bold mb-2">• AI & NLP:</h4>
                <p className="text-zinc-400 text-sm ml-4">Llama, Gemini, LangChain, ChromaDB</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">• Backend:</h4>
                <p className="text-zinc-400 text-sm ml-4">Python, FastAPI, Node.js, PostgreSQL</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">• Frontend:</h4>
                <p className="text-zinc-400 text-sm ml-4">React, TypeScript, Tailwind CSS</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* UI/UX Design Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-nadhir md:w-1/2"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-purple-500/10 text-accent">
              <Palette size={24} />
            </div>
            <h3 className="text-2xl font-bold">Research Focus</h3>
          </div>
          <p className="text-zinc-400 mb-6 font-light">
            I am a researcher first, engineer second. I focus on building systems that are honest about their limits:
          </p>
          <ul className="space-y-3 text-zinc-300 font-medium">
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Multilingual NLP
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Hallucination Detection
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Semantic Consistency
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Knowledge Representation
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Let's connect.</h2>
          <p className="text-zinc-500 text-lg">
            I'm always open to discussing research collaborations or AI engineering projects.
          </p>
        </div>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Name</label>
              <input 
                type="text" 
                className="w-full bg-zinc-900/50 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-accent/50 transition-colors"
                placeholder="Alan Turing"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Email</label>
              <input 
                type="email" 
                className="w-full bg-zinc-900/50 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-accent/50 transition-colors"
                placeholder="alan@turing.org"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Message</label>
            <textarea 
              className="w-full bg-zinc-900/50 border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-accent/50 transition-colors min-h-[150px]"
              placeholder="How can we collaborate?"
            />
          </div>
          <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-accent hover:text-white transition-all">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
