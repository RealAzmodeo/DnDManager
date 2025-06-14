
import React from 'react';

interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ title, children }) => {
  return (
    <section className="mb-12 p-6 bg-slate-800/50 rounded-xl shadow-2xl backdrop-blur-md border border-slate-700">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 pb-3 border-b-2 border-sky-600 text-sky-400" style={{ fontFamily: "'Merriweather', serif" }}>
        {title}
      </h2>
      {children}
    </section>
  );
};
