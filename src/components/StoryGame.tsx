import { useState, useEffect } from 'react';
import { ThemeSelector } from './ThemeSelector';
import { StoryDisplay } from './StoryDisplay';
import { ProgressTracker } from './ProgressTracker';
import { themes, getStoryByTheme } from '@/data/stories';
import { GameProgress, StoryNode } from '@/types/story';

export const StoryGame = () => {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [currentNodeId, setCurrentNodeId] = useState('start');
  const [progress, setProgress] = useState<GameProgress>({
    steps: 0,
    choicesMade: [],
    endingsReached: [],
    secretsFound: []
  });

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
    setProgress({
      steps: 0,
      choicesMade: [],
      endingsReached: [],
      secretsFound: []
    });
  };

  const handleChoice = (nextNode: string) => {
    if (!currentNode) return;
    
    setProgress(prev => ({
      ...prev,
      steps: prev.steps + 1,
      choicesMade: [...prev.choicesMade, currentNode.id]
    }));
    
    setCurrentNodeId(nextNode);
    
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

  const handleRestart = () => {
    setSelectedTheme(null);
    setCurrentNodeId('start');
  };

  if (!selectedTheme) {
    return <ThemeSelector themes={themes} onSelectTheme={handleThemeSelect} />;
  }

  if (!currentNode) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen py-8">
      <ProgressTracker progress={progress} />
      <StoryDisplay
        node={currentNode}
        onChoice={handleChoice}
        onRestart={handleRestart}
      />
    </div>
  );
};
