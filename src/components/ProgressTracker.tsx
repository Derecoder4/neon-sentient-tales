import { GameProgress } from '@/types/story';
import { Card } from '@/components/ui/card';

interface ProgressTrackerProps {
  progress: GameProgress;
}

export const ProgressTracker = ({ progress }: ProgressTrackerProps) => {
  return (
    <Card className="fixed top-4 right-4 p-4 bg-card/90 backdrop-blur-sm border-2 border-primary/50 min-w-[200px] z-50">
      <h3 className="font-bold text-primary mb-2">Progress</h3>
      <div className="space-y-1 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Steps:</span>
          <span className="text-foreground font-bold">{progress.steps}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Choices:</span>
          <span className="text-foreground font-bold">{progress.choicesMade.length}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Endings:</span>
          <span className="text-foreground font-bold">{progress.endingsReached.length}</span>
        </div>
        {progress.conceptsLearned && progress.conceptsLearned.length > 0 && (
          <div className="flex justify-between pt-2 border-t border-accent/30">
            <span className="text-accent">Concepts:</span>
            <span className="text-accent font-bold">{progress.conceptsLearned.length}</span>
          </div>
        )}
        {progress.secretsFound.length > 0 && (
          <div className="flex justify-between pt-2 border-t border-primary/30">
            <span className="text-secondary">Secrets:</span>
            <span className="text-secondary font-bold">{progress.secretsFound.length}</span>
          </div>
        )}
      </div>
    </Card>
  );
};
