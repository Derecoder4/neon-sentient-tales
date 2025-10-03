import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { sentientQuizQuestions, QuizQuestion } from '@/data/quizQuestions';
import { CheckCircle2, XCircle, Trophy, RotateCcw } from 'lucide-react';

interface KnowledgeQuizProps {
  onClose: () => void;
}

export const KnowledgeQuiz = ({ onClose }: KnowledgeQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(sentientQuizQuestions.length).fill(false));
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const question = sentientQuizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / sentientQuizQuestions.length) * 100;

  const handleAnswer = (answerIndex: number) => {
    if (showExplanation) return;
    
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    if (answerIndex === question.correctAnswer) {
      setScore(score + 1);
    }
    
    const newAnswered = [...answeredQuestions];
    newAnswered[currentQuestion] = true;
    setAnsweredQuestions(newAnswered);
  };

  const handleNext = () => {
    if (currentQuestion < sentientQuizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setIsQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions(new Array(sentientQuizQuestions.length).fill(false));
    setIsQuizComplete(false);
  };

  if (isQuizComplete) {
    const percentage = Math.round((score / sentientQuizQuestions.length) * 100);
    let message = '';
    let emoji = '';
    
    if (percentage >= 90) {
      message = 'Outstanding! You\'re a Sentient Expert! 🌟';
      emoji = '🏆';
    } else if (percentage >= 75) {
      message = 'Excellent! You know your Sentient! 🎯';
      emoji = '⭐';
    } else if (percentage >= 60) {
      message = 'Good job! Keep learning about Sentient! 📚';
      emoji = '👍';
    } else {
      message = 'Keep exploring! There\'s more to discover! 🚀';
      emoji = '💪';
    }

    return (
      <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 overflow-y-auto">
        <div className="min-h-screen p-6 flex items-center justify-center">
          <Card className="max-w-2xl w-full p-8 border-2 border-primary/50">
            <div className="text-center">
              <Trophy className="w-20 h-20 mx-auto mb-4 text-primary animate-pulse" />
              <h2 className="text-4xl font-bold neon-text mb-4">Quiz Complete! {emoji}</h2>
              <p className="text-3xl mb-4">Score: {score}/{sentientQuizQuestions.length}</p>
              <p className="text-2xl mb-2">{percentage}%</p>
              <p className="text-xl mb-8 text-muted-foreground">{message}</p>
              
              <div className="flex gap-4 justify-center">
                <Button onClick={handleRestart} className="neon-button" size="lg">
                  <RotateCcw className="mr-2" />
                  Try Again
                </Button>
                <Button onClick={onClose} variant="outline" size="lg">
                  Back to Adventure
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex justify-between items-center">
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">
                  Question {currentQuestion + 1} of {sentientQuizQuestions.length}
                </span>
                <span className="text-sm font-bold text-primary">
                  Score: {score}/{currentQuestion + (showExplanation ? 1 : 0)}
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
            <Button onClick={onClose} variant="ghost" className="ml-4">
              Exit Quiz
            </Button>
          </div>

          <Card className="border-2 border-primary/50 bg-card/80 backdrop-blur-sm p-8">
            <h2 className="text-2xl font-bold mb-6 text-primary">{question.question}</h2>
            
            <div className="space-y-3 mb-6">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === question.correctAnswer;
                const showResult = showExplanation;
                
                let buttonClass = "w-full text-left py-4 px-6 text-lg border-2 transition-all duration-300";
                
                if (showResult) {
                  if (isCorrect) {
                    buttonClass += " border-green-500 bg-green-500/20";
                  } else if (isSelected && !isCorrect) {
                    buttonClass += " border-red-500 bg-red-500/20";
                  } else {
                    buttonClass += " border-muted opacity-50";
                  }
                } else {
                  buttonClass += " border-primary hover:bg-primary/20";
                }
                
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={showExplanation}
                    className={buttonClass}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {showResult && isCorrect && <CheckCircle2 className="text-green-500" />}
                      {showResult && isSelected && !isCorrect && <XCircle className="text-red-500" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {showExplanation && (
              <div className="mb-6 p-6 bg-secondary/20 border-2 border-secondary rounded-lg animate-fade-in">
                <h3 className="text-xl font-bold text-secondary mb-2">
                  {selectedAnswer === question.correctAnswer ? '✅ Correct!' : '❌ Incorrect'}
                </h3>
                <p className="text-foreground leading-relaxed">{question.explanation}</p>
              </div>
            )}

            {showExplanation && (
              <Button onClick={handleNext} className="w-full neon-button text-lg py-6">
                {currentQuestion < sentientQuizQuestions.length - 1 ? 'Next Question' : 'See Results'}
              </Button>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};
