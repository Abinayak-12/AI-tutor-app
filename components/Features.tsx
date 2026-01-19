
import React from 'react';

const features = [
  {
    title: 'Adaptive Learning Path',
    description: 'Our AI analyzes your progress and tailors every lesson to your strengths and weaknesses.',
    icon: '🎯'
  },
  {
    title: '24/7 Expert Support',
    description: 'Stuck on a problem at 2 AM? Lumina is always awake and ready to help you push through.',
    icon: '🌙'
  },
  {
    title: 'Multi-Subject Mastery',
    description: 'From Quantum Physics to Renaissance Art, get expert-level guidance across all academic fields.',
    icon: '📚'
  },
  {
    title: 'Interactive Socratic Dialogue',
    description: "We don't just give answers. We guide you through the reasoning process so you actually learn.",
    icon: '💬'
  },
  {
    title: 'Parent/Teacher Dashboard',
    description: 'Detailed insights into learning patterns, knowledge gaps, and academic growth over time.',
    icon: '📊'
  },
  {
    title: 'Voice & Video Interaction',
    description: 'Learn naturally through speech. Our conversational AI feels like a real human tutor.',
    icon: '🎙️'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Why Lumina?</h2>
          <p className="mt-2 text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Education Reimagined.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Traditional tutoring is expensive and limited. Lumina provides world-class education accessible to everyone, everywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="relative p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-slate-100">
              <div className="text-4xl mb-4 transform group-hover:-translate-y-1 transition-transform">{feature.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
