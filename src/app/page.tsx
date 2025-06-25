"use client"

import { useState, useEffect } from "react"
import {
  Briefcase,
  Brain,
  FileText,
  Target,
  BarChart3,
  MessageSquare,
  Users,
  Clock,
  Shield,
  CheckCircle,
  Star,
  ChevronDown,
  QrCode,
  Mail,
  Linkedin,
  Github,
  Twitter,
  Menu,
  X,
  ArrowRight,
  Upload,
  Award,
  Zap,
  Globe,
} from "lucide-react"
import Link from "next/link"

export default function NaukriGuruLanding() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const heroSlides = [
    {
      title: "AI-Powered Mock Interviews",
      description: "Practice with realistic AI interviewers",
      visual: "chat",
    },
    {
      title: "Resume Ratings & Feedback",
      description: "Get instant AI-powered resume scores",
      visual: "scorecard",
    },
    {
      title: "Smart Job Matching",
      description: "AI matches you with perfect opportunities",
      visual: "dashboard",
    },
    {
      title: "Recruiter Shortlisting Tools",
      description: "Advanced candidate filtering and ranking",
      visual: "candidates",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#F5F5DC] font-['Inter'] text-black">
      {/* 1. NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 bg-[#F5F5DC]/80 backdrop-blur-md border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 cursor-pointer">
              <div className="relative">
                <Briefcase className="w-8 h-8 text-[#007F5F]" />
                <Brain className="w-4 h-4 text-[#FFB300] absolute -top-1 -right-1" />
              </div>
              <span className="text-2xl font-black text-[#007F5F] font-['Poppins']">Naukri Guru</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#home" className="text-[#007F5F] hover:text-[#FFB300] transition-colors">
                Home
              </a>
              <a href="#features" className="text-[#007F5F] hover:text-[#FFB300] transition-colors">
                Features
              </a>
              <a href="#recruiters" className="text-[#007F5F] hover:text-[#FFB300] transition-colors">
                For Recruiters
              </a>
              <a href="#candidates" className="text-[#007F5F] hover:text-[#FFB300] transition-colors">
                For Candidates
              </a>
              <a href="#contact" className="text-[#007F5F] hover:text-[#FFB300] transition-colors">
                Contact
              </a>
              <Link href={'/login'}>
              <button className="bg-[#FFB300] text-black px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow">
                Get Started
              </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-[#007F5F]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-black/10">
              <div className="flex flex-col gap-4">
                <a href="#home" className="text-[#007F5F] py-2">
                  Home
                </a>
                <a href="#features" className="text-[#007F5F] py-2">
                  Features
                </a>
                <a href="#recruiters" className="text-[#007F5F] py-2">
                  For Recruiters
                </a>
                <a href="#candidates" className="text-[#007F5F] py-2">
                  For Candidates
                </a>
                <a href="#contact" className="text-[#007F5F] py-2">
                  Contact
                </a>
                <Link href={'/login'}>
                <button className="bg-[#FFB300] text-white px-6 py-3 rounded-full font-semibold w-fit">
                  Get Started
                </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#007F5F]/20 via-[#F5F5DC] to-[#FFB300]/10"></div>

        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg viewBox="0 0 1440 800" className="w-full h-full">
            <path d="M0,200 Q360,100 720,200 T1440,200 L1440,800 L0,800 Z" fill="#007F5F" />
            <path d="M0,400 Q360,300 720,400 T1440,400 L1440,800 L0,800 Z" fill="#FFB300" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-24 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-black text-[#007F5F] font-['Poppins'] leading-tight mb-6">
              Land Jobs Smarter.
              <br />
              Hire Faster.
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
              AI that interviews, rates resumes, and shortlists for you.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link href={'/login'}>
              <button className="bg-[#FFB300] text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-shadow flex items-center gap-3">
                🚀 Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              </Link>

              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-lg shadow-md">
                  <QrCode className="w-12 h-12 text-[#007F5F]" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-600">Scan to check out</p>
                  <p className="font-semibold text-[#007F5F]">naukriguru.ai</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Carousel */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-sm text-gray-500">naukriguru.ai</span>
              </div>

              {/* Slide Content */}
              <div className="min-h-[300px]">
                {currentSlide === 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[#007F5F]">AI Mock Interview</h3>
                    <div className="space-y-3">
                      <div className="bg-[#F5F5DC] p-3 rounded-lg">
                        <p className="text-sm">"Tell me about your experience with React"</p>
                      </div>
                      <div className="bg-[#007F5F] text-white p-3 rounded-lg ml-8">
                        <p className="text-sm">"I've been working with React for 3 years..."</p>
                      </div>
                      <div className="bg-[#F5F5DC] p-3 rounded-lg">
                        <p className="text-sm">"Great! Can you explain state management?"</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#FFB300]">
                      <MessageSquare className="w-4 h-4" />
                      <span>AI analyzing response...</span>
                    </div>
                  </div>
                )}

                {currentSlide === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[#007F5F]">Resume Analysis</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-[#F5F5DC] rounded-lg">
                        <span>Overall Score</span>
                        <span className="text-2xl font-bold text-[#FFB300]">92%</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Skills Match</span>
                          <span className="text-green-600">95%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Experience</span>
                          <span className="text-green-600">88%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Keywords</span>
                          <span className="text-yellow-600">85%</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-[#007F5F] bg-[#F5F5DC] p-3 rounded-lg">
                      💡 Add "TypeScript" and "Node.js" to improve your score
                    </div>
                  </div>
                )}

                {currentSlide === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[#007F5F]">Smart Matching</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-[#F5F5DC] rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">Frontend Developer</span>
                          <span className="text-[#FFB300] font-bold">96% Match</span>
                        </div>
                        <p className="text-sm text-gray-600">TechCorp • Remote • $80k-$100k</p>
                      </div>
                      <div className="p-3 bg-[#F5F5DC] rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">React Developer</span>
                          <span className="text-[#FFB300] font-bold">94% Match</span>
                        </div>
                        <p className="text-sm text-gray-600">StartupXYZ • Hybrid • $75k-$95k</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <button className="text-[#007F5F] font-medium text-sm">View All Matches →</button>
                    </div>
                  </div>
                )}

                {currentSlide === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[#007F5F]">Recruiter Dashboard</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-[#F5F5DC] rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-[#007F5F] rounded-full flex items-center justify-center text-white text-xs font-bold">
                            AM
                          </div>
                          <div>
                            <p className="font-medium">Ayesha Malik</p>
                            <p className="text-xs text-gray-500">Frontend Developer</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-[#FFB300]">92%</p>
                          <p className="text-xs text-gray-500">AI Score</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-[#F5F5DC] rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-[#007F5F] rounded-full flex items-center justify-center text-white text-xs font-bold">
                            TR
                          </div>
                          <div>
                            <p className="font-medium">Talha Raza</p>
                            <p className="text-xs text-gray-500">Full Stack Dev</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-[#FFB300]">89%</p>
                          <p className="text-xs text-gray-500">AI Score</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? "bg-[#FFB300]" : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-[#007F5F]" />
        </div>
      </section>

      {/* 3. FEATURES SECTION */}
      <section id="features" className="py-20 bg-[#F5F5DC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#007F5F] font-['Poppins'] mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Everything you need to ace interviews and hire the best talent
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="group bg-[#FCFCF2] border-2 border-[#007F5F] rounded-2xl p-8 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#007F5F] rounded-full flex items-center justify-center">
                  <Brain className="w-8 h-8 text-[#FFB300]" />
                </div>
                <h3 className="text-xl font-semibold text-[#007F5F] font-['Poppins']">🧠 AI Interviews</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Auto-conducted behavioral + tech rounds with personalized feedback and improvement suggestions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-[#FCFCF2] border-2 border-[#007F5F] rounded-2xl p-8 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#007F5F] rounded-full flex items-center justify-center">
                  <FileText className="w-8 h-8 text-[#FFB300]" />
                </div>
                <h3 className="text-xl font-semibold text-[#007F5F] font-['Poppins']">📄 Resume Scoring</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                CV rated and improved by AI with detailed analysis and keyword optimization.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-[#FCFCF2] border-2 border-[#007F5F] rounded-2xl p-8 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#007F5F] rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-[#FFB300]" />
                </div>
                <h3 className="text-xl font-semibold text-[#007F5F] font-['Poppins']">🧲 Smart Matching</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Match with JD using NLP and advanced algorithms for perfect job-candidate alignment.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-[#FCFCF2] border-2 border-[#007F5F] rounded-2xl p-8 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#007F5F] rounded-full flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-[#FFB300]" />
                </div>
                <h3 className="text-xl font-semibold text-[#007F5F] font-['Poppins']">📊 Recruiter Dashboard</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Resume filters, AI reports, shortlist builder with advanced analytics and insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY NAUKRI GURU SECTION */}
      <section className="py-20 bg-gradient-to-r from-[#007F5F]/5 to-[#FFB300]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#007F5F] font-['Poppins'] mb-8">Why Naukri Guru?</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-16 bg-[#FFB300] rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="w-6 h-6 text-[#FFB300]" />
                      <h3 className="text-xl font-semibold text-[#007F5F]">Saves 80% recruiter time</h3>
                    </div>
                    <p className="text-gray-700">Automated screening and AI-powered candidate ranking</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-1 h-16 bg-[#FFB300] rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-6 h-6 text-[#FFB300]" />
                      <h3 className="text-xl font-semibold text-[#007F5F]">Personalized feedback for candidates</h3>
                    </div>
                    <p className="text-gray-700">Detailed insights and improvement recommendations</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-1 h-16 bg-[#FFB300] rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Zap className="w-6 h-6 text-[#FFB300]" />
                      <h3 className="text-xl font-semibold text-[#007F5F]">Real-time interview simulation</h3>
                    </div>
                    <p className="text-gray-700">Practice with AI that adapts to your responses</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-1 h-16 bg-[#FFB300] rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-6 h-6 text-[#FFB300]" />
                      <h3 className="text-xl font-semibold text-[#007F5F]">Secure & privacy-first design</h3>
                    </div>
                    <p className="text-gray-700">Your data is protected with enterprise-grade security</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-[#007F5F] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-10 h-10 text-[#FFB300]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#007F5F]">AI Analysis in Progress</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-[#F5F5DC] rounded-lg">
                    <span className="text-sm">Resume Analysis</span>
                    <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-[#FFB300] rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#F5F5DC] rounded-lg">
                    <span className="text-sm">Skills Matching</span>
                    <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-[#007F5F] rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#F5F5DC] rounded-lg">
                    <span className="text-sm">Interview Prep</span>
                    <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-1/2 h-full bg-[#FFB300] rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS SECTION */}
      <section className="py-20 bg-[#F5F5DC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#007F5F] font-['Poppins'] mb-4">How It Works</h2>
            <p className="text-xl text-gray-700">Simple steps to transform your hiring process</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="w-20 h-20 bg-[#FFB300] rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                <Upload className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#007F5F] font-['Poppins'] mb-4">Upload CV or JD</h3>
              <p className="text-gray-700">Upload your resume or job description to get started with AI analysis</p>

              {/* Connector line */}
              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-[#FFB300]/30 -translate-x-1/2 z-0"></div>
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              <div className="w-20 h-20 bg-[#FFB300] rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#007F5F] font-['Poppins'] mb-4">Get AI Review</h3>
              <p className="text-gray-700">Receive comprehensive AI analysis and participate in mock interviews</p>

              {/* Connector line */}
              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-[#FFB300]/30 -translate-x-1/2 z-0"></div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#FFB300] rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#007F5F] font-['Poppins'] mb-4">Receive Results</h3>
              <p className="text-gray-700">Get detailed scores, suggestions, and shortlist reports</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOR CANDIDATES & RECRUITERS SPLIT SECTION */}
      <section id="candidates" className="py-20 bg-gradient-to-br from-[#007F5F]/10 to-[#FFB300]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Candidates Card */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-[#007F5F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-[#FFB300]" />
                </div>
                <h3 className="text-2xl font-bold text-[#007F5F] font-['Poppins']">For Candidates</h3>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFB300]" />
                  <span>Resume review and optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFB300]" />
                  <span>AI-powered mock interviews</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFB300]" />
                  <span>Personalized improvement suggestions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFB300]" />
                  <span>Smart job matching</span>
                </div>
              </div>

              <Link href={'/login'}>
              <button className="w-full bg-[#007F5F] text-white py-4 rounded-full font-semibold hover:bg-[#005a45] transition-colors">
                Try Candidate Tools
              </button>
              </Link>
            </div>

            {/* Recruiters Card */}
            <div
              id="recruiters"
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-[#FFB300] rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#007F5F] font-['Poppins']">For Recruiters</h3>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFB300]" />
                  <span>Automated candidate screening</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFB300]" />
                  <span>AI-powered scoring system</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFB300]" />
                  <span>Advanced candidate shortlisting</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FFB300]" />
                  <span>Comprehensive analytics dashboard</span>
                </div>
              </div>

              <Link href={'/login'}>
              <button className="w-full bg-[#FFB300] text-white py-4 rounded-full font-semibold hover:bg-[#e6a000] transition-colors">
                Explore Recruiter Tools
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS SECTION */}
      <section className="py-20 bg-[#FCFCF2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#007F5F] font-['Poppins'] mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-700">Join thousands who've transformed their hiring process</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg relative">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-[#FFB300] text-[#FFB300]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Naukri Guru's AI interview prep helped me land my dream job at Google. The feedback was incredibly
                detailed and actionable."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#007F5F] rounded-full flex items-center justify-center text-white font-bold">
                  AM
                </div>
                <div>
                  <p className="font-semibold text-[#007F5F]">Ayesha Malik</p>
                  <p className="text-sm text-gray-500">Software Engineer, Google</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg relative">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-[#FFB300] text-[#FFB300]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "As an HR manager, this platform has reduced our hiring time by 70%. The AI scoring is remarkably
                accurate."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#007F5F] rounded-full flex items-center justify-center text-white font-bold">
                  TR
                </div>
                <div>
                  <p className="font-semibold text-[#007F5F]">Talha Raza</p>
                  <p className="text-sm text-gray-500">HR Manager, TechCorp</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg relative">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-[#FFB300] text-[#FFB300]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The resume optimization feature increased my interview calls by 300%. Absolutely game-changing!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#007F5F] rounded-full flex items-center justify-center text-white font-bold">
                  SK
                </div>
                <div>
                  <p className="font-semibold text-[#007F5F]">Sarah Khan</p>
                  <p className="text-sm text-gray-500">Project Manager, Tech Innvoators</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA SECTION */}
      <section className="py-20 bg-[#007F5F] text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1440 800" className="w-full h-full">
            <circle cx="200" cy="200" r="100" fill="white" />
            <circle cx="800" cy="400" r="150" fill="white" />
            <circle cx="1200" cy="100" r="80" fill="white" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-24 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold font-['Poppins'] mb-6">
            Join 1,000+ users preparing smarter with AI
          </h2>
          <p className="text-xl lg:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
            Be part of the AI revolution in hiring and career development
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <Link href="/login">
            <button className="bg-[#FFB300] text-black px-12 py-6 rounded-full font-bold text-xl hover:shadow-2xl transition-shadow flex items-center gap-4">
              Get Started
              <ArrowRight className="w-6 h-6" />
            </button>
            </Link>

            <div className="flex items-center gap-6">
              <div className="bg-white p-4 rounded-2xl">
                <QrCode className="w-20 h-20 text-[#007F5F]" />
              </div>
              <div className="text-left">
                <p className="text-lg font-semibold">Scan to Join Now</p>
                <p className="opacity-75">naukriguru.ai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer id="contact" className="py-16 bg-[#FCFCF2] border-t border-[#007F5F]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Left Column */}
            <div>
              <a href="#home" className="flex items-center gap-3 mb-4 cursor-pointer">
                <div className="relative">
                  <Briefcase className="w-8 h-8 text-[#007F5F]" />
                  <Brain className="w-4 h-4 text-[#FFB300] absolute -top-1 -right-1" />
                </div>
                <span className="text-2xl font-black text-[#007F5F] font-['Poppins']">Naukri Guru</span>
              </a>
              <p className="text-gray-600 mb-6">AI Hiring & Interview Prep. Smarter. Faster.</p>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#FFB300] rounded-full flex items-center justify-center hover:shadow-lg transition-shadow cursor-pointer">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-[#FFB300] rounded-full flex items-center justify-center hover:shadow-lg transition-shadow cursor-pointer">
                  <Github className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 bg-[#FFB300] rounded-full flex items-center justify-center hover:shadow-lg transition-shadow cursor-pointer">
                  <Twitter className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* Center Column */}
            <div>
              <h4 className="text-lg font-semibold text-[#007F5F] mb-6">Quick Links</h4>
              <div className="space-y-3">
                <a href="#home" className="block text-gray-600 hover:text-[#007F5F] transition-colors">
                  Home
                </a>
                <a href="#features" className="block text-gray-600 hover:text-[#007F5F] transition-colors">
                  Features
                </a>
                <a href="#" className="block text-gray-600 hover:text-[#007F5F] transition-colors">
                  FAQs
                </a>
                <a href="#" className="block text-gray-600 hover:text-[#007F5F] transition-colors">
                  Privacy
                </a>
                <a href="#contact" className="block text-gray-600 hover:text-[#007F5F] transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h4 className="text-lg font-semibold text-[#007F5F] mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#FFB300]" />
                  <span className="text-gray-600">contact@naukriguru.ai</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[#FFB300]" />
                  <span className="text-gray-600">www.naukriguru.ai</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#007F5F]/20 mt-12 pt-8 text-center">
            <p className="text-gray-600">© 2024 Naukri Guru. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
