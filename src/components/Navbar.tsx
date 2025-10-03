import { Button } from '@/components/ui/button';
import { Save, BookmarkPlus, Volume2, VolumeX } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  onSave?: () => void;
  onBookmark?: () => void;
}

export const Navbar = ({ onSave, onBookmark }: NavbarProps) => {
  const [soundEnabled, setSoundEnabled] = useState(true);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl md:text-3xl font-bold neon-text">
            Sentient Story Adventure
          </h1>
        </div>
        
        <div className="flex items-center gap-2">
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
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="hover:text-primary"
            title={soundEnabled ? "Mute sounds" : "Enable sounds"}
          >
            {soundEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </nav>
  );
};
