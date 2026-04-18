import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 leading-relaxed overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center bg-white/70 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 shadow-sm">
          <div className="text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">FlowState</div>
          <div className="space-x-8 text-sm font-medium text-slate-600 hidden md:flex">
            <a href="#philosophy" className="hover:text-indigo-600 transition-colors">Philosophy</a>
            <a href="#pillars" className="hover:text-indigo-600 transition-colors">Architecture</a>
            <Link href="/auth/register" className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition-all">Join Beta</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-200 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-200 blur-[120px]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            The Operating System of <span className="italic font-normal">Human Discipline</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-light">
            A living behavioral environment that adapts to your neurobiology, making the best version of yourself the path of least resistance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/auth/register" className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
              Start Your Transformation
            </Link>
            <a href="#philosophy" className="px-8 py-4 rounded-full text-lg font-medium border border-slate-200 hover:bg-slate-50 transition-all">
              Explore the Science
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Beyond the <span className="italic font-normal">Willpower Fallacy</span></h2>
              <p className="text-slate-600 mb-6">
                Most apps depend on user motivation. But motivation is a fickle fuel. When it runs out, the system crashes.
              </p>
              <p className="text-slate-600 mb-6">
                Streak-based systems create "shame spirals." One missed day triggers the 'What the Hell' effect, accelerating total abandonment.
              </p>
              <div className="p-6 bg-white rounded-2xl border-l-4 border-indigo-500 italic text-slate-700 shadow-sm">
                "We don't hope for behavior. We engineer it."
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                <div className="text-indigo-600 font-semibold mb-2">The Retention Crisis</div>
                <div className="text-3xl font-bold mb-1">77% Churn</div>
                <div className="text-sm text-slate-500">Industry average churn within 3 days.</div>
              </div>
              <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                <div className="text-indigo-600 font-semibold mb-2">The Solution</div>
                <div className="text-3xl font-bold mb-1">Consistency Scores</div>
                <div className="text-sm text-slate-500">Forgiving progress that absorbs life's interruptions.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="pillars" className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">The Five Pillars of Flow</h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-light">
            Architected on the convergence of behavioral psychology, chronobiology, and neurodiversity.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { title: "Behavior Engineering", desc: "Converging Motivation, Ability, and Prompt at the precise moment (B=MAP)." },
            { title: "Forgiving Architecture", desc: "Rest Tokens and Consistency Scores. Failure becomes a data point, not a verdict." },
            { title: "Identity Transformation", desc: "Anchoring goals to self-concept to create psychological consistency pressure." },
            { title: "Adaptive Friction", desc: "Removing friction from positive habits; injecting it into destructive ones." },
            { title: "Chronobiology", desc: "Prompts aligned with your Chronotype and 90-minute ultradian cycles." },
          ].map((pillar, i) => (
            <div key={i} className="p-8 rounded-3xl border border-slate-100 hover:border-indigo-200 transition-all group bg-white shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 font-bold text-xl group-hover:bg-indigo-600 group-hover:text-white transition-all">{i + 1}</div>
              <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
          <div className="p-8 rounded-3xl bg-indigo-600 text-white flex flex-col justify-center items-center text-center shadow-xl shadow-indigo-200">
            <h3 className="text-2xl font-bold mb-4">Ready to evolve?</h3>
            <Link href="/auth/register" className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-all">Get Early Access</Link>
          </div>
        </div>
      </section>

      {/* Personas Section */}
      <section id="personas" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Designed for Every Mind</h2>
            <p className="text-slate-600 font-light">Because discipline isn't one-size-fits-all.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { persona: "The Ambitious Reformer", name: "Arjun, 28", desc: "Struggles with the shame of broken streaks. Needs a forgiving system that visualizes progress without punishment.", tag: "Identity-Based Framework" },
              { persona: "The Neurodivergent Builder", name: "Priya, 24", desc: "ADHD diagnosis. Battles time-blindness. Needs environmental anchors and ultra-low cognitive friction.", tag: "Habit Stacking & Cues" },
              { persona: "The Lifestyle Architect", name: "Meera, 42", desc: "High-pressure management. Needs a system that respects her energy cycles and chronotype.", tag: "Chronobiological Sync" },
            ].map((p, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <div className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-4">{p.persona}</div>
                <h3 className="text-2xl font-bold mb-4">{p.name}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{p.desc}</p>
                <div className="text-sm font-medium text-indigo-600">{p.tag} &rarr;</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">FlowState</div>
          <div className="text-slate-400 text-xs">
            &copy; 2026 FlowState. Engineered for the human mind.
          </div>
          <div className="flex space-x-6 text-slate-400 text-sm">
            <a href="#" className="hover:text-indigo-600 transition-colors">Twitter</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">GitHub</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
