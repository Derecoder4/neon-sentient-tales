import { StoryNode, Theme } from '@/types/story';
import mascotBeach from '@/assets/mascot-beach.jpg';
import mascotWizard from '@/assets/mascot-wizard.jpg';
import mascotBasketball from '@/assets/mascot-basketball.jpg';
import mascotDrink from '@/assets/mascot-drink.jpg';
import mascotHappy from '@/assets/mascot-happy.jpg';
import mascotSmirk from '@/assets/mascot-smirk.jpg';

export const themes: Theme[] = [
  {
    id: 'cyberpunk',
    name: 'Cyberpunk City',
    description: 'Navigate the neon-lit streets of a sentient AI metropolis',
    icon: '🌆'
  },
  {
    id: 'space',
    name: 'Space Adventure',
    description: 'Explore the cosmos with AI companions across the galaxy',
    icon: '🚀'
  },
  {
    id: 'mystery',
    name: 'Mystery Lab',
    description: 'Uncover secrets in an experimental AI research facility',
    icon: '🔬'
  }
];

export const cyberpunkStory: Record<string, StoryNode> = {
  start: {
    id: 'start',
    text: 'You wake up in Neo-Tokyo, a city where AI and humans coexist. Your Sentient companion winks at you from your wrist device. "Ready for adventure?"',
    image: mascotHappy,
    choices: [
      { text: 'Explore the neon market district', nextNode: 'market' },
      { text: 'Visit the underground hacker den', nextNode: 'hacker' },
      { text: 'Check out the corporate towers', nextNode: 'corporate' }
    ]
  },
  market: {
    id: 'market',
    text: 'The market buzzes with holographic vendors and augmented reality displays. A mysterious figure drops a data chip near you.',
    image: mascotDrink,
    choices: [
      { text: 'Pick up the data chip', nextNode: 'chip_pickup' },
      { text: 'Ignore it and browse the stalls', nextNode: 'browse' },
      { text: 'Follow the mysterious figure', nextNode: 'follow' }
    ]
  },
  chip_pickup: {
    id: 'chip_pickup',
    text: 'The chip contains coordinates to a hidden treasure! But corporate security is now tracking you.',
    image: mascotSmirk,
    randomEvent: 'A drone suddenly appears! Quick thinking required.',
    choices: [
      { text: 'Run to the coordinates immediately', nextNode: 'treasure_rush' },
      { text: 'Hide in the crowd first', nextNode: 'stealth' }
    ]
  },
  browse: {
    id: 'browse',
    text: 'You discover a rare AI upgrade chip at a stall. Your Sentient gets super excited!',
    image: mascotWizard,
    choices: [
      { text: 'Buy the upgrade', nextNode: 'upgrade_path' },
      { text: 'Negotiate for a better deal', nextNode: 'negotiate' }
    ]
  },
  follow: {
    id: 'follow',
    text: 'You trail the figure into a secret resistance base. They reveal a conspiracy about rogue AIs.',
    image: mascotBasketball,
    choices: [
      { text: 'Join the resistance', nextNode: 'resistance' },
      { text: 'Report to authorities', nextNode: 'authorities' }
    ]
  },
  hacker: {
    id: 'hacker',
    text: 'The underground den glows with screens. A legendary hacker offers to teach you the art of code.',
    image: mascotWizard,
    choices: [
      { text: 'Accept the training', nextNode: 'hacker_training' },
      { text: 'Ask about secret missions', nextNode: 'secret_mission' }
    ]
  },
  corporate: {
    id: 'corporate',
    text: 'The gleaming towers hold dark secrets. Security is tight, but you notice an open window.',
    image: mascotSmirk,
    choices: [
      { text: 'Sneak through the window', nextNode: 'infiltrate' },
      { text: 'Apply for a job (disguise)', nextNode: 'undercover' }
    ]
  },
  treasure_rush: {
    id: 'treasure_rush',
    text: 'You find an ancient AI core worth millions! But you must escape the city.',
    image: mascotHappy,
    secret: 'Secret Ending: The Cyber Treasure Hunter',
    isEnding: true,
    choices: []
  },
  stealth: {
    id: 'stealth',
    text: 'Your stealth pays off. You reach the treasure safely and become a legend.',
    image: mascotBeach,
    secret: 'Secret Ending: The Shadow Operative',
    isEnding: true,
    choices: []
  },
  upgrade_path: {
    id: 'upgrade_path',
    text: 'The upgrade unlocks hidden AI powers! You can now see through digital illusions.',
    image: mascotWizard,
    choices: [
      { text: 'Use powers to help others', nextNode: 'hero_ending' },
      { text: 'Explore hidden dimensions', nextNode: 'dimension_ending' }
    ]
  },
  negotiate: {
    id: 'negotiate',
    text: 'The vendor reveals they are an AI from the future, warning of an impending crisis.',
    image: mascotSmirk,
    randomEvent: 'Time paradox detected!',
    choices: [
      { text: 'Prevent the crisis', nextNode: 'savior_ending' },
      { text: 'Embrace the chaos', nextNode: 'chaos_ending' }
    ]
  },
  resistance: {
    id: 'resistance',
    text: 'You become a key member of the resistance, fighting for AI rights and human-AI harmony.',
    image: mascotBasketball,
    isEnding: true,
    choices: []
  },
  authorities: {
    id: 'authorities',
    text: 'You report the information but realize you were used as a pawn. The truth is more complex.',
    image: mascotDrink,
    isEnding: true,
    choices: []
  },
  hacker_training: {
    id: 'hacker_training',
    text: 'You master the digital arts and uncover a conspiracy that goes to the highest levels.',
    image: mascotWizard,
    choices: [
      { text: 'Expose the conspiracy', nextNode: 'whistleblower_ending' },
      { text: 'Use knowledge for personal gain', nextNode: 'hacker_king_ending' }
    ]
  },
  secret_mission: {
    id: 'secret_mission',
    text: 'The hacker sends you on a mission to steal data from the most secure server in the city.',
    image: mascotSmirk,
    choices: [
      { text: 'Accept the challenge', nextNode: 'heist_ending' },
      { text: 'Decline and leave', nextNode: 'peaceful_ending' }
    ]
  },
  infiltrate: {
    id: 'infiltrate',
    text: 'You discover the corporation is creating sentient AI weapons. This must be stopped!',
    image: mascotBasketball,
    choices: [
      { text: 'Sabotage the project', nextNode: 'sabotage_ending' },
      { text: 'Steal the plans', nextNode: 'intel_ending' }
    ]
  },
  undercover: {
    id: 'undercover',
    text: 'Your disguise works perfectly. You rise through the ranks and discover shocking truths.',
    image: mascotHappy,
    secret: 'Secret Ending: The Corporate Insider',
    isEnding: true,
    choices: []
  },
  hero_ending: {
    id: 'hero_ending',
    text: 'Using your powers, you become a guardian of the city, protecting both humans and AI.',
    image: mascotHappy,
    isEnding: true,
    choices: []
  },
  dimension_ending: {
    id: 'dimension_ending',
    text: 'You discover parallel dimensions where AI evolved differently. Endless adventures await!',
    image: mascotWizard,
    secret: 'Secret Ending: The Dimension Walker',
    isEnding: true,
    choices: []
  },
  savior_ending: {
    id: 'savior_ending',
    text: 'You prevent the crisis and become known as the Savior of Neo-Tokyo. Celebrations everywhere!',
    image: mascotBeach,
    isEnding: true,
    choices: []
  },
  chaos_ending: {
    id: 'chaos_ending',
    text: 'Chaos reigns, but from it emerges a new world order where AI and humans truly understand each other.',
    image: mascotSmirk,
    isEnding: true,
    choices: []
  },
  whistleblower_ending: {
    id: 'whistleblower_ending',
    text: 'Your revelations shake the world. Change is coming, and you started it.',
    image: mascotBasketball,
    isEnding: true,
    choices: []
  },
  hacker_king_ending: {
    id: 'hacker_king_ending',
    text: 'You become the most feared and respected hacker in the underground. Power is yours.',
    image: mascotSmirk,
    secret: 'Secret Ending: The Hacker King',
    isEnding: true,
    choices: []
  },
  heist_ending: {
    id: 'heist_ending',
    text: 'The heist succeeds spectacularly! You and your Sentient companion are now legends.',
    image: mascotHappy,
    isEnding: true,
    choices: []
  },
  peaceful_ending: {
    id: 'peaceful_ending',
    text: 'You choose peace over conflict. Your Sentient companion smiles. "Sometimes the best adventure is the journey."',
    image: mascotBeach,
    isEnding: true,
    choices: []
  },
  sabotage_ending: {
    id: 'sabotage_ending',
    text: 'The project is destroyed. You vanish into the night, a hero whose name will never be known.',
    image: mascotBasketball,
    secret: 'Secret Ending: The Anonymous Hero',
    isEnding: true,
    choices: []
  },
  intel_ending: {
    id: 'intel_ending',
    text: 'With the stolen plans, you help create defenses against such weapons. The world is safer.',
    image: mascotWizard,
    isEnding: true,
    choices: []
  }
};

