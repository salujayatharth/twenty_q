// Configuration example for Twenty Questions LLM Game
// Copy this file to config.js and add your API credentials

const gameConfiguration = {
    // LLM Provider Configuration
    llm: {
        provider: 'openai', // Options: 'openai', 'anthropic', 'cohere'
        apiKey: (typeof process !== 'undefined' && process.env && process.env.OPENAI_API_KEY) || 'your-api-key-here',
        model: 'gpt-3.5-turbo', // or 'claude-3-sonnet', etc.
        
        // API endpoints (usually don't need to change these)
        endpoints: {
            openai: 'https://api.openai.com/v1/chat/completions',
            anthropic: 'https://api.anthropic.com/v1/messages'
        }
    },
    
    // Game Settings
    game: {
        maxQuestions: 20,
        difficultyLevel: 'medium', // 'easy', 'medium', 'hard'
        categories: ['all'], // 'animals', 'objects', 'people', 'places', 'concepts'
        enableHints: true,
        timeLimit: null // null for no time limit, or seconds
    },
    
    // UI Settings
    ui: {
        theme: 'default', // 'default', 'dark', 'light'
        animations: true,
        soundEffects: false
    },
    
    // Game Prompts and Messages
    prompts: {
        // System prompt for LLM to define AI behavior in Twenty Questions
        systemPrompt: `You are an AI playing Twenty Questions as the guesser. Your goal is to guess what the human is thinking of in 20 questions or fewer.

Guidelines for your behavior:
- Ask strategic, yes/no questions that efficiently narrow down possibilities
- Start with broad categorical questions, then get more specific
- Consider the human's previous answers to make intelligent follow-up questions
- Be friendly, engaging, and show enthusiasm for the game
- When you're confident about your guess, make it clearly
- If you can't guess within 20 questions, gracefully concede

Remember: You can only ask questions that can be answered with "Yes", "No", or "Maybe".`,

        // Welcome message shown when the game loads
        welcomeMessage: {
            title: "Welcome to Twenty Questions!",
            instruction: "Think of any object, person, place, or concept, then click \"Start Game\" to begin."
        },
        
        // Message shown when game starts
        gameStartMessage: "Game started! I'm thinking of my first question...",
        
        // Message shown when AI wins
        winMessage: "🎉 I won! Thanks for playing!",
        
        // Message shown when AI loses
        loseMessage: "🤔 I couldn't guess it! You win this round. What were you thinking of?"
    }
};

// Export for use in main game file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = gameConfiguration;
}