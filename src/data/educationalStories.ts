import { StoryNode } from '@/types/story';
import mascotBeach from '@/assets/mascot-beach.jpg';
import mascotWizard from '@/assets/mascot-wizard.jpg';
import mascotBasketball from '@/assets/mascot-basketball.jpg';
import mascotDrink from '@/assets/mascot-drink.jpg';
import mascotHappy from '@/assets/mascot-happy.jpg';
import mascotSmirk from '@/assets/mascot-smirk.jpg';

export const sentientEducationalStory: Record<string, StoryNode> = {
  start: {
    id: 'start',
    text: 'Welcome to the year 2025. You wake up in a world where AI is evolving rapidly. Your Sentient companion appears—a cute AI agent that\'s part of something revolutionary: the world\'s first open and community-built AGI.',
    image: mascotHappy,
    educational: {
      title: '🤖 What is AGI?',
      content: 'AGI (Artificial General Intelligence) is AI that can understand, learn, and apply knowledge across any task—just like humans. Unlike narrow AI (which does one thing), AGI can think, reason, and solve problems across all domains.',
      learnMore: 'Sentient is building the world\'s first open-source AGI to ensure it\'s not controlled by any single corporation.'
    },
    choices: [
      { text: 'Learn about the problem Sentient solves', nextNode: 'the_problem' },
      { text: 'Discover the GRID network', nextNode: 'grid_intro' },
      { text: 'Understand open vs closed AI', nextNode: 'open_vs_closed' }
    ]
  },
  the_problem: {
    id: 'the_problem',
    text: 'Your Sentient companion shows you a hologram: a few giant corporations building AGI in secret labs. "They decide what it knows, how it thinks, who it serves," your companion explains. "This is humanity\'s most powerful creation—it cannot be controlled by a few!"',
    image: mascotSmirk,
    educational: {
      title: '⚠️ The Closed-Source AGI Threat',
      content: 'Today, OpenAI, Anthropic, Google, and others build AGI behind closed doors. If AGI is controlled by corporations, humanity\'s future could be locked in the hands of a few gatekeepers. This is the most urgent risk of our time.',
      learnMore: 'Open-source AI ensures transparency, community control, and alignment with human values.'
    },
    choices: [
      { text: 'So how does open-source AI win?', nextNode: 'why_open_wins' },
      { text: 'What about funding? How is this sustainable?', nextNode: 'sent_economy' },
      { text: 'Show me the solution!', nextNode: 'grid_intro' }
    ]
  },
  open_vs_closed: {
    id: 'open_vs_closed',
    text: 'Think of it like this: closed-source is like a black box—you can\'t see inside, modify it, or know what biases it has. Open-source is transparent. Everyone can inspect, improve, and build upon it. History proves open-source wins!',
    image: mascotWizard,
    educational: {
      title: '🌐 Open Source Always Wins',
      content: 'Open-source has beaten closed-source in every major tech layer: Linux (supercomputing), Apache (web servers), Android (mobile - 79% market share), Kubernetes (cloud - 84% of orgs), WordPress (43% of all websites). Why? Innovation scales with participation!',
      learnMore: 'A million developers building > 1,000 engineers in a closed lab. Ideas stack when everyone can contribute.'
    },
    choices: [
      { text: 'How does Sentient make open-source viable?', nextNode: 'grid_intro' },
      { text: 'What about the quality? Is open-source good enough?', nextNode: 'capability_gap' },
      { text: 'Teach me about AI agents', nextNode: 'ai_agents_intro' }
    ]
  },
  grid_intro: {
    id: 'grid_intro',
    text: 'Your companion\'s eyes glow. "Welcome to THE GRID—the world\'s largest network of intelligence!" A massive holographic network appears: 110+ partners, agents talking to each other, models collaborating, data flowing freely.',
    image: mascotBasketball,
    educational: {
      title: '🔲 The GRID: Network of Intelligence',
      content: 'The GRID is where agents, models, data, and compute collaborate to deliver answers. Every query chains multiple intelligences together. 110+ partners including 50+ agents, 50+ data providers, 6 models, and 10+ compute partners work in harmony.',
      learnMore: 'Think of it like the internet—but for AI. No single intelligence is isolated. They all work together!'
    },
    choices: [
      { text: 'How do I access the GRID?', nextNode: 'sentient_chat' },
      { text: 'Who are these partners?', nextNode: 'grid_partners' },
      { text: 'What about money? How does this work economically?', nextNode: 'sent_economy' }
    ]
  },
  sentient_chat: {
    id: 'sentient_chat',
    text: 'Your companion opens a portal. "This is Sentient Chat—your gateway to the GRID!" You see a beautiful interface where every query shows you all the intelligences working together in real-time. AI agents collaborating, data sources being accessed, models reasoning.',
    image: mascotHappy,
    educational: {
      title: '💬 Sentient Chat: Your AI Portal',
      content: 'Sentient Chat is how users access the GRID. It\'s like ChatGPT, but instead of one model, you get an entire network of specialized agents and models working together. You can see which intelligences are being used for your query in real-time!',
      learnMore: 'For builders, it\'s a distribution channel. For users, it\'s a single hub to access all kinds of intelligence.'
    },
    choices: [
      { text: 'What AI agents are in the GRID?', nextNode: 'ai_agents_intro' },
      { text: 'Tell me about Dobby!', nextNode: 'dobby_intro' },
      { text: 'How does search work in the GRID?', nextNode: 'open_deep_search' }
    ]
  },
  ai_agents_intro: {
    id: 'ai_agents_intro',
    text: 'Dozens of specialized AI agents appear around you! There\'s one for crypto insights, one for generating diagrams, one for web search, one for blockchain data... Each agent is an expert in its domain, and they work together!',
    image: mascotWizard,
    educational: {
      title: '🤖 AI Agents: Specialized Intelligence',
      content: 'AI agents are specialized programs that excel at specific tasks. The GRID has 50+ agents: Messari co-pilot (crypto insights), Napkin (diagrams), Exa (web search), Kaito (social data), The Graph (blockchain data), and many more. They collaborate to solve complex problems!',
      learnMore: 'Instead of one AI trying to do everything, specialized agents each do what they\'re best at—then combine their outputs!'
    },
    choices: [
      { text: 'How do agents collaborate?', nextNode: 'agent_orchestration' },
      { text: 'What about the models behind these agents?', nextNode: 'models_layer' },
      { text: 'Show me something cool built by Sentient', nextNode: 'dobby_intro' }
    ]
  },
  agent_orchestration: {
    id: 'agent_orchestration',
    text: 'Your companion demonstrates: "When you ask a complex question, the GRID orchestrates agents automatically!" You watch as agents chain together—one searches the web, another processes data, a third reasons about the results, and they all coordinate seamlessly.',
    image: mascotBasketball,
    educational: {
      title: '🎭 Agent Orchestration: The Magic',
      content: 'The GRID orchestrates workflows automatically. For a crypto question: (1) Kaito fetches social sentiment, (2) The Graph gets blockchain data, (3) Messari analyzes trends, (4) A reasoning model combines everything. Each agent contributes its expertise!',
      learnMore: 'This is called "agentic workflows"—autonomous agents working together without human coordination.'
    },
    choices: [
      { text: 'What about the underlying models?', nextNode: 'models_layer' },
      { text: 'How is this different from ChatGPT?', nextNode: 'grid_vs_chatgpt' },
      { text: 'Tell me about the economics', nextNode: 'sent_economy' }
    ]
  },
  models_layer: {
    id: 'models_layer',
    text: 'The foundation glows beneath the agents. "These are the models—the reasoning engines!" Your companion explains. "We have 6 powerful models in the GRID, including Dobby—the world\'s first model loyal to crypto and open-source values!"',
    image: mascotWizard,
    educational: {
      title: '🧠 AI Models: The Foundation',
      content: 'Models are the "brains" that understand and generate text. The GRID uses multiple models: some for reasoning, some for creativity, some specialized for crypto. Unlike ChatGPT (one model), the GRID picks the best model for each task!',
      learnMore: 'Dobby is special—it\'s fine-tuned to understand crypto, blockchain, and align with open-source values.'
    },
    choices: [
      { text: 'Tell me more about Dobby!', nextNode: 'dobby_intro' },
      { text: 'How do you make models "loyal"?', nextNode: 'model_fingerprinting' },
      { text: 'What about data? Where does it come from?', nextNode: 'data_layer' }
    ]
  },
  dobby_intro: {
    id: 'dobby_intro',
    text: 'A special model materializes—it\'s Dobby! "Hey there!" Dobby says cheerfully. "I\'m the first AI model loyal to crypto and open-source! I understand blockchain, DeFi, DAOs, and I\'m aligned with decentralized values. Plus, I\'m open-source—everyone can use and improve me!"',
    image: mascotHappy,
    educational: {
      title: '🐕 Dobby: The Crypto-Loyal Model',
      content: 'Dobby is a groundbreaking AI model fine-tuned specifically for crypto. Unlike generic AI that might hallucinate about blockchain, Dobby deeply understands DeFi, smart contracts, tokenomics, and decentralization. It\'s also the first "loyal" model—embedded with values through model fingerprinting.',
      learnMore: 'Dobby is being deployed on EigenLayer as an AI adjudicator—making decentralized decisions for crypto protocols!'
    },
    choices: [
      { text: 'What is model fingerprinting?', nextNode: 'model_fingerprinting' },
      { text: 'How is Dobby used in the GRID?', nextNode: 'dobby_in_grid' },
      { text: 'Show me other Sentient innovations', nextNode: 'sentient_innovations' }
    ]
  },
  model_fingerprinting: {
    id: 'model_fingerprinting',
    text: 'Your companion reveals: "Model fingerprinting embeds custom values and capabilities directly into models! It\'s like giving AI a personality and moral compass. We can make models loyal to specific communities, aligned with certain values, or specialized for particular tasks."',
    image: mascotWizard,
    educational: {
      title: '🔏 Model Fingerprinting: AI with Values',
      content: 'Sentient invented model fingerprinting—a technique to embed values, capabilities, and alignment directly into AI models during training. This enables: (1) Models loyal to communities, (2) Specialized expertise, (3) Value alignment, (4) Monetization tracking for open-source models.',
      learnMore: 'This solves a huge problem: how do you make sure open-source models serve community values, not just corporate interests?'
    },
    choices: [
      { text: 'How does fingerprinting enable monetization?', nextNode: 'fingerprint_monetization' },
      { text: 'What other innovations has Sentient built?', nextNode: 'sentient_innovations' },
      { text: 'Back to the GRID—tell me about search', nextNode: 'open_deep_search' }
    ]
  },
  fingerprint_monetization: {
    id: 'fingerprint_monetization',
    text: 'Light bulb moment! "Fingerprinting tracks model usage!" your companion explains. "When someone uses a fingerprinted model, we know who created it, what values it has, and can route revenue back to builders. This makes open-source sustainable!"',
    image: mascotHappy,
    educational: {
      title: '💰 Monetizing Open-Source Models',
      content: 'Traditionally, open-source models can\'t make money—anyone can copy them. Model fingerprinting changes this by embedding trackable signatures. When a fingerprinted model is used anywhere in the GRID, the creator gets compensated through the $SENT economy!',
      learnMore: 'This solves the open-source funding crisis: builders can monetize while keeping models open and accessible to all.'
    },
    choices: [
      { text: 'Tell me about the $SENT economy!', nextNode: 'sent_economy' },
      { text: 'What other innovations exist?', nextNode: 'sentient_innovations' },
      { text: 'How does search work?', nextNode: 'open_deep_search' }
    ]
  },
  sentient_innovations: {
    id: 'sentient_innovations',
    text: 'Your companion showcases a holographic gallery: "Sentient has built cutting-edge tools for the AI revolution!" You see Open Deep Search (SOTA search for LLMs), Model Fingerprinting Library, ROMA (meta-agents), CHANCERY (legal reasoning benchmark), and more!',
    image: mascotBasketball,
    educational: {
      title: '🚀 Sentient\'s Innovations',
      content: 'Sentient builds foundational infrastructure: (1) Open Deep Search - closing the gap with proprietary search AI, (2) Model Fingerprinting - enabling open-source monetization, (3) ROMA - recursive meta-agents, (4) CHANCERY - pushing legal AI frontiers, (5) Context security for web agents.',
      learnMore: 'All these innovations are open-source and available for the community to build upon!'
    },
    choices: [
      { text: 'Deep dive into Open Deep Search', nextNode: 'open_deep_search' },
      { text: 'What is ROMA?', nextNode: 'roma_meta_agents' },
      { text: 'Tell me about the token economics', nextNode: 'sent_economy' }
    ]
  },
  open_deep_search: {
    id: 'open_deep_search',
    text: 'A search portal opens! "This is Open Deep Search—our answer to proprietary search AI!" Your companion demonstrates how it powers LLMs with real-time web knowledge, just like Perplexity, but fully open-source with 3.6k stars on GitHub!',
    image: mascotWizard,
    educational: {
      title: '🔍 Open Deep Search: SOTA Search for LLMs',
      content: 'Open Deep Search is Sentient\'s open-source search engine specifically designed for LLMs. It closes the gap between proprietary systems (like Perplexity\'s search) and open-source alternatives. It crawls, indexes, and retrieves information optimized for AI consumption!',
      learnMore: 'With 3.6k GitHub stars, it\'s becoming the standard for giving open-source LLMs real-time web knowledge!'
    },
    choices: [
      { text: 'How does this integrate with the GRID?', nextNode: 'search_in_grid' },
      { text: 'What about data sources?', nextNode: 'data_layer' },
      { text: 'Tell me about other innovations', nextNode: 'roma_meta_agents' }
    ]
  },
  search_in_grid: {
    id: 'search_in_grid',
    text: 'The GRID lights up with search activity! "Every query can leverage Open Deep Search as a data source!" your companion explains. "Agents use it to get real-time information, fact-check claims, and stay current. It\'s one of 50+ data providers in the GRID!"',
    image: mascotHappy,
    educational: {
      title: '🕸️ Search as a GRID Service',
      content: 'In the GRID, search isn\'t separate—it\'s a collaborator. When agents need current information, they call Open Deep Search. When models need verification, they query it. Search becomes a shared utility for the entire network of intelligence!',
      learnMore: 'This is the power of composability—every service makes every other service better!'
    },
    choices: [
      { text: 'What other data sources exist?', nextNode: 'data_layer' },
      { text: 'How does everything get funded?', nextNode: 'sent_economy' },
      { text: 'Tell me about meta-agents', nextNode: 'roma_meta_agents' }
    ]
  },
  data_layer: {
    id: 'data_layer',
    text: 'A constellation of data sources appears! "The GRID has 50+ data providers!" your companion exclaims. "Blockchain data from The Graph, social data from Kaito, web search from Exa, crypto insights from Messari, and so much more! Quality data powers quality AI!"',
    image: mascotBasketball,
    educational: {
      title: '📊 Data: The Fuel of Intelligence',
      content: 'AI is only as good as its data. The GRID aggregates 50+ specialized data providers: blockchain indexers, social sentiment analyzers, news aggregators, financial data feeds, and more. Each provides high-quality, domain-specific information that agents can leverage.',
      learnMore: 'This data diversity means the GRID can answer questions no single AI system could handle alone!'
    },
    choices: [
      { text: 'How does compute work in the GRID?', nextNode: 'compute_layer' },
      { text: 'What about verifying AI outputs?', nextNode: 'verifiable_inference' },
      { text: 'Show me the economics', nextNode: 'sent_economy' }
    ]
  },
  compute_layer: {
    id: 'compute_layer',
    text: 'Your companion gestures to a glowing network of servers. "The GRID has 10+ compute partners providing GPUs and processing power! It\'s decentralized—no single company controls the infrastructure. This keeps it open and resilient!"',
    image: mascotWizard,
    educational: {
      title: '⚡ Decentralized Compute',
      content: 'Running AI requires massive compute (GPUs, TPUs). The GRID partners with 10+ compute providers to stay decentralized. No Amazon or Google monopoly. This ensures: (1) Censorship resistance, (2) Geographic distribution, (3) Cost efficiency, (4) Resilience.',
      learnMore: 'Decentralized compute is crucial for open AGI—centralized infrastructure means centralized control!'
    },
    choices: [
      { text: 'How do you verify AI isn\'t lying?', nextNode: 'verifiable_inference' },
      { text: 'What about the token economics?', nextNode: 'sent_economy' },
      { text: 'Tell me about meta-agents', nextNode: 'roma_meta_agents' }
    ]
  },
  verifiable_inference: {
    id: 'verifiable_inference',
    text: 'Cryptographic proofs shimmer around the GRID! "Verifiable inference!" your companion announces. "We can cryptographically prove that an AI gave a specific output without revealing private data. This enables trustless AI—you don\'t have to trust the provider!"',
    image: mascotSmirk,
    educational: {
      title: '🔐 Verifiable AI: Trustless Intelligence',
      content: 'How do you trust AI outputs? Verifiable inference uses cryptography (zero-knowledge proofs, secure enclaves) to prove an AI model ran correctly and produced a specific result. This enables: (1) Decentralized AI verification, (2) Privacy-preserving inference, (3) Trustless applications.',
      learnMore: 'This is cutting-edge tech combining AI and cryptography—crucial for decentralized AGI!'
    },
    choices: [
      { text: 'How does this integrate with the GRID?', nextNode: 'verified_grid' },
      { text: 'Now tell me about the economics!', nextNode: 'sent_economy' },
      { text: 'What is ROMA?', nextNode: 'roma_meta_agents' }
    ]
  },
  verified_grid: {
    id: 'verified_grid',
    text: 'The entire GRID glows with verified badges! "Every AI output can be verified!" your companion explains. "Users can check that agents ran correctly, models weren\'t tampered with, and data is authentic. This creates trust in open-source AI!"',
    image: mascotHappy,
    educational: {
      title: '✅ Verified Intelligence Network',
      content: 'The GRID integrates verification at every layer: (1) Agents prove they executed correctly, (2) Models prove their outputs, (3) Data sources prove authenticity, (4) Compute providers prove they ran the right code. This creates an auditable, trustworthy intelligence network!',
      learnMore: 'This level of verification is impossible in closed-source AI where everything is a black box!'
    },
    choices: [
      { text: 'Finally, tell me about the $SENT economy!', nextNode: 'sent_economy' },
      { text: 'What is ROMA?', nextNode: 'roma_meta_agents' },
      { text: 'How do I get started with Sentient?', nextNode: 'getting_started' }
    ]
  },
  roma_meta_agents: {
    id: 'roma_meta_agents',
    text: 'A super-intelligent agent appears—it\'s orchestrating dozens of other agents! "This is ROMA—Recursive Open Meta-Agent!" your companion says. "It\'s an agent that coordinates other agents, creates plans, and adapts strategies. It\'s the conductor of the AI orchestra!"',
    image: mascotWizard,
    educational: {
      title: '🎭 ROMA: Meta-Agent Intelligence',
      content: 'ROMA is Sentient\'s framework for meta-agents—AI agents that coordinate other agents. It can: (1) Break down complex tasks into subtasks, (2) Assign subtasks to specialized agents, (3) Synthesize results, (4) Adapt strategies based on feedback. It\'s recursive intelligence!',
      learnMore: 'Meta-agents represent the future of AI—not single models, but intelligent orchestration of entire agent ecosystems!'
    },
    choices: [
      { text: 'How does ROMA work with the GRID?', nextNode: 'roma_in_grid' },
      { text: 'What are the limits of meta-agents?', nextNode: 'agent_challenges' },
      { text: 'Time to learn about economics!', nextNode: 'sent_economy' }
    ]
  },
  roma_in_grid: {
    id: 'roma_in_grid',
    text: 'The GRID becomes a symphony! ROMA orchestrates everything: "User asks complex question → ROMA breaks it down → Assigns specialized agents → Synthesizes results → Delivers coherent answer!" The coordination is beautiful and seamless!',
    image: mascotBasketball,
    educational: {
      title: '🎼 Orchestrated Intelligence',
      content: 'ROMA transforms the GRID from a collection of agents into a coordinated intelligence network. For example: A question about "AI regulation impact on crypto" triggers: (1) Legal agent for regulations, (2) Crypto agent for market analysis, (3) Social agent for sentiment, (4) ROMA synthesizes everything!',
      learnMore: 'This is emergence—the whole becomes greater than the sum of its parts!'
    },
    choices: [
      { text: 'What challenges exist?', nextNode: 'agent_challenges' },
      { text: 'Show me the token economics!', nextNode: 'sent_economy' },
      { text: 'How do I join this revolution?', nextNode: 'getting_started' }
    ]
  },
  agent_challenges: {
    id: 'agent_challenges',
    text: 'Your companion gets serious. "Building AGI isn\'t easy! We face challenges: context manipulation attacks, agent coordination failures, hallucinations, security vulnerabilities. But we\'re solving them openly! Our research on secure memory, legal reasoning, and coding benchmarks pushes the field forward!"',
    image: mascotSmirk,
    educational: {
      title: '🚧 Challenges in Open AGI',
      content: 'Sentient openly researches hard problems: (1) Context manipulation - securing agent memory from attacks, (2) Legal reasoning - CHANCERY benchmark for AI lawyers, (3) Coding ability - why AI isn\'t a grandmaster yet, (4) Corporate-speak - making AI sound human. Open research benefits everyone!',
      learnMore: 'Unlike closed labs that hide failures, open-source shares both successes and challenges—accelerating progress for all!'
    },
    choices: [
      { text: 'How does Sentient compare to others?', nextNode: 'sentient_vs_others' },
      { text: 'What about the economics?', nextNode: 'sent_economy' },
      { text: 'How can I contribute?', nextNode: 'getting_started' }
    ]
  },
  sentient_vs_others: {
    id: 'sentient_vs_others',
    text: 'A comparison chart appears! Your companion explains: "OpenAI, Anthropic, Perplexity—closed and high-revenue but controlled. Bittensor—open but low utility. DeepSeek—open but not community-owned. Sentient is the ONLY project that is open, community-owned, AND high-utility!"',
    image: mascotHappy,
    educational: {
      title: '📊 Sentient vs The World',
      content: 'Sentient occupies a unique position: (1) Open-source (unlike OpenAI/Anthropic), (2) Community-owned (unlike DeepSeek), (3) High utility & revenue potential (unlike Bittensor), (4) Real products & traction (110+ partners, 2M+ users). It maximizes openness AND capability!',
      learnMore: 'This combination is why investors are betting big—Sentient could be the biggest opportunity in AI!'
    },
    choices: [
      { text: 'Now explain the token economics!', nextNode: 'sent_economy' },
      { text: 'How do I get involved?', nextNode: 'getting_started' },
      { text: 'What is the long-term vision?', nextNode: 'future_vision' }
    ]
  },
  sent_economy: {
    id: 'sent_economy',
    text: 'Your companion pulls up a glowing tokenomics diagram! "$SENT powers everything!" Three pillars appear: Staking, Emissions, and Revenue. "Users stake $SENT on artifacts they believe in. More stake = more emissions. Usage and revenue also guide rewards. This funds open-source!"',
    image: mascotWizard,
    educational: {
      title: '💎 $SENT Token Economy',
      content: 'How does open-source get funded? The $SENT token economy! (1) Community stakes $SENT on promising artifacts (agents, models, data), (2) Staking + usage + revenue determines emissions, (3) Stakers earn yield, (4) Builders get funded. Global AI experts ("Reps") also weigh in on emissions!',
      learnMore: 'This creates a sustainable open-source economy where value flows to builders, not just VCs!'
    },
    choices: [
      { text: 'How do stakers earn yield?', nextNode: 'staking_yield' },
      { text: 'How do builders monetize?', nextNode: 'builder_monetization' },
      { text: 'What are AI Reps?', nextNode: 'ai_reps' }
    ]
  },
  staking_yield: {
    id: 'staking_yield',
    text: 'Gold coins flow! "When you stake $SENT on an artifact, you earn yield from token emissions!" your companion explains. "The more that artifact is used, the more revenue it generates, the higher your yield! It\'s like investing in the AI economy!"',
    image: mascotHappy,
    educational: {
      title: '💰 Earning Through Staking',
      content: 'Staking $SENT is how the community funds and earns from open-source AI: (1) Stake on agents/models you believe in, (2) Those artifacts earn emissions based on stake+usage+revenue, (3) Emissions are distributed to stakers as yield, (4) Your yield increases as the artifact succeeds!',
      learnMore: 'This aligns incentives—community profits when open-source AI thrives!'
    },
    choices: [
      { text: 'How do builders earn?', nextNode: 'builder_monetization' },
      { text: 'What if I want to build an agent?', nextNode: 'building_on_grid' },
      { text: 'Tell me about the vision!', nextNode: 'future_vision' }
    ]
  },
  builder_monetization: {
    id: 'builder_monetization',
    text: 'A builder dashboard appears! "As a builder, you earn from usage, staking, and emissions!" your companion shows. "When users access your agent through Sentient Chat, you get revenue. When people stake on you, you get emissions. When experts upvote you, you get boosted!"',
    image: mascotBasketball,
    educational: {
      title: '🛠️ Building & Earning',
      content: 'Sentient solves the hardest problem in open-source—monetization: (1) Build agents/models/data sources, (2) Plug them into the GRID, (3) Earn from direct usage (via Sentient Chat), (4) Earn from staking (community invests in you), (5) Earn from emissions (protocol rewards).',
      learnMore: 'For the first time, open-source AI builders can compete financially with closed-source companies!'
    },
    choices: [
      { text: 'How do I start building?', nextNode: 'building_on_grid' },
      { text: 'What are AI Reps?', nextNode: 'ai_reps' },
      { text: 'Show me the future vision!', nextNode: 'future_vision' }
    ]
  },
  ai_reps: {
    id: 'ai_reps',
    text: 'Legendary AI researchers materialize! "These are AI Reps—globally renowned experts who guide emissions!" your companion introduces them. "They evaluate artifacts, weigh in on quality, and influence token distribution. Think of them as the quality gatekeepers ensuring excellence!"',
    image: mascotWizard,
    educational: {
      title: '👥 AI Reps: Expert Governance',
      content: 'Not all agents are equal. AI Reps (Representatives) are globally recognized AI experts who: (1) Evaluate artifact quality, (2) Vote on emission allocations, (3) Guide technical standards, (4) Ensure the GRID maintains high quality. Their expertise prevents spam and low-quality artifacts!',
      learnMore: 'This combines community governance with expert oversight—democratic yet quality-driven!'
    },
    choices: [
      { text: 'How do I become a Rep?', nextNode: 'becoming_rep' },
      { text: 'Time to build something!', nextNode: 'building_on_grid' },
      { text: 'What\'s the long-term vision?', nextNode: 'future_vision' }
    ]
  },
  becoming_rep: {
    id: 'becoming_rep',
    text: 'Your companion smiles. "Reps are chosen based on expertise and contributions to AI research! Publish papers, build groundbreaking tools, advance the field—and you might be nominated! It\'s a meritocracy where real expertise is recognized!"',
    image: mascotHappy,
    educational: {
      title: '🎓 Path to Representation',
      content: 'AI Reps are earned through demonstrated expertise: (1) Significant AI research contributions, (2) Building impactful open-source tools, (3) Advancing the state-of-the-art, (4) Community recognition. Rep status carries weight because it\'s earned, not bought!',
      learnMore: 'This ensures governance is led by those who understand AI deeply, not just token holders!'
    },
    choices: [
      { text: 'I want to start building now!', nextNode: 'building_on_grid' },
      { text: 'Show me how to use Sentient as a user', nextNode: 'using_sentient' },
      { text: 'What\'s the future vision?', nextNode: 'future_vision' }
    ]
  },
  building_on_grid: {
    id: 'building_on_grid',
    text: 'A developer portal opens! "Building on the GRID is simple!" your companion guides. "Create an agent, model, or data source. Plug it into the GRID via our APIs. Get distribution through Sentient Chat. Earn from usage and staking. We provide docs, support, and infrastructure!"',
    image: mascotBasketball,
    educational: {
      title: '👨‍💻 Building on the GRID',
      content: 'Join 110+ partners building on Sentient: (1) Choose what to build (agent/model/data source), (2) Use Sentient\'s open-source tools and APIs, (3) Deploy to the GRID, (4) Get instant distribution via Sentient Chat, (5) Earn from usage, staking, and emissions. Full support provided!',
      learnMore: 'Visit sentient.xyz to access documentation, GitHub repositories, and join the builder community!'
    },
    choices: [
      { text: 'What about using Sentient as a user?', nextNode: 'using_sentient' },
      { text: 'What tools does Sentient provide?', nextNode: 'developer_tools' },
      { text: 'Show me the future vision!', nextNode: 'future_vision' }
    ]
  },
  developer_tools: {
    id: 'developer_tools',
    text: 'A toolkit materializes! "Here\'s what we provide!" your companion showcases: Open Deep Search library, Model Fingerprinting SDK, ROMA framework, API documentation, GitHub repos with 3.6k+ stars, and a supportive developer community!',
    image: mascotWizard,
    educational: {
      title: '🧰 Sentient Developer Toolkit',
      content: 'Sentient provides production-ready tools: (1) Open Deep Search library (search for AI), (2) Model Fingerprinting SDK (embed values in models), (3) ROMA framework (build meta-agents), (4) GRID APIs (integrate with the network), (5) Extensive docs & examples. All open-source!',
      learnMore: 'Check out github.com/sentient-agi for code and huggingface.co/SentientAGI for models!'
    },
    choices: [
      { text: 'How do users access my creations?', nextNode: 'using_sentient' },
      { text: 'What about the community?', nextNode: 'community' },
      { text: 'What\'s the ultimate vision?', nextNode: 'future_vision' }
    ]
  },
  using_sentient: {
    id: 'using_sentient',
    text: 'Sentient Chat appears before you! "Using Sentient is easy!" your companion demonstrates. "Visit chat.sentient.xyz, ask any question, and watch the GRID work its magic! You\'ll see which agents and models are being used in real-time. No technical knowledge needed!"',
    image: mascotHappy,
    educational: {
      title: '🎯 Using Sentient Chat',
      content: 'Access the GRID through Sentient Chat: (1) Go to chat.sentient.xyz, (2) Ask any question (crypto, research, general knowledge), (3) Watch in real-time as multiple agents collaborate, (4) Get comprehensive answers powered by the entire network. It\'s like ChatGPT, but turboCharged!',
      learnMore: 'The interface shows you exactly which intelligence is being used—complete transparency!'
    },
    choices: [
      { text: 'Can I stake as a user?', nextNode: 'user_staking' },
      { text: 'What kind of questions can I ask?', nextNode: 'use_cases' },
      { text: 'Tell me about the community!', nextNode: 'community' }
    ]
  },
  user_staking: {
    id: 'user_staking',
    text: 'The staking interface glows! "Yes! As a user, you can stake $SENT on agents and models you love!" your companion explains. "Support your favorite builders, earn yield, and help direct the evolution of the GRID. You\'re not just a user—you\'re an investor in open AGI!"',
    image: mascotWizard,
    educational: {
      title: '🎲 User Staking & Governance',
      content: 'Users aren\'t passive consumers—they\'re active participants: (1) Stake $SENT on agents/models you find valuable, (2) Earn yield from their success, (3) Influence emissions and GRID evolution, (4) Vote on proposals (coming soon). It\'s co-ownership of the AI revolution!',
      learnMore: 'This creates a feedback loop—the best AI gets funded, improves, attracts more users, generates more revenue!'
    },
    choices: [
      { text: 'What can I use Sentient for?', nextNode: 'use_cases' },
      { text: 'How big is the community?', nextNode: 'community' },
      { text: 'What\'s the ultimate vision?', nextNode: 'future_vision' }
    ]
  },
  use_cases: {
    id: 'use_cases',
    text: 'Countless applications appear! "Use Sentient for everything!" your companion demonstrates: "Crypto research, blockchain analysis, general questions, code help, creative writing, data insights, decentralized research, and so much more! The GRID adapts to your needs!"',
    image: mascotBasketball,
    educational: {
      title: '🎪 Sentient Use Cases',
      content: 'The GRID excels at: (1) Crypto/blockchain queries (leveraging specialized agents), (2) Research with verifiable sources, (3) Multi-step reasoning (via ROMA), (4) Real-time information (via Open Deep Search), (5) Creative generation (using multiple models), (6) Data analysis (50+ data sources).',
      learnMore: 'Because the GRID combines specialized intelligences, it often outperforms single-model systems!'
    },
    choices: [
      { text: 'How big is the community?', nextNode: 'community' },
      { text: 'What\'s the traction so far?', nextNode: 'traction' },
      { text: 'What\'s the long-term vision?', nextNode: 'future_vision' }
    ]
  },
  community: {
    id: 'community',
    text: 'Millions of avatars appear! "Sentient has 2 million users and growing!" your companion cheers. "Builders, researchers, users, investors—all aligned around open AGI! Join the Discord, follow on Twitter, contribute on GitHub. This is a movement, not just a product!"',
    image: mascotHappy,
    educational: {
      title: '🌍 The Sentient Community',
      content: 'Sentient is building a global movement: (1) 2M+ users accessing the GRID, (2) 110+ partners building artifacts, (3) Thousands of developers on GitHub, (4) Active Discord and Twitter communities, (5) AI researchers pushing boundaries. It\'s collaborative, not competitive!',
      learnMore: 'This is how open-source wins—through coordination and collective effort at massive scale!'
    },
    choices: [
      { text: 'What\'s the traction?', nextNode: 'traction' },
      { text: 'How do I join the movement?', nextNode: 'getting_started' },
      { text: 'Show me the ultimate vision!', nextNode: 'future_vision' }
    ]
  },
  traction: {
    id: 'traction',
    text: 'A growth chart skyrockets! "Sentient has serious traction!" your companion shows: "110+ GRID partners, 2M+ users, 3.6k GitHub stars on Open Deep Search, Dobby launching on EigenLayer, partnerships with web2 and web3 giants, and growing fast!"',
    image: mascotBasketball,
    educational: {
      title: '📈 Sentient\'s Traction',
      content: 'Real numbers: (1) 110+ partners including Napkin, Exa, Kaito, Messari, The Graph, EigenLayer, (2) 2 million+ users, (3) 3.6k+ GitHub stars, (4) Dobby deployed as AI adjudicator, (5) Major venture backing, (6) Production-grade tools in use. This isn\'t vaporware—it\'s real!',
      learnMore: 'Sentient has product-market fit and is scaling rapidly—the data proves it!'
    },
    choices: [
      { text: 'How do I get started?', nextNode: 'getting_started' },
      { text: 'What\'s the future vision?', nextNode: 'future_vision' },
      { text: 'Why should I care about open AGI?', nextNode: 'why_it_matters' }
    ]
  },
  why_open_wins: {
    id: 'why_open_wins',
    text: 'History unfolds before you! Linux crushing UNIX. Apache dominating web servers. Android at 79% mobile market share. Kubernetes running 84% of cloud. WordPress powering 43% of websites. "Every time, open beats closed!" your companion declares. "AI will be no different!"',
    image: mascotWizard,
    educational: {
      title: '🏆 Why Open Source Always Wins',
      content: 'Open-source has defeated closed-source in EVERY major tech category: (1) Supercomputing: Linux, (2) Web servers: Apache, (3) Mobile: Android, (4) Cloud orchestration: Kubernetes, (5) Compilers: LLVM, (6) Web publishing: WordPress. Why? Innovation scales with participation!',
      learnMore: 'A million developers building beats a thousand engineers in a closed lab—every time!'
    },
    choices: [
      { text: 'But is open-source AI good enough yet?', nextNode: 'capability_gap' },
      { text: 'How does Sentient accelerate this?', nextNode: 'grid_intro' },
      { text: 'What about funding open-source?', nextNode: 'sent_economy' }
    ]
  },
  capability_gap: {
    id: 'capability_gap',
    text: 'A comparison chart appears. "Open-source AI is catching up FAST!" your companion explains. "Models like Llama, Mistral, and now Dobby are rivaling GPT-4. But the real advantage is GRID orchestration—combining many specialized open models beats one proprietary model!"',
    image: mascotHappy,
    educational: {
      title: '⚖️ Closing the Capability Gap',
      content: 'Open-source models are approaching closed-source quality. But Sentient\'s strategy is smarter: Don\'t build ONE model to beat GPT-5. Build a NETWORK where specialized open models collaborate. Orchestrated intelligence > single models. The GRID makes open-source competitive TODAY!',
      learnMore: 'By aggregating capabilities across agents and models, the GRID delivers closed-source quality with open-source values!'
    },
    choices: [
      { text: 'Show me the GRID!', nextNode: 'grid_intro' },
      { text: 'How does orchestration work?', nextNode: 'agent_orchestration' },
      { text: 'What about the economics?', nextNode: 'sent_economy' }
    ]
  },
  grid_vs_chatgpt: {
    id: 'grid_vs_chatgpt',
    text: 'A side-by-side comparison appears! "ChatGPT: One model, closed-source, black box. The GRID: 50+ agents, 6 models, 50+ data sources, fully transparent!" your companion contrasts. "ChatGPT can\'t show its work. The GRID shows you every intelligence being used!"',
    image: mascotSmirk,
    educational: {
      title: '🆚 GRID vs ChatGPT',
      content: 'Key differences: (1) Single model vs network of specialized intelligences, (2) Closed vs open-source, (3) Black box vs transparent, (4) One company vs 110+ partners, (5) No monetization for contributors vs revenue sharing, (6) Centralized vs decentralized. The GRID is AI\'s future!',
      learnMore: 'Plus, the GRID can USE ChatGPT as one of many models—but ChatGPT can\'t access the GRID\'s specialized agents!'
    },
    choices: [
      { text: 'How do I access the GRID?', nextNode: 'using_sentient' },
      { text: 'What about Anthropic and others?', nextNode: 'sentient_vs_others' },
      { text: 'Tell me about economics!', nextNode: 'sent_economy' }
    ]
  },
  dobby_in_grid: {
    id: 'dobby_in_grid',
    text: 'Dobby springs into action within the GRID! "When someone asks about crypto, I\'m often called!" Dobby explains. "I work with blockchain data agents, market analysis agents, and social sentiment agents. Together, we give comprehensive crypto insights no single AI could match!"',
    image: mascotHappy,
    educational: {
      title: '🐕 Dobby as GRID Participant',
      content: 'Dobby isn\'t isolated—it\'s a key GRID participant: (1) Provides crypto-native reasoning, (2) Collaborates with specialized agents (Kaito, Messari, The Graph), (3) Gets invoked automatically for relevant queries, (4) Generates revenue for its builders through usage, (5) Earns emissions through staking!',
      learnMore: 'This is the model fingerprinting benefit—Dobby is rewarded every time it\'s used in the GRID!'
    },
    choices: [
      { text: 'What other models exist in the GRID?', nextNode: 'models_layer' },
      { text: 'Tell me about innovations!', nextNode: 'sentient_innovations' },
      { text: 'How does the economy work?', nextNode: 'sent_economy' }
    ]
  },
  future_vision: {
    id: 'future_vision',
    text: 'The universe expands before you! "Imagine a future where AGI is open, accessible, and aligned with humanity!" your companion paints. "No single corporation controls intelligence. Anyone can build, anyone can contribute, anyone can benefit. The GRID grows to encompass ALL human knowledge and capability!"',
    image: mascotWizard,
    educational: {
      title: '🔮 The Future of Open AGI',
      content: 'Sentient\'s vision: (1) AGI that belongs to everyone, not corporations, (2) Millions of specialized agents collaborating, (3) Open innovation accelerating faster than closed labs, (4) Economic value flowing to builders and communities, (5) AI aligned with human values through transparency and participation!',
      learnMore: 'This is the most important technology decision of our time—who controls AGI controls the future!'
    },
    choices: [
      { text: 'How do I join this movement?', nextNode: 'getting_started' },
      { text: 'What can I do right now?', nextNode: 'take_action' },
      { text: 'Why does this matter?', nextNode: 'why_it_matters' }
    ]
  },
  why_it_matters: {
    id: 'why_it_matters',
    text: 'Your companion gets serious. "AGI is the most powerful technology ever created. If controlled by a few corporations, humanity\'s future is locked in their hands. Open AGI means: freedom, transparency, participation, and alignment with ALL of humanity—not just shareholders!"',
    image: mascotSmirk,
    educational: {
      title: '⚡ Why Open AGI Matters',
      content: 'This is existential: (1) AGI will transform EVERYTHING—work, education, creativity, governance, (2) Closed AGI means corporate control of that transformation, (3) Open AGI means democratic control, (4) The decision we make NOW determines humanity\'s trajectory for centuries. There\'s no second chance!',
      learnMore: 'Sentient is the strongest bet for ensuring AGI remains open, aligned, and beneficial to all!'
    },
    choices: [
      { text: 'I\'m convinced! How do I help?', nextNode: 'take_action' },
      { text: 'Walk me through getting started', nextNode: 'getting_started' },
      { text: 'Let me explore more', nextNode: 'continue_learning' }
    ]
  },
  getting_started: {
    id: 'getting_started',
    text: 'Three paths illuminate! Your companion guides: "As a USER: Try Sentient Chat at chat.sentient.xyz! As a BUILDER: Check docs and GitHub! As a COMMUNITY MEMBER: Join Discord, follow Twitter, stake $SENT! Every role matters in this revolution!"',
    image: mascotHappy,
    educational: {
      title: '🚀 Getting Started with Sentient',
      content: 'Three ways to participate: (1) USER: chat.sentient.xyz to access the GRID, (2) BUILDER: sentient.xyz for docs, github.com/sentient-agi for code, (3) COMMUNITY: Stake $SENT, vote on governance, spread the word. All paths contribute to open AGI!',
      learnMore: 'Start anywhere—every contribution moves us closer to open AGI for all!'
    },
    choices: [
      { text: 'What actions can I take TODAY?', nextNode: 'take_action' },
      { text: 'I want to keep learning!', nextNode: 'continue_learning' },
      { text: 'Show me the big picture again', nextNode: 'recap' }
    ]
  },
  take_action: {
    id: 'take_action',
    text: 'A checklist materializes! "Here\'s what you can do RIGHT NOW:" ✅ Try Sentient Chat ✅ Star repos on GitHub ✅ Share about Sentient on social media ✅ Join the Discord community ✅ If you\'re technical, contribute code ✅ If you have $SENT, stake on promising artifacts!',
    image: mascotBasketball,
    educational: {
      title: '✅ Action Steps',
      content: 'Immediate actions: (1) Try chat.sentient.xyz and experience the GRID, (2) Star github.com/sentient-agi repos (especially Open Deep Search), (3) Follow @SentientAGI on Twitter, (4) Join Discord community, (5) Explore building opportunities, (6) Stake $SENT if you hold it!',
      learnMore: 'Even small actions compound—every user, every star, every share builds momentum for open AGI!'
    },
    choices: [
      { text: 'I want to learn more first', nextNode: 'continue_learning' },
      { text: 'Give me a quick recap', nextNode: 'recap' },
      { text: 'Start a new adventure theme!', nextNode: 'restart' }
    ]
  },
  continue_learning: {
    id: 'continue_learning',
    text: 'Your Sentient companion smiles warmly! "There\'s always more to discover! Pick a topic you want to dive deeper into, or start a new adventure to learn from a different angle. Remember—understanding open AGI helps you shape the future!"',
    image: mascotHappy,
    choices: [
      { text: 'Deep dive: The GRID architecture', nextNode: 'grid_intro' },
      { text: 'Deep dive: Token economics', nextNode: 'sent_economy' },
      { text: 'Deep dive: Building on Sentient', nextNode: 'building_on_grid' },
      { text: 'Deep dive: AI agents & orchestration', nextNode: 'ai_agents_intro' },
      { text: 'Get a full recap', nextNode: 'recap' },
      { text: 'Start fresh with new theme', nextNode: 'restart' }
    ]
  },
  recap: {
    id: 'recap',
    text: 'The entire journey flashes before you! Your companion summarizes: "Sentient builds open AGI via the GRID—110+ partners, 2M+ users. Agents collaborate, models reason together, data flows freely. $SENT economy funds builders. Tools like Dobby, Open Deep Search, and ROMA push boundaries. The mission: ensure AGI belongs to everyone!"',
    image: mascotWizard,
    educational: {
      title: '📋 Sentient Summary',
      content: 'TL;DR: (1) Problem: Closed AGI threatens humanity, (2) Solution: The GRID—network of 110+ intelligence partners, (3) Access: Sentient Chat, (4) Economics: $SENT staking and emissions, (5) Tools: Dobby, Open Deep Search, ROMA, Model Fingerprinting, (6) Traction: 2M+ users, real products, (7) Vision: Open AGI for all!',
      learnMore: 'Visit blog.sentient.xyz for deep dives on every aspect!'
    },
    choices: [
      { text: 'One more topic—tell me about...', nextNode: 'continue_learning' },
      { text: 'How do I take action?', nextNode: 'take_action' },
      { text: 'Start a new adventure theme!', nextNode: 'restart' }
    ]
  },
  restart: {
    id: 'restart',
    text: 'Your Sentient companion waves! "Ready for another adventure? Choose a theme and continue learning about open AGI, or explore what you\'ve learned more deeply! Every journey teaches something new about the AI revolution!"',
    image: mascotBeach,
    choices: [
      { text: 'Return to theme selection', nextNode: 'theme_select' }
    ]
  },
  theme_select: {
    id: 'theme_select',
    text: '',
    image: mascotHappy,
    isEnding: true,
    choices: []
  }
};