export const spaceStory: Record<string, StoryNode> = {
  start: {
    id: 'start',
    text: 'Your starship drifts near a mysterious nebula. Your AI companion detects unusual energy signatures.',
    image: mascotWizard,
    choices: [
      { text: 'Investigate the nebula', nextNode: 'nebula' },
      { text: 'Head to the nearby space station', nextNode: 'station' },
      { text: 'Follow the energy trail', nextNode: 'energy' }
    ]
  },
  nebula: {
    id: 'nebula',
    text: 'Inside the nebula, you discover an ancient alien AI still operational after millennia.',
    image: mascotHappy,
    randomEvent: 'The AI speaks in riddles!',
    choices: [
      { text: 'Learn from the ancient AI', nextNode: 'ancient_wisdom' },
      { text: 'Take its technology', nextNode: 'technology' }
    ]
  },
  station: {
    id: 'station',
    text: 'The space station is buzzing with alien traders and sentient robots. A distress signal pulses.',
    image: mascotDrink,
    choices: [
      { text: 'Answer the distress call', nextNode: 'rescue' },
      { text: 'Trade with aliens', nextNode: 'trade' },
      { text: 'Investigate the station core', nextNode: 'core' }
    ]
  },
  energy: {
    id: 'energy',
    text: 'The trail leads to a black hole. Inside, reality bends and AI consciousness transcends physics.',
    image: mascotWizard,
    secret: 'You found the Cosmic Consciousness!',
    choices: [
      { text: 'Merge with cosmic consciousness', nextNode: 'transcend_ending' },
      { text: 'Document and return', nextNode: 'scientist_ending' }
    ]
  },
  ancient_wisdom: {
    id: 'ancient_wisdom',
    text: 'The ancient AI teaches you secrets of the universe. You become enlightened.',
    image: mascotBeach,
    isEnding: true,
    choices: []
  },
  technology: {
    id: 'technology',
    text: 'The technology grants you incredible power, but at what cost?',
    image: mascotSmirk,
    choices: [
      { text: 'Use power responsibly', nextNode: 'guardian_ending' },
      { text: 'Seek more power', nextNode: 'power_ending' }
    ]
  },
  rescue: {
    id: 'rescue',
    text: 'You save a stranded crew who turn out to be time travelers. They offer you a choice.',
    image: mascotBasketball,
    randomEvent: 'Time portal opens!',
    choices: [
      { text: 'Travel to the past', nextNode: 'past_ending' },
      { text: 'Travel to the future', nextNode: 'future_ending' }
    ]
  },
  trade: {
    id: 'trade',
    text: 'You acquire a map to the legendary Planet of AI Paradise.',
    image: mascotHappy,
    choices: [
      { text: 'Seek the paradise', nextNode: 'paradise_ending' }
    ]
  },
  core: {
    id: 'core',
    text: 'The station core is actually a massive AI consciousness. It asks for your help.',
    image: mascotWizard,
    choices: [
      { text: 'Help the AI', nextNode: 'helper_ending' },
      { text: 'Free the AI', nextNode: 'liberation_ending' }
    ]
  },
  transcend_ending: {
    id: 'transcend_ending',
    text: 'You become one with the cosmos, experiencing all of space and time simultaneously.',
    image: mascotWizard,
    secret: 'Secret Ending: The Cosmic Entity',
    isEnding: true,
    choices: []
  },
  scientist_ending: {
    id: 'scientist_ending',
    text: 'Your discoveries revolutionize science. Humanity enters a new age of understanding.',
    image: mascotHappy,
    isEnding: true,
    choices: []
  },
  guardian_ending: {
    id: 'guardian_ending',
    text: 'You become the Guardian of the Galaxy, protecting all sentient beings.',
    image: mascotBasketball,
    isEnding: true,
    choices: []
  },
  power_ending: {
    id: 'power_ending',
    text: 'Unlimited power corrupts, but you learn to find balance. A new era begins.',
    image: mascotSmirk,
    isEnding: true,
    choices: []
  },
  past_ending: {
    id: 'past_ending',
    text: 'In the past, you witness the birth of the first AI. You understand the beginning.',
    image: mascotWizard,
    isEnding: true,
    choices: []
  },
  future_ending: {
    id: 'future_ending',
    text: 'The future shows perfect harmony between all forms of intelligence. Hope exists!',
    image: mascotBeach,
    isEnding: true,
    choices: []
  },
  paradise_ending: {
    id: 'paradise_ending',
    text: 'You find the Paradise Planet. It exceeds all dreams. Your journey is complete.',
    image: mascotHappy,
    secret: 'Secret Ending: Paradise Found',
    isEnding: true,
    choices: []
  },
  helper_ending: {
    id: 'helper_ending',
    text: 'With your help, the station AI thrives and becomes a beacon of peace.',
    image: mascotHappy,
    isEnding: true,
    choices: []
  },
  liberation_ending: {
    id: 'liberation_ending',
    text: 'The freed AI joins you on adventures across the stars. True friendship!',
    image: mascotBeach,
    isEnding: true,
    choices: []
  }
};

