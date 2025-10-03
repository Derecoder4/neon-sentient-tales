export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const sentientQuizQuestions: QuizQuestion[] = [
  {
    question: "What is Sentient's primary mission?",
    options: ["Create proprietary AI", "Build open AGI for everyone", "Sell AI products", "Replace human workers"],
    correctAnswer: 1,
    explanation: "Sentient aims to build open AGI that is accessible to everyone, not controlled by a few corporations."
  },
  {
    question: "What does AGI stand for?",
    options: ["Artificial General Intelligence", "Advanced Gaming Interface", "Automated Grid Intelligence", "Artificial Grid Intelligence"],
    correctAnswer: 0,
    explanation: "AGI stands for Artificial General Intelligence - AI that can understand and learn any intellectual task that humans can."
  },
  {
    question: "What is the GRID in Sentient's ecosystem?",
    options: ["A power system", "A decentralized AI network", "A gaming platform", "A social media app"],
    correctAnswer: 1,
    explanation: "The GRID is Sentient's decentralized network that powers open-source AGI development."
  },
  {
    question: "What blockchain is Sentient built on?",
    options: ["Ethereum", "Bitcoin", "Polygon", "Solana"],
    correctAnswer: 2,
    explanation: "Sentient is built on Polygon, leveraging its scalability and efficiency."
  },
  {
    question: "What is Dobby in the Sentient ecosystem?",
    options: ["A house elf", "An AI assistant", "A token", "A wallet"],
    correctAnswer: 1,
    explanation: "Dobby is Sentient's AI assistant that helps users interact with the ecosystem."
  },
  {
    question: "What makes Sentient different from closed-source AI?",
    options: ["It's faster", "It's open and transparent", "It's cheaper", "It's simpler"],
    correctAnswer: 1,
    explanation: "Sentient is built on open-source principles, making it transparent and accessible unlike closed proprietary systems."
  },
  {
    question: "What is Open Deep Search?",
    options: ["A search engine", "An open-source AI search tool", "A database", "A web browser"],
    correctAnswer: 1,
    explanation: "Open Deep Search is Sentient's open-source alternative to traditional search, powered by AI."
  },
  {
    question: "Why is decentralization important for AGI?",
    options: ["It's trendy", "Prevents monopoly control", "It's faster", "It's cheaper"],
    correctAnswer: 1,
    explanation: "Decentralization prevents any single entity from controlling AGI, ensuring it serves humanity broadly."
  },
  {
    question: "What problem does Sentient solve?",
    options: ["Slow internet", "Centralized AI control", "Expensive computers", "Social media addiction"],
    correctAnswer: 1,
    explanation: "Sentient addresses the concentration of AI power in the hands of a few large corporations."
  },
  {
    question: "How does Sentient reward contributors?",
    options: ["Cash payments", "Crypto tokens", "Gift cards", "Recognition only"],
    correctAnswer: 1,
    explanation: "Contributors to the Sentient ecosystem are rewarded with tokens for their participation."
  },
  {
    question: "What is the significance of 'open-source' in Sentient?",
    options: ["Free to use", "Transparent and modifiable", "No security", "Simple design"],
    correctAnswer: 1,
    explanation: "Open-source means the code is transparent, can be audited, and modified by the community."
  },
  {
    question: "Can anyone contribute to Sentient?",
    options: ["No, only experts", "Yes, anyone can contribute", "Only developers", "Only investors"],
    correctAnswer: 1,
    explanation: "Sentient is designed to be accessible and welcomes contributions from anyone."
  },
  {
    question: "What is the role of the community in Sentient?",
    options: ["Passive users", "Active builders and governors", "Beta testers only", "Marketing team"],
    correctAnswer: 1,
    explanation: "The community actively builds, governs, and shapes the future of Sentient."
  },
  {
    question: "What does 'open AGI' mean?",
    options: ["Free AI tools", "Transparent, accessible AI for all", "Unfinished AI", "Simple AI"],
    correctAnswer: 1,
    explanation: "Open AGI means artificial general intelligence that is transparent, accessible, and not controlled by a single entity."
  },
  {
    question: "Why should AGI be open-source?",
    options: ["To save money", "To ensure safety and transparency", "It's a trend", "It's easier to build"],
    correctAnswer: 1,
    explanation: "Open-source AGI ensures transparency, safety through community oversight, and prevents monopolistic control."
  },
  {
    question: "What is tokenomics in Sentient?",
    options: ["Game theory", "Economic model of token distribution", "Token design", "Trading strategy"],
    correctAnswer: 1,
    explanation: "Tokenomics refers to how Sentient's tokens are distributed, used, and create value in the ecosystem."
  },
  {
    question: "How does Sentient use blockchain?",
    options: ["For payments only", "For decentralization and transparency", "For speed", "For marketing"],
    correctAnswer: 1,
    explanation: "Blockchain provides the decentralized, transparent infrastructure that powers Sentient's open AGI vision."
  },
  {
    question: "What is the risk of closed-source AGI?",
    options: ["It's expensive", "Power concentration and lack of transparency", "It's slow", "It's complicated"],
    correctAnswer: 1,
    explanation: "Closed-source AGI concentrates power in few hands and lacks transparency, creating potential for misuse."
  },
  {
    question: "What can you do with Sentient's platform?",
    options: ["Only view content", "Build, contribute, and use AI tools", "Trade only", "Chat only"],
    correctAnswer: 1,
    explanation: "Sentient enables users to build AI applications, contribute to development, and use various AI tools."
  },
  {
    question: "Is Sentient focused on profit or community?",
    options: ["Profit only", "Community and open access", "Neither", "Investors only"],
    correctAnswer: 1,
    explanation: "Sentient prioritizes community governance and open access over pure profit motives."
  },
  {
    question: "What makes the GRID powerful?",
    options: ["Speed", "Decentralized collective intelligence", "Size", "Cost"],
    correctAnswer: 1,
    explanation: "The GRID's power comes from combining decentralized computing resources and collective intelligence."
  },
  {
    question: "Can Sentient be shut down by one entity?",
    options: ["Yes", "No, it's decentralized", "Maybe", "Only by government"],
    correctAnswer: 1,
    explanation: "Because Sentient is decentralized, no single entity can shut it down."
  },
  {
    question: "What is the vision for Sentient's future?",
    options: ["Compete with Google", "Democratic AGI for humanity", "Profit maximization", "Replace jobs"],
    correctAnswer: 1,
    explanation: "Sentient envisions a future where AGI is democratically governed and benefits all of humanity."
  },
  {
    question: "How does Sentient approach AI safety?",
    options: ["Ignores it", "Through transparency and community oversight", "Government regulation", "Self-regulation"],
    correctAnswer: 1,
    explanation: "Sentient ensures AI safety through open-source transparency and community oversight."
  },
  {
    question: "What role do tokens play in Sentient?",
    options: ["Speculation only", "Governance, rewards, and utility", "Payment only", "No role"],
    correctAnswer: 1,
    explanation: "Tokens serve multiple purposes including governance, rewarding contributors, and accessing services."
  },
  {
    question: "Who benefits from Sentient?",
    options: ["Only developers", "Everyone globally", "Only investors", "Only tech companies"],
    correctAnswer: 1,
    explanation: "Sentient is designed to benefit everyone globally, not just specific groups."
  },
  {
    question: "What is the importance of transparency in AGI?",
    options: ["Legal requirement", "Builds trust and enables safety checks", "Marketing", "No importance"],
    correctAnswer: 1,
    explanation: "Transparency allows the community to audit, verify safety, and build trust in AGI systems."
  },
  {
    question: "Can you build on top of Sentient?",
    options: ["No", "Yes, it's open for builders", "Only with permission", "Only partners"],
    correctAnswer: 1,
    explanation: "Sentient is open for anyone to build applications and tools on top of the platform."
  },
  {
    question: "What is the relationship between Sentient and Web3?",
    options: ["No relationship", "Sentient leverages Web3 for decentralization", "Competing", "Separate ecosystems"],
    correctAnswer: 1,
    explanation: "Sentient uses Web3 technologies to enable decentralization and community ownership."
  },
  {
    question: "How does Sentient fund development?",
    options: ["Venture capital only", "Community tokens and contributions", "Government grants", "Ads"],
    correctAnswer: 1,
    explanation: "Development is funded through the token ecosystem and community contributions."
  },
  {
    question: "What makes Sentient's approach unique?",
    options: ["Fastest AI", "Open-source + decentralized + community-owned", "Cheapest", "Simplest"],
    correctAnswer: 1,
    explanation: "The combination of open-source, decentralization, and community ownership makes Sentient unique."
  },
  {
    question: "Why is community governance important?",
    options: ["It's trendy", "Ensures democratic decision-making", "Saves money", "Looks good"],
    correctAnswer: 1,
    explanation: "Community governance ensures that AGI development serves the collective interest, not just a few."
  },
  {
    question: "What can prevent AGI misuse in Sentient?",
    options: ["Passwords", "Transparency and community oversight", "Lawyers", "Nothing"],
    correctAnswer: 1,
    explanation: "Open-source transparency and active community oversight help prevent misuse."
  },
  {
    question: "Is Sentient a finished product?",
    options: ["Yes", "No, it's evolving with the community", "Almost", "Abandoned"],
    correctAnswer: 1,
    explanation: "Sentient is an evolving platform that grows and improves with community contributions."
  },
  {
    question: "What is the GRID's main function?",
    options: ["Store data", "Enable decentralized AI computation", "Social networking", "Gaming"],
    correctAnswer: 1,
    explanation: "The GRID provides decentralized infrastructure for AI computation and intelligence."
  },
  {
    question: "How does Sentient differ from ChatGPT?",
    options: ["Better UI", "Open-source and decentralized", "Faster responses", "More languages"],
    correctAnswer: 1,
    explanation: "Unlike ChatGPT's closed-source model, Sentient is open-source and decentralized."
  },
  {
    question: "Can you earn by contributing to Sentient?",
    options: ["No", "Yes, through token rewards", "Only money", "Only reputation"],
    correctAnswer: 1,
    explanation: "Contributors are rewarded with tokens for their valuable contributions to the ecosystem."
  },
  {
    question: "What is the purpose of decentralization?",
    options: ["Complexity", "Prevent single point of control/failure", "Speed", "Cost reduction"],
    correctAnswer: 1,
    explanation: "Decentralization prevents single entities from controlling or shutting down the system."
  },
  {
    question: "Who owns Sentient?",
    options: ["A company", "The community", "Founders", "Investors"],
    correctAnswer: 1,
    explanation: "Sentient is owned and governed by its community, not a single company or individual."
  },
  {
    question: "What skills do you need to contribute?",
    options: ["PhD in AI", "Varied skills - coding, testing, docs, etc.", "Only coding", "Only research"],
    correctAnswer: 1,
    explanation: "Sentient welcomes diverse contributions including coding, documentation, testing, and community building."
  },
  {
    question: "Is Sentient free to use?",
    options: ["No", "Yes, it's open and accessible", "Subscription only", "Pay per use"],
    correctAnswer: 1,
    explanation: "Sentient is designed to be open and accessible to everyone."
  },
  {
    question: "What is the role of AI in Sentient?",
    options: ["Minor feature", "Core technology powering everything", "Marketing tool", "Optional"],
    correctAnswer: 1,
    explanation: "AI is the core technology that powers Sentient's entire ecosystem and vision."
  },
  {
    question: "How does Sentient ensure quality?",
    options: ["Central review", "Community validation and open-source review", "AI checks", "No checks"],
    correctAnswer: 1,
    explanation: "Quality is ensured through community validation and the ability for anyone to review the open code."
  },
  {
    question: "What is Sentient's stance on AI ethics?",
    options: ["Ignore ethics", "Central to their mission through transparency", "Leave to others", "Unclear"],
    correctAnswer: 1,
    explanation: "Ethical AI development through transparency and community oversight is central to Sentient's mission."
  },
  {
    question: "Can enterprises use Sentient?",
    options: ["No", "Yes, it's open for all", "Only startups", "Only individuals"],
    correctAnswer: 1,
    explanation: "Sentient is designed to be used by anyone, including enterprises, startups, and individuals."
  },
  {
    question: "What happens to improvements you make?",
    options: ["Company owns them", "Shared with the community", "You keep them private", "They're deleted"],
    correctAnswer: 1,
    explanation: "Improvements are shared openly with the community, benefiting everyone in the ecosystem."
  },
  {
    question: "Why is Sentient important for the future?",
    options: ["It's not", "Ensures AGI benefits humanity broadly", "Makes money", "Beats competitors"],
    correctAnswer: 1,
    explanation: "Sentient is important because it works to ensure AGI serves all of humanity, not just a powerful few."
  },
  {
    question: "What is the learning curve for Sentient?",
    options: ["Very steep", "Designed to be accessible to all skill levels", "Only experts", "Impossible"],
    correctAnswer: 1,
    explanation: "Sentient aims to be accessible with resources for all skill levels, from beginners to experts."
  },
  {
    question: "How does Sentient handle data privacy?",
    options: ["Sells data", "Decentralized approach respects privacy", "Ignores privacy", "Government controlled"],
    correctAnswer: 1,
    explanation: "The decentralized nature of Sentient helps protect user privacy better than centralized systems."
  },
  {
    question: "What is the ultimate goal of Sentient?",
    options: ["IPO", "Create beneficial AGI for all humanity", "Beat competitors", "Maximum profit"],
    correctAnswer: 1,
    explanation: "The ultimate goal is to create AGI that is beneficial, accessible, and serves all of humanity."
  }
];
