import { Button } from '@/components/ui/button';
import { Save, BookmarkPlus, Home, Brain } from 'lucide-react';
import logo from '@/assets/sentient-logo.jpg';

interface NavbarProps {
  onSave?: () => void;
  onBookmark?: () => void;
  onHome?: () => void;
  onQuiz?: () => void;
  showHomeButton?: boolean;
}

export const Navbar = ({ onSave, onBookmark, onHome, onQuiz, showHomeButton }: NavbarProps) => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Sentient Logo" className="w-10 h-10 rounded-lg shadow-neon" />
          <h1 className="text-xl md:text-2xl font-bold neon-text">
            Sentient Story Adventure
          </h1>
        </div>
        
        <div className="flex items-center gap-2">
          {showHomeButton && onHome && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onHome}
              className="hover:text-primary"
              title="Back to homepage"
            >
              <Home className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">Home</span>
            </Button>
          )}
          
          {onQuiz && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onQuiz}
              className="hover:text-primary"
              title="Test your knowledge"
            >
              <Brain className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">Quiz</span>
            </Button>
          )}
          
          {onBookmark && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onBookmark}
              className="hover:text-primary"
              title="Bookmark this moment"
            >
              <BookmarkPlus className="h-5 w-5" />
            </Button>
          )}
          
          {onSave && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onSave}
              className="hover:text-primary"
              title="Save progress"
            >
              <Save className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};
