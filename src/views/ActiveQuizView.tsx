import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Clock, ArrowRight, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import { QuizSubmission } from '../types';

export const ActiveQuizView: React.FC = () => {
  const {
    selectedAssessment,
    setActiveTab,
    setActiveQuizResult,
    currentUser,
    updateSkillScore,
    addToast,
  } = useApp();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(600); // 10 mins

  if (!selectedAssessment) {
    return (
      <div className="p-8 text-center space-y-4">
        <p className="text-slate-600">No active quiz found.</p>
        <button
          onClick={() => setActiveTab('quiz-generator')}
          className="px-4 py-2 bg-blue-600 text-white font-bold text-xs rounded-xl"
        >
          Generate Quiz
        </button>
      </div>
    );
  }

  const questions = selectedAssessment.questions;
  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeftSeconds((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSelectOption = (optionIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: optionIndex,
    }));
  };

  const handleSubmitQuiz = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswerIndex) {
        score += 1;
      }
    });

    const totalQuestions = questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);

    // Calculate skill delta (e.g. +13% increase if score is good)
    const delta = percentage >= 70 ? 13 : percentage >= 50 ? 8 : 4;

    const currentSkill = currentUser.skills.find((s) => s.skillId === selectedAssessment.skillId);
    const scoreBefore = currentSkill ? currentSkill.current : 45;
    const scoreAfter = Math.min(100, scoreBefore + delta);

    // Update global skill score
    updateSkillScore(selectedAssessment.skillId, delta);

    const submissionResult: QuizSubmission = {
      assessmentId: selectedAssessment.id,
      skillId: selectedAssessment.skillId,
      score,
      totalQuestions,
      percentage,
      timeTakenSeconds: 600 - timeLeftSeconds,
      date: new Date().toISOString().split('T')[0],
      scoreBefore,
      scoreAfter,
    };

    setActiveQuizResult(submissionResult);
    setActiveTab('quiz-result');
    addToast('Assessment Submitted', `You scored ${percentage}% on ${selectedAssessment.skillName}`, 'success');
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12">
      {/* Quiz Top Bar */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
        <div>
          <span className="text-[10px] uppercase font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
            {selectedAssessment.skillName}
          </span>
          <h2 className="text-base font-bold text-slate-900 mt-0.5">{selectedAssessment.title}</h2>
        </div>

        <div className="flex items-center gap-2 bg-slate-900 text-white font-mono text-xs font-bold px-3 py-1.5 rounded-xl">
          <Clock className="w-4 h-4 text-blue-400" />
          <span>{formatTime(timeLeftSeconds)}</span>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md space-y-6">
        <div className="flex items-center justify-between text-xs text-slate-500 font-semibold border-b border-slate-100 pb-3">
          <span>
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
          <span>{Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}% Completed</span>
        </div>

        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div
            className="bg-blue-600 h-full transition-all"
            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        <h3 className="text-base font-bold text-slate-900 leading-snug">{currentQuestion.question}</h3>

        <div className="space-y-3">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = selectedAnswers[currentQuestionIndex] === idx;

            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                className={`w-full p-4 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between ${
                  isSelected
                    ? 'bg-blue-50 border-blue-600 text-blue-900 ring-2 ring-blue-500/20'
                    : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100'
                }`}
              >
                <span>{option}</span>
                {isSelected && <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />}
              </button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <button
            disabled={currentQuestionIndex === 0}
            onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl disabled:opacity-40 flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          {currentQuestionIndex < questions.length - 1 ? (
            <button
              onClick={() => setCurrentQuestionIndex((prev) => Math.min(questions.length - 1, prev + 1))}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md shadow-blue-500/20 flex items-center gap-1"
            >
              <span>Next Question</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmitQuiz}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-emerald-600/20"
            >
              Submit Assessment
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
