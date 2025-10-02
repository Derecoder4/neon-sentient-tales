export interface Choice {
  text: string;
  nextNode: string;
  hidden?: boolean;
}

export interface StoryNode {
  id: string;
  text: string;
  image?: string;
  choices: Choice[];
  isEnding?: boolean;
  randomEvent?: string;
  secret?: string;
}

export interface Theme {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface GameProgress {
  steps: number;
  choicesMade: string[];
  endingsReached: string[];
  secretsFound: string[];
}
