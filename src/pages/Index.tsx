import { StoryGame } from '@/components/StoryGame';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StoryGame />
      <footer className="fixed bottom-4 left-0 right-0 text-center">
        <p className="text-muted-foreground text-sm">Built by Josh</p>
      </footer>
    </div>
  );
};

export default Index;
