import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 border-t border-white/5 bg-black">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <div className="text-lg font-semibold">Rakif Khan</div>
          <p className="text-zinc-500 text-sm">MSc AI, FAU Erlangen-Nürnberg</p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-6">
            <a href="https://github.com/Rakif215" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:rakifkhan@pm.me" className="text-zinc-500 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
          <p className="text-zinc-600 text-[11px] uppercase tracking-widest">
            © 2025 Rakif Khan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
