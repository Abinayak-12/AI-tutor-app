
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "High School Junior",
      text: "Lumina saved my AP Calculus grade. The way it explains complex derivatives is much more intuitive than my textbook.",
      img: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      name: "Mark Thompson",
      role: "College Freshman",
      text: "I use Lumina for coding help late at night when the university labs are closed. It's like having a senior developer as a roommate.",
      img: "https://picsum.photos/seed/mark/100/100"
    },
    {
      name: "Elena Rodriguez",
      role: "Parent",
      text: "My son used to dread math homework. Now he's actually excited to show me what he's learned with his 'AI friend' Lumina.",
      img: "https://picsum.photos/seed/elena/100/100"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900">Loved by Students and Parents</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <img src={rev.img} alt={rev.name} className="w-12 h-12 rounded-full border-2 border-indigo-100" />
                <div>
                  <h4 className="font-bold text-slate-900">{rev.name}</h4>
                  <p className="text-sm text-slate-500">{rev.role}</p>
                </div>
              </div>
              <p className="text-slate-600 italic">"{rev.text}"</p>
              <div className="mt-4 flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
