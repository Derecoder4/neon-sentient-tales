import { StoryGame } from '@/components/StoryGame';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StoryGame />
      <footer className="fixed bottom-0 left-0 right-0 z-50 border-t-2 border-primary/50 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 text-center">
          <p className="text-lg font-semibold neon-text">
            Built with ❤️ by Josh
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
