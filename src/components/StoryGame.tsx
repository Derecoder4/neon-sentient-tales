import { useState, useEffect } from 'react';
import { ThemeSelector } from './ThemeSelector';
import { StoryDisplay } from './StoryDisplay';
import { ProgressTracker } from './ProgressTracker';
import { Navbar } from './Navbar';
import { KnowledgeQuiz } from './KnowledgeQuiz';
import { themes, getStoryByTheme } from '@/data/stories';
import { GameProgress, StoryNode } from '@/types/story';
import { useToast } from '@/hooks/use-toast';

export const StoryGame = () => {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [currentNodeId, setCurrentNodeId] = useState('start');
  const [history, setHistory] = useState<string[]>(['start']);
  const [bookmarks, setBookmarks] = useState<Array<{nodeId: string, theme: string}>>([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [progress, setProgress] = useState<GameProgress>({
    steps: 0,
    choicesMade: [],
    endingsReached: [],
    secretsFound: [],
    conceptsLearned: []
  });
  const { toast } = useToast();

  const currentStory = selectedTheme ? getStoryByTheme(selectedTheme) : null;
  const currentNode = currentStory ? currentStory[currentNodeId] : null;

  useEffect(() => {
    if (currentNode?.secret && !progress.secretsFound.includes(currentNode.secret)) {
      setProgress(prev => ({
        ...prev,
        secretsFound: [...prev.secretsFound, currentNode.secret!]
      }));
    }
  }, [currentNode, progress.secretsFound]);

  const handleThemeSelect = (themeId: string) => {
    setSelectedTheme(themeId);
    setCurrentNodeId('start');
    setHistory(['start']);
    setProgress({
      steps: 0,
      choicesMade: [],
      endingsReached: [],
      secretsFound: [],
      conceptsLearned: []
    });
  };

  const handleGoBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      const previousNode = newHistory[newHistory.length - 1];
      setHistory(newHistory);
      setCurrentNodeId(previousNode);
      setProgress(prev => ({
        ...prev,
        steps: Math.max(0, prev.steps - 1)
      }));
    }
  };

  const handleChoice = (nextNode: string) => {
    if (!currentNode) return;
    
    // Track educational concepts learned
    if (currentNode.educational?.title && !progress.conceptsLearned.includes(currentNode.educational.title)) {
      setProgress(prev => ({
        ...prev,
        conceptsLearned: [...prev.conceptsLearned, currentNode.educational.title]
      }));
    }
    
    setProgress(prev => ({
      ...prev,
      steps: prev.steps + 1,
      choicesMade: [...prev.choicesMade, currentNode.id]
    }));
    
    // Handle special theme_select ending
    if (nextNode === 'theme_select') {
      setSelectedTheme(null);
      setCurrentNodeId('start');
      setHistory(['start']);
      return;
    }
    
    setCurrentNodeId(nextNode);
    setHistory(prev => [...prev, nextNode]);
    
    const nextStoryNode = currentStory?.[nextNode];
    if (nextStoryNode?.isEnding) {
      const endingName = `${selectedTheme}_${nextNode}`;
      if (!progress.endingsReached.includes(endingName)) {
        setProgress(prev => ({
          ...prev,
          endingsReached: [...prev.endingsReached, endingName]
        }));
      }
    }
  };

  const handleSave = () => {
    const saveData = {
      selectedTheme,
      currentNodeId,
      history,
      progress,
      bookmarks,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('sentient-story-save', JSON.stringify(saveData));
    toast({
      title: "Progress Saved! 💾",
      description: "Your adventure has been saved successfully.",
    });
  };

  const handleBookmark = () => {
    if (selectedTheme && currentNodeId) {
      const newBookmark = { nodeId: currentNodeId, theme: selectedTheme };
      setBookmarks(prev => [...prev, newBookmark]);
      toast({
        title: "Moment Bookmarked! 🔖",
        description: "You can return to this moment anytime.",
      });
    }
  };

  // Load saved progress on mount
  useEffect(() => {
    const saved = localStorage.getItem('sentient-story-save');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        // Don't auto-load, just notify user
        toast({
          title: "Saved Progress Found! 📚",
          description: "Continue where you left off or start fresh.",
        });
      } catch (e) {
        console.error('Failed to load save', e);
      }
    }
  }, []);

  const handleRestart = () => {
    setSelectedTheme(null);
    setCurrentNodeId('start');
    setHistory(['start']);
  };

  const handleGoHome = () => {
    setSelectedTheme(null);
    setCurrentNodeId('start');
    setHistory(['start']);
  };

  if (showQuiz) {
    return <KnowledgeQuiz onClose={() => setShowQuiz(false)} />;
  }

  if (!selectedTheme) {
    return (
      <>
        <Navbar onQuiz={() => setShowQuiz(true)} />
        <ThemeSelector themes={themes} onSelectTheme={handleThemeSelect} />
      </>
    );
  }

  if (!currentNode) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar 
        onSave={handleSave} 
        onBookmark={handleBookmark} 
        onHome={handleGoHome}
        onQuiz={() => setShowQuiz(true)}
        showHomeButton={true}
      />
      <div className="min-h-screen py-8 pb-24">
        <ProgressTracker progress={progress} />
        <StoryDisplay
          node={currentNode}
          onChoice={handleChoice}
          onRestart={handleRestart}
          onGoBack={handleGoBack}
          canGoBack={history.length > 1}
        />
      </div>
    </>
  );
};
