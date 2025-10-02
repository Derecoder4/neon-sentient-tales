import { Theme } from '@/types/story';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ThemeSelectorProps {
  themes: Theme[];
  onSelectTheme: (themeId: string) => void;
}

export const ThemeSelector = ({ themes, onSelectTheme }: ThemeSelectorProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 animate-fade-in">
      <h1 className="text-6xl md:text-7xl font-bold mb-4 neon-text text-center">
        Sentient Story Adventure
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-center max-w-2xl">
        Choose your adventure and discover unique storylines with your AI companion
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {themes.map((theme) => (
          <Card
            key={theme.id}
            className="group relative overflow-hidden border-2 border-primary/50 bg-card/50 backdrop-blur-sm hover-glow transition-all duration-300 hover:scale-105 cursor-pointer"
            onClick={() => onSelectTheme(theme.id)}
          >
            <div className="p-8 text-center">
              <div className="text-6xl mb-4 animate-float">{theme.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">{theme.name}</h3>
              <p className="text-muted-foreground mb-6">{theme.description}</p>
              <Button variant="default" className="neon-button w-full">
                Begin Adventure
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
