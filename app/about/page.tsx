'use client'
import React,{useState} from 'react'
import Image from 'next/image'
import { aboutData } from '@/constants';

export default function About() {
  const [activeTab, setActiveTab] = useState('highlight');
  
  const tabs = [
    { id: 'highlight', label: 'Highlight' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'highlight':
        return (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-semibold mb-4 text-sky-600">Profile</h2>
            <p className="text-slate-700">{aboutData.description}</p>
          </div>
        );
      
      case 'skills':
        return (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-semibold mb-4 text-sky-600">Technologies I've Learned</h2>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              {aboutData.technologies.map(({ name, logo }) => (
                <div key={name} className="flex flex-col items-center w-20 bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <Image src={logo} alt={`${name} logo`} className="w-12 h-12 mb-2" />
                  <span className="text-sm text-slate-600 text-center">{name}</span>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'education':
        return (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-semibold mb-4 text-sky-600">Education</h2>
            <div className="space-y-4">
              {aboutData.education.map((edu, index) => (
                <div 
                  key={index} 
                  className="p-4 border-l-4 border-sky-500 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-lg text-sky-700">{edu.institution}</h3>
                  <p className="text-sm text-slate-500">{edu.period}</p>
                  <p className="text-slate-700 mt-1">{edu.degree}</p>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'experience':
        return (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-semibold mb-4 text-sky-600">Job Experience</h2>
            <div className="space-y-4">
              {aboutData.jobExperience.map((job, index) => (
                <div 
                  key={index} 
                  className="p-4 border-l-4 border-sky-500 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-lg text-sky-700">{job.company}</h3>
                  <p className="text-slate-700 italic">{job.jobTitle}</p>
                  <p className="text-sm text-slate-500 mt-1">{job.period}</p>
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-12">
      <section className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-sky-500 text-center">About Me</h1>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Sidebar Navigation */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
              <nav>
                <ul className="space-y-1">
                  {tabs.map(tab => (
                    <li key={tab.id}>
                      <button
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                          activeTab === tab.id
                            ? 'bg-sky-500 text-white font-medium'
                            : 'text-slate-600 hover:bg-sky-50'
                        }`}
                      >
                        {tab.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          
          {/* Right Content Panel */}
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

