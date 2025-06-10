import React, { useState } from 'react';
import { Menu, X, Play, Users, Clock, Award, ChevronDown, Mail, Phone, MapPin } from 'lucide-react';
import boy from './assets/boy.jpg'
import africanBoy from './assets/African_boy.jpg'
import little_boy from './assets/little_boy.jpg'
import schedule from './assets/rescheduling.jpg'

export default function MathCodeAcademy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const ageGroups = [
    { 
      range: "5-7 years. Grade 1-2", 
      title: "Little Mathematicians", 
      description: "Fun introduction to numbers and basic coding concepts through games and visual programming",
      slug: "little-mathematicians"
    },
    { 
      range: "8-10 years, Grade 3-5", 
      title: "Junior Coders", 
      description: "Elementary math concepts and Scratch programming with interactive projects",
      slug: "junior-coders"
    },
    { 
      range: "11-13 years, Grade 6-8", 
      title: "Math Explorers", 
      description: "Pre-algebra, geometry, and introduction to text-based programming languages",
      slug: "math-explorers"
    },
    { 
      range: "14-16 years, Grade 9-11", 
      title: "Code Creators", 
      description: "Advanced mathematics and full-stack development with real-world projects",
      slug: "code-creators"
    },
    { 
      range: "17-18 years, Grade 12", 
      title: "Tech Leaders", 
      description: "Calculus, statistics, and advanced programming preparing for college and careers",
      slug: "tech-leaders"
    }
  ];

  const faqs = [
    { q: "How long are the classes?", a: "Our live classes are 60 minutes long, designed to maintain engagement while covering substantial material." },
    { q: "What if my child misses a class?", a: "All classes are recorded and available for review. We also offer makeup sessions when possible." },
    { q: "Do you provide certificates?", a: "Yes, students receive certificates of completion for each course and can earn achievement badges for special projects." },
    { q: "What technology do students need?", a: "Just a computer with internet connection and webcam. We provide access to all coding platforms and tools." }
  ];

  // PDF handling functions (moved outside of component)
  const generatePdfUrl = (group) => {
    const slug = group.slug || group.title.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    
    return `/curricula/${slug}-curriculum.pdf`;
  };

  // Handle PDF navigation with error handling
  const handleLearnMore = async (group) => {
    try {
      const pdfUrl = generatePdfUrl(group);
      
      // Check if PDF exists (optional)
      const response = await fetch(pdfUrl, { method: 'HEAD' });
      
      if (response.ok) {
        // Open PDF in new tab
        window.open(pdfUrl, '_blank');
      } else {
        // Fallback message
        alert(`Curriculum for ${group.title} is coming soon. Please contact us for more information.`);
      }
    } catch (error) {
      console.error('Error accessing curriculum PDF:', error);
      // Simple fallback - just try to open the PDF anyway
      const pdfUrl = generatePdfUrl(group);
      window.open(pdfUrl, '_blank');
    }
  };

  // Alternative: Simple direct navigation (no error checking)
  const handleLearnMoreSimple = (group) => {
    const pdfUrl = generatePdfUrl(group);
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center font-bold text-black">
                CA
              </div>
              <p className="text-xl font-bold">Crest Academy</p>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#programs" className="hover:text-cyan-400 transition-colors">Programs</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-black/40 backdrop-blur-md">
            <div className="px-4 py-2 space-y-2">
              <a href="#home" className="block py-2 hover:text-cyan-400">Home</a>
              <a href="#about" className="block py-2 hover:text-cyan-400">About</a>
              <a href="#programs" className="block py-2 hover:text-cyan-400">Programs</a>
              <a href="#contact" className="block py-2 hover:text-cyan-400">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
             Online<span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Maths and coding academy for future innovators </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Live online classes that make mathematics and programming exciting for kids in grade 1-12. 
              Small groups, expert instructors, real projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-2xl">
                Start Free Trial
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-black/20 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10">
              <div className="h-64 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center border-b border-white/10">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Play size={32} className="text-cyan-400" />
                  </div>
                  <img src={boy} alt="Student learning" className="rounded-lg"/>
                </div>
              </div>
              <div className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="text-cyan-400" size={24} />
                    <span className="text-lg text-cyan-400">Small Class Sizes (6-12 students)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="text-purple-400" size={24} />
                    <span className="text-lg text-bold text-cyan-400">Live Interactive Sessions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="text-yellow-400" size={24} />
                    <span className="text-lg">Expert Instructors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Supplementary Education That <span className="text-cyan-400">Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We enhance your child's regular education with engaging live classes that build 
              mathematical thinking and programming skills through hands-on projects and collaborative learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl overflow-hidden border border-white/10">
              <div className="h-48 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 flex items-center justify-center">
                <div className="text-center">
                  <Users size={48} className="text-white mx-auto mb-2" />
                  <img src={africanBoy} alt="African boy learning" className="rounded-lg"/>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl text-cyan-600 font-bold mb-4">Live & Interactive</h3>
                <p className="text-gray-300">
                  Real-time instruction with immediate feedback, peer collaboration, and personalized attention in small groups.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl overflow-hidden border border-white/10">
              <div className="h-48 bg-gradient-to-br from-purple-400/30 to-pink-400/30 flex items-center justify-center">
                <div className="text-center">
                  <Award size={48} className="text-white mx-auto mb-2" />
                 <img src={little_boy} alt="Little boy coding" className="rounded-lg"/>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl text-cyan-400 font-bold mb-4">Project-Based</h3>
                <p className="text-gray-300">
                  Students build real applications, solve practical problems, and create projects they can proudly share.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl overflow-hidden border border-white/10">
              <div className="h-48 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 flex items-center justify-center">
                <div className="text-center">
                  <Clock size={48} className="text-white mx-auto mb-2" />
                 <img src={schedule} alt="Schedule" className="rounded-lg"/>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-purple-500">Flexible Schedule</h3>
                <p className="text-purple-700">
                  Multiple time slots available to fit around school schedules, with recorded sessions for review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section - FIXED */}
      <section id="programs" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Programs for Every Age
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Carefully designed curriculum that grows with your child's development and interests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                  {group.image ? (
                    <img 
                      src={group.image} 
                      alt={group.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-gray-400 text-6xl">
                      🎓
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {group.range}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">Age Range</p>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {group.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {group.description}
                  </p>
                  
                  <button
                    onClick={() => handleLearnMore(group)}
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Students Will Learn Section */}
      <section className="py-20 bg-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              What Your Child <span className="text-cyan-400">Will Create</span>
            </h2>
            <p className="text-xl text-gray-300">
              From first lines of code to complex applications - here's the journey we'll take together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-black/40 to-black/20 rounded-2xl overflow-hidden border border-white/10">
              <div className="h-48 bg-gradient-to-br from-green-400/20 to-blue-400/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">🎮</span>
                  </div>
                  <p className="text-sm">Interactive games<br />and animations</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold mb-2">Games & Stories</h4>
                <p className="text-gray-300 text-sm">Students learn programming fundamentals by creating their own interactive games and animated stories</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-black/40 to-black/20 rounded-2xl overflow-hidden border border-white/10">
              <div className="h-48 bg-gradient-to-br from-purple-400/20 to-pink-400/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">🧮</span>
                  </div>
                  <p className="text-sm">Math problem<br />solving tools</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold mb-2">Math Applications</h4>
                <p className="text-gray-300 text-sm">Build calculators, graphing tools, and programs that solve real mathematical problems</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-black/40 to-black/20 rounded-2xl overflow-hidden border border-white/10">
              <div className="h-48 bg-gradient-to-br from-yellow-400/20 to-red-400/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <p className="text-sm">Personal websites<br />and portfolios</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold mb-2">Web Projects</h4>
                <p className="text-gray-300 text-sm">Design and code their own websites to showcase projects and express creativity</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Launch - Accepting First Students!</h3>
              <p className="text-gray-300 mb-6">
                Be part of our founding class and help shape the future of MathCode Academy. 
                Early students get special pricing and extra attention as we build our community together.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all transform hover:scale-105">
                Join Our Founding Class
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            Frequently Asked <span className="text-cyan-400">Questions</span>
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-r from-black/40 to-black/20 rounded-xl border border-white/10">
                <button 
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span className="font-semibold text-lg">{faq.q}</span>
                  <ChevronDown 
                    size={24} 
                    className={`transform transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="text-purple-400">Get Started?</span>
            </h2>
            <p className="text-xl text-gray-300">
              Join hundreds of students already learning with us. Start with a free trial class!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-black/40 to-black/20 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="text-cyan-400" size={24} />
                  <span className="text-lg">hello@crestacademy.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-purple-400" size={24} />
                  <span className="text-lg">+234 (816) 572-2442</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-yellow-400" size={24} />
                  <span className="text-lg">Online Classes Worldwide</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Start Your Free Trial</h3>
              <div className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Parent's Name" 
                    className="w-full px-4 py-3 bg-black/20 rounded-lg border border-white/20 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-3 bg-black/20 rounded-lg border border-white/20 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Child's Age" 
                    className="w-full px-4 py-3 bg-black/20 rounded-lg border border-white/20 focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 bg-black/20 rounded-lg border border-white/20 focus:border-cyan-400 focus:outline-none transition-colors">
                    <option>Select Program Interest</option>
                    <option>Mathematics</option>
                    <option>Programming</option>
                    <option>Both Math & Programming</option>
                  </select>
                </div>
                <button 
                  onClick={() => alert('Thank you for your interest! We will contact you soon to schedule your free trial class.')}
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all transform hover:scale-105"
                >
                  Book Free Trial Class
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/40 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center font-bold text-black text-sm">
                CA
              </div>
              <span className="text-lg font-bold">Crest Academy</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2025 Crest Academy. All rights reserved.</p>
              <p className="text-sm mt-1">Empowering the next generation of problem solvers</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}