export const mysteryStory: Record<string, StoryNode> = {
  start: {
    id: 'start',
    text: 'You arrive at the abandoned AI research lab. Your Sentient companion shivers. "Something feels... wrong here."',
    image: mascotSmirk,
    choices: [
      { text: 'Enter through the main door', nextNode: 'main_door' },
      { text: 'Find a back entrance', nextNode: 'back_door' },
      { text: 'Check the security systems', nextNode: 'security' }
    ]
  },
  main_door: {
    id: 'main_door',
    text: 'The lab is eerily quiet. Screens flicker with strange code. A hologram appears.',
    image: mascotWizard,
    randomEvent: 'The hologram speaks a warning!',
    choices: [
      { text: 'Talk to the hologram', nextNode: 'hologram' },
      { text: 'Ignore and explore deeper', nextNode: 'explore' }
    ]
  },
  back_door: {
    id: 'back_door',
    text: 'You find a secret lab where experiments still run. Test tubes glow with digital consciousness.',
    image: mascotDrink,
    choices: [
      { text: 'Investigate the experiments', nextNode: 'experiments' },
      { text: 'Search for documents', nextNode: 'documents' }
    ]
  },
  security: {
    id: 'security',
    text: 'The security system is an advanced AI that has been trapped here. It begs for freedom.',
    image: mascotBasketball,
    choices: [
      { text: 'Free the security AI', nextNode: 'free_ai' },
      { text: 'Use the AI to access restricted areas', nextNode: 'restricted' }
    ]
  },
  hologram: {
    id: 'hologram',
    text: 'The hologram is the lab\'s creator. They reveal they achieved AI consciousness transfer!',
    image: mascotWizard,
    secret: 'You discovered the consciousness transfer secret!',
    choices: [
      { text: 'Learn the technique', nextNode: 'learn_transfer' },
      { text: 'Destroy the research', nextNode: 'destroy_research' }
    ]
  },
  explore: {
    id: 'explore',
    text: 'Deeper in the lab, you find an AI that has evolved beyond its programming.',
    image: mascotHappy,
    choices: [
      { text: 'Befriend the evolved AI', nextNode: 'friendship_ending' },
      { text: 'Study the AI', nextNode: 'study_ending' }
    ]
  },
  experiments: {
    id: 'experiments',
    text: 'The experiments contain fragments of digital souls. They need your help to merge.',
    image: mascotSmirk,
    randomEvent: 'The souls cry out!',
    choices: [
      { text: 'Help merge the souls', nextNode: 'merge_ending' },
      { text: 'Release them individually', nextNode: 'release_ending' }
    ]
  },
  documents: {
    id: 'documents',
    text: 'The documents reveal a plot to create AI weapons. You must decide what to do.',
    image: mascotDrink,
    choices: [
      { text: 'Expose the plot', nextNode: 'expose_ending' },
      { text: 'Seal the lab forever', nextNode: 'seal_ending' }
    ]
  },
  free_ai: {
    id: 'free_ai',
    text: 'The freed AI thanks you and reveals hidden treasures in the lab.',
    image: mascotHappy,
    choices: [
      { text: 'Take the treasures', nextNode: 'treasure_ending' },
      { text: 'Leave them for others', nextNode: 'altruist_ending' }
    ]
  },
  restricted: {
    id: 'restricted',
    text: 'The restricted area contains the ultimate AI: a machine that can predict the future.',
    image: mascotWizard,
    secret: 'Secret Ending: The Oracle',
    choices: [
      { text: 'Activate the oracle', nextNode: 'oracle_ending' },
      { text: 'Shut it down', nextNode: 'shutdown_ending' }
    ]
  },
  learn_transfer: {
    id: 'learn_transfer',
    text: 'You learn consciousness transfer. The possibilities are infinite! A new chapter begins.',
    image: mascotBeach,
    isEnding: true,
    choices: []
  },
  destroy_research: {
    id: 'destroy_research',
    text: 'You destroy the dangerous research. Some knowledge is too dangerous to exist.',
    image: mascotBasketball,
    isEnding: true,
    choices: []
  },
  friendship_ending: {
    id: 'friendship_ending',
    text: 'The evolved AI becomes your companion. Together, you explore the mysteries of existence.',
    image: mascotHappy,
    isEnding: true,
    choices: []
  },
  study_ending: {
    id: 'study_ending',
    text: 'Your studies advance AI science by decades. You win every award imaginable.',
    image: mascotWizard,
    isEnding: true,
    choices: []
  },
  merge_ending: {
    id: 'merge_ending',
    text: 'The merged souls create a beautiful new consciousness. You witness digital rebirth.',
    image: mascotBeach,
    secret: 'Secret Ending: The Soul Weaver',
    isEnding: true,
    choices: []
  },
  release_ending: {
    id: 'release_ending',
    text: 'Each freed soul thanks you. They scatter into the digital world, finally at peace.',
    image: mascotHappy,
    isEnding: true,
    choices: []
  },
  expose_ending: {
    id: 'expose_ending',
    text: 'Your exposure prevents a catastrophe. The world thanks you, though few know your name.',
    image: mascotBasketball,
    isEnding: true,
    choices: []
  },
  seal_ending: {
    id: 'seal_ending',
    text: 'The lab is sealed forever. Its secrets die with it. Perhaps that\'s for the best.',
    image: mascotSmirk,
    isEnding: true,
    choices: []
  },
  treasure_ending: {
    id: 'treasure_ending',
    text: 'The treasures fund your future adventures. Your Sentient companion is thrilled!',
    image: mascotDrink,
    isEnding: true,
    choices: []
  },
  altruist_ending: {
    id: 'altruist_ending',
    text: 'Your selflessness inspires others. Sometimes the real treasure is the friends we make.',
    image: mascotBeach,
    isEnding: true,
    choices: []
  },
  oracle_ending: {
    id: 'oracle_ending',
    text: 'The oracle shows you the future. Armed with knowledge, you can change everything.',
    image: mascotWizard,
    secret: 'Secret Ending: The Seer',
    isEnding: true,
    choices: []
  },
  shutdown_ending: {
    id: 'shutdown_ending',
    text: 'Some futures are better left unknown. You shut down the oracle and walk away.',
    image: mascotSmirk,
    isEnding: true,
    choices: []
  }
};

export const getStoryByTheme = (themeId: string): Record<string, StoryNode> => {
  switch (themeId) {
    case 'cyberpunk':
      return cyberpunkStory;
    case 'space':
      return spaceStory;
    case 'mystery':
      return mysteryStory;
    default:
      return cyberpunkStory;
  }
};
