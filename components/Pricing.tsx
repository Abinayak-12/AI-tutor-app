
import React from 'react';

const tiers = [
  {
    name: "Basic",
    price: "$0",
    description: "Perfect for testing the waters.",
    features: ["10 AI sessions per month", "Core subject access", "Web-only platform", "Standard response speed"],
    buttonText: "Start for Free",
    highlighted: false
  },
  {
    name: "Pro Student",
    price: "$19",
    description: "Our most popular plan for active learners.",
    features: ["Unlimited AI sessions", "All subjects included", "Priority response speed", "Voice & Audio mode", "Mobile app access"],
    buttonText: "Get Pro Access",
    highlighted: true
  },
  {
    name: "Family",
    price: "$39",
    description: "Up to 4 student profiles with shared history.",
    features: ["All Pro features", "Dedicated parent dashboard", "Multiple accounts (up to 4)", "Monthly progress reports", "Academic career coaching"],
    buttonText: "Join as Family",
    highlighted: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-xl text-slate-500">No hidden fees. Cancel anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div key={idx} className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${
              tier.highlighted 
                ? 'bg-indigo-600 text-white shadow-2xl scale-105 z-10' 
                : 'bg-slate-50 text-slate-900 border border-slate-200 hover:border-indigo-200'
            }`}>
              {tier.highlighted && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 bg-amber-400 text-amber-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Recommended
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className={`mb-6 text-sm ${tier.highlighted ? 'text-indigo-100' : 'text-slate-500'}`}>{tier.description}</p>
              <div className="mb-8">
                <span className="text-5xl font-extrabold tracking-tight">{tier.price}</span>
                <span className={`text-xl ${tier.highlighted ? 'text-indigo-200' : 'text-slate-500'}`}>/mo</span>
              </div>
              <ul className="flex-grow space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <svg className={`w-5 h-5 ${tier.highlighted ? 'text-indigo-200' : 'text-indigo-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                tier.highlighted 
                  ? 'bg-white text-indigo-600 hover:bg-indigo-50 shadow-lg' 
                  : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100'
              }`}>
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
