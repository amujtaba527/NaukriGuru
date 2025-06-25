"use client"

import JobseekerNavbar from '@/components/JobseekerNavbar';
import { Mic, Volume2, ChevronRight, Video, Pause } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const AIInterviewPractice = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioLevel, setAudioLevel] = useState('Good');
  const [videoOn, setVideoOn] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const maxRecordingTime = 300; // 5 minutes in seconds
  const videoRef = useRef<HTMLVideoElement>(null);

  // Sample questions
  const questions = [
    "Describe a situation where you had to adapt to a significant change in your work environment.",
    "Tell me about a time you had to work with a difficult team member.",
    "How do you prioritize tasks when working on multiple projects?",
    "Describe your greatest professional achievement."
  ];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const startRecording = () => {
    setIsRecording(true);
    setIsPaused(false);
    setRecordingTime(0);
    // Simulate audio level changes
    timerRef.current = setInterval(() => {
      setRecordingTime(prev => {
        if (prev >= maxRecordingTime) {
          stopRecording();
          return maxRecordingTime;
        }
        return prev + 1;
      });
      
      // Random audio level simulation
      const levels = ['Low', 'Good', 'Excellent'];
      setAudioLevel(levels[Math.floor(Math.random() * levels.length)]);
    }, 1000);
  };

  const stopRecording = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsRecording(false);
    setIsPaused(false);
  };

  const togglePause = () => {
    if (isPaused) {
      // Resume recording
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => {
          if (prev >= maxRecordingTime) {
            stopRecording();
            return maxRecordingTime;
          }
          return prev + 1;
        });
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setIsPaused(!isPaused);
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex(prev => (prev + 1) % questions.length);
    resetRecording();
  };

  const resetRecording = () => {
    stopRecording();
    setRecordingTime(0);
    setAudioLevel('Good');
    setShowFeedback(false);
  };

  const submitResponse = () => {
    stopRecording();
    setShowFeedback(true);
  };

  useEffect(() => {
    // Simulate webcam access
    if (videoRef.current) {
      videoRef.current.srcObject = new MediaStream();
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC] font-['Inter']">
      {/* Interview Header */}
      <JobseekerNavbar />

      {/* Main Interview Container */}
      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Video Feed */}
        <div className="lg:col-span-2 space-y-4">
          {/* AI Interviewer Video */}
          <div className="bg-black rounded-lg overflow-hidden relative aspect-video">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-[#007F5F] rounded-full flex items-center justify-center">
                <Volume2 className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-[#007F5F]/90 text-white px-3 py-1 rounded-full text-sm">
              AI Interviewer
            </div>
          </div>

          {/* User Video */}
          <div className="bg-black rounded-lg overflow-hidden relative aspect-video">
            {videoOn ? (
              <video 
                ref={videoRef} 
                autoPlay 
                muted 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                <div className="w-32 h-32 bg-gray-600 rounded-full flex items-center justify-center">
                  <Video className="w-12 h-12 text-gray-400" />
                </div>
              </div>
            )}
            <div className="absolute bottom-4 left-4 bg-[#FFB300]/90 text-black px-3 py-1 rounded-full text-sm">
              {videoOn ? 'You' : 'Camera Off'}
            </div>
            <button 
              onClick={() => setVideoOn(!videoOn)}
              className="absolute bottom-4 right-4 bg-white/20 text-white p-2 rounded-full hover:bg-white/30"
            >
              <Video className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Column - Controls */}
        <div className="space-y-6">
          {/* Question Card */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-[#007F5F]/20">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-[#007F5F]">Question {currentQuestionIndex + 1}/{questions.length}</h3>
              <span className="text-sm bg-[#007F5F]/10 text-[#007F5F] px-2 py-1 rounded">
                Behavioral
              </span>
            </div>
            <p className="text-gray-800 mb-4">
              {questions[currentQuestionIndex]}
            </p>
            <div className="flex justify-between items-center">
              <button 
                onClick={nextQuestion}
                className="text-[#007F5F] text-sm font-medium hover:underline flex items-center gap-1"
              >
                Skip question <ChevronRight className="w-4 h-4" />
              </button>
              <div className="text-sm text-gray-500">
                Suggested time: 2 minutes
              </div>
            </div>
          </div>

          {/* Response Controls */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-[#007F5F]/20">
            <h3 className="text-lg font-semibold text-[#007F5F] mb-4">Your Response</h3>
            
            {!isRecording && !showFeedback && (
              <div className="flex flex-col items-center py-4">
                <button 
                  onClick={startRecording}
                  className="w-16 h-16 bg-[#007F5F] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow mb-4"
                >
                  <Mic className="w-6 h-6 text-white" />
                </button>
                <p className="text-gray-600">Click to start recording your answer</p>
              </div>
            )}

            {(isRecording || isPaused) && (
              <div className="flex flex-col items-center py-4">
                <div className="relative mb-4">
                  <button 
                    onClick={togglePause}
                    className={`w-16 h-16 ${
                      isPaused ? 'bg-[#FFB300]' : 'bg-red-500'
                    } rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow`}
                  >
                    {isPaused ? (
                      <Mic className="w-6 h-6 text-white" />
                    ) : (
                      <Pause className="w-6 h-6 text-white" />
                    )}
                  </button>
                  <div className="absolute -right-2 -top-2 bg-white border-2 border-[#007F5F] rounded-full w-8 h-8 flex items-center justify-center">
                    <div className={`w-3 h-3 rounded-full ${
                      isRecording ? 'bg-red-500 animate-pulse' : 'bg-gray-400'
                    }`}></div>
                  </div>
                </div>

                <div className="text-lg font-medium text-[#007F5F] mb-2">
                  {formatTime(recordingTime)}
                </div>
                <div className="flex items-center gap-2 text-sm text-[#007F5F] mb-4">
                  <div className={`w-3 h-3 rounded-full ${
                    audioLevel === 'Low' ? 'bg-red-400' : 
                    audioLevel === 'Good' ? 'bg-[#FFB300]' : 'bg-[#007F5F]'
                  }`}></div>
                  <span>Audio: {audioLevel}</span>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={resetRecording}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100"
                  >
                    Restart
                  </button>
                  <button 
                    onClick={submitResponse}
                    className="px-4 py-2 bg-[#007F5F] text-white rounded-lg hover:bg-[#005a45]"
                  >
                    Submit Answer
                  </button>
                </div>
              </div>
            )}

            {showFeedback && (
              <div className="py-4">
                <div className="bg-[#007F5F]/5 border-l-4 border-[#007F5F] p-4 mb-4">
                  <h4 className="font-medium text-[#007F5F] mb-2">Answer Submitted Successfully</h4>
                  <p className="text-sm text-gray-700">
                    Your response is being analyzed. AI feedback will be available shortly.
                  </p>
                </div>
                <div className="flex justify-between">
                  <button 
                    onClick={resetRecording}
                    className="text-[#007F5F] text-sm font-medium hover:underline flex items-center gap-1"
                  >
                    Record again
                  </button>
                  <button 
                    onClick={nextQuestion}
                    className="px-4 py-2 bg-[#FFB300] text-black rounded-lg hover:bg-[#e6a000] flex items-center gap-1"
                  >
                    Next Question <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Tips Card */}
          <div className="bg-white rounded-xl p-6 shadow-md border border-[#007F5F]/20">
            <h3 className="text-lg font-semibold text-[#007F5F] mb-3">Interview Tips</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 bg-[#FFB300] rounded-full flex items-center justify-center text-white mt-0.5 flex-shrink-0">
                  1
                </div>
                <span className="text-sm text-gray-700">Use the STAR method (Situation, Task, Action, Result)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 bg-[#FFB300] rounded-full flex items-center justify-center text-white mt-0.5 flex-shrink-0">
                  2
                </div>
                <span className="text-sm text-gray-700">Keep your answers concise (1-2 minutes)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-5 h-5 bg-[#FFB300] rounded-full flex items-center justify-center text-white mt-0.5 flex-shrink-0">
                  3
                </div>
                <span className="text-sm text-gray-700">Maintain eye contact with the camera</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInterviewPractice;