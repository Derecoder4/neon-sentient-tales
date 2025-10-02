import { StoryNode } from '@/types/story';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useEffect, useState } from 'react';

interface StoryDisplayProps {
  node: StoryNode;
  onChoice: (nextNode: string) => void;
  onRestart: () => void;
}

export const StoryDisplay = ({ node, onChoice, onRestart }: StoryDisplayProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, [node.id]);

  return (
    <div className={`max-w-4xl mx-auto p-6 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <Card className="border-2 border-primary/50 bg-card/80 backdrop-blur-sm p-8 story-card">
        {node.image && (
          <div className="mb-6 flex justify-center">
            <img
              src={node.image}
              alt="Story scene"
              className="w-48 h-48 object-cover rounded-lg border-2 border-accent shadow-neon"
            />
          </div>
        )}
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl leading-relaxed text-foreground">{node.text}</p>
        </div>

        {node.randomEvent && (
          <div className="mb-6 p-4 bg-accent/20 border-2 border-accent rounded-lg animate-pulse-subtle">
            <p className="text-accent font-bold">⚡ {node.randomEvent}</p>
          </div>
        )}

        {node.secret && (
          <div className="mb-6 p-4 bg-secondary/20 border-2 border-secondary rounded-lg glow-border">
            <p className="text-secondary font-bold">🌟 {node.secret}</p>
          </div>
        )}

        {node.isEnding ? (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h2 className="text-4xl font-bold neon-text mb-2">Story Complete!</h2>
              <p className="text-muted-foreground">You've reached an ending. What will you do next?</p>
            </div>
            <div className="flex gap-4 justify-center">
              <Button
                onClick={onRestart}
                className="neon-button px-8 py-6 text-lg"
              >
                New Adventure
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {node.choices.map((choice, index) => (
              !choice.hidden && (
                <Button
                  key={index}
                  onClick={() => onChoice(choice.nextNode)}
                  variant="outline"
                  className="w-full choice-button text-lg py-6 border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  {choice.text}
                </Button>
              )
            ))}
          </div>
        )}
      </Card>
    </div>
  );
};
