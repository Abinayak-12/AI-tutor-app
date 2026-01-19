
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-700 mb-6">
              New: Real-time Audio Tutoring
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Master Any Subject with Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Personal AI Mentor</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-lg">
              Lumina uses advanced AI to adapt to your learning style. Get instant explanations, personalized homework help, and 24/7 academic coaching.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all hover:scale-105">
                Start Learning Free
              </button>
              <button className="px-8 py-4 bg-white text-slate-700 font-bold rounded-xl shadow-lg hover:bg-slate-50 transition-all border border-slate-200 flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch How It Works
              </button>
            </div>
            <div className="mt-8 flex items-center space-x-4 text-slate-500 text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src={`https://picsum.photos/seed/${i + 10}/100/100`} alt="user" />
                ))}
              </div>
              <span>Trusted by 50,000+ students globally</span>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-3xl shadow-2xl overflow-hidden group">
              <img 
                className="w-full transform group-hover:scale-105 transition-transform duration-700" 
                src="https://picsum.photos/seed/edu8/800/600" 
                alt="AI Tutoring Illustration" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl border border-white/20 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-sm font-semibold text-slate-800">Lumina is typing: "That's correct! Now, let's explore why..."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
