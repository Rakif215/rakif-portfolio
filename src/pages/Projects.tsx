import { motion } from 'motion/react';
import { ArrowUpRight, Github } from 'lucide-react';
import veritasImage from '../assets/veritas.jpeg';
import localBenchmarkingImage from '../assets/local-llm-benchmarking.jpeg';
import multiAgentImage from '../assets/multi-agent-system.gif';
import shoppingAssistantImage from '../assets/smart-cart-demo.webp';
import dataCImage from '../assets/datac.JPG';

type Project = {
  title: string;
  subtitle: string;
  image: string;
  link: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: 'Veritas',
    subtitle: 'Medical RAG that refuses weak answers.',
    image: veritasImage,
    link: 'https://github.com/Rakif215/ai-engineering-projects',
    tags: ['RAG', 'Healthcare', 'Grounding'],
  },
  {
    title: 'SLM Dashboard',
    subtitle: 'Local benchmarking with real latency signals.',
    image: localBenchmarkingImage,
    link: 'https://github.com/Rakif215/ai-engineering-projects',
    tags: ['Privacy', 'Benchmarks'],
  },
  {
    title: 'Multi-Agent System',
    subtitle: 'Tool-using agents with observable coordination.',
    image: multiAgentImage,
    link: 'https://github.com/Rakif215/Multi-Agent-System',
    tags: ['Agents', 'Tracing'],
  },
  {
    title: 'Shopping Assistant',
    subtitle: 'Compares, clarifies, and recommends.',
    image: shoppingAssistantImage,
    link: 'https://github.com/Rakif215/agentic-shopping-assistant',
    tags: ['E-Commerce', 'Agent UX'],
  },
  {
    title: 'DataC Origin',
    subtitle: 'Hackathon-winning Arabic enterprise chatbot.',
    image: dataCImage,
    link: 'https://github.com/Rakif215/Advanced-RAG-Chatbot-with-Hybrid-Chunking',
    tags: ['Arabic NLP', 'Enterprise AI', 'Winner'],
  },
];

export default function Projects() {
  return (
    <div className="pt-28 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">Projects</h1>
        <p className="text-zinc-500 text-base sm:text-lg max-w-2xl">
          Here you will find a selection of projects I have worked on.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-[22px] sm:rounded-[24px] border border-white/8 bg-black/50"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 md:group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 md:bg-black/0 transition-colors duration-300 md:group-hover:bg-black/10" />
              <div className="absolute inset-x-0 bottom-0 h-[42%] md:h-0 bg-gradient-to-t from-black/95 via-black/75 to-transparent opacity-100 md:opacity-0 transition-all duration-500 md:group-hover:h-[42%] md:group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 md:p-6 translate-y-0 opacity-100 md:translate-y-4 md:opacity-0 transition-all duration-500 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                <div className="min-w-0">
                  <h2 className="text-lg sm:text-xl md:text-[1.45rem] font-bold leading-none mb-2 text-white">
                    {project.title}
                  </h2>
                  <p className="text-white/90 text-xs sm:text-sm md:text-[0.95rem] leading-snug max-w-[24rem] sm:max-w-[28rem] mb-3 sm:mb-4 pr-2">
                    {project.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#a77cf7] px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-semibold text-white max-w-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute top-4 right-4 sm:top-5 sm:right-5 flex gap-2 opacity-100 md:opacity-0 transition-opacity duration-300 md:group-hover:opacity-100">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 bg-black/55 p-2.5 sm:p-3 text-white transition hover:bg-white hover:text-black"
                    aria-label={`Open ${project.title} repository`}
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 bg-black/55 p-2.5 sm:p-3 text-white transition hover:bg-white hover:text-black"
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
